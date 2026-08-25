import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

const formatCurrency = (val: number) =>
  '₹' + val.toLocaleString('en-IN', { maximumFractionDigits: 0 });

const formatPercent = (val: number) => val.toFixed(1) + '%';

interface YearRow {
  year: number;
  opening: number;
  deposit: number;
  interest: number;
  closing: number;
}

function computePpf(annual: number, years: number, rate: number): { invested: number; interest: number; maturity: number; table: YearRow[] } {
  const r = rate / 100;
  const table: YearRow[] = [];
  let balance = 0;

  for (let y = 1; y <= years; y++) {
    const opening = balance;
    const deposit = annual;
    const interest = Math.round((opening + deposit) * r);
    const closing = opening + deposit + interest;
    table.push({ year: y, opening, deposit, interest, closing });
    balance = closing;
  }

  const invested = annual * years;
  return { invested, interest: balance - invested, maturity: balance, table };
}

const ANNUAL_PRESETS = [500, 12000, 50000, 100000, 150000];
const PERIOD_PRESETS = [15, 20, 25, 30, 50];

const PPF_RATE_HISTORY = [
  { period: 'Apr 2020 – Present', rate: '7.1%' },
  { period: 'Oct 2018 – Mar 2020', rate: '8.0% â†’ 7.9%' },
  { period: 'Jan 2018 – Sep 2018', rate: '7.6%' },
  { period: 'Jul 2017 – Dec 2017', rate: '7.8%' },
  { period: 'Apr 2016 – Jun 2017', rate: '8.0% â†’ 8.1%' },
  { period: 'Apr 2013 – Mar 2016', rate: '8.7%' },
  { period: 'Dec 2011 – Mar 2013', rate: '8.6%' },
  { period: 'Apr 2010 – Nov 2011', rate: '8.0%' },
];

const FAQS = [
  {
    q: 'What is the minimum and maximum deposit in a PPF account?',
    a: 'The minimum annual deposit required to keep a PPF account active is ₹500. The maximum deposit allowed per financial year is ₹1,50,000. Deposits can be made in a lump sum or in up to 12 instalments during the year.',
  },
  {
    q: 'Can I withdraw money from my PPF account before maturity?',
    a: 'Partial withdrawals are permitted from the 7th financial year onwards. You can withdraw up to 50% of the balance at the end of the 4th preceding year or the balance at the end of the immediately preceding year, whichever is lower. Full premature closure is allowed only under specific conditions such as serious illness or higher education needs.',
  },
  {
    q: 'What happens if I miss a year\'s deposit?',
    a: 'If you fail to deposit the minimum ₹500 in a financial year, your account becomes inactive (dormant). To revive it, you must pay the ₹500 minimum for each defaulted year along with a penalty of ₹50 per defaulted year. The account continues to earn interest even while dormant.',
  },
  {
    q: 'Can I take a loan against my PPF balance?',
    a: 'Yes, loans against PPF are available from the 3rd financial year to the 6th financial year of opening the account. The maximum loan amount is 25% of the balance at the end of the second preceding financial year. The interest rate on such loans is 1% above the prevailing PPF interest rate.',
  },
  {
    q: 'Is PPF interest rate fixed for the entire tenure?',
    a: 'No, the PPF interest rate is reviewed and set by the Government of India every quarter. While historically rates have ranged between 7% and 12%, the rate applicable to your account changes each quarter based on the government\'s announcement. The current rate (since April 2020) is 7.1% per annum.',
  },
  {
    q: 'Can NRIs open a PPF account?',
    a: 'NRIs cannot open new PPF accounts. However, if a resident Indian who already holds a PPF account becomes an NRI, they can continue the account until its maturity (15 years) but cannot extend it beyond the original tenure. The account continues to earn interest during this period.',
  },
  {
    q: 'How does PPF compare to Fixed Deposits for tax saving?',
    a: 'Both PPF and tax-saving FDs qualify for Section 80C deduction up to ₹1.5 lakh. However, PPF offers triple tax exemption (EEE) ”” the investment, interest earned, and maturity amount are all tax-free. FD interest is taxable as per your income slab. PPF also offers a longer lock-in (15 years vs 5 years for tax FDs) but typically delivers better post-tax returns.',
  },
  {
    q: 'What happens to the PPF account after 15 years?',
    a: 'After the initial 15-year maturity period, you have three options: (1) Withdraw the entire amount tax-free, (2) Extend in blocks of 5 years with continued contributions, or (3) Extend without contributions ”” the existing balance continues earning interest, and you can make one withdrawal per year up to 60% of the opening balance at the start of the extension period.',
  },
  {
    q: 'Can I open more than one PPF account?',
    a: 'No, an individual can hold only one PPF account in their name. If a second account is discovered, it will be merged or deactivated. However, you can also open one PPF account in the name of each of your minor children, operated by you as a guardian. The combined annual deposit across all accounts (self + minor children) is capped at ₹1,50,000.',
  },
  {
    q: 'When should I deposit money for maximum interest benefit?',
    a: 'PPF interest is calculated on the lowest balance between the 5th and the last day of each month. To maximise interest, deposit your contribution before the 5th of each month, preferably before April 5 if making a lump sum annual deposit. This ensures your entire deposit earns interest for the full financial year.',
  },
];

