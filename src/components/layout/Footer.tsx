import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[#06072b] via-[#090a3d] to-[#040520] text-white pt-16 pb-12 overflow-hidden border-t-2 border-[var(--color-brand-secondary)]">
            {/* Background Ambient Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-brand-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* TOP ENTERPRISE BANNER - Newsletter / Quick Advisory Bar */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-secondary)]">Enterprise Legal &amp; Tax Updates</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">Stay Ahead of MCA &amp; Tax Compliance Deadlines</h3>
                        <p className="text-xs md:text-sm text-gray-300">Get monthly regulatory alerts, tax calendar reminders, and expert CA guidance straight to your inbox.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                        <input
                            type="email"
                            placeholder="Enter your business email"
                            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)] transition-all w-full sm:w-72"
                        />
                        <button
                            onClick={() => window.dispatchEvent(new Event('openConsultationPopup'))}
                            className="bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl text-sm whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                        >
                            <span>Subscribe Updates</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                        </button>
                    </div>
                </div>

                {/* MAIN FOOTER NAVIGATION GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

                    {/* Column 1: Brand, Mission, Office & Social */}
                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            <h3 className="font-bold text-2xl tracking-tight text-white mb-2">Your Professionals</h3>
                            <span className="inline-block px-3 py-1 bg-[var(--color-brand-secondary)]/20 border border-[var(--color-brand-secondary)]/40 rounded-full text-[10px] font-bold tracking-wider text-[var(--color-brand-secondary)] uppercase">
                                Corporate CA &amp; CS Advisory
                            </span>
                        </div>

                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                            Your trusted partner for business registration, government licensing, compliance, and legal services across India. We simplify complex processes so you can focus on building your business.
                        </p>

                        {/* Office Location & Details Card */}
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
                            <div className="flex items-start gap-2">
                                <svg className="w-4 h-4 text-[var(--color-brand-secondary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                                <span>Office No. 204, U-172, Street No.4, Laxmi Nagar, Block U, Shakarpur, Delhi, 110092</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[var(--color-brand-secondary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Connect With Us</p>
                            <div className="flex gap-3 items-center">
                                <a href="https://www.facebook.com/YourProfessionals.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[var(--color-brand-secondary)] hover:border-[var(--color-brand-secondary)] transition-all duration-300 shadow-md group" aria-label="Facebook">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" fillRule="evenodd" /></svg>
                                </a>
                                <a href="https://www.instagram.com/yourprofessionals.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[var(--color-brand-secondary)] hover:border-[var(--color-brand-secondary)] transition-all duration-300 shadow-md group" aria-label="Instagram">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 group-hover:scale-110 transition-transform"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/company/your-professionals15/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[var(--color-brand-secondary)] hover:border-[var(--color-brand-secondary)] transition-all duration-300 shadow-md group" aria-label="LinkedIn">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 group-hover:scale-110 transition-transform"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="https://x.com/YP_Compliance" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[var(--color-brand-secondary)] hover:border-[var(--color-brand-secondary)] transition-all duration-300 shadow-md group" aria-label="Twitter/X">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 group-hover:scale-110 transition-transform">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Start a Business & Trade Licence */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-brand-secondary)] mb-4 pb-1.5 border-b border-white/10 inline-block">
                                Start A Business
                            </h4>
                            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300">
                                <li><Link to="/private-limited-company-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Private Limited Company</Link></li>
                                <li><Link to="/llp-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">LLP Registration</Link></li>
                                <li><Link to="/partnership-firm-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Partnership Firm</Link></li>
                                <li><Link to="/sole-proprietorship-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Sole Proprietorship</Link></li>
                                <li><Link to="/startup-india-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Startup India</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-brand-secondary)] mb-4 pb-1.5 border-b border-white/10 inline-block">
                                Trade Licence
                            </h4>
                            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300">
                                <li><Link to="/trade-licence-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Trade Licence Registration</Link></li>
                                <li><Link to="/trade-licence-renewal" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Trade Licence Renewal</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Government Registration & FSSAI */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-brand-secondary)] mb-4 pb-1.5 border-b border-white/10 inline-block">
                                Government Registration
                            </h4>
                            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300">
                                <li><Link to="/drug-license" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Drug License</Link></li>
                                <li><Link to="/iso-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">ISO Registration</Link></li>
                                <li><Link to="/factory-license" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Factory License</Link></li>
                                <li><Link to="/isi-mark-certification" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">ISI Mark Certification</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-brand-secondary)] mb-4 pb-1.5 border-b border-white/10 inline-block">
                                FSSAI Registration
                            </h4>
                            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300">
                                <li><Link to="/fssai-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">FSSAI Registration</Link></li>
                                <li><Link to="/fssai-central-license" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">FSSAI Central License</Link></li>
                                <li><Link to="/fssai-state-license" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">FSSAI State License</Link></li>
                                <li><Link to="/fssai-license-renewal" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">FSSAI License Renewal</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Compliance, IPR & Taxation */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-brand-secondary)] mb-4 pb-1.5 border-b border-white/10 inline-block">
                                Compliance
                            </h4>
                            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300">
                                <li><Link to="/msme-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">MSME Registration</Link></li>
                                <li><Link to="/llp-annual-compliance" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">LLP Annual Compliance</Link></li>
                                <li><Link to="/annual-compliance-private-limited" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Pvt Ltd Annual Compliance</Link></li>
                                <li><Link to="/change-company-name" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Change Company Name</Link></li>
                                <li><Link to="/winding-up-company" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Winding Up of Company</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-brand-secondary)] mb-4 pb-1.5 border-b border-white/10 inline-block">
                                IPR &amp; Intellectual Property
                            </h4>
                            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300">
                                <li><Link to="/trademark-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Trademark Registration</Link></li>
                                <li><Link to="/copyright-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Copyright Registration</Link></li>
                                <li><Link to="/patent-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Patent Registration</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-brand-secondary)] mb-4 pb-1.5 border-b border-white/10 inline-block">
                                Taxation &amp; Filings
                            </h4>
                            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300">
                                <li><Link to="/income-tax-return-filing" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Income Tax Return Filing</Link></li>
                                <li><Link to="/gst-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">GST Registration</Link></li>
                                <li><Link to="/gst-return-filing" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">GST Return Filing</Link></li>
                                <li><Link to="/tds-return-filing" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">TDS Return Filing</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 5: BIS, NGO & International */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-brand-secondary)] mb-4 pb-1.5 border-b border-white/10 inline-block">
                                BIS &amp; NGO
                            </h4>
                            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300">
                                <li><Link to="/bis-certification" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">BIS Certification</Link></li>
                                <li><Link to="/section-8-company-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Section 8 Company</Link></li>
                                <li><Link to="/12a-80g-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">12A &amp; 80G Registration</Link></li>
                                <li><Link to="/fcra-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">FCRA Registration</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-brand-secondary)] mb-4 pb-1.5 border-b border-white/10 inline-block">
                                International Setup
                            </h4>
                            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300">
                                <li><Link to="/company-registration-dubai" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Dubai Company Registration</Link></li>
                                <li><Link to="/uk-company-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">UK Company Registration</Link></li>
                                <li><Link to="/singapore-company-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Singapore Company</Link></li>
                                <li><Link to="/usa-company-registration" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">USA Company Registration</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* TRUST & COMPLIANCE BADGES ROW */}
                <div className="py-6 border-t border-white/10 border-b mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-300">
                        <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-secondary)] font-bold text-xs">✓</span>
                        <span>MCA Registered CA/CS</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-300">
                        <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-secondary)] font-bold text-xs">🔒</span>
                        <span>256-Bit SSL Encrypted Data</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-300">
                        <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-secondary)] font-bold text-xs">⭐</span>
                        <span>4.9/5 Rated (500+ Clients)</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-300">
                        <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-secondary)] font-bold text-xs">🛡️</span>
                        <span>100% Data Confidentiality</span>
                    </div>
                </div>

                {/* FOOTER BOTTOM BAR - COPYRIGHT, CONTACT & SCROLL TOP */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 text-xs text-gray-400">
                        <Link to="/contact" className="hover:text-[var(--color-brand-secondary)] transition-colors font-medium">Contact Us</Link>
                        <span className="hidden sm:inline text-gray-600">·</span>
                        <a href="mailto:info@yourprofessionals.in" className="hover:text-[var(--color-brand-secondary)] transition-colors flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-[var(--color-brand-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                            <span>info@yourprofessionals.in</span>
                        </a>
                        <span className="hidden sm:inline text-gray-600">·</span>
                        <a href="tel:+917011936958" className="hover:text-[var(--color-brand-secondary)] transition-colors flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-[var(--color-brand-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                            <span>+91-7011936958</span>
                        </a>
                    </div>

                    <p className="text-gray-400 text-xs text-center md:text-right">
                        © {new Date().getFullYear()} Your Professionals. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}
