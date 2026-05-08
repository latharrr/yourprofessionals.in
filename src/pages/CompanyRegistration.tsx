import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

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

/* ───────────────── Reusable Section Wrapper ───────────────── */
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
            {badge && (
                <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2 block">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d]">{title}</h2>
        </div>
    );
}

/* ───────────────── Page Table of Contents ───────────────── */
const TOC_ITEMS = [
    { id: 'overview', label: 'Overview' },
    { id: 'types', label: 'Company Types' },
    { id: 'prime-types', label: 'Prime Types' },
    { id: 'how-to-choose', label: 'Business Structure' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'checklist', label: 'Checklist' },
    { id: 'documents', label: 'Documents Required' },
    { id: 'company-name', label: 'Company Name' },
    { id: 'process', label: 'Process' },
    { id: 'fees', label: 'Fees' },
    { id: 'validity', label: 'Validity' },
    { id: 'advantages', label: 'Advantages' },
    { id: 'certificate', label: 'Certificate' },
    { id: 'compliances', label: 'Compliances' },
    { id: 'faq', label: 'FAQs' },
];

/* ───────────────── Main Page ───────────────── */
export default function CompanyRegistration() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <TableOfContents />
                <OverviewSection />
                <TypesSection />
                <PrimeTypesTable />
                <HowToChooseSection />
                <EligibilitySection />
                <ChecklistSection />
                <DocumentsSection />
                <CompanyNameSection />
                <ProcessSection />
                <FeesSection />
                <ValiditySection />
                <AdvantagesSection />
                <CertificateSection />
                <CompliancesSection />
                <FAQSection />
                <WhyChooseUsSection />
            </main>
            <Footer />
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION with consultation form
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
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
                {/* Left content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-tight mb-6">
                        Company Registration Online in India
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
                        Register your company online with Your Professionals. Our experts simplify incorporation, handle approvals, and ensure compliance for a stress‑free experience.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
                        {[
                            'Fast Incorporation within 7–15 Business Days',
                            'PAN, TAN & DIN Provided with Certificate',
                            'Professional Drafting of MoA & AoA',
                            'GST Registration Assistance',
                            'Complete Post-registration Compliance Support',
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm text-gray-200">
                                <span className="text-green-400 text-lg">✓</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right form */}
                <div className="w-full max-w-md">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_0_60px_rgba(199,145,0,0.2)] border border-gray-400">
                        <h3 className="text-[#090a3d] font-bold text-lg mb-4 text-center">Get Free Consultation</h3>
                        {submitSuccess && (
                            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm font-semibold text-center">
                                Thank you! We'll contact you shortly.
                            </div>
                        )}
                        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                            <input
                                type="text" placeholder="Full Name" required value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white border border-gray-400 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)]"
                            />
                            <div>
                                <div className={`flex rounded-lg border bg-white overflow-hidden focus-within:ring-1 ${phoneError ? 'border-red-500 focus-within:ring-red-500' : 'border-gray-400 focus-within:border-[var(--color-brand-secondary)] focus-within:ring-[var(--color-brand-secondary)]'}`}>
                                    <select className="bg-gray-100 border-r border-gray-400 px-3 py-3 text-black focus:outline-none cursor-pointer" value={formData.phoneCode} onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}>
                                        {COUNTRY_CODES.map((c) => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                    <input type="tel" placeholder="Phone Number" maxLength={10} required value={formData.phone}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/[^0-9]/g, '');
                                            setPhoneError(/[^0-9]/.test(e.target.value) ? 'Numbers only' : '');
                                            setFormData({ ...formData, phone: val });
                                        }}
                                        className="w-full bg-transparent px-4 py-3 text-black placeholder-gray-500 focus:outline-none"
                                    />
                                </div>
                                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                            </div>
                            <div>
                                <input type="email" placeholder="Email Address" required value={formData.email}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setEmailError(val.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? 'Enter a valid email' : '');
                                        setFormData({ ...formData, email: val });
                                    }}
                                    className={`w-full bg-white border rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-1 ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-400 focus:border-[var(--color-brand-secondary)] focus:ring-[var(--color-brand-secondary)]'}`}
                                />
                                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                            </div>
                            <select required value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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

/* ═══════════════════════════════════════════════════════════
   TABLE OF CONTENTS (Sticky Nav Bar)
   ═══════════════════════════════════════════════════════════ */
