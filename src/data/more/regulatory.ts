import type { ServiceData } from '../services';

export const REGULATORY: Record<string, ServiceData> = {

    'nbfc-registration': {
        slug: 'nbfc-registration',
        title: 'NBFC Registration',
        subtitle:
            'Setting up an NBFC in India offers a promising opportunity for entrepreneurs aiming to enter the financial services sector without obtaining a full banking license. These companies cater to diverse customer segments by offering personal loans, gold loans, vehicle financing, micro-lending, and more',
        heroFeatures: [
            'Loans and advances',
            'Credit facilities',
            'Asset Financing',
            'Investment Management',
            'Hire-Purchase',
        ],
        overview: {
            heading: 'Overview of NBFC Registration in India',
            paragraphs: [
                'Setting up an NBFC in India offers a promising opportunity for entrepreneurs aiming to enter the financial services sector without obtaining a full banking license. These companies cater to diverse customer segments by offering personal loans, gold loans, vehicle financing, micro-lending, and more',
                'NBFCs play a vital role in financial inclusion by reaching unbanked and underserved regions where traditional banks may not operate efficiently.',
                'As the demand for alternative financing grows, especially among small businesses and rural borrowers, NBFCs have become a preferred lending channel. However, to operate legally, an NBFC must first be registered and regulated by the RBI.',
                'A Non-Banking Financial Company (NBFC) is a company (registered under the Companies Act) that provides banking-like services, including',
                'By law, an NBFC’s principal business must be financial, for example, lending money or investing in securities, rather than activities like agriculture, industrial production, trading goods or services, or real estate construction.',
                'In other words, it should earn most of its income from financial activities (the 50-50 test) to qualify as an NBFC. The Reserve Bank of India (RBI) regulates NBFCs, and no company can operate as an NBFC without RBI approval.',
            ],
            highlights: [
                { icon: '📋', text: 'Loans and advances' },
                { icon: '📊', text: 'Credit facilities' },
                { icon: '💰', text: 'Asset Financing' },
                { icon: '⚖️', text: 'Investment Management' },
                { icon: '🔍', text: 'Hire-Purchase' },
                { icon: '📅', text: 'Leasing' },
            ],
        },
        types: [
            {
                title: '1. Investment and Credit Company (ICC)',
                desc: 'An ICC is a non-deposit-taking NBFC that primarily engages in asset financing, providing loans/advances, or acquiring securities. It does not include specialized NBFCs like housing finance or microfinance. Essentially, ICCs function as general lenders or investors.',
            },
            {
                title: '2. Infrastructure Finance Company (IFC)',
                desc: 'An Infrastructure Finance Company (IFC) is an NBFC that deploys at least 75% of its total assets in infrastructure lending. IFCs must also meet minimum size and capital norms set by the RBI. They channel funds into projects like roads, power, ports, etc., long-term in nature.',
            },
            {
                title: '3. Micro Finance Institution (MFI)',
                desc: 'An NBFC-MFI is a non-deposit-taking NBFC with at least 75% of its assets in microfinance loans. These are collateral-free loans given to households with an annual income of up to ₹3 lakh. MFIs mainly provide small loans to low-income borrowers, especially in rural areas.',
            },
            {
                title: '4. NBFC-Factors',
                desc: 'An NBFC-Factor is a non-deposit NBFC whose principal business is factoring (invoice discounting). At least 50% of its assets and 50% of its income must come from factoring activities. These NBFCs finance businesses by purchasing their receivables, providing working capital support.',
            },
            {
                title: '5. Gold Loan NBFCs',
                desc: 'These NBFCs specialize in lending against gold jewelry as collateral. While the RBI does not classify them as a separate legal category, they are common. RBI regulates them by setting Loan-To-Value (LTV) limits.',
            },
            {
                title: '6. Account Aggregators (NBFC-AA)',
                desc: 'An NBFC-AA (Account Aggregator) is an NBFC that provides financial information aggregation services under a contract. In practice, Account Aggregators allow customers to consolidate and share their financial data (bank statements, insurance policies, investments) with third parties securely. The data aggregated remains the customer’s property and is shared only with consent.',
            },
            {
                title: '7. Peer-to-Peer (P2P) Lending Platforms (NBFC-P2P)',
                desc: 'An NBFC-P2P is a platform registered as an NBFC that connects lenders and borrowers digitally. It acts purely as an intermediary, facilitating loans between individuals or businesses via an online platform. NBFC-P2Ps do not use their funds; they only screen users and handle transactions.',
            },
        ],
        eligibility: [
            'Paid-Up Equity Capital refers to the total capital raised by the company.',
            'Free Reserves are the companys unallocated reserves.',
            'Intangible Assets include non-physical assets like goodwill.',
            'Accumulated Losses represent the losses carried forward from previous years.',
            'Director KYC:Verification of identity and background',
            'CIBIL Reports:Credit history checks',
            'Affidavits:Signed declarations confirming no criminal or regulatory violations',
            'CA-Certified Net Worth Certificates:To affirm the financial standing of the directors',
        ],
        documents: [
            { category: 'Required Documents', items: [
                'Corporate DocumentsCertificate of Incorporation:The companys Certificate of Incorporation issued by the Ministry of Corporate Affairs (MCA).Memorandum and Articles of Association (MOA/AOA):These should allow NBFC activities (e.g., "to carry on the business of financing, loans and advances, investments, etc.").Board Resolution:From your company’s board approving the commencement of NBFC business. This resolution should authorize the directors to apply for the NBFC license and approve depositing the NOF..',
                'Certificate of Incorporation:The companys Certificate of Incorporation issued by the Ministry of Corporate Affairs (MCA).',
                'Memorandum and Articles of Association (MOA/AOA):These should allow NBFC activities (e.g., "to carry on the business of financing, loans and advances, investments, etc.").',
                'Board Resolution:From your company’s board approving the commencement of NBFC business. This resolution should authorize the directors to apply for the NBFC license and approve depositing the NOF..',
                'Documents for Directors and ShareholdersKYC Documents:Self-attested PAN card, Aadhaar, passport, driver’s license, or voter ID, along with a photograph and signature, for each director and major shareholder.Proof of Residence:Utility bill, bank statement, etc., for directors.Professional/Resume Details of Directors:To prove experience.Certificates from CA:Certifying the net worth of directors/promoters (some applications require net worth statements).Fit & Proper Declarations:Signed by directors attesting they meet RBI’s criteria (some advisors provide templates for this).',
                'KYC Documents:Self-attested PAN card, Aadhaar, passport, driver’s license, or voter ID, along with a photograph and signature, for each director and major shareholder.',
                'Proof of Residence:Utility bill, bank statement, etc., for directors.',
                'Professional/Resume Details of Directors:To prove experience.',
                'Certificates from CA:Certifying the net worth of directors/promoters (some applications require net worth statements).',
                'Fit & Proper Declarations:Signed by directors attesting they meet RBI’s criteria (some advisors provide templates for this).',
                'Financial DocumentsNet Owned Fund Certificate:A Chartered Accountant’s certificate confirming the company’s NOF is at least ₹10 crore as of the latest date.Audited Financial Statements:Balance sheet and P&L for the past 2–3 years (or latest accounts for new companies), showing NOF sources and business funds.Bank Statements/Banker’s Report:Statements or a report from the company’s banker showing the ₹10 crore deposit (or capital balance) in a single current account.Income Tax Returns (ITR):ITR of the company (and sometimes of directors) for the last few years, to show financial track record.',
                'Net Owned Fund Certificate:A Chartered Accountant’s certificate confirming the company’s NOF is at least ₹10 crore as of the latest date.',
                'Audited Financial Statements:Balance sheet and P&L for the past 2–3 years (or latest accounts for new companies), showing NOF sources and business funds.',
                'Bank Statements/Banker’s Report:Statements or a report from the company’s banker showing the ₹10 crore deposit (or capital balance) in a single current account.',
                'Income Tax Returns (ITR):ITR of the company (and sometimes of directors) for the last few years, to show financial track record.',
            ] },
        ],
        process: [
            { title: 'Step 1: Incorporate Your Company', desc: 'Set up a Private Limited or Public Limited Company under the Companies Act, 2013. Ensure the company’s Memorandum of Association includes NBFC-related objects (e.g., “to provide loans and advances, to act as financial consultants, etc.”). The company should have already obtained a valid PAN and be compliant with other corporate formalities.' },
            { title: 'Step 2: Arrange the Minimum NOF', desc: 'Deposit a minimum of ₹10 crore in the company’s bank account. Obtain a Net Owned Fund certificate from a Chartered Accountant certifying this balance. This capital must be free (unpledged, liquid) and shown in audited financial statements or bank statements.' },
            { title: 'Step 3: Prepare a Business Plan', desc: 'Draft a detailed 5-year business plan outlining your proposed NBFC activities (types of loans/products, target markets, geographic reach) and financial projections. RBI scrutinizes this plan closely, so include market research, risk management policies, projected profit & loss, and capital planning.' },
            { title: 'Step 4: Apply Online via the RBI’s Portal', desc: 'From May 1, 2025, NBFC registration must be done through the PRAVAAH portal, which has replaced the earlier COSMOS portal.' },
            { title: 'Step 5: Submit Physical Documents', desc: 'After online submission, send the hard copy of the application form along with all supporting documents to RBI’s Central Office (CGM, Dept of Regulation, RBI, Mumbai) by post or courier. This must include signed declarations, board resolutions, notarized affidavits, etc., as per RBI guidelines. Track and confirm delivery of this envelope.' },
            { title: 'Step 6: RBI Scrutiny and Certificate of Registration', desc: 'RBI will review your application and documents. If needed, they may seek clarification or additional documents. Upon satisfactory scrutiny, the RBI will issue a Certificate of Registration (CoR) to the company. This CoR is the official NBFC license. Only after receiving the CoR can the company legally commence NBFC operations.' },
        ],
        fees: [
            { item: 'Government Fees and RBI ChargesCompany Incorporation Fees:The fee (and stamp duty) paid to the Ministry of Corporate Affairs for company registration (approx. ₹10,000–₹20,000 depending on authorised capital and professional service).RBI Application Fee:A non-refundable fee of ₹300,000 (₹3 lakh) is required when submitting the NBFC registration application via the Pravaah portal.Other Statutory Fees:There may be minimal fees (hundreds of rupees) for notarized declarations, stamp paper affidavits, etc., required by the RBI.', cost: 'Contact for pricing' },
            { item: 'Company Incorporation Fees:The fee (and stamp duty) paid to the Ministry of Corporate Affairs for company registration (approx. ₹10,000–₹20,000 depending on authorised capital and professional service).', cost: 'Contact for pricing' },
            { item: 'RBI Application Fee:A non-refundable fee of ₹300,000 (₹3 lakh) is required when submitting the NBFC registration application via the Pravaah portal.', cost: 'Contact for pricing' },
            { item: 'Other Statutory Fees:There may be minimal fees (hundreds of rupees) for notarized declarations, stamp paper affidavits, etc., required by the RBI.', cost: 'Contact for pricing' },
            { item: 'Consultant or Service Fees', cost: 'Contact for pricing' },
            { item: 'Other Potential ExpensesOffice Setup:RBI expects NBFCs (especially deposit-taking and systemically important ones) to have a properly registered office. Rent/office setup costs can be significant if you don’t already have space.Audit Fees:Budget for auditing costs (to issue the NOF certificate and future mandatory audits).Compliance Systems:NBFCs often invest in basic compliance software (for KYC, accounting, etc.) before launch.Marketing/Branding:A logo, website, brochures, etc., if you’re starting a financial firm.', cost: 'Contact for pricing' },
            { item: 'Office Setup:RBI expects NBFCs (especially deposit-taking and systemically important ones) to have a properly registered office. Rent/office setup costs can be significant if you don’t already have space.', cost: 'Contact for pricing' },
            { item: 'Audit Fees:Budget for auditing costs (to issue the NOF certificate and future mandatory audits).', cost: 'Contact for pricing' },
        ],
        advantages: [
            { icon: '✅', title: 'Expert Professional Support', desc: 'Dedicated guidance from Your Professionals for all NBFC Registration requirements.' },
        ],
        compliance: [
            { area: 'Periodic Filings with the Reserve Bank of India', details: 'Registered NBFCs must file regular returns and reports to the RBI. These include:' },
            { area: 'Registrations with Other Bodies', details: 'NBFCs must also register with certain outside agencies:' },
            { area: 'Annual Compliance with the Ministry of Corporate Affairs (MC', details: 'In addition to RBI filings, NBFCs must meet company law obligations:' },
        ],
        faqs: [
            { q: 'What is the first step for NBFC registration in India?', a: 'The first step is to incorporate a Private or Public Limited company under the Companies Act, 2013. The company must have NBFC-related business objects in its MOA. Once incorporated and capitalized, you can apply for NBFC registration with the RBI.' },
        ],
        cta: {
            heading: 'Need Help With NBFC Registration?',
            subheading: 'Let Your Professionals handle your nbfc registration requirements with expert guidance and dedicated support.',
            features: [
                'Expert Professional Guidance',
                'End-to-End Documentation Support',
                'Dedicated Relationship Manager',
                'Transparent Pricing',
            ],
        },
    },

    'nbfc-compliance': {
        slug: 'nbfc-compliance',
        title: 'NBFC Compliance',
        subtitle:
            'A Non-Banking Financial Company (NBFC) is a financial entity providing diverse banking-like services without possessing a conventional banking license. These companies operate under the Companies Act, participating in activities such as lending, investing in securities, and asset financing. In essen',
        heroFeatures: [
            'Boost financial inclusion, reaching underserved individuals and small businesses.',
            'Provide niche lending for areas like retail, infrastructure, and microfinance.',
            'Offer flexible, tailored financial solutions that meet diverse customer needs.',
            'Contribute to economic growth by funding key sectors.',
            'Drive innovation and competition within the financial landscape.',
        ],
        overview: {
            heading: 'What is an NBFC?',
            paragraphs: [
                'A Non-Banking Financial Company (NBFC) is a financial entity providing diverse banking-like services without possessing a conventional banking license. These companies operate under the Companies Act, participating in activities such as lending, investing in securities, and asset financing. In essence, NBFCs function as financial intermediaries, delivering credit and other financial solutions outside the traditional banking system.',
                'The core purpose of Non-Banking Financial Companies (NBFCs) is to expand financial access and offer specialized services beyond traditional banks. They aim to:',
                'While both Non-Banking Financial Companies (NBFCs) and Banks are crucial financial intermediaries, they operate under different regulations and have distinct functions. Here is a tabular comparison:',
                'Outlined below are several categories of NBFCs operating in India, along with their roles in shaping the nation’s financial ecosystem:',
                'Asset Finance Companies focus on providing finance for tangible assets such as machinery, vehicles, equipment, and more. They serve individuals, SMEs, and corporate clients by offering tailored financial solutions for purchasing essential assets. Through leasing and loan options, AFCs support business expansion and promote economic development.',
                'Loan Companies play a key role in the consumer finance market by offering personal loans, housing loans, education loans, and more. They also extend financial support to businesses in the form of trade finance, working capital loans, and project-specific funding. These companies help bridge the gap left by traditional banks, meeting unique financial requirements.',
            ],
            highlights: [
                { icon: '📋', text: 'Boost financial inclusion, reaching underserved individuals and small businesses.' },
                { icon: '📊', text: 'Provide niche lending for areas like retail, infrastructure, and microfinance.' },
                { icon: '💰', text: 'Offer flexible, tailored financial solutions that meet diverse customer needs.' },
                { icon: '⚖️', text: 'Contribute to economic growth by funding key sectors.' },
                { icon: '🔍', text: 'Drive innovation and competition within the financial landscape.' },
            ],
        },
        eligibility: [
            'Entities requiring NBFC Compliance services',
        ],
        documents: [
            { category: 'Required Documents', items: [
                'NBFC Registration:Ensure your NBFC is registered with the Reserve Bank of India (RBI) and possesses a valid Certificate of Registration (CoR).',
                'Minimum Net Owned Fund (NOF):Verify that your NBFC consistently maintains the required NOF.',
                'Capital Adequacy:Confirm that your capital adequacy ratio consistently meets RBI standards.',
                'RBI Regulations:Adhere to all pertinent RBI guidelines, including those related to prudential norms, fair practices, and risk management.',
                'Annual Returns:File all mandated annual returns (like NBS-7) with the RBI punctually.',
                'Audited Financial Statements:Ensure the timely submission of audited balance sheets and profit & loss accounts.',
                'GST Compliance:File GST returns(GSTR-9, 9C) by the stipulated due date.',
                'FEMA & FDI Compliance:Ensure compliance with theForeign Exchange Management Act (FEMA)guidelines and accurately report foreign investments to the RBI.',
                'Fair Practices Code:Implement and strictly adhere to the RBIs Fair Practices Code.',
                'Grievance Redressal:Establish an effective mechanism for grievance redressal and customer protection.',
                'Statutory Auditors Certificate:Ensure the submission of the Statutory Auditors Certificate (SAC).',
                'Risk Management:Establish robust risk management policies and procedures.',
                'Internal Controls:Implement effective internal control systems to ensure compliance and operational efficiency.',
                'Cybersecurity:Protect customer data and information from cyber threats.',
                'Asset Quality:Continuously monitor and maintain the quality of assets.',
            ] },
        ],
        process: [
            { title: 'Consultation', desc: 'Connect with Your Professionals experts' },
            { title: 'Processing', desc: 'Complete and submit required forms' },
            { title: 'Completion', desc: 'Receive your final documentation' },
        ],
        fees: [
            { item: 'Professional Fees', cost: 'Contact for pricing' },
        ],
        advantages: [
            { icon: '✅', title: 'Expert Professional Support', desc: 'Dedicated guidance from Your Professionals for all NBFC Compliance requirements.' },
        ],
        compliance: [
            { area: 'Monthly Compliances', details: 'These are recurring compliances that must be fulfilled every month to ensure timely tax payments, regulatory reporting, and liquidity oversight.' },
            { area: 'Quarterly Compliances', details: 'These are filings and reviews that take place every quarter, focusing on financial health, governance, and advanced tax planning.' },
            { area: 'Half-Yearly Compliances', details: 'These obligations must be completed twice a year and mainly cover MSME payments, liquidity positions, and housing finance details.' },
            { area: 'Annual Compliances', details: 'These are year-end regulatory filings and board-level reviews that ensure transparency, accountability, and legal compliance across financial and corporate areas.' },
            { area: 'Event-Based Compliances', details: 'These compliances are triggered by specific events like fraud detection, change in management, or creation of a charge, and require immediate attention and reporting.' },
        ],
        faqs: [
            { q: 'What is the minimum Net Owned Fund (NOF) required for an NBFC?', a: 'As per RBI guidelines, an NBFC must have a minimum Net Owned Fund of ₹10 crore (for most categories) to be eligible for registration. However, this threshold may vary depending on the type of NBFC.' },
        ],
        cta: {
            heading: 'Need Help With NBFC Compliance?',
            subheading: 'Let Your Professionals handle your nbfc compliance requirements with expert guidance and dedicated support.',
            features: [
                'Expert Professional Guidance',
                'End-to-End Documentation Support',
                'Dedicated Relationship Manager',
                'Transparent Pricing',
            ],
        },
    },

    'payment-bank-license': {
        slug: 'payment-bank-license',
        title: 'Payment Bank License',
        subtitle:
            'A Payment Bank in India is a special type of bank designed to offer basic financial services like payments, money transfers, and savings accounts. Introduced by the Reserve Bank of India (RBI) in 2014, payment banks aim to promote financial inclusion, particularly for people in rural areas, migrant ',
        heroFeatures: [
            'Airtel Payments Bank',
            'Jio Payments Bank',
            'India Post Payments Bank (IPPB)',
            'Fino Payments Bank',
            'NSDL Payments Bank',
        ],
        overview: {
            heading: 'What is a Payment Bank in India?',
            paragraphs: [
                'A Payment Bank in India is a special type of bank designed to offer basic financial services like payments, money transfers, and savings accounts. Introduced by the Reserve Bank of India (RBI) in 2014, payment banks aim to promote financial inclusion, particularly for people in rural areas, migrant workers, and low-income households with limited access to traditional banks. Unlike regular banks, payment banks do not provide loans or investment products.',
                'They rely heavily on mobile technology to reach underserved populations, making banking services more affordable and accessible. To operate, these institutions must obtain a payment bank license from the RBI, ensuring they meet required safety, capital, and operational standards.',
                'Some of the common Payment Banks are mentioned below',
                'While they both handle money, payment banks and traditional commercial banks (like SBI or HDFC) have key differences in their goals and operations. Understanding these differences helps to see the unique role of a payment bank.',
                'A payment bank primarily serves daily transactions, savings, and payment needs. In contrast, a traditional bank offers these services as well as additional financial solutions such as loans and investments.',
                'To make it even clearer, let us break down the specific powers of a payment bank. The RBI has set clear rules. These rules ensure that payment banks stick to their main objective of financial inclusion and do not take risky bets with your money.',
            ],
            highlights: [
                { icon: '📋', text: 'Airtel Payments Bank' },
                { icon: '📊', text: 'Jio Payments Bank' },
                { icon: '💰', text: 'India Post Payments Bank (IPPB)' },
                { icon: '⚖️', text: 'Fino Payments Bank' },
                { icon: '🔍', text: 'NSDL Payments Bank' },
                { icon: '📅', text: 'Accept Deposits:Payment banks can open savings and current accounts for you. The total balance in these accounts cannot exceed ₹2 lakhs per customer at the end of the day. (This limit was previously ₹1 lakh, but was increased by the RBI to ₹2 lakh in April 2021.)' },
            ],
        },
        eligibility: [
            'Existing non-bank Prepaid Payment Instrument (PPI) issuers',
            'Non-Banking Finance Companies (NBFCs)',
            'Corporate Business Correspondents (BCs)',
            'Mobile Telephone Companies',
            'Supermarket Chains',
            'Public Sector Entities',
            'Individuals and Professionals',
        ],
        documents: [
            { category: 'Required Documents', items: [
                'Documents for Individual Promoters',
                'Detailed professional and personal background information.',
                'PAN Cardand Aadhaar Card.',
                'Proof of address (like a passport or utility bill).',
                'Financial statements for the last 5 years (including tax returns).',
                'A statement showing all assets and liabilities.',
                'Details of any other companies they are directors of.',
                'Documents for the Promoting Company or Entity',
                'Certificate of IncorporationandMemorandum & Articles of Association.',
                'The company’s financial statements for the past five years.',
                'A complete list of the companys directors and major shareholders.',
                'Shareholding pattern of the company.',
                'Documents for the Promoter Group',
                'Information about all the companies and entities in the promoter group.',
                'Their shareholding structures and financial statements.',
            ] },
        ],
        process: [
            { title: 'Step 1: Incorporating a Public Limited Company', desc: 'Before you even apply, you must set up a specific type of company. The payment bank must beregistered as a ‘Public Limited Company’under the Companies Act, 2013. This type of company offers more transparency and is better regulated, which is essential for a bank.' },
            { title: 'Step 2: Preparing and Filing the Application (Form III)', desc: 'To apply for a payment bank license, you must submit Form III, prescribed under theBanking Regulation Act, 1949.The application must be submitted to theChief General Managerof the RBI. The form is detailed and requires the following key information:' },
            { title: 'Step 3: The RBIs Initial Screening and EAC Evaluation', desc: 'Once the application is submitted, the RBI conducts a preliminary screening. They make sure all the required information and documents are there.' },
            { title: 'Step 4: Receiving the In-Principle Approval', desc: 'If the RBI is satisfied with the EACs recommendation and its own review, it grants an ‘in-principle’ approval.' },
            { title: 'Step 5: Operational Readiness & Final Approval', desc: 'The 18-month period following in-principle approvalis a critical phase for setting up the bank. During this time, promoters must focus on the following tasks:' },
        ],
        fees: [
            { item: 'Professional Fees', cost: 'Contact for pricing' },
        ],
        advantages: [
            { icon: '✅', title: 'Expert Professional Support', desc: 'Dedicated guidance from Your Professionals for all Payment Bank License requirements.' },
        ],
        compliance: [
            { area: 'Maintaining Prudential Norms:The bank must always maintain t', details: 'Maintaining Prudential Norms:The bank must always maintain the required CRR, SLR, and a minimum capital adequacy ratio. This ensures the bank remains financially healthy.' },
            { area: 'KYC/AML/CFT Compliance:Payment banks must strictly follow:', details: 'KYC/AML/CFT Compliance:Payment banks must strictly follow:' },
            { area: 'Know Your Customer (KYC):Verifying the identity of every cus', details: 'Know Your Customer (KYC):Verifying the identity of every customer.' },
            { area: 'Anti-Money Laundering (AML):Monitoring transactions to preve', details: 'Anti-Money Laundering (AML):Monitoring transactions to prevent illegal activities.' },
            { area: 'Combating the Financing of Terrorism (CFT):Reporting suspici', details: 'Combating the Financing of Terrorism (CFT):Reporting suspicious transactions to the authorities.' },
            { area: 'Statutory and Regulatory Reporting:Payment banks must submit', details: 'Statutory and Regulatory Reporting:Payment banks must submit periodic reports to the RBI, including financial statements, data on deposits, transaction volumes, and compliance certificates, to ensure ongoing oversight of their health and operations.' },
            { area: 'Data Security and IT Audits:They must conduct regular IT and', details: 'Data Security and IT Audits:They must conduct regular IT and security audits by independent auditors. This ensures that their technology systems are secure and customer data is safe.' },
            { area: 'Use of Name:A payment bank must use the words "Payment Bank"', details: 'Use of Name:A payment bank must use the words "Payment Bank" in its name. This clearly tells customers the nature of the institution, such as Airtel Payments Bank or NSDL Payments Bank.' },
        ],
        faqs: [
            { q: 'What is the current deposit limit for a payment bank?', a: 'The current deposit limit for a payment bank is ₹2 lakhs per customer. This means the total balance in your account(s) with a single payment bank cannot exceed this amount at the end of any day.' },
        ],
        cta: {
            heading: 'Need Help With Payment Bank License?',
            subheading: 'Let Your Professionals handle your payment bank license requirements with expert guidance and dedicated support.',
            features: [
                'Expert Professional Guidance',
                'End-to-End Documentation Support',
                'Dedicated Relationship Manager',
                'Transparent Pricing',
            ],
        },
    },

    'payment-gateway-license': {
        slug: 'payment-gateway-license',
        title: 'Payment Gateway License',
        subtitle:
            'A Payment Gateway License, issued by the Reserve Bank of India (RBI) under Section 5 of the Payment and Settlement Systems (PSS) Act, 2007, is a mandatory authorization for any business that wants to operate a system for processing online payments. This license permits the entity to securely transmi',
        heroFeatures: [
            'Payment and Settlement Systems Act, 2007:Governs and authorizes all payment systems in India under the RBI’s control.',
            'RBI Guidelines for Payment Aggregators and Gateways (2020):Mandates licensing, capital norms, and compliance standards for non-bank entities.',
            'Information Technology Act, 2000:Ensures the legal validity and security of electronic transactions and records.',
            'Prevention of Money Laundering Act (PMLA), 2002:Imposes mandatory KYC and anti-money laundering checks on financial intermediaries.',
            'Digital Personal Data Protection (DPDP) Act, 2023:Regulates how personal data is collected, stored, and processed by digital platforms.',
        ],
        overview: {
            heading: 'What is a Payment Gateway License in India?',
            paragraphs: [
                'A Payment Gateway License, issued by the Reserve Bank of India (RBI) under Section 5 of the Payment and Settlement Systems (PSS) Act, 2007, is a mandatory authorization for any business that wants to operate a system for processing online payments. This license permits the entity to securely transmit transaction information between the customer, the merchant, and the respective banks.',
                'In simple words, it lets a business offer online payment services by safely connecting buyers and sellers for money transfers. Payment Gateways (PGs) that do not handle funds directly but only provide the underlying technology do not need a Payment Aggregator (PA) license. However, they must partner with an RBI-licensed Payment Aggregator and comply with RBI’s regulations.',
                'To operate a payment gateway or act as a payment aggregator in India, businesses must comply with regulations set by the RBI and follow key financial, data, and IT laws. These ensure secure transactions, proper customer verification, and protection of sensitive information.',
            ],
            highlights: [
                { icon: '📋', text: 'Payment and Settlement Systems Act, 2007:Governs and authorizes all payment systems in India under the RBI’s control.' },
                { icon: '📊', text: 'RBI Guidelines for Payment Aggregators and Gateways (2020):Mandates licensing, capital norms, and compliance standards for non-bank entities.' },
                { icon: '💰', text: 'Information Technology Act, 2000:Ensures the legal validity and security of electronic transactions and records.' },
                { icon: '⚖️', text: 'Prevention of Money Laundering Act (PMLA), 2002:Imposes mandatory KYC and anti-money laundering checks on financial intermediaries.' },
                { icon: '🔍', text: 'Digital Personal Data Protection (DPDP) Act, 2023:Regulates how personal data is collected, stored, and processed by digital platforms.' },
                { icon: '📅', text: 'PCI-DSS Standards (Industry Standard):Requires secure handling and storage of card payment data to prevent breaches.' },
            ],
        },
        eligibility: [
            'The company must be registered under the Companies Act, 1956 or 2013.',
            'There should be at least 2 members in the company.',
            'The company must have a minimum of 2 directors.',
            'Valid address proof of the business is required.',
            'A detailed 5-year business plan must be prepared and submitted.',
            'The company should have a current bank account in its name.',
            'A system flow diagram and code testing report from a certified software testing agency must be provided.',
            'The company should have a Service Tax Registration Number (now covered under GST).',
            'It must follow the PCI DSS (Payment Card Industry Data Security Standard) for data security.',
            'Initial Net Worth:The applicant must have a minimum net worth of Rs. 15 crores at the time of application.',
        ],
        documents: [
            { category: 'Required Documents', items: [
                'Certificate of Incorporationof the company (under the Companies Act, 1956/2013).',
                'PAN Cardof the company.',
                'Address proofof the registered office (e.g., utility bill, rent agreement).',
                'KYC documentsof all directors and shareholders (Aadhaar, PAN, Passport, etc.).',
                'Board resolutionauthorizing the application for the license.',
                'Memorandum & Articles of Association (MoA&AoA).',
                'Business planfor the next 5 years.',
                'Bank account detailsand a cancelled cheque of the company.',
                'Code flow diagramandtechnical system architecture.',
                'Code testing reportfrom a certified software testing agency.',
                'PCI DSS compliance certificate.',
                'Details of payment processing systemsand software used.',
                'Tax registrations(GST, if applicable).',
                'Net worth certificateissued by a certified Chartered Accountant (Minimum ₹15 crore for new applicants, as per RBI norms).',
                'Audited financial statementsof the company (if available).',
            ] },
        ],
        process: [
            { title: 'Step 1: Submit the Registration Application', desc: 'The applicant needs to fill out and submit Form A to the Chief General Manager of the Department of Payment & Settlement Systems, either at the RBI’s Central Office in Mumbai or any other designated regional RBI office. This is done as per Section 5(1) of the Payment and Settlement Systems (PSS) Act, 2007.' },
            { title: 'Step 2: RBI Verifies the Details', desc: 'The RBI will then check and verify all the information and documents submitted by the applicant. It may also conduct further inquiries if needed to ensure everything is genuine and complete.' },
            { title: 'Step 3: Fulfill RBI Conditions', desc: 'To get the license, the applicant must meet all the necessary conditions set by the RBI under Section 7 of the PSS Act, 2007. These include operational, technical, and financial compliance requirements.' },
            { title: 'Step 4: License Issuance by RBI', desc: 'If the RBI is satisfied with the application and all conditions are met under Section 7(1) of the Act, it will issue the Authorization Certificate in Form B, officially allowing the business to run a payment gateway system.' },
            { title: 'Step 5: Application Processing Time', desc: 'As per Section 7(4) of the PSS Act, 2007, the RBI will process and decide on the application within 6 months from the date of submission.' },
        ],
        fees: [
            { item: 'RBI Application Fees', cost: 'Rs. 10,000 – Rs. 25,000 (approx.)' },
            { item: 'Capital Requirement Costs', cost: 'Rs. 15 crores (application) Rs. 25 crores (within 3 years)' },
            { item: 'Technology and Compliance Costs', cost: 'Rs. 10 lakhs – Rs. 50 lakhs (depending on system complexity)' },
            { item: 'Professional and Consultancy Fees', cost: 'Rs. 2 lakhs – Rs. 10 lakhs (or more, based on scope)' },
        ],
        advantages: [
            {
                icon: '✅',
                title: 'Enhanced Security and Trust',
                desc: 'The license mandates PCI-DSS compliance, ensuring you handle user data securely and building credibility with customers and partners.',
            },
            {
                icon: '🏛️',
                title: 'Legal Authority to Operate',
                desc: 'The license provides the legal foundation to build and offer advanced payment solutions, including white-label wallets and integrated API platforms.',
            },
            {
                icon: '🤝',
                title: 'Fraud Screening Tools (FST)',
                desc: 'Licensed payment gateways offer tools like Card Code Value (CCV), Address Verification Service (AVS), and Card Verification Value (CVV) to detect and prevent fraud, helping secure users personal and financial data.',
            },
            {
                icon: '📈',
                title: 'One-Stop Solution',
                desc: 'A payment gateway acts as a single platform that connects different digital tools like shopping carts, e-commerce platforms, and software systems through one simple API integration.',
            },
            {
                icon: '🔒',
                title: 'Access to the Financial Ecosystem',
                desc: 'An RBI license is essential for establishing direct partnerships with multiple banks and card networks, allowing you to offer a wide array of payment options (credit/debit cards, UPI, etc.).',
            },
            {
                icon: '💼',
                title: 'Market Expansion Opportunities',
                desc: 'The RBI-issued payment gateway license enables businesses to process international payments, helping them grow their reach beyond India and enter global markets.',
            },
        ],
        compliance: [
            { area: 'Audits & Certification:Conduct regular RBI and PCI DSS-compl', details: 'Audits & Certification:Conduct regular RBI and PCI DSS-compliant audits and obtain annual certification from a CERT-IN auditor, ensuring timely renewals.' },
            { area: 'Data Security Compliance:Continuously comply with PCI DSS an', details: 'Data Security Compliance:Continuously comply with PCI DSS and other security protocols to protect customer data.' },
            { area: 'Transaction Monitoring:Monitor all transactions for fraud, s', details: 'Transaction Monitoring:Monitor all transactions for fraud, suspicious activity, and ensure KYC norms are followed.' },
            { area: 'Reporting to RBI:Submit regular reports to the Reserve Bank ', details: 'Reporting to RBI:Submit regular reports to the Reserve Bank of India, including financials, operational updates, and security incidents.' },
            { area: 'Maintain Net Worth:Ensure the company’s net worth stays in l', details: 'Maintain Net Worth:Ensure the company’s net worth stays in line with RBI’s minimum requirements (Rs. 15–25 crores).' },
            { area: 'Customer Grievance Redressal:Set up a dedicated system to ha', details: 'Customer Grievance Redressal:Set up a dedicated system to handle customer complaints and resolve them promptly.' },
            { area: 'Disaster Recovery & Backup:Maintain proper data backup syste', details: 'Disaster Recovery & Backup:Maintain proper data backup systems and disaster recovery plans to ensure business continuity.' },
        ],
        faqs: [
            { q: 'What is the main law that governs payment gateway licenses in India?', a: 'The issuance and regulation of payment gateway licenses are governed under the Payment and Settlement Systems Act, 2007, regulated by the Reserve Bank of India (RBI).' },
        ],
        cta: {
            heading: 'Need Help With Payment Gateway License?',
            subheading: 'Let Your Professionals handle your payment gateway license requirements with expert guidance and dedicated support.',
            features: [
                'Expert Professional Guidance',
                'End-to-End Documentation Support',
                'Dedicated Relationship Manager',
                'Transparent Pricing',
            ],
        },
    },

    'legal-notice-defamation': {
        slug: 'legal-notice-defamation',
        title: 'Legal Notice for Defamation',
        subtitle:
            'Have you ever experienced the damage of false accusations? When someone makes untrue statements about you that harm you and your businesss reputation, it’s not just upsetting; it is often illegal. This is known as defamation. In India, you have the right to protect your name from such harmful and ba',
        heroFeatures: [
            'The Statement Must Be False:Truth is the strongest defense against defamation. If a statement is true, it cannot be defamatory, no matter how damaging it seems.Also, opinions and fair criticism usually don’t count as defamation. For example, saying "I didn’t like the food at that restaurant" is a personal opinion, not defamation. But saying “That restaurant serves rotten food” without proof could be defamatory if it’s false.',
            'The Statement Must Be “Published”:The term "published" goes beyond just printing in newspapers. It means the statement was communicated to at least one other person, whether spoken, posted on social media, sent via email, or even shared in a WhatsApp chat.',
            'The Statement Must Harm Reputation:The false statement must damage the individual’s reputation in the eyes of others. It could cause people to think less of them, ridicule them, or avoid them.',
            'To Warn the Defamer of Legal Action:A legal notice is a formal warning. It tells the other person that their actions have legal consequences. It also shows that you are prepared to take the matter to court if needed. Many times, just receiving a legal notice is enough to make the person stop their false claims and avoid further trouble.',
            'To Demand a Clear Remedy:The notice allows you to specify exactly what you want. This could be:An immediate and unconditional public apology.A retraction of the false statements.Monetary compensation for the harm caused.',
        ],
        overview: {
            heading: 'Overview of Legal Notice for Defamation',
            paragraphs: [
                'Have you ever experienced the damage of false accusations? When someone makes untrue statements about you that harm you and your businesss reputation, it’s not just upsetting; it is often illegal. This is known as defamation. In India, you have the right to protect your name from such harmful and baseless attacks.',
                'One of the first effective steps you can take is to send a legal notice for defamation. A legal notice for defamation is a formal, written document sent by the person who has been defamed (the victim) to the person who made the defamatory statements (the alleged defamer). It is usually drafted by a lawyer.',
                'This notice is the first official step in the legal process. It clearly states that the recipient has made false and damaging statements, and it demands certain actions to rectify the situation. It is a warning that if the demands are not met, you will take the matter to court.',
                'Defamation refers to the act of making a false statement about someone that harms their reputation. It is a legal means of protecting your good name from unjust harm.',
                'For a statement to qualify as defamatory, it must meet the following essential criteria:',
                'Consider this example:A local baker is falsely accused by a competitor of using expired ingredients in his cakes. The rival posts this false claim in a popular local food group on Facebook. This is a clear case of defamation. The statement is false, it was published to a wide audience, and it has harmed the baker’s business and reputation.',
            ],
            highlights: [
                { icon: '📋', text: 'The Statement Must Be False:Truth is the strongest defense against defamation. If a statement is true, it cannot be defamatory, no matter how damaging it seems.Also, opinions and fair criticism usually don’t count as defamation. For example, saying "I didn’t like the food at that restaurant" is a personal opinion, not defamation. But saying “That restaurant serves rotten food” without proof could be defamatory if it’s false.' },
                { icon: '📊', text: 'The Statement Must Be “Published”:The term "published" goes beyond just printing in newspapers. It means the statement was communicated to at least one other person, whether spoken, posted on social media, sent via email, or even shared in a WhatsApp chat.' },
                { icon: '💰', text: 'The Statement Must Harm Reputation:The false statement must damage the individual’s reputation in the eyes of others. It could cause people to think less of them, ridicule them, or avoid them.' },
                { icon: '⚖️', text: 'To Warn the Defamer of Legal Action:A legal notice is a formal warning. It tells the other person that their actions have legal consequences. It also shows that you are prepared to take the matter to court if needed. Many times, just receiving a legal notice is enough to make the person stop their false claims and avoid further trouble.' },
                { icon: '🔍', text: 'To Demand a Clear Remedy:The notice allows you to specify exactly what you want. This could be:An immediate and unconditional public apology.A retraction of the false statements.Monetary compensation for the harm caused.' },
                { icon: '📅', text: 'An immediate and unconditional public apology.' },
            ],
        },
        eligibility: [
            'Entities requiring Legal Notice for Defamation services',
        ],
        documents: [
            { category: 'Required Documents', items: [
                'Proof of the Defamatory Statement:This is the most important thing. It could be a screenshot, a video/audio recording, or a physical copy of a publication.',
                'Proof of Publication:Evidence that the statement was communicated to a third party. This could be witness testimonies or data showing how many people viewed an online post.',
                'Identity Proof:A copy of your government-issued ID (like Aadhaar or a passport).',
                'Details of Witnesses:Names and contact information of anyone who can support your claim.',
                'Proof of Harm:If you are claiming financial loss, you will need documents to prove it, such as bank statements, lost contracts, or employment termination letters.',
            ] },
        ],
        process: [
            { title: 'Step 1: Consult an Expert and Gather Proof', desc: 'Before you do anything, talk to a lawyer who specializes in defamation cases. They will listen to your story, assess the strength of your case, and advise you on the best course of action.' },
            { title: 'Step 2: Draft the Legal Notice', desc: 'Once you have your proof, your lawyer will draft the legal notice. The notice will be prepared on the lawyer’s official letterhead and will contain all the necessary details of the case. It will be written in a clear, formal, and firm tone.' },
            { title: 'Step 3: Send the Notice', desc: 'Once your legal notice is ready, it must be sent to the person who made the false statement. The most trusted method is through Registered Post with Acknowledgement Due (RPAD).' },
            { title: 'Step 4: Wait for a Response', desc: 'After sending the notice, you need to give the recipient a reasonable amount of time to respond and comply with your demands. This timeline is usually mentioned in the notice itself, typically 15 or 30 days.' },
        ],
        fees: [
            { item: 'Professional Fees', cost: 'Contact for pricing' },
        ],
        advantages: [
            { icon: '✅', title: 'Expert Professional Support', desc: 'Dedicated guidance from Your Professionals for all Legal Notice for Defamation requirements.' },
        ],
        faqs: [
            { q: 'What are the effects of not replying to a defamation legal notice?', a: 'Ignoring a legal notice is a bad idea. The sender will likely assume you admit to the allegations, strengthening their position to file a court case. A court may also view your silence negatively, interpreting it as a sign of guilt or disrespect for the legal process. It is always best to consult a lawyer and send a formal reply.' },
        ],
        cta: {
            heading: 'Need Help With Legal Notice for Defamation?',
            subheading: 'Let Your Professionals handle your legal notice for defamation requirements with expert guidance and dedicated support.',
            features: [
                'Expert Professional Guidance',
                'End-to-End Documentation Support',
                'Dedicated Relationship Manager',
                'Transparent Pricing',
            ],
        },
    },

    'legal-notice': {
        slug: 'legal-notice',
        title: 'Legal Notice',
        subtitle:
            'A legal notice in India is a formal document sent by one party to another, informing them of a legal dispute and warning them of potential legal action if the issue remains unresolved. It acts as a first step before filing a lawsuit and can often help resolve matters without going to court. Legal no',
        heroFeatures: [
            'To Inform:It officially informs the other person about your grievances in a detailed manner.',
            'To Demand:It clearly states your demand. This could be a request for money, a demand for an apology, or a requirement to perform a specific action.',
            'To Warn:It serves as a final warning. It tells the other party the consequences they will face if they ignore your demands.',
        ],
        overview: {
            heading: 'What is a Legal Notice in India?',
            paragraphs: [
                'A legal notice in India is a formal document sent by one party to another, informing them of a legal dispute and warning them of potential legal action if the issue remains unresolved. It acts as a first step before filing a lawsuit and can often help resolve matters without going to court. Legal notices are commonly used in civil disputes, such as consumer complaints, breaches of contract, or landlord-tenant issues.',
                'The notice outlines the nature of the problem and demands action within a specified timeframe. It also serves as evidence that an attempt was made to settle the issue before taking legal action. Governed by various Indian laws, such as the Civil Procedure Code, 1908, and the Negotiable Instruments Act, 1881, a legal notice is often drafted by a lawyer to ensure its effectiveness. In many cases, a well-drafted legal notice can lead to a resolution without the need for litigation.',
                'The main purpose of a legal notice is to make your complaint official. It formally communicates your grievance to the other party and specifies the remedial action you expect. The key goals are:',
                'While a legal notice serves as a serious warning, its primary power lies in its ability to open a channel for negotiation and resolution.',
                'When a person receives a notice from a lawyer, they take it seriously. They understand that you are not just making empty threats. They know you have consulted a lawyer and are ready for the next step.',
                'This often pushes them to contact you or your lawyer to find a solution. They might agree to pay the money, fix the faulty product, or negotiate a settlement. This process of settling the dispute outside of court is called an "out-of-court settlement."',
            ],
            highlights: [
                { icon: '📋', text: 'To Inform:It officially informs the other person about your grievances in a detailed manner.' },
                { icon: '📊', text: 'To Demand:It clearly states your demand. This could be a request for money, a demand for an apology, or a requirement to perform a specific action.' },
                { icon: '💰', text: 'To Warn:It serves as a final warning. It tells the other party the consequences they will face if they ignore your demands.' },
            ],
        },
        eligibility: [
            'Entities requiring Legal Notice services',
        ],
        documents: [
            { category: 'Required Documents', items: ['Contact Your Professionals for document checklist'] },
        ],
        process: [
            { title: 'Step 1: Talk to an Expert Lawyer', desc: 'The first and most important step is to consult a good lawyer. It’s ideal to approach a civil lawyer or a lawyer who specializes in the specific area of your case (such as property,consumer complaints,cheque bounce, etc.). This ensures that the lawyer is experienced in handling the type of dispute you’re dealing with.' },
            { title: 'Step 2: The Lawyer Drafts the Notice', desc: 'After understanding your case, the lawyer will prepare the legal notice draft. The notice is drafted on the lawyers official letterhead. It will contain:' },
            { title: 'Step 3: Send the Notice via Registered Post', desc: 'Once you approve the draft, the lawyer will sign it. The notice is then sent to the other party. The best way to send it is through Registered Post with Acknowledgement Due (RPAD). Section 27 of the General Clauses Act, 1897, supports RPAD as valid proof of service, confirming that the notice was sent and received by the other party.' },
        ],
        fees: [
            { item: 'Professional Fees', cost: 'Contact for pricing' },
        ],
        advantages: [
            { icon: '✅', title: 'Expert Professional Support', desc: 'Dedicated guidance from Your Professionals for all Legal Notice requirements.' },
        ],
        faqs: [
            { q: 'What is the time limit to reply to a legal notice in India?', a: 'The time limit to reply is usually mentioned in the notice itself. Typically, lawyers provide a period of 15 days or 30 days for the recipient to respond or comply. If no time limit is specified, a "reasonable time" is implied. It is always advisable to respond within the stipulated time. How to reply to a legal notice is best done with a lawyers help.' },
        ],
        cta: {
            heading: 'Need Help With Legal Notice?',
            subheading: 'Let Your Professionals handle your legal notice requirements with expert guidance and dedicated support.',
            features: [
                'Expert Professional Guidance',
                'End-to-End Documentation Support',
                'Dedicated Relationship Manager',
                'Transparent Pricing',
            ],
        },
    },

};
