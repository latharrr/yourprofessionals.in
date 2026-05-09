import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <SEO
                title="Contact Us – Talk to Our Business Experts"
                description="Get instant support from Your Professionals. Call, WhatsApp, or email our CA & CS experts for company registration, GST, trademark, compliance and more. Free consultation available."
                canonical="/contact"
            />
            <Header />
            <main className="flex-grow pt-28">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-[#090a3d] via-[#0f1163] to-[#1a1c6e] text-white py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--color-brand-secondary)] rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="inline-block bg-white/10 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/10">
                                Trusted by 10,000+ Clients
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Get Instant Support from <span className="text-[var(--color-brand-secondary)]">Our Experts</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                                Chat with our team on WhatsApp or send us a quick message. We are here to help with all your business registration and compliance needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="https://wa.me/918271909697" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    Chat on WhatsApp
                                </a>
                                <a href="tel:+918271909697"
                                    className="inline-flex items-center justify-center gap-3 bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                                    +91-8271909697
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form + Info Section */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                            {/* Contact Form */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#090a3d] mb-2">Send Us a Message</h2>
                                <p className="text-gray-500 mb-8">Fill in the form below and our team will get back to you within 24 hours.</p>

                                {submitted && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium flex items-center gap-2">
                                        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        Thank you! We will get back to you shortly.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-2 focus:ring-[var(--color-brand-secondary)]/20 transition-all" placeholder="Your full name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-2 focus:ring-[var(--color-brand-secondary)]/20 transition-all" placeholder="you@email.com" />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-2 focus:ring-[var(--color-brand-secondary)]/20 transition-all" placeholder="+91 XXXXX XXXXX" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Required</label>
                                            <select name="service" value={formData.service} onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-2 focus:ring-[var(--color-brand-secondary)]/20 transition-all bg-white">
                                                <option value="">Select a service</option>
                                                <option value="company-registration">Company Registration</option>
                                                <option value="gst-registration">GST Registration</option>
                                                <option value="trademark">Trademark Registration</option>
                                                <option value="compliance">Compliance Services</option>
                                                <option value="income-tax">Income Tax Filing</option>
                                                <option value="fssai">FSSAI Registration</option>
                                                <option value="iso">ISO Certification</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-2 focus:ring-[var(--color-brand-secondary)]/20 transition-all resize-none" placeholder="Tell us about your requirements..." />
                                    </div>
                                    <button type="submit"
                                        className="w-full bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm">
                                        Submit Inquiry
                                    </button>
                                </form>
                            </div>

                            {/* Contact Info Cards */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6 text-[var(--color-brand-secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#090a3d] mb-1">Call Us</h3>
                                            <p className="text-gray-500 text-sm mb-2">Mon - Sat, 9:00 AM to 7:00 PM</p>
                                            <a href="tel:+918271909697" className="text-[var(--color-brand-secondary)] font-semibold text-lg hover:underline">+91-8271909697</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6 text-[var(--color-brand-secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#090a3d] mb-1">Email Us</h3>
                                            <p className="text-gray-500 text-sm mb-2">We respond within 24 hours</p>
                                            <a href="mailto:info@yourprofessional.in" className="text-[var(--color-brand-secondary)] font-semibold hover:underline">info@yourprofessional.in</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6 text-[var(--color-brand-secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#090a3d] mb-1">Working Hours</h3>
                                            <p className="text-gray-500 text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                                            <p className="text-gray-500 text-sm">Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6 text-[var(--color-brand-secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#090a3d] mb-1">Visit Our Office</h3>
                                            <p className="text-gray-500 text-sm">Your Professionals Services</p>
                                            <p className="text-gray-500 text-sm">Business Center, Surat, Gujarat, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Empower Your Business Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-4">
                                Empower Your Business With <span className="text-[var(--color-brand-secondary)]">Your Professionals!</span>
                            </h2>
                            <p className="text-gray-500 text-lg">
                                We help businesses navigate the complex landscape of registrations, compliance, and legal requirements with ease and expertise.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                                <div className="w-16 h-16 bg-[var(--color-brand-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-5">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#090a3d] mb-3">Expert Guidance</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Our experienced professionals provide personalized guidance for all your business needs.</p>
                            </div>
                            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                                <div className="w-16 h-16 bg-[#090a3d] rounded-2xl flex items-center justify-center mx-auto mb-5">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#090a3d] mb-3">Fast Processing</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Quick turnaround times with transparent processing and real-time status updates.</p>
                            </div>
                            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#090a3d] mb-3">Affordable Pricing</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Competitive pricing with no hidden charges. Get the best value for your investment.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map / Location Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[#090a3d] text-center mb-10">Our Location</h2>
                        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[400px]">
                            <iframe
                                title="Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41707300821!2d72.7364!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1711000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
