export default function FeaturedIn() {
    const brandNames = ["Company Registration", "GST Filings", "Income Tax", "ROC Filings", "Corporate Advisory", "Trademark", "Compliance", "FSSAI"];

    return (
        <section className="py-10 bg-gray-50 border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
                    Our Core Competencies
                </p>

                {/* Infinite scroll marquee effect container */}
                <div className="relative w-full overflow-hidden flex whitespace-nowrap">
                    {/* First set of logos */}
                    <div className="flex items-center shrink-0 animate-marquee">
                        {brandNames.map((brand, idx) => (
                            <div key={`brand-1-${idx}`} className="flex items-center shrink-0">
                                <span className="text-xl lg:text-3xl font-bold text-[#090a3d]/80 tracking-tight cursor-default hover:text-[var(--color-brand-secondary)] transition-colors duration-300">
                                    {brand}
                                </span>
                                <span className="mx-8 text-gray-300 text-xl font-light">|</span>
                            </div>
                        ))}
                    </div>
                    {/* Second set of logos for infinite effect */}
                    <div className="flex items-center shrink-0 animate-marquee" aria-hidden="true">
                        {brandNames.map((brand, idx) => (
                            <div key={`brand-2-${idx}`} className="flex items-center shrink-0">
                                <span className="text-xl lg:text-3xl font-bold text-[#090a3d]/80 tracking-tight cursor-default hover:text-[var(--color-brand-secondary)] transition-colors duration-300">
                                    {brand}
                                </span>
                                <span className="mx-8 text-gray-300 text-xl font-light">|</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
