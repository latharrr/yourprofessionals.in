import { useState } from 'react';
import heroBg from '../../assets/hero-bg.png';
import heroMobile from '../../assets/hero-mobile.png';
import OtherServiceModal from '../common/OtherServiceModal';

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

export default function HeroSection() {
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

    const handleFormSubmit = async (e: React.SyntheticEvent) => {
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
                const formBody = new URLSearchParams();
                formBody.append("Name", formData.name);
                formBody.append("Phone", `${formData.phoneCode} ${formData.phone}`);
                formBody.append("Email", formData.email);
                formBody.append("Service", fullService);
                await fetch(`${GOOGLE_SCRIPT_URL}?${formBody.toString()}`, { method: "POST", mode: "no-cors" });
            }
            await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formData.name, phone: `${formData.phoneCode} ${formData.phone}`, email: formData.email, service: fullService })
            }).catch(() => {});
            setSubmitSuccess(true);
            setFormData({ name: "", phoneCode: "+91", phone: "", email: "", service: "", customService: "" });
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error("Submission failed:", error);
            setFormError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative w-full pt-[105px] sm:pt-[115px] lg:pt-[125px] overflow-hidden bg-gradient-to-r from-[#f8fafc] via-white to-[#f4f6fb]">
            <div className="w-full">
                <div className="grid grid-cols-1 xl:grid-cols-12 items-stretch min-h-[500px] sm:min-h-[560px]">

                    {/* ═══════════════════════════════════════════════════════
                        LEFT COLUMN: FULL-BLEED HERO POSTER IMAGE (DESKTOP & MOBILE)
                        Adjusted for iPad Air, Nest Hub, Nest Hub Max & Laptops
                        ═══════════════════════════════════════════════════════ */}
                    <div className="xl:col-span-7 2xl:col-span-8 bg-[#f8fafc] overflow-hidden flex items-start xl:items-center justify-center relative">
                        {/* Desktop & Tablet Poster Image */}
                        <img
                            src={heroBg}
                            alt="India's Fastest Business Registration Service Provider — Your Professionals"
                            className="hidden sm:block w-full h-auto xl:h-full object-contain object-center select-none xl:-translate-y-14"
                        />
                        {/* Mobile Poster Image */}
                        <img
                            src={heroMobile}
                            alt="India's Fastest Business Registration Service Provider — Your Professionals"
                            className="sm:hidden w-full h-auto object-cover select-none"
                        />
                    </div>

                    {/* ═══════════════════════════════════════════════════════
                        RIGHT COLUMN: CLEAN WHITE LEAD COLLECTION CARD
                        Matches the approved reference — white card, navy copy,
                        amber icon accents, kept aligned to the site's brand theme
                        ═══════════════════════════════════════════════════════ */}
                    <div className="xl:col-span-5 2xl:col-span-4 bg-white text-[#090a3d] p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative border-t xl:border-t-0 xl:border-l border-gray-200 shadow-2xl">

                        {/* Ambient Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

                        {/* Badge */}
                        <div className="text-center mb-2">
                            <span className="inline-block bg-amber-50 text-[var(--color-brand-secondary)] font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest px-3 py-1 rounded-full border border-amber-200">
                                FREE CONSULTATION &amp; INSTANT QUOTE
                            </span>
                        </div>

                        {/* Form Header Title */}
                        <div className="text-center mb-6">
                            <h2 className="text-xl sm:text-2xl font-extrabold leading-snug text-[#090a3d]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Submit your Details to get an Instant{' '}
                                <span className="text-[var(--color-brand-secondary)]">All-inclusive Quote</span>{' '}
                                to your email &amp; a <span className="text-[var(--color-brand-secondary)]">FREE</span> Expert consultation
                            </h2>
                            <div className="w-14 h-1 bg-[var(--color-brand-secondary)] mx-auto mt-3 rounded-full" />
                        </div>

                        {submitSuccess && (
                            <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-300 text-emerald-700 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2">
                                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Thank you. Information submitted successfully. Our CA team will call you back shortly.</span>
                            </div>
                        )}

                        {formError && (
                            <div className="mb-5 p-3.5 bg-red-50 border border-red-300 text-red-700 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2">
                                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{formError}</span>
                            </div>
                        )}

                        <form className="space-y-4" onSubmit={handleFormSubmit}>

                            {/* Full Name */}
                            <div className="relative">
                                <svg className="w-4.5 h-4.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-brand-secondary)] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                                <input
                                    type="text"
                                    placeholder="Full Name *"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)] transition-all font-medium"
                                />
                            </div>

                            {/* WhatsApp / Mobile Number */}
                            <div>
                                <div className={`flex rounded-xl overflow-hidden border ${phoneError ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200 focus-within:border-[var(--color-brand-secondary)] focus-within:ring-1 focus-within:ring-[var(--color-brand-secondary)]'} bg-white transition-all`}>
                                    <select
                                        className="bg-white border-r border-gray-200 pl-3.5 pr-2 py-3.5 text-sm text-[#090a3d] font-extrabold focus:outline-none cursor-pointer appearance-none"
                                        value={formData.phoneCode}
                                        onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                                        style={{ minWidth: '65px' }}
                                    >
                                        {COUNTRY_CODES.map((code) => (
                                            <option key={code} value={code}>{code}</option>
                                        ))}
                                    </select>
                                    <div className="relative flex-1">
                                        <svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-brand-secondary)] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                                        <input
                                            type="tel"
                                            placeholder="WhatsApp / Mobile Number *"
                                            className="w-full bg-transparent pl-11 pr-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none font-medium"
                                            maxLength={10}
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                            required
                                        />
                                    </div>
                                </div>
                                {phoneError && <p className="text-red-500 text-xs mt-1 pl-1">{phoneError}</p>}
                            </div>

                            {/* Email Address */}
                            <div className="relative">
                                <svg className="w-4.5 h-4.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-brand-secondary)] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                                <input
                                    type="email"
                                    placeholder="Enter your Email *"
                                    value={formData.email}
                                    className={`w-full bg-white border rounded-xl pl-11 pr-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none font-medium transition-all ${emailError ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200 focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)]'}`}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {emailError && <p className="text-red-500 text-xs mt-1 pl-1">{emailError}</p>}
                            </div>

                            {/* Service Select Dropdown */}
                            <div className="relative">
                                <svg className="w-4.5 h-4.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-brand-secondary)] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                <select
                                    className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-10 py-3.5 text-sm text-gray-900 appearance-none focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)] cursor-pointer font-medium transition-all"
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
                                    <option value="" disabled className="text-gray-400">Select your service *</option>
                                    {SERVICES_LIST.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                <svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                            </div>

                            {/* Custom Service Summary / Status */}
                            {(formData.service === 'Need help with Other Services' || formData.service === 'Other Service') && (
                                <div className="flex items-center justify-between gap-2 bg-amber-50/60 border border-amber-200 rounded-xl px-3.5 py-2.5">
                                    <span className="text-xs text-gray-700 truncate">
                                        {formData.customService ? <><span className="font-semibold text-[#090a3d]">Your requirement:</span> {formData.customService}</> : 'No requirement noted yet.'}
                                    </span>
                                    <button type="button" onClick={() => setOtherModalOpen(true)} className="text-xs font-bold text-[var(--color-brand-secondary)] hover:underline shrink-0 cursor-pointer">
                                        {formData.customService ? 'Edit' : 'Add details'}
                                    </button>
                                </div>
                            )}

                            {/* WhatsApp updates checkbox */}
                            <label className="flex items-center gap-2.5 cursor-pointer select-none pt-1">
                                <input
                                    type="checkbox"
                                    id="whatsappUpdatesHero"
                                    defaultChecked
                                    className="rounded border-gray-300 accent-[var(--color-brand-secondary)] w-4 h-4 cursor-pointer"
                                />
                                <span className="text-gray-600 text-xs font-medium">
                                    Send quote and updates to my WhatsApp
                                </span>
                            </label>

                            {/* Primary CTA: Solid Gold Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-[var(--color-brand-secondary)] hover:bg-[#a67800] text-white font-extrabold rounded-xl py-3.5 sm:py-4 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2 transform hover:scale-[1.01] ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    <>
                                        <span>Get Detailed Quote</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                    </>
                                )}
                            </button>

                            {/* Secondary CTA: AI Help / Connect on WhatsApp */}
                            <a
                                href="https://wa.me/919354332511?text=Hi%2C%20I%20need%20assistance%20with%20business%20registration%20and%20compliance%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 font-bold rounded-xl py-3.5 transition-all text-xs sm:text-sm cursor-pointer group mt-2"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                                </span>
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.56-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.66-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                <span>AI Help / Connect on WhatsApp</span>
                            </a>
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
