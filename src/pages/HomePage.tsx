import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { ArrowRight, Shield, Zap, Server, Building, Users, FileSearch } from 'lucide-react';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Smartte EMEA - Engineering Technology Services';
  }, []);

  return (
    <>
      <Hero 
        title="Engineering Technology Excellence Across EMEA"
        subtitle="We deliver comprehensive security systems, electrical engineering, and technical solutions tailored to the unique needs of our clients across Europe, Middle East, and Africa."
        buttonText="Explore Our Services"
        buttonLink="/services"
        backgroundImage="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Services" 
            subtitle="As a local service provider in the EMEA region, we offer a comprehensive range of engineering and technology solutions."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Security Systems"
              description="Comprehensive video surveillance and access control solutions from small businesses to large-scale enterprises."
              icon={<Shield className="h-6 w-6" />}
              slug="security-systems"
            />
            
            <ServiceCard 
              title="Electrical & Automation"
              description="Reliable electrical systems and intelligent automation solutions for modern facilities."
              icon={<Zap className="h-6 w-6" />}
              slug="electrical-automation"
            />
            
            <ServiceCard 
              title="IT Services"
              description="Streamlined business operations with comprehensive IT services designed to enhance efficiency and security."
              icon={<Server className="h-6 w-6" />}
              slug="it-services"
            />
            
            <ServiceCard 
              title="Civil Works"
              description="Construction of security posts, lighting installation, and infrastructure for security systems."
              icon={<Building className="h-6 w-6" />}
              slug="civils"
            />
            
            <ServiceCard 
              title="Recruitment"
              description="Specialized recruitment agency connecting businesses with top-tier technical professionals."
              icon={<Users className="h-6 w-6" />}
              slug="recruitment"
            />
            
            <ServiceCard 
              title="Security Audit & Design"
              description="In-depth analysis and tailored design of security hardware systems to enhance safety and protection."
              icon={<FileSearch className="h-6 w-6" />}
              slug="security-audit"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6 text-sm font-medium">
                About Smartte EMEA
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Smart Solutions for Global Security Challenges
              </h2>
              <p className="text-gray-600 mb-6">
                Our security professionals are carefully chosen and have extensive in-house training to face any challenge. We provide smart solutions for companies that require global security services.
              </p>
              <p className="text-gray-600 mb-6">
                Through our case studies with other clients, we can offer complete solutions for a safer and secure work environment at the highest standards in the industry. All is done in 3 steps: Auditing, Solution, Implementation (ASI).
              </p>
              <p className="text-gray-700 font-medium mb-8">
                Why work with us? It's simple - because we've done it before and we've implemented the best security solutions.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Learn more about us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Security professionals at work" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <h3 className="text-xl font-bold mb-2">European Security Technology Academy</h3>
                <p className="text-blue-100 mb-4">
                  Based in Germany, offering comprehensive training programs for security professionals.
                </p>
                <Link 
                  to="/academy" 
                  className="inline-flex items-center text-white font-medium hover:text-blue-200 transition-colors"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to secure your business?
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
    </>
  );
};

export default HomePage;