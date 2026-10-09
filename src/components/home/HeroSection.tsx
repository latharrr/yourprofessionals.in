import heroBg from '../../assets/hero-bg.webp';
import heroMobile from '../../assets/hero-mobile.webp';
import LeadForm from '../common/LeadForm';

export default function HeroSection() {
    return (
        <section className="relative w-full pt-[105px] sm:pt-[115px] lg:pt-[125px] overflow-hidden bg-gradient-to-r from-[#f8fafc] via-white to-[#f4f6fb]">
            <div className="w-full">
                <div className="grid grid-cols-1 xl:grid-cols-12 items-stretch min-h-[500px] sm:min-h-[560px]">

                    {/* ═══════════════════════════════════════════════════════
                        LEFT COLUMN: FULL-BLEED HERO POSTER IMAGE (DESKTOP & MOBILE)
                        Adjusted for iPad Air, Nest Hub, Nest Hub Max & Laptops
                        ═══════════════════════════════════════════════════════ */}
                    <div className="xl:col-span-7 2xl:col-span-8 bg-[#f8fafc] overflow-hidden flex items-start xl:items-center justify-center relative">
                        {/* Desktop & Tablet Poster Image */}
                        <img
                            src={heroBg}
                            alt="India's Fastest Business Registration Service Provider — Your Professionals"
                            className="hidden sm:block w-full h-auto xl:h-full object-contain object-center xl:object-top select-none"
                            width={1300}
                            height={700}
                            fetchPriority="high"
                            decoding="async"
                        />
                        {/* Mobile Poster Image */}
                        <img
                            src={heroMobile}
                            alt="India's Fastest Business Registration Service Provider — Your Professionals"
                            className="sm:hidden w-full h-auto object-cover select-none"
                            width={1080}
                            height={1080}
                            fetchPriority="high"
                            decoding="async"
                        />
                    </div>

                    {/* ═══════════════════════════════════════════════════════
                        RIGHT COLUMN: LEAD COLLECTION CARD
                        Pill + 3-line headline + shared LeadForm (see LeadForm.tsx),
                        matching the approved "Receive Your Personalized Quote" design
                        ═══════════════════════════════════════════════════════ */}
                    <div className="xl:col-span-5 2xl:col-span-4 bg-gradient-to-b from-slate-50 to-white px-4 pt-5 pb-6 sm:px-8 xl:pt-1 xl:pb-4 flex items-start justify-center border-t xl:border-t-0 xl:border-l border-gray-200">
                        <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_60px_-20px_rgba(9,10,61,0.25)] border border-gray-100 px-6 py-5 sm:px-8 sm:py-5 [@media(max-height:700px)]:py-3">

                            {/* Badge */}
                            <div className="text-center [@media(max-height:620px)]:hidden">
                                <span className="inline-block bg-amber-50 text-[var(--color-brand-secondary)] font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-amber-200">
                                    FREE CONSULTATION &amp; INSTANT QUOTE
                                </span>
                            </div>

                            {/* Headline */}
                            <h2
                                className="text-center text-2xl sm:text-[26px] font-extrabold leading-[1.15] text-[#090a3d] mt-3 mb-4 [@media(max-height:700px)]:text-xl [@media(max-height:700px)]:mt-1 [@media(max-height:700px)]:mb-3"
                                style={{ fontFamily: 'var(--font-sans)' }}
                            >
                                Receive Your<br />
                                <span className="text-[var(--color-brand-secondary)]">Personalized Quote</span><br />
                                Instantly
                            </h2>

                            <LeadForm compact />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
