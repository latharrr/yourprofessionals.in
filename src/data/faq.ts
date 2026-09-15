export interface FAQCategory {
    id: string;
    label: string;
    items: {
        question: string;
        answer: string;
        iconType: 'building' | 'document' | 'clock' | 'chart' | 'globe' | 'shield' | 'calculator';
    }[];
}

export const FAQ_DATA: FAQCategory[] = [
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

export const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.flatMap((category) =>
        category.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        }))
    ),
};
