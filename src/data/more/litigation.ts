import type { ServiceData } from '../services';

export const LITIGATION_SERVICES: Record<string, ServiceData> = {
    "cma-services": {
        slug: "cma-services",
        title: "Cost & Management Accountant (CMA) Services",
        subtitle: "Optimize your business operations, manage costs effectively, and achieve financial efficiency with expert CMA advisory.",
        heroFeatures: ["Cost auditing & control", "Product pricing strategies", "Financial planning & budgeting", "Operations analysis"],
        overview: {
            heading: "Overview of CMA Services",
            paragraphs: ["Cost and Management Accountant (CMA) services provide deep insights into a company's cost structures, pricing policies, and operational bottlenecks.", "Our CMA experts help you implement cost control mechanisms, establish variance analysis, and structure pricing to maximize margins."],
            highlights: [{ icon: "📈", text: "Strategic cost management" }, { icon: "📊", text: "Financial control audits" }]
        },
        eligibility: ["Available for manufacturing firms", "Service providers looking to optimize cost", "Startups needing pricing strategies"],
        documents: [{ category: "Documents Required", items: ["Company incorporation details", "Financial ledger reports", "Costing sheets and product lists"] }],
        process: [
            { title: "Step 1: Consultation & Analysis", desc: "We assess your current cost accounting methods and structures." },
            { title: "Step 2: Implementation", desc: "Design and deploy custom cost allocation and management sheets." }
        ],
        fees: [{ item: "Initial Consultation", cost: "₹5,000" }],
        advantages: [{ icon: "✅", title: "Improved Margins", desc: "Eliminate waste and structure pricing accurately." }],
        faqs: [{ q: "What does a cost audit cover?", a: "It covers raw materials, labor, overhead allocation, and product margins." }]
    },

    "company-secretary-services": {
        slug: "company-secretary-services",
        title: "Company Secretary (CS) Services",
        subtitle: "Ensure strict compliance with corporate governance, MCA regulations, and the Companies Act with certified CS advisory.",
        heroFeatures: ["Board meeting compliance", "Annual filing preparation", "Share transfer administration", "Corporate governance audits"],
        overview: {
            heading: "Overview of CS Services",
            paragraphs: ["A Company Secretary ensures that the board of directors acts in accordance with the law, maintains statutory registers, and files key resolutions with the RoC.", "Our CS services help you manage board meetings, handle shareholder actions, and ensure all filings under the Companies Act, 2013 are done on time."],
            highlights: [{ icon: "🏛️", text: "Strict MCA compliance" }, { icon: "📝", text: "Corporate minutes & records maintenance" }]
        },
        eligibility: ["Mandatory for companies with paid-up capital above threshold", "Recommended for all Private and Public Limited Companies"],
        documents: [{ category: "Required Documents", items: ["Company incorporation certificate", "Current director details", "MOA & AOA documents"] }],
        process: [
            { title: "Step 1: Compliance Audit", desc: "We audit your corporate registry and board records." },
            { title: "Step 2: Filing & Correction", desc: "Prepare and submit any pending RoC returns or board forms." }
        ],
        fees: [{ item: "Monthly CS Retainer", cost: "Contact for pricing" }],
        advantages: [{ icon: "🛡️", title: "Zero Penalty Risk", desc: "Ensure all filings are compliant with no late charges." }],
        faqs: [{ q: "Is a CS mandatory for my startup?", a: "Certain forms must be certified by a practicing CS depending on your capital size and activities." }]
    },

    "registered-valuer": {
        slug: "registered-valuer",
        title: "Registered Valuer Services",
        subtitle: "Obtain legally recognized valuation reports for your business assets, shares, and intangibles from IBBI registered valuers.",
        heroFeatures: ["Asset valuation reports", "Share valuation for funding", "Intangibles (IPR) valuation", "Mergers & Acquisitions support"],
        overview: {
            heading: "Overview of Valuer Services",
            paragraphs: ["Valuations by IBBI Registered Valuers are required under the Companies Act, FEMA, and IBC for transactions like share issue, business transfer, and restructuring.", "We provide certified valuation reports across classes like Land & Building, Plant & Machinery, and Securities or Financial Assets."],
            highlights: [{ icon: "🔍", text: "IBBI certified valuers" }, { icon: "📊", text: "Legally binding reports" }]
        },
        eligibility: ["Companies issuing new shares", "Businesses executing mergers/acquisitions", "Entities undergoing restructuring"],
        documents: [{ category: "Required Documents", items: ["Audited balance sheets", "Projected financial plans", "Asset ownership certificates"] }],
        process: [
            { title: "Step 1: Data Collection & Asset Inspection", desc: "We gather balance sheet data and inspect assets." },
            { title: "Step 2: Valuation Report Issuance", desc: "Compute values using standard models and issue a certified report." }
        ],
        fees: [{ item: "Valuation Assignment", cost: "Varies by asset size" }],
        advantages: [{ icon: "✅", title: "Regulatory Compliance", desc: "Accepted by MCA, Income Tax Department, and RBI." }],
        faqs: [{ q: "How long is a valuation report valid?", a: "Usually valid for six months or until material change occurs." }]
    },

    "actuarial-services": {
        slug: "actuarial-services",
        title: "Actuarial Services",
        subtitle: "Assess financial risks, design retirement schemes, and value employee gratuity plans with professional actuaries.",
        heroFeatures: ["Gratuity & pension valuations", "Insurance risk profiling", "Asset-liability matching", "AS-15 / Ind AS 19 compliance"],
        overview: {
            heading: "Overview of Actuarial Services",
            paragraphs: ["Actuarial services apply mathematical and statistical models to assess financial risks in insurance, pensions, and corporate employee benefit schemes.", "We help companies value long-term liabilities like employee gratuity, leave encashment, and defined benefit plans for accounting disclosures."],
            highlights: [{ icon: "📊", text: "AS-15 accounting compliance" }, { icon: "🛡️", text: "Precise liability forecasting" }]
        },
        eligibility: ["Companies with employee counts exceeding gratuity limits", "Insurance firms and pension funds"],
        documents: [{ category: "Required Details", items: ["Employee demographic data (age, joining date, salary)", "Company gratuity policy details", "Previous actuarial reports"] }],
        process: [
            { title: "Step 1: Data Gathering", desc: "Submit employee logs and salary grids." },
            { title: "Step 2: Computation & Report", desc: "Generate AS-15 compliance report signed by a fellow Actuary." }
        ],
        fees: [{ item: "Gratuity Valuation Report", cost: "₹8,000" }],
        advantages: [{ icon: "✓", title: "Auditor Approval", desc: "Compliant reports that satisfy statutory audit requirements." }],
        faqs: [{ q: "Why is AS-15 valuation needed?", a: "To estimate and disclose the future liability of employee benefits in corporate balance sheets." }]
    },

    "other-professional-services": {
        slug: "other-professional-services",
        title: "Other Professional Advisory Services",
        subtitle: "Consult on bespoke corporate structures, financial restructuring, and general regulatory representations.",
        heroFeatures: ["Custom legal opinions", "FEMA representations", "NCLT drafting", "General corporate consulting"],
        overview: {
            heading: "Overview of Custom Professional Services",
            paragraphs: ["We provide general corporate advisory services for unique business cases, representations, and complex licensing.", "Our expert team of CAs, CSs, and corporate lawyers can draft representations, handle regulatory audits, and represent your firm before authorities."],
            highlights: [{ icon: "⚖️", text: "Custom expert opinions" }, { icon: "💼", text: "Dedicated corporate advisors" }]
        },
        eligibility: ["Corporate entities facing unique compliance requirements", "Startups seeking strategic legal structure advice"],
        documents: [{ category: "Documents Needed", items: ["Company documents and records", "Brief of the query or legal matter", "Previous notices or letters (if any)"] }],
        process: [
            { title: "Step 1: Detailed Consultation", desc: "Align on requirements, background, and expected outcomes." },
            { title: "Step 2: Execution", desc: "Draft legal opinions, representations, or complete registration processes." }
        ],
        fees: [{ item: "Initial Consult Fee", cost: "₹5,000" }],
        advantages: [{ icon: "✓", title: "Tailored Support", desc: "Customized solutions for complex legal problems." }],
        faqs: [{ q: "Do you represent clients before NCLT?", a: "Yes, our network of advocates handles corporate disputes and NCLT listings." }]
    },

    "isbn-number-registration": {
        slug: "isbn-number-registration",
        title: "ISBN Number Registration",
        subtitle: "Get an International Standard Book Number (ISBN) for your books and publications to distribute globally.",
        heroFeatures: ["ISBN code generation", "Author registration support", "E-book and physical book support", "Global publication listing"],
        overview: {
            heading: "Overview of ISBN Registration",
            paragraphs: ["An ISBN is a 13-digit commercial book identifier that is unique to each edition and variation of a book.", "We help authors and publishers register with the Raja Rammohun Roy National Agency for ISBN to obtain identifiers for physical and digital books."],
            highlights: [{ icon: "📖", text: "Unique global identification" }, { icon: "🌎", text: "Required for global distribution" }]
        },
        eligibility: ["Authors publishing original work", "Publishing houses and corporate publication agencies"],
        documents: [{ category: "Required Details", items: ["Aadhaar / Voter ID of the author", "Book cover and manuscript draft", "Publisher declaration letter"] }],
        process: [
            { title: "Step 1: Profile Setup", desc: "Register author details on the National ISBN portal." },
            { title: "Step 2: Book Submission & ISBN Approval", desc: "Submit the book title and details for ISBN allocation." }
        ],
        fees: [{ item: "ISBN Allocation Service", cost: "₹1,500" }],
        advantages: [{ icon: "✓", title: "Distribution Ready", desc: "Allows listing on Amazon, Flipkart, and global bookstores." }],
        faqs: [{ q: "Is ISBN registration free in India?", a: "The government agency allocates ISBNs for free, our fee covers processing, profile setup, and documentation support." }]
    },

    "dtaa": {
        slug: "dtaa",
        title: "Double Taxation Avoidance Agreement (DTAA) Consultancy",
        subtitle: "Avoid paying tax twice on the same income in two countries with expert DTAA planning and advice.",
        heroFeatures: ["Foreign tax credit calculation", "Tax Residency Certificate guidance", "Withholding tax optimization", "Cross-border income planning"],
        overview: {
            heading: "Overview of DTAA Consultancy",
            paragraphs: ["DTAA is a treaty signed between India and other nations to ensure taxpayers do not pay double tax on the same income.", "We help NRIs and multinational businesses claim relief, analyze treaty benefits, and minimize tax obligations legally."],
            highlights: [{ icon: "🌎", text: "Treaty compliance mapping" }, { icon: "💸", text: "Tax liability minimization" }]
        },
        eligibility: ["NRIs earning income in India", "Indian residents with foreign income streams", "MNCs operating in multiple jurisdictions"],
        documents: [{ category: "Required Files", items: ["Tax Residency Certificate (TRC)", "Passport pages & visa copies", "Bank statements showing foreign transfers", "Foreign tax returns"] }],
        process: [
            { title: "Step 1: Treaty Analysis", desc: "We analyze the relevant DTAA clauses between India and the foreign country." },
            { title: "Step 2: Claim Filing", desc: "Draft and submit Form 10F and TRC details to apply for treaty rates." }
        ],
        fees: [{ item: "DTAA Consultation", cost: "₹7,500" }],
        advantages: [{ icon: "✓", title: "Double Tax Prevention", desc: "Avoid paying taxes in both source and residence countries." }],
        faqs: [{ q: "What is a Tax Residency Certificate (TRC)?", a: "It is a document issued by the tax authorities of the foreign country proving your residence status." }]
    },

    "form-15-ca": {
        slug: "form-15-ca",
        title: "Form 15CA & 15CB Certification",
        subtitle: "Authorize foreign remittances smoothly with mandatory Form 15CA submission and Form 15CB CA certification.",
        heroFeatures: ["CA certified Form 15CB", "Form 15CA online filing", "Remittance nature verification", "FEMA compliance checking"],
        overview: {
            heading: "Overview of Form 15CA & 15CB",
            paragraphs: ["Any person making a remittance (payment) to a non-resident or a foreign company must declare it via Form 15CA and Form 15CB.", "Form 15CB is a certification by an independent Chartered Accountant verifying that correct tax has been deducted at source."],
            highlights: [{ icon: "🏦", text: "Mandatory bank clearance docs" }, { icon: "💼", text: "CA certified verification" }]
        },
        eligibility: ["Individuals sending money abroad", "Corporates paying foreign vendor invoices", "Importers making foreign transactions"],
        documents: [{ category: "Required Documents", items: ["Foreign invoice or remittance details", "Bank account details of remitter", "PAN of remitter and recipient", "Recipient residency certificate"] }],
        process: [
            { title: "Step 1: Nature of Remittance Audit", desc: "We analyze the remittance taxability and applicable TDS rates." },
            { title: "Step 2: 15CB Certification & 15CA Filing", desc: "The CA signs Form 15CB, and we file Form 15CA on the IT portal." }
        ],
        fees: [{ item: "15CA/CB Filing Pack", cost: "₹4,500" }],
        advantages: [{ icon: "✓", title: "Seamless Remittances", desc: "Enable quick clearing of international wire transfers by banks." }],
        faqs: [{ q: "Is Form 15CB always required?", a: "It is required for payments exceeding ₹5 Lakhs in a financial year that are taxable in India." }]
    },

    "international-taxation-consultancy": {
        slug: "international-taxation-consultancy",
        title: "International Taxation Consultancy",
        subtitle: "Navigate cross-border tax compliance, withholding taxes, and foreign assets disclosure with expert CA advice.",
        heroFeatures: ["Foreign asset reporting", "Withholding tax planning", "Expat tax filing support", "Inbound & outbound structures"],
        overview: {
            heading: "Overview of International Taxation Services",
            paragraphs: ["Cross-border business operations trigger complex tax rules, including Transfer Pricing, DTAA, and Equalization Levy.", "Our international tax consultants help you set up compliant corporate structures, plan tax payments, and file required tax declarations."],
            highlights: [{ icon: "🌎", text: "Cross-border tax planning" }, { icon: "⚖️", text: "FEMA & IT Act sync" }]
        },
        eligibility: ["Expatriates working in India", "MNCs establishing Indian operations", "Residents holding foreign investments"],
        documents: [{ category: "Required Records", items: ["Global income statements", "Foreign bank and asset details", "PAN & Aadhaar cards"] }],
        process: [
            { title: "Step 1: Compliance Assessment", desc: "We review your global tax exposure and asset footprints." },
            { title: "Step 2: Tax Structuring", desc: "Optimize withholding taxes and draft compliance filings." }
        ],
        fees: [{ item: "Initial Consult Session", cost: "₹10,000" }],
        advantages: [{ icon: "✓", title: "Compliance Safety", desc: "Mitigate risk of heavy penalties under the Black Money Act." }],
        faqs: [{ q: "Who is considered a tax resident in India?", a: "Based on your physical stay in India (182 days or more in a financial year, or 365 days in 4 years plus 60 days in the current year)." }]
    },

    "transfer-pricing": {
        slug: "transfer-pricing",
        title: "Transfer Pricing Services",
        subtitle: "Ensure international transactions with associated enterprises conform to the Arm's Length Principle.",
        heroFeatures: ["Arm's Length analysis", "Transfer Pricing audits", "Safe Harbor rule consulting", "Filing of Form 3CEB"],
        overview: {
            heading: "Overview of Transfer Pricing compliance",
            paragraphs: ["Transfer Pricing regulations prevent shift of profits out of India by enforcing Arm's Length Pricing (ALP) on cross-border group transactions.", "We conduct detailed economic studies, compare database metrics, and prepare robust Transfer Pricing documentation."],
            highlights: [{ icon: "📊", text: "Arm's Length pricing validation" }, { icon: "🛡️", text: "Form 3CEB certification" }]
        },
        eligibility: ["Indian companies with foreign parent/subsidiary transactions", "MNCs conducting inter-company trades"],
        documents: [{ category: "Required Files", items: ["Inter-company contracts", "Financial statements of associated enterprises", "Form 3CEB details"] }],
        process: [
            { title: "Step 1: Transaction Mapping", desc: "We identify and evaluate inter-company transactions." },
            { title: "Step 2: Economic Search & Benchmarking", desc: "Search databases for comparable companies and calculate margins." }
        ],
        fees: [{ item: "Form 3CEB Audit Pack", cost: "Contact for pricing" }],
        advantages: [{ icon: "✓", title: "Tax Risk Mitigation", desc: "Protects your company from aggressive tax assessments and adjustments." }],
        faqs: [{ q: "What is Form 3CEB?", a: "It is a report from a CA containing details of international transactions that must be filed annually." }]
    },

    "tp-study-report": {
        slug: "tp-study-report",
        title: "Transfer Pricing Study Report",
        subtitle: "Draft a comprehensive economic report supporting your inter-company pricing models and database analysis.",
        heroFeatures: ["Economic database searches", "Functional Analysis (FAR)", "Method selection validation", "Local file preparation"],
        overview: {
            heading: "Overview of TP Study Reports",
            paragraphs: ["A Transfer Pricing (TP) Study Report is a formal document proving that your associated enterprise transactions are at Arm's Length.", "We perform economic benchmarking using software databases like Capitaline or Prowess to justify your pricing model."],
            highlights: [{ icon: "📝", text: "FAR Analysis documentation" }, { icon: "🔍", text: "Economic database metrics" }]
        },
        eligibility: ["Companies with international group transactions exceeding ₹1 Crore"],
        documents: [{ category: "Required Details", items: ["Description of business functions", "Organizational hierarchy charts", "Inter-company invoices and pricing grids"] }],
        process: [
            { title: "Step 1: Functional Analysis", desc: "Detail the Functions, Assets, and Risks (FAR) of each entity." },
            { title: "Step 2: Economic Benchmark Report", desc: "Perform database search, identify comparables, and draft the final report." }
        ],
        fees: [{ item: "TP Study Report Compilation", cost: "Contact for pricing" }],
        advantages: [{ icon: "✓", title: "Robust Audit Shield", desc: "Provides the primary defense line during tax authority scrutinies." }],
        faqs: [{ q: "Is a TP Study Report mandatory every year?", a: "Yes, if international transactions cross the statutory threshold limit." }]
    },

    /* ═══════════════════ LITIGATION SERVICES ═══════════════════ */

    "litigation-income-tax": {
        slug: "litigation-income-tax",
        title: "Income Tax Litigation Support",
        subtitle: "Resolve Income Tax disputes, respond to assessment notices, and file appeals before CIT(A) and ITAT.",
        heroFeatures: ["Assessment notice responses", "CIT(Appeals) filing & representation", "ITAT appeals management", "Search & seizure defense"],
        overview: {
            heading: "Income Tax Litigation Services",
            paragraphs: ["Our tax litigation experts represent clients before income tax authorities, drafting strong grounds of appeal and securing tax stays.", "We handle disputes related to transfer pricing adjustments, capital gains assessments, search/seizure actions, and tax audits."],
            highlights: [{ icon: "⚖️", text: " CIT(A) & ITAT representations" }, { icon: "🛡️", text: "Assessment dispute defense" }]
        },
        eligibility: ["Taxpayers who received demand notices or assessment orders", "Entities filing tax appeals"],
        documents: [{ category: "Required Documents", items: ["Income tax assessment orders / notices", "Previous filed ITR & tax audit reports", "Remittance receipts and ledger accounts"] }],
        process: [
            { title: "Step 1: Notice Audit & Strategy", desc: "We analyze the tax demand and draft a strategic response plan." },
            { title: "Step 2: Appeal Filing & Representation", desc: "Draft grounds of appeal, submit statements, and represent before CIT(A) or ITAT." }
        ],
        fees: [{ item: "Notice Response Drafting", cost: "Starts from ₹10,000" }],
        advantages: [{ icon: "🛡️", title: "Expert Representation", desc: "Experienced CAs and lawyers advocate for your tax rights." }],
        faqs: [{ q: "What is the time limit to file an appeal with CIT(A)?", a: "Generally within 30 days from the date of service of the demand notice or assessment order." }]
    },

    "litigation-gst": {
        slug: "litigation-gst",
        title: "GST Litigation & Appeal Support",
        subtitle: "Draft responses to GST show cause notices, appeal assessment demands, and secure relief from tax demands.",
        heroFeatures: ["Show Cause Notice (SCN) reply", "GST appellate representations", "Input Tax Credit dispute resolution", "Anti-profiteering litigation"],
        overview: {
            heading: "GST Dispute & Litigation Services",
            paragraphs: ["We represent businesses facing GST tax disputes, covering ITC reversals, mismatched GSTR-2A/3B returns, and registration cancellations.", "Our litigators draft replies to GST audits, represent you before Appellate Authorities, and handle writs in High Courts if necessary."],
            highlights: [{ icon: "⚖️", text: "Appellate representations" }, { icon: "🛡️", text: "SCN response drafting" }]
        },
        eligibility: ["Businesses facing GST demands, audits, or notice actions"],
        documents: [{ category: "Required Details", items: ["GST SCN or assessment order copy", "Sales and purchase registers", "GSTR-1/3B filings and reconciliation sheets"] }],
        process: [
            { title: "Step 1: Reconciliation & Evaluation", desc: "We verify tax registers and evaluate the notice grounds." },
            { title: "Step 2: Submissions & Hearing", desc: "Draft the written statement, file appeals online, and attend hearings." }
        ],
        fees: [{ item: "GST SCN Reply Drafting", cost: "Starts from ₹8,000" }],
        advantages: [{ icon: "✓", title: "ITC Recovery", desc: "Recover blocked or disputed Input Tax Credit through legal means." }],
        faqs: [{ q: "Can a GST registration cancellation be appealed?", a: "Yes, you can file a revocation application or appeal to the GST commissioner." }]
    },

    "litigation-custom": {
        slug: "litigation-custom",
        title: "Customs & Foreign Trade Litigation",
        subtitle: "Resolve valuation disputes, seizure issues, and tariff classification claims before Customs and CESTAT.",
        heroFeatures: ["Customs classification replies", "CESTAT appeal filings", "SEZ / EOU compliance dispute", "Duty drawback claim recovery"],
        overview: {
            heading: "Customs Litigation Services",
            paragraphs: ["We handle dispute resolution for importers and exporters regarding customs duties, valuation, and licensing issues.", "Our team represents clients before Commissioner (Appeals), CESTAT, and DGFT authorities."],
            highlights: [{ icon: "⚖️", text: "CESTAT & Customs representations" }, { icon: "🛳️", text: "Import/Export tax dispute defense" }]
        },
        eligibility: ["Importers, Exporters, and Customs Brokers with active duty/seizure notices"],
        documents: [{ category: "Required Papers", items: ["Bill of Entry / Shipping Bill", "Customs SCN or seizure memo", "Commercial Invoice & Pack List"] }],
        process: [
            { title: "Step 1: Document Review", desc: "Analyze tariff codes and valuation methods." },
            { title: "Step 2: Appeal Action", desc: "Draft replies and present arguments during personal hearings." }
        ],
        fees: [{ item: "Customs Appeal Service", cost: "Contact for quotation" }],
        advantages: [{ icon: "✓", title: "Seizure Relief", desc: "Accelerate the release of detained goods and mitigate penalties." }],
        faqs: [{ q: "What is CESTAT?", a: "The Customs, Excise and Service Tax Appellate Tribunal." }]
    },

    "litigation-international-taxation": {
        slug: "litigation-international-taxation",
        title: "International Tax Dispute Support",
        subtitle: "Defend transfer pricing audits, PE assertions, and withholding tax adjustments before dispute resolution panels (DRP).",
        heroFeatures: ["DRP representation", "Mutual Agreement Procedure (MAP)", "Expat tax disputes", "Withholding tax appeals"],
        overview: {
            heading: "International Tax Litigation Services",
            paragraphs: ["Cross-border tax disputes involve high stakes, requiring specialized technical expertise in tax treaties and transfer pricing.", "We represent clients before the Dispute Resolution Panel (DRP), CIT(A), and ITAT for international tax matters."],
            highlights: [{ icon: "🌎", text: "DRP and treaty representations" }, { icon: "🛡️", text: "PE notice defense" }]
        },
        eligibility: ["Foreign companies with Indian PE disputes", "Indian entities with TP adjustment orders"],
        documents: [{ category: "Required Documents", items: ["Transfer Pricing order / assessment draft", "Global transfer pricing documentation", "Tax treaties (DTAA) details"] }],
        process: [
            { title: "Step 1: DRP Objection Filing", desc: "Draft objections against draft assessment orders and submit to DRP." },
            { title: "Step 2: Oral Hearings", desc: "Present database and legal arguments before the panel." }
        ],
        fees: [{ item: "DRP Representation Pack", cost: "Contact for pricing" }],
        advantages: [{ icon: "✓", title: "Double Tax Relief", desc: "Resolve international adjustments using MAP or DRP routes." }],
        faqs: [{ q: "What is the benefit of the DRP route?", a: "It provides a fast-track resolution mechanism before final assessment orders are issued." }]
    },

    "litigation-mca": {
        slug: "litigation-mca",
        title: "MCA & Company Law Litigation",
        subtitle: "Resolve company name disputes, strike-off restorations, and shareholder disputes before the NCLT.",
        heroFeatures: ["NCLT company restorations", "Shareholder oppression petition", "Director disqualification relief", "Compounding of offences"],
        overview: {
            heading: "MCA & NCLT Litigation Services",
            paragraphs: ["We handle corporate litigation under the Companies Act, representing promoters, shareholders, and directors before the NCLT and MCA.", "Our specialties include compounding default forms, petitioning for company restorations, and resolving director disqualifications."],
            highlights: [{ icon: "🏛️", text: "NCLT petition filings" }, { icon: "💼", text: "Corporate default compounding" }]
        },
        eligibility: ["Struck-off companies seeking restoration", "Shareholders facing oppression/mismanagement", "Directors with disqualified DIN status"],
        documents: [{ category: "Required Documents", items: ["MCA master data & search report", "Disqualification notice / strike-off details", "Memorandum & Articles of Association (MOA/AOA)"] }],
        process: [
            { title: "Step 1: Petition Drafting", desc: "Prepare legal petitions for company restoration or compounding applications." },
            { title: "Step 2: NCLT Listing", desc: "File petitions, list matters, and secure orders from the tribunal." }
        ],
        fees: [{ item: "Company Restoration Pack", cost: "Contact for pricing" }],
        advantages: [{ icon: "✓", title: "Company Revival", desc: "Restore struck-off entities to active status to restart banking and commercial actions." }],
        faqs: [{ q: "How long does NCLT take to restore a company?", a: "Typically 3 to 6 months depending on document verification and court schedules." }]
    },

    "litigation-rera": {
        slug: "litigation-rera",
        title: "RERA Disputes & Appeal Support",
        subtitle: "Represent builders or homebuyers in delay claims, refund disputes, and project compliance hearings before RERA.",
        heroFeatures: ["Homebuyer refund claims", "Builder compliance replies", "Appellate Tribunal representation", "Project delay compensation requests"],
        overview: {
            heading: "RERA Litigation Services",
            paragraphs: ["Real Estate Regulatory Authority (RERA) resolves disputes between buyers and real estate promoters.", "We draft and file consumer complaints for refunds/interest due to project delays and represent developers in defending structural claims."],
            highlights: [{ icon: "🏢", text: "Homebuyer interest protection" }, { icon: "⚖️", text: "RERA authority representations" }]
        },
        eligibility: ["Homebuyers seeking refund/possession interest", "Builders facing project non-compliance notices"],
        documents: [{ category: "Required Information", items: ["Allotment letter & Builder-Buyer Agreement", "Payment receipts and bank statements", "RERA project registration details"] }],
        process: [
            { title: "Step 1: Complaint Drafting", desc: "Draft formal Form M or N complaints detailing project defaults." },
            { title: "Step 2: Online Filing & Representation", desc: "Submit RERA portal files and represent client during hearings." }
        ],
        fees: [{ item: "RERA Complaint Filing", cost: "₹12,000" }],
        advantages: [{ icon: "✓", title: "Refund Guarantee", desc: "Legally claim refunds along with high interest for delayed projects." }],
        faqs: [{ q: "Can RERA orders be appealed?", a: "Yes, appeals can be filed in the state Real Estate Appellate Tribunal." }]
    },

    "litigation-fema-fcra": {
        slug: "litigation-fema-fcra",
        title: "FEMA & FCRA Adjudication Support",
        subtitle: "Respond to ED notices, compound foreign exchange violations, and handle FCRA registration suspension appeals.",
        heroFeatures: ["ED notice replies", "FEMA compounding applications", "FCRA suspension representations", "Inbound remittance audits"],
        overview: {
            heading: "FEMA & FCRA Adjudication Services",
            paragraphs: ["Foreign Exchange Management Act (FEMA) and Foreign Contribution Regulation Act (FCRA) govern foreign capital inflows and usage.", "We assist clients in regularizing compliance defaults, compounding foreign exchange violations before the RBI, and handling registration suspension notices before the MHA."],
            highlights: [{ icon: "🛡️", text: "RBI compounding representation" }, { icon: "💼", text: "FEMA compliance audits" }]
        },
        eligibility: ["Companies receiving foreign investment (FDI)", "NGOs receiving foreign contributions (FCRA)"],
        documents: [{ category: "Required Files", items: ["FDI / FCRA bank remittance details", "MHA / RBI registration certificates", "Copy of show cause or demand notices"] }],
        process: [
            { title: "Step 1: Audit & Ground Prep", desc: "Assess transfer reporting records and identify compliance gaps." },
            { title: "Step 2: RBI Compounding / Appeal", desc: "Draft and present compounding statements to regularize filings." }
        ],
        fees: [{ item: "FEMA Compounding Consultation", cost: "Contact for pricing" }],
        advantages: [{ icon: "✓", title: "Legal Protection", desc: "Regularize compliance oversights and protect business from prosecution." }],
        faqs: [{ q: "What is FEMA compounding?", a: "It is a voluntary process to settle compliance violations without prosecution by paying a minor penalty." }]
    },

    "litigation-pmla": {
        slug: "litigation-pmla",
        title: "PMLA Defense & Representation",
        subtitle: "Defend attachment proceedings, represent clients before the PMLA Adjudicating Authority and Appellate Tribunal.",
        heroFeatures: ["Attachment notice defense", "Appellate Tribunal appeals", "Asset release representation", "ED compliance audits"],
        overview: {
            heading: "PMLA Defense Services",
            paragraphs: ["Prevention of Money Laundering Act (PMLA) actions include provisional attachment of bank accounts and properties by the ED.", "We draft appeals against attachment orders and represent corporate clients before the Adjudicating Authority to defend asset titles."],
            highlights: [{ icon: "⚖️", text: "PMLA tribunal representations" }, { icon: "🛡️", text: "Asset attachment defense" }]
        },
        eligibility: ["Entities whose properties or accounts are provisionally attached", "Businesses facing compliance audits under PMLA"],
        documents: [{ category: "Required Details", items: ["Provisional Attachment Order copy", "Source of funds reports and audits", "Property deeds and bank ledgers"] }],
        process: [
            { title: "Step 1: Grounds of Opposition", desc: "Verify and draft objections proving sources of attached funds." },
            { title: "Step 2: Representation", desc: "Present defense pleadings before the Adjudicating Authority in Delhi." }
        ],
        fees: [{ item: "Appellate Tribunal Representation", cost: "Contact for details" }],
        advantages: [{ icon: "✓", title: "Asset Protection", desc: "Secure release of legally acquired assets from attachment orders." }],
        faqs: [{ q: "Where is the PMLA Appellate Tribunal located?", a: "The principal bench is in New Delhi." }]
    },

    "litigation-other-corporate": {
        slug: "litigation-other-corporate",
        title: "General Corporate Litigation",
        subtitle: "Resolve commercial contract breaches, arbitration disputes, and general business litigation.",
        heroFeatures: ["Contractual dispute filings", "Commercial arbitration management", "Injunction applications", "Winding up petitions"],
        overview: {
            heading: "Corporate Litigation Services",
            paragraphs: ["We represent corporate clients in general commercial disputes, covering contract breaches, joint venture fights, and vendor payment recovery.", "Our legal experts handle drafting notices, filing civil suits, managing commercial arbitrations, and seeking interim injunctions."],
            highlights: [{ icon: "⚖️", text: "Commercial dispute resolution" }, { icon: "💼", text: "Arbitration management support" }]
        },
        eligibility: ["Companies facing commercial disputes or contract defaults"],
        documents: [{ category: "Required Papers", items: ["Signed commercial contracts / agreements", "Invoices, ledger sheets, and email logs", "Dispute notices and replies"] }],
        process: [
            { title: "Step 1: Case Assessment & Strategy", desc: "Analyze contract terms and outline dispute strategies." },
            { title: "Step 2: Notice / Suit Action", desc: "Draft legal demand notices, invoke arbitration clauses, or file civil suits." }
        ],
        fees: [{ item: "Commercial Notice Drafting", cost: "₹8,000" }],
        advantages: [{ icon: "✓", title: "Fast Resolution", desc: "Leverage arbitration or summary suits to recover business dues quickly." }],
        faqs: [{ q: "How is arbitration initiated?", a: "By sending a formal notice invoking the arbitration clause in your contract." }]
    }
};
