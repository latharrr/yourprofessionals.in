import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

export default function Pricing() {
    const plans = [
        {
            name: "Basic Incorporation",
            price: "₹1,499",
            period: "+ Govt Fees",
            desc: "Perfect for new startups and small service businesses getting registered.",
            features: [
                "2 Director Digital Signatures (DSC)",
                "Director Identification Numbers (DIN)",
                "Company Name Reservation (RUN)",
                "Drafting of MoA & AoA",
                "PAN & TAN Card Application",
                "PF & ESIC Registrations",
                "Free corporate bank account setup"
            ],
            action: "Incorporate Now"
        },
        {
            name: "Compliance Retainer",
            price: "₹4,999",
            period: "/ month",
            desc: "Ongoing corporate secretary and basic accounting support to maintain status.",
            features: [
                "Annual filing forms AOC-4 & MGT-7",
                "Director KYC (DIR-3 KYC) filings",
                "Monthly tax calculation advice",
                "Quarterly TDS compliance return",
                "Statutory board meeting minutes drafting",
                "Unlimited ROC advisory support",
                "Dedicated Chartered Accountant (CA)"
            ],
            action: "Get Started",
            highlighted: true
        },
        {
            name: "Standard Bookkeeping",
            price: "₹3,499",
            period: "/ month",
            desc: "Accurate transaction tracking and GST ledger reconciliation for active sellers.",
            features: [
                "Up to 150 bank transactions / month",
                "Double-entry ledger entry matching",
                "Bank reconciliation reporting",
                "GST purchases & sales registers",
                "Monthly profit & loss statement",
                "Audit checklist assistance",
                "Dedicated accountant portal access"
            ],
            action: "Outsource Today"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <SEO
                title="Pricing Plans – Transparent Accounting &amp; Compliance Fees"
                description="Get simple all-inclusive pricing for business registration, monthly bookkeeping, GST filing, and annual ROC filings. No hidden fees or retainer contracts."
                canonical="/pricing"
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
                            Simple &amp; Transparent Rates
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Plans Built for <span className="text-[var(--color-brand-secondary)]">Every Stage of Growth</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            No hidden contracts or unexpected fees. Get clean flat-rate plans or request a customized package for your exact compliance needs.
                        </p>
                    </div>
                </section>

                {/* Pricing Table */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8 items-stretch">
                            {plans.map((plan, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-white rounded-3xl p-8 border border-gray-155 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative ${plan.highlighted ? 'ring-2 ring-[var(--color-brand-secondary)] md:-translate-y-2' : ''}`}
                                >
                                    {plan.highlighted && (
                                        <span className="absolute top-0 right-8 -translate-y-1/2 bg-[var(--color-brand-secondary)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            Most Popular
                                        </span>
                                    )}
                                    <div>
                                        <h3 className="text-xl font-bold text-[#090a3d] mb-2">{plan.name}</h3>
                                        <p className="text-gray-500 text-xs mb-6 leading-relaxed min-h-[40px]">{plan.desc}</p>
                                        <div className="flex items-baseline gap-1 mb-6 border-b border-gray-100 pb-6">
                                            <span className="text-3xl md:text-4xl font-extrabold text-[#090a3d]">{plan.price}</span>
                                            <span className="text-gray-400 text-xs font-medium">{plan.period}</span>
                                        </div>
                                        <ul className="space-y-4 mb-8">
                                            {plan.features.map((feat, fIdx) => (
                                                <li key={fIdx} className="flex gap-2.5 items-start text-sm text-gray-600">
                                                    <span className="text-green-500 font-bold">✓</span>
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button
                                        onClick={() => window.dispatchEvent(new Event('openConsultationPopup'))}
                                        className={`w-full py-3 rounded-xl font-bold transition-all text-sm cursor-pointer ${plan.highlighted ? 'bg-[#090a3d] hover:bg-[#1a1c6e] text-white shadow-md' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                                    >
                                        {plan.action}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Extra Pricing Callout */}
                <section className="py-16 bg-white border-t border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#090a3d] mb-4">Need a Tailored Quote?</h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-8">
                            If you have multiple GST registration certificates, high volume bank accounts, or require trademark filings across multiple classes — consult our CA team directly. We will frame a custom quote for you.
                        </p>
                        <button onClick={() => window.dispatchEvent(new Event('openConsultationPopup'))}
                            className="bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-xl cursor-pointer">
                            Request Custom Quote
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
