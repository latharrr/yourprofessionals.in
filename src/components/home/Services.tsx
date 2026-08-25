import { Link } from 'react-router-dom';

export default function Services() {
    const services = [
        {
            title: "Company Formation",
            description: "Register your Private Limited, LLP, OPC or Partnership Firm with end-to-end expert guidance and fast turnaround.",
            linkText: "Learn more",
            icon: (
                <svg className="w-10 h-10 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            link: "/private-limited-company-registration"
        },
        {
            title: "Company Secretarial Services",
            description: "Complete secretarial support including board meetings, ROC filings, and statutory compliance by qualified CS professionals.",
            linkText: "Learn more",
            icon: (
                <svg className="w-10 h-10 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            link: "/company-secretarial-services"
        },
        {
            title: "Virtual Office Address",
            description: "Get a prestigious business address in major cities for GST registration, banking, and official correspondence.",
            linkText: "Learn more",
            icon: (
                <svg className="w-10 h-10 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            link: "/virtual-office"
        },
        {
            title: "Annual Compliance Services",
            description: "Stay compliant year-round with comprehensive annual filing packages for all company types — never miss a deadline.",
            linkText: "Learn more",
            icon: (
                <svg className="w-10 h-10 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            link: "/annual-compliance-services"
        },
        {
            title: "Payroll Services",
            description: "Streamline employee payroll, TDS calculations, PF/ESI contributions, and payslip generation with full-service payroll support.",
            linkText: "Learn more",
            icon: (
                <svg className="w-10 h-10 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            link: "/payroll-services"
        },
        {
            title: "Bookkeeping Services",
            description: "Accurate, timely bookkeeping and accounting services to keep your financial records organised and audit-ready.",
            linkText: "Learn more",
            icon: (
                <svg className="w-10 h-10 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            link: "/bookkeeping-services"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50/80 to-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-xs uppercase mb-3 block">
                        Welcome to Your Professionals
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-3">
                        Explore Our Services
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                        300+ services across Registration, Compliance, Tax, IPR &amp; Legal — delivered by qualified CAs, CS &amp; Advocates.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            to={service.link}
                            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[var(--color-brand-secondary)]/30 hover:-translate-y-1 flex flex-col"
                        >
                            <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-[var(--color-brand-secondary)] mb-6 group-hover:bg-[var(--color-brand-secondary)] group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold text-[#090a3d] mb-3 group-hover:text-[var(--color-brand-secondary)] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>
                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#090a3d] group-hover:text-[var(--color-brand-secondary)] transition-colors">
                                {service.linkText}
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-14">
                    <Link
                        to="/company-registration"
                        className="inline-flex items-center gap-2 bg-[#090a3d] text-white px-8 py-3.5 rounded-full hover:bg-[#1a1c6e] transition-all font-semibold shadow-lg hover:shadow-xl text-sm"
                    >
                        See All Services
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
