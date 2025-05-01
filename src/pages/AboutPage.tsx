import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | Smartte EMEA';
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-blue-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            About Smartte EMEA
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted Local Service Provider in Engineering technology across the EMEA region.
          </p>
        </div>
      </div>
      
      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6 text-sm font-medium">
                Our Company
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Engineering Excellence and Security Expertise
              </h2>
              <p className="text-gray-600 mb-6">
                Our security professionals are carefully chosen and have extensive training in-house to face any challenge. We provide smart solutions for companies that require a global solution for security.
              </p>
              <p className="text-gray-600 mb-6">
                Through our case studies with other clients, we can offer complete solutions for a safer and secure work environment at the highest standards in the industry. All is done in 3 steps: Auditing, Solution, Implementation (ASI).
              </p>
              <p className="text-gray-700 font-medium">
                Why work with us? It's simple - because we've done it before and we've implemented the best security solutions.
              </p>
            </div>
            
            <div>
              <img 
                src="/Laboratory Smartte .jpg" 
                alt="Smartte EMEA team" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Choose Smartte EMEA" 
            subtitle="We stand out from the competition with our commitment to excellence, expertise, and customer satisfaction."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expertise</h3>
              <p className="text-gray-600">
                Our team consists of highly trained professionals with years of experience in security and engineering technologies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Comprehensive Solutions</h3>
              <p className="text-gray-600">
                We offer end-to-end services from initial assessment to implementation and ongoing support.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Local Presence</h3>
              <p className="text-gray-600">
                With operations across the EMEA region, we provide local expertise while maintaining global standards.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customized Approach</h3>
              <p className="text-gray-600">
                We tailor our solutions to meet the specific needs and challenges of each client and project.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                We adhere to the highest industry standards and continuously monitor and improve our processes.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Our success is measured by the satisfaction and security of our clients, which is why we prioritize their needs above all else.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to work with Smartte EMEA?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how we can provide tailored security and engineering solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;