import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';
import OtherServiceModal from '../components/common/OtherServiceModal';
import { getStoredBlogs } from '../data/blogs';
import type { BlogPostItem } from '../data/blogs';

export default function Blogs() {
    const [blogs] = useState<BlogPostItem[]>(() => getStoredBlogs());
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Sidebar quick lead form
    const [leadName, setLeadName] = useState('');
    const [leadPhone, setLeadPhone] = useState('');
    const [leadEmail, setLeadEmail] = useState('');
    const [leadService, setLeadService] = useState('');
    const [leadOtherService, setLeadOtherService] = useState('');
    const [leadSuccess, setLeadSuccess] = useState(false);
    const [leadOtherModalOpen, setLeadOtherModalOpen] = useState(false);

    const BLOG_FORM_SERVICES = [
        "Private Limited Company Registration",
        "LLP Registration",
        "One Person Company (OPC)",
        "GST Registration & Return Filing",
        "Trademark & Brand Registration",
        "Annual MCA Compliance",
        "Income Tax Return Filing",
        "Accounting & Bookkeeping",
        "Virtual CFO Services",
        "FSSAI Food License",
        "Import Export Code (IEC)",
        "Other Service"
    ];

    const categories = [
        'All',
        'Company Registration',
        'GST & Taxation',
        'MCA & Corporate Compliance',
        'IPR & Trademark',
        'Accounting & Finance',
        'Others'
    ];

    const filteredBlogs = blogs.filter(b => {
        const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
        const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            b.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!leadName || !leadPhone || !leadEmail || !leadService) return;
        if (leadService === 'Other Service' && !leadOtherService) return;

        const fullService = leadService === 'Other Service' && leadOtherService
            ? `Other: ${leadOtherService}`
            : leadService;

        const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
        if (GOOGLE_SCRIPT_URL) {
            const params = new URLSearchParams();
            params.append('Name', leadName);
            params.append('Phone', leadPhone);
            params.append('Email', leadEmail);
            params.append('Service', fullService);
            await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, { method: 'POST', mode: 'no-cors' }).catch(() => {});
        }

        await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: leadName, phone: leadPhone, email: leadEmail, service: fullService })
        }).catch(() => {});

        setLeadSuccess(true);
        setLeadName('');
        setLeadPhone('');
        setLeadEmail('');
        setLeadService('');
        setLeadOtherService('');
        setTimeout(() => setLeadSuccess(false), 5000);
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-slate-50">
            <SEO
                title="Business & Tax Compliance Blogs – Your Professionals"
                description="Expert guides on company incorporation, GST return filing, trademark registration, and corporate compliance in India."
                canonical="/blogs"
            />
            <Header />

            <main className="flex-grow pt-28 pb-20">
                {/* HERO BANNER & SEARCH */}
                <section className="bg-gradient-to-br from-[#090a3d] via-[#0f1163] to-[#1a1c6e] text-white py-16 px-4 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto text-center relative z-10 space-y-4">
                        <span className="inline-block bg-white/10 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10 uppercase tracking-widest">
                            Knowledge Base &amp; Regulatory Insights
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                            Corporate Law, Tax &amp; Startup Guides
                        </h1>
                        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
                            Actionable compliance advice written by experienced Chartered Accountants, CS professionals, and Legal Consultants.
                        </p>

                        {/* Search Bar */}
                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search articles, GST, trademark, ROC filing..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white text-gray-900 rounded-full px-5 py-3 pl-11 text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)]"
                                />
                                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CATEGORY FILTER PILLS */}
                <div className="container mx-auto px-4 md:px-8 py-8">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${selectedCategory === cat ? 'bg-[#090a3d] text-white shadow-md' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* MAIN CONTENT GRID - BLOGS LIST + STICKY LEAD CAPTURE SIDEBAR */}
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                        {/* LEFT 8 COLUMNS - BLOG POSTS */}
                        <div className="lg:col-span-8 space-y-8">
                            {filteredBlogs.length === 0 ? (
                                <div className="bg-white p-12 rounded-3xl border text-center text-gray-500">
                                    No blogs found matching your search. Try another keyword or category.
                                </div>
                            ) : (
                                filteredBlogs.map((blog) => (
                                    <article
                                        key={blog.id}
                                        className="bg-white rounded-3xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid sm:grid-cols-12 gap-6 p-6 group hover:-translate-y-1"
                                    >
                                        <div className="sm:col-span-5 h-48 sm:h-auto rounded-2xl overflow-hidden relative bg-slate-100">
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <span className="absolute top-3 left-3 bg-[#090a3d] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                                {blog.category}
                                            </span>
                                        </div>

                                        <div className="sm:col-span-7 flex flex-col justify-between space-y-3">
                                            <div>
                                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                                    <span>{blog.date}</span>
                                                    <span>•</span>
                                                    <span>{blog.readTime}</span>
                                                </div>
                                                <h2 className="text-lg font-bold text-[#090a3d] group-hover:text-[var(--color-brand-secondary)] transition-colors leading-snug mb-2">
                                                    <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                                </h2>
                                                <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                                                    {blog.excerpt}
                                                </p>
                                            </div>

                                            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                                                <span className="text-xs font-semibold text-gray-500">By {blog.author}</span>
                                                <Link
                                                    to={`/blog/${blog.slug}`}
                                                    className="text-xs font-bold text-[var(--color-brand-secondary)] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                                >
                                                    <span>Read Full Article</span>
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            )}
                        </div>

                        {/* RIGHT 4 COLUMNS - STICKY LEAD CAPTURE SIDEBAR (HIGH CONVERSION) */}
                        <div className="lg:col-span-4 space-y-6">
                            
                            {/* Sticky Card 1: Instant Consultation Callback Form */}
                            <div className="bg-gradient-to-br from-[#090a3d] to-[#1a1c6e] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden lg:sticky lg:top-32">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

                                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                                    Instant Expert Callback
                                </span>

                                <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2 text-white">
                                    Need Legal or Tax Assistance?
                                </h3>
                                <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                                    Speak with senior Chartered Accountants and Company Secretaries. Get tailored advice for your business.
                                </p>

                                {leadSuccess && (
                                    <div className="mb-4 p-3 bg-emerald-500/20 border border-emerald-400 text-emerald-300 rounded-xl text-xs font-bold text-center">
                                        ✓ Request received! Our CA team will call you back within 15 minutes.
                                    </div>
                                )}

                                <form onSubmit={handleLeadSubmit} className="space-y-3 text-xs">
                                    <div>
                                        <label className="text-gray-300 font-semibold block mb-1">Your Name *</label>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            value={leadName}
                                            onChange={(e) => setLeadName(e.target.value)}
                                            className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-brand-secondary)]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-gray-300 font-semibold block mb-1">Mobile / WhatsApp Number *</label>
                                        <input
                                            type="tel"
                                            placeholder="10-digit mobile number"
                                            value={leadPhone}
                                            maxLength={10}
                                            onChange={(e) => setLeadPhone(e.target.value.replace(/[^0-9]/g, ''))}
                                            className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-brand-secondary)]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-gray-300 font-semibold block mb-1">Email Address *</label>
                                        <input
                                            type="email"
                                            placeholder="name@example.com"
                                            value={leadEmail}
                                            onChange={(e) => setLeadEmail(e.target.value)}
                                            className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-brand-secondary)]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-gray-300 font-semibold block mb-1">Select Service Needed *</label>
                                        <select
                                            value={leadService}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                setLeadService(val);
                                                if (val !== 'Other Service') {
                                                    setLeadOtherService('');
                                                } else {
                                                    setLeadOtherModalOpen(true);
                                                }
                                            }}
                                            className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[var(--color-brand-secondary)] cursor-pointer"
                                            required
                                        >
                                            <option value="" disabled className="bg-[#090a3d] text-gray-400">Select Service Required</option>
                                            {BLOG_FORM_SERVICES.map(s => (
                                                <option key={s} value={s} className="bg-[#090a3d] text-white">{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* 'OTHER SERVICE' SUMMARY / STATUS */}
                                    {leadService === 'Other Service' && (
                                        <div className="flex items-center justify-between gap-2 bg-white/10 border border-amber-400/60 rounded-xl px-3.5 py-2.5">
                                            <span className="text-xs text-gray-200 truncate">
                                                {leadOtherService ? <><span className="font-semibold text-white">Your requirement:</span> {leadOtherService}</> : 'No requirement noted yet.'}
                                            </span>
                                            <button type="button" onClick={() => setLeadOtherModalOpen(true)} className="text-xs font-bold text-amber-400 hover:underline shrink-0 cursor-pointer">
                                                {leadOtherService ? 'Edit' : 'Add details'}
                                            </button>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="w-full bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-extrabold py-3 rounded-xl transition-all shadow-lg text-xs cursor-pointer tracking-wide uppercase mt-2"
                                    >
                                        Request Free Callback
                                    </button>
                                </form>

                                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-300">
                                    <span>Direct Phone Helpline:</span>
                                    <a href="tel:+919354332511" className="font-bold text-amber-300 hover:underline">+91 93543 32511</a>
                                </div>
                            </div>

                            {/* Card 2: Free Download Lead Magnet */}
                            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[var(--color-brand-secondary)] flex items-center justify-center text-xl font-bold">
                                    📋
                                </div>
                                <h4 className="font-bold text-[#090a3d] text-base">
                                    Download Free Startup Compliance Guide 2026
                                </h4>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Complete timeline for ROC forms AOC-4, MGT-7, DIR-3 KYC, and GST return filing schedules.
                                </p>
                                <button
                                    onClick={() => window.dispatchEvent(new Event('openConsultationPopup'))}
                                    className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-[#090a3d] font-bold text-xs rounded-xl transition-colors cursor-pointer text-center block"
                                >
                                    Get Free PDF Guide →
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </main>



            <Footer />

            <OtherServiceModal
                isOpen={leadOtherModalOpen}
                initialValue={leadOtherService}
                onClose={() => setLeadOtherModalOpen(false)}
                onSave={(value) => setLeadOtherService(value)}
            />
        </div>
    );
}
