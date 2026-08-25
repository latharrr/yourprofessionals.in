import joelImg from '../../assets/advisors/joel.png';

export default function Advisors() {
    return (
        <section id="advisors" className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2 block">
                        Our Leadership
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d]">
                        Meet Your Legal Advisors
                    </h2>
                    <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm md:text-base">
                        Expert guidance from seasoned Chartered Accountants, Company Secretaries, and Legal Consultants.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-40 h-40 rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-md">
                        <img 
                            src={joelImg} 
                            alt="Joel D'souza" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                // fallback if image fails to load
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300";
                            }}
                        />
                    </div>
                    <div className="text-center md:text-left space-y-3">
                        <div>
                            <h3 className="text-2xl font-bold text-[#090a3d]">Joel D'souza</h3>
                            <p className="text-[var(--color-brand-secondary)] font-semibold text-sm">Founder & Managing Director</p>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Fellow Chartered Accountant (FCA) & Company Secretary (CS) with over 12 years of experience in corporate law, international taxation, and business compliance.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-500 border border-gray-150">12+ Yrs Exp</span>
                            <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-500 border border-gray-150">Ex-Big4 Tax Consultant</span>
                            <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-500 border border-gray-150">Corporate Advisor</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
