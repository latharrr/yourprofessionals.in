import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

export default function AboutUs() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <SEO
                title="About Us – Your Professionals"
                description="Learn more about India's trusted business registration, legal licensing, and compliance platform. Driven by expert CA, CS, and corporate law consultants."
                canonical="/about-us"
            />
            <Header />
            <main className="flex-grow pt-28">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-[#090a3d] via-[#0f1163] to-[#1a1c6e] text-white py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--color-brand-secondary)] rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                    </div>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block bg-white/10 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/10">
                            India's Trusted Business Advisors
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Simplifying Business <span className="text-[var(--color-brand-secondary)]">Registration &amp; Compliance</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            We combine cutting-edge technology with qualified CAs, CS, and Legal Experts to make business setup and ongoing compliance quick, affordable, and stress-free.
                        </p>
                    </div>
                </section>

                {/* Company Story & Mission */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-xs uppercase mb-3 block">
                                    Our Mission
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#090a3d] mb-6">
                                    Helping Entrepreneurs Turn Ideas into Legal Enterprises
                                </h2>
                                <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                                    <p>
                                        Your Professionals was founded with a clear goal: to simplify the complex legal landscape for startups, freelancers, and small businesses in India. Regulatory requirements should not be a roadblock to innovation.
                                    </p>
                                    <p>
                                        We provide a single, unified dashboard for corporate governance, tax planning, GST filings, licensing, and corporate law. By combining expert professionals with transparent, flat-fee pricing, we ensure your business remains 100% compliant while you focus on scaling.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-150 relative overflow-hidden shadow-sm">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-full blur-3xl opacity-50" />
                                <h3 className="text-lg font-bold text-[#090a3d] mb-4">Our Core Values</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <span className="text-[var(--color-brand-secondary)] font-bold text-lg">✓</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm">Transparency First</h4>
                                            <p className="text-gray-500 text-xs mt-0.5">No hidden charges, all-inclusive pricing displayed upfront.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[var(--color-brand-secondary)] font-bold text-lg">✓</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm">Absolute Reliability</h4>
                                            <p className="text-gray-500 text-xs mt-0.5">Every deadline tracked, every filing checked by certified practitioners.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[var(--color-brand-secondary)] font-bold text-lg">✓</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm">Customer Centricity</h4>
                                            <p className="text-gray-500 text-xs mt-0.5">Proactive support, simple updates, and dedicated helpline contact channels.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>



                {/* FAQ Call to Action banner */}
                <section className="py-16 bg-gray-50 text-center border-t border-gray-100">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#090a3d] mb-4">Ready to Partner with Us?</h2>
                        <p className="text-gray-500 mb-8 text-sm md:text-base">
                            Get free consultation from our Chartered Accountants and Corporate Lawyers. Find the perfect compliance roadmap for your business.
                        </p>
                        <button onClick={() => window.dispatchEvent(new Event('openConsultationPopup'))}
                            className="bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-xl cursor-pointer">
                            Request a Free consultation
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
