import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import SEO from './components/common/SEO';
import Header from './components/layout/Header';
import DueDatesTicker from './components/layout/DueDatesTicker';
import LeadPopup from './components/common/LeadPopup';
import AIAgentWidget from './components/common/AIAgentWidget';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import Services from './components/home/Services';
import WhyChooseUs from './components/home/WhyChooseUs';
import FeaturedIn from './components/home/FeaturedIn';
import FAQSection from './components/home/FAQSection';
import LatestBlogs from './components/home/LatestBlogs';
import Testimonials from './components/home/Testimonials';

const CompanyRegistration = lazy(() => import('./pages/CompanyRegistration'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Pricing = lazy(() => import('./pages/Pricing'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const SipCalculator = lazy(() => import('./pages/SipCalculator'));
const StepUpSipCalculator = lazy(() => import('./pages/StepUpSipCalculator'));
const GstCalculator = lazy(() => import('./pages/GstCalculator'));
const GstInterestCalculator = lazy(() => import('./pages/GstInterestCalculator'));
const IncomeTaxCalculator = lazy(() => import('./pages/IncomeTaxCalculator'));
const EmiCalculator = lazy(() => import('./pages/EmiCalculator'));
const PpfCalculator = lazy(() => import('./pages/PpfCalculator'));
const TdsCalculator = lazy(() => import('./pages/TdsCalculator'));
const PayCommissionCalculator = lazy(() => import('./pages/PayCommissionCalculator'));
const BlogAdmin = lazy(() => import('./pages/BlogAdmin'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[var(--color-brand-secondary)] border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500 text-sm font-medium">Loading…</p>
      </div>
    </div>
  );
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Your Professionals',
  'url': 'https://www.yourprofessionals.in',
  'logo': 'https://www.yourprofessionals.in/logo.svg',
  'telephone': '+91-7011936958',
  'email': 'info@yourprofessionals.in',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Office No. 204, U-172, Street No.4, Laxmi Nagar, Block U, Shakarpur',
    'addressLocality': 'Delhi',
    'addressRegion': 'Delhi',
    'postalCode': '110092',
    'addressCountry': 'IN',
  },
  'sameAs': [
    'https://www.facebook.com/yourprofessionals',
    'https://www.instagram.com/yourprofessionals',
    'https://www.linkedin.com/company/yourprofessionals',
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Your Professionals',
  'description': "India's fastest business registration and compliance service. Expert CA, CS & legal professionals.",
  'url': 'https://www.yourprofessionals.in',
  'telephone': '+91-7011936958',
  'email': 'info@yourprofessionals.in',
  'priceRange': '₹₹',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Office No. 204, U-172, Street No.4, Laxmi Nagar, Block U, Shakarpur',
    'addressLocality': 'Delhi',
    'addressRegion': 'Delhi',
    'postalCode': '110092',
    'addressCountry': 'IN',
  },
  'openingHoursSpecification': [{
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    'opens': '09:00',
    'closes': '19:00',
  }],
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'reviewCount': '500',
    'bestRating': '5',
  },
};

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SEO
        title="Your Professionals – India's Fastest Business Registration & Compliance Service"
        description="Register your company, trademark, GST, FSSAI and more with India's trusted CA & CS professionals. Fast turnaround, transparent pricing, free consultation. 500+ businesses served."
        canonical="/"
        schema={[orgSchema, localBusinessSchema]}
      />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Services />
        <WhyChooseUs />
        <FeaturedIn />
        <LatestBlogs />
        <FAQSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919354332511?text=Hi%2C%20I%20need%20assistance%20with%20business%20registration%20and%20compliance%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_8px_32px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 group border border-white/10 select-none cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      {/* Smart pulsing white notification dot on top-right */}
      <span className="absolute top-0 right-0 flex h-3.5 w-3.5 translate-x-1/4 -translate-y-1/4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]"></span>
      </span>

      {/* Clean WhatsApp SVG Icon */}
      <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.488 4.978 1.49h.005c5.385 0 9.766-4.381 9.77-9.767a9.718 9.718 0 00-2.85-6.873 9.722 9.722 0 00-6.86-2.82c-5.392 0-9.77 4.381-9.775 9.769a9.69 9.69 0 001.446 5.034l-.955 3.486 3.57-.936zm12.59-5.467c-.29-.145-1.71-.845-1.97-.94-.27-.1-.46-.145-.66.145-.19.29-.75.94-.92 1.13-.17.19-.34.215-.63.07-2.92-1.457-4.14-2.52-5.49-4.85-.36-.615.36-.57 1.03-1.91.11-.22.05-.41-.025-.56-.075-.15-.66-1.59-.9-2.17-.24-.58-.48-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.07 2.9 1.22 3.1c.15.195 2.1 3.21 5.09 4.51.71.31 1.27.49 1.7.63.72.22 1.37.19 1.88.11.58-.09 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.08-.135-.29-.21-.57-.355z" />
      </svg>
    </a>
  );
}

function ScrollToTopFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-12 h-12 bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-amber-300/30"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DueDatesTicker />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/admin" element={<BlogAdmin />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sip-calculator" element={<SipCalculator />} />
          <Route path="/step-up-sip-calculator" element={<StepUpSipCalculator />} />
          <Route path="/gst-calculator" element={<GstCalculator />} />
          <Route path="/gst-interest-calculator" element={<GstInterestCalculator />} />
          <Route path="/income-tax-calculator" element={<IncomeTaxCalculator />} />
          <Route path="/home-loan-emi-calculator" element={<EmiCalculator />} />
          <Route path="/ppf-calculator" element={<PpfCalculator />} />
          <Route path="/tds-calculator" element={<TdsCalculator />} />
          <Route path="/tds-interest-calculator" element={<TdsCalculator />} />
          <Route path="/8th-pay-commission-calculator" element={<PayCommissionCalculator />} />
          <Route path="/company-registration" element={<CompanyRegistration />} />
          <Route path="/:slug" element={<ServicePage />} />
        </Routes>
      </Suspense>
      <WhatsAppFAB />
      <AIAgentWidget />
      <ScrollToTopFAB />
      <LeadPopup />
    </BrowserRouter>
  );
}

export default App;
