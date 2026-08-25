export interface BlogPostItem {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    tags?: string[];
}

export const DEFAULT_BLOGS: BlogPostItem[] = [
    {
        id: "1",
        title: "Complete Guide to Private Limited Company Registration in India (2026)",
        slug: "guide-to-private-limited-company-registration-india",
        excerpt: "Learn the step-by-step MCA process, SPICe+ form requirements, director DIN/DSC registration, and total fees required for company incorporation.",
        content: `<h2>Overview of Private Limited Company Incorporation</h2>
<p>A Private Limited Company is the most popular legal business structure in India for startups and growing enterprises. Governed by the Companies Act 2013 and administered by the Ministry of Corporate Affairs (MCA), it provides limited liability protection to its shareholders and enhances corporate credibility.</p>
<h3>Key Benefits of Private Limited Company</h3>
<ol>
<li><strong>Limited Liability Protection</strong>: Personal assets of directors and shareholders remain completely safe in case of business debts.</li>
<li><strong>Easy Equity Fundraising</strong>: Angel investors and Venture Capitalists (VCs) prefer investing in Private Limited Companies.</li>
<li><strong>Perpetual Succession</strong>: The company continues to exist legally regardless of changes in directors or ownership.</li>
<li><strong>Enhanced Brand Credibility</strong>: Required for large corporate vendor onboarding, banking facilities, and government tenders.</li>
</ol>
<h2>Step-by-Step Registration Process (MCA SPICe+ Portal)</h2>
<h3>Step 1: Digital Signature Certificate (DSC) &amp; DIN</h3>
<p>Before filing the SPICe+ (INC-32) form, all proposed directors must obtain Class-3 Digital Signature Certificates (DSC) from certified agencies. Director Identification Numbers (DIN) are allocated automatically inside the integrated form.</p>
<h3>Step 2: Name Reservation (RUN / SPICe+ Part A)</h3>
<p>Propose up to 2 unique names through the MCA RUN service or SPICe+ Part A. The name must end with &quot;Private Limited&quot; and adhere to MCA trademark guidelines.</p>
<h3>Step 3: Drafting MoA &amp; AoA (INC-33 &amp; INC-34)</h3>
<p>The Memorandum of Association (MoA) defines the company's core objects, while the Articles of Association (AoA) sets internal governance rules.</p>
<h2>Documents Required for Incorporation</h2>
<ul>
<li><strong>PAN Card &amp; Aadhaar Card</strong> of all directors.</li>
<li><strong>Proof of Registered Address</strong>: Utility bill (Electricity/Gas/Mobile) not older than 2 months.</li>
<li><strong>NOC from Property Owner</strong> along with rent agreement or ownership proof.</li>
</ul>`,
        category: "Company Registration",
        author: "CA Joel D'souza",
        date: "August 10, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        tags: ["Private Limited", "MCA", "SPICe+", "Incorporation"]
    },
    {
        id: "2",
        title: "GST Return Filing Due Dates & Penalty Structure for FY 2026-27",
        slug: "gst-return-filing-due-dates-and-penalty-structure",
        excerpt: "Avoid late fees under Section 47. Understand GSTR-1, GSTR-3B monthly deadlines, GSTR-9 annual compliance, and automated ITC reconciliation rules.",
        content: `<h2>Understanding GST Compliance Requirements</h2>
<p>Filing regular Goods and Services Tax (GST) returns is mandatory for all registered businesses in India. Failing to file returns on time attracts late fees under Section 47 and interest under Section 50 of the CGST Act.</p>
<h3>Key Due Dates Checklist</h3>
<ul>
<li><strong>GSTR-1 (Outward Supplies)</strong>: 11th of every month (Monthly filers) or 13th of the month following the quarter (QRMP scheme).</li>
<li><strong>GSTR-3B (Summary Tax Return)</strong>: 20th of every month (Monthly filers) or 22nd/24th of the month following the quarter.</li>
<li><strong>CMP-08 (Composition Scheme)</strong>: 18th of the month following the quarter.</li>
<li><strong>GSTR-9 &amp; GSTR-9C (Annual Return &amp; Reconciliation)</strong>: 31st December following the relevant financial year.</li>
</ul>
<h2>Penalty &amp; Late Fee Structure</h2>
<ol>
<li><strong>NIL Return Late Fee</strong>: ₹20 per day (₹10 CGST + ₹10 SGST) up to maximum limits.</li>
<li><strong>Taxable Return Late Fee</strong>: ₹50 per day (₹25 CGST + ₹25 SGST) up to ₹5,000 per return.</li>
<li><strong>Interest on Delayed Tax Payment</strong>: 18% per annum calculated on the net tax liability paid through electronic cash ledger.</li>
</ol>
<h2>Tips to Avoid Penalties</h2>
<ul>
<li>Maintain automated purchase registers and reconcile GSTR-2B monthly to ensure complete Input Tax Credit (ITC) claim.</li>
<li>File GSTR-1 on time so your buyers can claim ITC smoothly.</li>
</ul>`,
        category: "GST & Taxation",
        author: "CS Audit Team",
        date: "August 05, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        tags: ["GST", "GSTR-3B", "GSTR-1", "Taxation"]
    },
    {
        id: "3",
        title: "How to File Trademark Registration & Protect Your Brand Name",
        slug: "how-to-file-trademark-registration-protect-brand-name",
        excerpt: "Protect your logo and brand name from infringement. Step-by-step guide to IP India search, Vienna codification, examination reports, and TM certificates.",
        content: `<h2>Why Trademark Registration Matters for Startups</h2>
<p>Your brand name, logo, and tagline are core business assets. Trademark registration under the Trade Marks Act 1999 grants exclusive legal rights over your brand mark across all 45 trademark classes in India.</p>
<h3>Benefits of Trademark Registration</h3>
<ul>
<li><strong>Legal Protection</strong>: Prevents competitors from copying or using a deceptively similar name.</li>
<li><strong>Brand Value Creation</strong>: Registered trademarks can be sold, licensed, or franchised for revenue.</li>
<li><strong>Use of the ® Symbol</strong>: Instantly adds trust and credibility for your business.</li>
</ul>
<h2>Step-by-Step Trademark Registration Process</h2>
<ol>
<li><strong>Trademark Availability Search</strong>: Search the official Controller General of Patents, Designs and Trade Marks database to ensure your proposed mark is unique.</li>
<li><strong>Filing Application (Form TM-A)</strong>: Submit application with user affidavit, logo copy, and class selection.</li>
<li><strong>Examination &amp; Publication</strong>: IP India examiners review the application. Upon clearance, it is published in the Trademark Journal for 4 months.</li>
<li><strong>Registration Certificate</strong>: If no opposition is filed, the ® certificate is issued.</li>
</ol>`,
        category: "IPR & Trademark",
        author: "Legal Advisory Desk",
        date: "July 28, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
        tags: ["Trademark", "IPR", "Brand Protection", "Logo"]
    }
];

