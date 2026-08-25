import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

const PAYMENT_TYPES = [
    { label: 'Salary', section: '192', rate: 10, threshold: 250000 },
    { label: 'Interest on Securities', section: '193', rate: 10, threshold: 10000 },
    { label: 'Dividends', section: '194', rate: 10, threshold: 5000 },
    { label: 'Interest other than Securities', section: '194A', rate: 10, threshold: 40000 },
    { label: 'Winning from Lottery / Puzzles', section: '194B', rate: 30, threshold: 10000 },
    { label: 'Contractor Payment', section: '194C', rate: 2, threshold: 30000 },
    { label: 'Insurance Commission', section: '194D', rate: 5, threshold: 15000 },
    { label: 'Rent', section: '194I', rate: 10, threshold: 240000 },
    { label: 'Professional / Technical Fees', section: '194J', rate: 10, threshold: 30000 },
    { label: 'Transfer of Immovable Property', section: '194IA', rate: 1, threshold: 5000000 },
];

const TDS_RATE_CHART = [
    { section: '192', nature: 'Salary', rate: 'Slab Rates', threshold: 'As per income tax slab' },
    { section: '193', nature: 'Interest on Securities', rate: '10%', threshold: '₹10,000' },
    { section: '194', nature: 'Dividends', rate: '10%', threshold: '₹5,000' },
    { section: '194A', nature: 'Interest other than Securities (Banks)', rate: '10%', threshold: '₹40,000 (₹50,000 for seniors)' },
    { section: '194B', nature: 'Winning from Lottery / Puzzles', rate: '30%', threshold: '₹10,000' },
    { section: '194BB', nature: 'Winning from Horse Race', rate: '30%', threshold: '₹10,000' },
    { section: '194C', nature: 'Payment to Contractors (Individual/HUF)', rate: '1%', threshold: '₹30,000 single / ₹1,00,000 aggregate' },
    { section: '194C', nature: 'Payment to Contractors (Others)', rate: '2%', threshold: '₹30,000 single / ₹1,00,000 aggregate' },
    { section: '194D', nature: 'Insurance Commission', rate: '5%', threshold: '₹15,000' },
    { section: '194DA', nature: 'Life Insurance Policy Payout', rate: '5%', threshold: '₹1,00,000' },
    { section: '194E', nature: 'Payment to Non-resident Sportsperson', rate: '20%', threshold: 'Nil' },
    { section: '194H', nature: 'Commission / Brokerage', rate: '5%', threshold: '₹15,000' },
    { section: '194I', nature: 'Rent on Plant & Machinery', rate: '2%', threshold: '₹2,40,000' },
    { section: '194I', nature: 'Rent on Land / Building / Furniture', rate: '10%', threshold: '₹2,40,000' },
    { section: '194J', nature: 'Professional / Technical Fees', rate: '10%', threshold: '₹30,000' },
    { section: '194J', nature: 'Technical Services (FTS) to certain payees', rate: '2%', threshold: '₹30,000' },
    { section: '194IA', nature: 'Transfer of Immovable Property', rate: '1%', threshold: '₹50,00,000' },
    { section: '194IB', nature: 'Rent by Individual / HUF', rate: '5%', threshold: '₹50,000 per month' },
    { section: '194M', nature: 'Payment to Commission / Contract (by Individual/HUF)', rate: '5%', threshold: '₹50,00,000' },
    { section: '194N', nature: 'Cash Withdrawal', rate: '2%', threshold: '₹1,00,00,000' },
    { section: '194O', nature: 'E-commerce Participant', rate: '1%', threshold: '₹5,00,000' },
    { section: '194Q', nature: 'Purchase of Goods', rate: '0.1%', threshold: '₹50,00,000' },
];