function TableOfContents() {
    return (
        <div className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto max-w-6xl overflow-x-auto scrollbar-hide">
                <nav className="flex items-center gap-1 py-3 px-4 min-w-max">
                    {TOC_ITEMS.map((item) => (
                        <a key={item.id} href={`#${item.id}`}
                            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[var(--color-brand-secondary)] hover:bg-amber-50 rounded-full transition-colors whitespace-nowrap">
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   OVERVIEW
   ═══════════════════════════════════════════════════════════ */
function OverviewSection() {
    return (
        <Section id="overview">
            <SectionTitle title="What is Company Registration in India?" />
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                    Company registration in India legally establishes a business under applicable laws for its structure.
                    Depending on the structure, a business may gain a separate legal identity (such as Private Limited Companies,
                    LLPs, or OPCs) or operate as an extension of the owner (such as Sole Proprietorships and traditional Partnerships).
                </p>
                <p>Registered companies with a separate legal identity can:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    {[
                        { icon: '📝', text: 'Enter into contracts' },
                        { icon: '🏠', text: 'Hold property' },
                        { icon: '🏦', text: 'Open bank accounts' },
                        { icon: '📋', text: 'Apply for licenses like GST, MSME, and FSSAI' },
                    ].map((item) => (
                        <div key={item.text} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="text-gray-800 font-medium">{item.text}</span>
                        </div>
                    ))}
                </div>
                <p>
                    Registration also limits liability, protecting the personal assets of owners. It improves credibility
                    with customers, regulators, and investors. It also provides access to government schemes such as
                    Startup India and Make in India, which offer tax benefits and funding opportunities.
                </p>
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   TYPES OF COMPANY REGISTRATION
   ═══════════════════════════════════════════════════════════ */
const COMPANY_TYPES = [
    {
        title: 'Private Limited Company',
        icon: '🏢',
        description: 'The most popular business structure under the Companies Act, 2013. Offers limited liability and a separate legal identity. Ideal for startups and growing businesses for raising funds and scaling quickly.',
    },
    {
        title: 'Limited Liability Partnership (LLP)',
        icon: '🤝',
        description: 'Combines the flexibility of a partnership with the security of limited liability. Regulated by the LLP Act, 2008. Ideal for professionals and service providers seeking low compliance and shared management.',
    },
    {
        title: 'One Person Company (OPC)',
        icon: '👤',
        description: 'Allows a single entrepreneur to run a business with limited liability. Merges the benefits of a Private Limited Company and a Sole Proprietorship. Great for solo founders.',
    },
    {
        title: 'Public Limited Company',
        icon: '🏛️',
        description: 'Governed by the Companies Act, 2013. Provides limited liability and the ability to raise funds from the public by issuing shares. Used by large businesses and corporations.',
    },
    {
        title: 'Sole Proprietorship',
        icon: '🧑‍💼',
        description: 'The simplest form of business setup. A single owner is personally liable for all debts. Best for freelancers, traders, and local businesses with minimal compliance.',
    },
    {
        title: 'Partnership Firm',
        icon: '👥',
        description: 'Managed under the Indian Partnership Act, 1932. Two or more partners share profits, responsibilities, and liabilities. Suits small businesses and professional services.',
    },
    {
        title: 'Section 8 Company',
        icon: '❤️',
        description: 'Meant for non-profit organizations. Formed under the Companies Act, 2013. Used by NGOs, charities, and social enterprises to promote education, culture, and social welfare.',
    },
    {
        title: 'Nidhi Company',
        icon: '🏦',
        description: 'Under Section 406 of the Companies Act, 2013. Promotes savings among members and provides loans at reasonable rates. Suitable for small-scale finance businesses within a closed group.',
    },
    {
        title: 'Producer Company',
        icon: '🌾',
        description: 'Available for farmers and producers. Allows agricultural producers to pool resources, process goods, and sell collectively. Improves bargaining power and ensures fair returns.',
    },
];

function TypesSection() {
    return (
        <Section id="types" className="bg-gray-50/50">
            <SectionTitle badge="Business Structures" title="Different Types of Company Registration in India" />
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Choosing the right business structure is the first step in starting a company in India. Each type is governed by laws such as the Companies Act, 2013, or the Indian Partnership Act, 1932.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {COMPANY_TYPES.map((type) => (
                    <div key={type.title} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                        <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{type.icon}</span>
                        <h3 className="text-lg font-bold text-[#090a3d] mb-2">{type.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   PRIME TYPES COMPARISON TABLE
   ═══════════════════════════════════════════════════════════ */
function PrimeTypesTable() {
    const data = [
        { type: 'Private Limited Company', features: 'Separate legal entity, higher credibility, easy to raise funds', liability: 'Limited to shares held', idealFor: 'Startups and growth-focused businesses', taxation: 'Corporate tax on profits; eligible for deductions & exemptions' },
        { type: 'One Person Company (OPC)', features: 'Owned by a single person, separate legal status', liability: 'Limited to investment', idealFor: 'Solo entrepreneurs', taxation: 'Corporate tax on profits; simple compliance' },
        { type: 'LLP', features: 'Partnership flexibility with limited liability', liability: 'Limited to contribution', idealFor: 'Professionals and service firms', taxation: 'Profits taxed at LLP level; no DDT' },
        { type: 'Partnership Firm', features: 'Two or more owners share profits', liability: 'Unlimited liability', idealFor: 'Small businesses and services', taxation: 'Profits taxed at firm level; partners taxed on share' },
        { type: 'Sole Proprietorship', features: 'Single owner, easy setup, minimal compliance', liability: 'Unlimited liability', idealFor: 'Freelancers, traders, small shops', taxation: 'Income taxed under personal income tax' },
    ];

    return (
        <Section id="prime-types">
            <SectionTitle badge="Quick Comparison" title="5 Prime Company Registrations in India" />
            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-[#090a3d] text-white">
                            <th className="py-4 px-4 text-left font-semibold rounded-tl-lg">Company Type</th>
                            <th className="py-4 px-4 text-left font-semibold">Key Features</th>
                            <th className="py-4 px-4 text-left font-semibold">Liability</th>
                            <th className="py-4 px-4 text-left font-semibold">Ideal For</th>
                            <th className="py-4 px-4 text-left font-semibold rounded-tr-lg">Taxation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="py-4 px-4 font-semibold text-[#090a3d]">{row.type}</td>
                                <td className="py-4 px-4 text-gray-600">{row.features}</td>
                                <td className="py-4 px-4 text-gray-600">{row.liability}</td>
                                <td className="py-4 px-4 text-gray-600">{row.idealFor}</td>
                                <td className="py-4 px-4 text-gray-600">{row.taxation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   HOW TO CHOOSE
   ═══════════════════════════════════════════════════════════ */
function HowToChooseSection() {
    const factors = [
        { icon: '📋', title: 'Compliance Requirements', desc: 'A sole proprietorship files only income tax returns, while a private limited company files annual returns and ITR with the ROC.' },
        { icon: '👥', title: 'Ownership Structure', desc: 'Pick a model based on how many partners or owners are involved.' },
        { icon: '💰', title: 'Initial Investment', desc: 'Consider your starting capital before choosing between a proprietorship, partnership, LLP, OPC, or private limited company.' },
        { icon: '📈', title: 'Growth Opportunities', desc: 'LLPs and private limited companies attract investors and make fundraising easier.' },
        { icon: '🛡️', title: 'Risk and Liability', desc: 'Sole proprietorships and partnerships carry unlimited liability, while company structures provide limited liability protection.' },
    ];

    return (
        <Section id="how-to-choose" className="bg-gray-50/50">
            <SectionTitle badge="Decision Guide" title="How to Choose the Right Business Structure" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {factors.map((f) => (
                    <div key={f.title} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <span className="text-3xl mb-3 block">{f.icon}</span>
                        <h3 className="font-bold text-[#090a3d] mb-2">{f.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   ELIGIBILITY
   ═══════════════════════════════════════════════════════════ */
function EligibilitySection() {
    const criteria = [
        'At least one director must be a resident of India (stayed 182 days in the previous calendar year).',
        'Every proposed director must obtain a Director Identification Number (DIN) and a Digital Signature Certificate (DSC).',
        'Directors and shareholders must be at least 18 years old and legally capable of entering contracts.',
        'Foreign nationals can act as directors/shareholders with notarized and apostilled identity & address proofs.',
        'Indian applicants must provide PAN, Aadhaar, and a recent address proof (not older than 60 days).',
        'The proposed company name must be unique — use MCA\'s RUN service to check availability.',
        'The company\'s objectives must be lawful and follow Indian regulatory rules.',
    ];

    return (
        <Section id="eligibility">
            <SectionTitle badge="Requirements" title="Eligibility Criteria for Company Registration" />
            <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                    {criteria.map((c, i) => (
                        <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand-secondary)] text-white font-bold flex items-center justify-center text-sm">
                                {i + 1}
                            </span>
                            <p className="text-gray-700">{c}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   CHECKLIST
   ═══════════════════════════════════════════════════════════ */
function ChecklistSection() {
    const checklists = [
        {
            title: 'Pre-Incorporation Requirements',
            icon: '📋',
            items: [
                'Choose a business structure: Pick Pvt Ltd, LLP, or OPC based on capital, liability, and team size.',
                'Reserve a unique company name: Use MCA\'s RUN (Reserve Unique Name) service to avoid conflicts with existing companies or trademarks.',
                'Define business activity: Draft the Memorandum of Association (MoA) with clear objectives that follow industrial classifications.',
                'Finalize capital and ownership: Decide on authorized share capital and shareholding among promoters or partners.',
                'Appoint resident Indian director: At least one director must have lived in India for 182 days in the previous year (Section 149(3)).',
                'Collect KYC documents: Include PAN, Aadhaar (or passport for foreign nationals), address proof (not older than 60 days), and passport-sized photographs.',
            ],
        },
        {
            title: 'Digital and Legal Setup',
            icon: '💻',
            items: [
                'Apply for DSC: Required to digitally sign incorporation documents.',
                'Obtain DIN: Mandatory for all directors before company registration.',
                'Draft incorporation documents: Prepare Articles of Association (AoA) alongside the MoA.',
                'Set up registered office: Submit proof such as utility bill, rent agreement, or No Objection Certificate (NOC) if the office is rented.',
            ],
        },
        {
            title: 'Company Incorporation Process',
            icon: '📝',
            items: [
                'Submit SPICe+ Form (Parts A & B): Complete name reservation, incorporation, PAN, and TAN applications in a single online form on the MCA portal.',
                'Receive Certificate of Incorporation (COI): MCA issues COI, PAN, and TAN digitally after approval.',
            ],
        },
        {
            title: 'Post-Incorporation Essentials',
            icon: '✅',
            items: [
                'Open corporate bank account: Use COI, PAN, and AoA to activate the account.',
                'Apply for GST registration: Mandatory if turnover exceeds the limit or for inter-state/e-commerce businesses.',
                'Appoint statutory auditor: Private Limited companies must appoint an auditor within 30 days (Section 139).',
                'Register for Startup India recognition: Optional, but offers tax benefits, funding access, and compliance relaxations.',
                'Protect intellectual property: Register trademarks, brand names, or logos to secure your identity and brand credibility.',
            ],
        },
    ];

    return (
        <Section id="checklist">
            <SectionTitle badge="Preparation" title="Checklist for Company Registration in India" />
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Registering a company in India under the Companies Act, 2013, requires careful planning. Follow this step-by-step checklist to complete all legal, digital, and regulatory requirements efficiently.
            </p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {checklists.map((checklist) => (
                    <div key={checklist.title} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">{checklist.icon}</span>
                            <h3 className="font-bold text-[#090a3d] text-lg">{checklist.title}</h3>
                        </div>
                        <ul className="space-y-3">
                            {checklist.items.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-[var(--color-brand-secondary)] mt-0.5 flex-shrink-0">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   DOCUMENTS REQUIRED
   ═══════════════════════════════════════════════════════════ */
function DocumentsSection() {
    const docs = [
        {
            type: 'Private Limited Company',
            items: ['PAN and Aadhaar of directors & shareholders', 'Address proof of directors & registered office', 'Passport-sized photographs', 'Memorandum of Association (MoA) & Articles of Association (AoA)', 'Digital Signature Certificates (DSC) & Director Identification Numbers (DIN)'],
        },
        {
            type: 'One Person Company (OPC)',
            items: ['PAN and Aadhaar of the sole owner', 'Address proof of owner & registered office', 'Passport-sized photograph', 'MoA & AoA', 'DSC and DIN of the owner'],
        },
        {
            type: 'LLP',
            items: ['PAN and Aadhaar of partners', 'Address proof of partners & registered office', 'Passport-sized photographs of partners', 'LLP Agreement signed by all partners', 'DSC for designated partners'],
        },
        {
            type: 'Partnership Firm',
            items: ['PAN and Aadhaar of all partners', 'Partnership deed signed by all partners', 'Address proof of partners & registered office', 'Passport-sized photographs', 'Utility bill or rent agreement as proof of office'],
        },
        {
            type: 'Sole Proprietorship',
            items: ['PAN and Aadhaar of the proprietor', 'Proof of business address (rent agreement or utility bill)', 'Bank account proof', 'Passport-sized photograph', 'Business license or GST registration (if applicable)'],
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section id="documents" className="bg-gray-50/50">
            <SectionTitle badge="Documentation" title="Documents Required for Company Registration" />
            <div className="max-w-4xl mx-auto space-y-3">
                {docs.map((doc, i) => (
                    <div key={doc.type} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                        <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                            <span className="font-bold text-[#090a3d]">{doc.type}</span>
                            <span className={`text-gray-400 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        {openIndex === i && (
                            <div className="px-5 pb-5">
                                <ul className="space-y-2">
                                    {doc.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                                            <span className="text-[var(--color-brand-secondary)] mt-1">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   HOW TO SECURE YOUR COMPANY NAME
   ═══════════════════════════════════════════════════════════ */
function CompanyNameSection() {
    const steps = [
        { icon: '🎯', text: 'Reflect your business activity: Ensure the name represents your main business purpose.' },
        { icon: '🚫', text: 'Avoid prohibited words: Do not use words restricted under the Names and Emblems Act.' },
        { icon: '🔍', text: 'Check uniqueness: The name should not match or closely resemble existing registered companies.' },
        { icon: '📄', text: 'Apply via SPICe+: Use the SPICe+ form on the MCA portal. You can propose up to two names.' },
        { icon: '✅', text: 'Wait for ROC approval: The Registrar of Companies (ROC) will verify and approve your name.' },
        { icon: '📅', text: 'Note the reservation period: Once approved, the name is reserved for 20 days.' },
        { icon: '📝', text: 'File SPICe+ Form Part B: Submit this form within 20 days to confirm registration.' },
        { icon: '🔄', text: 'Restart if missed: If you miss the deadline, the application is rejected and you must begin again.' },
    ];

    return (
        <Section id="company-name">
            <SectionTitle badge="Brand Identity" title="How to Secure Your Company Name?" />
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Your company name is the first impression of your business. Choosing a unique and compliant name is essential to establishing your brand and meeting legal requirements.
            </p>
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {steps.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <span className="text-2xl flex-shrink-0">{step.icon}</span>
                            <p className="text-gray-700 text-sm leading-relaxed">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   STEP-BY-STEP PROCESS
   ═══════════════════════════════════════════════════════════ */
function ProcessSection() {
    const steps = [
        { title: 'Choose the Right Business Structure', desc: 'Select from Pvt Ltd, LLP, OPC, Sole Proprietorship, or Partnership based on your needs.', time: '' },
        { title: 'Obtain Director Identification Number (DIN)', desc: 'DIN is mandatory under Section 153 of the Companies Act, 2013 for every director.', time: '1 working day' },
        { title: 'Get a Digital Signature Certificate (DSC)', desc: 'A DSC allows directors to sign electronic documents filed with the MCA.', time: '1–2 working days' },
        { title: 'Reserve a Unique Company Name', desc: 'Check availability using MCA\'s RUN service. Once approved the name is reserved for 20 days.', time: '1–2 working days' },
        { title: 'Draft MoA & AoA', desc: 'The Memorandum of Association states business objectives; the Articles of Association governs internal procedures.', time: '' },
        { title: 'Gather Legal Consents & Declarations', desc: 'Prepare INC-9 (subscriber declaration) and DIR-2 (director consent).', time: '' },
        { title: 'File SPICe+ Form on MCA Portal', desc: 'Integrates name reservation (Part A) and incorporation (Part B). Also file AGILE-PRO-S for GST, EPFO, ESIC.', time: '' },
        { title: 'Pay Statutory Fees', desc: 'Pay government fees on the MCA portal based on company type and authorized share capital.', time: '' },
        { title: 'Receive Certificate of Incorporation', desc: 'Once RoC approves, you receive the CoI confirming your company\'s legal existence.', time: '' },
    ];

    return (
        <Section id="process">
            <SectionTitle badge="Step-by-Step" title="How to Register a Company in India" />
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
                    <div className="space-y-6">
                        {steps.map((step, i) => (
                            <div key={i} className="flex items-start gap-6 relative">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-brand-secondary)] text-white font-bold flex items-center justify-center text-sm z-10 relative">
                                    {i + 1}
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex-1">
                                    <h3 className="font-bold text-[#090a3d] mb-1">{step.title}</h3>
                                    <p className="text-gray-600 text-sm">{step.desc}</p>
                                    {step.time && (
                                        <span className="inline-block mt-2 text-xs bg-amber-50 text-[var(--color-brand-secondary)] font-semibold px-3 py-1 rounded-full">
                                            ⏱ {step.time}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   FEES
   ═══════════════════════════════════════════════════════════ */
function FeesSection() {
    const fees = [
        { type: 'Private Limited Company', govt: '₹5,000 – ₹15,000', professional: '₹5,000 – ₹10,000', additional: '₹1,000 – ₹5,000' },
        { type: 'LLP', govt: '₹500 – ₹5,000', professional: '₹6,000 – ₹15,000', additional: '₹1,000 – ₹3,000' },
        { type: 'One Person Company (OPC)', govt: '₹1,000 – ₹10,000', professional: '₹5,000 – ₹15,000', additional: '₹1,500 – ₹4,000' },
    ];

    return (
        <Section id="fees" className="bg-gray-50/50">
            <SectionTitle badge="Pricing" title="Company Registration Fees in India" />
            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse max-w-4xl mx-auto">
                    <thead>
                        <tr className="bg-[#090a3d] text-white">
                            <th className="py-4 px-4 text-left font-semibold rounded-tl-lg">Company Type</th>
                            <th className="py-4 px-4 text-left font-semibold">Government Fees</th>
                            <th className="py-4 px-4 text-left font-semibold">Professional Fees</th>
                            <th className="py-4 px-4 text-left font-semibold rounded-tr-lg">Additional Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fees.map((row, i) => (
                            <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="py-4 px-4 font-semibold text-[#090a3d]">{row.type}</td>
                                <td className="py-4 px-4 text-gray-600">{row.govt}</td>
                                <td className="py-4 px-4 text-gray-600">{row.professional}</td>
                                <td className="py-4 px-4 text-gray-600">{row.additional}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">
                * Costs vary depending on company type, authorized capital, and state of registration.
            </p>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   VALIDITY
   ═══════════════════════════════════════════════════════════ */
function ValiditySection() {
    const data = [
        { aspect: 'Certificate of Incorporation (CoI)', details: 'Valid indefinitely if the company complies with regulatory requirements.' },
        { aspect: 'Compliance Requirements', details: 'File annual returns, maintain statutory registers, and hold AGMs to remain valid.' },
        { aspect: 'Consequences of Non-Compliance', details: 'Penalties, fines, or removal from the register can invalidate the registration.' },
    ];

    return (
        <Section id="validity">
            <SectionTitle badge="Duration" title="Company Registration Validity" />
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Once your company is incorporated, the Certificate of Incorporation confirms its legal existence. To keep it valid, the company must meet all annual filing, record-keeping, and compliance requirements under the Companies Act, 2013.
            </p>
            <div className="max-w-4xl mx-auto overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-[#090a3d] text-white">
                            <th className="py-4 px-6 text-left font-semibold rounded-tl-lg w-1/3">Aspect</th>
                            <th className="py-4 px-6 text-left font-semibold rounded-tr-lg">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={row.aspect} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="py-4 px-6 font-semibold text-[#090a3d]">{row.aspect}</td>
                                <td className="py-4 px-6 text-gray-600">{row.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   ADVANTAGES
   ═══════════════════════════════════════════════════════════ */
function AdvantagesSection() {
    const advantages = [
        { icon: '⚖️', title: 'Separate Legal Identity', desc: 'The company can own property, sign contracts, and operate independently of its owners.' },
        { icon: '🛡️', title: 'Limited Liability Protection', desc: 'Shareholders\' personal assets are safe from company debts and risks.' },
        { icon: '🏛️', title: 'Access to Government Schemes', desc: 'Programs like Startup India and Make in India provide tax exemptions and funding support.' },
        { icon: '💰', title: 'Tax Benefits', desc: 'Corporate tax rates of 25–30%, with concessional rates as low as 15–22% for new companies and startups.' },
        { icon: '⭐', title: 'Increased Credibility', desc: 'Registered companies are trusted by investors, clients, and vendors.' },
        { icon: '♾️', title: 'Perpetual Succession', desc: 'The company continues to exist even if shareholders or directors change.' },
        { icon: '🔄', title: 'Ease of Ownership Transfer', desc: 'Shares can be sold or transferred, simplifying leadership transitions.' },
        { icon: '🌍', title: 'Global Opportunities', desc: 'Incorporation allows access to international markets and foreign investment.' },
        { icon: '📊', title: 'Ability to Raise Capital', desc: 'Companies can issue shares or debentures to raise funds from investors or financial institutions.' },
    ];

    return (
        <Section id="advantages">
            <SectionTitle badge="Benefits" title="Advantages of Company Incorporation in India" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((a) => (
                    <div key={a.title} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                        <span className="text-3xl mb-3 block">{a.icon}</span>
                        <h3 className="font-bold text-[#090a3d] mb-2">{a.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   CERTIFICATE OF INCORPORATION
   ═══════════════════════════════════════════════════════════ */
function CertificateSection() {
    const certificateIncludes = [
        { icon: '🏢', label: 'Company Name', desc: 'As approved during SPICe+ filing.' },
        { icon: '🔢', label: 'Corporate Identification Number (CIN)', desc: 'Unique ID assigned by the MCA.' },
        { icon: '📅', label: 'Date of Incorporation', desc: 'Legal formation date of the company.' },
        { icon: '📋', label: 'PAN and TAN', desc: 'Issued if applied during incorporation.' },
        { icon: '🏷️', label: 'Company Type', desc: 'Private Limited, LLP, OPC, etc.' },
        { icon: '📍', label: 'Registered Office Address', desc: 'Legal address of the company.' },
    ];

    const howToGet = [
        'Complete the SPICe+ Form: Part A for name reservation, Part B for incorporation.',
        'Upload required documents: MoA, AoA, identity and address proofs, DSC and DIN.',
        'Await RoC approval: After verification, the CoI is issued digitally.',
        'Download your certificate from the MCA portal. No physical copy is provided.',
    ];

    return (
        <Section id="certificate" className="bg-gray-50/50">
            <SectionTitle badge="Legal Document" title="What is a Company Registration Certificate?" />
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="prose prose-lg max-w-none text-gray-700">
                    <p>
                        A Company Registration Certificate, also called the Certificate of Incorporation (CoI), is a government-issued document that legally confirms the formation of a company in India under the Companies Act, 2013. The RoC issues it digitally via the Ministry of Corporate Affairs (MCA) after verifying your incorporation documents.
                    </p>
                    <p>The certificate proves that your business is a separate legal entity. It allows the company to own assets, open bank accounts, apply for statutory registrations, raise funds, sign contracts, and participate in tenders.</p>
                </div>

                <div>
                    <h3 className="font-bold text-xl text-[#090a3d] mb-6">What Does the Certificate Include?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certificateIncludes.map((item) => (
                            <div key={item.label} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-2xl mb-2 block">{item.icon}</span>
                                <h4 className="font-semibold text-[#090a3d] text-sm mb-1">{item.label}</h4>
                                <p className="text-gray-500 text-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-xl text-[#090a3d] mb-6">How to Get the Certificate of Incorporation?</h3>
                    <div className="space-y-3">
                        {howToGet.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand-secondary)] text-white font-bold flex items-center justify-center text-sm">{i + 1}</span>
                                <p className="text-gray-700 text-sm">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   POST-INCORPORATION COMPLIANCES
   ═══════════════════════════════════════════════════════════ */
function CompliancesSection() {
    const compliances = [
        { icon: '📊', title: 'Annual Compliance', desc: 'File annual returns, conduct statutory audits, and meet ROC and tax-related requirements.' },
        { icon: '📒', title: 'Accounting & Bookkeeping', desc: 'Maintain financial records, follow accounting standards, file income tax returns, and ensure GST compliance.' },
        { icon: '📋', title: 'Other Registrations', desc: 'Obtain necessary licenses such as MSME, IEC, ISO, FSSAI, APEDA RCMC, or other applicable registrations.' },
        { icon: '🏛️', title: 'Corporate Secretarial', desc: 'Hold meetings, follow governance norms, complete regulatory filings, and consult expert board advisors.' },
        { icon: '💸', title: 'TDS Compliance', desc: 'Deduct and deposit Tax Deducted at Source for salaries, contractor payments, and professional fees.' },
        { icon: '👥', title: 'Employee Compliances', desc: 'Register employees under EPF, ESIC, and professional tax; maintain payroll and statutory records.' },
        { icon: '⚖️', title: 'Labour Law Compliance', desc: 'Follow applicable labour laws, including the Shop & Establishment Act, minimum wages, and leave policies.' },
        { icon: '📝', title: 'Other Statutory Filings', desc: 'Comply with ROC and other authority requirements under Companies (Appointment & Remuneration of Managerial Personnel) Rules, 2014.' },
    ];

    return (
        <Section id="compliances">
            <SectionTitle badge="After Registration" title="Post-Incorporation Compliances" />
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                After registering your company in India, you must follow all post-incorporation compliances. These ensure your business stays legally active and avoids penalties. Compliance requirements vary based on your company type.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                {compliances.map((c) => (
                    <div key={c.title} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                        <span className="text-3xl mb-3 block">{c.icon}</span>
                        <h3 className="font-bold text-[#090a3d] text-sm mb-2">{c.title}</h3>
                        <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════════════ */
function FAQSection() {
    const faqs = [
        { q: 'Is there a minimum capital requirement for company registration in India?', a: 'No, there is no mandatory minimum capital requirement. Earlier, private limited companies needed ₹1 lakh, but this requirement has been removed. You can start with any amount of capital.' },
        { q: 'How many days does it take to register a company in India?', a: 'Typically 7–15 business days, depending on the type of company and the completeness of documents. With professional assistance the process can be faster.' },
        { q: 'Can a foreigner or NRI register a company in India?', a: 'Yes. Foreign nationals and NRIs can act as directors or shareholders. They must submit notarized and apostilled identity/address proofs including passport and utility bill.' },
        { q: 'Can I register a company online through the MCA?', a: 'Yes. Company registration in India is fully online through the MCA portal using the SPICe+ form, which integrates name reservation, incorporation, and PAN/TAN applications.' },
        { q: 'Is GST registration mandatory for new companies?', a: 'GST registration is mandatory if your turnover exceeds the threshold limit, or if you are involved in inter-state supply or e-commerce.' },
        { q: 'What is a Certificate of Incorporation?', a: 'The Certificate of Incorporation (CoI) is a government-issued document that legally confirms the formation of your company. It includes the company name, CIN, date of incorporation, PAN, TAN, and registered office address.' },
        { q: 'Can I use a virtual office address for company registration?', a: 'Yes, you can use a virtual office address for company registration in India, provided it meets the requirements set by the MCA for a registered office.' },
        { q: 'What happens if a company does not comply with ROC filings?', a: 'Non-compliance can result in penalties, fines, or even removal from the register. It is important to file annual returns and maintain statutory records on time.' },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section id="faq" className="bg-gray-50/50">
            <SectionTitle badge="Got Questions?" title="Frequently Asked Questions" />
            <div className="max-w-4xl mx-auto space-y-3">
                {faqs.map((faq, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                        <button className="w-full flex items-center justify-between p-5 text-left gap-4" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                            <span className="font-semibold text-[#090a3d]">{faq.q}</span>
                            <span className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        {openIndex === i && (
                            <div className="px-5 pb-5">
                                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ═══════════════════════════════════════════════════════════
   WHY CHOOSE US
   ═══════════════════════════════════════════════════════════ */
function WhyChooseUsSection() {
    const reasons = [
        { icon: '🇮🇳', title: 'Pan-India Expertise', desc: 'We register all company types — Pvt Ltd, LLP, OPC, Public Ltd — across India with full compliance under the Companies Act, 2013.' },
        { icon: '📍', title: 'State-Specific Compliance', desc: 'We handle local rules like stamp duty, Shops & Establishment registration, and state taxes.' },
        { icon: '⏰', title: 'Timely Filings', desc: 'We track all deadlines for SPICe+, DIN, DSC, and annual filings to prevent penalties.' },
        { icon: '🔄', title: 'End-to-End Assistance', desc: 'From name approval and MoA/AoA drafting to PAN/TAN, bank account setup, and statutory registrations.' },
        { icon: '💎', title: 'Transparent Pricing', desc: 'Clear pricing, dedicated compliance expert, and professional support with no hidden charges.' },
        { icon: '🚀', title: 'Growth-Focused Approach', desc: 'We structure your company to attract investors and support long-term growth.' },
    ];

    return (
        <Section>
            <SectionTitle badge="Why Us" title="Why Choose Your Professionals for Company Registration?" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((r) => (
                    <div key={r.title} className="bg-gradient-to-br from-[#090a3d] to-[#1a1b5e] text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <span className="text-3xl mb-3 block">{r.icon}</span>
                        <h3 className="font-bold text-lg mb-2">{r.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{r.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
