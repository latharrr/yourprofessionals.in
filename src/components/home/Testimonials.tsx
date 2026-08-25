import { useState, useEffect, useCallback, useRef } from 'react';

import picapool from '../../assets/testimonials/1 Picapool Private Limited.png';
import mmhr from '../../assets/testimonials/2 MM HR Services Private Limited.jpeg';
import sekrop from '../../assets/testimonials/3 Sekrop Innovations Private Limited.png';
import spraykart from '../../assets/testimonials/4 Spraykart LLP.jpg';
import uniqueLithium from '../../assets/testimonials/5 Unique Lithium Private Limited.jpeg';
import kaagaz from '../../assets/testimonials/6 Kaagaz Studios.jpeg';

const GOOGLE_BUSINESS_PROFILE_URL = "https://www.google.com/maps/place/Your+Professionals/@28.6302733,77.2791949,17z/data=!4m8!3m7!1s0x390cfd4f519efed7:0xa49020911d2f321d!8m2!3d28.6302733!4d77.2791949!9m1!1b1!16s%2Fg%2F11nhksdptj?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D";

interface ReviewItem {
    id: number;
    name: string;
    rating: number;
    time: string;
    text: string;
    avatar?: string;
    initial?: string;
    bgColor?: string;
    verified?: boolean;
}

const ALL_REVIEWS: ReviewItem[] = [
    {
        id: 1,
        name: "Spraykart LLP",
        rating: 5,
        time: "last month",
        text: "From setting up our LLP to managing ongoing compliance, Your Professionals ensured everything stayed streamlined as we built our perfume brand.",
        avatar: spraykart,
        verified: true
    },
    {
        id: 2,
        name: "Unique Lithium Private Limited",
        rating: 5,
        time: "last month",
        text: "Incorporation and Post-incorporation support as well has been consistently reliable, their team ensures compliance is always on track without any follow-ups.",
        avatar: uniqueLithium,
        verified: true
    },
    {
        id: 3,
        name: "Kaagaz Studios",
        rating: 5,
        time: "last month",
        text: "Your Professionals streamlined our business setup and continue to manage ongoing compliance, letting us focus on creative work without backend stress.",
        avatar: kaagaz,
        verified: true
    },
    {
        id: 4,
        name: "Picapool Private Limited",
        rating: 5,
        time: "last week",
        text: "Quick incorporation and reliable ongoing compliance support helped us stay focused on scaling our hyperlocal platform without backend worries.",
        avatar: picapool,
        verified: true
    },
    {
        id: 5,
        name: "MM HR Services Private Limited",
        rating: 5,
        time: "last month",
        text: "Not just incorporation, their ongoing compliance handling has ensured our manpower operations run smoothly across all jurisdictions.",
        avatar: mmhr,
        verified: true
    },
    {
        id: 6,
        name: "Sekrop Innovations",
        rating: 5,
        time: "last month",
        text: "From incorporation to ongoing compliance, Your Professionals has been a dependable partner for our agritech firm.",
        avatar: sekrop,
        verified: true
    },
    {
        id: 7,
        name: "Mudabbir Sayyad",
        rating: 5,
        time: "last week",
        text: "Great experience with company registration. The CA team guided us through DSC, DIN, and ROC approval seamlessly within 4 days.",
        initial: "M",
        bgColor: "bg-amber-600",
        verified: true
    },
    {
        id: 8,
        name: "Gurmeet Singh K...",
        rating: 5,
        time: "last month",
        text: "Perfect partner for business compliance needs. Prompt responses, transparent pricing, and zero follow-up required!",
        initial: "G",
        bgColor: "bg-emerald-600",
        verified: true
    },
    {
        id: 9,
        name: "Abhinav Wadkar",
        rating: 5,
        time: "last month",
        text: "Nice service! Handled GST registration and trademark filing with thorough professional expertise.",
        initial: "A",
        bgColor: "bg-[#090a3d]",
        verified: true
    },
    {
        id: 10,
        name: "Lalisa Manoban",
        rating: 5,
        time: "last month",
        text: "Excellent in-store experience. Customer satisfaction is their top priority, and the staff are friendly, professional, and helpful.",
        initial: "L",
        bgColor: "bg-purple-600",
        verified: true
    },
    {
        id: 11,
        name: "Rohit Salunkhe",
        rating: 5,
        time: "last month",
        text: "Best incorporation advisory I have ever visited. Smooth documentation and instant WhatsApp updates throughout.",
        initial: "R",
        bgColor: "bg-rose-600",
        verified: true
    },
    {
        id: 12,
        name: "Smital Rindhe",
        rating: 5,
        time: "last month",
        text: "Amazing quality service! Highly recommended for all startups looking for hassle-free annual MCA return filing.",
        initial: "S",
        bgColor: "bg-teal-600",
        verified: true
    }
];

