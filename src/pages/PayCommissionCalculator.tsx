import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

function formatINR(value: number): string {
  if (value >= 10000000) return `â‚¹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `â‚¹${(value / 100000).toFixed(2)} L`;
  return `â‚¹${value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
}

const PAY_LEVELS: { level: number; label: string; minPay: number; maxPay: number }[] = [
  { level: 1, label: '1', minPay: 18000, maxPay: 56900 },
  { level: 2, label: '2', minPay: 19900, maxPay: 63200 },
  { level: 3, label: '3', minPay: 21700, maxPay: 69100 },
  { level: 4, label: '4', minPay: 25500, maxPay: 81100 },
  { level: 5, label: '5', minPay: 29200, maxPay: 92300 },
  { level: 6, label: '6', minPay: 35400, maxPay: 112400 },
  { level: 7, label: '7', minPay: 44900, maxPay: 142400 },
  { level: 8, label: '8', minPay: 47600, maxPay: 151100 },
  { level: 9, label: '9', minPay: 53100, maxPay: 167800 },
  { level: 10, label: '10', minPay: 56100, maxPay: 177500 },
  { level: 11, label: '11', minPay: 67700, maxPay: 208700 },
  { level: 12, label: '12', minPay: 78800, maxPay: 209200 },
  { level: 13, label: '13', minPay: 123100, maxPay: 215900 },
  { level: 14, label: '13A', minPay: 131100, maxPay: 216600 },
  { level: 15, label: '14', minPay: 144200, maxPay: 218200 },
  { level: 16, label: '15', minPay: 182200, maxPay: 224100 },
  { level: 17, label: '16', minPay: 205400, maxPay: 224400 },
  { level: 18, label: '17', minPay: 225000, maxPay: 225000 },
  { level: 19, label: '18', minPay: 250000, maxPay: 250000 },
];

const TIMELINE_EVENTS = [
  { date: 'January 2025', title: 'Commission Constituted', description: 'The Union Cabinet approved the formation of the 8th Central Pay Commission under the chairmanship of a retired official.' },
  { date: 'April 2025', title: 'Terms of Reference Finalised', description: 'The government published detailed terms of reference covering pay scales, allowances, pension, and performance-linked incentives.' },
  { date: '2025â€“2026', title: 'Data Collection & Stakeholder Consultation', description: 'The commission gathers memoranda from employee unions, government departments, and independent economists.' },
  { date: 'Late 2026', title: 'Draft Report Expected', description: 'An interim or draft report with preliminary recommendations is anticipated before the end of 2026.' },
  { date: 'Mid 2027', title: 'Final Report Submission', description: 'The commission is expected to submit its final recommendations to the government by mid-2027.' },
  { date: 'January 2028', title: 'Expected Implementation', description: 'Revised pay scales are likely to take effect from 1 January 2028 for all central government employees.' },
];

const FAQ_DATA = [
  {
    q: 'What is the 8th Pay Commission?',
    a: 'The 8th Pay Commission is a government body constituted by the Union Cabinet in January 2025 to review and revise the salary structure, allowances, and pension benefits of central government employees. It succeeds the 7th Pay Commission whose recommendations were implemented from 2016.',
  },
  {
    q: 'When will the 8th Pay Commission recommendations be implemented?',
    a: 'Based on historical patterns and official timelines, the 8th Pay Commission is expected to submit its final report by mid-2027. The revised pay scales are anticipated to be implemented from 1 January 2028, benefiting approximately 50 lakh central government employees and 65 lakh pensioners.',
  },
  {
    q: 'What fitment factor is expected in the 8th Pay Commission?',
    a: 'While the official fitment factor has not been announced yet, analysts and employee unions estimate it to be between 1.86x and 3.68x. A commonly cited median estimate is 2.86x. The 6th Pay Commission used 1.86x and the 7th Pay Commission applied 2.57x.',
  },
  {
    q: 'How is the new basic pay calculated under the 8th Pay Commission?',
    a: 'The new basic pay is calculated by multiplying your current basic pay by the fitment factor. For example, if your current basic pay is â‚¹56,100 and the fitment factor is 2.86x, your expected new basic pay would be â‚¹56,100 Ã— 2.86 = â‚¹1,60,446.',
  },
  {
    q: 'Will the 8th Pay Commission revise pensions as well?',
    a: 'Yes, pension revision is a core part of every pay commission\'s mandate. The 8th Pay Commission is expected to recommend revised pension amounts for retirees, potentially applying a similar fitment factor. The minimum pension under the 7th CPC was â‚¹9,000 per month â€” it may rise significantly.',
  },
  {
    q: 'What is the expected minimum basic salary after the 8th Pay Commission?',
    a: 'If a fitment factor of 2.86x is applied, the current minimum basic pay of â‚¹18,000 (Level 1) would increase to approximately â‚¹51,480. Some employee unions have demanded a minimum basic pay of â‚¹26,000 before the fitment factor is applied.',
  },
  {
    q: 'How does the 8th Pay Commission affect HRA and DA?',
    a: 'When a new pay commission is implemented, the Dearness Allowance (DA) percentage is typically reset to 0% since inflation adjustments are absorbed into the revised basic pay. HRA percentages (X-27%, Y-18%, Z-9%) are expected to remain the same but will be calculated on the higher basic pay, resulting in larger absolute amounts.',
  },
  {
    q: 'Who will benefit from the 8th Pay Commission?',
    a: 'Approximately 50 lakh serving central government employees and 65 lakh pensioners will benefit directly. Employees of central autonomous bodies, defence personnel, and employees of certain state governments that adopt central pay scales will also see revised compensation.',
  },
];

export default function PayCommissionCalculator() {
  const [basicPay, setBasicPay] = useState(56100);
  const [payLevel, setPayLevel] = useState(10);
  const [fitmentFactor, setFitmentFactor] = useState(2.86);
  const [daRate, setDaRate] = useState(53);
  const [hraCategory, setHraCategory] = useState<'X' | 'Y' | 'Z'>('X');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const hraPercent = hraCategory === 'X' ? 27 : hraCategory === 'Y' ? 18 : 9;

  const results = useMemo(() => {
    const currentBasic = basicPay;
    const newBasic = Math.round(currentBasic * fitmentFactor);
    const currentDA = Math.round(currentBasic * (daRate / 100));
    const newDA = Math.round(newBasic * (daRate / 100));
    const currentHRA = Math.round(currentBasic * (hraPercent / 100));
    const newHRA = Math.round(newBasic * (hraPercent / 100));
    const currentGross = currentBasic + currentDA + currentHRA;
    const newGross = newBasic + newDA + newHRA;
    const increaseAmount = newGross - currentGross;
    const increasePercent = currentGross > 0 ? ((increaseAmount / currentGross) * 100) : 0;

    return {
      currentBasic,
      newBasic,
      currentDA,
      newDA,
      currentHRA,
      newHRA,
      currentGross,
      newGross,
      increaseAmount,
      increasePercent,
    };
  }, [basicPay, fitmentFactor, daRate, hraPercent]);

  const handleBasicPayInput = (value: string) => {
    const num = parseInt(value.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(num)) {
      setBasicPay(Math.max(18000, Math.min(250000, num)));
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
                  <SEO
                title="8th Pay Commission Salary Calculator 2025"
                description="Free 8th Pay Commission Salary Calculator — estimate your revised basic pay, HRA, TA and gross salary under the 8th Pay Commission recommendations for 2025."
                canonical="/8th-pay-commission-calculator"
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
              Free Online Tool â€” 2025
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              8th Pay Commission <span className="text-[var(--color-brand-secondary)]">Salary Calculator</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Estimate your revised salary under the 8th Central Pay Commission. Enter your current basic pay, select your pay level, and instantly see your projected take-home increase.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Inputs */}
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 h-fit">
                <h2 className="text-xl md:text-2xl font-bold text-[#090a3d] mb-6">Enter Your Details</h2>

                {/* Current Basic Pay */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Basic Pay (â‚¹)
                  </label>
                  <input
                    type="text"
                    value={`â‚¹${basicPay.toLocaleString('en-IN')}`}
                    onChange={(e) => handleBasicPayInput(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-[#090a3d] focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-2 focus:ring-[var(--color-brand-secondary)]/20 transition-all"
                  />
                  <input
                    type="range"
                    min={18000}
                    max={250000}
                    step={100}
                    value={basicPay}
                    onChange={(e) => setBasicPay(Number(e.target.value))}
                    className="w-full mt-2 accent-[#090a3d] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>â‚¹18,000</span>
                    <span>â‚¹2,50,000</span>
                  </div>
                </div>

                {/* Pay Level */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pay Level</label>
                  <select
                    value={payLevel}
                    onChange={(e) => {
                      const level = Number(e.target.value);
                      setPayLevel(level);
                      const found = PAY_LEVELS.find((p) => p.level === level);
                      if (found) setBasicPay(found.minPay);
                    }}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-2 focus:ring-[var(--color-brand-secondary)]/20 transition-all bg-white"
                  >
                    {PAY_LEVELS.map((p) => (
                      <option key={p.level} value={p.level}>
                        Level {p.label} â€” â‚¹{p.minPay.toLocaleString('en-IN')} to â‚¹{p.maxPay.toLocaleString('en-IN')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Fitment Factor */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Fitment Factor: <span className="text-[var(--color-brand-secondary)] font-bold">{fitmentFactor.toFixed(2)}x</span>
                  </label>
                  <input
                    type="range"
                    min={1.86}
                    max={3.68}
                    step={0.01}
                    value={fitmentFactor}
                    onChange={(e) => setFitmentFactor(Number(e.target.value))}
                    className="w-full accent-[#090a3d] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1.86x (Conservative)</span>
                    <span>3.68x (Optimistic)</span>
                  </div>
                </div>

                {/* DA Rate */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    DA Rate: <span className="text-[var(--color-brand-secondary)] font-bold">{daRate}%</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={daRate}
                    onChange={(e) => setDaRate(Number(e.target.value))}
                    className="w-full accent-[#090a3d] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* HRA City Category */}
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    HRA City Category
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['X', 'Y', 'Z'] as const).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setHraCategory(cat)}
                        className={`py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                          hraCategory === cat
                            ? 'bg-[#090a3d] text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {cat} â€” {cat === 'X' ? '27%' : cat === 'Y' ? '18%' : '9%'}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">X: Metro cities Â· Y: Other large cities Â· Z: All other locations</p>
                </div>
              </div>

              {/* Results */}
              <div className="lg:col-span-3 space-y-6">
                {/* Increase Highlight */}
                <div className="bg-gradient-to-br from-[#090a3d] via-[#0f1163] to-[#1a1c6e] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-[var(--color-brand-secondary)] rounded-full blur-3xl opacity-20" />
                  <div className="relative z-10">
                    <p className="text-sm text-gray-300 mb-1">Your Expected Salary Increase</p>
                    <p className="text-3xl md:text-4xl font-bold text-[var(--color-brand-secondary)]">
                      +{formatINR(results.increaseAmount)}
                    </p>
                    <p className="text-lg mt-1">
                      That's a <span className="font-bold text-green-400">{results.increasePercent.toFixed(1)}%</span> increase in gross salary
                    </p>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                    <div className="p-4 text-sm font-bold text-gray-500">Component</div>
                    <div className="p-4 text-sm font-bold text-gray-500 text-right">Current (7th CPC)</div>
                    <div className="p-4 text-sm font-bold text-[#090a3d] text-right">Expected (8th CPC)</div>
                  </div>
                  {[
                    { label: 'Basic Pay', current: results.currentBasic, expected: results.newBasic },
                    { label: `DA (${daRate}%)`, current: results.currentDA, expected: results.newDA },
                    { label: `HRA (${hraPercent}% â€” City ${hraCategory})`, current: results.currentHRA, expected: results.newHRA },
                  ].map((row) => (
                    <div key={row.label} className="grid grid-cols-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <div className="p-4 text-sm font-medium text-gray-700">{row.label}</div>
                      <div className="p-4 text-sm text-gray-600 text-right font-semibold">{formatINR(row.current)}</div>
                      <div className="p-4 text-sm text-[#090a3d] text-right font-bold">{formatINR(row.expected)}</div>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 bg-amber-50">
                    <div className="p-4 text-sm font-bold text-[#090a3d]">Gross Salary</div>
                    <div className="p-4 text-sm text-right font-bold text-gray-700">{formatINR(results.currentGross)}</div>
                    <div className="p-4 text-sm text-right font-bold text-[var(--color-brand-secondary)] text-lg">{formatINR(results.newGross)}</div>
                  </div>
                </div>

                {/* Quick Summary Cards */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 text-center">
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Fitment Factor</p>
                    <p className="text-2xl font-bold text-[#090a3d]">{fitmentFactor.toFixed(2)}x</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 text-center">
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">New Basic Pay</p>
                    <p className="text-2xl font-bold text-[var(--color-brand-secondary)]">{formatINR(results.newBasic)}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 text-center">
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Monthly Increase</p>
                    <p className="text-2xl font-bold text-green-600">+{formatINR(results.increaseAmount)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is 8th Pay Commission */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-[#090a3d] mb-6">
                What is the <span className="text-[var(--color-brand-secondary)]">8th Pay Commission</span>?
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  The 8th Central Pay Commission is a government-appointed panel tasked with reviewing and recommending revisions to the pay structure, allowances, and pension of central government employees in India. Constituted by the Union Cabinet in January 2025, it follows a long-standing tradition â€” since Independence, India has set up pay commissions roughly every ten years to ensure government salaries keep pace with inflation, economic growth, and private-sector compensation trends.
                </p>
                <p>
                  The commission will examine the existing pay matrix introduced by the 7th CPC in 2016, evaluate the cost of living across different cities, study pay parity with the private sector, and suggest a revised framework that is fair, transparent, and fiscally sustainable. Its recommendations will directly affect approximately 50 lakh serving central government employees and over 65 lakh pensioners, making it one of the most consequential policy decisions affecting India's public-sector workforce.
                </p>
                <p>
                  Historically, every pay commission has introduced a "fitment factor" â€” a multiplier applied to the existing basic pay to arrive at the revised basic pay under the new structure. The commission also revisits allowances such as Dearness Allowance (DA), House Rent Allowance (HRA), Transport Allowance, and special duty allowances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expected Fitment Factor */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#090a3d] mb-3 text-center">
              Expected <span className="text-[var(--color-brand-secondary)]">Fitment Factor</span>
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              The fitment factor is the single most important variable in determining your revised salary. Here's how previous commissions compare.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { commission: '6th CPC', year: '2006', factor: '1.86x', minPay: 'â‚¹7,000', desc: 'Introduced the concept of grade pay along with a fitment factor of 1.86x. It replaced the previous pay band system.' },
                { commission: '7th CPC', year: '2016', factor: '2.57x', minPay: 'â‚¹18,000', desc: 'Replaced grade pay with a pay matrix. Applied a 2.57x fitment factor, raising the minimum basic pay from â‚¹7,000 to â‚¹18,000.' },
                { commission: '8th CPC', year: '2028 (Est.)', factor: '2.86x*', minPay: 'â‚¹51,480*', desc: 'Expected to introduce a revised pay matrix with a fitment factor between 1.86x and 3.68x. The median estimate of 2.86x is widely discussed.' },
              ].map((item) => (
                <div key={item.commission} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                      <span className="text-[var(--color-brand-secondary)] font-bold text-lg">{item.factor}</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#090a3d]">{item.commission}</p>
                      <p className="text-xs text-gray-400">{item.year}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                  <p className="text-xs text-gray-400">Minimum Basic Pay: <span className="font-semibold text-gray-600">{item.minPay}</span></p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">* Estimated figures based on analyst projections and employee union demands. Final figures will be announced by the commission.</p>
          </div>
        </section>

        {/* 8th CPC Pay Matrix Overview */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#090a3d] mb-3 text-center">
              8th Pay Commission <span className="text-[var(--color-brand-secondary)]">Pay Matrix</span> (Expected)
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              Below is a projected pay matrix based on a {fitmentFactor.toFixed(2)}x fitment factor. Adjust the slider above to see how different factors affect each level.
            </p>
            <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#090a3d] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Pay Level</th>
                    <th className="px-4 py-3 text-right font-semibold">Current Min Pay</th>
                    <th className="px-4 py-3 text-right font-semibold">Expected Min Pay</th>
                    <th className="px-4 py-3 text-right font-semibold">Current Max Pay</th>
                    <th className="px-4 py-3 text-right font-semibold">Expected Max Pay</th>
                  </tr>
                </thead>
                <tbody>
                  {PAY_LEVELS.map((p, i) => (
                    <tr key={p.level} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-amber-50 transition-colors`}>
                      <td className="px-4 py-3 font-semibold text-[#090a3d]">Level {p.label}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{formatINR(p.minPay)}</td>
                      <td className="px-4 py-3 text-right font-semibold text-[var(--color-brand-secondary)]">{formatINR(Math.round(p.minPay * fitmentFactor))}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{formatINR(p.maxPay)}</td>
                      <td className="px-4 py-3 text-right font-semibold text-[var(--color-brand-secondary)]">{formatINR(Math.round(p.maxPay * fitmentFactor))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">
              * Projected figures based on {fitmentFactor.toFixed(2)}x fitment factor. Actual values will be determined by the 8th Pay Commission.
            </p>
          </div>
        </section>

        {/* Key Changes Expected */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#090a3d] mb-3 text-center">
              Key Changes <span className="text-[var(--color-brand-secondary)]">Expected</span>
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              Based on preliminary reports, stakeholder submissions, and expert analysis, here are the major reforms the 8th Pay Commission is expected to recommend.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: 'ðŸ’°', title: 'Revised Minimum Pay', desc: 'The minimum basic pay is expected to rise from â‚¹18,000 to approximately â‚¹51,480 (at 2.86x). Employee unions have demanded a pre-fitment base of â‚¹26,000.' },
                { icon: 'ðŸ“Š', title: 'New Pay Matrix Structure', desc: 'A modernised pay matrix with updated pay cells for each level is anticipated, potentially incorporating performance-based increments alongside annual step increases.' },
                { icon: 'ðŸ ', title: 'HRA Rationalisation', desc: 'While HRA percentages (27%, 18%, 9%) may remain unchanged, the city classification list is expected to be updated to reflect current urbanisation patterns.' },
                { icon: 'ðŸ¦', title: 'Pension Revision', desc: 'All pensioners under the old pension scheme (OPS) are expected to receive revised pension amounts. The minimum pension may increase from â‚¹9,000 to over â‚¹25,000 per month.' },
                { icon: 'ðŸ“ˆ', title: 'Performance-Linked Pay', desc: 'The commission may recommend linking a portion of salary increments to performance metrics, encouraging productivity and efficiency in government departments.' },
                { icon: 'ðŸ”„', title: 'DA Merger & Reset', desc: 'At implementation, the accumulated Dearness Allowance is expected to be merged into the new basic pay, and the DA percentage will reset to 0% â€” a standard practice with every pay commission.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-2xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[#090a3d] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#090a3d] mb-3 text-center">
              8th Pay Commission <span className="text-[var(--color-brand-secondary)]">Timeline</span>
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              A roadmap of key milestones â€” from constitution to expected implementation.
            </p>
            <div className="max-w-3xl mx-auto space-y-0">
              {TIMELINE_EVENTS.map((event, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[var(--color-brand-secondary)] ring-4 ring-amber-100 shrink-0 mt-1.5" />
                    {i < TIMELINE_EVENTS.length - 1 && <div className="w-0.5 flex-grow bg-gray-200 my-1" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-xs font-semibold text-[var(--color-brand-secondary)] uppercase tracking-wide">{event.date}</p>
                    <h3 className="font-bold text-[#090a3d] mt-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#090a3d] mb-3 text-center">
              How to Use This <span className="text-[var(--color-brand-secondary)]">Calculator</span>
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              Follow these simple steps to estimate your revised salary under the 8th Pay Commission.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: '1', title: 'Enter Basic Pay', desc: 'Use the slider or type your current basic pay from your salary slip. It ranges from â‚¹18,000 (Level 1) to â‚¹2,50,000 (Level 18).' },
                { step: '2', title: 'Select Pay Level', desc: 'Choose your pay level (1â€“18) from the dropdown. This automatically sets the basic pay to the entry-level amount for that level.' },
                { step: '3', title: 'Adjust Parameters', desc: 'Set the expected fitment factor (default 2.86x), your current DA rate (default 53%), and select your HRA city category (X, Y, or Z).' },
                { step: '4', title: 'View Results', desc: 'The calculator instantly shows your projected new basic pay, allowances, gross salary, and the total increase in both amount and percentage.' },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 text-center">
                  <div className="w-10 h-10 bg-[#090a3d] rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[#090a3d] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#090a3d] mb-3 text-center">
              Frequently Asked <span className="text-[var(--color-brand-secondary)]">Questions</span>
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              Everything you need to know about the 8th Central Pay Commission and how it will affect your salary.
            </p>
            <div className="max-w-3xl mx-auto space-y-3">
              {FAQ_DATA.map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                  >
                    <span className="font-semibold text-[#090a3d] text-sm md:text-base pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-[#090a3d] via-[#0f1163] to-[#1a1c6e] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-[var(--color-brand-secondary)] rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Need Help with Salary Structuring or <span className="text-[var(--color-brand-secondary)]">Tax Planning</span>?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Our team of financial experts can help you optimise your salary structure, plan your taxes efficiently, and make the most of the upcoming pay revision. Get personalised advice today.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm"
            >
              Talk to Our Experts â†’
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

