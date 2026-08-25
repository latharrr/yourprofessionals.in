import { useState } from 'react';
import faqIllustration from '../../assets/faq-illustration.jpg';

interface FAQCategory {
    id: string;
    label: string;
    items: {
        question: string;
        answer: string;
        iconType: 'building' | 'document' | 'clock' | 'chart' | 'globe' | 'shield' | 'calculator';
    }[];
}

const FAQ_DATA: FAQCategory[] = [
    {
        id: 'company-registration',
        label: 'Company Registration',
        items: [
            {
                question: "How do I register a private limited company in India?",
                answer: "Company registration in India is fully online through the Ministry of Corporate Affairs (MCA) portal using the integrated SPICe+ form. The broad sequence is:\n\n• Obtain a Class 3 Digital Signature Certificate (DSC) for each proposed director and subscriber.\n• Reserve the company name through SPICe+ Part A, or file the name together with incorporation in a single submission.\n• File SPICe+ Part B with director details, registered office, capital structure and the linked e-MoA (INC-33) and e-AoA (INC-34).\n• Submit the linked AGILE-PRO-S form, which covers EPFO, ESIC, profession tax where applicable, and bank account opening.\n• Pay applicable stamp duty and government fees, then receive the Certificate of Incorporation with PAN, TAN and DIN allotted together.\n\nMost rejections come from name conflicts and errors in the objects clause of the MoA, which is why founders commonly use a CA or CS firm such as Your Professionals to prepare and file the application.",
                iconType: 'building'
            },
            {
                question: "How much does private limited company registration cost in India?",
                answer: "The total cost has four separate components, and only one of them is a professional fee:\n\n• MCA form filing fee: no filing fee is charged on the SPICe+ incorporation form where authorised share capital does not exceed Rs. 15 lakh, which covers most new companies.\n• State stamp duty on the MoA and AoA: this varies significantly by state and rises with authorised capital, and it is non-refundable if the application is rejected.\n• Digital Signature Certificates: charged per director by the certifying agency.\n• Professional fees for drafting, filing and follow-up.\n\nBecause stamp duty is state-specific and capital-linked, two identical companies registered in different states can pay materially different amounts. Ask any service provider for a written break-up of government charges versus professional fees before you pay.",
                iconType: 'calculator'
            },
            {
                question: "What compliance is required in the first year after company incorporation?",
                answer: "This is the area where new founders most often default, because the obligations start immediately even if the business has not begun trading. The core first-year items are:\n\n• Appoint the first statutory auditor by board resolution within 30 days of incorporation, and file Form ADT-1.\n• Open the company bank account, bring in the subscription money from shareholders, and file Form INC-20A declaring commencement of business within 180 days of incorporation.\n• Hold board meetings as required, and maintain statutory registers and minutes from day one.\n• Get the first financial statements audited, hold the first AGM within the permitted period, and file AOC-4 and MGT-7 or MGT-7A with the Registrar.\n• File the company's income tax return, and complete director KYC as and when it falls due.\n\nMissing INC-20A is the single most common early default, and it can expose the company to strike-off proceedings.",
                iconType: 'shield'
            },
            {
                question: "LLP vs Private Limited Company: which is better for my business?",
                answer: "Both give limited liability, but they suit different plans. A Private Limited Company can issue equity shares, accommodate ESOPs and take on institutional investors, which makes it the standard choice for any business that intends to raise external funding. An LLP has lighter annual compliance and no requirement for a statutory audit until it crosses prescribed turnover or contribution thresholds, which makes it cost-effective for professional practices, consultancies, family businesses and services firms that will be funded from internal accruals. In short: if you expect to raise equity, register a company; if you want a low-maintenance structure with partner flexibility and no fundraising plans, an LLP is usually the better fit.",
                iconType: 'globe'
            },
            {
                question: "How long does company registration take in India?",
                answer: "With complete and consistent documents, incorporation is typically completed within roughly one to two weeks. The realistic breakdown is a day or two for Digital Signature Certificates, a few working days for name approval, and a few more for the Registrar to process SPICe+ and issue the Certificate of Incorporation. The two most common causes of delay are name rejection and mismatched director KYC documents, both of which are avoidable with a proper name search and document check before filing.",
                iconType: 'clock'
            },
            {
                question: "What documents are required for company registration in India?",
                answer: "Requirements fall into three groups. For every director and shareholder: PAN card, Aadhaar, a passport-size photograph, and one identity proof such as a passport, voter ID or driving licence. For address proof of each director: a bank statement or utility bill in their own name, usually not older than two months. For the registered office: a recent utility bill for the premises, plus a No Objection Certificate from the owner and a copy of the rent agreement if the property is rented. Documents that do not match each other exactly on name and address spelling are the single most common reason applications are marked for resubmission.",
                iconType: 'document'
            }
        ]
    },
    {
        id: 'gst-tax',
        label: 'GST & Income Tax',
        items: [
            {
                question: "Who needs GST registration in India and what is the turnover limit?",
                answer: "GST registration becomes compulsory once your aggregate turnover crosses the applicable threshold: broadly Rs. 40 lakh for suppliers of goods and Rs. 20 lakh for service providers in most states, with lower limits of Rs. 20 lakh and Rs. 10 lakh in special category states. Aggregate turnover is computed PAN-India across all your GSTINs and includes exempt supplies and exports, not just taxable sales. Some businesses must register from the first rupee regardless of turnover, including e-commerce sellers and those liable under reverse charge.",
                iconType: 'document'
            },
            {
                question: "What happens if I file my GST returns late?",
                answer: "Three separate consequences apply, and they stack. A late fee accrues per day of delay, at a reduced rate for nil returns, subject to prescribed caps. Interest runs on any unpaid tax from the original due date at the notified rate. And the portal blocks you from filing the next period until the earlier one is filed, so delays compound. There is now a hard outer limit: returns cannot be filed once three years have elapsed from their original due date, after which the period is permanently closed on the portal with no late-filing route available.",
                iconType: 'clock'
            },
            {
                question: "Which income tax return should my business file, and what are the due dates?",
                answer: "The form depends on the entity. Companies other than those claiming charitable exemption file ITR-6. LLPs and partnership firms file ITR-5. A proprietor reports business income in their personal return, using ITR-3, or ITR-4 if opting for presumptive taxation. Due dates were staggered for assessment year 2026-27: broadly 31 July for salaried filers using ITR-1 and ITR-2, 31 August for business and professional filers not subject to audit, 31 October where a tax audit applies, and 30 November for transfer pricing cases.",
                iconType: 'calculator'
            },
            {
                question: "Does a company have to file returns even if it had no revenue or transactions?",
                answer: "Yes, and this is one of the most common and costly misunderstandings among first-time founders. A registered company must file its income tax return every year regardless of whether it earned anything, and must also complete its ROC annual filings and, if registered, its GST returns, including nil returns. The consequences of assuming otherwise are severe: per-day ROC late fees with no upper limit, income tax late filing fees, loss of the ability to carry forward business losses, and eventual strike-off of the company or disqualification of its directors.",
                iconType: 'shield'
            },
            {
                question: "What should I do if my business receives a GST notice?",
                answer: "First, identify what kind of notice it is, because the deadline and the correct response differ. Common ones include a notice for non-filing of returns, a scrutiny notice pointing to a discrepancy between your returns, a notice proposing rejection or cancellation of registration, and a show cause notice proposing demand of tax. Do not ignore a notice on the assumption that it is a system-generated error: an unanswered notice can proceed to a best-judgment assessment or cancellation. Respond on the portal within the stated period and take professional help for anything proposing a demand.",
                iconType: 'building'
            },
            {
                question: "How long does GST registration take now?",
                answer: "This changed materially from 1 November 2025. Under the simplified scheme introduced by Rule 14A of the CGST Rules, eligible low-risk applicants can receive electronic approval within three working days of generating the Application Reference Number, provided Aadhaar authentication is successful. Applications that are not routed through this scheme follow the normal timeline of roughly seven working days, extending to around thirty days where physical verification of premises is triggered.",
                iconType: 'clock'
            }
        ]
    },
    {
        id: 'roc-compliance',
        label: 'ROC Compliance',
        items: [
            {
                question: "What are the annual compliance requirements for a private limited company?",
                answer: "The recurring annual cycle for a private limited company is:\n\n• Get the financial statements audited by the statutory auditor.\n• Hold the required board meetings during the year, and hold the Annual General Meeting within the permitted period.\n• File Form AOC-4 with the audited financial statements, board's report and auditor's report.\n• File Form MGT-7, or MGT-7A for small companies and OPCs, containing the annual return.\n• File Form ADT-1 where an auditor is appointed or reappointed.\n• Complete director KYC, and file DPT-3 and MSME-1 where applicable.\n• Maintain statutory registers and minutes, and file the company's income tax return.\n\nNone of this is optional for a company with no revenue.",
                iconType: 'document'
            },
            {
                question: "What happens if I miss an ROC filing deadline?",
                answer: "The additional fee for delayed filing of AOC-4 and MGT-7 accrues at a per-day rate with no upper cap, so the cost grows indefinitely rather than settling at a fixed penalty. Directors of a company that fails to file financial statements or annual returns for three consecutive financial years become disqualified under Section 164(2) and cannot be reappointed for five years, which affects every other company they sit on. Persistent non-filing also leads the Registrar to initiate strike-off. Because the fee is time-based, filing late is always cheaper than filing later.",
                iconType: 'shield'
            },
            {
                question: "What is DIR-3 KYC and how often do directors have to file it now?",
                answer: "DIR-3 KYC is the verification of a director's contact and identity details with the MCA, required of every individual holding a Director Identification Number. This requirement changed significantly with effect from 31 March 2026: the filing moved from an annual cycle to once every three consecutive financial years, the earlier e-form and web service were merged into a single Form DIR-3 KYC Web, and the due date is 30 June following the relevant third financial year. Missing the filing deactivates the DIN, blocking the director from signing any MCA form until it is reactivated.",
                iconType: 'clock'
            },
            {
                question: "What are the annual compliance requirements for an LLP?",
                answer: "An LLP has two core annual filings. Form 11 is the annual return, covering partners and contribution details, and is due by 30 May for the preceding financial year. Form 8 is the Statement of Account and Solvency, and is due by 30 October. An audit is required only where turnover or partner contribution exceeds the prescribed limits, which is why LLPs are cheaper to maintain than companies at small scale. Late filing attracts a per-day additional fee that continues to accrue, and the accumulated liability can eventually exceed the cost of running the entity.",
                iconType: 'building'
            },
            {
                question: "Is a statutory audit mandatory for a company with no turnover?",
                answer: "Yes. Statutory audit under the Companies Act is mandatory for every company from its first financial year, with no turnover threshold and no exemption for dormant or pre-revenue businesses. This is a frequent source of confusion because the Income-tax Act does have turnover thresholds for a tax audit. A company with nil revenue must still have its accounts audited by a Chartered Accountant and file them in AOC-4. LLPs only require audit above prescribed turnover or contribution limits.",
                iconType: 'chart'
            }
        ]
    },
    {
        id: 'accounting',
        label: 'Accounting',
        items: [
            {
                question: "What is included in monthly outsourced accounting services?",
                answer: "A typical monthly engagement covers the recurring cycle a business cannot afford to fall behind on:\n\n• Recording sales, purchases, expenses, receipts and payments in the accounting software.\n• Bank and credit card reconciliation.\n• Accounts receivable and accounts payable tracking, with an ageing summary.\n• GST workings and reconciliation of purchase records against GSTR-2B, plus return filing where included.\n• TDS computation, payment support and quarterly return filing.\n• Payroll processing and related statutory workings.\n• Monthly management reports covering profit and loss, cash position and key ratios.\n\nScope varies considerably between providers, so ask specifically whether GST and TDS filings, payroll and year-end financials are inside or outside the monthly fee.",
                iconType: 'calculator'
            },
            {
                question: "Should I hire an in-house accountant or outsource my accounting?",
                answer: "The honest comparison is not cost alone but coverage and continuity. An in-house accountant gives you daily availability, immediate context on your business and direct control. Outsourcing gives you a team rather than an individual, so leave and attrition do not stall your filings, and you get access to qualified review at a fraction of a full-time senior salary. Many growing businesses end up with a hybrid: an in-house executive for daily entries, with an outsourced firm reviewing, reconciling and filing.",
                iconType: 'globe'
            },
            {
                question: "What is GST reconciliation, and can it be outsourced together with my accounting?",
                answer: "GST reconciliation is the matching of three sets of data: your books, the returns you filed, and what your suppliers reported about you on the GST portal. The critical exercise is comparing purchase records against the auto-generated GSTR-2B, because input tax credit is only safely available where the supplier has actually reported the invoice. Yes, it can and arguably should be outsourced together with accounting, because splitting bookkeeping and GST filing between two firms is the most common cause of unclaimed credit and mismatch notices.",
                iconType: 'document'
            }
        ]
    },
    {
        id: 'trademark-ipr',
        label: 'Trademark & IPR',
        items: [
            {
                question: "How much does trademark registration cost in India?",
                answer: "Government fees are fixed by the First Schedule to the Trade Marks Rules, 2017 and are charged per class, per mark. For e-filing, the fee is Rs. 4,500 per class for individuals, sole proprietors, DPIIT-recognised startups and Udyam-registered small enterprises, and Rs. 9,000 per class for companies, LLPs and other applicants that do not qualify for the concession. To claim the concessional rate you must submit a valid Udyam or DPIIT certificate at filing — note the concession applies to the application, not to renewal.",
                iconType: 'calculator'
            },
            {
                question: "Is my company name automatically protected as a trademark?",
                answer: "No, and this is one of the most consequential misunderstandings founders have. MCA name approval only means no other company or LLP is registered with a closely similar name; it grants no exclusive right to use that name as a brand. Someone else can hold, or later obtain, a trademark for the same name and legally require you to stop using it commercially, even though your incorporation certificate remains valid. Check the trademark register before you finalise a company name, and file a trademark application for the brand rather than assuming incorporation has covered it.",
                iconType: 'shield'
            },
            {
                question: "How do I register a trademark in India?",
                answer: "The process is handled by the Trade Marks Registry under IP India and runs roughly as follows:\n\n• Conduct a search of the trademark register for identical and similar marks in the relevant class.\n• Identify the correct class or classes, and the applicant category, since fees differ.\n• File Form TM-A online with the mark, applicant details, and description of goods or services.\n• The Registry conducts a formality check and then examination, issuing an examination report if it raises objections.\n• Reply to the examination report within the prescribed period, and attend a hearing if required.\n• If accepted, the mark is advertised in the Trade Marks Journal and remains open to opposition for the prescribed period.\n• If unopposed, the registration certificate is issued.\n\nYou can use the TM symbol from the date of application; the ® symbol may only be used once registration is granted.",
                iconType: 'document'
            },
            {
                question: "What happens if my trademark application receives an objection?",
                answer: "An objection is not a rejection. The Registry issues an examination report setting out its grounds, and you get a prescribed period, generally 30 days, to reply. Objections usually fall under Section 9 (absolute grounds — descriptive, generic or non-distinctive) or Section 11 (relative grounds — conflicts with an earlier similar mark). A reply typically argues distinctiveness and distinguishes the cited marks. Missing the reply deadline can result in the application being treated as abandoned, so this stage is time-critical.",
                iconType: 'clock'
            },
            {
                question: "How do I check whether my brand name is available before applying?",
                answer: "IP India provides a free public search facility on its website where you can search the register by wordmark, by Vienna code for device marks, and by class. A useful search goes beyond exact matches: marks are refused for being deceptively similar, so you need to check phonetic equivalents, common misspellings and marks that differ only by a generic suffix. You should also search the MCA company and LLP name database and check domain and marketplace availability. A professional search additionally interprets whether an existing similar mark is genuinely blocking.",
                iconType: 'globe'
            }
        ]
    }
];

