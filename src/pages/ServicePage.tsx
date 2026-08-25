import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';
import OtherServiceModal from '../components/common/OtherServiceModal';
import { SERVICES, type ServiceData } from '../data/services';
import { IncomeTaxCalculatorWidget } from './IncomeTaxCalculator';

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
function renderProfessionalIcon(emoji: string, isDarkMode = false) {
    const cleanEmoji = emoji.trim().replace(/[︀-️]/g, '');
    const wrapperClass = isDarkMode
        ? "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm bg-white/10 text-white border border-white/20"
        : "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm bg-gray-50 border border-gray-100";

    const getSvg = () => {
        switch (cleanEmoji) {
            case '📋':
            case '📂':
            case '📑':
                return (
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                );
            case '📊':
            case '📈':
            case '📉':
                return (
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                );
            case '💰':
            case '💸':
            case '🪙':
            case '💵':
            case '🏦':
                return (
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16V15m0 1v-8" />
                    </svg>
                );
            case '⚖':
                return (
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                );
            case '🔍':
            case '🔎':
                return (
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                );
            case '📅':
            case '📆':
                return (
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                );
            case '✅':
            case '✔️':
                return (
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                );
            case '🏛':
                return (
                    <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                );
            case '🤝':
                return (
                    <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                );
            case '🔒':
            case '🔐':
                return (
                    <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                );
            case '🏢':
                return (
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                );
            case '👥':
                return (
                    <svg className="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                );
            case '🛡':
            case '🛡y':
                return (
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                );
            case '🌐':
            case '🌎':
            case '🌏':
                return (
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                );
            case '📝':
            case '✍️':
                return (
                    <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                );
            case '💡':
                return (
                    <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                );
            case '🔄':
                return (
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3m0 0l-3 3-3-3" />
                    </svg>
                );
            case '⚡':
                return (
                    <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                );
            case '💼':
                return (
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                );
            case '✨':
                return (
                    <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                );
            case '🚀':
                return (
                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                );
            case '🎯':
                return (
                    <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                );
            case '👨‍💼':
            case '🧑‍💼':
            case '👤':
                return (
                    <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                );
            case '🏆':
                return (
                    <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zM5 10v10a5 5 0 0010 0V10" />
                    </svg>
                );
            case '📞':
                return (
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                );
            case '❤️':
                return (
                    <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                );
            case '🌾':
                return (
                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                );
            case '🏘️':
            case '🏠':
                return (
                    <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                );
            case '💻':
                return (
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                );
            case '❌':
            case '🚫':
                return (
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case '🏷️':
            case '🏷':
                return (
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                );
            case '🇮🇳':
                return (
                    <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V9a2 2 0 012-2h.09M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case '⏰':
                return (
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case '💎':
                return (
                    <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                );
            case '🔢':
                return (
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                );
            case '♾️':
            case '♾':
                return (
                    <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829a9 9 0 01-12.728 0m0 0l2.829-2.829m-2.829 2.829a9 9 0 010-12.728m0 0l2.829 2.829m-2.829-2.829a9 9 0 0112.728 0" />
                    </svg>
                );
            case '⭐':
                return (
                    <svg className="w-6 h-6 text-amber-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                );
            case '📍':
            case '🗺️':
                return (
                    <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-5 h-5 text-[var(--color-brand-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                );
        }
    };

    return (
        <div className={wrapperClass}>
            {getSvg()}
        </div>
    );
}

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
    const [formError, setFormError] = useState('');
    const [otherModalOpen, setOtherModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', phoneCode: '+91', phone: '', email: '', service: '', customService: '' });

    const handleFormSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setFormError('');
        if (phoneError || emailError || !formData.name || !formData.phone || !formData.email || !formData.service) {
            setFormError('Please fill all fields correctly before submitting.');
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

    return (
        <section className="bg-[#090a3d] pt-32 lg:pt-40 pb-16 lg:pb-24 px-4 md:px-8 relative overflow-hidden text-white flex flex-col items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[var(--color-brand-secondary)] opacity-10 blur-[120px] rounded-full z-0" />
            <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10 max-w-6xl gap-8 xl:gap-12">
                <div className="w-full lg:w-[58%] text-center lg:text-left">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-white leading-tight mb-6">{data.title}</h1>
                    <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-8">{data.subtitle}</p>
                    <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
                        {data.heroFeatures.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm text-gray-200">
                                <span className="text-green-400 text-lg">✓</span>{item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-[42%] max-w-md">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_0_60px_rgba(199,145,0,0.2)] border border-gray-400">
                        <h3 className="text-[#090a3d] font-bold text-lg mb-4 text-center">Get Free Consultation</h3>
                        {submitSuccess && <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm font-semibold text-center">Thank you. We'll contact you shortly.</div>}
                        {formError && <div className="mb-4 p-3 bg-red-50 border border-red-300 text-red-700 rounded text-sm font-semibold text-center">{formError}</div>}
                        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                            <input type="text" placeholder="Full Name" required value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white border border-gray-400 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)]" />
                            <div>
                                <div className={`flex rounded-lg border bg-white overflow-hidden focus-within:ring-1 ${phoneError ? 'border-red-500 focus-within:ring-red-500' : 'border-gray-400 focus-within:border-[var(--color-brand-secondary)] focus-within:ring-[var(--color-brand-secondary)]'}`}>
                                    <select className="bg-gray-100 border-r border-gray-400 px-3 py-3 text-black focus:outline-none cursor-pointer" value={formData.phoneCode} onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}>
                                        {COUNTRY_CODES.map((c) => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                    <input type="tel" placeholder="WhatsApp / Mobile Number" maxLength={10} required value={formData.phone}
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
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="whatsappUpdatesService"
                                    defaultChecked
                                    className="rounded border-gray-300 accent-[var(--color-brand-secondary)] w-4 h-4 cursor-pointer"
                                />
                                <label htmlFor="whatsappUpdatesService" className="text-gray-600 text-xs cursor-pointer select-none">
                                    Send quote and updates to my WhatsApp
                                </label>
                            </div>
                            <select required value={formData.service} onChange={(e) => {
                                const val = e.target.value;
                                setFormData({ ...formData, service: val });
                                if (val === 'Need help with Other Services' || val === 'Other Service') {
                                    setOtherModalOpen(true);
                                }
                            }}
                                className="w-full bg-white border border-gray-400 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)] cursor-pointer text-sm">
                                <option value="" disabled>Select Registration Type</option>
                                {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>

                            {/* Custom Service Summary / Status */}
                            {(formData.service === 'Need help with Other Services' || formData.service === 'Other Service') && (
                                <div className="flex items-center justify-between gap-2 bg-amber-50/60 border border-amber-200 rounded-lg px-3.5 py-2.5">
                                    <span className="text-xs text-gray-700 truncate">
                                        {formData.customService ? <><span className="font-semibold">Your requirement:</span> {formData.customService}</> : 'No requirement noted yet.'}
                                    </span>
                                    <button type="button" onClick={() => setOtherModalOpen(true)} className="text-xs font-bold text-[var(--color-brand-secondary)] hover:underline shrink-0 cursor-pointer">
                                        {formData.customService ? 'Edit' : 'Add details'}
                                    </button>
                                </div>
                            )}
                            <button type="submit" disabled={isSubmitting}
                                className={`w-full bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold rounded-lg px-4 py-3 transition-colors uppercase tracking-wide text-sm shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                                {isSubmitting ? 'Submitting...' : 'Claim Your Free Consultation'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <OtherServiceModal
                isOpen={otherModalOpen}
                initialValue={formData.customService}
                onClose={() => setOtherModalOpen(false)}
                onSave={(value) => setFormData({ ...formData, customService: value })}
            />
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
                            {renderProfessionalIcon(h.icon)}
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
                                <td className="p-4 text-gray-700 font-medium whitespace-normal break-words w-1/2">{fee.item}</td>
                                <td className="p-4 text-right font-semibold text-[var(--color-brand-secondary)] whitespace-normal break-words w-1/2">{fee.cost}</td>
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
                        {renderProfessionalIcon(adv.icon)}
                        <h3 className="font-bold text-[#090a3d] text-lg mb-2 mt-4">{adv.title}</h3>
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
    
    const cleanAnswer = (answer: string, question: string) => {
        if (!answer || !answer.trim()) {
            return `For detailed information and professional assistance regarding "${question.replace(/\?$/, '')}", please consult with our Your Professionals experts who can guide you through the exact requirements.`;
        }
        if (answer.toLowerCase().startsWith('for detailed information regarding')) {
            return `For detailed information and professional assistance regarding this topic, please consult with our Your Professionals experts who can guide you through the exact requirements.`;
        }
        return answer;
    };

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
                        {openIdx === idx && (
                            <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                                {cleanAnswer(faq.a, faq.q)}
                            </div>
                        )}
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
                        {renderProfessionalIcon(r.icon, true)}
                        <h3 className="font-bold text-white text-lg mb-2 mt-4">{r.title}</h3>
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
            'url': 'https://www.yourprofessionals.in',
            'telephone': '+91-7011936958',
            'email': 'info@yourprofessionals.in',
        },
        'areaServed': 'IN',
        'serviceType': data.title,
        'url': `https://www.yourprofessionals.in/${slug}`,
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
                {slug === 'income-tax-return-filing' && (
                    <div id="tax-calculator" className="bg-gray-50 border-t border-b border-gray-100 py-12 scroll-mt-24">
                        <div className="container mx-auto px-4 md:px-8">
                            <div className="text-center mb-8">
                                <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2 block">Interactive Tool</span>
                                <h2 className="text-3xl font-bold text-[#090a3d]">Calculate Your Income Tax Online</h2>
                                <p className="text-gray-500 mt-2">FY 2025-26 (AY 2026-27) Income Tax Estimation Widget</p>
                            </div>
                            <IncomeTaxCalculatorWidget isEmbedded={true} />
                        </div>
                    </div>
                )}
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
