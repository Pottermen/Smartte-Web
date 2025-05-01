import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Our Services | Smartte EMEA';
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-blue-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive engineering and technology solutions tailored to your needs across the EMEA region.
          </p>
        </div>
      </div>
      
      {/* Services Grid */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Explore Our Services" 
            subtitle="As a local service provider in Engineering technology across the EMEA region, we offer a wide range of specialized services designed to meet the needs of businesses of all sizes."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Approach Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3912990/pexels-photo-3912990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our approach to service" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Approach: ASI Methodology
              </h2>
              <p className="text-gray-600 mb-6">
                At Smartte EMEA, we apply our proven three-step ASI methodology to ensure the highest quality solutions for our clients:
              </p>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Auditing</h3>
                  <p className="text-gray-600">
                    We begin with a comprehensive assessment of your current systems, needs, and vulnerabilities to understand your unique challenges.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Solution</h3>
                  <p className="text-gray-600">
                    Based on our audit findings, we design customized solutions that address your specific requirements and anticipate future needs.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Implementation</h3>
                  <p className="text-gray-600">
                    We expertly deploy your tailored solution with minimal disruption to your operations, ensuring seamless integration and comprehensive training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;