function formatINR(value: number): string {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
    return `₹${value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
}

function monthsBetween(dueYear: number, dueMonth: number, paidYear: number, paidMonth: number): number {
    const diff = (paidYear - dueYear) * 12 + (paidMonth - dueMonth);
    return Math.max(0, diff);
}

export default function TdsCalculator() {
    const [activeTab, setActiveTab] = useState<'calculator' | 'interest'>('calculator');

    // TDS Calculator state
    const [paymentTypeIdx, setPaymentTypeIdx] = useState(0);
    const [paymentAmount, setPaymentAmount] = useState(500000);
    const [hasPan, setHasPan] = useState(true);

    // TDS Interest Calculator state
    const [tdsAmountDue, setTdsAmountDue] = useState(50000);
    const [dueYear, setDueYear] = useState(2025);
    const [dueMonth, setDueMonth] = useState(4);
    const [paidYear, setPaidYear] = useState(2025);
    const [paidMonth, setPaidMonth] = useState(9);
    const [interestType, setInterestType] = useState<'deduction' | 'payment'>('payment');

    // FAQ
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const selectedType = PAYMENT_TYPES[paymentTypeIdx];
    const effectiveRate = hasPan ? selectedType.rate : 20;

    const tdsResult = useMemo(() => {
        const tdsAmount = (paymentAmount * effectiveRate) / 100;
        const netAmount = paymentAmount - tdsAmount;
        return { tdsRate: effectiveRate, tdsAmount, netAmount };
    }, [paymentAmount, effectiveRate]);

    const interestResult = useMemo(() => {
        const months = monthsBetween(dueYear, dueMonth, paidYear, paidMonth);
        const ratePerMonth = interestType === 'deduction' ? 1 : 1.5;
        const interestAmount = (tdsAmountDue * ratePerMonth * months) / 100;
        const totalPayable = tdsAmountDue + interestAmount;
        return { months, ratePerMonth, interestAmount, totalPayable };
    }, [tdsAmountDue, dueYear, dueMonth, paidYear, paidMonth, interestType]);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="min-h-screen flex flex-col font-sans">
                        <SEO
                title="TDS Calculator – Calculate TDS on Salary & Payments"
                description="Free TDS Calculator — calculate Tax Deducted at Source on salary, professional fees, rent, and contractor payments. Know your exact TDS liability."
                canonical="/tds-calculator"
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
                            TDS Calculator <span className="text-[var(--color-brand-secondary)]">Online</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Instantly compute TDS deductions on salaries, rent, professional fees, and more. Calculate interest on delayed TDS payments and stay compliant with ease.
                        </p>
                    </div>
                </section>

                {/* Calculator Section */}
                <section className="py-12 md:py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Mode Tabs */}
                        <div className="flex justify-center gap-2 mb-10">
                            {[
                                { key: 'calculator' as const, label: 'TDS Calculator' },
                                { key: 'interest' as const, label: 'TDS Interest Calculator' },
                            ].map(tab => (
                                <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === tab.key ? 'bg-[var(--color-brand-secondary)] text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-[var(--color-brand-secondary)] hover:text-[var(--color-brand-secondary)]'}`}>
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {activeTab === 'calculator' && (
                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Inputs */}
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                    {/* Payment Type */}
                                    <div className="mb-6">
                                        <label className="text-sm font-semibold text-gray-700 block mb-2">Payment Type</label>
                                        <select value={paymentTypeIdx} onChange={e => setPaymentTypeIdx(Number(e.target.value))}
                                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)] focus:border-transparent">
                                            {PAYMENT_TYPES.map((t, i) => (
                                                <option key={i} value={i}>Section {t.section} ”” {t.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Payment Amount */}
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="text-sm font-semibold text-gray-700">Payment Amount</label>
                                            <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                                <span className="text-sm text-gray-500">₹</span>
                                                <input type="number" value={paymentAmount} onChange={e => setPaymentAmount(Math.max(0, Number(e.target.value)))}
                                                    className="w-28 text-sm font-semibold text-right bg-transparent focus:outline-none" />
                                            </div>
                                        </div>
                                        <input type="range" min={10000} max={10000000} step={10000} value={paymentAmount} onChange={e => setPaymentAmount(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                                        <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹10K</span><span>₹1 Cr</span></div>
                                    </div>

                                    {/* PAN Toggle */}
                                    <div className="mb-6">
                                        <label className="text-sm font-semibold text-gray-700 block mb-3">PAN Status</label>
                                        <div className="flex gap-3">
                                            <button onClick={() => setHasPan(true)}
                                                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${hasPan ? 'bg-[#090a3d] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                                PAN Available
                                            </button>
                                            <button onClick={() => setHasPan(false)}
                                                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${!hasPan ? 'bg-red-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                                No PAN
                                            </button>
                                        </div>
                                        {!hasPan && (
                                            <p className="text-xs text-red-500 mt-2">Without PAN, TDS is deducted at a flat rate of 20% under Section 206AA.</p>
                                        )}
                                    </div>

                                    {/* Section Info */}
                                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                                        <p className="text-xs text-blue-700">
                                            <span className="font-bold">Section {selectedType.section}:</span> {selectedType.label} ”” Standard rate is {selectedType.rate}%.
                                            Threshold limit: {formatINR(selectedType.threshold)}.
                                        </p>
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                        <h3 className="text-lg font-bold text-[#090a3d] mb-5">TDS Calculation Result</h3>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                                <span className="text-sm text-gray-500">Payment Amount</span>
                                                <span className="text-lg font-bold text-[#090a3d]">{formatINR(paymentAmount)}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                                <span className="text-sm text-gray-500">TDS Rate</span>
                                                <span className="text-lg font-bold text-[var(--color-brand-secondary)]">{tdsResult.tdsRate}%</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                                <span className="text-sm text-gray-500">TDS Amount Deducted</span>
                                                <span className="text-lg font-bold text-red-600">{formatINR(tdsResult.tdsAmount)}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3">
                                                <span className="text-sm font-semibold text-gray-700">Net Amount After TDS</span>
                                                <span className="text-2xl font-bold text-green-600">{formatINR(tdsResult.netAmount)}</span>
                                            </div>
                                        </div>

                                        {/* Bar */}
                                        <div className="mt-5">
                                            <div className="h-4 rounded-full overflow-hidden flex bg-gray-100">
                                                <div className="bg-green-500 rounded-l-full transition-all duration-500" style={{ width: `${tdsResult.netAmount > 0 ? (tdsResult.netAmount / paymentAmount) * 100 : 0}%` }} />
                                                <div className="bg-red-500 rounded-r-full transition-all duration-500" style={{ width: `${tdsResult.tdsAmount > 0 ? (tdsResult.tdsAmount / paymentAmount) * 100 : 0}%` }} />
                                            </div>
                                            <div className="flex justify-between mt-2 text-xs">
                                                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-500" />Net Amount ({(100 - tdsResult.tdsRate).toFixed(0)}%)</span>
                                                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" />TDS ({tdsResult.tdsRate}%)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Comparison */}
                                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                        <h3 className="text-lg font-bold text-[#090a3d] mb-4">With PAN vs Without PAN</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                                                <p className="text-xs text-green-600 font-semibold mb-1">With PAN</p>
                                                <p className="text-lg font-bold text-green-700">{formatINR((paymentAmount * selectedType.rate) / 100)}</p>
                                                <p className="text-xs text-green-600 mt-1">@ {selectedType.rate}%</p>
                                            </div>
                                            <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
                                                <p className="text-xs text-red-600 font-semibold mb-1">Without PAN</p>
                                                <p className="text-lg font-bold text-red-700">{formatINR((paymentAmount * 20) / 100)}</p>
                                                <p className="text-xs text-red-600 mt-1">@ 20%</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400 text-center mt-3">
                                            Extra TDS without PAN: <span className="font-bold text-red-600">{formatINR((paymentAmount * (20 - selectedType.rate)) / 100)}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'interest' && (
                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Inputs */}
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                    {/* TDS Amount Due */}
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="text-sm font-semibold text-gray-700">TDS Amount Due</label>
                                            <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                                <span className="text-sm text-gray-500">₹</span>
                                                <input type="number" value={tdsAmountDue} onChange={e => setTdsAmountDue(Math.max(0, Number(e.target.value)))}
                                                    className="w-28 text-sm font-semibold text-right bg-transparent focus:outline-none" />
                                            </div>
                                        </div>
                                        <input type="range" min={1000} max={5000000} step={1000} value={tdsAmountDue} onChange={e => setTdsAmountDue(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                                        <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹1K</span><span>₹50 L</span></div>
                                    </div>

                                    {/* Due Date */}
                                    <div className="mb-6">
                                        <label className="text-sm font-semibold text-gray-700 block mb-2">TDS Due Date (Month / Year)</label>
                                        <div className="flex gap-3">
                                            <select value={dueMonth} onChange={e => setDueMonth(Number(e.target.value))}
                                                className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)]">
                                                {months.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
                                            </select>
                                            <select value={dueYear} onChange={e => setDueYear(Number(e.target.value))}
                                                className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)]">
                                                {Array.from({ length: 10 }, (_, i) => 2020 + i).map(y => <option key={y} value={y}>{y}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Payment Date */}
                                    <div className="mb-6">
                                        <label className="text-sm font-semibold text-gray-700 block mb-2">Actual Payment Date (Month / Year)</label>
                                        <div className="flex gap-3">
                                            <select value={paidMonth} onChange={e => setPaidMonth(Number(e.target.value))}
                                                className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)]">
                                                {months.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
                                            </select>
                                            <select value={paidYear} onChange={e => setPaidYear(Number(e.target.value))}
                                                className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)]">
                                                {Array.from({ length: 10 }, (_, i) => 2020 + i).map(y => <option key={y} value={y}>{y}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Interest Type */}
                                    <div className="mb-6">
                                        <label className="text-sm font-semibold text-gray-700 block mb-3">Type of Default</label>
                                        <div className="flex gap-3">
                                            <button onClick={() => setInterestType('deduction')}
                                                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${interestType === 'deduction' ? 'bg-[var(--color-brand-secondary)] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                                Late Deduction (1%/mo)
                                            </button>
                                            <button onClick={() => setInterestType('payment')}
                                                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${interestType === 'payment' ? 'bg-[var(--color-brand-secondary)] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                                Late Payment (1.5%/mo)
                                            </button>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                                        <p className="text-xs text-amber-700">
                                            <span className="font-bold">Section 201(1A):</span> Interest at {interestType === 'deduction' ? '1%' : '1.5%'} per month is charged for {interestType === 'deduction' ? 'late deduction of TDS from the date it was deductible to the date of actual deduction' : 'late payment of TDS from the date of deduction to the date of actual deposit'}. Part of a month is treated as a full month.
                                        </p>
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                        <h3 className="text-lg font-bold text-[#090a3d] mb-5">Interest Calculation Result</h3>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                                <span className="text-sm text-gray-500">TDS Amount Due</span>
                                                <span className="text-lg font-bold text-[#090a3d]">{formatINR(tdsAmountDue)}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                                <span className="text-sm text-gray-500">Delay Period</span>
                                                <span className="text-lg font-bold text-[var(--color-brand-secondary)]">{interestResult.months} month{interestResult.months !== 1 ? 's' : ''}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                                <span className="text-sm text-gray-500">Interest Rate</span>
                                                <span className="text-lg font-bold text-[#090a3d]">{interestResult.ratePerMonth}% per month</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                                <span className="text-sm text-gray-500">Interest Amount</span>
                                                <span className="text-lg font-bold text-red-600">{formatINR(interestResult.interestAmount)}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3">
                                                <span className="text-sm font-semibold text-gray-700">Total Payable</span>
                                                <span className="text-2xl font-bold text-[var(--color-brand-secondary)]">{formatINR(interestResult.totalPayable)}</span>
                                            </div>
                                        </div>

                                        {/* Bar */}
                                        <div className="mt-5">
                                            <div className="h-4 rounded-full overflow-hidden flex bg-gray-100">
                                                <div className="bg-[#090a3d] rounded-l-full transition-all duration-500" style={{ width: `${interestResult.totalPayable > 0 ? (tdsAmountDue / interestResult.totalPayable) * 100 : 100}%` }} />
                                                <div className="bg-red-500 rounded-r-full transition-all duration-500" style={{ width: `${interestResult.totalPayable > 0 ? (interestResult.interestAmount / interestResult.totalPayable) * 100 : 0}%` }} />
                                            </div>
                                            <div className="flex justify-between mt-2 text-xs">
                                                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#090a3d]" />TDS Due</span>
                                                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" />Interest</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Breakdown */}
                                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                        <h3 className="text-lg font-bold text-[#090a3d] mb-4">Calculation Breakdown</h3>
                                        <div className="bg-gray-50 rounded-xl p-5 text-center mb-4">
                                            <p className="font-mono text-sm font-bold text-[#090a3d]">
                                                Interest = TDS Amount Ã— Rate Ã— Months
                                            </p>
                                            <p className="font-mono text-sm text-gray-600 mt-2">
                                                = {formatINR(tdsAmountDue)} Ã— {interestResult.ratePerMonth}% Ã— {interestResult.months}
                                            </p>
                                            <p className="font-mono text-lg font-bold text-red-600 mt-2">
                                                = {formatINR(interestResult.interestAmount)}
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500 text-center">
                                            Note: Part of a month is counted as a full month for interest calculation purposes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Common TDS Rates Reference */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-4">TDS Rate Chart ”” FY 2025-26</h2>
                        <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">Comprehensive table of TDS rates applicable under various sections of the Income Tax Act for the financial year 2025-26.</p>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-[#090a3d] text-white">
                                        <th className="px-4 py-3 text-left font-semibold">Section</th>
                                        <th className="px-4 py-3 text-left font-semibold">Nature of Payment</th>
                                        <th className="px-4 py-3 text-center font-semibold">TDS Rate</th>
                                        <th className="px-4 py-3 text-left font-semibold">Threshold Limit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TDS_RATE_CHART.map((row, i) => (
                                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-amber-50 transition-colors`}>
                                            <td className="px-4 py-3 font-semibold text-[#090a3d]">{row.section}</td>
                                            <td className="px-4 py-3 text-gray-600">{row.nature}</td>
                                            <td className="px-4 py-3 text-center font-bold text-[var(--color-brand-secondary)]">{row.rate}</td>
                                            <td className="px-4 py-3 text-gray-500">{row.threshold}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-400 text-center mt-4">
                            * If the deductee does not furnish PAN, TDS is deducted at 20% or the applicable rate, whichever is higher (Section 206AA).
                        </p>
                    </div>
                </section>

                {/* What is TDS */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-6">What is TDS?</h2>
                        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p><strong>Tax Deducted at Source (TDS)</strong> is a mechanism introduced by the Income Tax Department of India to collect tax at the very point where income is generated. Instead of waiting for the taxpayer to compute and pay tax at the end of the financial year, the government requires the payer to deduct a percentage of the payment as tax before releasing the balance to the recipient.</p>
                            <p>For example, when your employer pays your salary, they deduct TDS based on your income tax slab and deposit it directly with the government. Similarly, when a business pays rent above ₹2,40,000 per year, it must deduct TDS at 10% before making the payment. The recipient can later claim credit for TDS deducted while filing their income tax return.</p>
                            <p>TDS applies to various types of payments including salary, interest on fixed deposits, rent, professional fees, commission, dividends, and many others. Each type of payment has a specific TDS section, rate, and threshold limit prescribed under the Income Tax Act, 1961.</p>
                        </div>
                    </div>
                </section>

                {/* How TDS Calculator Works */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-6">How Does the TDS Calculator Work?</h2>
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 mb-8">
                            <p className="text-gray-600 mb-4">The TDS calculator uses a straightforward formula to compute the tax deducted at source:</p>
                            <div className="bg-gray-50 rounded-xl p-5 text-center mb-4">
                                <p className="font-mono text-lg font-bold text-[#090a3d]">TDS Amount = Payment Amount Ã— TDS Rate Ã· 100</p>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start gap-2"><span className="font-mono font-bold text-[var(--color-brand-secondary)]">Payment Amount</span> = Gross amount paid to the deductee</li>
                                <li className="flex items-start gap-2"><span className="font-mono font-bold text-[var(--color-brand-secondary)]">TDS Rate</span> = Applicable rate under the relevant section</li>
                                <li className="flex items-start gap-2"><span className="font-mono font-bold text-[var(--color-brand-secondary)]">Net Amount</span> = Payment Amount − TDS Amount</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                            <h3 className="text-lg font-bold text-[#090a3d] mb-4">Interest on Late TDS Formula</h3>
                            <p className="text-gray-600 mb-4">When TDS is not deducted or deposited on time, interest under Section 201(1A) is calculated as:</p>
                            <div className="bg-gray-50 rounded-xl p-5 text-center mb-4">
                                <p className="font-mono text-lg font-bold text-[#090a3d]">Interest = TDS Amount Ã— Rate per Month Ã— No. of Months</p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                                    <p className="text-sm font-bold text-amber-800 mb-1">Late Deduction</p>
                                    <p className="text-xs text-amber-700">1% per month (or part thereof) from the date TDS was deductible to the date of actual deduction.</p>
                                </div>
                                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                                    <p className="text-sm font-bold text-red-800 mb-1">Late Payment</p>
                                    <p className="text-xs text-red-700">1.5% per month (or part thereof) from the date of deduction to the date of actual deposit with the government.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TDS Due Dates */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">TDS Due Dates</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                                <span className="text-3xl mb-3 block">ðŸ“…</span>
                                <h3 className="text-lg font-bold text-[#090a3d] mb-2">Monthly TDS Deposit</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">TDS deducted during any month (April to February) must be deposited with the government by the <strong className="text-[#090a3d]">7th of the following month</strong>. For instance, TDS deducted in June must be deposited by 7th July.</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                                <span className="text-3xl mb-3 block">ðŸ“†</span>
                                <h3 className="text-lg font-bold text-[#090a3d] mb-2">March TDS Deposit</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">TDS deducted in the month of March has a special deadline ”” it must be deposited by <strong className="text-[#090a3d]">30th April</strong> of the same year. This extended date accommodates year-end accounting.</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                                <span className="text-3xl mb-3 block">ðŸ“</span>
                                <h3 className="text-lg font-bold text-[#090a3d] mb-2">Quarterly TDS Returns</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">TDS returns must be filed quarterly: <strong className="text-[#090a3d]">31st July</strong> (Q1), <strong className="text-[#090a3d]">31st October</strong> (Q2), <strong className="text-[#090a3d]">31st January</strong> (Q3), and <strong className="text-[#090a3d]">31st May</strong> (Q4). Forms 24Q (salary) and 26Q (non-salary) apply.</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                                <span className="text-3xl mb-3 block">ðŸ“„</span>
                                <h3 className="text-lg font-bold text-[#090a3d] mb-2">TDS Certificates</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Form 16 (salary) must be issued by <strong className="text-[#090a3d]">15th June</strong> annually. Form 16A (non-salary) must be issued within <strong className="text-[#090a3d]">15 days</strong> from the due date of filing the TDS return for each quarter.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Penalties */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Penalties for Late TDS</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: 'â³',
                                    title: 'Interest u/s 201(1A)',
                                    desc: 'Interest at 1% per month for late deduction and 1.5% per month for late deposit of TDS is levied. Part of a month is counted as a full month, making even small delays costly.',
                                    color: 'amber',
                                },
                                {
                                    icon: 'âš ï¸',
                                    title: 'Penalty u/s 271C',
                                    desc: 'If a person fails to deduct TDS (wholly or partly), a penalty equal to the amount of TDS not deducted can be imposed by the Joint Commissioner. This can be up to 100% of the TDS amount.',
                                    color: 'red',
                                },
                                {
                                    icon: 'ðŸ“‹',
                                    title: 'Late Filing Fee u/s 234E',
                                    desc: 'A fee of ₹200 per day is charged for delay in filing TDS returns, subject to a maximum of the total TDS amount. This fee applies from the due date until the actual filing date.',
                                    color: 'blue',
                                },
                            ].map((item, i) => (
                                <div key={i} className={`bg-${item.color}-50 rounded-2xl p-6 border border-${item.color}-100 hover:shadow-lg transition-shadow`}>
                                    <span className="text-3xl mb-3 block">{item.icon}</span>
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Use */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">How to Use Our TDS Calculator</h2>
                        <div className="space-y-4">
                            {[
                                { step: '1', title: 'Choose Calculator Mode', desc: 'Select "TDS Calculator" to compute TDS on a payment, or "TDS Interest Calculator" to calculate interest on delayed TDS deposits.' },
                                { step: '2', title: 'Select Payment Type', desc: 'Pick the applicable section from the dropdown ”” salary (192), rent (194I), professional fees (194J), contractor payment (194C), and more.' },
                                { step: '3', title: 'Enter Payment Amount', desc: 'Use the slider or type the gross payment amount. The calculator instantly shows TDS based on the applicable rate for the selected section.' },
                                { step: '4', title: 'Toggle PAN Status', desc: 'Select whether the payee has furnished their PAN. Without PAN, TDS is deducted at a higher rate of 20% under Section 206AA.' },
                                { step: '5', title: 'View TDS Breakdown', desc: 'Instantly see the TDS rate, TDS amount deducted, net amount receivable, and a visual comparison of with-PAN vs without-PAN deductions.' },
                                { step: '6', title: 'Calculate Interest (if applicable)', desc: 'Switch to the Interest Calculator tab, enter the TDS due date and actual payment date, and select the type of default to compute penalty interest.' },
                            ].map(s => (
                                <div key={s.step} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                                    <div className="w-10 h-10 bg-[var(--color-brand-secondary)] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{s.step}</div>
                                    <div>
                                        <h3 className="font-bold text-[#090a3d] mb-1">{s.title}</h3>
                                        <p className="text-sm text-gray-500">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: 'What is TDS and who is responsible for deducting it?', a: 'Tax Deducted at Source (TDS) is collected by the payer at the time of making specific payments such as salary, rent, professional fees, or interest. The payer (deductor) is legally obligated to deduct TDS and deposit it with the government on behalf of the payee (deductee).' },
                                { q: 'When should TDS be deducted?', a: 'TDS must be deducted at the time of payment or at the time of credit to the payee\'s account, whichever occurs earlier. The deducted amount must then be deposited with the government by the 7th of the following month (30th April for March deductions).' },
                                { q: 'What happens if the payee does not have a PAN?', a: 'Under Section 206AA, if the payee fails to furnish their Permanent Account Number (PAN), TDS is deducted at the rate of 20% or the applicable rate under the relevant section, whichever is higher. This makes PAN submission essential to avoid excess TDS deduction.' },
                                { q: 'Can TDS be refunded if excess tax is deducted?', a: 'Yes. If TDS deducted exceeds your actual tax liability for the financial year, you can claim a refund by filing your Income Tax Return (ITR). The excess amount will be refunded by the Income Tax Department after processing your return, usually within a few months.' },
                                { q: 'What is the difference between TDS and TCS?', a: 'TDS (Tax Deducted at Source) is deducted by the payer from payments made to the recipient. TCS (Tax Collected at Source) is collected by the seller from the buyer at the time of sale of specified goods. Both are advance tax collection mechanisms but apply to different transaction types.' },
                                { q: 'Is TDS applicable on all payments?', a: 'No. TDS applies only to specified payments that exceed prescribed threshold limits. For example, TDS on rent applies only when annual rent exceeds ₹2,40,000. If the payment is below the threshold, no TDS needs to be deducted. The specific thresholds vary by section.' },
                                { q: 'How is interest calculated on late TDS payment?', a: 'Interest under Section 201(1A) is calculated at 1% per month (or part thereof) for late deduction, and 1.5% per month (or part thereof) for late deposit after deduction. The interest is simple interest computed on a monthly basis, with any part of a month being treated as a full month.' },
                                { q: 'What is Form 26AS and how does it relate to TDS?', a: 'Form 26AS is your annual tax statement that consolidates all TDS deducted against your PAN during a financial year. It reflects TDS from salary, bank interest, rent, and other sources. You should verify your Form 26AS before filing ITR to ensure all TDS credits are accurately reflected.' },
                                { q: 'Can I request lower TDS deduction?', a: 'Yes. If you believe your total income will be below the taxable limit, you can submit Form 15G (below 60 years) or Form 15H (senior citizens) to the payer to avoid TDS on interest income. For other incomes, you can apply to the Assessing Officer for a lower deduction certificate under Section 197.' },
                                { q: 'What are the consequences of not filing TDS returns?', a: 'Late filing of TDS returns attracts a fee of ₹200 per day under Section 234E (capped at the TDS amount). Additionally, the Assessing Officer may levy a penalty between ₹10,000 and ₹1,00,000 under Section 271H. Persistent non-compliance can also lead to prosecution under Section 276B.' },
                            ].map((faq, i) => (
                                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex justify-between items-center cursor-pointer p-5 text-sm font-semibold text-[#090a3d] hover:text-[var(--color-brand-secondary)] transition-colors text-left"
                                    >
                                        {faq.q}
                                        <svg className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-r from-[#090a3d] to-[#1a1c6e] text-white text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help With TDS Compliance?</h2>
                        <p className="text-gray-300 mb-8 text-lg">Our tax experts can help you with TDS computation, return filing, and compliance management. Stay penalty-free with professional guidance.</p>
                        <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-xl">
                            Talk to Our Tax Experts
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

