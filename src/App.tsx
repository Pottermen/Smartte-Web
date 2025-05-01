import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import InvestorPage from './pages/InvestorPage';
import NewsletterPage from './pages/NewsletterPage';
import AcademyPage from './pages/AcademyPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import VerificationModal from './components/VerificationModal';
import ScrollToTop from './components/ScrollToTop';
import NotFoundPage from './pages/NotFoundPage';
import { servicesData } from './data/servicesData';

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user has been verified in this session
    const verified = sessionStorage.getItem('verified') === 'true';
    setIsVerified(verified);
  }, []);

  useEffect(() => {
    // Close mobile nav when route changes
    setNavOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  const handleVerification = () => {
    setIsVerified(true);
    sessionStorage.setItem('verified', 'true');
  };

  if (!isVerified) {
    return <VerificationModal onVerify={handleVerification} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ScrollToTop />
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          {servicesData.map((service) => (
            <Route 
              key={service.id}
              path={`/services/${service.slug}`} 
              element={<ServiceDetail service={service} />} 
            />
          ))}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/investors" element={<InvestorPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;