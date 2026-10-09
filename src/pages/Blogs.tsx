import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';
import LeadForm from '../components/common/LeadForm';
import { getStoredBlogs } from '../data/blogs';
import type { BlogPostItem } from '../data/blogs';

const parseDate = (d: string) => {
    const t = Date.parse(d);
    return Number.isNaN(t) ? 0 : t;
};

function PostMeta({ blog }: { blog: BlogPostItem }) {
    return (
        <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{blog.date}</span>
            <span aria-hidden="true">·</span>
            <span>{blog.readTime}</span>
        </div>
    );
}

function Author({ name }: { name: string }) {
    return (
        <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-7 h-7 rounded-full bg-[#090a3d] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                {name.charAt(0)}
            </span>
            <span className="text-xs font-semibold text-gray-600 truncate">{name}</span>
        </div>
    );
}

function FeaturedPost({ blog }: { blog: BlogPostItem }) {
    return (
        <article className="group relative overflow-hidden rounded-3xl bg-[#090a3d] text-white shadow-xl">
            <Link to={`/blog/${blog.slug}`} className="block" aria-label={blog.title}>
                <div className="grid md:grid-cols-5">
                    <div className="md:col-span-3 relative aspect-[16/10] md:aspect-auto md:min-h-[360px] overflow-hidden bg-[#12155a]">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090a3d]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#090a3d]/70" />
                    </div>
                    <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-center gap-4">
                        <div className="flex items-center gap-3">
                            <span className="bg-[var(--color-brand-secondary)] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                                Featured
                            </span>
                            <span className="text-amber-300 text-[11px] font-bold uppercase tracking-wider">{blog.category}</span>
                        </div>
                        <h2 className="text-2xl lg:text-[28px] font-bold leading-snug group-hover:text-amber-300 transition-colors">
                            {blog.title}
                        </h2>
                        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">{blog.excerpt}</p>
                        <div className="flex items-center justify-between gap-4 pt-2 text-xs text-gray-300">
                            <span>{blog.date} · {blog.readTime}</span>
                            <span className="inline-flex items-center gap-1.5 font-bold text-amber-300">
                                Read article
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}

function PostCard({ blog }: { blog: BlogPostItem }) {
    return (
        <article className="group flex flex-col bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <Link to={`/blog/${blog.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-slate-100" tabIndex={-1} aria-hidden="true">
                <img
                    src={blog.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                />
                <span className="absolute top-3 left-3 bg-white/95 text-[#090a3d] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {blog.category}
                </span>
            </Link>
            <div className="flex flex-col flex-1 p-5 gap-3">
                <PostMeta blog={blog} />
                <h3 className="text-base font-bold text-[#090a3d] leading-snug group-hover:text-[var(--color-brand-secondary)] transition-colors">
                    <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{blog.excerpt}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <Author name={blog.author} />
                    <Link
                        to={`/blog/${blog.slug}`}
                        className="text-xs font-bold text-[var(--color-brand-secondary)] inline-flex items-center gap-1 shrink-0"
                    >
                        Read
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default function Blogs() {
    const [blogs] = useState<BlogPostItem[]>(() =>
        [...getStoredBlogs()].sort((a, b) => parseDate(b.date) - parseDate(a.date))
    );
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Only offer categories that actually have posts, with live counts.
    const categories = useMemo(() => {
        const counts = new Map<string, number>();
        blogs.forEach((b) => counts.set(b.category, (counts.get(b.category) ?? 0) + 1));
        return [{ name: 'All', count: blogs.length }, ...[...counts].map(([name, count]) => ({ name, count }))];
    }, [blogs]);

    const query = searchQuery.trim().toLowerCase();
    const filteredBlogs = blogs.filter((b) => {
        const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
        const matchesSearch = !query || b.title.toLowerCase().includes(query) || b.excerpt.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    // Lead with a featured article only on the unfiltered view.
    const showFeatured = selectedCategory === 'All' && !query && filteredBlogs.length > 1;
    const featured = showFeatured ? filteredBlogs[0] : null;
    const gridBlogs = showFeatured ? filteredBlogs.slice(1) : filteredBlogs;

    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#faf9f6]">
            <SEO
                title="Business & Tax Compliance Blogs – Your Professionals"
                description="Expert guides on company incorporation, GST return filing, trademark registration, and corporate compliance in India."
                canonical="/blogs"
                schema={{ '@context': 'https://schema.org', '@type': 'Blog', name: 'Your Professionals Blog', url: 'https://www.yourprofessionals.in/blogs', publisher: { '@id': 'https://www.yourprofessionals.in/#organization' } }}
            />
            <Header />

            <main className="flex-grow pt-28 pb-20">
                {/* HEADER + SEARCH */}
                <section className="px-4">
                    <div className="max-w-7xl mx-auto pt-10 pb-8 md:pt-14 md:pb-10">
                        <span className="inline-block text-[var(--color-brand-secondary)] text-xs font-extrabold uppercase tracking-[0.18em] mb-3">
                            Insights &amp; Guides
                        </span>
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#090a3d] leading-[1.1]">
                                    Corporate law, tax &amp; startup guides, <span className="text-[var(--color-brand-secondary)]">made simple.</span>
                                </h1>
                                <p className="text-gray-600 text-base mt-4 leading-relaxed">
                                    Practical compliance advice from our Chartered Accountants, Company Secretaries and legal consultants.
                                </p>
                            </div>
                            <div className="relative w-full lg:max-w-sm">
                                <label htmlFor="blog-search" className="sr-only">Search articles</label>
                                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                <input
                                    id="blog-search"
                                    type="search"
                                    placeholder="Search GST, trademark, ROC filing…"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full h-12 bg-white border border-gray-200 rounded-full pl-12 pr-5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-2 focus:ring-[var(--color-brand-secondary)]/20"
                                />
                            </div>
                        </div>

                        {/* CATEGORY PILLS */}
                        <div className="mt-8 -mx-4 px-4 overflow-x-auto" role="tablist" aria-label="Blog categories">
                            <div className="flex gap-2 w-max sm:w-auto sm:flex-wrap">
                                {categories.map(({ name, count }) => {
                                    const active = selectedCategory === name;
                                    return (
                                        <button
                                            key={name}
                                            type="button"
                                            role="tab"
                                            aria-selected={active}
                                            onClick={() => setSelectedCategory(name)}
                                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                                                active
                                                    ? 'bg-[#090a3d] text-white border-[#090a3d] shadow-md'
                                                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                            }`}
                                        >
                                            {name}
                                            <span className={`ml-1.5 ${active ? 'text-amber-300' : 'text-gray-400'}`}>{count}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* POSTS + LEAD SIDEBAR */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        <div className="lg:col-span-8 space-y-8 min-w-0">
                            {filteredBlogs.length === 0 ? (
                                <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center">
                                    <p className="text-[#090a3d] font-bold mb-1">No articles found</p>
                                    <p className="text-gray-500 text-sm mb-5">Try another keyword or category.</p>
                                    <button
                                        type="button"
                                        onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                                        className="text-xs font-bold text-white bg-[#090a3d] hover:bg-[#12155a] px-5 py-2.5 rounded-full cursor-pointer"
                                    >
                                        Clear filters
                                    </button>
                                </div>
                            ) : (
                                <>
                                    {featured && <FeaturedPost blog={featured} />}
                                    {gridBlogs.length > 0 && (
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            {gridBlogs.map((blog) => <PostCard key={blog.id} blog={blog} />)}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_-20px_rgba(9,10,61,0.25)] px-6 py-8">
                                <div className="text-center">
                                    <span className="inline-block bg-amber-50 text-[var(--color-brand-secondary)] font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-amber-200">
                                        FREE CONSULTATION &amp; INSTANT QUOTE
                                    </span>
                                </div>
                                <h2
                                    className="text-center text-2xl font-extrabold leading-tight text-[#090a3d] mt-4 mb-6"
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                >
                                    Receive Your<br />
                                    <span className="text-[var(--color-brand-secondary)]">Personalized Quote</span><br />
                                    Instantly
                                </h2>
                                <LeadForm />
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
