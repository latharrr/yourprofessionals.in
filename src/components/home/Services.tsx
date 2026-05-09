import { Link } from 'react-router-dom';

export default function Services() {
    const services = [
        {
            title: "Company Formation",
            description: "Register your Private Limited, LLP, OPC or Partnership Firm with end-to-end expert guidance and fast turnaround.",
            linkText: "Learn more",
            icon: "🏢",
            link: "/private-limited-company-registration"
        },
        {
            title: "Company Secretarial Services",
            description: "Complete secretarial support including board meetings, ROC filings, and statutory compliance by qualified CS professionals.",
            linkText: "Learn more",
            icon: "📊",
            link: "/company-secretarial-services"
        },
        {
            title: "Virtual Office Address",
            description: "Get a prestigious business address in major cities for GST registration, banking, and official correspondence.",
            linkText: "Learn more",
            icon: "📍",
            link: "/virtual-office"
        },
        {
            title: "Annual Compliance Services",
            description: "Stay compliant year-round with comprehensive annual filing packages for all company types — never miss a deadline.",
            linkText: "Learn more",
            icon: "📋",
            link: "/annual-compliance-services"
        },
        {
            title: "Payroll Services",
            description: "Streamline employee payroll, TDS calculations, PF/ESI contributions, and payslip generation with full-service payroll support.",
            linkText: "Learn more",
            icon: "💸",
            link: "/payroll-services"
        },
        {
            title: "Bookkeeping Services",
            description: "Accurate, timely bookkeeping and accounting services to keep your financial records organised and audit-ready.",
            linkText: "Learn more",
            icon: "📒",
            link: "/bookkeeping-services"
        }
    ];

    return (
        <section className="py-12 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h4 className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2">
                        WELCOME TO Your Professionals
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-4">
                        Explore Our Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="text-5xl text-[var(--color-brand-secondary)] mb-6 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link to={service.link} className="font-semibold flex items-center justify-center gap-2 text-[#090a3d] hover:text-[var(--color-brand-secondary)] transition-colors">
                                {service.linkText}
                                <span className="text-xl">→</span>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/company-registration" className="inline-block bg-[#090a3d] text-white px-8 py-3 rounded hover:bg-blue-900 transition-all font-semibold shadow-lg text-sm">
                        See All Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
