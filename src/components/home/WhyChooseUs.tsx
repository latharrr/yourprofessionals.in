export default function WhyChooseUs() {
    const reasons = [
        {
            value: "4.9★",
            title: "Client Rating",
            icon: (
                <div className="flex gap-0.5 text-amber-500 justify-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                </div>
            ),
            color: "bg-amber-50/50 border-amber-100",
            description: "Highly rated by over 500+ business owners across India for exceptional compliance service."
        },
        {
            value: "300+",
            title: "Services Offered",
            icon: (
                <svg className="w-6 h-6 text-green-600 stroke-current mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: "bg-green-50/50 border-green-100",
            description: "A comprehensive range of business registration, licensing, tax, legal, and financial solutions."
        },
        {
            value: "100%",
            title: "Price Transparency",
            icon: (
                <svg className="w-6 h-6 text-blue-600 stroke-current mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: "bg-blue-50/50 border-blue-100",
            description: "Clear, all-inclusive pricing with no hidden charges, surprise fees, or monthly retainers."
        },
        {
            value: "5 Days",
            title: "Average TAT",
            icon: (
                <svg className="w-6 h-6 text-rose-600 stroke-current mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "bg-rose-50/50 border-rose-100",
            description: "Fast turnaround times with real-time status updates throughout the process."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-xs uppercase mb-3 block">
                        Why Your Professionals
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-3">
                        Proven Track Record in Numbers
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                        Helping startups, freelancers, and growing corporations navigate compliance with speed and precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, idx) => (
                        <div
                            key={idx}
                            className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 ${reason.color}`}
                        >
                            <div className="mb-5 p-3.5 bg-white rounded-xl shadow-sm flex items-center justify-center w-12 h-12">
                                {reason.icon}
                            </div>
                            <span className="text-3xl md:text-4xl font-extrabold text-[#090a3d] mb-1">
                                {reason.value}
                            </span>
                            <h3 className="text-base font-bold text-gray-900 mb-3">{reason.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-xs">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