const STORAGE_KEY = "your_professionals_blogs_data";

export function getStoredBlogs(): BlogPostItem[] {
    try {
        const item = localStorage.getItem(STORAGE_KEY);
        if (item) {
            const parsed = JSON.parse(item);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed.map((b: BlogPostItem) => {
                    let cat = b.category;
                    if (cat === "Company Formation") cat = "Company Registration";
                    if (cat === "Compliance") cat = "MCA & Corporate Compliance";
                    return { ...b, category: cat };
                });
            }
        }
    } catch (e) {
        console.error("Error reading stored blogs:", e);
    }
    return DEFAULT_BLOGS;
}

export function saveStoredBlogs(blogs: BlogPostItem[]) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
    } catch (e) {
        console.error("Error saving blogs:", e);
    }
}

export function addSingleBlog(blog: Omit<BlogPostItem, "id">): BlogPostItem {
    const blogs = getStoredBlogs();
    const newBlog: BlogPostItem = {
        ...blog,
        id: Date.now().toString()
    };
    const updated = [newBlog, ...blogs];
    saveStoredBlogs(updated);
    return newBlog;
}

export function addBulkBlogs(bulkList: Array<Omit<BlogPostItem, "id">>): BlogPostItem[] {
    const blogs = getStoredBlogs();
    const newBlogs: BlogPostItem[] = bulkList.map((item, idx) => ({
        ...item,
        id: (Date.now() + idx).toString()
    }));
    const updated = [...newBlogs, ...blogs];
    saveStoredBlogs(updated);
    return updated;
}

export function deleteStoredBlog(id: string): void {
    const blogs = getStoredBlogs();
    const updated = blogs.filter(b => b.id !== id);
    saveStoredBlogs(updated);
}