export default function FAQSection() {
    const [activeTab, setActiveTab] = useState<string>('company-registration');
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    const currentCategory = FAQ_DATA.find(c => c.id === activeTab) || FAQ_DATA[0];

    const renderIcon = (type: string) => {
        switch (type) {
            case 'building':
                return (
                    <svg className="w-5 h-5 text-[#090a3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6" />
                    </svg>
                );
            case 'document':
                return (
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                );
            case 'clock':
                return (
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case 'chart':
                return (
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                );
            case 'globe':
                return (
                    <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                );
            case 'shield':
                return (
                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                );
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-gray-100">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 2-COLUMN ENTERPRISE LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* LEFT COLUMN: BADGE, HEADING, SUBTITLE & VECTOR ARTWORK */}
                    <div className="lg:col-span-4 space-y-6">
                        <div>
                            <span className="inline-block bg-amber-100 text-[var(--color-brand-secondary)] font-extrabold text-[11px] uppercase tracking-widest px-3 py-1 rounded-md mb-3">
                                FAQS
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#090a3d] tracking-tight leading-tight">
                                Frequently <br className="hidden md:inline" />Asked Questions
                            </h2>
                            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                                Find quick answers to common questions about our corporate services, filing processes, and legal compliances.
                            </p>
                        </div>

                        {/* ENTERPRISE ARTWORK GRAPHIC */}
                        <div className="rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg bg-white relative group">
                            <img
                                src={faqIllustration}
                                alt="Frequently Asked Questions - Your Professionals CA & Legal Advisory"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: CATEGORY TABS, ACCORDION LIST & BOTTOM BANNER */}
                    <div className="lg:col-span-8 space-y-6">
                        
                        {/* CATEGORY TABS HEADER */}
                        <div className="bg-slate-100/80 p-1.5 rounded-2xl flex flex-wrap gap-1.5 border border-gray-200/80">
                            {FAQ_DATA.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setActiveTab(cat.id);
                                        setOpenIdx(0);
                                    }}
                                    className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                                        activeTab === cat.id
                                            ? 'bg-[#090a3d] text-white shadow-md'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* ACCORDION ITEMS */}
                        <div className="space-y-3">
                            {currentCategory.items.map((item, idx) => {
                                const isOpen = openIdx === idx;
                                return (
                                    <div
                                        key={idx}
                                        className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                                            isOpen
                                                ? 'border-[var(--color-brand-secondary)] shadow-md'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenIdx(isOpen ? null : idx)}
                                            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3.5">
                                                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                                    {renderIcon(item.iconType)}
                                                </div>
                                                <span className="font-bold text-sm md:text-base text-[#090a3d]">
                                                    {item.question}
                                                </span>
                                            </div>
                                            
                                            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-lg font-bold transition-transform duration-300 shrink-0 ${
                                                isOpen 
                                                    ? 'bg-amber-100 text-[var(--color-brand-secondary)] rotate-45' 
                                                    : 'bg-slate-100 text-gray-500'
                                            }`}>
                                                +
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="px-6 pb-5 pt-3 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100/80 ml-12 whitespace-pre-line">
                                                {item.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* STILL HAVE QUESTIONS BOTTOM BANNER */}
                        <div className="bg-slate-100/90 rounded-2xl p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                            <div className="flex items-center gap-3 text-center sm:text-left">
                                <div className="w-10 h-10 rounded-full bg-[#090a3d] text-white flex items-center justify-center shrink-0 shadow-md">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-sm text-[#090a3d]">
                                        Still have questions?
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        Our legal and tax experts are here to help you.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => window.dispatchEvent(new Event('openConsultationPopup'))}
                                className="bg-[#090a3d] hover:bg-[#12155a] text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer shrink-0"
                            >
                                <span>Talk to an Expert</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
