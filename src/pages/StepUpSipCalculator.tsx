import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

/* â”€â”€â”€ helpers â”€â”€â”€ */

function formatCurrency(value: number): string {
  if (value >= 1_00_00_000) return `₹${(value / 1_00_00_000).toFixed(2)} Cr`;
  if (value >= 1_00_000) return `₹${(value / 1_00_000).toFixed(2)} L`;
  return `₹${value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
}

function formatCurrencyFull(value: number): string {
  return `₹${Math.round(value).toLocaleString('en-IN')}`;
}

interface SipResult {
  invested: number;
  returns: number;
  total: number;
}

interface YearRow {
  year: number;
  monthlySip: number;
  annualInvestment: number;
  cumulativeInvested: number;
  corpusValue: number;
}

function calculateStepUpSIP(
  monthly: number,
  annualRate: number,
  years: number,
  stepUp: number,
): { result: SipResult; yearData: YearRow[] } {
  const monthlyRate = Math.pow(1 + annualRate / 100, 1 / 12) - 1;
  let totalCorpus = 0;
  let totalInvested = 0;
  let currentMonthly = monthly;
  const yearData: YearRow[] = [];

  for (let y = 1; y <= years; y++) {
    for (let m = 1; m <= 12; m++) {
      const monthsRemaining = (years - y) * 12 + (12 - m) + 1;
      totalCorpus += currentMonthly * Math.pow(1 + monthlyRate, monthsRemaining);
      totalInvested += currentMonthly;
    }
    yearData.push({
      year: y,
      monthlySip: Math.round(currentMonthly),
      annualInvestment: Math.round(currentMonthly * 12),
      cumulativeInvested: Math.round(totalInvested),
      corpusValue: Math.round(totalCorpus),
    });
    currentMonthly = currentMonthly * (1 + stepUp / 100);
  }

  return {
    result: {
      invested: totalInvested,
      returns: totalCorpus - totalInvested,
      total: totalCorpus,
    },
    yearData,
  };
}

function calculateRegularSIP(monthly: number, annualRate: number, years: number): SipResult {
  const monthlyRate = Math.pow(1 + annualRate / 100, 1 / 12) - 1;
  const n = years * 12;
  if (monthlyRate === 0) return { invested: monthly * n, returns: 0, total: monthly * n };
  const futureValue =
    monthly * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate);
  const invested = monthly * n;
  return { invested, returns: futureValue - invested, total: futureValue };
}

/* â”€â”€â”€ data â”€â”€â”€ */

const PRESETS = [5000, 10000, 25000, 50000, 100000];

const BENEFITS = [
  {
    icon: 'ðŸ“ˆ',
    title: 'Aligned with Salary Growth',
    desc: 'As your income rises each year, your SIP contribution scales proportionally””no lifestyle mismatch between what you earn and what you save.',
  },
  {
    icon: 'ðŸ›¡ï¸',
    title: 'Beats Inflation Naturally',
    desc: 'A fixed SIP loses real purchasing power over time. Step-Up SIP compensates by increasing your investment, keeping your future corpus inflation-adjusted.',
  },
  {
    icon: 'ðŸ’°',
    title: 'Significantly Higher Corpus',
    desc: 'Even a modest 10% annual step-up can nearly double your final corpus compared to a regular SIP over a 20-year horizon.',
  },
  {
    icon: 'â±ï¸',
    title: 'Reach Goals Faster',
    desc: 'Whether it is retirement, a child education fund, or a dream home””step-up SIP accelerates your journey towards every financial milestone.',
  },
  {
    icon: 'ðŸ§ ',
    title: 'Instils Financial Discipline',
    desc: 'By committing to a yearly increase upfront, you automate better saving habits without having to make a conscious decision each year.',
  },
  {
    icon: 'ðŸ”„',
    title: 'Flexible & Easy to Implement',
    desc: 'Most mutual fund platforms let you set an automatic annual step-up, so the increase happens seamlessly””no paperwork, no reminders.',
  },
  {
    icon: 'ðŸ“Š',
    title: 'Power of Compounding Amplified',
    desc: 'Higher contributions in later years still benefit from compounding, creating an exponential wealth-building effect over long horizons.',
  },
  {
    icon: 'ðŸŽ¯',
    title: 'Gradual & Comfortable Increase',
    desc: 'You do not need to invest a large sum upfront. Start small and let the step-up mechanism progressively build your investment over time.',
  },
];

const SCENARIOS = [
  {
    icon: 'ðŸŽ“',
    title: 'Building a Child Education Fund',
    desc: 'Education costs rise 8-10% annually. A step-up SIP ensures your fund keeps pace with tuition inflation over 15-18 years.',
  },
  {
    icon: 'ðŸ–ï¸',
    title: 'Planning for Early Retirement',
    desc: 'If you want to retire at 45 instead of 60, a step-up SIP dramatically increases the corpus you can accumulate in a shorter window.',
  },
  {
    icon: 'ðŸ ',
    title: 'Saving for a Home Down Payment',
    desc: 'Property prices appreciate each year. Step up your SIP to match rising real-estate costs and hit your down-payment target on time.',
  },
  {
    icon: 'ðŸ’¼',
    title: 'Salaried Professionals with Annual Increments',
    desc: 'If you receive 8–15% annual raises, routing even half of each raise into a step-up SIP is a painless wealth-building strategy.',
  },
  {
    icon: 'ðŸŒ',
    title: 'Long-Term Wealth Creation',
    desc: 'For horizons of 15+ years, the difference between regular and step-up SIP becomes massive””making it the smarter default choice.',
  },
];

const STEPS = [
  {
    step: 1,
    title: 'Enter Your Monthly SIP Amount',
    desc: 'Start with the monthly amount you can comfortably invest today. Use the slider or type in a value between ₹500 and ₹5,00,000.',
  },
  {
    step: 2,
    title: 'Set the Annual Step-Up Percentage',
    desc: 'Choose how much you want to increase your SIP every year. A 10% step-up is a popular default that mirrors typical salary increments.',
  },
  {
    step: 3,
    title: 'Choose Expected Return Rate',
    desc: 'Enter the expected annual return from your mutual fund. Equity funds typically deliver 10–14% over long periods; debt funds around 6–8%.',
  },
  {
    step: 4,
    title: 'Select Investment Duration',
    desc: 'Pick the number of years you plan to stay invested. The longer the duration, the more dramatic the compounding effect.',
  },
  {
    step: 5,
    title: 'Review Your Results',
    desc: 'Instantly see your total invested amount, estimated returns, future value, a visual bar chart of year-wise growth, and a comparison with regular SIP.',
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is Step-Up SIP?',
    a: 'Step-Up SIP (also called Top-Up SIP) is a systematic investment plan where your monthly contribution automatically increases by a fixed percentage every year. For example, if you start a ₹10,000/month SIP with a 10% annual step-up, your monthly investment becomes ₹11,000 in year 2, ₹12,100 in year 3, and so on.',
  },
  {
    q: 'How is Step-Up SIP different from Regular SIP?',
    a: 'In a regular SIP, you invest the same fixed amount every month throughout the entire tenure. In a Step-Up SIP, the monthly amount increases by a predetermined percentage at the start of each year. This means you invest more over time, which leads to a significantly larger corpus thanks to the power of compounding.',
  },
  {
    q: 'What is a good step-up percentage to choose?',
    a: 'A 10% annual step-up is a balanced starting point, as it roughly mirrors the average salary increment for salaried professionals in India. However, the ideal percentage depends on your income growth trajectory. If your income grows faster (15–20%), you can be more aggressive. The key is to pick a rate you can sustain comfortably for the entire investment period.',
  },
  {
    q: 'Does Step-Up SIP guarantee higher returns?',
    a: 'Step-Up SIP does not guarantee higher returns in percentage terms””the return rate depends on the mutual fund you choose. However, because you are investing a larger absolute amount over time, your total corpus will be substantially higher compared to a regular SIP with the same starting amount and return rate.',
  },
  {
    q: 'Can I set up Step-Up SIP with any mutual fund?',
    a: 'Most mutual fund houses and investment platforms in India support Step-Up or Top-Up SIP functionality. You can typically set the step-up percentage and frequency (annual is most common) when registering your SIP. Check with your fund house or distributor for exact steps.',
  },
  {
    q: 'What happens if I cannot afford the increased SIP amount in a particular year?',
    a: 'You can usually modify or pause the step-up feature at any time. The underlying SIP continues at the last set amount. It is always better to invest at a slightly lower step-up rate than to stop investing entirely. Many platforms also allow you to reduce the step-up percentage mid-way.',
  },
  {
    q: 'Is Step-Up SIP better for long-term or short-term goals?',
    a: 'Step-Up SIP is most powerful for long-term goals (10+ years) because the increased contributions in later years benefit enormously from compounding. For short-term goals (1–3 years), the difference between regular and step-up SIP is marginal, and a regular SIP or lump-sum investment may suffice.',
  },
  {
    q: 'How does this calculator compute the future value?',
    a: 'The calculator compounds each monthly investment at the expected monthly return rate for the remaining months of the investment period. At the start of each new year, the monthly SIP amount is increased by the step-up percentage. The total future value is the sum of all these individually compounded monthly investments.',
  },
];

/* â”€â”€â”€ component â”€â”€â”€ */

export default function StepUpSipCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [stepUp, setStepUp] = useState(10);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const { result, yearData } = useMemo(
    () => calculateStepUpSIP(monthly, rate, years, stepUp),
    [monthly, rate, years, stepUp],
  );

  const regularResult = useMemo(
    () => calculateRegularSIP(monthly, rate, years),
    [monthly, rate, years],
  );

  const investedPct = result.total > 0 ? (result.invested / result.total) * 100 : 50;
  const maxCorpus = Math.max(...yearData.map((d) => d.corpusValue), 1);

  const extraCorpus = result.total - regularResult.total;
  const extraPct = regularResult.total > 0 ? (extraCorpus / regularResult.total) * 100 : 0;

  return (
    <div className="min-h-screen flex flex-col font-sans">
                  <SEO
                title="Step Up SIP Calculator – Boost Your Wealth Faster"
                description="Free Step Up SIP Calculator — calculate returns on a step-up (increasing) SIP. See how incrementally raising your investment each year dramatically grows your corpus."
                canonical="/step-up-sip-calculator"
            />
<Header />

      <main className="flex-grow pt-28">
        {/* â”€â”€â”€ Hero â”€â”€â”€ */}
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
              Step Up SIP Calculator{' '}
              <span className="text-[var(--color-brand-secondary)]">Online</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Plan smarter investments by increasing your SIP every year. See how a small annual
              step-up can dramatically grow your wealth over time.
            </p>
          </div>
        </section>

        {/* â”€â”€â”€ Calculator â”€â”€â”€ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* â”€â”€ Inputs â”€â”€ */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-[#090a3d] mb-6">Configure Your Step-Up SIP</h2>

                {/* Monthly SIP Amount */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-700">Monthly SIP Amount</label>
                    <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                      <span className="text-sm text-gray-500">₹</span>
                      <input
                        type="number"
                        value={monthly}
                        onChange={(e) => setMonthly(Math.max(500, Math.min(500000, Number(e.target.value))))}
                        className="w-24 text-sm font-semibold text-right bg-transparent focus:outline-none"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={500000}
                    step={500}
                    value={monthly}
                    onChange={(e) => setMonthly(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]"
                  />
                  <div className="flex flex-wrap gap-2 mt-3">
                    {PRESETS.map((p) => (
                      <button
                        key={p}
                        onClick={() => setMonthly(p)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          monthly === p
                            ? 'bg-[var(--color-brand-secondary)] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        ₹{p.toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Annual Step-Up % */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-700">Annual Step-Up</label>
                    <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                      <input
                        type="number"
                        value={stepUp}
                        onChange={(e) => setStepUp(Math.max(1, Math.min(50, Number(e.target.value))))}
                        className="w-12 text-sm font-semibold text-right bg-transparent focus:outline-none"
                      />
                      <span className="text-sm text-gray-500">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    step={1}
                    value={stepUp}
                    onChange={(e) => setStepUp(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Expected Return Rate */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-700">Expected Annual Return</label>
                    <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                      <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(Math.max(1, Math.min(30, Number(e.target.value))))}
                        className="w-12 text-sm font-semibold text-right bg-transparent focus:outline-none"
                      />
                      <span className="text-sm text-gray-500">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={0.5}
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>

                {/* Investment Duration */}
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-700">Investment Duration</label>
                    <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                      <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(Math.max(1, Math.min(40, Number(e.target.value))))}
                        className="w-12 text-sm font-semibold text-right bg-transparent focus:outline-none"
                      />
                      <span className="text-sm text-gray-500">Yrs</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={40}
                    step={1}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1 Yr</span>
                    <span>40 Yrs</span>
                  </div>
                </div>
              </div>

              {/* â”€â”€ Results â”€â”€ */}
              <div className="space-y-6">
                {/* Summary */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                  <h3 className="text-lg font-bold text-[#090a3d] mb-5">Step-Up SIP Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Total Invested</span>
                      <span className="text-lg font-bold text-[#090a3d]">
                        {formatCurrency(result.invested)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Estimated Returns</span>
                      <span className="text-lg font-bold text-green-600">
                        {formatCurrency(result.returns)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm font-semibold text-gray-700">Total Future Value</span>
                      <span className="text-2xl font-bold text-[var(--color-brand-secondary)]">
                        {formatCurrency(result.total)}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-5">
                    <div className="h-4 rounded-full overflow-hidden flex bg-gray-100">
                      <div
                        className="bg-[#090a3d] rounded-l-full transition-all duration-500"
                        style={{ width: `${investedPct}%` }}
                      />
                      <div
                        className="bg-[var(--color-brand-secondary)] rounded-r-full transition-all duration-500"
                        style={{ width: `${100 - investedPct}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#090a3d]" />
                        Invested ({investedPct.toFixed(0)}%)
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand-secondary)]" />
                        Returns ({(100 - investedPct).toFixed(0)}%)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Comparison */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                  <h3 className="text-lg font-bold text-[#090a3d] mb-5">
                    Regular SIP vs Step-Up SIP
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
                      <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">
                        Regular SIP
                      </p>
                      <p className="text-sm text-gray-500 mb-2">
                        Invested: {formatCurrency(regularResult.invested)}
                      </p>
                      <p className="text-xl font-bold text-[#090a3d]">
                        {formatCurrency(regularResult.total)}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#090a3d] to-[#0f1163] rounded-xl p-4 border border-gray-100 text-center text-white">
                      <p className="text-xs text-amber-300 mb-1 font-medium uppercase tracking-wide">
                        Step-Up SIP
                      </p>
                      <p className="text-sm text-gray-300 mb-2">
                        Invested: {formatCurrency(result.invested)}
                      </p>
                      <p className="text-xl font-bold text-[var(--color-brand-secondary)]">
                        {formatCurrency(result.total)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                    <p className="text-sm text-green-700 font-semibold">
                      Step-Up SIP generates{' '}
                      <span className="text-green-800 font-bold">{formatCurrency(extraCorpus)}</span>{' '}
                      more ({extraPct.toFixed(1)}% extra) than Regular SIP!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* â”€â”€ Bar Chart â”€â”€ */}
            <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-[#090a3d] mb-4">Year-wise Corpus Growth</h3>
              <div className="flex items-end gap-1 h-56">
                {yearData.map((d) => (
                  <div
                    key={d.year}
                    className="flex-1 flex flex-col items-center justify-end h-full group relative"
                  >
                    <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-lg">
                      <p className="font-semibold">Year {d.year}</p>
                      <p>SIP: ₹{d.monthlySip.toLocaleString('en-IN')}/mo</p>
                      <p>Corpus: {formatCurrency(d.corpusValue)}</p>
                    </div>
                    <div
                      className="w-full rounded-t-sm bg-gradient-to-t from-[#090a3d] to-[var(--color-brand-secondary)] transition-all duration-300 hover:opacity-80 cursor-pointer"
                      style={{ height: `${Math.max(4, (d.corpusValue / maxCorpus) * 100)}%` }}
                    />
                    {years <= 20 && (
                      <span className="text-[9px] text-gray-400 mt-1">{d.year}</span>
                    )}
                  </div>
                ))}
              </div>
              {years > 20 && (
                <div className="flex justify-between text-[9px] text-gray-400 mt-1">
                  <span>Yr 1</span>
                  <span>Yr {Math.floor(years / 2)}</span>
                  <span>Yr {years}</span>
                </div>
              )}
            </div>

            {/* â”€â”€ Year-wise Table â”€â”€ */}
            <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8 pb-0">
                <h3 className="text-lg font-bold text-[#090a3d] mb-4">Year-wise Breakdown</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <th className="px-6 py-3">Year</th>
                      <th className="px-6 py-3 text-right">Monthly SIP</th>
                      <th className="px-6 py-3 text-right">Annual Investment</th>
                      <th className="px-6 py-3 text-right">Cumulative Invested</th>
                      <th className="px-6 py-3 text-right">Corpus Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {yearData.map((d) => (
                      <tr key={d.year} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-3 font-medium text-[#090a3d]">Year {d.year}</td>
                        <td className="px-6 py-3 text-right text-gray-600">
                          {formatCurrencyFull(d.monthlySip)}
                        </td>
                        <td className="px-6 py-3 text-right text-gray-600">
                          {formatCurrencyFull(d.annualInvestment)}
                        </td>
                        <td className="px-6 py-3 text-right text-gray-600">
                          {formatCurrencyFull(d.cumulativeInvested)}
                        </td>
                        <td className="px-6 py-3 text-right font-semibold text-[var(--color-brand-secondary)]">
                          {formatCurrencyFull(d.corpusValue)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€â”€ What is Step Up SIP? â”€â”€â”€ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-6">
              What is Step Up SIP?
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                A Step-Up SIP (Systematic Investment Plan), also known as a Top-Up SIP, is an
                enhanced version of a regular SIP where your monthly investment amount automatically
                increases by a fixed percentage at the beginning of each year. This simple tweak
                transforms your wealth-creation trajectory by ensuring that your investments grow in
                tandem with your earning potential.
              </p>
              <p>
                <strong>Here's a quick example:</strong> Suppose you start a SIP of ₹10,000 per
                month with a 10% annual step-up. In the first year, you invest ₹10,000 every month.
                At the start of year 2, your monthly SIP rises to ₹11,000. By year 3, it becomes
                ₹12,100, and by year 10, you are investing ₹23,579 per month. Over 10 years at 12%
                annual returns, this step-up approach would create a corpus of approximately ₹35.6
                lakhs””compared to roughly ₹23.2 lakhs with a regular ₹10,000/month SIP. That's
                over 50% more wealth from the same starting point.
              </p>
              <p>
                The concept is grounded in a practical reality: most people's incomes increase each
                year through raises, bonuses, or business growth. A step-up SIP channels a portion
                of this incremental income into investments automatically, preventing lifestyle
                inflation from absorbing all of your salary growth.
              </p>
            </div>
          </div>
        </section>

        {/* â”€â”€â”€ Step Up SIP vs Regular SIP â”€â”€â”€ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-6">
              Step Up SIP vs Regular SIP
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                The core difference is simple: a regular SIP keeps your monthly amount constant,
                while a step-up SIP increases it every year. But the impact on your final corpus is
                anything but simple””it can be transformational.
              </p>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#090a3d] text-white text-left text-xs uppercase tracking-wider">
                    <th className="px-5 py-3">Parameter</th>
                    <th className="px-5 py-3 text-right">Regular SIP</th>
                    <th className="px-5 py-3 text-right">Step-Up SIP (10%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="px-5 py-3 text-gray-700">Starting Monthly SIP</td>
                    <td className="px-5 py-3 text-right font-medium">₹10,000</td>
                    <td className="px-5 py-3 text-right font-medium">₹10,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 text-gray-700">Monthly SIP in Year 10</td>
                    <td className="px-5 py-3 text-right font-medium">₹10,000</td>
                    <td className="px-5 py-3 text-right font-medium">₹23,579</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700">Total Invested (10 yrs)</td>
                    <td className="px-5 py-3 text-right font-medium">₹12,00,000</td>
                    <td className="px-5 py-3 text-right font-medium">₹19,12,490</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 text-gray-700">Corpus at 12% (10 yrs)</td>
                    <td className="px-5 py-3 text-right font-medium">₹23.23 L</td>
                    <td className="px-5 py-3 text-right font-medium text-[var(--color-brand-secondary)] font-bold">
                      ₹35.62 L
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-gray-700">Corpus at 12% (20 yrs)</td>
                    <td className="px-5 py-3 text-right font-medium">₹99.91 L</td>
                    <td className="px-5 py-3 text-right font-medium text-[var(--color-brand-secondary)] font-bold">
                      ₹2.76 Cr
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 text-gray-700">Extra Wealth (20 yrs)</td>
                    <td className="px-5 py-3 text-right">””</td>
                    <td className="px-5 py-3 text-right font-bold text-green-600">
                      +₹1.76 Cr (176% more)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-gray-600 leading-relaxed space-y-4">
              <p>
                As the table illustrates, the 20-year difference is staggering. A regular SIP at
                ₹10,000/month builds roughly ₹1 crore, while the same starting SIP with a 10%
                annual step-up builds nearly ₹2.76 crore””almost three times more. The extra
                investment each year compounds over the remaining tenure, creating an exponential
                wealth-building effect.
              </p>
            </div>
          </div>
        </section>

        {/* â”€â”€â”€ How the Calculator Works â”€â”€â”€ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-6">
              How Step Up SIP Calculator Works
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Our Step-Up SIP calculator uses a month-by-month compounding approach to give you
                the most accurate estimate of your future wealth. Here's the methodology:
              </p>
              <p>
                <strong>1. Monthly Compounding:</strong> Each month's SIP contribution is treated as
                a separate investment that compounds at the monthly equivalent of your chosen annual
                return rate. The monthly rate is calculated as:{' '}
                <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">
                  (1 + annualRate)^(1/12) − 1
                </code>
              </p>
              <p>
                <strong>2. Annual Step-Up:</strong> At the start of every new year, the monthly SIP
                amount is multiplied by{' '}
                <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">
                  (1 + stepUpRate / 100)
                </code>
                . So if your year-1 SIP is ₹10,000 and the step-up is 10%, your year-2 SIP becomes
                ₹11,000.
              </p>
              <p>
                <strong>3. Individual Compounding:</strong> Every monthly instalment is compounded
                for the remaining months until the end of the investment period. An instalment made
                in month 5 of year 2 in a 10-year plan compounds for (10 Ã— 12 − 16) = 104
                remaining months.
              </p>
              <p>
                <strong>4. Summation:</strong> The total future value is the sum of all these
                individually compounded monthly instalments. This approach accounts for the fact
                that earlier investments have more time to grow, and larger contributions in later
                years still benefit significantly from compounding.
              </p>
            </div>
          </div>
        </section>

        {/* â”€â”€â”€ Benefits â”€â”€â”€ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-3 text-center">
              Benefits of Step Up SIP
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              A small annual increase in your SIP can unlock disproportionately large financial
              gains. Here's why step-up SIP is one of the smartest investing habits you can adopt.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFITS.map((b, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all"
                >
                  <span className="text-3xl mb-3 block">{b.icon}</span>
                  <h3 className="text-lg font-bold text-[#090a3d] mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€â”€ When to Use â”€â”€â”€ */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-3 text-center">
              When Should You Use Step Up SIP?
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              Step-Up SIP is not a one-size-fits-all solution, but it shines in several common
              real-life scenarios.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SCENARIOS.map((s, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all"
                >
                  <span className="text-3xl mb-3 block">{s.icon}</span>
                  <h3 className="text-lg font-bold text-[#090a3d] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€â”€ How to Use This Calculator â”€â”€â”€ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-8 text-center">
              How to Use This Calculator
            </h2>
            <div className="space-y-4">
              {STEPS.map((s) => (
                <div
                  key={s.step}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-[var(--color-brand-secondary)] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#090a3d] mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€â”€ FAQs â”€â”€â”€ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
                >
                  <summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-semibold text-[#090a3d] hover:text-[var(--color-brand-secondary)] transition-colors">
                    {faq.q}
                    <svg
                      className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€â”€ CTA â”€â”€â”€ */}
        <section className="py-16 bg-gradient-to-br from-[#090a3d] via-[#0f1163] to-[#1a1c6e] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-[var(--color-brand-secondary)] rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Step-Up SIP Journey?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Our financial experts can help you choose the right mutual funds and set up a
              step-up SIP strategy tailored to your income growth and financial goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[var(--color-brand-secondary)] hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Talk to an Expert â†’
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

