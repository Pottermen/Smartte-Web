import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, CheckCircle, Calendar, Users, BookOpen } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const AcademyPage = () => {
  useEffect(() => {
    document.title = 'European Security Technology Academy | Smartte EMEA';
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-blue-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            European Security Technology Academy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Developing the next generation of security professionals with comprehensive training programs.
          </p>
        </div>
      </div>
      
      {/* Academy Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6 text-sm font-medium">
                <GraduationCap className="h-4 w-4 mr-2" />
                Based in Germany
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Learning Module Overview
              </h2>
              <p className="text-gray-600 mb-6">
                The European Security Technology Academy offers some of the most comprehensive training programs available globally. We collaborate with universities, technical schools, and industry partners across Europe to ensure our curriculum is impactful and accessible.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to develop the next generation of security professionals equipped with the skills needed to thrive in an evolving landscape. Stay tuned for the upcoming launch of our full learning module, designed to provide in-depth knowledge and hands-on experience in security technology.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-medium text-gray-800">
                      Comprehensive Curriculum
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Expert-designed courses covering the latest security technologies and methodologies.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-medium text-gray-800">
                      Industry Partnerships
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Collaboration with leading security companies for real-world insights and opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Security Academy Training" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Coming Soon
                  </h3>
                </div>
                <p className="text-gray-600">
                  Full learning modules launching in Q3 2025. Pre-register now for early access.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <SectionTitle 
              title="Training Programs" 
              subtitle="Our academy offers a range of specialized training programs designed to meet various professional needs in the security industry."
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
                <div className="bg-blue-600 h-2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Security System Design</h3>
                  <p className="text-gray-600 mb-6">
                    Learn to design comprehensive security systems for various facility types, from concept to implementation.
                  </p>
                  
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Program Includes:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Risk assessment methodologies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">System integration techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Advanced CAD for security planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Compliance and regulatory standards</span>
                    </li>
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Duration: 12 weeks</span>
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-100 bg-blue-600 rounded">Coming Soon</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
                <div className="bg-blue-600 h-2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">CCTV & Surveillance Technologies</h3>
                  <p className="text-gray-600 mb-6">
                    Master modern video surveillance systems, from camera selection to advanced analytics implementation.
                  </p>
                  
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Program Includes:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Camera technologies and specifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Video management systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">AI-powered video analytics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Storage solutions and bandwidth management</span>
                    </li>
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Duration: 8 weeks</span>
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-100 bg-blue-600 rounded">Coming Soon</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
                <div className="bg-blue-600 h-2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Access Control Implementation</h3>
                  <p className="text-gray-600 mb-6">
                    Develop expertise in designing and implementing sophisticated access control systems for various security levels.
                  </p>
                  
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Program Includes:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Biometric technologies and applications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Multi-factor authentication systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Mobile credential solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Integration with other security systems</span>
                    </li>
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Duration: 10 weeks</span>
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-100 bg-blue-600 rounded">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pre-registration CTA */}
      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be the First to Know
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Pre-register now to receive updates about our upcoming training programs and get early access to enrollment.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md focus:ring-blue-500 focus:border-blue-500 flex-grow"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-blue-50 transition-colors"
              >
                Pre-Register
              </button>
            </div>
          </form>
          
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;