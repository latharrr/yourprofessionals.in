export default function FeaturedIn() {
    const brandNames = ["Company Registration", "GST", "Income Tax", "ROC Filings", "Advisory", "Trademark", "Compliance", "FSSAI"];

    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <p className="text-center text-sm font-bold tracking-widest uppercase text-[var(--color-brand-secondary)] mb-6">
                    Our Core Services
                </p>

                {/* Infinite scroll marquee effect container */}
                <div className="relative w-full overflow-hidden flex whitespace-nowrap">
                    {/* First set of logos */}
                    <div className="flex items-center shrink-0 animate-marquee">
                        {brandNames.map((brand, idx) => (
                            <div key={`brand-1-${idx}`} className="mx-8 shrink-0">
                                <span className="text-3xl lg:text-5xl font-extrabold text-[#c79100] tracking-tighter cursor-default hover:text-[#090a3d] transition-colors duration-300">
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Second set of logos for infinite effect */}
                    <div className="flex items-center shrink-0 animate-marquee" aria-hidden="true">
                        {brandNames.map((brand, idx) => (
                            <div key={`brand-2-${idx}`} className="mx-8 shrink-0">
                                <span className="text-3xl lg:text-5xl font-extrabold text-[#c79100] tracking-tighter cursor-default hover:text-[#090a3d] transition-colors duration-300">
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
