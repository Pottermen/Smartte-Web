import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  backgroundImage 
}: HeroProps) => {
  return (
    <div 
      className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` 
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full mb-6 text-sm font-medium">
            <ShieldCheck className="h-4 w-4 mr-2" />
            Local Service Provider in EMEA Region
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            {subtitle}
          </p>
          <Link 
            to={buttonLink} 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
      
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-0"></div>
      
      {/* Animated shine effect */}
      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 animate-shine"></div>
    </div>
  );
};

export default Hero;