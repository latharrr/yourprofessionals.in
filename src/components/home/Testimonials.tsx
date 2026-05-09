import { useState, useRef } from 'react';

import picapool from '../../assets/testimonials/1 Picapool Private Limited.png';
import mmhr from '../../assets/testimonials/2 MM HR Services Private Limited.jpeg';
import sekrop from '../../assets/testimonials/3 Sekrop Innovations Private Limited.png';
import spraykart from '../../assets/testimonials/4 Spraykart LLP.jpg';
import uniqueLithium from '../../assets/testimonials/5 Unique Lithium Private Limited.jpeg';
import kaagaz from '../../assets/testimonials/6 Kaagaz Studios.jpeg';
import srijan from '../../assets/testimonials/7 Srijan Shahi.jpeg';
import paramveer from '../../assets/testimonials/8 Paramveer Singh.jpeg';
import aman from '../../assets/testimonials/9 Aman Kumar Chagti.jpeg';
import khushi from '../../assets/testimonials/10 Khushi Jain.jpeg';

const testimonials = [
    {
        name: "Picapool Private Limited",
        rating: 5,
        text: "Quick incorporation and reliable ongoing compliance support helped us stay focused on scaling our hyperlocal platform without backend worries.",
        avatar: picapool,
    },
    {
        name: "MM HR Services Private Limited",
        rating: 5,
        text: "Not just incorporation, their ongoing compliance handling has ensured our manpower operations run smoothly without disruptions.",
        avatar: mmhr,
    },
    {
        name: "Sekrop Innovations Private Limited",
        rating: 5,
        text: "From incorporation to ongoing compliance, Your Professionals has been a dependable partner, letting us stay focused on building our agritech business.",
        avatar: sekrop,
    },
    {
        name: "Spraykart LLP",
        rating: 5,
        text: "From setting up our LLP to managing ongoing compliance, Your Professionals ensured everything stayed streamlined as we built our perfume brand.",
        avatar: spraykart,
    },
    {
        name: "Unique Lithium Private Limited",
        rating: 5,
        text: "Incorporation and Post-incorporation support as well has been consistently reliable their team ensures compliance is always on track without any follow-ups.",
        avatar: uniqueLithium,
    },
    {
        name: "Kaagaz Studios",
        rating: 5,
        text: "Your Professionals streamlined our business setup and continue to manage ongoing compliance, letting us focus on creative work without backend stress.",
        avatar: kaagaz,
    },
    {
        name: "Srijan Shahi",
        rating: 5,
        text: "What stood out is their continued involvement post-incorporation they've kept everything structured and on track.",
        avatar: srijan,
    },
    {
        name: "Paramveer Singh",
        rating: 5,
        text: "Their regular support in handling compliance and documentation has made running the business much more organised and hassle-free.",
        avatar: paramveer,
    },
    {
        name: "Aman Kumar Chagti",
        rating: 5,
        text: "Even after setup, their consistent support and clarity in compliance matters has made things much easier for me as a founder.",
        avatar: aman,
    },
    {
        name: "Khushi Jain",
        rating: 5,
        text: "Their support didn't stop at incorporation they've been consistently handling compliance, making operations much more manageable for me.",
        avatar: khushi,
    },
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(0);
    const perPage = 3;
    const totalPages = Math.ceil(testimonials.length / perPage);

    const scrollTo = (newPage: number) => {
        setPage(newPage);
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.scrollWidth / testimonials.length;
            scrollRef.current.scrollTo({
                left: newPage * perPage * cardWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-[#090a3d] gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
                        Testimonials That Speak for Us
                    </h2>
                    <div className="flex gap-4 md:hidden">
                        <button
                            onClick={() => scrollTo((page - 1 + totalPages) % totalPages)}
                            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <span className="text-xl text-gray-500">❮</span>
                        </button>
                        <button
                            onClick={() => scrollTo((page + 1) % totalPages)}
                            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <span className="text-xl text-gray-500">❯</span>
                        </button>
                    </div>
                </div>

                <div className="relative flex items-center">
                    {/* Left arrow - desktop only */}
                    <button
                        onClick={() => scrollTo((page - 1 + totalPages) % totalPages)}
                        className="hidden md:flex absolute -left-6 z-10 w-12 h-12 rounded-full border border-gray-300 bg-white shadow-md items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                        <span className="text-xl text-gray-500">❮</span>
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth w-full snap-x snap-proximity scrollbar-hide"
                    >
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="min-w-[calc(100%-0px)] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full border-2 border-[var(--color-brand-secondary)] object-cover"
                                />
                                <div>
                                    <h4 className="text-[#090a3d] font-bold">{testimonial.name}</h4>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                                        {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                                        <span className="text-gray-500 text-xs ml-2 select-none border-l pl-2 border-gray-300">{testimonial.rating}/5</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                "{testimonial.text}"
                            </p>
                        </div>
                    ))}
                    </div>

                    {/* Right arrow - desktop only */}
                    <button
                        onClick={() => scrollTo((page + 1) % totalPages)}
                        className="hidden md:flex absolute -right-6 z-10 w-12 h-12 rounded-full border border-gray-300 bg-white shadow-md items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                        <span className="text-xl text-gray-500">❯</span>
                    </button>
                </div>

                {/* Page dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            className={`w-3 h-3 rounded-full transition-colors ${i === page ? 'bg-[#c79100]' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
