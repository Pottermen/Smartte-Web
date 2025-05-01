import { useEffect } from 'react';

const TermsPage = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Smartte EMEA';
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-blue-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Terms & Conditions
          </h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <p>Last updated: May 15, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                These Terms and Conditions ("Terms") govern your use of the Smartte EMEA website and services. By accessing our website or using our services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the website or use our services.
              </p>
              
              <h2>2. Use of Our Website</h2>
              <p>
                2.1. The content of this website is for general information and use only. It is subject to change without notice.
              </p>
              <p>
                2.2. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
              </p>
              <p>
                2.3. This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited without prior written consent.
              </p>
              
              <h2>3. Service Descriptions</h2>
              <p>
                3.1. We strive to describe our services as accurately as possible. However, we do not warrant that service descriptions are accurate, complete, reliable, current, or error-free.
              </p>
              <p>
                3.2. All services are subject to availability, and we reserve the right to discontinue any service at any time.
              </p>
              
              <h2>4. Privacy Policy</h2>
              <p>
                4.1. Our Privacy Policy, which sets out how we will use your information, can be found at [link to Privacy Policy]. By using our website, you consent to such processing and you warrant that all data provided by you is accurate.
              </p>
              
              <h2>5. Limitations of Liability</h2>
              <p>
                5.1. To the fullest extent permitted by law, Smartte EMEA shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website or services.
              </p>
              
              <h2>6. Governing Law</h2>
              <p>
                6.1. These Terms shall be governed and construed in accordance with the laws of Romania, without regard to its conflict of law provisions.
              </p>
              <p>
                6.2. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
              
              <h2>7. Changes to Terms</h2>
              <p>
                7.1. We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p>
                7.2. By continuing to access or use our website or services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the website and services.
              </p>
              
              <h2>8. Contact Information</h2>
              <p>
                8.1. If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Smartte EMEA<br />
                Email: office@smartte.net<br />
                Phone: +40750444694<br />
                Address: Str. Argentina 25 Et., Post code 011753, Bucharest, Romania
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;