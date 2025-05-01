import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | Smartte EMEA';
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-blue-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to our team using the contact information below.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Please feel free to contact us using any of the methods below or fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 text-blue-600 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Our Address</h3>
                    <p className="text-gray-600">
                      Smartte EMEA<br />
                      Str. Argentina 25 Et.<br />
                      Post code 011753<br />
                      Bucharest, Romania
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 text-blue-600 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:+40750444694" className="hover:text-blue-600 transition-colors">
                        +40750444694
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 text-blue-600 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:office@smartte.net" className="hover:text-blue-600 transition-colors">
                        office@smartte.net
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 text-blue-600 mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="text-lg font-medium text-gray-800 mb-2">International Support</h3>
                <p className="text-gray-600">
                  As a service provider across the EMEA region, we offer support in multiple languages and have representatives available to assist clients throughout Europe, the Middle East, and Africa.
                </p>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Our Location
          </h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8866349751243!2d26.102695776902714!3d44.43802690523669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x8b9e0b9d0d0e9e9e!2sArgentina%2025%2C%20Bucure%C8%99ti%2C%20Romania!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Smartte EMEA Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;