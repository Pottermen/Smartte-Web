import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, BarChart, Mail, Phone } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const InvestorPage = () => {
  useEffect(() => {
    document.title = 'Investor Relations | Smartte EMEA';
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-blue-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Investor Relations
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transparent information about our company's performance, strategy, and vision for the future.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <SectionTitle 
                  title="Our Mission" 
                  subtitle="At Smartte EMEA, we strive to provide the best services and products to our clients by maintaining a local presence in every city across the EMEA region."
                />
                <p className="text-gray-600 mb-6">
                  We believe in creating value through innovation, excellent service, and a commitment to quality. Our security professionals are carefully chosen and have extensive training in-house to face any challenge.
                </p>
                <p className="text-gray-600">
                  Through our case studies with other clients, we can offer complete solutions for a safer and secure work environment at the highest standards in the industry. All is done in 3 steps: Auditing, Solution, Implementation (ASI).
                </p>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Financial Performance
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Key Financial Metrics</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-md p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                        <h4 className="text-lg font-medium text-gray-800">Annual Revenue Growth</h4>
                      </div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">+24%</p>
                      <p className="text-sm text-gray-500">Year over year increase</p>
                    </div>
                    
                    <div className="bg-white rounded-md p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <Users className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="text-lg font-medium text-gray-800">Client Retention</h4>
                      </div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">92%</p>
                      <p className="text-sm text-gray-500">Long-term partnerships</p>
                    </div>
                    
                    <div className="bg-white rounded-md p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <BarChart className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="text-lg font-medium text-gray-800">Market Expansion</h4>
                      </div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">5</p>
                      <p className="text-sm text-gray-500">New markets entered last year</p>
                    </div>
                    
                    <div className="bg-white rounded-md p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <h4 className="text-lg font-medium text-gray-800">Security Projects</h4>
                      </div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">150+</p>
                      <p className="text-sm text-gray-500">Successfully completed</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 italic">
                  Note: Detailed financial reports are available to registered investors. Please contact our Investor Relations team for access.
                </p>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Why Invest in Smartte EMEA
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Strong Growth Potential</h3>
                    <p className="text-gray-600">
                      As a small company, we have the ability to adapt and respond to market changes quickly, identifying new opportunities for growth in the rapidly expanding security technology sector.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Close-Knit Team</h3>
                    <p className="text-gray-600">
                      Our dedicated team is committed to delivering quality and innovation, driving our success and your investment. We foster a culture of excellence and continuous improvement.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Expanding Market Presence</h3>
                    <p className="text-gray-600">
                      With a focus on providing local service across the EMEA region, we are continuously expanding our market presence and building a strong reputation for reliability and expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Investor Information
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    Governance and Leadership
                  </h3>
                  <p className="text-gray-600 mb-4">
                    At Smartte EMEA, we prioritize strong governance and ethical business practices. Our leadership team brings extensive experience and passion to the company.
                  </p>
                  <Link 
                    to="/about" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Learn more about our team
                  </Link>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    Corporate Responsibility
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We are committed to sustainable practices and community engagement, ensuring that our growth benefits all stakeholders.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    Contact Investor Relations
                  </h3>
                  <div className="flex items-start mb-3">
                    <Mail className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <a 
                      href="mailto:investorrelations@smartte.net" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      investorrelations@smartte.net
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <a 
                      href="tel:+442034881381" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      +442034881381
                    </a>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    Stay Updated
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Sign up for our newsletter to receive the latest updates on our company's performance and news.
                  </p>
                  <Link 
                    to="/newsletter" 
                    className="block text-center w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Subscribe to Newsletter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorPage;