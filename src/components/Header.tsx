import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
}

const Header = ({ navOpen, setNavOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-blue-900 font-bold text-xl md:text-2xl">
            Smartte<span className="text-blue-600">EMEA</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `font-medium hover:text-blue-600 transition-colors ${
                      isActive ? 'text-blue-600' : 'text-gray-700'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="relative group">
                <button 
                  className="font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center"
                  onClick={toggleServices}
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top-left z-50">
                  <div className="py-2">
                    <NavLink 
                      to="/services/security-systems" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Security Systems
                    </NavLink>
                    <NavLink 
                      to="/services/electrical-automation" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Electrical & Automation
                    </NavLink>
                    <NavLink 
                      to="/services/it-services" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      IT Services
                    </NavLink>
                    <NavLink 
                      to="/services/civils" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Civil Works
                    </NavLink>
                    <NavLink 
                      to="/services/recruitment" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Recruitment
                    </NavLink>
                    <NavLink 
                      to="/services/security-audit" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Security Audit & Design
                    </NavLink>
                  </div>
                </div>
              </li>
              <li>
                <NavLink 
                  to="/academy" 
                  className={({ isActive }) => 
                    `font-medium hover:text-blue-600 transition-colors ${
                      isActive ? 'text-blue-600' : 'text-gray-700'
                    }`
                  }
                >
                  Academy
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/investors" 
                  className={({ isActive }) => 
                    `font-medium hover:text-blue-600 transition-colors ${
                      isActive ? 'text-blue-600' : 'text-gray-700'
                    }`
                  }
                >
                  Investors
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/newsletter" 
                  className={({ isActive }) => 
                    `font-medium hover:text-blue-600 transition-colors ${
                      isActive ? 'text-blue-600' : 'text-gray-700'
                    }`
                  }
                >
                  Newsletter
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `font-medium hover:text-blue-600 transition-colors ${
                      isActive ? 'text-blue-600' : 'text-gray-700'
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `font-medium hover:text-blue-600 transition-colors ${
                      isActive ? 'text-blue-600' : 'text-gray-700'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={toggleNav}
            aria-label={navOpen ? "Close menu" : "Open menu"}
          >
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '61px' }}
      >
        <nav className="h-full overflow-y-auto py-6 px-4">
          <ul className="space-y-4">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `block text-lg font-medium py-2 ${
                    isActive ? 'text-blue-600' : 'text-gray-800'
                  }`
                }
                onClick={() => setNavOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <button 
                className="flex items-center justify-between w-full text-lg font-medium py-2 text-gray-800"
                onClick={toggleServices}
              >
                Services
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${
                    servicesOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div className={`mt-2 ml-4 space-y-2 ${servicesOpen ? 'block' : 'hidden'}`}>
                <NavLink 
                  to="/services/security-systems" 
                  className={({ isActive }) => 
                    `block py-1 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
                  }
                  onClick={() => setNavOpen(false)}
                >
                  Security Systems
                </NavLink>
                <NavLink 
                  to="/services/electrical-automation" 
                  className={({ isActive }) => 
                    `block py-1 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
                  }
                  onClick={() => setNavOpen(false)}
                >
                  Electrical & Automation
                </NavLink>
                <NavLink 
                  to="/services/it-services" 
                  className={({ isActive }) => 
                    `block py-1 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
                  }
                  onClick={() => setNavOpen(false)}
                >
                  IT Services
                </NavLink>
                <NavLink 
                  to="/services/civils" 
                  className={({ isActive }) => 
                    `block py-1 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
                  }
                  onClick={() => setNavOpen(false)}
                >
                  Civil Works
                </NavLink>
                <NavLink 
                  to="/services/recruitment" 
                  className={({ isActive }) => 
                    `block py-1 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
                  }
                  onClick={() => setNavOpen(false)}
                >
                  Recruitment
                </NavLink>
                <NavLink 
                  to="/services/security-audit" 
                  className={({ isActive }) => 
                    `block py-1 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
                  }
                  onClick={() => setNavOpen(false)}
                >
                  Security Audit & Design
                </NavLink>
              </div>
            </li>
            <li>
              <NavLink 
                to="/academy" 
                className={({ isActive }) => 
                  `block text-lg font-medium py-2 ${
                    isActive ? 'text-blue-600' : 'text-gray-800'
                  }`
                }
                onClick={() => setNavOpen(false)}
              >
                Academy
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/investors" 
                className={({ isActive }) => 
                  `block text-lg font-medium py-2 ${
                    isActive ? 'text-blue-600' : 'text-gray-800'
                  }`
                }
                onClick={() => setNavOpen(false)}
              >
                Investors
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/newsletter" 
                className={({ isActive }) => 
                  `block text-lg font-medium py-2 ${
                    isActive ? 'text-blue-600' : 'text-gray-800'
                  }`
                }
                onClick={() => setNavOpen(false)}
              >
                Newsletter
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `block text-lg font-medium py-2 ${
                    isActive ? 'text-blue-600' : 'text-gray-800'
                  }`
                }
                onClick={() => setNavOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `block text-lg font-medium py-2 ${
                    isActive ? 'text-blue-600' : 'text-gray-800'
                  }`
                }
                onClick={() => setNavOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;