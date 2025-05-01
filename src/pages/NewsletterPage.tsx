import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Building, Construction } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const NewsletterPage = () => {
  useEffect(() => {
    document.title = 'Newsletter | Smartte EMEA';
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-blue-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Smartte EMEA Newsletter
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with our latest news, projects, and industry insights.
          </p>
        </div>
      </div>
      
      {/* Newsletter Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Company Update: Expanding Our Global Reach in Security Solutions" 
            subtitle="We're excited to share some recent developments at Smartte EMEA as we continue to strengthen our presence in the international security systems market."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2>Successful Project Completion in Dubai, UAE</h2>
                <p>
                  We are pleased to announce the successful installation and commissioning of advanced security systems for a prominent multinational client in Dubai. Our dedicated team worked diligently to ensure that every aspect of the project adhered to our high standards of quality and efficiency. This commitment to excellence has resulted in another satisfied client, reinforcing our reputation in the region for providing cutting-edge security solutions.
                </p>
                
                <div className="my-8 bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start mb-3">
                    <Globe className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <strong className="text-gray-800">Project Highlight:</strong>
                  </div>
                  <p className="text-gray-700 m-0">
                    The Dubai project included an integrated security system with over 200 high-definition cameras, advanced access control for 50+ entry points, and a centralized monitoring system with AI-powered analytics.
                  </p>
                </div>
                
                <h2>Civil Works Completed in Germany</h2>
                <p>
                  We have also successfully completed civil works for a new factory in Germany. Our team conducted extensive groundwork, including the construction of concrete bases for gates and posts. Additionally, we executed the digging and preparation for electrical cables in line with industry standards. This project marks another milestone in our ongoing commitment to delivering reliable and robust security infrastructure.
                </p>
                
                <div className="my-8 bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start mb-3">
                    <Building className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <strong className="text-gray-800">Project Highlight:</strong>
                  </div>
                  <p className="text-gray-700 m-0">
                    The Germany factory project required specialized construction techniques to ensure security infrastructure could withstand extreme weather conditions while maintaining aesthetic harmony with the facility's modern architecture.
                  </p>
                </div>
                
                <h2>Ongoing Office Upgrade Project in Paris</h2>
                <p>
                  In Paris, our team is currently engaged in an exciting project focused on upgrading security systems for an office space. We are dedicated to enhancing the safety and efficiency of the workspace while minimizing disruptions to daily operations. We look forward to sharing the successful completion of this project in our next newsletter.
                </p>
                
                <div className="my-8 bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start mb-3">
                    <Construction className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <strong className="text-gray-800">Project Highlight:</strong>
                  </div>
                  <p className="text-gray-700 m-0">
                    The Paris office upgrade includes transitioning from legacy security systems to state-of-the-art solutions with minimal downtime, requiring careful planning and phased implementation to maintain security integrity throughout the process.
                  </p>
                </div>
                
                <h2>Thank You for Your Support!</h2>
                <p>
                  At Smartte EMEA, we are dedicated to providing top-tier security and Engineering solutions tailored to meet the unique needs of our clients. Thank you for your continued trust and partnership. If you have any questions or need further information about our services, please don't hesitate to reach out!
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Stay Connected
                </h3>
                
                <form className="mb-8">
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        required
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        I agree to receive newsletters from Smartte EMEA
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Subscribe to Newsletter
                  </button>
                </form>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Previous Newsletters
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                        April 2025 - New Security Technology Deployments
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                        March 2025 - Expansion into Eastern European Markets
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                        February 2025 - Academy Launch and Training Programs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                        January 2025 - Annual Review and Future Vision
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Want to learn more about our services and how we can help your business?
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;