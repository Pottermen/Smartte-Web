import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Smartte EMEA';
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center animate-fade-in">
        <div className="mb-8">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-600 text-6xl font-bold">404</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="flex items-center justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Homepage
          </Link>
          
          <div className="flex gap-4">
            <Link 
              to="/services" 
              className="flex-1 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Services
            </Link>
            
            <Link 
              to="/contact" 
              className="flex-1 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <Search className="h-4 w-4 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-gray-500 text-sm">
          <p>
            If you believe this is an error, please contact us at{' '}
            <a href="mailto:office@smartte.net" className="text-blue-600 hover:underline">
              office@smartte.net
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;