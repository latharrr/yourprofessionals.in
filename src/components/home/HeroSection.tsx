import { useState } from 'react';
import heroBg from '../../assets/hero-bg.jpeg';

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

const COUNTRY_CODES = [
    "+91",
    "+1",
    "+44"
];

export default function HeroSection() {
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phoneCode: '+91',
        phone: '',
        email: '',
        service: ''
    });

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (/[^0-9]/.test(val)) {
            setPhoneError('Please enter numbers only.');
        } else {
            setPhoneError('');
        }
        e.target.value = val.replace(/[^0-9]/g, '');
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (val.length > 0 && !emailRegex.test(val)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
        setFormData({ ...formData, email: val });
    };

    const handleFormSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (phoneError || emailError || !formData.name || !formData.phone || !formData.email || !formData.service) {
            alert('Please fill all fields correctly before submitting.');
            return;
        }

        setIsSubmitting(true);
        try {
            const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
            const formBody = new URLSearchParams();
            formBody.append("Name", formData.name);
            formBody.append("Phone", `${formData.phoneCode} ${formData.phone}`);
            formBody.append("Email", formData.email);
            formBody.append("Service", formData.service);

            await fetch(`${GOOGLE_SCRIPT_URL}?${formBody.toString()}`, {
                method: "POST",
                mode: "no-cors"
            });

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
            setFormData({ name: "", phoneCode: "+91", phone: "", email: "", service: "" });
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error("Submission failed:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative pt-24 lg:pt-28 overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[80vh]">

                {/* LEFT 60% - Background image with text overlay */}
                <div className="relative w-full lg:w-[70%] flex flex-col justify-between p-6 md:p-10 lg:p-12 xl:p-16 min-h-[50vh] lg:min-h-0">
                    {/* Background image */}
                    <img
                        src={heroBg}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover object-[35%_center] md:object-center z-0"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/30 z-[1]"></div>

                    {/* Top content */}
                    <div className="relative z-10">
                        {/* Logo */}
                        {/* <div className="flex items-center gap-3 mb-8">
                            <img src={logoImage} alt="Your Professionals Logo" className="h-12 md:h-14 w-auto" />
                            <img src={logoText} alt="Your Professionals Logo" className="h-8 md:h-10 object-contain -mt-1 transition-all duration-300" />
                        </div> */}

                        {/* Tagline removed as it's part of the background image */}
                    </div>

                    {/* Bottom tagline removed as it's part of the background image */}
                </div>

                {/* RIGHT 40% - Form */}
                <div className="w-full lg:w-[30%] bg-[#3d3322] flex items-center justify-center p-6 md:p-8 lg:p-10">
                    <div className="w-full max-w-md">
                        {/* Form Header */}
                        <div className="text-center mb-6">
                            <h2 className="text-white text-lg md:text-xl font-bold leading-snug">
                                Submit your Details to get an Instant{' '}
                                <span className="text-[#c79100] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">All-inclusive</span>{' '}
                                Quote to your email and a{' '}
                                <span className="text-[#c79100] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">FREE</span>{' '}
                                Expert consultation
                            </h2>
                        </div>

                        {submitSuccess && (
                            <div className="mb-4 p-3 bg-green-900/40 border border-green-500 text-green-300 rounded-lg text-sm font-semibold text-center">
                                ✓ Thank you! Your information has been submitted successfully.
                            </div>
                        )}

                        <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full bg-[#4d432e] border-none rounded-md px-4 py-3.5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)] transition-colors"
                            />

                            <div>
                                <div className={`flex rounded-md overflow-hidden focus-within:ring-2 ${phoneError ? 'ring-2 ring-red-500' : 'focus-within:ring-[var(--color-brand-secondary)]'}`}>
                                    <select
                                        className="bg-[#4d432e] border-r border-[#5d533e] px-3 py-3.5 text-white focus:outline-none cursor-pointer"
                                        value={formData.phoneCode}
                                        onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                                    >
                                        {COUNTRY_CODES.map((code) => (
                                            <option key={code} value={code}>{code}</option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="w-full bg-[#4d432e] px-4 py-3.5 text-white placeholder-gray-300 focus:outline-none"
                                        maxLength={10}
                                        value={formData.phone}
                                        onChange={(e) => {
                                            handlePhoneChange(e);
                                            setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') });
                                        }}
                                        required
                                    />
                                </div>
                                {phoneError && <p className="text-red-400 text-xs mt-1">{phoneError}</p>}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    value={formData.email}
                                    className={`w-full bg-[#4d432e] border-none rounded-md px-4 py-3.5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 transition-colors ${emailError ? 'ring-2 ring-red-500' : 'focus:ring-[var(--color-brand-secondary)]'}`}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {emailError && <p className="text-red-400 text-xs mt-1">{emailError}</p>}
                            </div>

                            <div className="relative">
                                <select
                                    className="w-full bg-[#4d432e] border-none rounded-md px-4 py-3.5 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)] cursor-pointer transition-colors"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    required
                                >
                                    <option value="" disabled>Select your service</option>
                                    {SERVICES_LIST.map((serviceName) => (
                                        <option key={serviceName} value={serviceName}>{serviceName}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-[var(--color-brand-secondary)] hover:bg-[#d4a017] text-white font-bold rounded-md px-4 py-4 transition-all tracking-wide text-base shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                        Submitting...
                                    </span>
                                ) : 'Get a Detailed Quotation'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
