import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

function formatCurrency(value: number): string {
    if (value >= 10000000) return `â‚¹${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `â‚¹${(value / 100000).toFixed(2)} L`;
    return `â‚¹${value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
}

function calculateSIP(monthly: number, annualRate: number, years: number) {
    const n = years * 12;
    const monthlyRate = Math.pow(1 + annualRate / 100, 1 / 12) - 1;
    if (monthlyRate === 0) return { invested: monthly * n, returns: 0, total: monthly * n };
    const futureValue = monthly * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate);
    const invested = monthly * n;
    return { invested, returns: futureValue - invested, total: futureValue };
}

function calculateStepUpSIP(monthly: number, annualRate: number, years: number, stepUp: number) {
    const monthlyRate = Math.pow(1 + annualRate / 100, 1 / 12) - 1;
    let total = 0;
    let invested = 0;
    let currentMonthly = monthly;
    for (let year = 0; year < years; year++) {
        for (let month = 0; month < 12; month++) {
            const monthsRemaining = (years - year) * 12 - month;
            total += currentMonthly * Math.pow(1 + monthlyRate, monthsRemaining);
            invested += currentMonthly;
        }
        currentMonthly = currentMonthly * (1 + stepUp / 100);
    }
    return { invested, returns: total - invested, total };
}

const PRESETS = [1000, 5000, 10000, 25000, 50000, 100000];