export default function Testimonials() {
    // Only 4 and 5 star reviews
    const reviews = ALL_REVIEWS.filter(r => r.rating >= 4);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [visibleCards, setVisibleCards] = useState(3);
    const timerRef = useRef<number | null>(null);

    // Calculate visible cards count based on screen width
    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth < 640) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, [reviews.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex(prev => (prev - 1 + reviews.length) % reviews.length);
    }, [reviews.length]);

    useEffect(() => {
        if (!isPaused) {
            timerRef.current = window.setInterval(() => {
                nextSlide();
            }, 3800);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPaused, nextSlide]);

    // Create extended array to allow continuous sliding animation
    const extendedReviews = [...reviews, ...reviews.slice(0, visibleCards)];

    // Number of total slide dot pages
    const totalDots = Math.ceil(reviews.length / visibleCards);
    const activeDot = Math.floor(currentIndex / visibleCards) % totalDots;

    return (
        <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-gray-900 border-t border-gray-100 relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* GOOGLE RATING TOP HEADER BADGE */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-white px-6 py-2.5 rounded-full border border-gray-200 shadow-sm mb-4">
                        <span className="font-black text-xs md:text-sm tracking-wider uppercase text-gray-700">EXCELLENT</span>
                        <div className="flex text-amber-400 text-sm">★★★★★</div>
                        <span className="text-xs text-gray-500 font-semibold">185+ Google Reviews</span>
                        <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                        </svg>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#090a3d] tracking-tight mb-3">
                        Client Testimonials &amp; Google Reviews
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
                        See original 4 &amp; 5-star Google Profile reviews from founders and business owners.
                    </p>
                </div>

                {/* MULTI-CARD HORIZONTAL SLIDER CONTAINER */}
                <div 
                    className="relative px-2 sm:px-6"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Viewport wrapper with overflow hidden */}
                    <div className="overflow-hidden py-4">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
                            }}
                        >
                            {extendedReviews.map((item, idx) => (
                                <div 
                                    key={`${item.id}-${idx}`} 
                                    className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3"
                                >
                                    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between relative group hover:-translate-y-1">
                                        
                                        <div>
                                            {/* Header Row: Avatar/Logo + Name + Stars & Rating + Google G */}
                                            <div className="flex items-start justify-between gap-3 mb-4">
                                                <div className="flex items-center gap-3.5 min-w-0">
                                                    {item.avatar ? (
                                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/40 p-0.5 shrink-0 bg-white shadow-sm">
                                                            <img
                                                                src={item.avatar}
                                                                alt={item.name}
                                                                className="w-full h-full rounded-full object-cover"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className={`w-12 h-12 rounded-full ${item.bgColor || 'bg-[#090a3d]'} text-white font-extrabold text-base flex items-center justify-center shrink-0 shadow-sm`}>
                                                            {item.initial || item.name.charAt(0)}
                                                        </div>
                                                    )}

                                                    <div className="min-w-0">
                                                        <h3 className="font-extrabold text-sm sm:text-base text-gray-900 truncate leading-snug">
                                                            {item.name}
                                                        </h3>
                                                        
                                                        {/* Stars + 5/5 score */}
                                                        <div className="flex items-center gap-1.5 mt-1">
                                                            <div className="flex text-amber-400 text-xs tracking-tight">
                                                                {Array.from({ length: item.rating }).map((_, i) => (
                                                                    <span key={i}>★</span>
                                                                ))}
                                                            </div>
                                                            <span className="text-[11px] font-semibold text-gray-400 border-l border-gray-200 pl-1.5">
                                                                {item.rating}/5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Google Badge Icon */}
                                                <svg className="w-4 h-4 shrink-0 mt-1" viewBox="0 0 24 24">
                                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                                </svg>
                                            </div>

                                            {/* Review Text */}
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic">
                                                "{item.text}"
                                            </p>
                                        </div>

                                        {/* Card Footer Tag */}
                                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                                            <span className="flex items-center gap-1 text-emerald-600 font-bold">
                                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Verified Review
                                            </span>
                                            <span>{item.time}</span>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Chevron Button */}
                    <button
                        onClick={prevSlide}
                        aria-label="Previous Reviews"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center text-gray-700 hover:bg-[#090a3d] hover:text-white hover:border-[#090a3d] transition-all cursor-pointer z-20"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Right Chevron Button */}
                    <button
                        onClick={nextSlide}
                        aria-label="Next Reviews"
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center text-gray-700 hover:bg-[#090a3d] hover:text-white hover:border-[#090a3d] transition-all cursor-pointer z-20"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* Pagination Indicator Dots */}
                    <div className="flex justify-center items-center gap-2 mt-8">
                        {Array.from({ length: totalDots }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx * visibleCards)}
                                aria-label={`Go to review page ${idx + 1}`}
                                className={`transition-all duration-300 rounded-full cursor-pointer ${
                                    idx === activeDot 
                                        ? 'w-7 h-2.5 bg-[var(--color-brand-secondary)] shadow-sm' 
                                        : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>

                </div>

                {/* PROMINENT 'SEE ALL REVIEWS' BUTTON REDIRECTING TO GOOGLE MAPS */}
                <div className="text-center mt-12">
                    <a
                        href={GOOGLE_BUSINESS_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-extrabold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer transform hover:scale-105"
                    >
                        <span>See All Reviews on Google</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}
