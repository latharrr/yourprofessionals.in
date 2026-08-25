import { Link } from 'react-router-dom';

const SAMPLE_BLOGS = [
    {
        id: "1",
        title: "Complete Guide to Private Limited Company Registration in India (2026)",
        slug: "guide-to-private-limited-company-registration-india",
        excerpt: "Learn the step-by-step MCA process, SPICe+ form requirements, director DIN/DSC registration, and total fees required for company incorporation.",
        category: "Company Formation",
        author: "CA Joel D'souza",
        date: "August 10, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "2",
        title: "GST Return Filing Due Dates & Penalty Structure for FY 2026-27",
        slug: "gst-return-filing-due-dates-and-penalty-structure",
        excerpt: "Avoid late fees under Section 47. Understand GSTR-1, GSTR-3B monthly deadlines, GSTR-9 annual compliance, and automated ITC reconciliation rules.",
        category: "GST & Taxation",
        author: "CS Audit Team",
        date: "August 05, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "3",
        title: "How to File Trademark Registration & Protect Your Brand Name",
        slug: "how-to-file-trademark-registration-protect-brand-name",
        excerpt: "Protect your logo and brand name from infringement. Step-by-step guide to IP India search, Vienna codification, examination reports, and TM certificates.",
        category: "IPR & Trademark",
        author: "Legal Advisory Desk",
        date: "July 28, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
    }
];

export default function LatestBlogs() {
    return (
        <section className="py-20 bg-slate-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-xs uppercase mb-2 block">
                            Knowledge Center &amp; Legal Insights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d]">
                            Latest Business &amp; Tax Blogs
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base mt-2 max-w-xl">
                            Stay informed with expert guides on company incorporation, GST return filing, trademark protection, and statutory compliance.
                        </p>
                    </div>

                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 bg-[#090a3d] hover:bg-[#1a1c6e] text-white px-6 py-3 rounded-xl transition-all font-bold text-sm shadow-md hover:shadow-lg w-fit shrink-0"
                    >
                        <span>Explore All Articles</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </Link>
                </div>

                {/* Blogs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SAMPLE_BLOGS.map((blog) => (
                        <article
                            key={blog.id}
                            className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                        >
                            {/* Image Header */}
                            <div className="relative h-48 overflow-hidden bg-slate-100">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-4 left-4 bg-[var(--color-brand-secondary)] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                                    {blog.category}
                                </span>
                            </div>

                            {/* Body Content */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 text-xs text-gray-400">
                                        <span>{blog.date}</span>
                                        <span>•</span>
                                        <span>{blog.readTime}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#090a3d] group-hover:text-[var(--color-brand-secondary)] transition-colors leading-snug line-clamp-2">
                                        <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                    </h3>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                                        {blog.excerpt}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-xs font-semibold text-gray-700">By {blog.author}</span>
                                    <Link
                                        to={`/blog/${blog.slug}`}
                                        className="text-xs font-bold text-[var(--color-brand-secondary)] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                    >
                                        <span>Read Article</span>
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
