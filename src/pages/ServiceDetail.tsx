import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ServiceType } from '../data/servicesData';

interface ServiceDetailProps {
  service: ServiceType;
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  useEffect(() => {
    document.title = `${service.title} | Smartte EMEA`;
    window.scrollTo(0, 0);
  }, [service]);

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-blue-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link 
            to="/services" 
            className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {service.shortDescription}
          </p>
        </div>
      </div>
      
      {/* Service Content */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {service.contentSections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    {section.title}
                  </h2>
                  <div 
                    className="prose prose-lg max-w-none text-gray-600"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  ></div>
                </div>
              ))}
              
              <div className="mt-10 pt-10 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Ready to discuss your specific requirements?
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact our team today to learn more about how our {service.title.toLowerCase()} solutions can benefit your organization.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  Key Features
                </h4>
                <ul className="space-y-3 mb-6">
                  {service.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 text-blue-600 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {service.relatedServices.length > 0 && (
                  <>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">
                      Related Services
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {service.relatedServices.map((relatedService, index) => (
                        <li key={index}>
                          <Link 
                            to={`/services/${relatedService.slug}`} 
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            {relatedService.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                <Link 
                  to="/contact" 
                  className="block text-center w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;