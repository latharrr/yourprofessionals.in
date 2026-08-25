import type { ServiceData } from '../services';

export const CONVERT_BUSINESS: Record<string, ServiceData> = {

    /* ────────────────────────────── 1. CONVERT PARTNERSHIP INTO LLP ────────────────────────────── */

    'convert-partnership-into-llp': {
        slug: 'convert-partnership-into-llp',
        title: 'Convert Partnership Into LLP',
        subtitle: 'Converting a traditional partnership to a Limited Liability Partnership (LLP) offers several key advantages. The most significant is limited liability, which protects your personal assets from business',
        heroFeatures: [
            'Converting a traditional partnership to a Limited Liability Partnership (LLP) offers several key advantages.',
            'This structure also provides more flexibility in management and a separate legal identity, making it easier to build trust with clients and investors.',
            'Additionally, LLPs offer better access to funding and remain cost-effective with a lower compliance burden compared to a private limited company, while still retaining the simplicity of a partnership.',
            'The conversion process is governed by Section 55 of the LLP Act, 2008, read with the Second Schedule, which lays down the legal framework for a smooth and compliant transition from a traditional partn',
        ],
        overview: {
            heading: 'Why Consider Converting Your Partnership to an LLP?',
            paragraphs: [
                '<p>Converting a traditional partnership to a Limited Liability Partnership (LLP) offers several key advantages. The most significant is limited liability, which protects your personal assets from business debts. Unlike a traditional partnership where partners are personally responsible, an LLP shields you from the actions of other partners and the firms financial obligations.</p>',
                '<p>This structure also provides more flexibility in management and a separate legal identity, making it easier to build trust with clients and investors.</p>',
                '<p>Additionally, LLPs offer better access to funding and remain cost-effective with a lower compliance burden compared to a private limited company, while still retaining the simplicity of a partnership.</p>',
                '<p>The conversion process is governed by Section 55 of the LLP Act, 2008, read with the Second Schedule, which lays down the legal framework for a smooth and compliant transition from a traditional partnership to an LLP.</p>',
            ],
            highlights: [
                { icon: '📋', text: 'Converting a traditional partnership to a Limited Liability Partnership (LLP) offers several key advantages.' },
                { icon: '📊', text: 'This structure also provides more flexibility in management and a separate legal identity, making it easier to build trust with clients and investors.' },
                { icon: '💰', text: 'Additionally, LLPs offer better access to funding and remain cost-effective with a lower compliance burden compared to a private limited company, while still retaining the simplicity of a partnership.' },
                { icon: '⚖️', text: 'The conversion process is governed by Section 55 of the LLP Act, 2008, read with the Second Schedule, which lays down the legal framework for a smooth and compliant transition from a traditional partn' },
            ],
        },
        types: [
            { title: 'Governing Law', desc: 'Governed by the Limited Liability Partnership Act, 2008. | Governed by the Indian Partnership Act, 1932.' },
            { title: 'Registration', desc: 'Mandatory registration as per the LLP Act. | Registration is optional under the Indian Partnership Act.' },
            { title: 'Registering Authority', desc: 'Documents and forms are submitted to the Registrar of Companies (RoC). | Registration forms are filed with the Registrar of Firms.' },
            { title: 'Creation', desc: 'Established through legal incorporation. | Formed by a contractual agreement among partners.' },
            { title: 'Binding Document', desc: 'Governed by an LLP agreement. | Governed by a partnership deed.' },
            { title: 'Annual Filing Requirements', desc: 'Annual filing of Statement of Accounts & Solvency and Annual Return with RoC is required. | No annual return filing requirement with the Registrar of Firms.' },
            { title: 'Power to Contract', desc: 'Can contract in its own name. | Cannot contract in its own name; contracts are in the name of partners.' },
            { title: 'Legal Status', desc: 'Recognized as a separate legal entity. | Not recognized as a separate legal entity.' },
            { title: 'Liability of Partners', desc: 'Liability is limited to the capital contribution. | Partners have unlimited liability.' },
            { title: 'Name Requirement', desc: 'Must end with LLP. | No mandatory naming requirement.' },
            { title: 'Perpetual Succession', desc: 'Continues regardless of changes in partners. | Dissolves upon changes in the partnership unless agreed otherwise.' },
            { title: 'Maximum Partners', desc: 'No limit on the number of partners. | Limited to a maximum of 50 partners.' },
            { title: 'Asset Ownership', desc: 'Assets are owned by the LLP itself. | Assets are jointly owned by the partners.' },
            { title: 'Property Ownership', desc: 'LLP can hold property in its own name. | Property is held in the names of partners or as per the deed.' },
            { title: 'Agency Relationship', desc: 'Partners act as agents of the LLP, not of each other. | Partners act as agents of the firm and of each other.' },
            { title: 'Common Seal', desc: 'May have a common seal used for official purposes. | No concept of a common seal; documents are signed by partners.' },
            { title: 'DPIN & DSC Requirement', desc: 'Designated partners must obtain DPIN and DSC. | No requirement for DPIN or DSC for partners.' },
            { title: 'Management & Administration', desc: 'Managed by designated partners responsible for statutory compliance. | Managed directly by the partners with no specific compliance requirements.' },
            { title: 'Foreign Participation', desc: 'Foreign nationals can be partners in an LLP. | Foreign nationals cannot form a partnership firm in India.' },
            { title: 'Audit Requirement', desc: 'Audit is mandatory if turnover exceeds Rs. 40 lakh or contribution exceeds Rs. 25 lakh. | Audit is governed under the Income Tax Act, based on turnover thresholds.' },
            { title: 'Dissolution Process', desc: 'Can be dissolved voluntarily or through an order by NCLT. | Dissolution can occur through agreement, mutual consent, court order, or insolvency.' },
            { title: 'Arrangement & Amalgamation', desc: 'LLPs can enter into arrangements, compromises, or amalgamate with other LLPs. | Not allowed to enter into arrangements or amalgamate with another firm.' },
        ],
        eligibility: [
            'Registration Under Indian Partnership Act, 1932:The partnership firm must hold an official registration under this Act.',
            'Partner Agreement and Continuity:',
            'All partners of the existing firm must agree to the conversion; unanimous consent is mandatory.The LLP, at the point of conversion, must comprise the identical set of partners as the original partnership firm.Alterations to the partner composition (e.g., adding or removing partners) are permissible post-LLP formation, in accordance with the LLP agreement.',
            'All partners of the existing firm must agree to the conversion; unanimous consent is mandatory.',
            'The LLP, at the point of conversion, must comprise the identical set of partners as the original partnership firm.',
            'Alterations to the partner composition (e.g., adding or removing partners) are permissible post-LLP formation, in accordance with the LLP agreement.',
            "Absence of Security Interest on Assets:There should be no existing security interests (such as mortgages or charges) on the partnership firm's assets at the time of submitting the conversion application.",
            'Minimum Designated Partners:An LLP is mandated to have at least two designated partners, who must be natural persons.',
            'Digital Signature Certificates (DSCs):All partners involved in the conversion process are required to possess validDSCs.',
            'Designated Partner Identification Number (DPIN):At least two designated partners must obtain a DPIN, also recognized as aDirector Identification Number (DIN).',
            'Adherence to Other Legal Requirements:The firm must comply with all other pertinent laws and regulations, including the timely submission of all pending tax returns and financial statements.',
            'No Partner Disqualification:No partner should be disqualified under any applicable legal provisions, such as Section 5 of the LLP Act, 2008.',
        ],
        documents: [
            { category: 'Required Documents', items: [
                'The following documents are necessary for the successful conversion of a partnership firm into a Limited Liability Partnership (LLP):',
            ] },
            { category: 'Documents to Be Submitted by the Partners', items: [
                'PAN Card or Passport (for Foreign Nationals & NRIs)',
                'Aadhar Card, Voter ID, Passport, or Drivers License',
                'Most recent bank statement, telephone/mobile bill, or electricity/gas bill',
                'passport-sized photograph',
                'Specimen signature (the partners signature on a blank sheet of paper, which will be scanned for use in digital applications).',
                'Note:One of the partners must self-attest the first three documents.',
                'For Foreign Nationals and NRIs:',
                'If residing in India or a non-Commonwealth country, the documents must be notarized.',
                'If residing in a Commonwealth country, the documents must be apostilled.',
            ] },
            { category: 'Documents for the Registered Office', items: [
                'Latest utility bill (bank statement, telephone/mobile, electricity, or gas bill)',
                'Notarized rental agreement in English (if the property is rented)',
                'No-Objection Certificate (NOC)from the property owner',
                'Sale deed or property deed in English (if the property is owned)',
            ] },
        ],
        process: [
            { title: 'Step 1: Name Approval and Digital Signature Certificate (DSC)', desc: 'Name Approval Begin by registering and logging into the Ministry of Corporate Affairs (MCA) portal.Navigate to the "MCA Services" section and select "RUN - LLP" (Reserve Unique Name).Choose the option "Conversion of Firm into LLP" from the dropdown menu.Provide two proposed names for the new LLP.Upload any supporting documents in PDF format and click the "Submit" button.Proceed to the payment gateway to pay the application fee of ₹200.The approved name will be reserved for 90 days. Digital Signature Certificates (DSC) Designated Partners must obtain their Digital Signature Certificates before moving forward.All e-forms involved in the conversion process must be digitally signed using the DSCs of the Designated Partners.' },
            { title: 'Step 2: Filing Required Forms with the Registrar of Companies (RoC)', desc: 'Form 17 - Application for Conversion This form requires the following details: SRN (Service Request Number) from the RUN - LLP application.Proposed name of the LLP.Firms name, address, registration number, and partnership deed details.Information about the number of partners and capital contributions.Details of secured creditors. Mandatory Attachments: Consent of all partners for the conversion.Statement of assets and liabilities certified by a practicing Chartered Accountant.Copy of the most recent Income Tax Return acknowledgment.List of secured creditors along with their written consent.Additional supporting documents, if applicable. Form FiLLiP - LLP Incorporation Application This form includes: Auto-filled details from the RUN - LLP form.Address and email ID of the LLPs registered office.Jurisdictional RoC office.Description of proposed business activities.Details of all partners/designated partners, including DIN/DPIN, PAN, and contributions. Attachments Required: Proof of registered office address.Consent letters from subscribers.NOC from the property owner and recent utility bills (not older than 2 months).Regulatory approvals, if needed.Details of other companies/LLPs where designated partners are involved.Identity and address proof of the applicants.In case of name similarity with existing entities, a Board Resolution or NOC from the concerned LLP or company.' },
            { title: 'Step 3: Certificate of Registration', desc: 'Once the Registrar approves the submitted forms, a Certificate of Registration for the newly incorporated LLP is issued.' },
            { title: 'Step 4: Execution of LLP Agreement', desc: 'Within 30 days of incorporation, Form LLP-3 must be filed with the Registrar to submit the LLP Agreement. The agreement must include the following details: Name of the LLPDetails of designated and other partnersCapital contribution and profit-sharing ratioRules and regulations governing the LLPRights and responsibilities of the partners' },
            { title: 'Step 5: Notification to Registrar of Firms', desc: 'The Registrar of Firms must be notified about the conversion within 15 days of incorporation using Form 14. This form should be accompanied by: A copy of the LLPs Certificate of IncorporationA copy of the incorporation documents submitted via Form FiLLiP' },
        ],
        fees: [
            { item: 'Name Reservation (RUN-LLP)', cost: 'Rs. 200 (Fee to reserve your LLP name. Can be skipped if applying directly through the FiLLiP form.)' },
            { item: 'LLP Incorporation & Conversion Fee (via FiLLiP):Based on the LLPs capital contribution:Up to Rs. 1 lakh', cost: 'Rs. 500Rs. 1 lakh to Rs. 5 lakhs - Rs. 2,000Rs. 5 lakhs to Rs. 10 lakhs - Rs. 4,000Above Rs. 10 lakhs - Rs. 5,000 to Rs. 25,000' },
            { item: 'Filing of LLP Agreement (Form 3)', cost: 'Varies by capital amount; starts from Rs. 50. Late filing invites a penalty of Rs. 100 per day.' },
            { item: 'DPIN (Designated Partner Identification Number)', cost: 'Usually issued free when obtained during LLP incorporation.' },
            { item: 'Up to Rs. 1 lakh', cost: 'Rs. 500' },
            { item: 'Rs. 1 lakh to Rs. 5 lakhs', cost: 'Rs. 2,000' },
            { item: 'Rs. 5 lakhs to Rs. 10 lakhs', cost: 'Rs. 4,000' },
            { item: 'Above Rs. 10 lakhs', cost: 'Rs. 5,000 to Rs. 25,000' },
            { item: 'Digital Signature Certificates (DSC)', cost: 'Rs. 800 - Rs. 1,500 per partner (Required for online filings. Two partners may cost Rs. 1,600 to Rs. 3,000.)' },
            { item: 'Consultation & Professional Fees', cost: 'Rs. 5,000 - Rs. 20,000+ (For legal drafting, documentation, compliance advisory, and end-to-end filing support.)' },
            { item: 'Notary & Attestation Charges', cost: 'Rs. 100 - Rs. 500 (For notarizing affidavits and required declarations.)' },
            { item: 'Stamp Duty on LLP Agreement', cost: 'Depends on the registering state and capital contribution. In states like Delhi or Maharashtra, its usually 1% with a cap.' },
            { item: 'PAN & TAN Application Fees', cost: 'Rs. 66 (PAN), Rs. 77 (TAN) (Required if new PAN and TAN are being issued for the LLP.)' },
            { item: 'Miscellaneous Costs', cost: 'Rs. 500 - Rs. 2,000+ (Includes admin charges like courier, printing, and other incidental expenses.)' },
        ],
        advantages: [
            { icon: '✅', title: 'Limited Liability Protection', desc: 'This is the most crucial benefit. In an LLP, the personal assets of the partners are protected from the debts and liabilities of the business. Each partners liability is limited to their agreed contribution to the LLP. In contrast, partners in a traditional partnership have unlimited liability, meaning their personal assets can be used to settle business debts.' },
            { icon: '🏛️', title: 'Separate Legal Entity', desc: 'An LLP is a separate legal entity, which means it is different from its partners.It can own property, sign contracts, and file or face legal cases in its own name.In a traditional partnership, the law does not legally distinguish the business from its partners.Therefore, partners are personally responsible for the firms actions and debts.' },
            { icon: '🤝', title: 'Perpetual Succession', desc: 'An LLP has perpetual succession, meaning its existence is not affected by the death, retirement, insolvency, or change of partner. The business continues to operate seamlessly. A traditional partnership firm, on the other hand, typically dissolves upon the exit or death of a partner unless the partnership deed explicitly provides for continuation.' },
            { icon: '📈', title: 'Flexibility in Management', desc: 'LLPs offer greater flexibility in defining the roles and responsibilities of partners through the LLP Agreement. It allows for designated partners to handle day-to-day operations, while other partners can contribute capital without being actively involved in management. In a traditional partnership, all partners generally have an equal say in management.' },
            { icon: '🛡️', title: 'No Limit on Number of Partners', desc: 'An LLP must have at least 2 partners to start, but there is no upper limit on the number of partners it can have. This makes LLPs a highly scalable option for growing businesses that may need to add more partners over time. In comparison, a traditional partnership firm in India can have a maximum of 50 partners, which can be a restriction as the business expands.' },
            { icon: '💼', title: 'Enhanced Credibility and Global Recognition', desc: 'Being a registered entity with a separate legal identity, an LLP generally enjoys greater credibility among clients, investors, and financial institutions, both domestically and internationally. Also, after registration, the LLP gets a unique number called LLPIN (Limited Liability Partnership Identification Number). This number helps in verifying the LLPs legal status and increases its professional image and trustworthiness.' },
            { icon: '📉', title: 'Tax Benefits', desc: 'Both LLPs and partnership firms are taxed at a flat rate of 30% on their income, plus applicable surcharge and cess. But LLPs have one big advantage. They dont have to pay Dividend Distribution Tax (DDT) when giving profits to partners. This makes it more tax-friendly than companies.' },
            { icon: '👥', title: 'Ease of Transferability', desc: 'In an LLP, adding a new partner or transferring ownership is usually easier. It mainly requires an update to the LLP Agreement. On the other hand, in a traditional partnership firm, this process is more difficult as it often needs approval from all existing partners.' },
        ],
        disadvantages: [
            'Overcoming Challenges: Seek Professional Legal Advice:Getting advice from legal experts who specialize in LLP conversions can help you manage the complicated parts of the process.Detailed Partnership Agreement:Having a thorough partnership agreement that spells out responsibilities, how profits are shared, and how disagreements will be handled is crucial for a smooth transition.Transparent Communication:Being open and honest when talking with all partners, creditors, and other involved parties is essential for addressing concerns and ensuring a smooth change.Careful Planning and Execution:Careful planning and carrying out the conversion process, including handling all legal, financial, and operational aspects, are key to making it successful. Pro Tip:A partnership firm cannot be converted into an LLP if it is engaged in any business that requires prior regulatory approval, like banking, insurance, or NBFCs, unless such approval is obtained before the conversion.',
        ],
        compliance: [
            { area: 'Dissolution of Partnership', details: 'The original partnership firm is officially closed down and taken off the records of the relevant government body, like the Registrar of Firms.' },
            { area: 'Establishment of LLP', details: 'A brand new LLP is created with its own distinct legal identity, and its name is formally added to the registration certificate.' },
            { area: 'Transfer of Assets and Liabilities', details: 'All possessions, debts, rights, and responsibilities of the old partnership firm are fully transferred to and become the property of the newly formed LLP.' },
            { area: 'Continuation of Existing Contracts', details: 'Any existing agreements or contracts that the partnership firm had entered into remain valid and are now legally binding on the LLP.' },
            { area: 'Pending Legal Proceedings', details: 'Any ongoing court cases or legal actions, whether started by or against the partnership firm, will now continue by or against the LLP.' },
            { area: 'Limited Liability', details: 'Partners in the LLP benefit from limited liability, which generally means their personal belongings are safe from the businesss debts and obligations. However, partners remain accountable for any liabilities of the old partnership that came about before the conversion.' },
            { area: 'Continuity of Business', details: 'The LLP can carry on the business operations without any breaks, making full use of the assets, contracts, and legal standing that belonged to the former partnership.' },
            { area: 'Specific Disclosures', details: 'For a certain period (for example, 12 months), the LLP must mention its previous status as a partnership firm in its official communications.' },
        ],
        faqs: [
            { q: 'What is the main benefit of converting a partnership firm to an LLP?', a: 'The main benefit is limited liability protection. In an LLP, the personal assets of the partners are protected from the businesss debts and liabilities, unlike a traditional partnership where partners have unlimited personal liability.' },
            { q: 'Is it mandatory for all partners to agree to the conversion?', a: '' },
            { q: 'Do I need a Digital Signature Certificate (DSC) and DPIN for conversion?', a: '' },
            { q: 'What forms are involved in the conversion process?', a: '' },
            { q: 'How long does the LLP name approval last?', a: '' },
            { q: 'What is the deadline for filing the LLP Agreement after incorporation?', a: '' },
            { q: 'Are there any tax implications on conversion from partnership to LLP?', a: '' },
            { q: 'Do existing contracts and liabilities transfer to the new LLP?', a: '' },
            { q: 'Is an LLP required to maintain books of accounts?', a: '' },
            { q: 'Can new partners be added during the conversion process?', a: '' },
        ],
        cta: {
            heading: 'Need Help With Convert Partnership Into LLP?',
            subheading: 'Let Your Professionals handle your convert partnership into llp requirements with expert guidance and timely filing.',
            features: [
                'Expert Compliance Professionals',
                'Timely Filing Guarantee',
                'Dedicated Support Manager',
                'Transparent Pricing',
            ],
        },
    },


    /* ────────────────────────────── 2. SOLE PROPRIETORSHIP TO PARTNERSHIP ────────────────────────────── */
    'convert-sole-proprietorship-to-partnership': {
        slug: 'convert-sole-proprietorship-to-partnership',
        title: 'Convert Sole Proprietorship to Partnership',
        subtitle: 'Converting your sole proprietorship business into a partnership firm allows you to pool capital, share responsibilities, and scale business operations.',
        heroFeatures: [
            'Divides workload and management responsibilities.',
            'Enables pooling of capital and resources.',
            'Straightforward transition via Partnership Deed.',
            'Separate legal tax assessment for the firm.',
        ],
        overview: {
            heading: 'Overview of Sole Proprietorship to Partnership Conversion',
            paragraphs: [
                'A sole proprietorship is a business owned and managed by a single person. While easy to start, it has limitations in terms of capital and scalability. Converting it into a partnership firm allows multiple owners to collaborate, share risks, and contribute capital.',
                'The transition involves drafting a comprehensive Partnership Deed, applying for a new business PAN, transferring existing assets/contracts, and updating registrations like GST, MSME, and bank accounts to the new firm name.'
            ],
            highlights: [
                { icon: '👥', text: 'Share managerial responsibilities and risks.' },
                { icon: '💰', text: 'Access larger capital contributions from partners.' },
                { icon: '📋', text: 'Requires drafting of a new Partnership Deed.' },
                { icon: '🏢', text: 'Smooth transfer of assets, liabilities, and business licenses.' }
            ]
        },
        eligibility: [
            'At least two partners are required.',
            'Partners must be competent to enter into a contract.',
            'Consent from existing creditors (if any) is required.',
            'Business objective must be legal.'
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'PAN and Aadhaar of all partners.',
                    'Utility bill of the business registered address.',
                    'NOC from the property owner (for address proof).',
                    'Passport size photographs of all partners.'
                ]
            }
        ],
        process: [
            { title: 'Step 1: Drafting the Partnership Deed', desc: 'Define roles, profit sharing ratio, capital contributions, and operational rules in a written partnership agreement.' },
            { title: 'Step 2: Apply for a New business PAN', desc: 'A partnership is a separate tax entity, so you must apply for a new PAN card in the firm name.' },
            { title: 'Step 3: Asset Transfer', desc: 'Transfer the existing assets, bank accounts, and liabilities of the sole proprietorship to the partnership.' },
            { title: 'Step 4: Update Tax & Business Registrations', desc: 'Amend or apply fresh for GST, MSME, and other commercial registrations under the new partnership name.' }
        ],
        fees: [
            { item: 'Partnership Deed Drafting', cost: '₹2,000' },
            { item: 'PAN & TAN Applications', cost: '₹200' },
            { item: 'GST and MSME Registration Updates', cost: '₹1,500' }
        ],
        advantages: [
            { icon: '👥', title: 'Shared Responsibilities', desc: 'Leverage diverse skills, expertise, and contacts of partners to manage and grow the business.' },
            { icon: '💸', title: 'Higher Capital Pooling', desc: 'Multiply funding potential as all partners contribute to the base capital structure.' }
        ],
        faqs: [
            { q: 'Can a sole proprietorship be directly converted to a partnership?', a: 'Yes. It involves drafting a Partnership Deed, registering the firm, obtaining a new PAN, and transferring all assets/liabilities to the new partnership.' },
            { q: 'Is a new PAN card mandatory?', a: 'Yes, a partnership firm is treated as a separate legal entity for tax purposes and requires a new PAN card.' }
        ]
    },

    /* ────────────────────────────── 3. CONVERT PRIVATE LIMITED TO LLP ────────────────────────────── */
    'convert-private-limited-to-llp': {
        slug: 'convert-private-limited-to-llp',
        title: 'Convert Private Limited to LLP',
        subtitle: 'Convert your private limited company into a Limited Liability Partnership (LLP) to enjoy lower compliance requirements while keeping limited liability.',
        heroFeatures: [
            'No mandatory statutory audit for small LLPs.',
            'No Dividend Distribution Tax (DDT) on profit distribution.',
            'Significantly lower annual compliance overhead.',
            'Maintains limited liability protection for all partners.',
        ],
        overview: {
            heading: 'Overview of Private Limited to LLP Conversion',
            paragraphs: [
                'Converting a Private Limited Company to an LLP is an attractive option for businesses looking to simplify their administration. An LLP offers similar benefits like limited liability and a separate legal entity, but with much fewer compliance requirements.',
                'The conversion is governed by Section 56 and the Third Schedule of the LLP Act, 2008. All shareholders of the company must become partners in the LLP, with no external partners added during the conversion process.'
            ],
            highlights: [
                { icon: '⚖️', text: 'Retains limited liability protection.' },
                { icon: '📉', text: 'Substantially reduces accounting and compliance costs.' },
                { icon: '🔄', text: 'No DDT applicable on profit sharing.' },
                { icon: '📋', text: 'All company shareholders must become LLP partners.' }
            ]
        },
        eligibility: [
            'All shareholders must consent to the conversion.',
            'No security interest on the company assets must be active.',
            'Up-to-date filing of MCA returns (Form AOC-4 and MGT-7).',
            'No open charges or prosecutions against the company.'
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'PAN and Aadhaar of all directors/shareholders.',
                    'Consent of all shareholders for conversion.',
                    'Latest audited financial statements of the company.',
                    'Written consent from secured creditors.',
                    'Copy of ITR acknowledgment of the company.'
                ]
            }
        ],
        process: [
            { title: 'Step 1: Board Meeting & DPIN Verification', desc: 'Hold a board meeting to approve conversion and verify all director DPINs.' },
            { title: 'Step 2: File Form 18 (Application for Conversion)', desc: 'Submit the conversion application along with shareholders consent and financial statements to the RoC.' },
            { title: 'Step 3: File Form FiLLiP (Incorporation)', desc: 'Submit incorporation details, registered address proof, and partners credentials.' },
            { title: 'Step 4: Draft and File LLP Agreement', desc: 'File Form 3 containing the LLP agreement within 30 days of receiving the certificate of incorporation.' }
        ],
        fees: [
            { item: 'RoC Form 18 and FiLLiP Filing Fees', cost: '₹5,000 (Varies with capital)' },
            { item: 'LLP Agreement Stamp Duty', cost: 'Starts from ₹500 (State dependent)' },
            { item: 'Professional Advisory Fee', cost: 'Contact for quotation' }
        ],
        advantages: [
            { icon: '💸', title: 'Tax Efficiency', desc: 'Profits distributed by an LLP to its partners are exempt from tax, unlike dividends from a Private Limited Company.' },
            { icon: '📂', title: 'Fewer Compliances', desc: 'No board meetings, general meetings, or complex register maintenance is required for LLPs.' }
        ],
        faqs: [
            { q: 'What happens to the company assets upon conversion?', a: 'All assets, liabilities, properties, and contracts of the Private Limited Company automatically transfer to the LLP upon successful registration.' },
            { q: 'Is an audit mandatory for an LLP?', a: 'Only if the contributions exceed ₹25 Lakhs or the annual turnover exceeds ₹40 Lakhs.' }
        ]
    },

    /* ────────────────────────────── 4. CONVERT OPC TO PRIVATE LIMITED ────────────────────────────── */
    'convert-opc-to-private-limited': {
        slug: 'convert-opc-to-private-limited',
        title: 'Convert OPC to Private Limited',
        subtitle: 'Convert a One Person Company (OPC) into a Private Limited Company to introduce equity partners, raise capital, and scale operations.',
        heroFeatures: [
            'Allows adding multiple directors and shareholders.',
            'Enables raising venture capital/equity funding.',
            'Increases credibility for institutional contracts.',
            'No limit on the number of shareholders (up to 200).',
        ],
        overview: {
            heading: 'Overview of OPC to Private Limited Conversion',
            paragraphs: [
                'A One Person Company (OPC) is perfect for solo entrepreneurs. However, to raise external equity funding or add partners, conversion into a Private Limited Company is necessary.',
                'The conversion can be done voluntarily at any time by filing Form INC-6. It requires adding at least one more director and shareholder, updating the Memorandums and Articles of Association (MOA & AOA), and securing approval from the RoC.'
            ],
            highlights: [
                { icon: '📈', text: 'Enables business scaling and equity dilution.' },
                { icon: '👥', text: 'Requires a minimum of 2 directors and 2 shareholders.' },
                { icon: '📝', text: 'Involves amending MOA and AOA clauses.' },
                { icon: '🏛️', text: 'Facilitates institutional investments.' }
            ]
        },
        eligibility: [
            'Minimum of two directors and shareholders are required.',
            'No pending defaults in filing annual returns.',
            'Unanimous consent from the single member and nominee.'
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'PAN and Aadhaar of the new director/shareholder.',
                    'Altered MOA and AOA of the company.',
                    'Board Resolution approving the conversion.',
                    'Consent letters from the new director and subscriber.'
                ]
            }
        ],
        process: [
            { title: 'Step 1: Appoint New Director & Shareholder', desc: 'Secure consent and execute appointment of at least one new director and shareholder.' },
            { title: 'Step 2: Draft Altered MOA and AOA', desc: 'Update the clauses of the Memorandum and Articles of Association to reflect the private company structure.' },
            { title: 'Step 3: File Form INC-6', desc: 'Submit the application for conversion of OPC into Private Limited Company to the Registrar of Companies.' },
            { title: 'Step 4: Obtain Fresh Certificate of Incorporation', desc: 'The Registrar reviews and issues a new certificate reflecting the updated Private Limited status.' }
        ],
        fees: [
            { item: 'RoC Form INC-6 Filing Fee', cost: '₹2,000' },
            { item: 'Stamp Duty on Altered MOA/AOA', cost: '₹1,000' },
            { item: 'Professional Execution Charges', cost: 'Contact for pricing' }
        ],
        advantages: [
            { icon: '💼', title: 'Equity Funding Access', desc: 'Raise investment from Venture Capitalists or Angel Investors by issuing shares easily.' },
            { icon: '📈', title: 'Uncapped Growth', desc: 'Add up to 200 shareholders and expand corporate leadership to scale operations.' }
        ],
        faqs: [
            { q: 'Is there a threshold limit for compulsory conversion of OPC?', a: 'Under the revised Companies Rules, there is no longer a compulsory conversion threshold based on paid-up capital or turnover; conversion is voluntary.' },
            { q: 'What is the minimum number of members for a Private Limited Company?', a: 'A minimum of 2 members and 2 directors are required.' }
        ]
    }
};
