import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

type Regime = 'old' | 'new';
type AgeGroup = 'below60' | '60to80' | 'above80';

interface SlabBreakdown {
    from: number;
    to: number | null;
    rate: number;
    tax: number;
}

function formatINR(value: number): string {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
    return `₹${Math.round(value).toLocaleString('en-IN')}`;
}

function formatSlabRange(from: number, to: number | null): string {
    const f = from >= 100000 ? `₹${(from / 100000).toFixed(from % 100000 === 0 ? 0 : 1)}L` : `₹${from.toLocaleString('en-IN')}`;
    if (to === null) return `Above ${f}`;
    const t = to >= 100000 ? `₹${(to / 100000).toFixed(to % 100000 === 0 ? 0 : 1)}L` : `₹${to.toLocaleString('en-IN')}`;
    return `${f} – ${t}`;
}

function getOldRegimeSlabs(ageGroup: AgeGroup): { from: number; to: number | null; rate: number }[] {
    if (ageGroup === 'above80') {
        return [
            { from: 0, to: 500000, rate: 0 },
            { from: 500000, to: 1000000, rate: 20 },
            { from: 1000000, to: null, rate: 30 },
        ];
    }
    if (ageGroup === '60to80') {
        return [
            { from: 0, to: 300000, rate: 0 },
            { from: 300000, to: 500000, rate: 5 },
            { from: 500000, to: 1000000, rate: 20 },
            { from: 1000000, to: null, rate: 30 },
        ];
    }
    // below60
    return [
        { from: 0, to: 250000, rate: 0 },
        { from: 250000, to: 500000, rate: 5 },
        { from: 500000, to: 1000000, rate: 20 },
        { from: 1000000, to: null, rate: 30 },
    ];
}

const NEW_REGIME_SLABS = [
    { from: 0, to: 400000, rate: 0 },
    { from: 400000, to: 800000, rate: 5 },
    { from: 800000, to: 1200000, rate: 10 },
    { from: 1200000, to: 1600000, rate: 15 },
    { from: 1600000, to: 2000000, rate: 20 },
    { from: 2000000, to: 2400000, rate: 25 },
    { from: 2400000, to: null, rate: 30 },
];

function calculateTax(
    income: number,
    regime: Regime,
    ageGroup: AgeGroup,
    deductions80C: number,
    deductions80D: number,
    hra: number,
) {
    let standardDeduction = 0;
    let totalDeductions = 0;

    if (regime === 'new') {
        standardDeduction = 75000;
        totalDeductions = standardDeduction;
    } else {
        standardDeduction = 50000;
        totalDeductions = standardDeduction + deductions80C + deductions80D + hra;
    }

    const taxableIncome = Math.max(0, income - totalDeductions);
    const slabs = regime === 'new' ? NEW_REGIME_SLABS : getOldRegimeSlabs(ageGroup);

    const breakdown: SlabBreakdown[] = [];
    let totalTax = 0;

    for (const slab of slabs) {
        const upper = slab.to ?? Infinity;
        if (taxableIncome <= slab.from) {
            breakdown.push({ from: slab.from, to: slab.to, rate: slab.rate, tax: 0 });
            continue;
        }
        const taxableInSlab = Math.min(taxableIncome, upper) - slab.from;
        const taxInSlab = taxableInSlab * (slab.rate / 100);
        breakdown.push({ from: slab.from, to: slab.to, rate: slab.rate, tax: taxInSlab });
        totalTax += taxInSlab;
    }

    // Rebate u/s 87A
    let rebate = 0;
    if (regime === 'new' && taxableIncome <= 1200000) {
        rebate = Math.min(totalTax, 60000);
    } else if (regime === 'old' && taxableIncome <= 500000) {
        rebate = Math.min(totalTax, 12500);
    }

    const taxAfterRebate = Math.max(0, totalTax - rebate);
    const cess = taxAfterRebate * 0.04;
    const totalLiability = taxAfterRebate + cess;
    const effectiveRate = income > 0 ? (totalLiability / income) * 100 : 0;
    const monthlyTax = totalLiability / 12;

    return {
        taxableIncome,
        standardDeduction,
        totalDeductions,
        breakdown,
        totalTax,
        rebate,
        taxAfterRebate,
        cess,
        totalLiability,
        effectiveRate,
        monthlyTax,
    };
}

