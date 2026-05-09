import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

function formatCurrency(value: number): string {
    if (value >= 10000000) return `â‚¹${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `â‚¹${(value / 100000).toFixed(2)} L`;
    return `â‚¹${value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
}

function calculateEMI(principal: number, annualRate: number, totalMonths: number) {
    if (annualRate === 0) {
        const emi = principal / totalMonths;
        return { emi, totalInterest: 0, totalAmount: principal };
    }
    const r = annualRate / 12 / 100;
    const n = totalMonths;
    const emi = principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - principal;
    return { emi, totalInterest, totalAmount };
}

function generateAmortization(principal: number, annualRate: number, totalMonths: number) {
    const r = annualRate / 12 / 100;
    let balance = principal;
    const yearMap: {
        year: number;
        principalPaid: number;
        interestPaid: number;
        balance: number;
    }[] = [];

    let yearPrincipal = 0;
    let yearInterest = 0;

    for (let month = 1; month <= totalMonths; month++) {
        let interestForMonth: number;
        let principalForMonth: number;

        if (annualRate === 0) {
            interestForMonth = 0;
            principalForMonth = principal / totalMonths;
        } else {
            const emi = principal * r * Math.pow(1 + r, totalMonths) / (Math.pow(1 + r, totalMonths) - 1);
            interestForMonth = balance * r;
            principalForMonth = emi - interestForMonth;
        }

        yearPrincipal += principalForMonth;
        yearInterest += interestForMonth;
        balance -= principalForMonth;
        if (balance < 0) balance = 0;

        if (month % 12 === 0 || month === totalMonths) {
            yearMap.push({
                year: Math.ceil(month / 12),
                principalPaid: yearPrincipal,
                interestPaid: yearInterest,
                balance,
            });
            yearPrincipal = 0;
            yearInterest = 0;
        }
    }
    return yearMap;
}

const LOAN_PRESETS = [1000000, 2000000, 3000000, 5000000, 7500000, 10000000];

export default function EmiCalculator() {
    const [loanAmount, setLoanAmount] = useState(3000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenureYears, setTenureYears] = useState(20);
    const [tenureUnit, setTenureUnit] = useState<'years' | 'months'>('years');
    const [showSchedule, setShowSchedule] = useState(false);

    const totalMonths = tenureUnit === 'years' ? tenureYears * 12 : tenureYears;
    const displayYears = tenureUnit === 'years' ? tenureYears : Math.ceil(tenureYears / 12);

    const result = useMemo(
        () => calculateEMI(loanAmount, interestRate, totalMonths),
        [loanAmount, interestRate, totalMonths]
    );

    const principalPct = result.totalAmount > 0 ? (loanAmount / result.totalAmount) * 100 : 50;

    const amortization = useMemo(
        () => generateAmortization(loanAmount, interestRate, totalMonths),
        [loanAmount, interestRate, totalMonths]
    );

    const chartMax = amortization.length > 0
        ? Math.max(...amortization.map(d => d.principalPaid + d.interestPaid))
        : 1;

    const handleTenureChange = (val: number) => {
        if (tenureUnit === 'years') {
            setTenureYears(Math.min(30, Math.max(1, val)));
        } else {
            setTenureYears(Math.min(360, Math.max(12, val)));
        }
    };

    const toggleTenureUnit = (unit: 'years' | 'months') => {
        if (unit === tenureUnit) return;
        if (unit === 'months') {
            setTenureYears(tenureYears * 12);
        } else {
            setTenureYears(Math.max(1, Math.round(tenureYears / 12)));
        }
        setTenureUnit(unit);
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
                        <SEO
                title="Home Loan EMI Calculator – Calculate Monthly EMI"
                description="Free home loan EMI calculator — compute your monthly EMI, total interest payable, and amortisation schedule instantly. Plan your home purchase wisely."
                canonical="/home-loan-emi-calculator"
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
                            Home Loan EMI Calculator <span className="text-[var(--color-brand-secondary)]">Online</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Plan your home purchase confidently â€” calculate your monthly EMI, total interest outgo, and view a detailed year-wise amortization schedule before you sign.
                        </p>
                    </div>
                </section>

                {/* Calculator Section */}
                <section className="py-12 md:py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Inputs */}
                            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                {/* Loan Amount */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
                                        <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                            <span className="text-sm text-gray-500">â‚¹</span>
                                            <input
                                                type="number"
                                                value={loanAmount}
                                                onChange={e => setLoanAmount(Math.max(100000, Math.min(100000000, Number(e.target.value))))}
                                                className="w-28 text-sm font-semibold text-right bg-transparent focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        type="range" min={100000} max={100000000} step={100000}
                                        value={loanAmount}
                                        onChange={e => setLoanAmount(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                                        <span>â‚¹1 L</span><span>â‚¹10 Cr</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {LOAN_PRESETS.map(p => (
                                            <button key={p} onClick={() => setLoanAmount(p)}
                                                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${loanAmount === p ? 'bg-[var(--color-brand-secondary)] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                                {formatCurrency(p)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Interest Rate */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-semibold text-gray-700">Interest Rate (p.a.)</label>
                                        <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                            <input
                                                type="number"
                                                value={interestRate}
                                                step={0.1}
                                                onChange={e => setInterestRate(Math.min(20, Math.max(1, Number(e.target.value))))}
                                                className="w-16 text-sm font-semibold text-right bg-transparent focus:outline-none"
                                            />
                                            <span className="text-sm text-gray-500">%</span>
                                        </div>
                                    </div>
                                    <input
                                        type="range" min={1} max={20} step={0.1}
                                        value={interestRate}
                                        onChange={e => setInterestRate(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                                        <span>1%</span><span>20%</span>
                                    </div>
                                </div>

                                {/* Loan Tenure */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-semibold text-gray-700">Loan Tenure</label>
                                        <div className="flex items-center gap-1">
                                            <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                                <input
                                                    type="number"
                                                    value={tenureYears}
                                                    onChange={e => handleTenureChange(Number(e.target.value))}
                                                    className="w-16 text-sm font-semibold text-right bg-transparent focus:outline-none"
                                                />
                                                <span className="text-sm text-gray-500">{tenureUnit === 'years' ? 'Yr' : 'Mo'}</span>
                                            </div>
                                            <div className="flex ml-2 bg-gray-100 rounded-lg overflow-hidden">
                                                <button
                                                    onClick={() => toggleTenureUnit('years')}
                                                    className={`px-3 py-1.5 text-xs font-semibold transition-all ${tenureUnit === 'years' ? 'bg-[var(--color-brand-secondary)] text-white' : 'text-gray-600 hover:text-gray-800'}`}
                                                >Yr</button>
                                                <button
                                                    onClick={() => toggleTenureUnit('months')}
                                                    className={`px-3 py-1.5 text-xs font-semibold transition-all ${tenureUnit === 'months' ? 'bg-[var(--color-brand-secondary)] text-white' : 'text-gray-600 hover:text-gray-800'}`}
                                                >Mo</button>
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min={tenureUnit === 'years' ? 1 : 12}
                                        max={tenureUnit === 'years' ? 30 : 360}
                                        step={tenureUnit === 'years' ? 1 : 1}
                                        value={tenureYears}
                                        onChange={e => handleTenureChange(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                                        <span>{tenureUnit === 'years' ? '1 yr' : '12 mo'}</span>
                                        <span>{tenureUnit === 'years' ? '30 yrs' : '360 mo'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="space-y-6">
                                {/* Summary */}
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-5">Loan Summary</h3>

                                    {/* Monthly EMI - Prominent */}
                                    <div className="bg-gradient-to-r from-[#090a3d] to-[#1a1c6e] rounded-xl p-5 mb-5 text-center">
                                        <p className="text-sm text-gray-300 mb-1">Monthly EMI</p>
                                        <p className="text-3xl md:text-4xl font-bold text-[var(--color-brand-secondary)]">
                                            {formatCurrency(result.emi)}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">Principal Amount</span>
                                            <span className="text-lg font-bold text-[#090a3d]">{formatCurrency(loanAmount)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">Total Interest Payable</span>
                                            <span className="text-lg font-bold text-red-500">{formatCurrency(result.totalInterest)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3">
                                            <span className="text-sm font-semibold text-gray-700">Total Amount Payable</span>
                                            <span className="text-2xl font-bold text-[var(--color-brand-secondary)]">{formatCurrency(result.totalAmount)}</span>
                                        </div>
                                    </div>

                                    {/* Principal vs Interest Progress Bar */}
                                    <div className="mt-5">
                                        <div className="h-4 rounded-full overflow-hidden flex bg-gray-100">
                                            <div className="bg-[#090a3d] rounded-l-full transition-all duration-500" style={{ width: `${principalPct}%` }} />
                                            <div className="bg-[var(--color-brand-secondary)] rounded-r-full transition-all duration-500" style={{ width: `${100 - principalPct}%` }} />
                                        </div>
                                        <div className="flex justify-between mt-2 text-xs">
                                            <span className="flex items-center gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#090a3d]" />
                                                Principal ({principalPct.toFixed(0)}%)
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand-secondary)]" />
                                                Interest ({(100 - principalPct).toFixed(0)}%)
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Year-wise Bar Chart */}
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-4">Year-wise Principal vs Interest</h3>
                                    <div className="flex items-end gap-1 h-48">
                                        {amortization.map(d => {
                                            const total = d.principalPaid + d.interestPaid;
                                            const pPct = total > 0 ? (d.principalPaid / total) * 100 : 50;
                                            return (
                                                <div key={d.year} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                                                    <div className="absolute bottom-full mb-1 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                                        Yr {d.year}: P {formatCurrency(d.principalPaid)} Â· I {formatCurrency(d.interestPaid)}
                                                    </div>
                                                    <div className="w-full rounded-t-sm overflow-hidden transition-all duration-300 hover:opacity-80 flex flex-col justify-end"
                                                        style={{ height: `${Math.max(4, (total / chartMax) * 100)}%` }}>
                                                        <div className="bg-[#090a3d]" style={{ height: `${pPct}%` }} />
                                                        <div className="bg-[var(--color-brand-secondary)]" style={{ height: `${100 - pPct}%` }} />
                                                    </div>
                                                    {displayYears <= 20 && <span className="text-[9px] text-gray-400 mt-1">{d.year}</span>}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {displayYears > 20 && (
                                        <div className="flex justify-between text-[9px] text-gray-400 mt-1">
                                            <span>Yr 1</span>
                                            <span>Yr {Math.floor(amortization.length / 2)}</span>
                                            <span>Yr {amortization.length}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-center gap-6 mt-3 text-xs">
                                        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#090a3d]" />Principal</span>
                                        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand-secondary)]" />Interest</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Amortization Schedule */}
                        <div className="mt-10">
                            <button
                                onClick={() => setShowSchedule(!showSchedule)}
                                className="w-full flex justify-between items-center bg-white rounded-2xl shadow-lg p-5 md:p-6 border border-gray-100 hover:border-[var(--color-brand-secondary)] transition-colors"
                            >
                                <span className="text-lg font-bold text-[#090a3d]">Year-wise Amortization Schedule</span>
                                <svg className={`w-5 h-5 text-gray-400 transition-transform ${showSchedule ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {showSchedule && (
                                <div className="bg-white rounded-b-2xl shadow-lg border border-t-0 border-gray-100 overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gray-50 text-left">
                                                <th className="px-5 py-3 font-semibold text-gray-600">Year</th>
                                                <th className="px-5 py-3 font-semibold text-gray-600 text-right">Principal Paid</th>
                                                <th className="px-5 py-3 font-semibold text-gray-600 text-right">Interest Paid</th>
                                                <th className="px-5 py-3 font-semibold text-gray-600 text-right">Outstanding Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {amortization.map((row, i) => (
                                                <tr key={row.year} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                                    <td className="px-5 py-3 font-medium text-[#090a3d]">{row.year}</td>
                                                    <td className="px-5 py-3 text-right text-green-600 font-medium">{formatCurrency(row.principalPaid)}</td>
                                                    <td className="px-5 py-3 text-right text-red-500 font-medium">{formatCurrency(row.interestPaid)}</td>
                                                    <td className="px-5 py-3 text-right font-semibold text-[#090a3d]">{formatCurrency(row.balance)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* What is EMI */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-6">What is EMI?</h2>
                        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>An <strong>Equated Monthly Instalment (EMI)</strong> is a fixed payment you make to a lender on a specific date each month until the loan is fully repaid. Each EMI consists of two components â€” a portion that goes toward repaying the principal amount and another that covers the interest charged by the lender. In the early years the interest component is larger, while toward the end most of the EMI reduces your outstanding principal.</p>
                            <p>Consider two home buyers â€” Priya takes a â‚¹50 lakh loan at 8.5% for 20 years and pays an EMI of approximately â‚¹43,391 every month. Over two decades she will pay around â‚¹54 lakh in interest on top of her â‚¹50 lakh principal. If she had chosen a 15-year tenure instead, her EMI would be higher at roughly â‚¹49,236, but her total interest cost drops to about â‚¹38.6 lakh â€” saving her more than â‚¹15 lakh. This illustrates why understanding your EMI before committing to a loan is critical for long-term financial planning.</p>
                        </div>
                    </div>
                </section>

                {/* How EMI Calculator Works */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-6">How Does the EMI Calculator Work?</h2>
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 mb-8">
                            <p className="text-gray-600 mb-4">Home loan EMI is computed using the standard reducing-balance formula:</p>
                            <div className="bg-gray-50 rounded-xl p-5 text-center mb-4">
                                <p className="font-mono text-lg font-bold text-[#090a3d]">EMI = P Ã— r Ã— (1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> âˆ’ 1)</p>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start gap-2"><span className="font-mono font-bold text-[var(--color-brand-secondary)]">P</span> = Principal loan amount (the total amount you borrow)</li>
                                <li className="flex items-start gap-2"><span className="font-mono font-bold text-[var(--color-brand-secondary)]">r</span> = Monthly interest rate = Annual rate / 12 / 100</li>
                                <li className="flex items-start gap-2"><span className="font-mono font-bold text-[var(--color-brand-secondary)]">n</span> = Total number of monthly instalments (tenure in months)</li>
                                <li className="flex items-start gap-2"><span className="font-mono font-bold text-[var(--color-brand-secondary)]">EMI</span> = The fixed amount you pay every month until the loan is fully repaid</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                            <h3 className="text-lg font-bold text-[#090a3d] mb-4">Quick Example</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                For a loan of <strong>â‚¹30,00,000</strong> at <strong>8.5%</strong> annual interest for <strong>20 years</strong> (240 months): the monthly rate r = 0.085/12 = 0.007083. Plugging into the formula, the EMI works out to approximately <strong>â‚¹26,035</strong> per month. Over 20 years you repay a total of about â‚¹62.48 lakh, of which â‚¹32.48 lakh is interest and â‚¹30 lakh is your original principal.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Factors Affecting Home Loan EMI */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Factors Affecting Your Home Loan EMI</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: 'ðŸ“Š',
                                    title: 'Interest Rate',
                                    desc: 'Even a 0.5% difference in interest rate can change your total outgo by several lakhs over a 20-year loan. Floating rates move with RBI repo rate changes, while fixed rates stay constant. Always compare rates across lenders before finalising.',
                                },
                                {
                                    icon: 'â³',
                                    title: 'Loan Tenure',
                                    desc: 'A longer tenure lowers your monthly EMI but significantly increases total interest paid. For example, choosing 20 years over 15 years may reduce EMI by â‚¹5,000 per month but add â‚¹8â€“10 lakh in total interest. Strike a balance that fits your monthly budget.',
                                },
                                {
                                    icon: 'ðŸ’°',
                                    title: 'Loan Amount',
                                    desc: 'A larger down payment means a smaller loan and lower EMI. Most lenders finance up to 75â€“90% of property value. Aim for at least 20% down payment to keep EMI manageable and avoid mortgage insurance requirements.',
                                },
                                {
                                    icon: 'ðŸ”',
                                    title: 'Prepayment & Part-Payment',
                                    desc: 'Making occasional lump-sum payments toward your principal can dramatically shorten your loan tenure and reduce total interest. RBI guidelines prohibit prepayment penalties on floating-rate home loans, so take advantage of bonuses and windfalls.',
                                },
                            ].map((factor, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all">
                                    <span className="text-3xl mb-3 block">{factor.icon}</span>
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-2">{factor.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{factor.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tips to Reduce Your EMI */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Tips to Reduce Your Home Loan EMI</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: 'ðŸ¦', title: 'Compare Lenders', desc: 'Do not accept the first offer. Compare interest rates from banks, housing finance companies, and NBFCs. Even a 0.25% lower rate saves lakhs.' },
                                { icon: 'ðŸ’µ', title: 'Increase Down Payment', desc: 'Pay 25â€“30% upfront instead of the minimum 10â€“20%. A smaller loan means a smaller EMI and less total interest over the life of the loan.' },
                                { icon: 'ðŸ“‰', title: 'Negotiate Your Rate', desc: 'Existing borrowers with a strong repayment track record can request a rate reduction. Banks often agree to retain good customers.' },
                                { icon: 'ðŸ”„', title: 'Refinance / Balance Transfer', desc: 'If another lender offers a significantly lower rate, transfer your home loan. Most banks charge minimal processing fees for balance transfers.' },
                                { icon: 'ðŸ’¸', title: 'Make Part-Prepayments', desc: 'Use annual bonuses or surplus savings to make lump-sum payments toward the principal. This directly reduces the outstanding balance and future interest.' },
                                { icon: 'ðŸ“…', title: 'Choose a Shorter Tenure', desc: 'If your monthly budget allows, pick 15 years over 20. The EMI is higher but total interest drops dramatically â€” often saving â‚¹10 lakh or more.' },
                                { icon: 'â­', title: 'Maintain a High Credit Score', desc: 'A CIBIL score above 750 qualifies you for the best interest rates. Pay all existing EMIs and credit card bills on time to keep your score high.' },
                                { icon: 'ðŸ‘¥', title: 'Apply With a Co-Applicant', desc: 'Adding a co-borrower (spouse or parent) with stable income can help you qualify for a larger loan at a lower rate, reducing the effective EMI burden.' },
                            ].map((tip, i) => (
                                <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                                    <span className="text-2xl mb-2 block">{tip.icon}</span>
                                    <h3 className="text-sm font-bold text-[#090a3d] mb-1">{tip.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Types of Home Loans */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Types of Home Loans</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: 'ðŸ”’',
                                    title: 'Fixed Rate Home Loan',
                                    desc: 'The interest rate stays constant throughout the loan tenure, regardless of market fluctuations. Your EMI remains predictable and unchanged. Best suited for borrowers who want certainty in monthly outflows and believe interest rates may rise in the future.',
                                    pros: 'Stable EMI, easy budgeting, no rate-hike risk',
                                    cons: 'Usually 0.5â€“1% higher than floating rates, no benefit if rates fall',
                                },
                                {
                                    icon: 'ðŸ“ˆ',
                                    title: 'Floating Rate Home Loan',
                                    desc: 'The interest rate is linked to an external benchmark such as the RBI repo rate and adjusts periodically. Your EMI changes when the benchmark moves. Most popular choice in India because floating rates are typically lower than fixed rates.',
                                    pros: 'Lower initial rate, benefits from rate cuts, no prepayment penalty',
                                    cons: 'EMI can increase unpredictably, harder to budget long-term',
                                },
                                {
                                    icon: 'âš–ï¸',
                                    title: 'Hybrid Home Loan',
                                    desc: 'Combines fixed and floating rates â€” the rate stays fixed for an initial period (typically 2â€“5 years) and then converts to floating for the remaining tenure. Gives you stability in the early years when cash flow is tight.',
                                    pros: 'Initial stability, transitions to lower floating rate',
                                    cons: 'Fixed period rate may be higher than pure floating, terms vary by lender',
                                },
                            ].map((type, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all">
                                    <span className="text-3xl mb-3 block">{type.icon}</span>
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-2">{type.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{type.desc}</p>
                                    <div className="space-y-2 text-xs">
                                        <p><span className="font-semibold text-green-600">âœ“ Pros:</span> <span className="text-gray-500">{type.pros}</span></p>
                                        <p><span className="font-semibold text-red-500">âœ— Cons:</span> <span className="text-gray-500">{type.cons}</span></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Use */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">How to Use Our EMI Calculator</h2>
                        <div className="space-y-4">
                            {[
                                { step: '1', title: 'Enter Your Loan Amount', desc: 'Use the slider or type the total home loan principal you plan to borrow. Choose from preset amounts for quick selection.' },
                                { step: '2', title: 'Set the Interest Rate', desc: 'Enter the annual interest rate offered by your lender. Most home loans in India range between 8% and 10%. Adjust by 0.1% increments for precision.' },
                                { step: '3', title: 'Choose Loan Tenure', desc: 'Select your repayment period in years or months using the toggle. Home loans typically range from 5 to 30 years. Longer tenure means lower EMI but higher total interest.' },
                                { step: '4', title: 'View Your Monthly EMI', desc: 'The calculator instantly displays your monthly EMI, total interest payable, and total repayment amount with a principal-to-interest ratio bar.' },
                                { step: '5', title: 'Analyse the Amortization Schedule', desc: 'Expand the year-wise breakdown to see exactly how much principal and interest you pay each year and how your outstanding balance decreases over time.' },
                                { step: '6', title: 'Compare Different Scenarios', desc: 'Adjust the loan amount, rate, or tenure to compare outcomes. Find the combination that fits your budget while minimising total interest cost.' },
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
                                {
                                    q: 'What is the EMI formula used in this calculator?',
                                    a: 'The calculator uses the standard reducing-balance formula: EMI = P Ã— r Ã— (1+r)^n / ((1+r)^n âˆ’ 1), where P is the principal loan amount, r is the monthly interest rate (annual rate divided by 12 and by 100), and n is the total number of monthly instalments. This is the same formula banks use to compute your repayment schedule.',
                                },
                                {
                                    q: 'How does a higher interest rate affect my EMI?',
                                    a: 'A higher interest rate directly increases your monthly EMI and the total interest paid over the loan tenure. For instance, on a â‚¹50 lakh loan for 20 years, a rate of 8.5% gives an EMI of about â‚¹43,391, while 9.5% raises it to â‚¹46,607 â€” an increase of over â‚¹3,200 per month and roughly â‚¹7.7 lakh more in total interest.',
                                },
                                {
                                    q: 'Is a longer tenure better because it lowers the EMI?',
                                    a: 'A longer tenure does reduce the monthly EMI, making it more affordable month-to-month. However, you end up paying significantly more in total interest. A â‚¹40 lakh loan at 8.5% costs about â‚¹28.6 lakh in interest over 15 years but roughly â‚¹43.3 lakh over 25 years. Choose a tenure that balances affordability with total cost.',
                                },
                                {
                                    q: 'Can I prepay my home loan to reduce interest?',
                                    a: 'Yes. On floating-rate home loans, RBI has prohibited banks from charging prepayment or foreclosure penalties. Making part-prepayments â€” even small amounts â€” directly reduces your outstanding principal, which in turn lowers the interest charged in subsequent months. This can shorten your loan tenure by years.',
                                },
                                {
                                    q: 'What is the difference between flat rate and reducing balance rate?',
                                    a: 'Flat rate calculates interest on the original loan amount throughout the tenure, while reducing balance rate calculates interest on the outstanding principal that decreases with each EMI payment. Almost all home loans in India use the reducing balance method, which is fairer to the borrower. Our calculator uses the reducing balance formula.',
                                },
                                {
                                    q: 'How much home loan can I afford?',
                                    a: 'Financial experts recommend that your total EMI obligations (including home loan) should not exceed 40â€“50% of your monthly take-home salary. Banks typically use a similar ratio when assessing eligibility. Use this calculator to work backward â€” enter different loan amounts until the EMI fits comfortably within your budget.',
                                },
                                {
                                    q: 'What is an amortization schedule?',
                                    a: 'An amortization schedule is a detailed table that shows the breakup of each EMI payment into principal and interest components for every period (month or year) of the loan. Early EMIs have a higher interest component; as the principal reduces over time, the interest portion shrinks and more of each payment goes toward the principal.',
                                },
                                {
                                    q: 'Does the calculator account for processing fees and charges?',
                                    a: 'This calculator computes EMI based purely on the principal, interest rate, and tenure. It does not include processing fees, legal charges, stamp duty, or insurance premiums. These one-time or periodic costs are separate and should be factored into your overall home purchase budget independently.',
                                },
                                {
                                    q: 'Should I choose a fixed or floating interest rate?',
                                    a: 'In India, most borrowers prefer floating rate loans because they are typically 0.5â€“1% lower than fixed rates and benefit from RBI rate cuts. Fixed rates offer EMI certainty but are costlier. If you expect interest rates to fall or remain stable, floating is usually better. If you want absolute predictability, fixed may suit you.',
                                },
                                {
                                    q: 'How can I reduce my existing home loan EMI?',
                                    a: 'You have several options: negotiate a lower rate with your current lender, transfer your loan to a lender offering a better rate (balance transfer), make part-prepayments to reduce principal, or extend the tenure to spread payments over more months. Improving your credit score can also help you qualify for lower rates during refinancing.',
                                },
                            ].map((faq, i) => (
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
                <section className="py-16 bg-gradient-to-r from-[#090a3d] to-[#1a1c6e] text-white text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Home Loan?</h2>
                        <p className="text-gray-300 mb-8 text-lg">Our financial experts can help you find the best home loan rates, guide you through the application process, and ensure you get the most favourable terms.</p>
                        <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-xl">
                            Talk to Our Experts
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

