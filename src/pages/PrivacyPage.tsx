import { useEffect } from 'react';

const PrivacyPage = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Smartte EMEA';
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-blue-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Privacy Policy
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
                At Smartte EMEA, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              
              <h2>2. The Data We Collect About You</h2>
              <p>
                Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you, including:
              </p>
              <ul>
                <li>Identity Data: includes first name, last name, username or similar identifier</li>
                <li>Contact Data: includes email address and telephone numbers</li>
                <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website</li>
                <li>Usage Data: includes information about how you use our website and services</li>
              </ul>
              
              <h2>3. How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul>
                <li>Where we need to perform the contract we are about to enter into or have entered into with you</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests</li>
                <li>Where we need to comply with a legal obligation</li>
              </ul>
              <p>
                Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
              </p>
              
              <h2>4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
              
              <h2>5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation.
              </p>
              
              <h2>6. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul>
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p>
                If you wish to exercise any of these rights, please contact us using the details provided below.
              </p>
              
              <h2>7. Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
              </p>
              
              <h2>8. Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them, please see our <a href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</a>.
              </p>
              
              <h2>9. International Transfers</h2>
              <p>
                We may transfer your personal data to countries outside the European Economic Area (EEA). Whenever we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by implementing at least one of the following safeguards:
              </p>
              <ul>
                <li>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the European Commission.</li>
                <li>Where we use certain service providers, we may use specific contracts approved by the European Commission which give personal data the same protection it has in Europe.</li>
              </ul>
              
              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of significant changes by posting the new privacy policy on this page and, where feasible, by sending you a notification. You are advised to review this privacy policy periodically for any changes.
              </p>
              
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p>
                Smartte EMEA<br />
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

export default PrivacyPage;