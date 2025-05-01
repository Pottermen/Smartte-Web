import { useEffect, useState } from 'react';

const CookiesPage = () => {
  useEffect(() => {
    document.title = 'Manage Cookies | Smartte EMEA';
  }, []);

  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false
  });

  const handleToggle = (cookieType: keyof typeof cookiePreferences) => {
    if (cookieType === 'necessary') return; // Necessary cookies cannot be toggled
    
    setCookiePreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType]
    }));
  };

  const handleSavePreferences = () => {
    // Simulate saving cookie preferences
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Your cookie preferences have been saved.');
  };

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-blue-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Manage Cookies
          </h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                This page allows you to manage your cookie preferences for the Smartte EMEA website. We use cookies to improve your browsing experience, analyze site traffic, and personalize content.
              </p>
              
              <h2>What are cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners. Cookies can be "persistent" or "session" cookies, which remain on your device for varying periods of time.
              </p>
              
              <h2>How we use cookies</h2>
              <p>
                Smartte EMEA uses different types of cookies for different purposes:
              </p>
              <ul>
                <li><strong>Necessary cookies:</strong> These cookies are essential for the website to function properly and cannot be disabled.</li>
                <li><strong>Functional cookies:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences.</li>
                <li><strong>Analytics cookies:</strong> These cookies help us understand how visitors interact with our website, allowing us to improve our services.</li>
                <li><strong>Marketing cookies:</strong> These cookies are used to track visitors across websites to enable us to display relevant advertisements.</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cookie Preferences</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div>
                    <p className="font-medium text-gray-800">Necessary Cookies</p>
                    <p className="text-sm text-gray-600">Required for the website to function properly</p>
                  </div>
                  <div className="relative inline-block w-12 h-6 bg-gray-300 rounded-full cursor-not-allowed">
                    <span className="absolute left-1 top-1 bg-blue-600 w-4 h-4 rounded-full transition-transform"></span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div>
                    <p className="font-medium text-gray-800">Functional Cookies</p>
                    <p className="text-sm text-gray-600">Enable enhanced functionality and personalization</p>
                  </div>
                  <button 
                    onClick={() => handleToggle('functional')}
                    className={`relative inline-block w-12 h-6 ${cookiePreferences.functional ? 'bg-blue-600' : 'bg-gray-300'} rounded-full transition-colors`}
                  >
                    <span 
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${cookiePreferences.functional ? 'left-7' : 'left-1'}`}
                    ></span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div>
                    <p className="font-medium text-gray-800">Analytics Cookies</p>
                    <p className="text-sm text-gray-600">Help us improve our services by analyzing website usage</p>
                  </div>
                  <button 
                    onClick={() => handleToggle('analytics')}
                    className={`relative inline-block w-12 h-6 ${cookiePreferences.analytics ? 'bg-blue-600' : 'bg-gray-300'} rounded-full transition-colors`}
                  >
                    <span 
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${cookiePreferences.analytics ? 'left-7' : 'left-1'}`}
                    ></span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div>
                    <p className="font-medium text-gray-800">Marketing Cookies</p>
                    <p className="text-sm text-gray-600">Used to display relevant advertisements across websites</p>
                  </div>
                  <button 
                    onClick={() => handleToggle('marketing')}
                    className={`relative inline-block w-12 h-6 ${cookiePreferences.marketing ? 'bg-blue-600' : 'bg-gray-300'} rounded-full transition-colors`}
                  >
                    <span 
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${cookiePreferences.marketing ? 'left-7' : 'left-1'}`}
                    ></span>
                  </button>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2>Managing Cookies in Your Browser</h2>
              <p>
                In addition to the controls we provide, you can choose to block or delete cookies through your browser settings. Please note that if you choose to block all cookies, including essential cookies, you may not be able to access all or parts of our website.
              </p>
              
              <h2>Updates to Our Cookie Policy</h2>
              <p>
                We may update our cookie policy from time to time. Any changes will be posted on this page and, where appropriate, notified to you when you visit our website.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p>
                Email: <a href="mailto:office@smartte.net" className="text-blue-600 hover:underline">office@smartte.net</a><br />
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

export default CookiesPage;