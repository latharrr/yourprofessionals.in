import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';
import { getStoredBlogs, addSingleBlog, addBulkBlogs, deleteStoredBlog } from '../data/blogs';
import type { BlogPostItem } from '../data/blogs';

export default function BlogAdmin() {
    const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem('blog_admin_auth') === 'true');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const [mode, setMode] = useState<'single' | 'bulk' | 'manage'>('single');
    const [blogs, setBlogs] = useState<BlogPostItem[]>(() => getStoredBlogs());

    // Single Form state
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [category, setCategory] = useState('Company Registration');
    const [author, setAuthor] = useState("CA Joel D'souza");
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [readTime, setReadTime] = useState('5 min read');

    // Bulk Form state
    const [bulkJson, setBulkJson] = useState('');

    // Search state for manage tab
    const [searchQuery, setSearchQuery] = useState('');

    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin@123') {
            setIsAuthenticated(true);
            sessionStorage.setItem('blog_admin_auth', 'true');
            setLoginError('');
        } else {
            setLoginError('Incorrect password. Please try again.');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('blog_admin_auth');
        setPassword('');
    };

    const loadBlogs = () => {
        setBlogs(getStoredBlogs());
    };

    const handleSingleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !excerpt || !content) {
            setMessage({ type: 'error', text: 'Please fill in Title, Excerpt, and Content.' });
            return;
        }

        const generatedSlug = slug.trim()
            ? slug.toLowerCase().replace(/[^a-z0-9]+/g, '-')
            : title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        const newBlog: Omit<BlogPostItem, "id"> = {
            title,
            slug: generatedSlug,
            excerpt,
            content,
            category,
            author,
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            readTime,
            image: image.trim() || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
            tags: [category, "Compliance"]
        };

        addSingleBlog(newBlog);
        setMessage({ type: 'success', text: '✓ Blog uploaded successfully!' });
        setTitle('');
        setSlug('');
        setExcerpt('');
        setContent('');
        setImage('');
        loadBlogs();
        setTimeout(() => setMessage(null), 3000);
    };

    const handleBulkSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const parsed = JSON.parse(bulkJson);
            if (!Array.isArray(parsed) || parsed.length === 0) {
                setMessage({ type: 'error', text: 'JSON must be a non-empty array of blog objects.' });
                return;
            }

            const formattedList: Array<Omit<BlogPostItem, "id">> = parsed.map((item: Partial<BlogPostItem>) => ({
                title: item.title || 'Untitled Blog',
                slug: (item.slug || item.title || 'blog').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                excerpt: item.excerpt || item.content?.substring(0, 120) || 'Business compliance article.',
                content: item.content || 'Content coming soon.',
                category: item.category || 'Compliance',
                author: item.author || "CA Advisory Team",
                date: item.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                readTime: item.readTime || '5 min read',
                image: item.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
                tags: item.tags || [item.category || "Taxation"]
            }));

            addBulkBlogs(formattedList);
            setMessage({ type: 'success', text: `✓ Successfully bulk uploaded ${formattedList.length} blogs!` });
            setBulkJson('');
            loadBlogs();
            setTimeout(() => setMessage(null), 3000);
        } catch (err) {
            console.error("Bulk JSON parse error:", err);
            setMessage({ type: 'error', text: 'Invalid JSON format. Check syntax and try again.' });
        }
    };

    const handleDeleteClick = (id: string, blogTitle: string) => {
        if (window.confirm(`Are you sure you want to delete the blog "${blogTitle}"?`)) {
            deleteStoredBlog(id);
            setMessage({ type: 'success', text: '✓ Blog deleted successfully.' });
            loadBlogs();
            setTimeout(() => setMessage(null), 3000);
        }
    };

    const sampleBulkJson = `[
  {
    "title": "LLP Annual Compliance Checklist 2026",
    "slug": "llp-annual-compliance-checklist-2026",
    "category": "Compliance",
    "author": "CS Audit Desk",
    "excerpt": "Key forms Form 11 and Form 8 deadlines for Limited Liability Partnerships.",
    "content": "<h2>LLP Annual Filing Requirements</h2><p>LLP compliance requires annual submission of Form 11 and Form 8 to the MCA...</p><h3>Due Dates</h3><ul><li><strong>Form 11</strong>: due by 30 May.</li><li><strong>Form 8</strong>: due by 30 October.</li></ul>",
    "image": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
  }
]`;

    const filteredBlogs = blogs.filter(b => 
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col font-sans bg-slate-50">
            <SEO
                title="CMS Portal — Your Professionals"
                description="Secure administrator console for managing articles, guides, and corporate insights."
                canonical="/blogs/admin"
            />
            <Header />

            <main className="flex-grow pt-28 pb-20">
                {!isAuthenticated ? (
                    /* ── PASSWORD PROTECTION GATE ── */
                    <div className="max-w-md mx-auto px-5 py-12">
                        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-150 relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#090a3d] via-[#b8860b] to-[#090a3d]" />
                            
                            <div className="text-center mb-6">
                                <span className="inline-block p-3 rounded-full bg-slate-100 text-[#090a3d] text-2xl font-bold mb-3">
                                    🔒
                                </span>
                                <h2 className="text-xl font-bold text-[#090a3d]">Administrator Access</h2>
                                <p className="text-xs text-gray-500 mt-1">Please enter the security password to manage blogs.</p>
                            </div>

                            {loginError && (
                                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs font-semibold text-center">
                                    {loginError}
                                </div>
                            )}

                            <form onSubmit={handleLoginSubmit} className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-gray-600">Enter Security Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#b8860b] focus:ring-2 focus:ring-[#b8860b]/20 transition-all font-medium"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#090a3d] hover:bg-[#12155a] text-white font-bold py-3 rounded-xl transition-all text-xs tracking-wider uppercase shadow-md cursor-pointer"
                                >
                                    Verify &amp; Access Dashboard
                                </button>
                            </form>
                        </div>
                    </div>
                ) : (
                    /* ── BLOG CMS DASHBOARD ── */
                    <div className="max-w-5xl mx-auto px-5">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-150 overflow-hidden">
                            {/* Dashboard Header */}
                            <div className="bg-gradient-to-r from-[#090a3d] to-[#12155a] p-6 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                    <h2 className="text-xl font-bold">Content CMS Admin Panel</h2>
                                    <p className="text-xs text-gray-400 mt-1">Secure session active. Add, edit, or delete articles.</p>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer self-start sm:self-auto"
                                >
                                    Logout Session
                                </button>
                            </div>

                            {/* Main Tabs */}
                            <div className="flex border-b border-gray-100 bg-slate-50/50 p-2 gap-1.5">
                                <button
                                    onClick={() => setMode('single')}
                                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${mode === 'single' ? 'bg-[#090a3d] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                                >
                                    Single Post Upload
                                </button>
                                <button
                                    onClick={() => setMode('bulk')}
                                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${mode === 'bulk' ? 'bg-[#090a3d] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                                >
                                    Bulk JSON Import
                                </button>
                                <button
                                    onClick={() => setMode('manage')}
                                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${mode === 'manage' ? 'bg-[#090a3d] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                                >
                                    Manage Existing ({blogs.length})
                                </button>
                            </div>

                            {/* Notifications */}
                            {message && (
                                <div className="p-4 bg-slate-50 border-b border-gray-100">
                                    <div className={`p-3 rounded-xl text-xs font-bold text-center ${message.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                                        {message.text}
                                    </div>
                                </div>
                            )}

                            {/* Form/Action Areas */}
                            <div className="p-6 sm:p-8">
                                {mode === 'single' && (
                                    <form onSubmit={handleSingleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700">Article Title *</label>
                                                <input
                                                    type="text"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    placeholder="e.g. Complete Private Limited Guide"
                                                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b]"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700">URL Slug (Optional)</label>
                                                <input
                                                    type="text"
                                                    value={slug}
                                                    onChange={(e) => setSlug(e.target.value)}
                                                    placeholder="e.g. pvt-ltd-guide-2026 (auto-generated if empty)"
                                                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b]"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700">Category</label>
                                                <select
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#b8860b]"
                                                >
                                                    <option>Company Registration</option>
                                                    <option>GST &amp; Taxation</option>
                                                    <option>MCA &amp; Corporate Compliance</option>
                                                    <option>IPR &amp; Trademark</option>
                                                    <option>Accounting &amp; Finance</option>
                                                    <option>Others</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700">Author Name</label>
                                                <input
                                                    type="text"
                                                    value={author}
                                                    onChange={(e) => setAuthor(e.target.value)}
                                                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#b8860b]"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700">Read Time (minutes)</label>
                                                <input
                                                    type="text"
                                                    value={readTime}
                                                    onChange={(e) => setReadTime(e.target.value)}
                                                    placeholder="e.g. 5 min read"
                                                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#b8860b]"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-700">Image Cover URL</label>
                                            <input
                                                type="url"
                                                value={image}
                                                onChange={(e) => setImage(e.target.value)}
                                                placeholder="https://images.unsplash.com/..."
                                                className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#b8860b]"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-700">Short Summary Excerpt *</label>
                                            <textarea
                                                rows={2}
                                                value={excerpt}
                                                onChange={(e) => setExcerpt(e.target.value)}
                                                placeholder="A brief summary shown on listing views..."
                                                className="w-full bg-slate-50 border border-gray-200 rounded-xl p-4 text-xs focus:outline-none focus:border-[#b8860b]"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-700">Article Content (HTML) *</label>
                                            <p className="text-[10px] text-gray-500">
                                                Write real HTML tags — <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;ul&gt;/&lt;li&gt;</code>, <code>&lt;strong&gt;</code> — not Markdown (<code>##</code>, <code>**bold**</code>). This renders directly in the page, so proper heading and paragraph tags are what search engines actually crawl.
                                            </p>
                                            <textarea
                                                rows={10}
                                                value={content}
                                                onChange={(e) => setContent(e.target.value)}
                                                placeholder={'<h2>Section Heading</h2>\n<p>Paragraph text goes here...</p>\n<ul>\n<li>Point one</li>\n<li>Point two</li>\n</ul>'}
                                                className="w-full bg-slate-50 border border-gray-200 rounded-xl p-4 text-xs font-mono focus:outline-none focus:border-[#b8860b]"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="px-6 py-3.5 bg-[#b8860b] hover:bg-[#a67800] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                                        >
                                            Publish Blog Post
                                        </button>
                                    </form>
                                )}

                                {mode === 'bulk' && (
                                    <form onSubmit={handleBulkSubmit} className="space-y-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-700">JSON Array Input</label>
                                            <p className="text-[10px] text-gray-500 mb-1">Paste a structured array of blog objects to batch upload articles.</p>
                                            <textarea
                                                rows={12}
                                                value={bulkJson}
                                                onChange={(e) => setBulkJson(e.target.value)}
                                                placeholder={sampleBulkJson}
                                                className="w-full bg-slate-50 border border-gray-200 rounded-xl p-4 text-[11px] font-mono focus:outline-none focus:border-[#b8860b]"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="px-6 py-3.5 bg-[#b8860b] hover:bg-[#a67800] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                                        >
                                            Execute Bulk Import
                                        </button>
                                    </form>
                                )}

                                {mode === 'manage' && (
                                    <div className="space-y-6">
                                        {/* Filter Search */}
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Filter list by title or category..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="w-full bg-slate-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-[#b8860b]"
                                            />
                                            <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </div>

                                        {/* Grid listing */}
                                        <div className="border border-gray-150 rounded-2xl overflow-hidden divide-y divide-gray-100">
                                            {filteredBlogs.length === 0 ? (
                                                <div className="p-8 text-center text-xs text-gray-500 bg-slate-50/50">
                                                    No articles found matching filters.
                                                </div>
                                            ) : (
                                                filteredBlogs.map((b) => (
                                                    <div key={b.id} className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                                                        <div className="min-w-0 flex-1">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="text-[9px] bg-slate-100 text-gray-600 font-bold uppercase px-2 py-0.5 rounded">
                                                                    {b.category}
                                                                </span>
                                                                <span className="text-[10px] text-gray-400">{b.date}</span>
                                                            </div>
                                                            <h4 className="font-bold text-gray-900 text-xs sm:text-sm truncate">
                                                                {b.title}
                                                            </h4>
                                                        </div>
                                                        <button
                                                            onClick={() => handleDeleteClick(b.id, b.title)}
                                                            className="px-3 py-1.5 bg-red-50 hover:bg-red-100 border border-red-100 text-red-600 hover:text-red-700 font-bold rounded-lg text-[10px] uppercase transition-colors cursor-pointer shrink-0"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
