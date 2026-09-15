import { useState } from 'react';
import faqIllustration from '../../assets/faq-illustration.jpg';
import { FAQ_DATA } from '../../data/faq';

export default function FAQSection() {
    const [activeTab, setActiveTab] = useState<string>('company-registration');
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    const currentCategory = FAQ_DATA.find(c => c.id === activeTab) || FAQ_DATA[0];

    const renderIcon = (type: string) => {
        switch (type) {
            case 'building':
                return (
                    <svg className="w-5 h-5 text-[#090a3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6" />
                    </svg>
                );
            case 'document':
                return (
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                );
            case 'clock':
                return (
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case 'chart':
                return (
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                );
            case 'globe':
                return (
                    <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                );
            case 'shield':
                return (
                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                );
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-gray-100">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 2-COLUMN ENTERPRISE LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* LEFT COLUMN: BADGE, HEADING, SUBTITLE & VECTOR ARTWORK */}
                    <div className="lg:col-span-4 space-y-6">
                        <div>
                            <span className="inline-block bg-amber-100 text-[var(--color-brand-secondary)] font-extrabold text-[11px] uppercase tracking-widest px-3 py-1 rounded-md mb-3">
                                FAQS
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#090a3d] tracking-tight leading-tight">
                                Frequently <br className="hidden md:inline" />Asked Questions
                            </h2>
                            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                                Find quick answers to common questions about our corporate services, filing processes, and legal compliances.
                            </p>
                        </div>

                        {/* ENTERPRISE ARTWORK GRAPHIC */}
                        <div className="rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg bg-white relative group">
                            <img
                                src={faqIllustration}
                                alt="Frequently Asked Questions - Your Professionals CA & Legal Advisory"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                width={1024}
                                height={1024}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: CATEGORY TABS, ACCORDION LIST & BOTTOM BANNER */}
                    <div className="lg:col-span-8 space-y-6">
                        
                        {/* CATEGORY TABS HEADER */}
                        <div className="bg-slate-100/80 p-1.5 rounded-2xl flex flex-wrap gap-1.5 border border-gray-200/80">
                            {FAQ_DATA.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setActiveTab(cat.id);
                                        setOpenIdx(0);
                                    }}
                                    className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                                        activeTab === cat.id
                                            ? 'bg-[#090a3d] text-white shadow-md'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* ACCORDION ITEMS */}
                        {FAQ_DATA.map((category) => (
                        <div key={category.id} className="space-y-3" hidden={category.id !== currentCategory.id}>
                            {category.items.map((item, idx) => {
                                const isOpen = category.id === currentCategory.id && openIdx === idx;
                                return (
                                    <div
                                        key={idx}
                                        className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                                            isOpen
                                                ? 'border-[var(--color-brand-secondary)] shadow-md'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenIdx(isOpen ? null : idx)}
                                            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3.5">
                                                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                                    {renderIcon(item.iconType)}
                                                </div>
                                                <span className="font-bold text-sm md:text-base text-[#090a3d]">
                                                    {item.question}
                                                </span>
                                            </div>
                                            
                                            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-lg font-bold transition-transform duration-300 shrink-0 ${
                                                isOpen 
                                                    ? 'bg-amber-100 text-[var(--color-brand-secondary)] rotate-45' 
                                                    : 'bg-slate-100 text-gray-500'
                                            }`}>
                                                +
                                            </span>
                                        </button>

                                        <div hidden={!isOpen} className="px-6 pb-5 pt-3 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100/80 ml-12 whitespace-pre-line">
                                            {item.answer}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        ))}

                        {/* STILL HAVE QUESTIONS BOTTOM BANNER */}
                        <div className="bg-slate-100/90 rounded-2xl p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                            <div className="flex items-center gap-3 text-center sm:text-left">
                                <div className="w-10 h-10 rounded-full bg-[#090a3d] text-white flex items-center justify-center shrink-0 shadow-md">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-sm text-[#090a3d]">
                                        Still have questions?
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        Our legal and tax experts are here to help you.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => window.dispatchEvent(new Event('openConsultationPopup'))}
                                className="bg-[#090a3d] hover:bg-[#12155a] text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer shrink-0"
                            >
                                <span>Talk to an Expert</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