const COMPARISON_DATA = [
  { feature: 'Returns (Approx.)', ppf: '7.1% (Govt. set)', fd: '6–7.5% (Bank)', elss: '12–15% (Market)', nps: '8–10% (Mixed)' },
  { feature: 'Lock-in Period', ppf: '15 years', fd: '5 years (Tax)', elss: '3 years', nps: 'Till age 60' },
  { feature: 'Tax on Returns', ppf: 'Fully exempt', fd: 'Taxable', elss: '10% LTCG > ₹1L', nps: 'Partial tax' },
  { feature: 'Risk Level', ppf: 'Zero (Govt.)', fd: 'Very Low', elss: 'High (Equity)', nps: 'Moderate' },
  { feature: 'Section 80C', ppf: '✓ Up to ₹1.5L', fd: '✓ Up to ₹1.5L', elss: '✓ Up to ₹1.5L', nps: '✓ Up to ₹2L' },
  { feature: 'Premature Exit', ppf: 'After 7 years*', fd: 'Penalty applies', elss: 'Not allowed', nps: 'Partial at 60%' },
];

export default function PpfCalculator() {
  const [annual, setAnnual] = useState(150000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(7.1);
  const [showAllRows, setShowAllRows] = useState(false);

  const result = useMemo(() => computePpf(annual, years, rate), [annual, years, rate]);

  const investedPct = result.maturity > 0 ? Math.round((result.invested / result.maturity) * 100) : 0;

  const maxBarValue = result.table.length > 0 ? result.table[result.table.length - 1].closing : 1;
  const visibleRows = showAllRows ? result.table : result.table.slice(0, 15);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
                  <SEO
                title="PPF Calculator – Public Provident Fund Returns Calculator"
                description="Free PPF Calculator — calculate your Public Provident Fund maturity amount, interest earned, and year-wise balance. Plan your long-term tax-saving investments."
                canonical="/ppf-calculator"
            />
<Header />
      <main className="flex-grow pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#090a3d] via-[#0f1058] to-[#1a1b6b] text-white py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-brand-secondary)] opacity-10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 opacity-10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[var(--color-brand-secondary)] text-xs font-semibold tracking-wide mb-5 backdrop-blur-sm border border-white/10">
              FREE FINANCIAL TOOL
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              PPF Calculator
              <span className="block text-lg md:text-2xl font-medium text-gray-300 mt-3">
                Plan Your Public Provident Fund Investment &amp; Estimate Maturity Value
              </span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              Calculate your PPF maturity amount, interest earned, and year-by-year growth with India's most trusted government-backed savings scheme.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-[#090a3d] mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#090a3d] text-white flex items-center justify-center text-sm">₹</span>
                Enter Your Details
              </h2>

              {/* Annual Investment */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">Annual Investment</label>
                  <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <span className="text-sm text-gray-500">₹</span>
                    <input
                      type="number"
                      min={500}
                      max={150000}
                      value={annual}
                      onChange={e => {
                        const v = Math.min(150000, Math.max(500, Number(e.target.value) || 500));
                        setAnnual(v);
                      }}
                      className="w-24 text-sm font-semibold text-right bg-transparent focus:outline-none"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={500}
                  max={150000}
                  step={500}
                  value={annual}
                  onChange={e => setAnnual(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>₹500</span>
                  <span>₹1,50,000</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {ANNUAL_PRESETS.map(p => (
                    <button
                      key={p}
                      onClick={() => setAnnual(p)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${annual === p ? 'bg-[var(--color-brand-secondary)] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      ₹{p.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Investment Period */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">Investment Period</label>
                  <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <input
                      type="number"
                      min={15}
                      max={50}
                      value={years}
                      onChange={e => {
                        const v = Math.min(50, Math.max(15, Number(e.target.value) || 15));
                        setYears(v);
                      }}
                      className="w-16 text-sm font-semibold text-right bg-transparent focus:outline-none"
                    />
                    <span className="text-sm text-gray-500">yrs</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={15}
                  max={50}
                  step={5}
                  value={years}
                  onChange={e => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>15 yrs</span>
                  <span>50 yrs</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {PERIOD_PRESETS.map(p => (
                    <button
                      key={p}
                      onClick={() => setYears(p)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${years === p ? 'bg-[var(--color-brand-secondary)] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      {p} yrs
                    </button>
                  ))}
                </div>
              </div>

              {/* Interest Rate */}
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">Interest Rate (p.a.)</label>
                  <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <input
                      type="number"
                      min={1}
                      max={15}
                      step={0.1}
                      value={rate}
                      onChange={e => {
                        const v = Math.min(15, Math.max(1, Number(e.target.value) || 7.1));
                        setRate(Math.round(v * 10) / 10);
                      }}
                      className="w-16 text-sm font-semibold text-right bg-transparent focus:outline-none"
                    />
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={0.1}
                  value={rate}
                  onChange={e => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-brand-secondary)]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1%</span>
                  <span>15%</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">Current government-set rate: <span className="font-semibold text-[var(--color-brand-secondary)]">7.1%</span> (since Apr 2020)</p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* Summary */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-[#090a3d] mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[var(--color-brand-secondary)]/20 text-[var(--color-brand-secondary)] flex items-center justify-center text-xs">ðŸ“Š</span>
                  Investment Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Total Amount Invested</span>
                    <span className="text-lg font-bold text-[#090a3d]">{formatCurrency(result.invested)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Total Interest Earned</span>
                    <span className="text-lg font-bold text-[var(--color-brand-secondary)]">{formatCurrency(result.interest)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-gradient-to-r from-[#090a3d]/5 to-transparent rounded-lg px-3 -mx-3">
                    <span className="text-sm font-semibold text-[#090a3d]">Maturity Value</span>
                    <span className="text-xl font-bold text-[#090a3d]">{formatCurrency(result.maturity)}</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#090a3d]" />Invested ({investedPct}%)</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand-secondary)]" />Returns ({100 - investedPct}%)</span>
                  </div>
                  <div className="h-4 rounded-full overflow-hidden flex bg-gray-100">
                    <div className="bg-[#090a3d] rounded-l-full transition-all duration-500" style={{ width: `${investedPct}%` }} />
                    <div className="bg-[var(--color-brand-secondary)] rounded-r-full transition-all duration-500" style={{ width: `${100 - investedPct}%` }} />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-[10px] text-gray-400 mb-1">Rate</p>
                    <p className="text-sm font-bold text-[#090a3d]">{formatPercent(rate)}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-[10px] text-gray-400 mb-1">Tenure</p>
                    <p className="text-sm font-bold text-[#090a3d]">{years} yrs</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-[10px] text-gray-400 mb-1">Wealth Gain</p>
                    <p className="text-sm font-bold text-[var(--color-brand-secondary)]">{result.invested > 0 ? ((result.maturity / result.invested - 1) * 100).toFixed(1) : 0}%</p>
                  </div>
                </div>
              </div>

              {/* Bar chart */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-sm font-bold text-[#090a3d] mb-4">Growth Over Years</h3>
                <div className="flex items-end gap-1 h-48">
                  {result.table.map(d => (
                    <div key={d.year} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                      <div className="absolute bottom-full mb-1 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                        Yr {d.year}: {formatCurrency(d.closing)}
                      </div>
                      <div
                        className="w-full rounded-t-sm bg-gradient-to-t from-[#090a3d] to-[var(--color-brand-secondary)] transition-all duration-300 hover:opacity-80"
                        style={{ height: `${Math.max(4, (d.closing / maxBarValue) * 100)}%` }}
                      />
                      {years <= 25 && <span className="text-[9px] text-gray-400 mt-1">{d.year}</span>}
                    </div>
                  ))}
                </div>
                {years > 25 && (
                  <div className="flex justify-between text-[9px] text-gray-400 mt-1">
                    <span>Year 1</span>
                    <span>Year {years}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Year-wise breakdown */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 mt-8">
            <h3 className="text-lg font-bold text-[#090a3d] mb-5">Year-wise Breakdown</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500">Year</th>
                    <th className="text-right py-3 px-3 text-xs font-semibold text-gray-500">Opening Balance</th>
                    <th className="text-right py-3 px-3 text-xs font-semibold text-gray-500">Deposit</th>
                    <th className="text-right py-3 px-3 text-xs font-semibold text-gray-500">Interest Earned</th>
                    <th className="text-right py-3 px-3 text-xs font-semibold text-gray-500">Closing Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleRows.map(r => (
                    <tr key={r.year} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-2.5 px-3 font-medium text-[#090a3d]">{r.year}</td>
                      <td className="py-2.5 px-3 text-right text-gray-600">{formatCurrency(r.opening)}</td>
                      <td className="py-2.5 px-3 text-right text-gray-600">{formatCurrency(r.deposit)}</td>
                      <td className="py-2.5 px-3 text-right text-[var(--color-brand-secondary)] font-medium">{formatCurrency(r.interest)}</td>
                      <td className="py-2.5 px-3 text-right font-semibold text-[#090a3d]">{formatCurrency(r.closing)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {result.table.length > 15 && (
              <button
                onClick={() => setShowAllRows(v => !v)}
                className="mt-4 text-sm font-medium text-[var(--color-brand-secondary)] hover:underline"
              >
                {showAllRows ? 'Show less â†‘' : `Show all ${result.table.length} years â†“`}
              </button>
            )}
          </div>
        </section>

        {/* What is PPF? */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#090a3d] mb-6">What is PPF (Public Provident Fund)?</h2>
            <div className="prose prose-gray max-w-none text-sm text-gray-600 leading-relaxed space-y-4">
              <p>
                The Public Provident Fund (PPF) is a long-term savings scheme introduced by the Government of India in 1968 under the Public Provident Fund Act. Backed by the sovereign guarantee of the Indian government, PPF is one of the safest and most popular investment instruments available to Indian residents for building a retirement corpus and saving on taxes.
              </p>
              <p>
                PPF accounts can be opened at any designated post office or nationalised bank branch. The scheme mandates a minimum lock-in period of 15 years, which can be extended indefinitely in blocks of 5 years. The interest rate is set quarterly by the Ministry of Finance and is currently 7.1% per annum (since April 2020), compounded annually.
              </p>
              <p>
                One of the most compelling features of PPF is its <strong>EEE (Exempt-Exempt-Exempt)</strong> tax status ”” your annual contributions qualify for deduction under Section 80C of the Income Tax Act (up to ₹1,50,000), the interest earned is completely tax-free, and the maturity amount is also exempt from tax. This triple tax benefit makes PPF unmatched among comparable fixed-income instruments in India.
              </p>
            </div>
          </div>
        </section>

        {/* PPF Interest Rate History */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#090a3d] mb-6">PPF Interest Rate History</h2>
            <p className="text-sm text-gray-500 mb-6">
              The Government of India revises the PPF interest rate every quarter. Here is a summary of recent rate changes:
            </p>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#090a3d] text-white">
                    <th className="text-left py-3 px-5 font-semibold">Period</th>
                    <th className="text-right py-3 px-5 font-semibold">Interest Rate (p.a.)</th>
                  </tr>
                </thead>
                <tbody>
                  {PPF_RATE_HISTORY.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-50 ${i === 0 ? 'bg-amber-50/50' : ''}`}>
                      <td className="py-3 px-5 text-gray-700">{row.period}</td>
                      <td className="py-3 px-5 text-right font-semibold text-[#090a3d]">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PPF Account Rules */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#090a3d] mb-8 text-center">PPF Account Rules</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: 'ðŸ’°',
                  title: 'Deposit Limits',
                  desc: 'Minimum ₹500 per year to keep the account active. Maximum deposit capped at ₹1,50,000 per financial year. Contributions can be made in a single lump sum or up to 12 instalments.',
                },
                {
                  icon: 'ðŸ”’',
                  title: '15-Year Lock-in',
                  desc: 'The mandatory tenure is 15 financial years from the year of account opening. After maturity, extend in blocks of 5 years with or without fresh contributions, indefinitely.',
                },
                {
                  icon: 'ðŸ¦',
                  title: 'Partial Withdrawal',
                  desc: 'Allowed from the 7th financial year. Withdraw up to 50% of the balance at the end of the 4th preceding year. Only one withdrawal is permitted per financial year.',
                },
                {
                  icon: 'ðŸ“‹',
                  title: 'Loan Facility',
                  desc: 'Available between the 3rd and 6th financial year. Borrow up to 25% of the balance at end of the 2nd preceding year. Interest charged at PPF rate + 1%.',
                },
                {
                  icon: 'ðŸ‘¤',
                  title: 'Eligibility',
                  desc: 'Any Indian resident individual can open a PPF account. Accounts can be opened for minor children (operated by parent/guardian). Only one account per individual is allowed.',
                },
                {
                  icon: 'ðŸ“',
                  title: 'Where to Open',
                  desc: 'Open at any nationalised bank, select private banks, India Post offices, or through authorised online banking platforms. Account transfers between branches are supported.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="text-lg font-bold text-[#090a3d] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tax Benefits */}
        <section className="py-16 bg-gradient-to-br from-[#090a3d] to-[#1a1b6b] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Tax Benefits of PPF</h2>
            <p className="text-gray-300 text-sm text-center mb-10 max-w-2xl mx-auto">
              PPF enjoys the coveted EEE (Exempt-Exempt-Exempt) status under Indian tax law, making it one of the most tax-efficient investment options available.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stage: 'Investment',
                  tag: 'Section 80C',
                  desc: 'Annual contributions up to ₹1,50,000 are eligible for tax deduction under Section 80C of the Income Tax Act. This can reduce your taxable income by up to ₹1.5 lakh every year, saving up to ₹46,800 in taxes (at 30% slab + cess).',
                  status: 'âœ… Exempt',
                },
                {
                  stage: 'Interest Earned',
                  tag: 'Section 10',
                  desc: 'The interest accrued in your PPF account each year is completely exempt from income tax. Unlike fixed deposits or savings accounts where interest is taxable, PPF interest grows your wealth without any tax deduction.',
                  status: 'âœ… Exempt',
                },
                {
                  stage: 'Maturity Amount',
                  tag: 'Section 10(11)',
                  desc: 'The entire maturity proceeds ”” your principal plus all accumulated interest ”” are fully tax-free upon withdrawal. There is no capital gains tax, no TDS, and no wealth tax applicable on the PPF corpus.',
                  status: 'âœ… Exempt',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.status}</span>
                    <div>
                      <h3 className="text-lg font-bold">{item.stage}</h3>
                      <span className="text-xs text-[var(--color-brand-secondary)] font-medium">{item.tag}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PPF vs Other Investments */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#090a3d] mb-3 text-center">PPF vs Other Investments</h2>
            <p className="text-sm text-gray-500 mb-8 text-center max-w-2xl mx-auto">
              How does PPF stack up against other popular tax-saving instruments? Here is a side-by-side comparison.
            </p>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-[#090a3d] text-white">
                    <th className="text-left py-3 px-4 font-semibold">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold text-[var(--color-brand-secondary)]">PPF</th>
                    <th className="text-center py-3 px-4 font-semibold">Tax FD</th>
                    <th className="text-center py-3 px-4 font-semibold">ELSS</th>
                    <th className="text-center py-3 px-4 font-semibold">NPS</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-[#090a3d]">{row.feature}</td>
                      <td className="py-3 px-4 text-center text-[var(--color-brand-secondary)] font-medium">{row.ppf}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.fd}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.elss}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.nps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#090a3d] mb-8 text-center">How to Use This PPF Calculator</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  step: '01',
                  title: 'Set Annual Investment',
                  desc: 'Use the slider or type in the amount you plan to invest in your PPF account each year. The range is ₹500 (minimum) to ₹1,50,000 (maximum allowed by law).',
                },
                {
                  step: '02',
                  title: 'Choose Investment Period',
                  desc: 'Select the total number of years you intend to keep your PPF account. The minimum is 15 years, extendable in 5-year blocks up to 50 years for long-term planning.',
                },
                {
                  step: '03',
                  title: 'Set Interest Rate',
                  desc: 'The calculator defaults to the current rate of 7.1%. Adjust this to model different scenarios ”” for conservative estimates use a lower rate; for historical average, try 8%.',
                },
                {
                  step: '04',
                  title: 'Review Your Results',
                  desc: 'Instantly see your total investment, interest earned, and maturity value. Scroll down for a detailed year-by-year breakdown table and growth chart to visualise your wealth creation.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all">
                  <span className="text-3xl font-black text-[var(--color-brand-secondary)] opacity-30 leading-none">{item.step}</span>
                  <div>
                    <h3 className="text-base font-bold text-[#090a3d] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#090a3d] mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
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
        <section className="py-16 bg-gradient-to-br from-[#090a3d] to-[#1a1b6b] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help With Your PPF Investment?</h2>
            <p className="text-gray-300 text-sm mb-8 max-w-lg mx-auto">
              Our financial experts can help you plan your PPF contributions, optimise your tax savings, and build a comprehensive wealth-creation strategy tailored to your goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-secondary)]/90 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Talk to an Expert
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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

