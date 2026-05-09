import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';
import { SERVICES, type ServiceData } from '../data/services';

const SERVICES_LIST = [
    "Private Limited Company Registration",
    "One Person Company Registration (OPC)",
    "LLP Registration",
    "Partnership Firm Registration",
    "Sole Proprietorship Registration",
    "Startup India Registration",
    "Section 8 Company Registration",
    "Nidhi Company Registration",
    "Producer Company Registration",
];

const COUNTRY_CODES = ["+91", "+1", "+44"];

/* ───────── Reusable UI ───────── */
function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
    return (
        <section id={id} className={`py-16 px-4 md:px-8 ${className}`}>
            <div className="container mx-auto max-w-6xl">{children}</div>
        </section>
    );
}

function SectionTitle({ badge, title }: { badge?: string; title: string }) {
    return (
        <div className="text-center mb-12">
            {badge && <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2 block">{badge}</span>}
            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d]">{title}</h2>
        </div>
    );
}

/* ═══════════════════ HERO ═══════════════════ */
function HeroSection({ data }: { data: ServiceData }) {
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: '', phoneCode: '+91', phone: '', email: '', service: '' });

    const handleFormSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (phoneError || emailError || !formData.name || !formData.phone || !formData.email || !formData.service) {
            alert('Please fill all fields correctly before submitting.');
            return;
        }
        setIsSubmitting(true);
        try {
            const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
            const params = new URLSearchParams();
            params.append('Name', formData.name);
            params.append('Phone', `${formData.phoneCode} ${formData.phone}`);
            params.append('Email', formData.email);
            params.append('Service', formData.service);
            await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, { method: 'POST', mode: 'no-cors' });

            await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    phone: `${formData.phoneCode} ${formData.phone}`,
                    email: formData.email,
                    service: formData.service
                })
            });

            setSubmitSuccess(true);
            setFormData({ name: '', phoneCode: '+91', phone: '', email: '', service: '' });
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch {
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-[#090a3d] pt-32 lg:pt-40 pb-16 lg:pb-24 px-4 md:px-8 relative overflow-hidden text-white flex flex-col items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[var(--color-brand-secondary)] opacity-10 blur-[120px] rounded-full z-0" />
            <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10 max-w-6xl gap-12">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-tight mb-6">{data.title}</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">{data.subtitle}</p>
                    <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
                        {data.heroFeatures.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm text-gray-200">
                                <span className="text-green-400 text-lg">✓</span>{item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full max-w-md">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_0_60px_rgba(199,145,0,0.2)] border border-gray-400">
                        <h3 className="text-[#090a3d] font-bold text-lg mb-4 text-center">Get Free Consultation</h3>
                        {submitSuccess && <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm font-semibold text-center">Thank you! We'll contact you shortly.</div>}
                        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                            <input type="text" placeholder="Full Name" required value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white border border-gray-400 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)]" />
                            <div>
                                <div className={`flex rounded-lg border bg-white overflow-hidden focus-within:ring-1 ${phoneError ? 'border-red-500 focus-within:ring-red-500' : 'border-gray-400 focus-within:border-[var(--color-brand-secondary)] focus-within:ring-[var(--color-brand-secondary)]'}`}>
                                    <select className="bg-gray-100 border-r border-gray-400 px-3 py-3 text-black focus:outline-none cursor-pointer" value={formData.phoneCode} onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}>
                                        {COUNTRY_CODES.map((c) => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                    <input type="tel" placeholder="Phone Number" maxLength={10} required value={formData.phone}
                                        onChange={(e) => { const val = e.target.value.replace(/[^0-9]/g, ''); setPhoneError(/[^0-9]/.test(e.target.value) ? 'Numbers only' : ''); setFormData({ ...formData, phone: val }); }}
                                        className="w-full bg-transparent px-4 py-3 text-black placeholder-gray-500 focus:outline-none" />
                                </div>
                                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                            </div>
                            <div>
                                <input type="email" placeholder="Email Address" required value={formData.email}
                                    onChange={(e) => { const val = e.target.value; setEmailError(val.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? 'Enter a valid email' : ''); setFormData({ ...formData, email: val }); }}
                                    className={`w-full bg-white border rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-1 ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-400 focus:border-[var(--color-brand-secondary)] focus:ring-[var(--color-brand-secondary)]'}`} />
                                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                            </div>
                            <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                className="w-full bg-white border border-gray-400 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)] cursor-pointer">
                                <option value="" disabled>Select Registration Type</option>
                                {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <button type="submit" disabled={isSubmitting}
                                className={`w-full bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold rounded-lg px-4 py-3 transition-colors uppercase tracking-wide text-sm shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                                {isSubmitting ? 'Submitting...' : 'Claim Your Free Consultation'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════ TABLE OF CONTENTS ═══════════════════ */
function TableOfContents({ data }: { data: ServiceData }) {
    const items = [
        { id: 'overview', label: 'Overview' },
    ];
    if (data.types?.length) items.push({ id: 'types', label: 'Types' });
    items.push({ id: 'eligibility', label: 'Eligibility' });
    items.push({ id: 'documents', label: 'Documents' });
    items.push({ id: 'process', label: 'Process' });
    items.push({ id: 'fees', label: 'Fees' });
    if (data.penalties?.length) items.push({ id: 'penalties', label: 'Penalties' });
    items.push({ id: 'advantages', label: 'Benefits' });
    if (data.compliance?.length) items.push({ id: 'compliance', label: 'Compliance' });
    items.push({ id: 'faq', label: 'FAQs' });
    return (
        <div className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto max-w-6xl overflow-x-auto scrollbar-hide">
                <nav className="flex items-center gap-1 py-3 px-4 min-w-max">
                    {items.map((item) => (
                        <a key={item.id} href={`#${item.id}`} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[var(--color-brand-secondary)] hover:bg-amber-50 rounded-full transition-colors whitespace-nowrap">{item.label}</a>
                    ))}
                </nav>
            </div>
        </div>
    );
}

/* ═══════════════════ OVERVIEW ═══════════════════ */
function OverviewSection({ data }: { data: ServiceData }) {
    return (
        <Section id="overview">
            <SectionTitle title={data.overview.heading} />
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                {data.overview.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    {data.overview.highlights.map((h) => (
                        <div key={h.text} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <span className="text-2xl">{h.icon}</span>
                            <span className="text-gray-800 font-medium">{h.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ═══════════════════ ELIGIBILITY ═══════════════════ */
function EligibilitySection({ data }: { data: ServiceData }) {
    return (
        <Section id="eligibility" className="bg-gray-50">
            <SectionTitle badge="Requirements" title="Eligibility Criteria" />
            <div className="max-w-4xl mx-auto space-y-4">
                {data.eligibility.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <span className="flex-shrink-0 w-8 h-8 bg-[var(--color-brand-secondary)]/10 text-[var(--color-brand-secondary)] font-bold rounded-full flex items-center justify-center text-sm">{i + 1}</span>
                        <p className="text-gray-700">{item}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ═══════════════════ DOCUMENTS ═══════════════════ */
function DocumentsSection({ data }: { data: ServiceData }) {
    const [openIdx, setOpenIdx] = useState<number | null>(0);
    return (
        <Section id="documents">
            <SectionTitle badge="Paperwork" title="Documents Required" />
            <div className="max-w-4xl mx-auto space-y-4">
                {data.documents.map((cat, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors">
                            <span className="font-semibold text-[#090a3d]">{cat.category}</span>
                            <svg className={`w-5 h-5 text-gray-500 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {openIdx === idx && (
                            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {cat.items.map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <span className="text-green-500 mt-0.5">✓</span>
                                        <span className="text-gray-700 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ═══════════════════ PROCESS ═══════════════════ */
function ProcessSection({ data }: { data: ServiceData }) {
    return (
        <Section id="process" className="bg-gray-50">
            <SectionTitle badge="Step by Step" title="Registration Process" />
            <div className="max-w-4xl mx-auto relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-brand-secondary)]/20 hidden md:block" />
                <div className="space-y-6">
                    {data.process.map((step, i) => (
                        <div key={i} className="flex gap-4 md:gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-brand-secondary)] text-white font-bold rounded-full flex items-center justify-center text-lg z-10 shadow">{i + 1}</div>
                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex-1">
                                <h3 className="font-bold text-[#090a3d] text-lg">{step.title}</h3>
                                <p className="text-gray-600 mt-1">{step.desc}</p>
                                {step.time && <span className="inline-block mt-2 text-xs font-semibold text-[var(--color-brand-secondary)] bg-amber-50 px-3 py-1 rounded-full">{step.time}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ═══════════════════ FEES ═══════════════════ */
function FeesSection({ data }: { data: ServiceData }) {
    return (
        <Section id="fees">
            <SectionTitle badge="Pricing" title="Fees & Charges" />
            <div className="max-w-4xl mx-auto overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#090a3d] text-white">
                            <th className="p-4 rounded-tl-xl">Fee Component</th>
                            <th className="p-4 rounded-tr-xl text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.fees.map((fee, i) => (
                            <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <td className="p-4 text-gray-700 font-medium">{fee.item}</td>
                                <td className="p-4 text-right font-semibold text-[var(--color-brand-secondary)]">{fee.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Section>
    );
}

/* ═══════════════════ ADVANTAGES ═══════════════════ */
function AdvantagesSection({ data }: { data: ServiceData }) {
    return (
        <Section id="advantages" className="bg-gray-50">
            <SectionTitle badge="Benefits" title="Key Advantages" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.advantages.map((adv, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-3xl mb-3 block">{adv.icon}</span>
                        <h3 className="font-bold text-[#090a3d] text-lg mb-2">{adv.title}</h3>
                        <p className="text-gray-600">{adv.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ═══════════════════ FAQ ═══════════════════ */
function FAQSection({ data }: { data: ServiceData }) {
    const [openIdx, setOpenIdx] = useState<number | null>(0);
    return (
        <Section id="faq">
            <SectionTitle badge="Common Questions" title="Frequently Asked Questions" />
            <div className="max-w-4xl mx-auto space-y-3">
                {data.faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors text-left">
                            <span className="font-semibold text-[#090a3d] pr-4">{faq.q}</span>
                            <svg className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {openIdx === idx && <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>}
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ═══════════════════ WHY CHOOSE US ═══════════════════ */
function WhyChooseUsSection() {
    const reasons = [
        { icon: '👨‍💼', title: 'Expert Professionals Team ', desc: 'Qualified Chartered Accountants and Company Secretaries handle your filing.' },
        { icon: '⚡', title: 'Fast Processing', desc: 'Quick turnaround with dedicated support at every step.' },
        { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges. Know exactly what you pay for.' },
        { icon: '🔒', title: '100% Data Security', desc: 'Your documents and data are encrypted and confidential.' },
        { icon: '🏆', title: 'Trusted by Thousands', desc: 'Thousands of businesses registered successfully.' },
        { icon: '📞', title: '24/7 Support', desc: 'Dedicated relationship manager and customer support.' },
    ];
    return (
        <Section id="why-choose-us" className="bg-[#090a3d]">
            <SectionTitle badge="Our Commitment" title="Why Choose Us?" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((r, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                        <span className="text-3xl mb-3 block">{r.icon}</span>
                        <h3 className="font-bold text-white text-lg mb-2">{r.title}</h3>
                        <p className="text-gray-300">{r.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ═══════════════════ MAIN PAGE WRAPPER ═══════════════════ */
export default function RegistrationPage() {
    const { slug } = useParams<{ slug: string }>();
    const data = slug ? SERVICES[slug] : undefined;

    if (!data) return <Navigate to="/" replace />;

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': data.title,
        'description': data.subtitle,
        'provider': {
            '@type': 'Organization',
            'name': 'Your Professionals',
            'url': 'https://www.yourprofessional.in',
            'telephone': '+91-7011936958',
            'email': 'info@yourprofessional.in',
        },
        'areaServed': 'IN',
        'serviceType': data.title,
        'url': `https://www.yourprofessional.in/${slug}`,
    };

    const faqSchema = data.faqs.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': data.faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.q,
            'acceptedAnswer': { '@type': 'Answer', 'text': faq.a },
        })),
    } : null;

    const schemas = faqSchema ? [serviceSchema, faqSchema] : [serviceSchema];

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <SEO
                title={`${data.title} – Fast & Reliable | Your Professionals`}
                description={`${data.subtitle} Expert CA & CS support. Transparent pricing. Free consultation. Get started today with Your Professionals.`}
                canonical={`/${slug}`}
                schema={schemas}
            />
            <Header />
            <main className="flex-grow">
                <HeroSection data={data} />
                <TableOfContents data={data} />
                <OverviewSection data={data} />
                <EligibilitySection data={data} />
                <DocumentsSection data={data} />
                <ProcessSection data={data} />
                <FeesSection data={data} />
                <AdvantagesSection data={data} />
                <FAQSection data={data} />
                <WhyChooseUsSection />
            </main>
            <Footer />
        </div>
    );
}
