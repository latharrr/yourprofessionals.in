import { useState, useEffect } from 'react';
import OtherServiceModal from './OtherServiceModal';

const SERVICES_LIST = [
    "Private Limited Company Registration",
    "One Person Company Registration (OPC)",
    "LLP Registration",
    "Partnership Firm Registration",
    "Sole Proprietorship Registration",
    "Startup India Registration",
    "Virtual Office",
    "Compliance",
    "Trademark Registration",
    "GST Registration"
];

const COUNTRY_CODES = ["+91", "+1", "+44"];

export default function LeadPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formError, setFormError] = useState('');
    const [otherModalOpen, setOtherModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', phoneCode: '+91', phone: '', email: '', service: '', customService: '' });

    useEffect(() => {
        const handleOpenPopup = (e?: Event) => {
            const customEv = e as CustomEvent;
            if (customEv?.detail?.service) {
                setFormData(prev => ({ ...prev, service: customEv.detail.service }));
                if (customEv.detail.service === 'Need help with Other Services' || customEv.detail.service === 'Other Service') {
                    setOtherModalOpen(true);
                }
            }
            setIsOpen(true);
        };
        window.addEventListener('openConsultationPopup', handleOpenPopup);

        const hasSeen = localStorage.getItem('hasSeenConsultationPopup');
        let timer: ReturnType<typeof setTimeout> | undefined;
        
        if (!hasSeen) {
            timer = setTimeout(() => {
                setIsOpen(true);
            }, 5000);
        }

        return () => {
            if (timer) clearTimeout(timer);
            window.removeEventListener('openConsultationPopup', handleOpenPopup);
        };
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenConsultationPopup', 'true');
    };

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
            setTimeout(() => {
                setSubmitSuccess(false);
                setIsOpen(false);
            }, 3000);
        } catch (error) {
            console.error("Submission failed:", error);
            setFormError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-amber-100 flex flex-col relative">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer z-20 font-bold"
                    aria-label="Close modal"
                >
                    ✕
                </button>

                <div className="bg-[#090a3d] p-6 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#b8860b]/20 rounded-full blur-2xl"></div>
                    <span className="text-[#b8860b] text-xs font-bold uppercase tracking-wider block mb-1">Expert Assistance</span>
                    <h3 className="text-xl font-bold">Book Free Consultation</h3>
                    <p className="text-gray-300 text-xs mt-1">Get an expert call back within 15 minutes</p>
                </div>

                <div className="p-6 md:p-8">
                    {submitSuccess ? (
                        <div className="text-center py-6">
                            <span className="text-4xl block mb-3">✓</span>
                            <h4 className="text-lg font-bold text-gray-900">Thank you</h4>
                            <p className="text-gray-600 text-sm mt-1">Our expert team will contact you shortly.</p>
                        </div>
                    ) : (
                        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                            {formError && (
                                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs font-semibold text-center">
                                    {formError}
                                </div>
                            )}
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b] text-sm"
                            />

                            <div>
                                <div className={`flex rounded-lg border overflow-hidden ${phoneError ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus-within:border-[#b8860b] focus-within:ring-1 focus-within:ring-[#b8860b]'}`}>
                                    <select
                                        className="bg-gray-50 border-r border-gray-300 px-3 py-3 text-black focus:outline-none cursor-pointer text-sm"
                                        value={formData.phoneCode}
                                        onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                                    >
                                        {COUNTRY_CODES.map((code) => (
                                            <option key={code} value={code}>{code}</option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="WhatsApp / Mobile Number"
                                        className="w-full px-4 py-3 text-black placeholder-gray-400 focus:outline-none text-sm"
                                        maxLength={10}
                                        value={formData.phone}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/[^0-9]/g, '');
                                            setPhoneError(/[^0-9]/.test(e.target.value) ? 'Numbers only' : '');
                                            setFormData({ ...formData, phone: val });
                                        }}
                                        required
                                    />
                                </div>
                                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    className={`w-full border rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-1 ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[#b8860b] focus:ring-[#b8860b]'}`}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setEmailError(val.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? 'Enter a valid email' : '');
                                        setFormData({ ...formData, email: val });
                                    }}
                                    required
                                />
                                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                            </div>

                            <select
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b] cursor-pointer text-sm"
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
                                <option value="" disabled>Select Service Needed</option>
                                {SERVICES_LIST.map((serviceName) => (
                                    <option key={serviceName} value={serviceName}>{serviceName}</option>
                                ))}
                            </select>

                            {/* Custom Service Summary / Status */}
                            {(formData.service === 'Need help with Other Services' || formData.service === 'Other Service') && (
                                <div className="flex items-center justify-between gap-2 bg-amber-50/60 border border-amber-200 rounded-lg px-3.5 py-2.5">
                                    <span className="text-xs text-gray-700 truncate">
                                        {formData.customService ? <><span className="font-semibold">Your requirement:</span> {formData.customService}</> : 'No requirement noted yet.'}
                                    </span>
                                    <button type="button" onClick={() => setOtherModalOpen(true)} className="text-xs font-bold text-[#b8860b] hover:underline shrink-0 cursor-pointer">
                                        {formData.customService ? 'Edit' : 'Add details'}
                                    </button>
                                </div>
                            )}

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="whatsappUpdatesPopup"
                                    defaultChecked
                                    className="rounded border-gray-300 accent-[#b8860b] w-4 h-4 cursor-pointer"
                                />
                                <label htmlFor="whatsappUpdatesPopup" className="text-gray-500 text-xs cursor-pointer select-none">
                                    Send quote and updates to my WhatsApp
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-[#b8860b] hover:bg-[#a67800] text-white font-bold rounded-lg px-4 py-3.5 transition-colors uppercase tracking-wide text-sm shadow-md mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Request Call Back'}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <OtherServiceModal
                isOpen={otherModalOpen}
                initialValue={formData.customService}
                onClose={() => setOtherModalOpen(false)}
                onSave={(value) => setFormData({ ...formData, customService: value })}
            />
        </div>
    );
}
