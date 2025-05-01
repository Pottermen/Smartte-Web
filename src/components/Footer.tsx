import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Smartte EMEA</h3>
            <p className="mb-4 text-blue-100">
              Local Service Provider in Engineering technology across the EMEA region.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-300" />
                <p className="text-sm">
                  Str. Argentina 25 Et.<br />
                  Post code 011753<br />
                  Bucharest, Romania
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-300" />
                <a href="tel:+40750444694" className="text-sm hover:text-blue-300 transition-colors">
                  +40750444694
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-300" />
                <a href="mailto:office@smartte.net" className="text-sm hover:text-blue-300 transition-colors">
                  office@smartte.net
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/security-systems" className="text-sm hover:text-blue-300 transition-colors">
                  Security Systems
                </Link>
              </li>
              <li>
                <Link to="/services/electrical-automation" className="text-sm hover:text-blue-300 transition-colors">
                  Electrical & Automation
                </Link>
              </li>
              <li>
                <Link to="/services/it-services" className="text-sm hover:text-blue-300 transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/services/civils" className="text-sm hover:text-blue-300 transition-colors">
                  Civil Works
                </Link>
              </li>
              <li>
                <Link to="/services/recruitment" className="text-sm hover:text-blue-300 transition-colors">
                  Recruitment
                </Link>
              </li>
              <li>
                <Link to="/services/security-audit" className="text-sm hover:text-blue-300 transition-colors">
                  Security Audit & Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-blue-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academy" className="text-sm hover:text-blue-300 transition-colors">
                  European Security Technology Academy
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-sm hover:text-blue-300 transition-colors">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-sm hover:text-blue-300 transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-blue-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm hover:text-blue-300 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-blue-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm hover:text-blue-300 transition-colors">
                  Manage Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-200">
          <p>© {new Date().getFullYear()} Smartte EMEA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;