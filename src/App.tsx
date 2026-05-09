import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import MobileOverlay from './components/common/MobileOverlay';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
// import TrustedPartners from './components/home/TrustedPartners';
import Services from './components/home/Services';
import WhyChooseUs from './components/home/WhyChooseUs';
import FeaturedIn from './components/home/FeaturedIn';
import FAQSection from './components/home/FAQSection';
import LatestBlogs from './components/home/LatestBlogs';
import Testimonials from './components/home/Testimonials';
import CompanyRegistration from './pages/CompanyRegistration';
import ServicePage from './pages/ServicePage';
import ContactUs from './pages/ContactUs';
import SipCalculator from './pages/SipCalculator';
import StepUpSipCalculator from './pages/StepUpSipCalculator';
import GstCalculator from './pages/GstCalculator';
import GstInterestCalculator from './pages/GstInterestCalculator';
import IncomeTaxCalculator from './pages/IncomeTaxCalculator';
import EmiCalculator from './pages/EmiCalculator';
import PpfCalculator from './pages/PpfCalculator';
import TdsCalculator from './pages/TdsCalculator';
import PayCommissionCalculator from './pages/PayCommissionCalculator';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        {/* <TrustedPartners /> */}
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
    </BrowserRouter>
  );
}

export default App;
