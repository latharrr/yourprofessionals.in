import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import SEO from './components/common/SEO';
import MobileOverlay from './components/common/MobileOverlay';
import Header from './components/layout/Header';
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
const SipCalculator = lazy(() => import('./pages/SipCalculator'));
const StepUpSipCalculator = lazy(() => import('./pages/StepUpSipCalculator'));
const GstCalculator = lazy(() => import('./pages/GstCalculator'));
const GstInterestCalculator = lazy(() => import('./pages/GstInterestCalculator'));
const IncomeTaxCalculator = lazy(() => import('./pages/IncomeTaxCalculator'));
const EmiCalculator = lazy(() => import('./pages/EmiCalculator'));
const PpfCalculator = lazy(() => import('./pages/PpfCalculator'));
const TdsCalculator = lazy(() => import('./pages/TdsCalculator'));
const PayCommissionCalculator = lazy(() => import('./pages/PayCommissionCalculator'));

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
  'url': 'https://www.yourprofessional.in',
  'logo': 'https://www.yourprofessional.in/logo.svg',
  'telephone': '+91-7011936958',
  'email': 'info@yourprofessional.in',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Surat',
    'addressRegion': 'Gujarat',
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
  'url': 'https://www.yourprofessional.in',
  'telephone': '+91-7011936958',
  'email': 'info@yourprofessional.in',
  'priceRange': '₹₹',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Surat',
    'addressRegion': 'Gujarat',
    'postalCode': '395001',
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
        description="Register your company, trademark, GST, FSSAI and more with India's trusted CA & CS professionals. Fast turnaround, transparent pricing, free consultation. 10,000+ businesses served."
        canonical="/"
        schema={[orgSchema, localBusinessSchema]}
      />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Services />
        <WhyChooseUs />
        <FeaturedIn />
        <FAQSection />
        <LatestBlogs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MobileOverlay />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
    </BrowserRouter>
  );
}

export default App;