export default function SipCalculator() {
    const [mode, setMode] = useState<'monthly' | 'stepup' | 'lumpsum'>('monthly');
    const [monthly, setMonthly] = useState(10000);
    const [rate, setRate] = useState(12);
    const [years, setYears] = useState(10);
    const [stepUp, setStepUp] = useState(10);
    const [lumpsum, setLumpsum] = useState(500000);

    const result = useMemo(() => {
        if (mode === 'monthly') return calculateSIP(monthly, rate, years);
        if (mode === 'stepup') return calculateStepUpSIP(monthly, rate, years, stepUp);
        // lumpsum
        const total = lumpsum * Math.pow(1 + rate / 100, years);
        return { invested: lumpsum, returns: total - lumpsum, total };
    }, [mode, monthly, rate, years, stepUp, lumpsum]);

    const investedPct = result.total > 0 ? (result.invested / result.total) * 100 : 50;

    // Year-wise data for chart
    const yearData = useMemo(() => {
        const data: { year: number; invested: number; value: number }[] = [];
        for (let y = 1; y <= years; y++) {
            if (mode === 'monthly') {
                const r = calculateSIP(monthly, rate, y);
                data.push({ year: y, invested: r.invested, value: r.total });
            } else if (mode === 'stepup') {
                const r = calculateStepUpSIP(monthly, rate, y, stepUp);
                data.push({ year: y, invested: r.invested, value: r.total });
            } else {
                const total = lumpsum * Math.pow(1 + rate / 100, y);
                data.push({ year: y, invested: lumpsum, value: total });
            }
        }
        return data;
    }, [mode, monthly, rate, years, stepUp, lumpsum]);

    const maxValue = yearData.length > 0 ? Math.max(...yearData.map(d => d.value)) : 1;

    return (
        <div className="min-h-screen flex flex-col font-sans">
                        <SEO
                title="SIP Calculator – Plan Mutual Fund Investments Free"
                description="Free SIP Calculator online — calculate the future value of your Systematic Investment Plan with monthly contributions. Plan your wealth creation with accurate projections."
                canonical="/sip-calculator"
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
                            SIP Calculator <span className="text-[var(--color-brand-secondary)]">Online</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Plan your wealth-building journey â€” estimate returns, compare strategies, and build a personalised investment plan to achieve your financial goals.
                        </p>
                    </div>
                </section>

                {/* Calculator Section */}
                <section className="py-12 md:py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Mode Tabs */}
                        <div className="flex justify-center gap-2 mb-10">
                            {[
                                { key: 'monthly' as const, label: 'Monthly SIP' },
                                { key: 'stepup' as const, label: 'Step-Up SIP' },
                                { key: 'lumpsum' as const, label: 'Lump Sum' },
                            ].map(tab => (
                                <button key={tab.key} onClick={() => setMode(tab.key)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${mode === tab.key ? 'bg-[var(--color-brand-secondary)] text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-[var(--color-brand-secondary)] hover:text-[var(--color-brand-secondary)]'}`}>
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Inputs */}
                            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                {mode !== 'lumpsum' && (
                                    <>
                                        {/* Monthly Amount */}
                                        <div className="mb-6">
                                            <div className="flex justify-between items-center mb-2">
                                                <label className="text-sm font-semibold text-gray-700">Monthly Investment</label>
                                                <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                                    <span className="text-sm text-gray-500">â‚¹</span>
                                                    <input type="number" value={monthly} onChange={e => setMonthly(Math.max(100, Number(e.target.value)))}
                                                        className="w-24 text-sm font-semibold text-right bg-transparent focus:outline-none" />
                                                </div>
                                            </div>
                                            <input type="range" min={500} max={200000} step={500} value={monthly} onChange={e => setMonthly(Number(e.target.value))}
                                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {PRESETS.map(p => (
                                                    <button key={p} onClick={() => setMonthly(p)}
                                                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${monthly === p ? 'bg-[var(--color-brand-secondary)] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                                        â‚¹{p.toLocaleString('en-IN')}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {mode === 'lumpsum' && (
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="text-sm font-semibold text-gray-700">Lump Sum Amount</label>
                                            <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                                <span className="text-sm text-gray-500">â‚¹</span>
                                                <input type="number" value={lumpsum} onChange={e => setLumpsum(Math.max(1000, Number(e.target.value)))}
                                                    className="w-28 text-sm font-semibold text-right bg-transparent focus:outline-none" />
                                            </div>
                                        </div>
                                        <input type="range" min={10000} max={10000000} step={10000} value={lumpsum} onChange={e => setLumpsum(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                                    </div>
                                )}

                                {/* Return Rate */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-semibold text-gray-700">Expected Annual Return</label>
                                        <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                            <input type="number" value={rate} onChange={e => setRate(Math.min(30, Math.max(1, Number(e.target.value))))}
                                                className="w-12 text-sm font-semibold text-right bg-transparent focus:outline-none" />
                                            <span className="text-sm text-gray-500">%</span>
                                        </div>
                                    </div>
                                    <input type="range" min={1} max={30} step={0.5} value={rate} onChange={e => setRate(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                                    <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1%</span><span>30%</span></div>
                                </div>

                                {/* Duration */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-semibold text-gray-700">Investment Duration</label>
                                        <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                            <input type="number" value={years} onChange={e => setYears(Math.min(40, Math.max(1, Number(e.target.value))))}
                                                className="w-12 text-sm font-semibold text-right bg-transparent focus:outline-none" />
                                            <span className="text-sm text-gray-500">Yrs</span>
                                        </div>
                                    </div>
                                    <input type="range" min={1} max={40} step={1} value={years} onChange={e => setYears(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                                    <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1 yr</span><span>40 yrs</span></div>
                                </div>

                                {/* Step-Up % */}
                                {mode === 'stepup' && (
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="text-sm font-semibold text-gray-700">Annual Step-Up</label>
                                            <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                                <input type="number" value={stepUp} onChange={e => setStepUp(Math.min(50, Math.max(1, Number(e.target.value))))}
                                                    className="w-12 text-sm font-semibold text-right bg-transparent focus:outline-none" />
                                                <span className="text-sm text-gray-500">%</span>
                                            </div>
                                        </div>
                                        <input type="range" min={1} max={50} step={1} value={stepUp} onChange={e => setStepUp(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]" />
                                        <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1%</span><span>50%</span></div>
                                    </div>
                                )}
                            </div>

                            {/* Results */}
                            <div className="space-y-6">
                                {/* Summary Cards */}
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-5">Investment Summary</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">Total Invested</span>
                                            <span className="text-lg font-bold text-[#090a3d]">{formatCurrency(result.invested)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span className="text-sm text-gray-500">Estimated Returns</span>
                                            <span className="text-lg font-bold text-green-600">{formatCurrency(result.returns)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3">
                                            <span className="text-sm font-semibold text-gray-700">Total Value</span>
                                            <span className="text-2xl font-bold text-[var(--color-brand-secondary)]">{formatCurrency(result.total)}</span>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-5">
                                        <div className="h-4 rounded-full overflow-hidden flex bg-gray-100">
                                            <div className="bg-[#090a3d] rounded-l-full transition-all duration-500" style={{ width: `${investedPct}%` }} />
                                            <div className="bg-[var(--color-brand-secondary)] rounded-r-full transition-all duration-500" style={{ width: `${100 - investedPct}%` }} />
                                        </div>
                                        <div className="flex justify-between mt-2 text-xs">
                                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#090a3d]" />Invested ({investedPct.toFixed(0)}%)</span>
                                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand-secondary)]" />Returns ({(100 - investedPct).toFixed(0)}%)</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Year-wise Chart */}
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-4">Year-wise Growth</h3>
                                    <div className="flex items-end gap-1 h-48">
                                        {yearData.map(d => (
                                            <div key={d.year} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                                                <div className="absolute bottom-full mb-1 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                                    Yr {d.year}: {formatCurrency(d.value)}
                                                </div>
                                                <div className="w-full rounded-t-sm bg-gradient-to-t from-[#090a3d] to-[var(--color-brand-secondary)] transition-all duration-300 hover:opacity-80"
                                                    style={{ height: `${Math.max(4, (d.value / maxValue) * 100)}%` }} />
                                                {years <= 20 && <span className="text-[9px] text-gray-400 mt-1">{d.year}</span>}
                                            </div>
                                        ))}
                                    </div>
                                    {years > 20 && (
                                        <div className="flex justify-between text-[9px] text-gray-400 mt-1">
                                            <span>Yr 1</span><span>Yr {Math.floor(years / 2)}</span><span>Yr {years}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is SIP */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-6">What is a SIP?</h2>
                        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>A <strong>Systematic Investment Plan (SIP)</strong> allows you to invest a fixed amount regularly in mutual funds. You contribute weekly, monthly, or quarterly, and the money grows through compounding, building value over time. It is a great investment instrument with much lower risks compared to trading stocks and better returns than bank savings.</p>
                            <p>Imagine two friends â€” Asha saves â‚¹5,000 every month in a regular savings account. Even after five years, her balance grows only slightly because the bank offers very low interest. Rohan, on the other hand, invests the same â‚¹5,000 every month through a SIP. Over time, compounding makes his money grow at a much faster pace. Even though both invest the same amount, Rohan ends up with a much larger corpus because SIP harnesses the power of compounding.</p>
                        </div>
                    </div>
                </section>

                {/* How SIP Calculator Works */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-6">How Does a SIP Calculator Work?</h2>
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 mb-8">
                            <p className="text-gray-600 mb-4">SIP calculations are based on monthly compounding. The formula used:</p>
                            <div className="bg-gray-50 rounded-xl p-5 text-center mb-4">
                                <p className="font-mono text-lg font-bold text-[#090a3d]">M = P Ã— [(1 + i)<sup>n</sup> âˆ’ 1] / i Ã— (1 + i)</p>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start gap-2"><span className="font-mono font-bold text-[var(--color-brand-secondary)]">M</span> = Maturity value (total future value)</li>
                                <li className="flex items-start gap-2"><span className="font-mono font-bold text-[var(--color-brand-secondary)]">P</span> = Monthly investment amount</li>
                                <li className="flex items-start gap-2"><span className="font-mono font-bold text-[var(--color-brand-secondary)]">n</span> = Total number of monthly installments</li>
                                <li className="flex items-start gap-2"><span className="font-mono font-bold text-[var(--color-brand-secondary)]">i</span> = Monthly rate of return = (1 + Annual Return)<sup>1/12</sup> âˆ’ 1</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Types of SIP */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Types of SIP Calculator</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: 'ðŸ“…', title: 'Monthly SIP', desc: 'The most common format â€” invest a fixed amount every month. Compounding applies monthly, making it ideal for salaried individuals.' },
                                { icon: 'ðŸ“ˆ', title: 'Step-Up SIP', desc: 'Increase your SIP amount annually (aligned with salary increments). Dramatically increases your final corpus compared to flat SIP.' },
                                { icon: 'ðŸ’°', title: 'Lump Sum + SIP', desc: 'Combine a one-time lump sum investment with regular SIPs. Evaluate returns when you invest a big amount initially plus monthly SIPs.' },
                                { icon: 'ðŸŽ¯', title: 'Goal-Based SIP', desc: 'Plan SIP based on a financial goal â€” buying a house, child education, or retirement. Find required monthly SIP to reach your goal.' },
                                { icon: 'ðŸ“Š', title: 'SIP Return (XIRR)', desc: 'Calculate actual returns on real-life SIP investments where dates and amounts may vary. Shows actual return percentage.' },
                                { icon: 'â°', title: 'SIP Delay Calculator', desc: 'See how delaying SIPs by even a few months affects long-term wealth. Understand the cost of starting late.' },
                            ].map((type, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all">
                                    <span className="text-3xl mb-3 block">{type.icon}</span>
                                    <h3 className="text-lg font-bold text-[#090a3d] mb-2">{type.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{type.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Benefits of SIP Investing</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: 'ðŸ”„', title: 'Rupee Cost Averaging', desc: 'Investing fixed amounts during different market levels reduces the average purchase cost of units.' },
                                { icon: 'ðŸ“Š', title: 'Power of Compounding', desc: 'Your returns get reinvested, increasing the final value exponentially over time.' },
                                { icon: 'ðŸŽ¯', title: 'Goal Tracking', desc: 'Measure progress against financial targets like education, retirement, or property.' },
                                { icon: 'ðŸ›¡ï¸', title: 'No Timing Pressure', desc: 'Invest through all market conditions. Spreads risk and avoids emotional decisions.' },
                                { icon: 'ðŸ’ª', title: 'Saving Discipline', desc: 'Create a routine that supports long-term financial planning with regular contributions.' },
                                { icon: 'ðŸ“ˆ', title: 'Inflation Protection', desc: 'Long-term SIP returns help beat inflation when invested for extended periods.' },
                                { icon: 'ðŸ’¼', title: 'Salaried-Friendly', desc: 'Monthly income aligns perfectly with monthly SIP contributions from your salary.' },
                                { icon: 'ðŸ”§', title: 'Flexible & Simple', desc: 'Start with as low as â‚¹100/month. Increase, pause, or stop anytime without penalties.' },
                            ].map((benefit, i) => (
                                <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                                    <span className="text-2xl mb-2 block">{benefit.icon}</span>
                                    <h3 className="text-sm font-bold text-[#090a3d] mb-1">{benefit.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Use */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">How to Use Our SIP Calculator</h2>
                        <div className="space-y-4">
                            {[
                                { step: '1', title: 'Choose Your SIP Type', desc: 'Select Monthly SIP, Step-Up SIP, or Lump Sum from the tabs above.' },
                                { step: '2', title: 'Enter Investment Amount', desc: 'Use the slider or type your monthly investment amount. Use presets for quick selection.' },
                                { step: '3', title: 'Set Expected Return Rate', desc: 'Choose an expected annual return rate. Equity funds typically deliver 12-15% CAGR historically.' },
                                { step: '4', title: 'Select Duration', desc: 'Choose your investment time horizon from 1 to 40 years.' },
                                { step: '5', title: 'View Results', desc: 'See your total investment, estimated returns, total value, and year-wise growth chart instantly.' },
                                { step: '6', title: 'Compare Scenarios', desc: 'Adjust inputs to study different outcomes and find the strategy that best fits your goals.' },
                            ].map(s => (
                                <div key={s.step} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
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
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] text-center mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: 'What is the minimum amount to start a SIP?', a: 'Most mutual funds in India allow SIP investments starting from â‚¹100 to â‚¹500 per month. Our calculator supports amounts from â‚¹500 onwards.' },
                                { q: 'What return rate should I use for SIP calculations?', a: 'For equity mutual funds, 12-15% CAGR is a reasonable historical benchmark. For balanced funds, use 9-12%. For debt funds, 6-8% is standard. Past returns do not guarantee future performance.' },
                                { q: 'Is SIP better than lump sum investing?', a: 'SIP reduces timing risk through rupee cost averaging and builds investment discipline. Lump sum can give higher returns in a consistently rising market. Many investors use a combination of both strategies.' },
                                { q: 'What is a Step-Up SIP?', a: 'A Step-Up SIP automatically increases your monthly contribution by a fixed percentage each year â€” typically aligned with your salary increment. This dramatically increases your final corpus compared to a flat SIP.' },
                                { q: 'Are SIP returns guaranteed?', a: 'No. SIP returns depend on market performance and the type of mutual fund chosen. The calculator provides estimates based on assumed return rates. Actual returns may vary.' },
                                { q: 'Can I stop or pause my SIP anytime?', a: 'Yes. SIPs are flexible â€” you can increase, decrease, pause, or stop your SIP at any time without any exit penalties (though some funds may have exit loads for early redemption).' },
                                { q: 'How is SIP different from a recurring deposit?', a: 'SIP invests in mutual funds (market-linked, potentially higher returns), while RD invests in bank deposits (fixed returns, lower risk). SIP offers better long-term wealth creation potential but comes with market risk.' },
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

                {/* CTA */}
                <section className="py-16 bg-gradient-to-r from-[#090a3d] to-[#1a1c6e] text-white text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help With Financial Planning?</h2>
                        <p className="text-gray-300 mb-8 text-lg">Our experts can help you choose the right mutual funds and create a personalized SIP strategy for your financial goals.</p>
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

