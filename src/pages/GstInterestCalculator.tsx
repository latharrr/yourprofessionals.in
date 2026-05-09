import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

function formatCurrency(value: number): string {
    if (value >= 10000000) return `â‚¹${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `â‚¹${(value / 100000).toFixed(2)} L`;
    return `â‚¹${value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
}

function formatCurrencyExact(value: number): string {
    return `â‚¹${value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function daysBetween(from: Date, to: Date): number {
    const msPerDay = 1000 * 60 * 60 * 24;
    const utcFrom = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
    const utcTo = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
    return Math.floor((utcTo - utcFrom) / msPerDay);
}

function toDateInputValue(d: Date): string {
    return d.toISOString().split('T')[0];
}

const AMOUNT_PRESETS = [50000, 100000, 500000, 1000000, 5000000];

const GST_RETURN_DATES = [
    { returnType: 'GSTR-1', frequency: 'Monthly', dueDate: '11th of next month', applicability: 'Turnover > â‚¹5 Cr or opted for monthly filing' },
    { returnType: 'GSTR-1', frequency: 'Quarterly (IFF)', dueDate: '13th of month after quarter', applicability: 'Turnover â‰¤ â‚¹5 Cr under QRMP scheme' },
    { returnType: 'GSTR-3B', frequency: 'Monthly', dueDate: '20th of next month', applicability: 'Turnover > â‚¹5 Cr' },
    { returnType: 'GSTR-3B', frequency: 'Quarterly', dueDate: '22nd/24th of month after quarter', applicability: 'Turnover â‰¤ â‚¹5 Cr under QRMP scheme' },
    { returnType: 'GSTR-9', frequency: 'Annual', dueDate: '31st December of next FY', applicability: 'All regular taxpayers' },
    { returnType: 'GSTR-9C', frequency: 'Annual', dueDate: '31st December of next FY', applicability: 'Turnover > â‚¹5 Cr (self-certified reconciliation)' },
];

const FAQS = [
    {
        q: 'How is GST interest calculated?',
        a: 'GST interest is calculated on the outstanding tax amount from the day after the due date until the actual date of payment. The formula is: Interest = Tax Amount Ã— Rate Ã— Number of Days / 365. The rate is 18% p.a. for late payment and 24% p.a. for excess ITC claimed.',
    },
    {
        q: 'What is the interest rate for late filing of GST returns?',
        a: 'Under Section 50(1) of the CGST Act, interest at the rate of 18% per annum is charged on the net tax liability when GST is paid after the due date. This applies to both GSTR-3B and GSTR-1 late filings.',
    },
    {
        q: 'When is 24% interest applicable under GST?',
        a: 'A 24% per annum interest rate applies under Section 50(3) of the CGST Act when a registered person claims excess Input Tax Credit (ITC) or makes an undue or excess reduction in output tax liability. This higher rate serves as a deterrent against wrongful ITC claims.',
    },
    {
        q: 'Is GST interest calculated on gross or net tax liability?',
        a: 'Following the amendment effective from 01 September 2020, GST interest under Section 50(1) is calculated on the net tax liability â€” that is, the tax payable after adjusting eligible Input Tax Credit. This was clarified by the GST Council to reduce the burden on taxpayers.',
    },
    {
        q: 'Can GST interest be waived?',
        a: 'The government has the power to waive interest under Section 50 of the CGST Act in specific situations, usually through notifications during extraordinary circumstances such as natural disasters or system glitches on the GST portal. However, routine late payments do not qualify for interest waivers.',
    },
    {
        q: 'Is there any late fee in addition to GST interest?',
        a: 'Yes. In addition to interest, a late fee of â‚¹50 per day (â‚¹25 CGST + â‚¹25 SGST) is charged for late filing of returns, subject to a maximum cap. For nil returns, the late fee is â‚¹20 per day. Interest and late fees are separate penalties and both apply simultaneously.',
    },
    {
        q: 'From which date is GST interest calculated?',
        a: 'Interest is calculated from the day immediately following the due date of filing the return until the actual date of payment. For example, if the GSTR-3B due date is 20th January and you pay on 15th February, interest is charged for 26 days (from 21st January to 15th February).',
    },
    {
        q: 'How do I pay GST interest on the GST portal?',
        a: 'GST interest is auto-calculated and shown in the return filing form. When filing GSTR-3B, the portal computes the interest based on the delay and displays it in the "Interest" column. You must pay this interest along with the tax liability before filing the return. The interest amount cannot be paid using ITC â€” it must be paid in cash.',
    },
];

export default function GstInterestCalculator() {
    const today = new Date();
    const defaultDueDate = new Date(today.getFullYear(), today.getMonth() - 1, 20);

    const [taxAmount, setTaxAmount] = useState(100000);
    const [dueDate, setDueDate] = useState(toDateInputValue(defaultDueDate));
    const [paymentDate, setPaymentDate] = useState(toDateInputValue(today));
    const [interestType, setInterestType] = useState<'late' | 'excess'>('late');

    const result = useMemo(() => {
        const due = new Date(dueDate);
        const payment = new Date(paymentDate);
        const interestStartDate = new Date(due);
        interestStartDate.setDate(interestStartDate.getDate() + 1);

        const days = daysBetween(interestStartDate, payment);
        const delayDays = days >= 0 ? days + 1 : 0;
        const rate = interestType === 'late' ? 18 : 24;
        const interest = delayDays > 0 ? (taxAmount * rate * delayDays) / (365 * 100) : 0;
        const total = taxAmount + interest;

        return { delayDays, rate, interest, total, interestStartDate };
    }, [taxAmount, dueDate, paymentDate, interestType]);

    return (
        <div className="min-h-screen flex flex-col font-sans">
                        <SEO
                title="GST Interest & Penalty Calculator – Calculate Online"
                description="Calculate GST interest and penalty on late returns and tax payments. Free online tool for accurate GST interest computation as per GST Act."
                canonical="/gst-interest-calculator"
            />
<Header />
            <main className="flex-grow pt-28">
                {/* Hero */}
                <section className="bg-gradient-to-br from-[#090a3d] via-[#0f1163] to-[#1a1c6e] text-white py-12 md:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--color-brand-secondary)] rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block bg-white/10 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm border border-white/10">
                            Free Online Tool
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            GST Interest <span className="text-[var(--color-brand-secondary)]">Calculator</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Instantly calculate interest on delayed GST payments under Section 50 of the CGST Act. Know your exact liability for late filing or excess ITC claims.
                        </p>
                    </div>
                </section>

                {/* Calculator */}
                <section className="py-12 md:py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Inputs */}
                            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                <h2 className="text-lg font-bold text-[#090a3d] mb-6">Enter Details</h2>

                                {/* Tax Amount */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-semibold text-gray-700">GST Amount Due</label>
                                        <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                            <span className="text-sm text-gray-500">â‚¹</span>
                                            <input
                                                type="number"
                                                value={taxAmount}
                                                onChange={e => setTaxAmount(Math.max(1, Math.min(100000000, Number(e.target.value))))}
                                                className="w-28 text-sm font-semibold text-right bg-transparent focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min={1000}
                                        max={10000000}
                                        step={1000}
                                        value={Math.min(taxAmount, 10000000)}
                                        onChange={e => setTaxAmount(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                                        <span>â‚¹1,000</span>
                                        <span>â‚¹1 Cr</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {AMOUNT_PRESETS.map(p => (
                                            <button
                                                key={p}
                                                onClick={() => setTaxAmount(p)}
                                                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${taxAmount === p ? 'bg-[var(--color-brand-secondary)] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                            >
                                                {formatCurrency(p)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Due Date */}
                                <div className="mb-6">
                                    <label className="text-sm font-semibold text-gray-700 block mb-2">Due Date of GST Payment</label>
                                    <input
                                        type="date"
                                        value={dueDate}
                                        onChange={e => setDueDate(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)]"
                                    />
                                </div>

                                {/* Payment Date */}
                                <div className="mb-6">
                                    <label className="text-sm font-semibold text-gray-700 block mb-2">Actual Date of Payment</label>
                                    <input
                                        type="date"
                                        value={paymentDate}
                                        onChange={e => setPaymentDate(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)]"
                                    />
                                </div>

                                {/* Interest Type */}
                                <div className="mb-2">
                                    <label className="text-sm font-semibold text-gray-700 block mb-3">Interest Type</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <label
                                            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${interestType === 'late' ? 'border-[var(--color-brand-secondary)] bg-amber-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                                        >
                                            <input
                                                type="radio"
                                                name="interestType"
                                                checked={interestType === 'late'}
                                                onChange={() => setInterestType('late')}
                                                className="mt-0.5 accent-[var(--color-brand-secondary)]"
                                            />
                                            <div>
                                                <span className="text-sm font-bold text-[#090a3d] block">Late Filing</span>
                                                <span className="text-xs text-gray-500">18% p.a. â€” Section 50(1)</span>
                                            </div>
                                        </label>
                                        <label
                                            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${interestType === 'excess' ? 'border-[var(--color-brand-secondary)] bg-amber-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                                        >
                                            <input
                                                type="radio"
                                                name="interestType"
                                                checked={interestType === 'excess'}
                                                onChange={() => setInterestType('excess')}
                                                className="mt-0.5 accent-[var(--color-brand-secondary)]"
                                            />
                                            <div>
                                                <span className="text-sm font-bold text-[#090a3d] block">Excess ITC Claimed</span>
                                                <span className="text-xs text-gray-500">24% p.a. â€” Section 50(3)</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="space-y-6">
                                {/* Summary Card */}
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-5">Interest Summary</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">GST Amount Due</span>
                                            <span className="text-lg font-bold text-[#090a3d]">{formatCurrencyExact(taxAmount)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">Days Delayed</span>
                                            <span className="text-lg font-bold text-[#090a3d]">{result.delayDays > 0 ? result.delayDays : 0} days</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">Interest Rate</span>
                                            <span className="text-lg font-bold text-[#090a3d]">{result.rate}% p.a.</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">Interest Payable</span>
                                            <span className="text-lg font-bold text-red-600">{formatCurrencyExact(result.interest)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 bg-[#090a3d] -mx-6 md:-mx-8 px-6 md:px-8 -mb-6 md:-mb-8 rounded-b-2xl">
                                            <span className="text-sm text-gray-300 font-medium">Total Amount Payable</span>
                                            <span className="text-xl font-bold text-[var(--color-brand-secondary)]">{formatCurrencyExact(result.total)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Calculation Breakdown */}
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-4">Calculation Breakdown</h3>
                                    {result.delayDays > 0 ? (
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-start gap-3">
                                                <span className="bg-amber-100 text-amber-700 font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">1</span>
                                                <p className="text-gray-600">
                                                    <span className="font-semibold text-[#090a3d]">Due Date:</span> {new Date(dueDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="bg-amber-100 text-amber-700 font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">2</span>
                                                <p className="text-gray-600">
                                                    <span className="font-semibold text-[#090a3d]">Interest starts from:</span> {result.interestStartDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })} (day after due date)
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="bg-amber-100 text-amber-700 font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">3</span>
                                                <p className="text-gray-600">
                                                    <span className="font-semibold text-[#090a3d]">Payment Date:</span> {new Date(paymentDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="bg-amber-100 text-amber-700 font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">4</span>
                                                <p className="text-gray-600">
                                                    <span className="font-semibold text-[#090a3d]">Delay Period:</span> {result.delayDays} days
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 rounded-xl p-4 mt-2 border border-gray-100">
                                                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">Formula</p>
                                                <p className="text-sm font-mono text-[#090a3d] leading-relaxed">
                                                    Interest = Tax Ã— Rate Ã— Days Ã· 365
                                                </p>
                                                <p className="text-sm font-mono text-gray-500 mt-1">
                                                    = {formatCurrencyExact(taxAmount)} Ã— {result.rate}% Ã— {result.delayDays} Ã· 365
                                                </p>
                                                <p className="text-sm font-mono text-[var(--color-brand-secondary)] font-bold mt-1">
                                                    = {formatCurrencyExact(result.interest)}
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center py-6">
                                            <span className="text-4xl block mb-3">âœ…</span>
                                            <p className="text-sm text-gray-500">No delay detected. Payment date is on or before the due date. No interest is applicable.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is GST Interest */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2 block">Understanding GST Interest</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d]">What is GST Interest?</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                GST interest is a statutory charge levied under <strong className="text-[#090a3d]">Section 50 of the Central Goods and Services Tax (CGST) Act, 2017</strong> when a registered taxpayer fails to pay the Goods and Services Tax within the prescribed due date. It serves as compensation to the government for the delayed receipt of tax revenue.
                            </p>
                            <p>
                                Unlike penalties or late fees, GST interest is automatically applicable the moment a payment deadline is missed â€” no separate notice or assessment order is required. The interest is calculated on a <strong className="text-[#090a3d]">simple interest basis</strong> from the day after the due date until the actual date of payment, and must be paid in cash through the electronic cash ledger. It cannot be set off against Input Tax Credit.
                            </p>
                            <p>
                                The amount of interest depends on two factors: the nature of the default (late payment vs. excess ITC) and the number of days the payment is delayed. Taxpayers are expected to self-assess and pay the interest voluntarily while filing their returns.
                            </p>
                        </div>
                    </div>
                </section>

                {/* When is GST Interest Applicable */}
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2 block">Applicability</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d]">When is GST Interest Applicable?</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: 'â°',
                                    title: 'Late Payment of GST',
                                    desc: 'When you file GSTR-3B after the due date and pay the tax liability late, interest at 18% p.a. applies on the net tax amount from the day after the deadline until the date of actual payment.',
                                },
                                {
                                    icon: 'âš ï¸',
                                    title: 'Excess ITC Claimed & Utilised',
                                    desc: 'If you claim more Input Tax Credit than you are legitimately entitled to and use it to reduce your output tax liability, a higher interest rate of 24% p.a. is charged on the excess ITC amount.',
                                },
                                {
                                    icon: 'ðŸ”„',
                                    title: 'Undue Reduction of Output Tax',
                                    desc: 'When the output tax liability is wrongly reduced through incorrect reporting, misclassification of supplies, or wrong tax rate application, interest at 24% p.a. is levied on the shortfall amount.',
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all">
                                    <span className="text-3xl mb-3 block">{item.icon}</span>
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* GST Interest Rates */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2 block">Rate Details</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d]">GST Interest Rates</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* 18% Card */}
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-blue-100 text-blue-700 text-2xl font-bold px-4 py-2 rounded-xl">18%</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#090a3d]">Late Payment</h3>
                                        <p className="text-xs text-gray-500">Section 50(1) â€” CGST Act</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">â—</span>Applies when GST is paid after the return due date</li>
                                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">â—</span>Calculated on net tax liability (after ITC adjustment)</li>
                                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">â—</span>Covers CGST, SGST/UTGST, and IGST components separately</li>
                                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">â—</span>Most common scenario faced by taxpayers</li>
                                </ul>
                            </div>
                            {/* 24% Card */}
                            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 md:p-8 border border-red-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-red-100 text-red-700 text-2xl font-bold px-4 py-2 rounded-xl">24%</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#090a3d]">Excess ITC / Undue Claim</h3>
                                        <p className="text-xs text-gray-500">Section 50(3) â€” CGST Act</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">â—</span>Applies when excess ITC is claimed and utilised</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">â—</span>Applies when output tax liability is unduly reduced</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">â—</span>Higher rate acts as a deterrent against fraudulent claims</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">â—</span>May also attract penalty proceedings under Section 73/74</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GST Return Due Dates */}
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2 block">Due Dates</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d]">GST Return Due Dates</h2>
                            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                                Missing these deadlines triggers automatic interest liability. Bookmark this table for quick reference.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead>
                                        <tr className="bg-[#090a3d] text-white">
                                            <th className="px-5 py-4 font-semibold">Return Type</th>
                                            <th className="px-5 py-4 font-semibold">Frequency</th>
                                            <th className="px-5 py-4 font-semibold">Due Date</th>
                                            <th className="px-5 py-4 font-semibold">Applicability</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {GST_RETURN_DATES.map((row, i) => (
                                            <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-amber-50 transition-colors`}>
                                                <td className="px-5 py-3.5 font-semibold text-[#090a3d]">{row.returnType}</td>
                                                <td className="px-5 py-3.5 text-gray-600">{row.frequency}</td>
                                                <td className="px-5 py-3.5 text-gray-600">{row.dueDate}</td>
                                                <td className="px-5 py-3.5 text-gray-500">{row.applicability}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Avoid GST Interest */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2 block">Pro Tips</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d]">How to Avoid GST Interest</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: 'ðŸ“…', title: 'Set Calendar Reminders', desc: 'Mark GST return due dates at least 5 days in advance. Use digital calendar alerts for GSTR-1 and GSTR-3B deadlines every month to never miss a filing window.' },
                                { icon: 'ðŸ“Š', title: 'Maintain Regular Books', desc: 'Keep your purchase and sales registers updated in real time. Monthly reconciliation of invoices with GSTR-2A/2B data helps identify mismatches early and prevents last-minute filing rushes.' },
                                { icon: 'ðŸ’°', title: 'Maintain Sufficient Cash Balance', desc: 'Ensure your electronic cash ledger has adequate funds before the due date. Deposit money at least 2â€“3 days before the deadline to account for bank processing delays.' },
                                { icon: 'ðŸ”', title: 'Verify ITC Claims Carefully', desc: 'Cross-check every ITC claim against GSTR-2B auto-populated data. Avoid claiming credit on ineligible items listed under Section 17(5) such as personal vehicles, food, and outdoor catering.' },
                                { icon: 'ðŸ¤', title: 'Hire a Professional', desc: 'Engage a qualified GST practitioner or chartered accountant to handle your compliance. Professional oversight significantly reduces the risk of errors, wrong ITC claims, and missed deadlines.' },
                                { icon: 'ðŸ”§', title: 'Use GST-Compliant Software', desc: 'Adopt accounting software that auto-generates GST returns, tracks due dates, and flags discrepancies. Automated tools eliminate manual errors and streamline your entire filing process.' },
                            ].map((tip, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all">
                                    <span className="text-3xl mb-3 block">{tip.icon}</span>
                                    <h3 className="text-sm font-bold text-[#090a3d] mb-2">{tip.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Use */}
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2 block">Step-by-Step</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d]">How to Use This Calculator</h2>
                        </div>
                        <div className="space-y-6">
                            {[
                                { step: '01', title: 'Enter the GST Amount Due', desc: 'Type the outstanding tax amount or use the slider to set a value between â‚¹1,000 and â‚¹10 Crore. You can also select from preset amounts for quick input.' },
                                { step: '02', title: 'Select the Due Date', desc: 'Choose the original due date for your GST return (e.g., 20th of the month for GSTR-3B). This is the deadline by which the tax should have been paid.' },
                                { step: '03', title: 'Enter the Payment Date', desc: 'Select the actual date on which you paid or plan to pay the outstanding GST amount. The calculator computes interest from the day after the due date up to this date.' },
                                { step: '04', title: 'Choose the Interest Type', desc: 'Select "Late Filing" for standard delayed payments (18% p.a.) or "Excess ITC Claimed" for cases where excess Input Tax Credit was claimed and utilised (24% p.a.).' },
                                { step: '05', title: 'Review Your Results', desc: 'The calculator instantly displays the number of delay days, applicable interest rate, computed interest amount, and total payable. A step-by-step breakdown shows exactly how the interest was calculated.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 items-start bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                                    <span className="text-3xl font-bold text-[var(--color-brand-secondary)] opacity-60 shrink-0">{item.step}</span>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#090a3d] mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2 block">Got Questions?</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d]">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {FAQS.map((faq, i) => (
                                <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                                    <summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-semibold text-[#090a3d] hover:text-[var(--color-brand-secondary)] transition-colors">
                                        {faq.q}
                                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 md:py-20 bg-gradient-to-r from-[#090a3d] to-[#1a1c6e] text-white text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help with GST Compliance?</h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Our GST experts can help you file returns on time, reconcile ITC, and resolve interest and penalty notices. Get professional assistance today.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                        >
                            Talk to Our GST Experts
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

