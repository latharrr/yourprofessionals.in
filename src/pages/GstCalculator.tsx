import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

const GST_RATES = [0, 0.25, 3, 5, 12, 18, 28];

function fmt(v: number): string {
    return v.toLocaleString('en-IN', { maximumFractionDigits: 2, style: 'currency', currency: 'INR' });
}

export default function GstCalculator() {
    const [mode, setMode] = useState<'exclusive' | 'inclusive'>('exclusive');
    const [amount, setAmount] = useState(10000);
    const [rate, setRate] = useState(18);

    const result = useMemo(() => {
        if (mode === 'exclusive') {
            const gst = amount * rate / 100;
            return { original: amount, gst, total: amount + gst, cgst: gst / 2, sgst: gst / 2 };
        }
        const original = amount / (1 + rate / 100);
        const gst = amount - original;
        return { original, gst, total: amount, cgst: gst / 2, sgst: gst / 2 };
    }, [mode, amount, rate]);

    return (
        <div className="min-h-screen flex flex-col font-sans">
                        <SEO
                title="GST Calculator – Calculate GST Online Free"
                description="Free online GST Calculator — compute GST for all tax slabs (5%, 12%, 18%, 28%) instantly. Calculate GST-inclusive and GST-exclusive amounts for your business."
                canonical="/gst-calculator"
            />
<Header />
            <main className="flex-grow pt-28">
                <section className="bg-gradient-to-br from-[#090a3d] via-[#0f1163] to-[#1a1c6e] text-white py-12 md:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10"><div className="absolute top-10 left-10 w-72 h-72 bg-[var(--color-brand-secondary)] rounded-full blur-3xl" /><div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" /></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block bg-white/10 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm border border-white/10">Free Online Tool</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">GST Calculator <span className="text-[var(--color-brand-secondary)]">Online</span></h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Calculate GST amount, CGST, SGST, and IGST instantly. Add or remove GST from any amount with our free calculator.</p>
                    </div>
                </section>

                <section className="py-12 md:py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-center gap-2 mb-10">
                            {(['exclusive', 'inclusive'] as const).map(m => (
                                <button key={m} onClick={() => setMode(m)} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${mode === m ? 'bg-[var(--color-brand-secondary)] text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>
                                    {m === 'exclusive' ? 'Add GST (Exclusive)' : 'Remove GST (Inclusive)'}
                                </button>
                            ))}
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-semibold text-gray-700">{mode === 'exclusive' ? 'Amount (Before GST)' : 'Amount (Including GST)'}</label>
                                        <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                            <span className="text-sm text-gray-500">\u20b9</span>
                                            <input type="number" value={amount} onChange={e => setAmount(Math.max(1, Number(e.target.value)))} className="w-28 text-sm font-semibold text-right bg-transparent focus:outline-none" />
                                        </div>
                                    </div>
                                    <input type="range" min={100} max={10000000} step={100} value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                                </div>
                                <div className="mb-4"><label className="text-sm font-semibold text-gray-700 block mb-3">GST Rate</label>
                                    <div className="flex flex-wrap gap-2">
                                        {GST_RATES.map(r => (
                                        <button key={r} onClick={() => setRate(r)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${rate === r ? 'bg-[var(--color-brand-secondary)] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>{r}%</button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                <h3 className="text-lg font-bold text-[#090a3d] mb-5">GST Breakdown</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100"><span className="text-sm text-gray-500">Taxable Amount</span><span className="text-lg font-bold text-[#090a3d]">{fmt(result.original)}</span></div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100"><span className="text-sm text-gray-500">GST Amount ({rate}%)</span><span className="text-lg font-bold text-green-600">{fmt(result.gst)}</span></div>
                                    <div className="flex justify-between items-center py-2 pl-4 border-b border-gray-50"><span className="text-xs text-gray-400">CGST ({rate/2}%)</span><span className="text-sm font-semibold text-gray-600">{fmt(result.cgst)}</span></div>
                                    <div className="flex justify-between items-center py-2 pl-4 border-b border-gray-50"><span className="text-xs text-gray-400">SGST ({rate/2}%)</span><span className="text-sm font-semibold text-gray-600">{fmt(result.sgst)}</span></div>
                                    <div className="flex justify-between items-center py-3"><span className="text-sm font-semibold text-gray-700">Total Amount</span><span className="text-2xl font-bold text-[var(--color-brand-secondary)]">{fmt(result.total)}</span></div>
                                </div>
                                <div className="mt-5 bg-gray-50 rounded-xl p-4 text-xs text-gray-500">
                                    <strong>Formula:</strong> {mode === 'exclusive' ? `GST = Amount Ã— ${rate}% = ${fmt(result.gst)}` : `Taxable = Amount Ã· (1 + ${rate}%) = ${fmt(result.original)}`}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-6">What is GST?</h2>
                        <div className="text-gray-600 leading-relaxed space-y-4">
                            <p>The <strong>Goods and Services Tax (GST)</strong> is an indirect tax levied on the supply of goods and services in India. Introduced on 1st July 2017, GST replaced multiple cascading taxes levied by the central and state governments, creating a unified national market.</p>
                            <p>GST is a destination-based consumption tax applied at every stage of the supply chain, with credit available for tax paid at previous stages. This eliminates the cascading effect of tax-on-tax and makes the system more transparent and efficient.</p>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Types of GST</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'CGST', full: 'Central GST', desc: 'Collected by the Central Government on intra-state supplies. Rate is half of the total GST rate.', color: 'bg-blue-50 border-blue-100' },
                                { title: 'SGST', full: 'State GST', desc: 'Collected by the State Government on intra-state supplies. Rate equals the CGST rate.', color: 'bg-green-50 border-green-100' },
                                { title: 'IGST', full: 'Integrated GST', desc: 'Collected by the Central Government on inter-state supplies. Rate equals CGST + SGST combined.', color: 'bg-amber-50 border-amber-100' },
                                { title: 'UTGST', full: 'Union Territory GST', desc: 'Applied instead of SGST for Union Territories without legislature. Same rate as SGST.', color: 'bg-purple-50 border-purple-100' },
                            ].map((t, i) => (
                                <div key={i} className={`rounded-2xl p-6 border ${t.color}`}>
                                    <h3 className="text-xl font-bold text-[#090a3d] mb-1">{t.title}</h3>
                                    <p className="text-xs text-[var(--color-brand-secondary)] font-semibold mb-3">{t.full}</p>
                                    <p className="text-sm text-gray-500">{t.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">GST Rate Slabs</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead><tr className="bg-[#090a3d] text-white"><th className="px-4 py-3 text-left rounded-tl-xl">GST Rate</th><th className="px-4 py-3 text-left">Category</th><th className="px-4 py-3 text-left rounded-tr-xl">Examples</th></tr></thead>
                                <tbody>
                                    {[
                                        { rate: '0% (Exempt)', cat: 'Essential Items', ex: 'Fresh fruits, vegetables, milk, eggs, bread, salt, natural honey' },
                                        { rate: '0.25%', cat: 'Precious Stones', ex: 'Rough diamonds, semi-precious stones' },
                                        { rate: '3%', cat: 'Gold & Silver', ex: 'Gold, silver, platinum, gold jewellery' },
                                        { rate: '5%', cat: 'Common Use Items', ex: 'Packaged food, fertilizers, footwear under \u20b91000, transport services' },
                                        { rate: '12%', cat: 'Standard Goods', ex: 'Frozen meat, butter, processed food, mobile phones, sewing machines' },
                                        { rate: '18%', cat: 'Most Services', ex: 'IT services, restaurants with AC, financial services, telecom, branded garments' },
                                        { rate: '28%', cat: 'Luxury/Demerit', ex: 'Cars, cement, ACs, pan masala, aerated drinks, dishwashers' },
                                    ].map((r, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                            <td className="px-4 py-3 font-bold text-[var(--color-brand-secondary)]">{r.rate}</td>
                                            <td className="px-4 py-3 font-medium text-[#090a3d]">{r.cat}</td>
                                            <td className="px-4 py-3 text-gray-500">{r.ex}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: 'How do I add GST to an amount?', a: 'To add GST, multiply the original amount by the GST rate and add it. For example, for 18% GST on \u20b910,000: GST = 10,000 \u00d7 18% = \u20b91,800. Total = \u20b911,800.' },
                                { q: 'How do I remove GST from an amount?', a: 'To remove GST, divide the inclusive amount by (1 + GST rate). For 18% GST from \u20b911,800: Original = 11,800 \u00f7 1.18 = \u20b910,000.' },
                                { q: 'What is the difference between CGST and SGST?', a: 'Both are equal halves of the total GST on intra-state transactions. CGST goes to the Central Government and SGST goes to the State Government. For 18% GST: 9% CGST + 9% SGST.' },
                                { q: 'When is IGST applicable instead of CGST+SGST?', a: 'IGST applies on inter-state supplies (when buyer and seller are in different states) and on imports. The full GST rate is charged as IGST which is later settled between states.' },
                                { q: 'Who needs to register for GST?', a: 'Businesses with annual turnover exceeding \u20b940 lakh (\u20b920 lakh for special category states) must register. E-commerce operators, inter-state suppliers, and casual taxable persons must register regardless of turnover.' },
                                { q: 'What is Input Tax Credit (ITC)?', a: 'ITC allows businesses to claim credit for GST paid on purchases against their GST liability on sales. This prevents tax cascading and ensures GST is effectively levied only on value addition at each stage.' },
                                { q: 'How often do I need to file GST returns?', a: 'Regular taxpayers file GSTR-3B monthly (or quarterly under QRMP scheme) and GSTR-1 for outward supplies. Annual return GSTR-9 is due by 31st December of the next financial year.' },
                                { q: 'Is GST applicable on exports?', a: 'Exports are treated as zero-rated supplies under GST. Exporters can either export without payment of IGST under bond/LUT or claim refund of IGST paid on exports.' },
                            ].map((faq, i) => (
                                <details key={i} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                                    <summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-semibold text-[#090a3d] hover:text-[var(--color-brand-secondary)] transition-colors">
                                        {faq.q}
                                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                    </summary>
                                    <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gradient-to-r from-[#090a3d] to-[#1a1c6e] text-white text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help With GST?</h2>
                        <p className="text-gray-300 mb-8 text-lg">Our tax experts can help you with GST registration, return filing, and compliance.</p>
                        <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-xl">Talk to Our Experts</a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