const INCOME_PRESETS = [500000, 750000, 1000000, 1500000, 2000000, 5000000];

export default function IncomeTaxCalculator({ isEmbedded = false }: { isEmbedded?: boolean }) {
    const [regime, setRegime] = useState<Regime>('new');
    const [income, setIncome] = useState(1000000);
    const [ageGroup, setAgeGroup] = useState<AgeGroup>('below60');
    const [deductions80C, setDeductions80C] = useState(150000);
    const [deductions80D, setDeductions80D] = useState(25000);
    const [hra, setHra] = useState(0);

    const result = useMemo(
        () => calculateTax(income, regime, ageGroup, deductions80C, deductions80D, hra),
        [income, regime, ageGroup, deductions80C, deductions80D, hra],
    );

    // Comparison: calculate tax for other regime
    const otherResult = useMemo(
        () => calculateTax(income, regime === 'new' ? 'old' : 'new', ageGroup, deductions80C, deductions80D, hra),
        [income, regime, ageGroup, deductions80C, deductions80D, hra],
    );

    const savings = otherResult.totalLiability - result.totalLiability;

    if (isEmbedded) {
        return (
            <div className="w-full">
                {/* Regime Tabs */}
                <div className="flex justify-center gap-2 mb-10">
                    {([
                        { key: 'new' as const, label: 'New Regime (FY 2025-26)' },
                        { key: 'old' as const, label: 'Old Regime' },
                    ]).map(tab => (
                        <button key={tab.key} onClick={() => setRegime(tab.key)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${regime === tab.key ? 'bg-[var(--color-brand-secondary)] text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-[var(--color-brand-secondary)] hover:text-[var(--color-brand-secondary)]'}`}>
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Inputs Panel */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                        {/* Annual Income */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-semibold text-gray-700">Annual Income (Gross)</label>
                                <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                    <span className="text-sm text-gray-500">₹</span>
                                    <input type="number" value={income}
                                        onChange={e => setIncome(Math.max(0, Math.min(50000000, Number(e.target.value))))}
                                        className="w-28 text-sm font-semibold text-right bg-transparent focus:outline-none" />
                                </div>
                            </div>
                            <input type="range" min={0} max={50000000} step={50000} value={income}
                                onChange={e => setIncome(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                            <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹0</span><span>₹5 Cr</span></div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {INCOME_PRESETS.map(p => (
                                    <button key={p} onClick={() => setIncome(p)}
                                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${income === p ? 'bg-[var(--color-brand-secondary)] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                        {formatINR(p)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Age Group - Old regime only */}
                        {regime === 'old' && (
                            <div className="mb-6">
                                <label className="text-sm font-semibold text-gray-700 block mb-2">Age Group</label>
                                <div className="flex flex-wrap gap-2">
                                    {([
                                        { key: 'below60' as const, label: 'Below 60 Years' },
                                        { key: '60to80' as const, label: '60 to 80 Years' },
                                        { key: 'above80' as const, label: 'Above 80 Years' },
                                    ]).map(tab => (
                                        <button key={tab.key} onClick={() => setAgeGroup(tab.key)}
                                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${ageGroup === tab.key ? 'bg-[#090a3d] text-white' : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'}`}>
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Deductions - Old regime only */}
                        {regime === 'old' && (
                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <h4 className="text-sm font-bold text-[#090a3d] mb-3">Eligible Deductions &amp; Exemptions</h4>

                                {/* Section 80C */}
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-semibold text-gray-600">Section 80C (PPF, ELSS, EPF, etc.)</label>
                                        <span className="text-xs font-bold text-gray-500">Max ₹1.5L</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                                        <span className="text-sm text-gray-400">₹</span>
                                        <input type="number" value={deductions80C}
                                            onChange={e => setDeductions80C(Math.max(0, Math.min(150000, Number(e.target.value))))}
                                            className="w-full text-sm font-semibold bg-transparent focus:outline-none" />
                                    </div>
                                </div>

                                {/* Section 80D */}
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-semibold text-gray-600">Section 80D (Health Insurance Premium)</label>
                                        <span className="text-xs font-bold text-gray-500">Max ₹1L</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                                        <span className="text-sm text-gray-400">₹</span>
                                        <input type="number" value={deductions80D}
                                            onChange={e => setDeductions80D(Math.max(0, Math.min(100000, Number(e.target.value))))}
                                            className="w-full text-sm font-semibold bg-transparent focus:outline-none" />
                                    </div>
                                </div>

                                {/* HRA Exemption */}
                                <div>
                                    <label className="text-xs font-semibold text-gray-600 block mb-1">House Rent Allowance (HRA) Exemption</label>
                                    <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                                        <span className="text-sm text-gray-400">₹</span>
                                        <input type="number" value={hra}
                                            onChange={e => setHra(Math.max(0, Number(e.target.value)))}
                                            className="w-full text-sm font-semibold bg-transparent focus:outline-none" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Results Panel */}
                    <div className="space-y-6">
                        <div className="bg-[#090a3d] text-white rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden">
                            {/* Decorative Glow */}
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--color-brand-secondary)] rounded-full blur-3xl opacity-20" />

                            <h3 className="text-lg font-bold mb-6 flex items-center justify-between">
                                Calculation Summary
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-amber-300 border border-white/10 uppercase">
                                    {regime === 'new' ? 'New Regime' : 'Old Regime'}
                                </span>
                            </h3>

                            <div className="space-y-4">
                                <div className="flex justify-between text-sm text-gray-300">
                                    <span>Gross Annual Salary</span>
                                    <span className="font-semibold text-white">{formatINR(income)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-300">
                                    <span>Standard Deduction</span>
                                    <span className="font-semibold text-white">-{formatINR(result.standardDeduction)}</span>
                                </div>
                                {regime === 'old' && (
                                    <div className="flex justify-between text-sm text-gray-300">
                                        <span>Other Deductions &amp; Exemptions</span>
                                        <span className="font-semibold text-white">-{formatINR(result.totalDeductions - result.standardDeduction)}</span>
                                    </div>
                                )}
                                <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-gray-400">Estimated Net Tax Liability</p>
                                        <p className="text-2xl font-bold text-amber-300 mt-1">{formatINR(result.totalLiability)}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400">Effective Tax Rate</p>
                                        <p className="text-lg font-bold text-white mt-1">{result.effectiveRate.toFixed(1)}%</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-3 mt-6">
                                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                                    <p className="text-[10px] text-gray-400 mb-1">Monthly Tax Liability</p>
                                    <p className="text-base font-bold text-white">{formatINR(result.monthlyTax)}</p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                                    <p className="text-[10px] text-gray-400 mb-1">Total Deductions Claimed</p>
                                    <p className="text-base font-bold text-white">{formatINR(result.totalDeductions)}</p>
                                </div>
                            </div>

                            {/* Regime Comparison */}
                            {savings !== 0 && (
                                <div className={`mt-6 p-4 rounded-xl text-sm ${savings > 0 ? 'bg-green-500/10 border border-green-500/20 text-green-300' : 'bg-amber-500/10 border border-amber-500/20 text-amber-300'}`}>
                                    <p className="font-medium">
                                        {savings > 0 ? (
                                            <span>
                                                You save <strong>{formatINR(savings)}</strong> with the {regime === 'new' ? 'New' : 'Old'} Regime
                                            </span>
                                        ) : (
                                            <span>
                                                You could save <strong>{formatINR(Math.abs(savings))}</strong> by switching to the {regime === 'new' ? 'Old' : 'New'} Regime
                                            </span>
                                        )}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Slab Breakdown */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                            <h3 className="text-base font-bold text-[#090a3d] mb-4">Tax Slab Breakdown</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-xs">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-2 text-xs font-semibold text-gray-500 uppercase">Income Slab</th>
                                            <th className="text-center py-2 text-xs font-semibold text-gray-500 uppercase">Rate</th>
                                            <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase">Tax</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {result.breakdown.map((slab, i) => (
                                            <tr key={i} className="border-b border-gray-50">
                                                <td className="py-2.5 text-gray-700 font-medium">{formatSlabRange(slab.from, slab.to)}</td>
                                                <td className="py-2.5 text-center text-gray-600">{slab.rate === 0 ? 'Nil' : `${slab.rate}%`}</td>
                                                <td className="py-2.5 text-right font-semibold text-gray-800">{slab.tax > 0 ? formatINR(slab.tax) : '–'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr className="bg-gray-50 font-bold">
                                            <td className="py-2 text-[#090a3d]" colSpan={2}>Total Base Tax</td>
                                            <td className="py-2 text-right text-[var(--color-brand-secondary)]">{formatINR(result.totalTax)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col font-sans">
                        <SEO
                title="Income Tax Calculator FY 2025-26 – Compute Tax Online"
                description="Free online income tax calculator for FY 2025-26 / AY 2026-27. Compare old vs new tax regime. Calculate your exact income tax liability in seconds."
                canonical="/income-tax-calculator"
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
                            Free Online Tool • FY 2025-26
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Income Tax Calculator <span className="text-[var(--color-brand-secondary)]">India</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Calculate your income tax liability instantly under the Old and New Tax Regimes for FY 2025-26. Compare regimes and plan your tax-saving strategy.
                        </p>
                    </div>
                </section>

                {/* Calculator */}
                <section className="py-12 md:py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Regime Tabs */}
                        <div className="flex justify-center gap-2 mb-10">
                            {([
                                { key: 'new' as const, label: 'New Regime (FY 2025-26)' },
                                { key: 'old' as const, label: 'Old Regime' },
                            ]).map(tab => (
                                <button key={tab.key} onClick={() => setRegime(tab.key)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${regime === tab.key ? 'bg-[var(--color-brand-secondary)] text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-[var(--color-brand-secondary)] hover:text-[var(--color-brand-secondary)]'}`}>
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Inputs Panel */}
                            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                {/* Annual Income */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-semibold text-gray-700">Annual Income (Gross)</label>
                                        <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                            <span className="text-sm text-gray-500">₹</span>
                                            <input type="number" value={income}
                                                onChange={e => setIncome(Math.max(0, Math.min(50000000, Number(e.target.value))))}
                                                className="w-28 text-sm font-semibold text-right bg-transparent focus:outline-none" />
                                        </div>
                                    </div>
                                    <input type="range" min={0} max={50000000} step={50000} value={income}
                                        onChange={e => setIncome(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                                    <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹0</span><span>₹5 Cr</span></div>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {INCOME_PRESETS.map(p => (
                                            <button key={p} onClick={() => setIncome(p)}
                                                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${income === p ? 'bg-[var(--color-brand-secondary)] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                                {formatINR(p)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Age Group - Old regime only */}
                                {regime === 'old' && (
                                    <div className="mb-6">
                                        <label className="text-sm font-semibold text-gray-700 block mb-2">Age Group</label>
                                        <div className="flex flex-wrap gap-2">
                                            {([
                                                { key: 'below60' as const, label: 'Below 60' },
                                                { key: '60to80' as const, label: '60-80 (Senior)' },
                                                { key: 'above80' as const, label: 'Above 80 (Super Senior)' },
                                            ]).map(ag => (
                                                <button key={ag.key} onClick={() => setAgeGroup(ag.key)}
                                                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${ageGroup === ag.key ? 'bg-[#090a3d] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                                    {ag.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Deductions - Old regime only */}
                                {regime === 'old' && (
                                    <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
                                        <h4 className="text-sm font-bold text-[#090a3d] mb-4 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-[var(--color-brand-secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>
                                            Deductions
                                        </h4>

                                        {/* 80C */}
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center mb-1.5">
                                                <label className="text-xs font-semibold text-gray-600">Section 80C <span className="text-gray-400">(max ₹1.5L)</span></label>
                                                <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-2 py-1">
                                                    <span className="text-xs text-gray-500">₹</span>
                                                    <input type="number" value={deductions80C}
                                                        onChange={e => setDeductions80C(Math.max(0, Math.min(150000, Number(e.target.value))))}
                                                        className="w-20 text-xs font-semibold text-right bg-transparent focus:outline-none" />
                                                </div>
                                            </div>
                                            <input type="range" min={0} max={150000} step={5000} value={deductions80C}
                                                onChange={e => setDeductions80C(Number(e.target.value))}
                                                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                                        </div>

                                        {/* 80D */}
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center mb-1.5">
                                                <label className="text-xs font-semibold text-gray-600">Section 80D – Health Insurance <span className="text-gray-400">(max ₹75K)</span></label>
                                                <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-2 py-1">
                                                    <span className="text-xs text-gray-500">₹</span>
                                                    <input type="number" value={deductions80D}
                                                        onChange={e => setDeductions80D(Math.max(0, Math.min(75000, Number(e.target.value))))}
                                                        className="w-20 text-xs font-semibold text-right bg-transparent focus:outline-none" />
                                                </div>
                                            </div>
                                            <input type="range" min={0} max={75000} step={5000} value={deductions80D}
                                                onChange={e => setDeductions80D(Number(e.target.value))}
                                                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                                        </div>

                                        {/* HRA */}
                                        <div>
                                            <div className="flex justify-between items-center mb-1.5">
                                                <label className="text-xs font-semibold text-gray-600">HRA Exemption</label>
                                                <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-2 py-1">
                                                    <span className="text-xs text-gray-500">₹</span>
                                                    <input type="number" value={hra}
                                                        onChange={e => setHra(Math.max(0, Number(e.target.value)))}
                                                        className="w-20 text-xs font-semibold text-right bg-transparent focus:outline-none" />
                                                </div>
                                            </div>
                                            <input type="range" min={0} max={500000} step={5000} value={hra}
                                                onChange={e => setHra(Number(e.target.value))}
                                                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                                        </div>
                                    </div>
                                )}

                                {/* Standard Deduction Info */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 rounded-lg border border-blue-100">
                                    <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <p className="text-xs text-blue-700">
                                        Standard Deduction: <strong>{regime === 'new' ? '₹75,000' : '₹50,000'}</strong> applied automatically
                                    </p>
                                </div>
                            </div>

                            {/* Results Panel */}
                            <div className="space-y-6">
                                {/* Summary Card */}
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-5">Tax Calculation Summary</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">Gross Income</span>
                                            <span className="text-sm font-bold text-[#090a3d]">{formatINR(income)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">Total Deductions</span>
                                            <span className="text-sm font-bold text-green-600">− {formatINR(result.totalDeductions)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">Taxable Income</span>
                                            <span className="text-sm font-bold text-[#090a3d]">{formatINR(result.taxableIncome)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">Tax (before rebate)</span>
                                            <span className="text-sm font-semibold text-gray-700">{formatINR(result.totalTax)}</span>
                                        </div>
                                        {result.rebate > 0 && (
                                            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                                                <span className="text-sm text-gray-500">Rebate u/s 87A</span>
                                                <span className="text-sm font-bold text-green-600">− {formatINR(result.rebate)}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">Health &amp; Education Cess (4%)</span>
                                            <span className="text-sm font-semibold text-gray-700">{formatINR(result.cess)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 bg-[#090a3d] rounded-xl px-4 -mx-1">
                                            <span className="text-sm font-semibold text-gray-300">Total Tax Liability</span>
                                            <span className="text-xl font-bold text-[var(--color-brand-secondary)]">{formatINR(result.totalLiability)}</span>
                                        </div>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-2 gap-3 mt-5">
                                        <div className="bg-gray-50 rounded-xl p-3 text-center">
                                            <p className="text-xs text-gray-500 mb-1">Effective Rate</p>
                                            <p className="text-lg font-bold text-[#090a3d]">{result.effectiveRate.toFixed(1)}%</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-xl p-3 text-center">
                                            <p className="text-xs text-gray-500 mb-1">Monthly Tax</p>
                                            <p className="text-lg font-bold text-[#090a3d]">{formatINR(result.monthlyTax)}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-xl p-3 text-center">
                                            <p className="text-xs text-gray-500 mb-1">Taxable Income</p>
                                            <p className="text-lg font-bold text-[#090a3d]">{formatINR(result.taxableIncome)}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-xl p-3 text-center">
                                            <p className="text-xs text-gray-500 mb-1">Cess (4%)</p>
                                            <p className="text-lg font-bold text-[#090a3d]">{formatINR(result.cess)}</p>
                                        </div>
                                    </div>

                                    {/* Regime Comparison */}
                                    {savings !== 0 && (
                                        <div className={`mt-5 p-4 rounded-xl text-sm ${savings > 0 ? 'bg-green-50 border border-green-100' : 'bg-amber-50 border border-amber-100'}`}>
                                            <p className="font-medium">
                                                {savings > 0 ? (
                                                    <span className="text-green-700">
                                                        You save <strong>{formatINR(savings)}</strong> with the {regime === 'new' ? 'New' : 'Old'} Regime
                                                    </span>
                                                ) : (
                                                    <span className="text-amber-700">
                                                        You could save <strong>{formatINR(Math.abs(savings))}</strong> by switching to the {regime === 'new' ? 'Old' : 'New'} Regime
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Slab Breakdown */}
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-4">Tax Slab Breakdown</h3>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-gray-200">
                                                    <th className="text-left py-2.5 text-xs font-semibold text-gray-500 uppercase">Income Slab</th>
                                                    <th className="text-center py-2.5 text-xs font-semibold text-gray-500 uppercase">Rate</th>
                                                    <th className="text-right py-2.5 text-xs font-semibold text-gray-500 uppercase">Tax</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {result.breakdown.map((slab, i) => (
                                                    <tr key={i} className="border-b border-gray-50">
                                                        <td className="py-2.5 text-gray-700 font-medium">{formatSlabRange(slab.from, slab.to)}</td>
                                                        <td className="py-2.5 text-center text-gray-600">{slab.rate === 0 ? 'Nil' : `${slab.rate}%`}</td>
                                                        <td className="py-2.5 text-right font-semibold text-gray-800">{slab.tax > 0 ? formatINR(slab.tax) : '–'}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr className="bg-gray-50 font-bold">
                                                    <td className="py-2.5 text-[#090a3d]" colSpan={2}>Total Tax</td>
                                                    <td className="py-2.5 text-right text-[var(--color-brand-secondary)]">{formatINR(result.totalTax)}</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is Income Tax */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-6">What is Income Tax?</h2>
                        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>Income Tax is a direct tax levied by the Government of India on the earnings of individuals, Hindu Undivided Families (HUFs), firms, and other entities during a financial year. It is governed by the <strong>Income Tax Act, 1961</strong> and administered by the Central Board of Direct Taxes (CBDT).</p>
                            <p>Every person whose total income exceeds the basic exemption limit is required to file an Income Tax Return (ITR) and pay tax at the rates prescribed for the relevant assessment year. The tax is calculated on a slab basis — meaning different portions of your income are taxed at progressively higher rates.</p>
                            <p>Income tax revenues form a significant portion of the government's total revenue and are used to fund public infrastructure, defence, healthcare, education, and social welfare programmes. Understanding how income tax works empowers you to plan your finances better, claim legitimate deductions, and reduce your overall tax liability legally.</p>
                        </div>
                    </div>
                </section>

                {/* Old vs New Regime Comparison */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Old vs New Tax Regime Comparison</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* New Regime Card */}
                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-[var(--color-brand-secondary)] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Default</div>
                                <h3 className="text-xl font-bold text-[#090a3d] mb-4">New Tax Regime</h3>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>Lower tax rates across all income levels</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>Standard deduction of ₹75,000</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>No investment planning required</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>Rebate u/s 87A for income up to ₹12 lakh</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>Simpler filing, fewer documents</li>
                                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span>Most deductions and exemptions not available</li>
                                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span>No HRA, 80C, 80D, LTA exemptions</li>
                                </ul>
                            </div>
                            {/* Old Regime Card */}
                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg">
                                <h3 className="text-xl font-bold text-[#090a3d] mb-4">Old Tax Regime</h3>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>Claim over 70 deductions and exemptions</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>Section 80C, 80D, 80E, 80G, 80TTA</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>HRA exemption for salaried employees</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>Home loan interest deduction (Sec 24b)</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>Leave Travel Allowance (LTA) benefit</li>
                                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span>Higher tax rates compared to new regime</li>
                                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span>Requires active tax planning and record-keeping</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-6">
                            The New Regime is the default from FY 2023-24 onwards. You can opt for the Old Regime while filing your return if it benefits you.
                        </p>
                    </div>
                </section>

                {/* Income Tax Slabs FY 2025-26 */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Income Tax Slabs FY 2025-26</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* New Regime Table */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="bg-[#090a3d] text-white px-6 py-4">
                                    <h3 className="font-bold text-lg">New Tax Regime</h3>
                                    <p className="text-xs text-gray-300">Applicable to all age groups</p>
                                </div>
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="text-left px-6 py-3 font-semibold text-gray-600">Income Slab</th>
                                            <th className="text-right px-6 py-3 font-semibold text-gray-600">Tax Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Up to ₹4,00,000', 'Nil'],
                                            ['₹4,00,001 – ₹8,00,000', '5%'],
                                            ['₹8,00,001 – ₹12,00,000', '10%'],
                                            ['₹12,00,001 – ₹16,00,000', '15%'],
                                            ['₹16,00,001 – ₹20,00,000', '20%'],
                                            ['₹20,00,001 – ₹24,00,000', '25%'],
                                            ['Above ₹24,00,000', '30%'],
                                        ].map(([slab, rate], i) => (
                                            <tr key={i} className="border-t border-gray-50">
                                                <td className="px-6 py-2.5 text-gray-700">{slab}</td>
                                                <td className="px-6 py-2.5 text-right font-semibold text-[#090a3d]">{rate}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Old Regime Table */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="bg-[#090a3d] text-white px-6 py-4">
                                    <h3 className="font-bold text-lg">Old Tax Regime</h3>
                                    <p className="text-xs text-gray-300">For individuals below 60 years</p>
                                </div>
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="text-left px-6 py-3 font-semibold text-gray-600">Income Slab</th>
                                            <th className="text-right px-6 py-3 font-semibold text-gray-600">Tax Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Up to ₹2,50,000', 'Nil'],
                                            ['₹2,50,001 – ₹5,00,000', '5%'],
                                            ['₹5,00,001 – ₹10,00,000', '20%'],
                                            ['Above ₹10,00,000', '30%'],
                                        ].map(([slab, rate], i) => (
                                            <tr key={i} className="border-t border-gray-50">
                                                <td className="px-6 py-2.5 text-gray-700">{slab}</td>
                                                <td className="px-6 py-2.5 text-right font-semibold text-[#090a3d]">{rate}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="px-6 py-3 bg-gray-50 text-xs text-gray-500">
                                    <p><strong>Senior Citizens (60-80):</strong> Nil up to ₹3L</p>
                                    <p><strong>Super Senior Citizens (80+):</strong> Nil up to ₹5L</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Deductions */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Common Deductions Under Section 80C &amp; 80D</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#090a3d]">Section 80C</h3>
                                        <p className="text-xs text-gray-500">Maximum deduction: ₹1,50,000</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[var(--color-brand-secondary)] rounded-full" />EPF / VPF Contribution</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[var(--color-brand-secondary)] rounded-full" />PPF (Public Provident Fund)</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[var(--color-brand-secondary)] rounded-full" />ELSS Mutual Funds</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[var(--color-brand-secondary)] rounded-full" />Life Insurance Premium</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[var(--color-brand-secondary)] rounded-full" />NSC (National Savings Certificate)</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[var(--color-brand-secondary)] rounded-full" />5-Year Tax Saving FD</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[var(--color-brand-secondary)] rounded-full" />Tuition Fees (max 2 children)</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[var(--color-brand-secondary)] rounded-full" />Home Loan Principal Repayment</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#090a3d]">Section 80D</h3>
                                        <p className="text-xs text-gray-500">Health Insurance Premium</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Self &amp; Family: Up to ₹25,000</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Parents (below 60): Up to ₹25,000</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Parents (above 60): Up to ₹50,000</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Preventive Health Check-up: ₹5,000</li>
                                </ul>
                                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <p className="text-xs text-blue-700"><strong>Maximum Deduction:</strong> ₹1,00,000 (if both self &amp; parents are senior citizens)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tax Saving Strategies */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Smart Tax Saving Strategies</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '1', title: 'Maximize 80C Investments', desc: 'Invest ₹1.5 lakh in ELSS, PPF, or EPF to claim full Section 80C deduction under the Old Regime.' },
                                { icon: '2', title: 'Health Insurance', desc: 'Buy health insurance for self and parents. Claim up to ₹1 lakh under Section 80D.' },
                                { icon: '3', title: 'Home Loan Benefits', desc: 'Claim up to ₹2 lakh on home loan interest (Sec 24b) and principal under 80C.' },
                                { icon: '4', title: 'NPS Contribution', desc: 'Extra ₹50,000 deduction under Section 80CCD(1B) for NPS contributions, over and above 80C.' },
                                { icon: '5', title: 'HRA Exemption', desc: 'If salaried and paying rent, claim HRA exemption to significantly reduce taxable income.' },
                                { icon: '6', title: 'Compare Regimes', desc: 'Use this calculator to compare Old vs New regime every year. The better option depends on your deductions.' },
                            ].map((s, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="w-10 h-10 bg-[var(--color-brand-secondary)] text-white rounded-xl flex items-center justify-center font-bold text-sm mb-4">{s.icon}</div>
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
                                {
                                    q: 'What is the difference between Old and New Tax Regime?',
                                    a: 'The New Tax Regime offers lower tax rates but removes most deductions and exemptions like 80C, 80D, and HRA. The Old Regime retains higher rates but allows you to claim over 70 deductions and exemptions. The best choice depends on your total eligible deductions ”” use this calculator to compare both.',
                                },
                                {
                                    q: 'Is the New Regime mandatory from FY 2025-26?',
                                    a: 'No. The New Regime is the default regime, meaning it applies automatically unless you explicitly opt for the Old Regime while filing your Income Tax Return. Salaried individuals can inform their employer to deduct TDS under the Old Regime if preferred.',
                                },
                                {
                                    q: 'What is the rebate under Section 87A?',
                                    a: 'Under the New Regime, if your taxable income is up to ₹12,00,000, you receive a rebate of up to ₹60,000, making your tax liability effectively zero for incomes up to ₹12 lakh. Under the Old Regime, the rebate applies for taxable income up to ₹5,00,000 (maximum rebate ₹12,500).',
                                },
                                {
                                    q: 'What is Health and Education Cess?',
                                    a: 'A cess of 4% is levied on the total income tax amount (after rebate). This cess funds health and education initiatives and is applicable under both the Old and New Regimes. It is calculated after applying rebate and surcharge.',
                                },
                                {
                                    q: 'How is the Standard Deduction applied?',
                                    a: 'For salaried individuals and pensioners, a flat standard deduction is subtracted from gross income before computing tax. It is ₹75,000 under the New Regime and ₹50,000 under the Old Regime for FY 2025-26. No bills or proofs are required to claim it.',
                                },
                                {
                                    q: 'Can I claim HRA and 80C in the New Regime?',
                                    a: 'No. The New Tax Regime does not allow deductions under Section 80C, 80D, HRA exemption, LTA, or most other common exemptions. Only the standard deduction of ₹75,000 and employer NPS contribution (80CCD(2)) are available.',
                                },
                                {
                                    q: 'Who should choose the Old Regime?',
                                    a: 'The Old Regime typically benefits taxpayers who have significant deductions ”” for example, those paying home loan EMIs (Section 24b), investing the full ₹1.5 lakh in 80C instruments, paying health insurance premiums, and claiming HRA. If your total deductions exceed approximately ₹3.75 lakh, the Old Regime may save you more tax.',
                                },
                                {
                                    q: 'Does this calculator include surcharge?',
                                    a: 'This calculator computes tax based on applicable slabs, rebate u/s 87A, and 4% Health & Education Cess. For very high incomes (above ₹50 lakh), a surcharge may apply. Consult a tax professional for precise calculations involving surcharge and marginal relief.',
                                },
                                {
                                    q: 'How accurate is this calculator?',
                                    a: 'This calculator provides an accurate estimate based on the latest FY 2025-26 tax slab rates, standard deduction, and rebate rules. However, individual tax situations may vary due to capital gains, other income sources, surcharge, or specific exemptions. For filing purposes, always verify with a chartered accountant.',
                                },
                                {
                                    q: 'When is the deadline to file Income Tax Returns?',
                                    a: 'For individuals and HUFs not subject to tax audit, the ITR filing deadline for FY 2025-26 (AY 2026-27) is typically 31st July 2026. For those requiring an audit, the deadline is 31st October 2026. Late filing incurs penalties under Section 234F.',
                                },
                            ].map((faq, i) => (
                                <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
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

                {/* CTA */}
                <section className="py-16 bg-gradient-to-r from-[#090a3d] to-[#1a1c6e] text-white text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Expert Tax Planning Assistance?</h2>
                        <p className="text-gray-300 mb-8 text-lg">Our chartered accountants and tax consultants can help you choose the right tax regime, maximise deductions, and file your ITR hassle-free.</p>
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

export { IncomeTaxCalculator as IncomeTaxCalculatorWidget };
