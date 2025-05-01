import { useState, useCallback } from 'react';
import { Shield } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

interface VerificationModalProps {
  onVerify: () => void;
}

const VerificationModal = ({ onVerify }: VerificationModalProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleCaptchaChange = useCallback(async (token: string | null) => {
    if (!token) {
      setError('Please complete the captcha verification');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // In a production environment, you would verify the token on your server
      // For demo purposes, we'll simulate a successful verification
      setTimeout(() => {
        setLoading(false);
        onVerify();
      }, 1000);
    } catch (err) {
      setLoading(false);
      setError('Verification failed. Please try again.');
    }
  }, [onVerify]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 md:p-8 animate-fade-in">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Security Verification</h2>
          <p className="text-gray-600 mt-2">
            Before proceeding to Smartte EMEA website, please complete the verification below.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={handleCaptchaChange}
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 text-center mb-4">{error}</p>
        )}

        {loading && (
          <div className="flex justify-center">
            <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}
        
        <p className="mt-6 text-xs text-gray-500 text-center">
          By verifying, you agree to our <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default VerificationModal;