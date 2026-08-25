import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';
import OtherServiceModal from '../components/common/OtherServiceModal';
import { getStoredBlogs } from '../data/blogs';
import type { BlogPostItem } from '../data/blogs';

const SERVICES_LIST = [
    "Private Limited Company Registration",
    "One Person Company Registration (OPC)",
    "LLP Registration",
    "Partnership Firm Registration",
    "Sole Proprietorship Registration",
    "Startup India Registration",
    "Virtual Office",
    "Compliance Services",
    "Trademark Registration",
    "Copyright Registration",
    "GST Registration",
    "Section 8 Company Registration",
    "GST Return Filing",
    "FSSAI Registration",
    "BIS Registration",
    "NGO Registration",
    "Need A Job",
    "Need help with Other Services"
];

const COUNTRY_CODES = ["+91", "+1", "+44", "+971", "+65", "+61"];

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<BlogPostItem | null>(null);
    const [allBlogs, setAllBlogs] = useState<BlogPostItem[]>([]);

    // Full Lead form inside article sidebar
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formError, setFormError] = useState('');
    const [otherModalOpen, setOtherModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phoneCode: '+91',
        phone: '',
        email: '',
        service: '',
        customService: ''
    });

    useEffect(() => {
        const stored = getStoredBlogs();
        setAllBlogs(stored);
        const match = stored.find(b => b.slug === slug || b.id === slug);
        if (match) {
            setBlog(match);
        } else {
            setBlog(stored[0] || null);
        }
    }, [slug]);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <p className="text-gray-500 font-bold">Loading article...</p>
            </div>
        );
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (/[^0-9]/.test(val)) {
            setPhoneError('Please enter numbers only.');
        } else {
            setPhoneError('');
        }
        setFormData(prev => ({ ...prev, phone: val.replace(/[^0-9]/g, '') }));
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (val.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
        setFormData(prev => ({ ...prev, email: val }));
    };

    const handleArticleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError('');
        if (phoneError || emailError || !formData.name || !formData.phone || !formData.email || !formData.service) {
            setFormError('Please fill all fields correctly before submitting.');
            return;
        }
        if ((formData.service === 'Need help with Other Services' || formData.service === 'Other Service') && !formData.customService) {
            setFormError('Please specify your required service.');
            return;
        }
        setIsSubmitting(true);
        try {
            const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
            const fullService = (formData.service === 'Need help with Other Services' || formData.service === 'Other Service') && formData.customService
                ? `Other: ${formData.customService}`
                : formData.service;

            if (GOOGLE_SCRIPT_URL) {
                const params = new URLSearchParams();
                params.append('Name', formData.name);
                params.append('Phone', `${formData.phoneCode} ${formData.phone}`);
                params.append('Email', formData.email);
                params.append('Service', fullService);
                await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, { method: 'POST', mode: 'no-cors' });
            }

            await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    phone: `${formData.phoneCode} ${formData.phone}`,
                    email: formData.email,
                    service: fullService
                })
            }).catch(() => {});

            setSubmitSuccess(true);
            setFormData({ name: '', phoneCode: '+91', phone: '', email: '', service: '', customService: '' });
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch {
            setFormError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const relatedBlogs = allBlogs.filter(b => b.id !== blog.id).slice(0, 3);

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: blog.title,
        description: blog.excerpt,
        image: blog.image,
        datePublished: blog.date,
        author: { '@type': 'Person', name: blog.author },
        publisher: {
            '@type': 'Organization',
            name: 'Your Professionals',
            logo: { '@type': 'ImageObject', url: 'https://www.yourprofessionals.in/logo.svg' },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.yourprofessionals.in/blog/${blog.slug}`,
        },
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
            <SEO
                title={`${blog.title} — Your Professionals`}
                description={blog.excerpt}
                canonical={`/blog/${blog.slug}`}
                ogImage={blog.image}
                schema={articleSchema}
            />
            <Header />

            {/* HERO BANNER */}
            <section className="pt-32 pb-12 bg-[#090a3d] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-4">
                        <Link to="/blogs" className="hover:underline">Blogs</Link>
                        <span>/</span>
                        <span className="text-gray-300">{blog.category}</span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 border-t border-white/10 pt-4">
                        <span>By <strong className="text-white">{blog.author}</strong></span>
                        <span>•</span>
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span className="bg-amber-400/20 text-amber-300 px-3.5 py-1 rounded-full border border-amber-400/30 font-bold">{blog.category}</span>
                    </div>
                </div>
            </section>

            {/* CONTENT + SIDEBAR GRID */}
            <main className="py-12">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                        {/* LEFT 8 COLUMNS - ARTICLE CONTENT */}
                        <div className="lg:col-span-8 space-y-8">
                            
                            {/* Feature Image */}
                            {blog.image && (
                                <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                                    <img src={blog.image} alt={blog.title} className="w-full h-auto max-h-[460px] object-cover" />
                                </div>
                            )}

                            {/* Excerpt callout */}
                            <div className="p-6 bg-amber-50/80 border-l-4 border-amber-400 rounded-r-2xl text-gray-800 text-base italic leading-relaxed shadow-sm">
                                "{blog.excerpt}"
                            </div>

                            {/* Article Body */}
                            <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-normal space-y-6">
                                {blog.content ? (
                                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                                ) : (
                                    <p>Detailed article content goes here.</p>
                                )}
                            </article>

                            {/* Author Bio Card */}
                            <div className="p-6 bg-white rounded-3xl border border-gray-200 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-brand-secondary)] text-white font-bold flex items-center justify-center text-xl shadow-md shrink-0">
                                    {blog.author.charAt(0)}
                                </div>
                                <div className="space-y-1 text-center sm:text-left">
                                    <h4 className="font-bold text-base text-[#090a3d]">{blog.author}</h4>
                                    <p className="text-xs text-gray-500">Corporate Law &amp; Taxation Specialist at Your Professionals</p>
                                    <p className="text-xs text-gray-600 pt-1 leading-relaxed">
                                        Helped over 500+ Indian startups and SMEs navigate business incorporation, MCA compliance, GST filings, and intellectual property.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT 4 COLUMNS - SIDEBAR LEAD FORM */}
                        <div className="lg:col-span-4 space-y-6">
                            
                            {/* Sticky Full Lead Capture Form Widget */}
                            <div className="bg-[#090a3d] text-white p-6 sm:p-7 rounded-3xl shadow-2xl space-y-4 lg:sticky lg:top-32 border border-amber-400/30 relative overflow-hidden">
                                
                                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

                                <div className="text-center space-y-1">
                                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-amber-400/30">
                                        Direct Advisory Desk
                                    </span>
                                    <h3 className="text-lg font-extrabold text-white pt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        Have a Specific Business Case?
                                    </h3>
                                    <p className="text-xs text-gray-300 leading-relaxed">
                                        Fill your details below to get a free 1-on-1 consultation with our senior CA practitioners.
                                    </p>
                                </div>

                                {submitSuccess && (
                                    <div className="p-3 bg-emerald-500/20 border border-emerald-400 text-emerald-300 rounded-xl text-xs font-bold text-center">
                                        Thank you. Information submitted. Our CA team will call you back shortly.
                                    </div>
                                )}

                                {formError && (
                                    <div className="p-3 bg-red-500/15 border border-red-400/60 text-red-300 rounded-xl text-xs font-bold text-center">
                                        {formError}
                                    </div>
                                )}

                                <form onSubmit={handleArticleLeadSubmit} className="space-y-3 pt-1">
                                    
                                    {/* Full Name */}
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Full Name *"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-3 text-xs text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 font-medium"
                                        />
                                    </div>

                                    {/* Phone Number with +91 selector */}
                                    <div>
                                        <div className={`flex rounded-xl overflow-hidden border ${phoneError ? 'border-red-400' : 'border-white/20 focus-within:border-amber-400'} bg-white/10`}>
                                            <select
                                                className="bg-[#090a3d] border-r border-white/20 px-2 py-3 text-xs text-amber-300 font-bold focus:outline-none appearance-none"
                                                value={formData.phoneCode}
                                                onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                                                style={{ minWidth: '60px' }}
                                            >
                                                {COUNTRY_CODES.map((code) => (
                                                    <option key={code} value={code} className="bg-[#090a3d] text-white">{code}</option>
                                                ))}
                                            </select>
                                            <input
                                                type="tel"
                                                placeholder="WhatsApp / Mobile Number *"
                                                className="w-full bg-transparent px-3 py-3 text-xs text-white placeholder-gray-300 focus:outline-none font-medium"
                                                maxLength={10}
                                                value={formData.phone}
                                                onChange={handlePhoneChange}
                                                required
                                            />
                                        </div>
                                        {phoneError && <p className="text-red-400 text-[10px] mt-0.5 pl-1">{phoneError}</p>}
                                    </div>

                                    {/* Email Address */}
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Enter your Email *"
                                            value={formData.email}
                                            className={`w-full bg-white/10 border rounded-xl px-3.5 py-3 text-xs text-white placeholder-gray-300 focus:outline-none font-medium ${emailError ? 'border-red-400' : 'border-white/20 focus:border-amber-400'}`}
                                            onChange={handleEmailChange}
                                            required
                                        />
                                        {emailError && <p className="text-red-400 text-[10px] mt-0.5 pl-1">{emailError}</p>}
                                    </div>

                                    {/* Select Service Dropdown */}
                                    <div>
                                        <select
                                            className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-3 text-xs text-white appearance-none focus:outline-none focus:border-amber-400 cursor-pointer font-medium"
                                            value={formData.service}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                setFormData({ ...formData, service: val });
                                                if (val === 'Need help with Other Services' || val === 'Other Service') {
                                                    setOtherModalOpen(true);
                                                }
                                            }}
                                            required
                                        >
                                            <option value="" disabled className="bg-[#090a3d] text-gray-300">Select your service *</option>
                                            {SERVICES_LIST.map((s) => (
                                                <option key={s} value={s} className="bg-[#090a3d] text-white">{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Custom Service Summary / Status */}
                                    {(formData.service === 'Need help with Other Services' || formData.service === 'Other Service') && (
                                        <div className="flex items-center justify-between gap-2 bg-white/10 border border-amber-400/60 rounded-xl px-3 py-2.5">
                                            <span className="text-[11px] text-gray-200 truncate">
                                                {formData.customService ? <><span className="font-semibold text-white">Your requirement:</span> {formData.customService}</> : 'No requirement noted yet.'}
                                            </span>
                                            <button type="button" onClick={() => setOtherModalOpen(true)} className="text-[11px] font-bold text-amber-400 hover:underline shrink-0 cursor-pointer">
                                                {formData.customService ? 'Edit' : 'Add details'}
                                            </button>
                                        </div>
                                    )}

                                    {/* WhatsApp updates checkbox */}
                                    <label className="flex items-center gap-2 cursor-pointer select-none pt-0.5">
                                        <input
                                            type="checkbox"
                                            id="whatsappUpdatesBlog"
                                            defaultChecked
                                            className="rounded border-gray-400 accent-amber-400 w-3.5 h-3.5 cursor-pointer"
                                        />
                                        <span className="text-gray-300 text-[11px] font-medium">
                                            Send updates to my WhatsApp
                                        </span>
                                    </label>

                                    {/* Primary CTA: Solid Gold Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-[#b8860b] hover:bg-[#a67800] text-white font-extrabold rounded-xl py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-1 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Book Free Call & Quote →'}
                                    </button>

                                    {/* Secondary CTA: WhatsApp */}
                                    <a
                                        href="https://wa.me/919354332511?text=Hi%2C%20I%20need%20expert%20consultation."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl py-2.5 text-xs shadow cursor-pointer transition-all mt-1"
                                    >
                                        <span>Chat on WhatsApp (+91 93543 32511)</span>
                                    </a>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>

                {/* RELATED ARTICLES */}
                {relatedBlogs.length > 0 && (
                    <section className="py-16 bg-white border-t border-gray-200 mt-12">
                        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                            <h3 className="text-2xl font-bold text-[#090a3d] mb-8 text-center md:text-left" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Related Articles
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedBlogs.map((rel) => (
                                    <Link key={rel.id} to={`/blog/${rel.slug}`} className="group bg-slate-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all flex flex-col justify-between">
                                        <div>
                                            {rel.image && (
                                                <div className="h-44 overflow-hidden">
                                                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                </div>
                                            )}
                                            <div className="p-5">
                                                <span className="text-[10px] font-bold text-[#b8860b] uppercase tracking-wider">{rel.category}</span>
                                                <h4 className="font-bold text-sm text-[#090a3d] mt-1 group-hover:text-[#b8860b] transition-colors line-clamp-2">{rel.title}</h4>
                                                <p className="text-xs text-gray-500 mt-2 line-clamp-2">{rel.excerpt}</p>
                                            </div>
                                        </div>
                                        <div className="p-5 pt-0 text-xs font-bold text-[#b8860b] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            <span>Read Article</span>
                                            <span>→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />

            <OtherServiceModal
                isOpen={otherModalOpen}
                initialValue={formData.customService}
                onClose={() => setOtherModalOpen(false)}
                onSave={(value) => setFormData({ ...formData, customService: value })}
            />
        </div>
    );
}
