import type { ServiceData } from '../services';

const data: Record<string, ServiceData> = {
  'gst-registration': {
    slug: 'gst-registration',
    title: 'GST Registration',
    subtitle:
      'GST (Goods and Services Tax) Registration is a mandatory process for businesses engaged in the supply of goods or services crossing specific turnover thresholds. It applies to:',
    heroFeatures: [
      'Manufacturers',
      'Traders',
      'Service providers',
      'E-commerce sellers',
      'Freelancers, and',
    ],
    overview: {
      heading: 'Overview of GST Registration in India',
      paragraphs: [
        'GST (Goods and Services Tax) Registration is a mandatory process for businesses engaged in the supply of goods or services crossing specific turnover thresholds. It applies to:',
        'GST was launched with the main objective of combining various central and state taxes into one single tax on the supply of goods and services. Before GST, businesses had to deal with multiple taxes like VAT, excise duty, and service tax, making the system complicated.',
      ],
      highlights: [
        { icon: '📋', text: 'Manufacturers' },
        { icon: '📊', text: 'Traders' },
        { icon: '💰', text: 'Service providers' },
        { icon: '⚖️', text: 'E-commerce sellers' },
        { icon: '🔍', text: 'Freelancers, and' },
        { icon: '📅', text: 'Businesses operating online or across multiple states.' },
      ],
    },
    types: [
      {
        title: 'Types of GST Registration in India',
        desc: 'GST registration in India varies based on the nature of the business and its turnover.',
      },
      {
        title: 'Components of GST: CGST, SGST, IGST, and UTGST',
        desc: 'GST follows a dual structure because India is a federal country. This system allows both the Central and State governments to levy and collect taxes on transactions, ensuring a clear division of revenue.',
      },
      {
        title: 'GST Registration Threshold & Turnover Limits',
        desc: 'GST registration is a mandatory requirement for businesses and individuals once their annual aggregate turnover crosses specific thresholds within a financial year.',
      },
    ],
    eligibility: [
      'Your aggregate turnover exceeds the threshold limit of ₹40 lakh for goods suppliers and ₹20 lakh for service providers (₹10 lakh for NE and hill states).',
      'You are involved in interstate supply of goods or services, regardless of turnover.',
      'You are an e-commerce seller or aggregator using platforms like Amazon, Flipkart, or Swiggy.',
      'You are a casual taxable person (e.g., someone supplying goods/services occasionally in a different state).',
      'You are a non-resident taxable person conducting business in India.',
      'You are liable under the reverse charge mechanism to pay GST on certain inward supplies.',
      'You are an input service distributor (ISD) or an agent of a supplier.',
      'You are providing online information or database access services (OIDAR) from outside India to Indian customers.',
      'Casual Taxable Persons:Those who do business occasionally in a state where they do not have a fixed shop—for example, someone setting up a temporary stall at a trade fair.',
      'Non-Resident Taxable Persons (NRTPs):Foreign individuals or companies supplying goods or services in India without having a physical presence here.',
      'Inter-State Taxable Supplies:Anyone selling goods or services from one state to another must register for GST, even if their income is below the limit.',
      'E-commerce Operators & Sellers:Online platforms like Amazon or Flipkart and people selling through them must register for GST, no matter their turnover.',
      'Agents of a Registered Taxpayer:Anyone selling goods or services on behalf of a registered person needs to register, too.',
      'Tax Under Reverse Charge Mechanism (RCM):If you are required to pay GST instead of the supplier (reverse charge), you must register.',
      'Input Service Distributors (ISD):Businesses that pass on GST credits from the head office to branches must register as ISDs.',
      'TDS/TCS Deductors:Entities required to deduct or collect GST at source are mandatorily required to obtain GST registration.',
      'Overseas Online Information and Database Access or Retrieval (OIDAR) Service Providers:Foreign companies providing digital services (like software or online subscriptions) to people in India need to register.',
      'Aggregators:Platforms that connect customers to service providers (like Ola or Uber) must be registered.',
      'Businesses Registered Under Old Tax Laws:Those registered under VAT, Excise, or Service Tax had to switch to GST when it was introduced.',
      'Claim GST on Purchases (ITC):You can claim credit on GST paid for purchases as Input Tax Credit, helping you save money and improve cash flow.',
      'Build Trust & Credibility:A GST certificate gives your business legal recognition, making it easier to deal with bigger companies and partners who prefer GST-registered suppliers.',
      'Sell Across India:It allows you to do business across state borders without restrictions, helping you grow your market.',
      'Sell Online Easily:Most e-commerce platforms require GST registration, so getting it early helps avoid delays when you go online.',
      'Support Business Growth:It makes it easier to apply for tenders, scale operations, and stay compliant as your business grows.',
      'Use Old Tax Credits:If you have unused credits from previous tax systems, GST registration lets you carry them forward.',
      'Better for Loans & Rentals:Being GST-registered improves your reputation, which helps when applying for loans or renting office space.',
    ],
    documents: [
      {
        category: 'Required Documents',
        items: [
          'PAN Card:Mandatory for all businesses as GSTIN is linked to the business’s PAN.',
          'Aadhaar Card:Required for verification in speeding up the process through Aadhaar authentication.',
          'Proof of Business Address:Needed to verify the main business location (owned, rented, or shared).',
          'Bank Account Details:Required to link GST with your business’s bank account.',
          'Passport-size Photos:Needed for identification of proprietors or authorized signatories.',
          'Digital Signature Certificate (DSC):Mandatory for companies and LLPs for online submission.',
          'Authorization Letter/Board Resolution:Gives authority to a person to handle GST matters for the business.',
        ],
      },
    ],
    process: [
      { title: 'Step 1: Generating Your Temporary Reference Number (TRN)', desc: 'The first stage of GST registration involves generating a Temporary Reference Number (TRN), which acts as a temporary identifier for your application.' },
      { title: 'Step 2: Log in with TRN', desc: 'Go to the GST portal, choose "New Registration" > "TRN", and log in using the OTP sent to your registered email and mobile.' },
      { title: 'Step 3: Access Saved Application', desc: 'Click on "My Saved Application" and use the edit option to continue filling out Form GST REG-01.' },
      { title: 'Step 4: Fill in Business Details', desc: 'Enter your trade name, business type, district, codes, and dates for business start and GST liability. Choose the Composition Scheme if eligible.' },
      { title: 'Step 5: Promoter/Partner Info', desc: 'Add details of promoters/partners like name, PAN, Aadhaar, contact, and DIN (if applicable).' },
      { title: 'Step 6: Authorized Signatory', desc: 'Provide details and documents for the person handling GST compliance on behalf of your business.' },
      { title: 'Step 7: Business Address', desc: 'Enter your main business address, upload proof, and mention any additional business locations.' },
      { title: 'Step 8: Goods & Services', desc: 'List the goods/services you deal in with their HSN/SAC codes.' },
    ],
    fees: [
      { item: 'Most Regular Businesses:There is no government fee for GST registration. No additional requirements apply.', cost: 'Contact for pricing' },
      { item: 'Casual Taxable Persons:While registration itself is free, applicants must submit a security deposit ranging from ₹500 to ₹10,000, depending on the nature of the business and state-specific rules.', cost: 'Contact for pricing' },
      { item: 'Non-Resident Taxable Persons:Registration is also free, but a mandatory security deposit between ₹500 and ₹10,000 is required. This applies to temporary or foreign business entities operating in India.', cost: 'Contact for pricing' },
      { item: 'General Penalty:₹10,000 or 10% of the tax due — whichever is higher.', cost: 'Contact for pricing' },
      { item: 'In Case of Fraud/Deliberate Evasion:₹10,000 or 100% of the tax due — whichever is higher.', cost: 'Contact for pricing' },
    ],
    advantages: [
      { icon: '✅', title: 'Collect Tax Legally and Build Credibility', desc: 'Collect Tax Legally and Build Credibility' },
      { icon: '🏛️', title: 'Claim Input Tax Credit', desc: 'Claim Input Tax Credit' },
      { icon: '🤝', title: 'Wider Business Opportunities', desc: 'Wider Business Opportunities' },
      { icon: '📈', title: 'Compliance with Legal Requirements', desc: 'Compliance with Legal Requirements' },
      { icon: '🔒', title: 'Easier Business Expansion', desc: 'Easier Business Expansion' },
    ],
    compliance: [
      { area: 'Keep GST Info Updated:Update any business changes like addre', details: 'Keep GST Info Updated:Update any business changes like address or activity on the GST portal.' },
      { area: 'Maintain Records:Keep accurate books, invoices, and e-way bi', details: 'Maintain Records:Keep accurate books, invoices, and e-way bills for at least 6 years.' },
      { area: 'Issue GST Invoices:Provide GST-compliant invoices with all r', details: 'Issue GST Invoices:Provide GST-compliant invoices with all required details for each sale.' },
      { area: 'File GST Returns:Submit monthly, quarterly, and annualGST re', details: 'File GST Returns:Submit monthly, quarterly, and annualGST returnson time.' },
      { area: 'Pay Collected GST:Deposit collected GST to the government pr', details: 'Pay Collected GST:Deposit collected GST to the government promptly.' },
      { area: 'Generate E-Way Bills:Required for goods movement over ₹50,00', details: 'Generate E-Way Bills:Required for goods movement over ₹50,000.' },
      { area: 'HSN/SAC Codes:The correct application ofHSN codes(for goods)', details: 'HSN/SAC Codes:The correct application ofHSN codes(for goods) and SAC codes (for services) on tax invoices and in GST return filings is mandatory.' },
    ],
    faqs: [
      {
        q: 'What is GST registration?',
        a: 'GST registration is the process by which a business gets officially listed under the Goods and Services Tax system. Upon registration, the business receives a unique 15-digit GSTIN and becomes legally obligated to collect and remit GST on applicable transactions.',
      },
      {
        q: 'How to get GST registration?',
        a: '',
      },
      {
        q: 'Who is eligible for GST registration?',
        a: '',
      },
      {
        q: 'Who is liable for GST registration?',
        a: '',
      },
      {
        q: 'What are the documents required for GST registration?',
        a: '',
      },
      {
        q: 'How much time does GST registration take?',
        a: '',
      },
      {
        q: 'How to download the GST registration certificate?',
        a: '',
      },
      {
        q: 'How to check GST registration status?',
        a: '',
      },
      {
        q: 'What is the threshold limit for GST registration?',
        a: '',
      },
      {
        q: 'Is GST registration mandatory?',
        a: '',
      },
      {
        q: 'How to change the address in the GST registration certificate?',
        a: '',
      },
      {
        q: 'How to calculate aggregate turnover for GST registration?',
        a: '',
      },
      {
        q: 'How to change the trade name in GST registration?',
        a: '',
      },
      {
        q: 'Is GST registration required for share trading?',
        a: '',
      },
      {
        q: 'How to change the phone number in GST registration?',
        a: '',
      },
      {
        q: 'Is PAN mandatory for GST registration?',
        a: '',
      },
      {
        q: 'What are the benefits of GST registration?',
        a: '',
      },
      {
        q: 'What if the application for GST registration is rejected?',
        a: '',
      },
      {
        q: 'How to add HSN code in GST registration?',
        a: '',
      },
      {
        q: 'What is a letter of authorization for GST registration?',
        a: '',
      },
      {
        q: 'How to change a partners name in GST registration?',
        a: '',
      },
      {
        q: 'Can I get multiple GST registrations within a state?',
        a: '',
      },
      {
        q: 'What is a GST Identification Number or GSTIN?',
        a: '',
      },
      {
        q: 'How to cancel GST registration?',
        a: '',
      },
      {
        q: 'How to close GST registration?',
        a: '',
      },
      {
        q: 'How to revoke a cancelled GST registration?',
        a: '',
      },
      {
        q: 'Can I cancel GST registration without filing returns?',
        a: '',
      },
    ],
    cta: {
      heading: 'Need Help With GST Registration?',
      subheading:
        'Let Your Professionals handle your gst registration requirements with expert guidance and timely filing.',
      features: [
        'Expert Tax Professionals',
        'Timely Filing Guarantee',
        'Dedicated Support Manager',
        'Transparent Pricing',
      ],
    },
  },
  'gst-return-filing': {
    slug: 'gst-return-filing',
    title: 'GST Return Filing',
    subtitle:
      'A GST (Goods and Services Tax) return is an official document providing a comprehensive record of a businesss financial activities. It provides a summary of sales and purchases, including the tax collected on sales (output tax) and the tax paid on purchases (input tax). Businesses must submit these ',
    heroFeatures: [
      'Business Name',
      'Return Period',
      'Invoice-level details for registered persons',
      'Inter-state supplies over Rs. 2.5 Lakhs to unregistered persons',
      'Consolidated state-level details for unregistered persons, export details',
    ],
    overview: {
      heading: 'What is the GST Return?',
      paragraphs: [
        'A GST (Goods and Services Tax) return is an official document providing a comprehensive record of a businesss financial activities. It provides a summary of sales and purchases, including the tax collected on sales (output tax) and the tax paid on purchases (input tax). Businesses must submit these returns electronically through the Government of Indias official GST portal.',
        'Under the GST regime, regular businesses with an annual aggregate turnover exceeding Rs. 5 crore are required to file two main monthly returns: GSTR-1 (details of outward supplies) and GSTR-3B (a summary return). In addition to these, most regular taxpayers must also file an annual return, bringing the total to as many as 25 returns per year for a monthly filer.',
        'This process ensures compliance with tax regulations and forms the backbone of the Goods and Services Tax Network (GSTN). Even if a business has no activity during a tax period, filing a nil return is mandatory to maintain compliance.',
        'GST returns require detailed information on all sales and purchases of goods and services. Businesses report two key GST details: the GST they collect on sales (output GST) and the GST they pay on purchases, which they can claim asInput Tax Credit (ITC).',
        'The GST system transformed Indias indirect tax landscape in 2017 by replacing multiple central and state levies with a unified structure. This change required businesses to file regular GST returns to comply with tax regulations.',
      ],
      highlights: [
        { icon: '📋', text: 'Business Name' },
        { icon: '📊', text: 'Return Period' },
        { icon: '💰', text: 'Invoice-level details for registered persons' },
        { icon: '⚖️', text: 'Inter-state supplies over Rs. 2.5 Lakhs to unregistered persons' },
        { icon: '🔍', text: 'Consolidated state-level details for unregistered persons, export details' },
        { icon: '📅', text: 'HSN/SAC summary (codes for classifying goods and services).' },
      ],
    },
    types: [
      {
        title: 'Monthly GST Returns',
        desc: 'Monthly GST Returns',
      },
      {
        title: 'Quarterly GST Returns (QRMP Scheme)',
        desc: 'Quarterly GST Returns (QRMP Scheme)',
      },
      {
        title: 'Annual Filings',
        desc: 'Annual Filings',
      },
      {
        title: 'GST Return Filing Categorization: Based on Taxpayer Type',
        desc: 'The variety of GST returns caters to different taxpayer categories, ensuring tailored compliance requirements:',
      },
      {
        title: 'Simplification of the Return Filing Process Over Time',
        desc: 'The GST Council has consistently introduced measures to simplify the GST return filing process, aiming to ease compliance, especially for small businesses. Key initiatives include:',
      },
    ],
    eligibility: [
      'Businesses with an annual turnover exceeding Rs. 20 Lakhs.',
      'For businesses dealing exclusively in goods, the threshold is higher, at Rs. 40 Lakhs.',
      'For businesses providing only services or dealing in both goods and services, the threshold remains Rs. 20 Lakhs.',
      'Special category states have lower thresholds of Rs. 20 Lakhs for goods and Rs. 10 Lakhs for services:Arunachal PradeshManipurMeghalayaMizoramNagalandTripuraSikkimHimachal PradeshUttarakhandJammu & Kashmir',
      'Arunachal Pradesh',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Nagaland',
      'Tripura',
      'Sikkim',
      'Himachal Pradesh',
      'Uttarakhand',
      'Jammu & Kashmir',
      'E-commerce Operators:E-commerce operators must obtain GST registration irrespective of their value of supply. They must file GSTR-8 monthly, detailing supplies affected through their platform and Tax Collected at Source (TCS).',
      'Input Service Distributors (ISD):An Input Service Distributor (ISD) is a business office that receives invoices for services used by its various branches and then distributes the tax credit to those branches. ISDs must register as such, in addition to their normal taxpayer registration, and file GSTR-6 monthly by the 13th of the succeeding month.',
      'Non-Resident Taxable Persons:Individuals or entities conducting taxable transactions in India without a fixed business location must file GSTR-5 monthly.',
      'TDS Deductors:Registered persons required to deduct tax at source under GST rules must file GSTR-7 monthly.',
      'Persons with Unique Identification Number (UIN):Entities like UN bodies or embassies, granted a UIN, must file GSTR-11 monthly, detailing inward supplies for refund claims.',
      'Agriculturalists (Farmers):Generally exempt from GST.',
      'Small Businesses:Individuals and companies with yearly sales below the prescribed turnover thresholds (Rs. 40 Lakhs for goods, Rs. 20 Lakhs for services/mixed, or lower for special category states).',
      'Suppliers of Exempt/Nil-Rated Goods & Services:Those dealing exclusively in supplies such as certain food products, healthcare, and education services.',
      'Non-GST Supplies:Entities dealing with goods or services that fall outside the purview of GST law (e.g., alcohol for human consumption, petrol).',
      'Government Entities and PSUs:Entities dealing with non-GST supplies or exempted/nil-rated goods/services.',
      'UN Bodies and Foreign Consulates:While they must register for a unique GST ID, they are only required to file returns for months during which they make purchases.',
    ],
    documents: [
      {
        category: 'Required Documents',
        items: [
          'Invoices for Outward Supplies (Sales):These are sales invoices issued to customers. They must include details like GSTIN, name, address, invoice number, date, description of goods/services, value, tax charged, and the suppliers signature.',
          'Invoices for Inward Supplies (Purchases):These are purchase invoices received from suppliers and contain similar details to sales invoices, including GSTIN, name, address, invoice number, etc. These are vital for claiming the Input Tax Credit (ITC).',
          'Bank Statements for Reconciliation:Monthly bank statements provide a record of transactions and are essential for reconciling financial records with GST filings.',
          'Details of Debit and Credit Notes Issued:These notes are issued for returns of goods or changes in value. They must include the original invoice number, revised amount, and differential tax.',
          'Summary of Inter-state and Intra-state Sales:A consolidated summary of sales categorized by GST rates, distinguishing between sales within the state and to other states.',
          'Bills of Supply:Issued when selling exempted goods/services or if the business opted for the composition levy. They include basic business details, description, and value of supplies.',
          'Advance Receipt Vouchers:Required if advance payments are received for future supplies. These vouchers detail the supplier, recipient, description, value, and tax payable on the advance.',
          'Delivery Challans:Necessary when goods are transported for reasons other than supply (e.g., for job work). They contain details like name, address, GSTIN, goods description, and purpose of transportation.',
          'Account Ledgers:Comprehensive records of all financial transactions are essential for accurate reporting and audits.',
        ],
      },
    ],
    process: [
      { title: 'Step 1 - Log in to the GST Portal', desc: 'Visit the official GST website (gst.gov.in). Enter your GSTIN, username, and password. Complete the CAPTCHA verification and click "Login".' },
      { title: 'Step 2 - Select the GST Return Form', desc: 'Navigate to the Services tab, then click on Returns and select Returns Dashboard. Choose the financial year and the relevant return filing period (month/quarter). Select the appropriate GST return form (e.g., GSTR-1, GSTR-3B).' },
      { title: 'Step 3 - Enter Business Details', desc: 'Fill in details of your sales (outward supplies), purchases (inward supplies), input tax credit (ITC), and tax liabilities. Make sure all details are accurate before uploading, as any errors can result in penalties.' },
      { title: 'Step 4 - Upload Invoices and Sales Data', desc: 'Upload invoices for outward supplies in the prescribed format. If applicable, add invoices for purchases to claim Input Tax Credit (ITC).' },
      { title: 'Step 5 - Review and Validate Data', desc: 'Cross-check all entered details before submission. The system may auto-calculate the tax payable after ITC adjustment.' },
      { title: 'Step 6 - Make GST Payment (If Required)', desc: 'If there is any net tax liability, proceed with the payment. You can pay using multiple options like net banking, debit/credit card, NEFT/RTGS, or UPI.' },
      { title: 'Step 7 - Submit the GST Return', desc: 'Click on Submit to freeze the return data. Once submitted, no further changes can be made for that period. Complete verification using aDigital Signature Certificate (DSC)(mandatory for companies/LLPs) or an Electronic Verification Code (EVC) (OTP sent to registered mobile number).' },
    ],
    fees: [
      { item: 'Professional Fees', cost: 'Contact Your Professionals for pricing' },
    ],
    penalties: [
      { violation: 'Interest Charges:Interest is applicable at 18% per annum on the outstanding tax ', penalty: 'Interest Charges:Interest is applicable at 18% per annum on the outstanding tax amount. Interest starts accumulating from the day after the filing due date and continues until the payment is made.' },
      { violation: 'Late Fees Structure:GSTR-1:Rs. 200 per day (Rs. 100 CGST + Rs. 100 SGST).GSTR-3B', penalty: 'Late Fees Structure:GSTR-1:Rs. 200 per day (Rs. 100 CGST + Rs. 100 SGST).GSTR-3B:Rs. 20 per day (Rs. 10 CGST + Rs. 10 SGST) for Nil returns.Rs. 50 per day (Rs. 25 CGST + Rs. 25 SGST) for all other situations.The maximum late fee for GSTR-3B is Rs. 10,000 (Rs. 5,000 CGST + Rs. 5,000 SGST).GSTR-9 and GSTR-9A:Rs. 200 per day (Rs. 100 CGST + Rs. 100 SGST) up to a limit of 0.50% (0.25% CGST + 0.25% SGST) of turnover.GSTR-10 (Final Return):Rs. 200 per day (Rs. 100 CGST + Rs. 100 SGST), with no upper limit to the penalty.' },
      { violation: 'GSTR-1:Rs. 200 per day (Rs. 100 CGST + Rs. 100 SGST).', penalty: 'GSTR-1:Rs. 200 per day (Rs. 100 CGST + Rs. 100 SGST).' },
      { violation: 'GSTR-3B:Rs. 20 per day (Rs. 10 CGST + Rs. 10 SGST) for Nil returns.Rs. 50 per da', penalty: 'GSTR-3B:Rs. 20 per day (Rs. 10 CGST + Rs. 10 SGST) for Nil returns.Rs. 50 per day (Rs. 25 CGST + Rs. 25 SGST) for all other situations.The maximum late fee for GSTR-3B is Rs. 10,000 (Rs. 5,000 CGST + Rs. 5,000 SGST).' },
      { violation: 'Rs. 20 per day (Rs. 10 CGST + Rs. 10 SGST) for Nil returns.', penalty: 'Rs. 20 per day (Rs. 10 CGST + Rs. 10 SGST) for Nil returns.' },
      { violation: 'Rs. 50 per day (Rs. 25 CGST + Rs. 25 SGST) for all other situations.', penalty: 'Rs. 50 per day (Rs. 25 CGST + Rs. 25 SGST) for all other situations.' },
    ],
    advantages: [
      { icon: '✅', title: 'Expert GST Return Filing Support', desc: 'Dedicated compliance manager from Your Professionals' },
    ],
    faqs: [
      {
        q: 'What is Input Tax Credit (ITC), and how does it relate to GST returns?',
        a: 'Input Tax Credit (ITC) is the credit of tax paid on purchases of goods or services used for business purposes. When you file your GST returns (specifically GSTR-3B), you declare the ITC you wish to claim. This claimed ITC is then offset against your output GST liability (tax on sales), reducing your overall tax payable. Accurate reporting of ITC in your returns is crucial to avoid discrepancies and maximize your credit benefit.',
      },
      {
        q: 'Is filing a nil GST return necessary?',
        a: '',
      },
      {
        q: 'What are the consequences of late GST return filing?',
        a: '',
      },
      {
        q: 'Can a GST return be filed offline?',
        a: '',
      },
      {
        q: 'What documents are needed for GST return filing?',
        a: '',
      },
      {
        q: 'How often should GST returns be filed?',
        a: '',
      },
      {
        q: 'Who is eligible for GST return filing?',
        a: '',
      },
      {
        q: 'What is the turnover limit for GST return filing?',
        a: '',
      },
      {
        q: 'How can one check if a vendor has filed their GST return?',
        a: '',
      },
      {
        q: 'What is the difference between GSTR-2A and GSTR-2B? Which one should I rely on for ITC?',
        a: '',
      },
      {
        q: 'What is GSTR-9 (Annual Return), and who needs to file it?',
        a: '',
      },
      {
        q: 'What is GSTR-9C, and its importance?',
        a: '',
      },
      {
        q: 'What is GSTR-10 (Final Return), and when should it be filed?',
        a: '',
      },
      {
        q: 'How can I check my GST return filing status online?',
        a: '',
      },
      {
        q: 'What happens if I stop my business but do not cancel my GST registration?',
        a: '',
      },
    ],
    cta: {
      heading: 'Need Help With GST Return Filing?',
      subheading:
        'Let Your Professionals handle your gst return filing requirements with expert guidance and timely filing.',
      features: [
        'Expert Tax Professionals',
        'Timely Filing Guarantee',
        'Dedicated Support Manager',
        'Transparent Pricing',
      ],
    },
  },
  'gstr9-return-filing': {
    slug: 'gstr9-return-filing',
    title: 'GSTR9 Return Filing',
    subtitle:
      'GSTR-9 is an annual return thatGST-registeredpersons are required to submit at the close of every financial year. It provides a detailed summary of all GST transactions reported through monthly or quarterly returns likeGSTR-1 (outward supplies) and GSTR-3B (summary return).',
    heroFeatures: [
      'Sales and purchases made during the financial year,',
      'Input Tax Credit (ITC)claimed and reversed,',
      'Taxes paid under Central Goods and Services Tax (CGST), State Goods and Services Tax (SGST), Integrated Goods and Services Tax (IGST), and Cess,',
      'Interest, refunds, and demand adjustments (if any).',
      'Match data:Align information reported in monthly/quarterly returns (GSTR-1 and GSTR-3B) with the taxpayers yearly financial records.',
    ],
    overview: {
      heading: 'What is GSTR-9?',
      paragraphs: [
        'GSTR-9 is an annual return thatGST-registeredpersons are required to submit at the close of every financial year. It provides a detailed summary of all GST transactions reported through monthly or quarterly returns likeGSTR-1 (outward supplies) and GSTR-3B (summary return).',
        'The main reasons for filing GSTR-9 are to:',
        'While GSTR-9 is the main annual return form under GST, there are a few related forms designed for different types of taxpayers and reporting needs. Each serves a specific purpose depending on the taxpayer’s registration type, turnover, and role in the GST system.',
        'Here’s a breakdown of the different forms:',
        'Choosing the right form and understanding your GSTR-9 filing eligibility is essential to ensure error-free annual return filing under GST.',
      ],
      highlights: [
        { icon: '📋', text: 'Sales and purchases made during the financial year,' },
        { icon: '📊', text: 'Input Tax Credit (ITC)claimed and reversed,' },
        { icon: '💰', text: 'Taxes paid under Central Goods and Services Tax (CGST), State Goods and Services Tax (SGST), Integrated Goods and Services Tax (IGST), and Cess,' },
        { icon: '⚖️', text: 'Interest, refunds, and demand adjustments (if any).' },
        { icon: '🔍', text: 'Match data:Align information reported in monthly/quarterly returns (GSTR-1 and GSTR-3B) with the taxpayers yearly financial records.' },
        { icon: '📅', text: 'Ensure compliance:Provide a full yearly declaration of GST transactions with all GST laws.' },
      ],
    },
    eligibility: [
      'Casual Taxable Persons –These are individuals or entities registered for a limited period (like for exhibitions or seasonal businesses). Since their registration is not ongoing, they are exempt from filing GSTR-9.',
      'Input Service Distributors (ISDs) –ISDs distribute the input tax credit to their branches or units. They don’t supply goods or services directly, so they aren’t required to file the annual return.',
      'Non-Resident Taxable Persons –These are foreign individuals or businesses providing goods or services in India without a permanent place of business. Due to their short-term presence, they are exempt from the annual filing.',
      'TCS Collectors under Section 52 of the GST Act –E-commerce operators collectingTax Collected at Source (TCS)from suppliers are not required to file GSTR-9, as their compliance is governed under a different section.',
      'TDS Deductors under Section 51 of the GST Act –Government departments or agencies that deductTax Deducted at Source (TDS)are also excluded, as they do not engage in the regular supply of goods or services.',
      'Online Information Database Access and Retrieval (OIDAR) Services –OIDAR service providers supply services like software, cloud storage, or streaming to Indian consumers. They are exempt from GSTR-9 filing.',
    ],
    documents: [
      {
        category: 'Required Documents',
        items: [
          'GSTR-1 data:Details of all sales for the financial year.',
          'GSTR-3B data:Summary of GST taxes owed and ITC claimed for the financial year.',
          'Audited Financial Statements:Profit & Loss Account and Balance Sheet, especially if you need to file GSTR-9C for reconciliation.',
          'Books of Accounts:Purchase and sales records, expense ledgers, and other accounting documents for cross-checking data.',
          'Reconciliation Statements:Documents showing any differences between your GSTR-1, GSTR-3B, and accounting books.',
          'ITC Register:Details of all input tax credits taken, reversed, or denied during the year.',
          'HSN-wise Summary:Breakdown of outward and inward supplies according toHarmonized System of Nomenclature (HSN) codes. This summary is a mandatory part of the GSTR-9 return.',
        ],
      },
    ],
    process: [
      { title: 'Step 1', desc: 'Details of sales and purchases reported during the financial year.Details of ITC reported, reversed, or not allowed.Details of tax paid, including tax due and tax paid by cash or ITC.Include any changes or corrections made this year for transactions from the previous financial year. These revised entries are reported in the current years return.The HSN Summary is important in GSTR-9 for both sales and purchases, as this offers important data for review.' },
      { title: 'Step 2', desc: 'Details of sales and purchases reported during the financial year.' },
      { title: 'Step 3', desc: 'Details of ITC reported, reversed, or not allowed.' },
      { title: 'Step 4', desc: 'Details of tax paid, including tax due and tax paid by cash or ITC.' },
      { title: 'Step 5', desc: 'Include any changes or corrections made this year for transactions from the previous financial year. These revised entries are reported in the current years return.' },
      { title: 'Step 6', desc: 'The HSN Summary is important in GSTR-9 for both sales and purchases, as this offers important data for review.' },
    ],
    fees: [
      { item: 'Professional Fees:Rs. 1000 to Rs. 3,000 per GSTR-9 filing, depending on the complexity and service provider.', cost: 'Contact for pricing' },
      { item: 'Paid Software Charges:Rs. 300 to Rs. 1,500, depending on the features and support offered.', cost: 'Contact for pricing' },
    ],
    penalties: [
      { violation: 'A late fee of ₹200 per day (₹100 for CGST and ₹100 for SGST) is charged for each', penalty: 'A late fee of ₹200 per day (₹100 for CGST and ₹100 for SGST) is charged for each day of delay, up to a maximum of 0.5% of the taxpayers turnover in the State or Union Territory (0.25% for CGST and 0.25% for SGST).' },
      { violation: 'Late fees must be paid in cash. They cannot be paid using an Input Tax Credit.', penalty: 'Late fees must be paid in cash. They cannot be paid using an Input Tax Credit.' },
      { violation: 'Interest at 18% per year may be charged on any outstanding tax amount. This appl', penalty: 'Interest at 18% per year may be charged on any outstanding tax amount. This applies only to the net tax paid in cash, not to the entire turnover.' },
      { violation: 'In cases of significant delay, these penalties can add up quickly, making it cos', penalty: 'In cases of significant delay, these penalties can add up quickly, making it costly to miss the deadline.' },
    ],
    advantages: [
      { icon: '✅', title: 'Expert GSTR9 Return Filing Support', desc: 'Dedicated compliance manager from Your Professionals' },
    ],
    faqs: [
      {
        q: 'Who has to file GSTR 9?',
        a: 'Every registered taxpayer under GST must file a GSTR-9. Exceptions include temporary taxable persons, non-resident taxable persons, Input Service Distributors, and those who must deduct or collect TDS/TCS. It is required for businesses with total yearly sales over Rs. 2 crore.',
      },
      {
        q: 'Is it mandatory to file GSTR 9?',
        a: '',
      },
      {
        q: 'What if GSTR 9 is wrongly filed?',
        a: '',
      },
      {
        q: 'Is the HSN Summary important in GSTR-9?',
        a: '',
      },
      {
        q: 'How many subcategories are there under GSTR 9?',
        a: '',
      },
      {
        q: 'Is there any late fee if there is a delay in filing GSTR9?',
        a: '',
      },
      {
        q: 'Can I file GSTR 9 after the due date?',
        a: '',
      },
      {
        q: 'What is the difference between GSTR9 and 9C?',
        a: '',
      },
      {
        q: 'How to check the GSTR 9 filing status?',
        a: '',
      },
      {
        q: 'What are the GSTR 9 filing exemptions?',
        a: '',
      },
      {
        q: 'Is there any option to file a Nil GSTR 9?',
        a: '',
      },
    ],
    cta: {
      heading: 'Need Help With GSTR9 Return Filing?',
      subheading:
        'Let Your Professionals handle your gstr9 return filing requirements with expert guidance and timely filing.',
      features: [
        'Expert Tax Professionals',
        'Timely Filing Guarantee',
        'Dedicated Support Manager',
        'Transparent Pricing',
      ],
    },
  },
  'cancel-gst-registration': {
    slug: 'cancel-gst-registration',
    title: 'Cancel GST Registration',
    subtitle:
      'Revocation of cancellation of GST registration means getting your cancelled GST number back. If the GST officer cancels your registration because you didn’t follow the rules, you can apply to get it restored by filling out Form GST REG-21 within 30 days of the cancellation order. But this is only al',
    heroFeatures: [
      'Expert Cancel GST Registration Services',
      'Dedicated Tax Compliance Manager',
      'Timely Filing Assurance',
      'Penalty-Free Compliance',
    ],
    overview: {
      heading: 'What is the Revocation of Cancellation of GST Registration?',
      paragraphs: [
        'Revocation of cancellation of GST registration means getting your cancelled GST number back. If the GST officer cancels your registration because you didn’t follow the rules, you can apply to get it restored by filling out Form GST REG-21 within 30 days of the cancellation order. But this is only allowed if the officer initiated the cancellation, not if you cancelled it voluntarily.',
        'Before applying, you must file all pending GST returns and pay any taxes due. If everything is in order, the officer may approve your request, and yourGST registrationwill become active again so you can continue your business legally.',
      ],
      highlights: [
      ],
    },
    eligibility: [
      'Closure of business',
      'Turnover has fallen below the GST threshold',
      'Change in business structure (e.g., sole proprietorship to partnership)',
      'Failure to file GST returns for a continuous period',
      'Registration obtained using false information',
      'Violation of GST provisions',
    ],
    documents: [
      {
        category: 'Required Documents',
        items: [
          'Contact Your Professionals for Cancel GST Registration document checklist',
        ],
      },
    ],
    process: [
      { title: 'Step 1', desc: 'Log in togst.gov.in' },
      { title: 'Step 2', desc: 'Go to Services > Registration > Application for Cancellation' },
      { title: 'Step 3', desc: 'Enter Details like:' },
      { title: 'Step 4', desc: 'Reason for cancellation' },
      { title: 'Step 5', desc: 'Date of cancellation' },
      { title: 'Step 6', desc: 'Details of remaining stock and ITC' },
      { title: 'Step 7', desc: 'Pay Dues:Make sure all returns are filed and dues are cleared with the cancellation effective date.' },
      { title: 'Step 8', desc: 'Submit Application usingDigital Signature Certificate (DSC)or OTP (EVC).' },
    ],
    fees: [
      { item: 'GST Registration Cancellation', cost: 'No fee if done through the GST portal. Professionals may charge for assistance.' },
      { item: 'Revocation of GST Cancellation', cost: 'No government fee. File within 30 days of cancellation order.' },
      { item: 'Reply to Show Cause Notice', cost: 'Reply to the REG-23 notice. Professional help may be required.' },
    ],
    penalties: [
      { violation: 'Stop Charging GST:You can’t charge GST on your bills after cancellation. Update ', penalty: 'Stop Charging GST:You can’t charge GST on your bills after cancellation. Update your invoices accordingly.' },
      { violation: 'No Input Tax Credit:You cannot claim credit on purchases after cancellation. You', penalty: 'No Input Tax Credit:You cannot claim credit on purchases after cancellation. You may also have to pay tax equal to the ITC on any remaining stock.' },
      { violation: 'File Final Return:You must file a final return (Form GSTR-10) within 3 months of', penalty: 'File Final Return:You must file a final return (Form GSTR-10) within 3 months of cancellation.' },
      { violation: 'Keep Records:You must keep all business records for 6 years after cancellation f', penalty: 'Keep Records:You must keep all business records for 6 years after cancellation for audits or inspections.' },
      { violation: 'Legal Trouble:If you do not file the final return or pay taxes due, you may get ', penalty: 'Legal Trouble:If you do not file the final return or pay taxes due, you may get penalties or face legal issues.' },
      { violation: 'Business Impact:Your operations may be affected. To restart GST, you must apply ', penalty: 'Business Impact:Your operations may be affected. To restart GST, you must apply again and go through checks.' },
    ],
    advantages: [
      { icon: '✅', title: 'Expert Cancel GST Registration Support', desc: 'Dedicated compliance manager from Your Professionals' },
    ],
    disadvantages: [
      'TDS/TCS Deductors:People registered only to deduct/collect tax cannot cancel registration.',
      'UIN Holders:Foreign embassies or UN bodies with a Unique ID Number (UIN) cannot apply for cancellation. They get UINs just to claim refunds.',
    ],
    faqs: [
      {
        q: 'What is the GST revocation rule?',
        a: 'The GST revocation rule (Rule 23 of the CGST Rules) allows a taxpayer to apply for restoration of their GST registration if it was cancelled by a GST officer. The application must be submitted using Form GST REG-21 within 30 days (extendable in some cases) from the date of the cancellation order.',
      },
      {
        q: 'What is the difference between GST cancellation and revocation?',
        a: '',
      },
      {
        q: 'How do I revoke GST registration after 90 days?',
        a: '',
      },
      {
        q: 'How do you write a reason for revocation of GST?',
        a: '',
      },
      {
        q: 'Can GST be revoked after 180 days?',
        a: '',
      },
      {
        q: 'Can GST be revoked after 270 days?',
        a: '',
      },
      {
        q: 'What happens when GST registration is cancelled?',
        a: '',
      },
      {
        q: 'Can I voluntarily apply for GST revocation?',
        a: '',
      },
      {
        q: 'What is the GST Revocation Appeal Time Limit?',
        a: '',
      },
      {
        q: 'What happens to my Input Tax Credit (ITC) if my GST registration is revoked?',
        a: '',
      },
    ],
    cta: {
      heading: 'Need Help With Cancel GST Registration?',
      subheading:
        'Let Your Professionals handle your cancel gst registration requirements with expert guidance and timely filing.',
      features: [
        'Expert Tax Professionals',
        'Timely Filing Guarantee',
        'Dedicated Support Manager',
        'Transparent Pricing',
      ],
    },
  },
  'virtual-place-of-business-gst': {
    slug: 'virtual-place-of-business-gst',
    title: 'Virtual Place of Business in GST',
    subtitle:
      'A Virtual Place of Business (VPOB) is a business address that you can use without actually having a physical office there. It is like renting an address to show on your business documents, GST filing, or website, even if you are working from home or another city.',
    heroFeatures: [
      'Expert Virtual Place of Business in GST Services',
      'Dedicated Tax Compliance Manager',
      'Timely Filing Assurance',
      'Penalty-Free Compliance',
    ],
    overview: {
      heading: 'What is Virtual Place of Business (VPOB)?',
      paragraphs: [
        'A Virtual Place of Business (VPOB) is a business address that you can use without actually having a physical office there. It is like renting an address to show on your business documents, GST filing, or website, even if you are working from home or another city.',
        'This is useful for businesses that want to expand to different states or cities without spending money on setting up real offices. A VPOB service typically provides a professional address, mail handling, and sometimes even meeting rooms when needed.',
      ],
      highlights: [
      ],
    },
    eligibility: [
      'Get a legal business address in that state.',
      'Register for GST without opening an office.',
      'Easily add Amazon or Flipkart warehouses as your business branch (APOB).',
      'Save money on rent and office setup.',
      'Still have a valid business address for GST and company registration.',
      'Show a professional image to customers and the government.',
      'Use a proper business address for GST or legal use.',
      'Receive letters and documents in one place.',
      'Look more professional to clients.',
      'Comply with client/vendor onboarding requirements that mandate a registered office address.',
      'Get GST registration without a physical office.',
      'Expand to new states quickly.',
      'Stay legal with government rules.',
      'Use virtual addresses in different states.',
      'Manage shipments and GST from one place.',
      'Avoid high office rent and staff costs.',
    ],
    documents: [
      {
        category: '1. No Objection Certificate (NOC)',
        items: [
          'This proves that you have permission to use the space.',
          'It is needed for both PPOB and APOB registrations.',
          'Accepted by GST and government departments.',
        ],
      },
      {
        category: '2. Rent or Lease Agreement',
        items: [
          'It is made in your business name.',
          'It acts as proof of your right to use the address.',
          'Required for GST registration, ROC filings, and more.',
        ],
      },
      {
        category: '3. Utility Bill (like an electricity or water bill)',
        items: [
          'This is used as address proof for your business.',
          'It matches the address on your NOC and Rent Agreement.',
          'Required by most government portals for verification.',
        ],
      },
    ],
    process: [
      { title: 'Step 1: Tell Us Your Requirement', desc: 'The first step is to talk to our team and explain what you need.' },
      { title: 'Step 2: Choose Your Prime Location', desc: 'Next, you can pick your preferred location from our list of available cities and states.' },
      { title: 'Step 3: Complete Your Digital KYC', desc: 'After selecting the location, you need to do a quick online KYC (Know Your Customer) process.' },
      { title: 'Step 4: Receive Your Documents in Record Time', desc: 'Once we check and verify your details, we will send you all the documents you need to use your VPOB legally.' },
    ],
    fees: [
      { item: 'Professional Fees', cost: 'Contact Your Professionals for pricing' },
    ],
    advantages: [
      { icon: '✅', title: 'Expert Virtual Place of Business in GST Support', desc: 'Dedicated compliance manager from Your Professionals' },
    ],
    disadvantages: [
      'Partner with a reputable and verified VPOB provider.',
      'Make sure the address is real and active.',
      'Get proper documents like NOC, Rent Agreement, and Utility Bill.',
      'Check that your business name and address are correct in all papers.',
      'Use documents that are recent and valid.',
      'Take help from experts who give ready and correct documents.',
    ],
    faqs: [
      {
        q: 'What is the difference between a Virtual Office and a VPOB?',
        a: 'A Virtual Office is a general term for a service that gives you a business address without needing a physical office. A Virtual Place of Business (VPOB) is used especially for GST registration or company setup. It includes legal documents like NOC, rent agreement, and utility bill to prove your business address.',
      },
      {
        q: 'Can I use a VPOB as my Principal Place of Business (PPOB)?',
        a: '',
      },
      {
        q: 'How long does it take to get a VPOB registration?',
        a: '',
      },
      {
        q: 'What documents do I need to provide for KYC?',
        a: '',
      },
      {
        q: 'Can I register multiple companies at the same virtual address?',
        a: '',
      },
      {
        q: 'Will I get a name board at the virtual office location?',
        a: '',
      },
      {
        q: 'How do I receive my mail and packages?',
        a: '',
      },
      {
        q: 'Can I use a residential address for GST registration instead?',
        a: '',
      },
    ],
    cta: {
      heading: 'Need Help With Virtual Place of Business in GST?',
      subheading:
        'Let Your Professionals handle your virtual place of business in gst requirements with expert guidance and timely filing.',
      features: [
        'Expert Tax Professionals',
        'Timely Filing Guarantee',
        'Dedicated Support Manager',
        'Transparent Pricing',
      ],
    },
  },
  'additional-place-of-business-gst': {
    slug: 'additional-place-of-business-gst',
    title: 'Additional Place of Business in GST',
    subtitle:
      'The full form of APOB is “Additional Place of Business”. When a business has more than one location where it stores goods, operates offices, or sells products (in addition to its main office), it must register those extra locations under GST. This process is called APOB Registration.',
    heroFeatures: [
      'A shop or showroom',
      'An office',
      'A warehouse or godown',
      'A factory',
      'Or any other place where you keep goods, send bills, or manage business',
    ],
    overview: {
      heading: 'What is APOB Registration in GST?',
      paragraphs: [
        'The full form of APOB is “Additional Place of Business”. When a business has more than one location where it stores goods, operates offices, or sells products (in addition to its main office), it must register those extra locations under GST. This process is called APOB Registration.',
        'While commonly referred to as APOB Registration, the official process is an amendment to your existing GST profile. This guide will walk you through that amendment process.',
        'For example, if your main office is in Delhi, but you also have a warehouse in Mumbai, you need to add that Mumbai address as your APOB in yourGST registration. This helps the government keep track of all the places where your business operates.',
        'A Place of Business under GST refers to any location where a business conducts its operations. As per Section 2(85) of the CGST Act, a Place of Business includes:',
        'It also includes places where you store your products or where your books of accounts are kept.',
      ],
      highlights: [
        { icon: '📋', text: 'A shop or showroom' },
        { icon: '📊', text: 'An office' },
        { icon: '💰', text: 'A warehouse or godown' },
        { icon: '⚖️', text: 'A factory' },
        { icon: '🔍', text: 'Or any other place where you keep goods, send bills, or manage business' },
      ],
    },
    eligibility: [
      'Businesses with Warehouses or Godowns:If you store goods in a separate warehouse or godown other than your main location, you must register that place as an APOB.',
      'Businesses with Multiple Branches or Shops:If you run more than one shop, office, or branch in the same state, each of them must be added as an APOB under your GSTIN.',
      'Online Sellers Using Third-Party Warehouses (like Amazon or Flipkart):If you are selling through platforms like Amazon or Flipkart and storing your products in their warehouses, you need to add those warehouse addresses as APOBs.',
      'Manufacturers with Separate Production Units:If your factory or production unit is located away from your main office, it must be registered as an APOB.',
      'Service Providers Working from Multiple Offices:If you offer services from more than one office in the same state, each location should be listed as an APOB.',
    ],
    documents: [
      {
        category: '1. Documents for Owned Premises',
        items: [
          'Property Tax Receipt',
          'Electricity Bill (not older than 3 months)',
          'Municipal Khata Copy',
          'Ownership Deed or Sale Deed',
        ],
      },
      {
        category: '2. Documents for Rented or Leased Premises',
        items: [
          'Rent Agreement or Lease Agreement (not older than 11 months if unregistered)',
          'NOC (No Objection Certificate) from the property owner (if required)',
          'Latest Utility Bill (Electricity, Water, etc.)',
        ],
      },
      {
        category: '3. Documents for Consent-Based or Shared Premises',
        items: [
          'Consent Letter from the property owner',
          'NOC (optional but recommended)',
          'Supporting Document: Like the owner’s property tax receipt or electricity bill',
        ],
      },
      {
        category: '4. Documents for Proprietorship Company',
        items: [
          'Owner’s Aadhaar Card and PAN Card',
          'Address Proof of the additional place (based on the type—owned/rented/shared)',
        ],
      },
      {
        category: '5. Documents for Partnership Company',
        items: [
          'Partnership Deed',
          'PAN Card of the firm',
          'Address proof of the additional place',
          'Authorization Letter (if signed by a partner on behalf of the firm)',
        ],
      },
      {
        category: '6. Documents for Private Limited Company',
        items: [
          'Certificate of Incorporation',
          'PAN Card of the company',
          'Board Resolution or Authorization Letter',
          'Address proof of the new business place',
          'Director’s ID and address proof',
        ],
      },
    ],
    process: [
      { title: 'Step 1: Log in to the GST Portal', desc: 'Go to theGST official websiteand log in using your username and password.' },
      { title: 'Step 2: Go to the Registration Section', desc: 'After logging in, click on the ‘Services’ tab. Then select ‘Registration’, and from the options, click on ‘Amendment of Registration – Core Fields’.' },
      { title: 'Step 3: Select the Additional Place of Business Tab', desc: 'You will see different tabs to make changes. Click on the tab called ‘Additional Place of Business’ to update or add your new business location.' },
      { title: 'Step 4: View the Additional Place of Business Page', desc: 'Clicking the Additional Place of Business tab opens a new page where you can add or edit your locations.' },
      { title: 'Step 5: Complete the Verification Process', desc: 'Click on the ‘Verification’ option.' },
      { title: 'Step 6: Submit the Application and Wait for Approval', desc: 'After you submit the application, a message saying ‘Successful submission’ will appear on your screen.' },
    ],
    fees: [
      { item: 'Professional Fees', cost: 'Contact Your Professionals for pricing' },
    ],
    advantages: [
      { icon: '✅', title: '1. Follows Legal Rules and Increases Transparency', desc: 'If you’re running your business from multiple places, it’s necessary to register each location under GST. This ensures compliance and avoids potential penalties from tax authorities. When you register all your places, the GST department can easily track your business activities, which reduces the ch' },
      { icon: '🏛️', title: '2. Helps in Smooth Daily Operations', desc: 'With APOB registration, you can move goods between your locations easily without facing legal issues. It also makes your day-to-day operations smoother. Managing your stock becomes easier, and you can avoid problems like running out of goods or having too much stock in one place.' },
      { icon: '🤝', title: '3. Makes Logistics and Inventory Management Easier', desc: 'When your additional locations, like warehouses, are officially registered, you can store goods closer to your customers. This cuts down delivery time and saves transportation costs. It also helps you better plan your supply chain and restocking.' },
      { icon: '📈', title: '4. Supports Sales, Marketing & Customer Service', desc: 'Having registered business places in different cities or regions helps you connect with more customers. You can also design local marketing strategies for each area. Being closer to customers improves delivery times and builds stronger customer relationships.' },
      { icon: '🔒', title: '5. Helps in Business Expansion and Scaling Up', desc: 'If you want to grow your business in new areas, APOB registration is a must. It legally allows you to work from multiple places and manage higher sales, production, or storage. This sets a strong base for your business to expand easily in the future.' },
      { icon: '💼', title: '6. Brings Tax Benefits and Better Financial Management', desc: 'APOB registration allows you to properly claim Input Tax Credit (ITC) on purchases made at your additional locations, which can lower your overall tax liability. Keeping all your locations registered also makes GST filing easier and avoids penalties.' },
    ],
    faqs: [
      {
        q: 'How many additional places of business can I add to my GST registration?',
        a: 'There is no limit to the number of Additional Places of Business (APOB) you can add under one GSTIN. If you operate from multiple offices, branches, warehouses, or godowns within the same state, you can add each of them under the same GST registration. However, for different states, you need to apply for a separate GSTIN.',
      },
      {
        q: 'Is adding an APOB a core or non-core amendment?',
        a: '',
      },
      {
        q: 'Why is the Add New button disabled in the APOB section?',
        a: '',
      },
      {
        q: 'Can I add an APOB in a different state under the same GSTIN?',
        a: '',
      },
      {
        q: 'How long does it take for APOB approval?',
        a: '',
      },
      {
        q: 'What documents are needed for a rented warehouse?',
        a: '',
      },
      {
        q: 'Can I use a godown or warehouse as an APOB?',
        a: '',
      },
      {
        q: 'What happens if I do not register my warehouse as an APOB?',
        a: '',
      },
      {
        q: 'Do I need to upload documents for every APOB I add?',
        a: '',
      },
      {
        q: 'Can I remove an APOB from my GST certificate?',
        a: '',
      },
    ],
    cta: {
      heading: 'Need Help With Additional Place of Business in GST?',
      subheading:
        'Let Your Professionals handle your additional place of business in gst requirements with expert guidance and timely filing.',
      features: [
        'Expert Tax Professionals',
        'Timely Filing Guarantee',
        'Dedicated Support Manager',
        'Transparent Pricing',
      ],
    },
  },
  'gst-registration-ecommerce': {
    slug: 'gst-registration-ecommerce',
    title: 'GST Registration for E-commerce',
    subtitle:
      'Starting an online business in India is exciting! The world of e-commerce offers huge opportunities. However, navigating the legal and tax requirements can seem tricky. One of the most important things for any online seller in India is understanding and gettingGST registration.',
    heroFeatures: [
      'Simplified Tax Compliance',
      'No More Tax-on-Tax (Cascading Effect)',
      'Expanded Market Reach',
      'Increased Business Credibility',
      'Claiming Tax Collected at Source (TCS)',
    ],
    overview: {
      heading: 'Overview of GST Registration for E-commerce Businesses',
      paragraphs: [
        'Starting an online business in India is exciting! The world of e-commerce offers huge opportunities. However, navigating the legal and tax requirements can seem tricky. One of the most important things for any online seller in India is understanding and gettingGST registration.',
        'GST is a single tax system that replaced older ones like VAT, excise duty, and service tax. It is mandatory for online sellers, making tax filing easier across the country. This guide breaks down everything you need to know about GST registration for your online venture in India.',
      ],
      highlights: [
      ],
    },
    eligibility: [
      'Sellers on Marketplaces like Amazon, Flipkart, and Meesho',
      'E-commerce Operators: The Platforms Themselves',
      'Service Providers Using Online Platforms',
      'Non-Resident Sellers and OIDAR Service Providers',
    ],
    documents: [
      {
        category: 'For Sole Proprietorships and Individual Sellers',
        items: [
          'PAN Cardof the proprietor.',
          'Aadhaar Card of the proprietor.',
          'Photograph of the proprietor (in JPEG/PDF format).',
          'A copy of a cancelled cheque, bank statement, or passbook showing your account number, bank name, and IFSC code.',
          'You will also need proof of your business address. This can be a recent electricity bill, a property tax receipt, or a municipal khata copy. If the business address is a rented property, a valid rent agreement and a No-Objection Certificate (NOC) from the owner are required. If it is a home address owned by parents, an NOC from them might be needed.',
        ],
      },
      {
        category: 'For Partnership Firms and LLPs',
        items: [
          'PAN Card of the partnership firm/LLP.',
          'PAN Card and Aadhaar Card of all partners.',
          'Partnership Deed (for partnership firms) or LLP Agreement/Certificate of Incorporation(for LLPs).',
          'Photographs of all partners and authorized signatories.',
          'Address Proof of all partners (especially authorized persons).',
          'Proof of Appointment of Authorized Signatory.',
          'Bank Account Details: Cancelled cheque, bank statement, or passbook.',
          'Proof of Principal Place of Business Address: Utility bills, rent agreement with NOC, or ownership documents.',
        ],
      },
      {
        category: 'For Private Limited or Public Limited Companies',
        items: [
          'PAN Card of the company.',
          'Certificate of Incorporation issued by the Ministry of Corporate Affairs (MCA).',
          'Memorandum of Association (MOA)andArticles of Association (AOA).',
          'PAN Card and Aadhaar Card of the authorized signatory.',
          'PAN Card and Address Proof of all directors.',
          'Photographs of all directors and the authorized signatory.',
          'Board Resolution or other proof appointing the authorized signatory.',
          'Bank Account Details: Cancelled cheque, bank statement, or passbook.',
          'Proof of Principal Place of Business Address: Utility bills, rent agreement with NOC, or ownership documents.',
        ],
      },
    ],
    process: [
      { title: 'Step 1: Visiting the Official GST Portal and Starting Your Application', desc: 'First, open your web browser and go to the official GST portal: gst.gov.in. On the homepage, look for the "Services" menu, then click on "Registration," and finally select "New Registration." This will take you to the application form.' },
      { title: 'Step 2: Generating Your TRN (Temporary Reference Number) in Part A', desc: 'The registration form is divided into two parts. In Part A, youll provide basic details:' },
      { title: 'Step 3: Filling Your Business Details in Part B of the Application', desc: 'With your TRN, return to the GST portal and select "New Registration" again, but this time, choose the "Temporary Reference Number (TRN)" option to log in. Enter your TRN and the captcha, then verify with another OTP.' },
      { title: 'Step 4: Uploading All Your Documents Correctly', desc: 'In Part B, you will also find sections to upload the required documents. Ensure all documents are clear, legible, and in the specified format (usually JPEG or PDF) and size (typically max 100 KB for images and 1 MB for PDFs). Double-check that all details in the uploaded documents match the information youve entered.' },
      { title: 'Step 5: Aadhaar Authentication and Application Verification', desc: 'After filling all details and uploading documents, you will need to complete Aadhaar authentication. This involves verifying your Aadhaar number through an OTP sent to your Aadhaar-linked mobile number. This step is crucial for faster processing.' },
      { title: 'Step 6: Receiving Your GSTIN and Registration Certificate (Form GST REG-06)', desc: 'Upon successful submission, you will receive anApplication Reference Number (ARN)on your registered mobile number and email ID. You can use this ARN to track the status of your application on the GST portal (gst.gov.in).' },
    ],
    fees: [
      { item: 'Professional Fees', cost: 'Contact Your Professionals for pricing' },
    ],
    advantages: [
      { icon: '✅', title: 'Simplified Tax Compliance', desc: 'Simplified Tax Compliance' },
      { icon: '🏛️', title: 'No More Tax-on-Tax (Cascading Effect)', desc: 'No More Tax-on-Tax (Cascading Effect)' },
      { icon: '🤝', title: 'Expanded Market Reach', desc: 'Expanded Market Reach' },
      { icon: '📈', title: 'Increased Business Credibility', desc: 'Increased Business Credibility' },
      { icon: '🔒', title: 'Claiming Tax Collected at Source (TCS)', desc: 'Claiming Tax Collected at Source (TCS)' },
    ],
    compliance: [
      { area: 'Filing Your GST Return', details: 'Filing Your GST Return' },
      { area: 'Annual Return GSTR-9 and GSTR-9C', details: 'Annual Return GSTR-9 and GSTR-9C' },
      { area: 'Claiming Your Dues (TCS and Input Tax Credit (ITC))', details: 'GST-registered sellers can claim certain amounts back, such as TCS and ITC, to reduce their tax payment.' },
      { area: 'Composition Scheme: Is It an Option for E-commerce Sellers?', details: 'The GST Composition Scheme offers a simpler way to pay GST for small taxpayers with a turnover up to a certain limit (currently Rs. 1.5 crore for goods and Rs. 50 lakh for services in most states). It involves paying a fixed percentage of turnover as tax and simplifies compliance.' },
    ],
    faqs: [
      {
        q: 'Can I Use My Home Address for E-commerce Seller GST Registration?',
        a: 'Yes, you can use your home address as your principal place of business for GST registration. If the property is owned by you, youll need ownership proof. If it is owned by your parents or family members, you will need a No-Objection Certificate (NOC) from them along with their ownership proof.',
      },
      {
        q: 'Do I need GST if I only sell goods that are exempt from tax?',
        a: '',
      },
      {
        q: 'What happens if I sell on multiple e-commerce platforms like Amazon and Flipkart?',
        a: '',
      },
      {
        q: 'I sell services online, not goods. Do I still need GST registration immediately?',
        a: '',
      },
      {
        q: 'Can I sell products outside of India without a GST registration?',
        a: '',
      },
      {
        q: 'Do I need a separate GST registration for each state I operate in?',
        a: '',
      },
      {
        q: 'What should I do if my GST registration application gets rejected?',
        a: '',
      },
      {
        q: 'Can I run an e-commerce business without GST registration in India?',
        a: '',
      },
      {
        q: 'Who is responsible for issuing the final GST invoice to the customer, the seller, or the platform?',
        a: '',
      },
    ],
    cta: {
      heading: 'Need Help With GST Registration for E-commerce?',
      subheading:
        'Let Your Professionals handle your gst registration for e-commerce requirements with expert guidance and timely filing.',
      features: [
        'Expert Tax Professionals',
        'Timely Filing Guarantee',
        'Dedicated Support Manager',
        'Transparent Pricing',
      ],
    },
  },
  'gst-return-filing-ecommerce': {
    slug: 'gst-return-filing-ecommerce',
    title: 'GST Return Filing for E-commerce',
    subtitle:
      'Goods and Services Tax (GST) for e-commerce is a unified tax system that applies to all online sellers operating in India. Whether you sell products or services on platforms like Amazon, Flipkart, Meesho, or your website,GST registrationis mandatory. E-commerce sellers are required to:',
    heroFeatures: [
      'Comply withTax Collection at Source (TCS),',
      'file regularGST returns, and',
      'Maintain proper records of sales, returns, and inventory.',
      'Rs. 40 lakhs for goods (in most states),',
      'Rs. 20 lakhs for services, and',
    ],
    overview: {
      heading: 'Overview of GST Filing for E-commerce Businesses',
      paragraphs: [
        'Goods and Services Tax (GST) for e-commerce is a unified tax system that applies to all online sellers operating in India. Whether you sell products or services on platforms like Amazon, Flipkart, Meesho, or your website,GST registrationis mandatory. E-commerce sellers are required to:',
        'Under the GST regime, e-commerce businesses must file monthly or quarterly returns (GSTR-1, GSTR-3B) and reconcile them with TCS statements provided by marketplaces. Accurate and timely filing not only ensures legal compliance but also helps maintain seller credibility, avoid penalties, and qualify for input tax credit benefits.',
        'Normal GST rules often differ for online sellers primarily because e-commerce platforms act as facilitators between sellers and buyers, introducing a unique layer of transaction. While traditional businesses may be exempt from GST registration below a certain turnover, this exemption generally does not apply to online sellers.',
        'The annual turnover threshold for GST registration in India is:',
        'This rule exists to ensure that every transaction conducted through an e-commerce platform is accounted for within the tax system, promoting transparency and formalising the sector.',
      ],
      highlights: [
        { icon: '📋', text: 'Comply withTax Collection at Source (TCS),' },
        { icon: '📊', text: 'file regularGST returns, and' },
        { icon: '💰', text: 'Maintain proper records of sales, returns, and inventory.' },
        { icon: '⚖️', text: 'Rs. 40 lakhs for goods (in most states),' },
        { icon: '🔍', text: 'Rs. 20 lakhs for services, and' },
        { icon: '📅', text: 'Rs. 10 lakhs for special category states (like those in the Northeast).' },
      ],
    },
    eligibility: [
      'All entities requiring GST Return Filing for E-commerce services',
    ],
    documents: [
      {
        category: 'Required Documents',
        items: [
          'Contact Your Professionals for GST Return Filing for E-commerce document checklist',
        ],
      },
    ],
    process: [
      { title: 'Understand the Auto-populated Data in GSTR-3B', desc: 'Once you file your GSTR-1, some data in GSTR-3B (like your outward supply liability) will auto-populate. More importantly, your eligible Input Tax Credit will largely be auto-populated in GSTR-2B, which helps you in filling GSTR-3B. Always compare the auto-populated data with your records.' },
      { title: 'Declaring Your Tax Liability on Sales and Reverse Charge', desc: 'In GSTR-3B, you summarise your total sales for the month/quarter and calculate the GST payable on them. Also, if you have received any supplies on which the reverse charge mechanism applies, you must declare that liability here.' },
      { title: 'How to Claim Input Tax Credit (ITC) on Expenses and TCS?', desc: 'This is where you reduce your tax burden. You claim ITC on the GST you paid on your business expenses, like purchases of goods for resale, packaging materials, logistics services, advertising, and other operational costs. Importantly, the Tax Collected at Source (TCS) by e-commerce operators is not claimed as Input Tax Credit (ITC). Instead, it is credited directly to your Electronic Cash Ledger, ' },
      { title: 'Making the GST Payment and Filing the Final Return', desc: 'After declaring your sales, claiming ITC, and adjusting for TCS, if there is any balance tax payable, you must pay it through the electronic cash ledger. Once the payment is made, you can file your GSTR-3B using EVC or DSC. This completes the GSTR-3B filing process for the tax period.' },
    ],
    fees: [
      { item: 'Professional Fees', cost: 'Contact Your Professionals for pricing' },
    ],
    penalties: [
      { violation: 'Late Filing of GSTR-3B (Tax payable)', penalty: 'Rs. 5,000 per return' },
      { violation: 'Late Filing of GSTR-3B (No tax liability)', penalty: 'Rs. 5,000 per return' },
      { violation: 'Incorrect Filing (General penalty)', penalty: 'No upper limit' },
      { violation: 'Failure to file returns continuously', penalty: 'Possible cancellation of GST registration' },
      { violation: 'Wrong input tax credit (ITC) claim', penalty: 'Plus interest @18% per annum' },
      { violation: 'Late payment of GST', penalty: 'Calculated from the due date till payment' },
    ],
    advantages: [
      { icon: '✅', title: 'Expert GST Return Filing for E-commerce Support', desc: 'Dedicated compliance manager from Your Professionals' },
    ],
    compliance: [
      { area: '1. GSTR-1: Declaring Your Sales and Outward Supplies', details: 'Note:The thresholds for filing GSTR-9 and GSTR-9C are subject to change each year through notifications issued by the CBIC. It’s important to always refer to the latest GST circulars or official updates to confirm the applicable limits for the relevant financial year.' },
      { area: '2. GSTR-3B: Summarising Your Monthly Tax and Claiming ITC', details: 'Note:The thresholds for filing GSTR-9 and GSTR-9C are subject to change each year through notifications issued by the CBIC. It’s important to always refer to the latest GST circulars or official updates to confirm the applicable limits for the relevant financial year.' },
      { area: '3. GSTR-9 and GSTR-9C: Annual Returns', details: 'Note:The thresholds for filing GSTR-9 and GSTR-9C are subject to change each year through notifications issued by the CBIC. It’s important to always refer to the latest GST circulars or official updates to confirm the applicable limits for the relevant financial year.' },
      { area: '4. Monthly vs. Quarterly Returns', details: 'Understanding the difference between the returns:' },
    ],
    faqs: [
      {
        q: 'Do I have to file a GST return if I had no sales in a month?',
        a: 'Yes, even if you have no sales (NIL sales) or purchases in a particular month or quarter, you still need to file NIL GSTR-1 and GSTR-3B returns. This is mandatory for all registered taxpayers, including e-commerce sellers. Failing to file NIL returns will still attract late fees.',
      },
      {
        q: 'What is the difference between GSTR-2A, GSTR-2B, and my purchase records?',
        a: '',
      },
      {
        q: 'I sell from my home. Do I still need to register my address for GST?',
        a: '',
      },
      {
        q: 'What happens if the TCS deducted by Flipkart does not match my sales records?',
        a: '',
      },
      {
        q: 'Can I use the composition scheme if I sell goods online?',
        a: '',
      },
      {
        q: 'How do I handle GST for customer returns and refunds?',
        a: '',
      },
      {
        q: 'If I store my goods in an Amazon FBA warehouse in another state, what are my GST obligations?',
        a: '',
      },
    ],
    cta: {
      heading: 'Need Help With GST Return Filing for E-commerce?',
      subheading:
        'Let Your Professionals handle your gst return filing for e-commerce requirements with expert guidance and timely filing.',
      features: [
        'Expert Tax Professionals',
        'Timely Filing Guarantee',
        'Dedicated Support Manager',
        'Transparent Pricing',
      ],
    },
  },
  'input-tax-credit': {
    slug: 'input-tax-credit',
    title: 'Input Tax Credit',
    subtitle:
      'Input Tax Credit (ITC) is a mechanism under the GST system that allows businesses to claim credit for the tax paid on inputs (goods or services) used in the course of their business. When you buy raw materials, services, or other inputs and pay GST on them, you can offset that amount against the GST',
    heroFeatures: [
      'You purchase raw wood for Rs. 10,000 and pay 18% GST on it, which is Rs. 1,800. These Rs. 1,800 are your Input Tax Credit.',
      'You then manufacture a table from this wood and sell it for Rs. 15,000, charging your customer 18% GST, which is Rs. 2,700. These Rs. 2,700 are your output tax liability.',
      'Instead of paying the full Rs. 2,700 to the government, you can utilize the Input Tax Credit of Rs. 1,800 you have already paid.',
      'Your net GST payable to the government will be Rs. 2,700 (Output Tax) - Rs. 1,800 (ITC) = Rs. 900.',
    ],
    overview: {
      heading: 'What is Input Tax Credit (ITC)?',
      paragraphs: [
        'Input Tax Credit (ITC) is a mechanism under the GST system that allows businesses to claim credit for the tax paid on inputs (goods or services) used in the course of their business. When you buy raw materials, services, or other inputs and pay GST on them, you can offset that amount against the GST you owe on your sales. This prevents the cascading effect of taxes, where you would otherwise pay tax on tax.',
        'To claim ITC, businesses must ensure that the supplier has paid the GST to the government and that the details are reflected in the GST returns. Additionally, ITC can only be claimed for inputs used for business purposes and must be supported by valid tax invoices. Proper use of ITC helps lower your tax burden and boosts your working capital and cash flow, which is essential for maintaining healthy cash flow and staying compliant.',
        'However, ITC is available only for goods and services used strictly for business purposes and is subject to specific conditions outlined in Section 16 of the CGST Act.',
        'Example: Imagine you are a furniture manufacturer.',
        'This example clearly shows what Input Tax Credit means under GST and how it helps reduce your tax burden. It’s important to note that both the purchase and sale must be taxable supplies under GST, and both the buyer and seller should be registered taxpayers for ITC to apply.',
      ],
      highlights: [
        { icon: '📋', text: 'You purchase raw wood for Rs. 10,000 and pay 18% GST on it, which is Rs. 1,800. These Rs. 1,800 are your Input Tax Credit.' },
        { icon: '📊', text: 'You then manufacture a table from this wood and sell it for Rs. 15,000, charging your customer 18% GST, which is Rs. 2,700. These Rs. 2,700 are your output tax liability.' },
        { icon: '💰', text: 'Instead of paying the full Rs. 2,700 to the government, you can utilize the Input Tax Credit of Rs. 1,800 you have already paid.' },
        { icon: '⚖️', text: 'Your net GST payable to the government will be Rs. 2,700 (Output Tax) - Rs. 1,800 (ITC) = Rs. 900.' },
      ],
    },
    eligibility: [
      'Inputs:Raw materials, components, and consumables used in manufacturing or providing services.',
      'Input Services:Services like legal fees, accounting, advertising, security services, rent, professional fees, repair and maintenance, etc., are used for business.',
      'Capital Goods:Plant and machinery, equipment, computers, furniture, and fixtures used for business operations (subject to specific conditions, as discussed below).',
      'Input Tax Credit on Bank Charges:Businesses can claim ITC on GST paid for bank charges such as loan processing fees, RTGS/NEFT transactions, and custodian services. To be eligible, the services must be used exclusively for business purposes, and the bank or service provider must issue a valid tax invoice.',
    ],
    documents: [
      {
        category: 'Required Documents',
        items: [
          'Tax Invoice:Issued by a registered supplier of goods or services.',
          'Debit Note:Issued by the supplier in case of an increase in taxable value or tax charged.',
          'Bill of Entry:For imported goods.',
          'Invoice for Reverse Charge Mechanism:An invoice issued by the recipient (you) if you are liable to pay tax under theReverse Charge Mechanism.',
          'By an Input Service Distributor (ISD):An ISD invoice or credit note.',
        ],
      },
    ],
    process: [
      { title: 'Step 1: Ensure Compliance with Eligibility Conditions', desc: 'Verify that you meet all conditions:' },
      { title: 'Step 2: Reconcile ITC (GSTR-2B)', desc: 'If you find any invoices missing or mismatches in GSTR-2B, communicate with your suppliers to promptly upload or correct their GSTR-1 filings.' },
      { title: 'Step 3: Communicate Discrepancies to Suppliers', desc: 'If you find any invoices missing or mismatches in GSTR-2B, communicate with your suppliers to promptly upload or correct their GSTR-1 filings.' },
      { title: 'Step 4: File GSTR-3B', desc: 'Step 4: File GSTR-3B' },
      { title: 'Step 5: Utilize ITC from Electronic Credit Ledger', desc: 'Step 5: Utilize ITC from Electronic Credit Ledger' },
    ],
    fees: [
      { item: 'Professional Fees', cost: 'Contact Your Professionals for pricing' },
    ],
    advantages: [
      { icon: '✅', title: 'Expert Input Tax Credit Support', desc: 'Dedicated compliance manager from Your Professionals' },
    ],
    compliance: [
      { area: 'Why is it important?', details: 'Regular ITC Reconciliation is a best practice for all GST-registered businesses.' },
    ],
    faqs: [
      {
        q: 'What is the Input Tax Credit in GST with an example?',
        a: 'Input Tax Credit (ITC) is the GST paid by a registered business on its purchases of goods or services used for business. This amount can be reduced from the GST payable on its sales.For example, if a manufacturer pays Rs. 100 GST on raw materials and collects Rs. 300 GST on finished goods, they only pay Rs. 200 (Rs. 300 - Rs. 100) to the government. This is a core concept of Input Tax Credit.',
      },
      {
        q: 'What are the prior conditions to claim Input Tax Credit?',
        a: '',
      },
      {
        q: 'How many days of GST input can be claimed?',
        a: '',
      },
      {
        q: 'How to calculate the Input Tax Credit under GST?',
        a: '',
      },
      {
        q: 'Is ITC refundable?',
        a: '',
      },
      {
        q: 'Can we claim ITC on hotel stays, traveling expenses & petrol expenses?',
        a: '',
      },
      {
        q: 'What is the difference between Input Tax Credit and output tax credit?',
        a: '',
      },
      {
        q: 'How does Input Tax Credit impact income tax liability, if at all?',
        a: '',
      },
    ],
    cta: {
      heading: 'Need Help With Input Tax Credit?',
      subheading:
        'Let Your Professionals handle your input tax credit requirements with expert guidance and timely filing.',
      features: [
        'Expert Tax Professionals',
        'Timely Filing Guarantee',
        'Dedicated Support Manager',
        'Transparent Pricing',
      ],
    },
  },
  'gst-e-invoice': {
    slug: 'gst-e-invoice',
    title: 'GST E-Invoice',
    subtitle:
      'GST E-Invoice does not mean creating invoices on the GST portal. Instead, it is about reporting already generated invoices to a government-designated portal, the Invoice Registration Portal (IRP), for validation and registration. When you generate an invoice in your accounting or billing software, t',
    heroFeatures: [
      'Curb Tax Evasion:By ensuring real-time reporting of invoices, it becomes much harder for businesses to create fake invoices or manipulate sales figures, thus reducing tax evasion.',
      'Automate Compliance:It automates the process offiling GST returns, especially GSTR-1, as the data from GST E-Invoice is directly populated, reducing manual errors and saving time.',
      'Improve ITC Matching:With real-time invoice data, the system can more accurately matchInput Tax Credit (ITC)between buyers and sellers, minimizing disputes and discrepancies.',
      'Standardize Data:It brings uniformity to invoice data across different businesses and software, making data analysis and reconciliation much easier for both taxpayers and tax authorities.',
      'Eliminate Fake Invoices:The unique IRN and digital signature make it almost impossible to generate or use fake invoices.',
    ],
    overview: {
      heading: 'What is GST E-Invoice?',
      paragraphs: [
        'GST E-Invoice does not mean creating invoices on the GST portal. Instead, it is about reporting already generated invoices to a government-designated portal, the Invoice Registration Portal (IRP), for validation and registration. When you generate an invoice in your accounting or billing software, the details are sent to the IRP.',
        'You can keep generating invoices through your existing billing or ERP system without any major changes to your workflow. The only extra step is to send the invoice details in a prescribed JSON format to the IRP for authentication.',
        'The IRP checks the data, creates a unique Invoice Reference Number (IRN), digitally signs the invoice, and attaches a QR code to it. Once the IRP verifies and signs the invoice, it becomes a valid GST e-invoice. This process ensures standardized data and facilitates real-time B2B reporting to the GST system.',
        'The shift to e-invoicing under GST was driven by several key goals:',
        'To navigate the GST E-Invoice portal and process, knowing these terms is essential:',
      ],
      highlights: [
        { icon: '📋', text: 'Curb Tax Evasion:By ensuring real-time reporting of invoices, it becomes much harder for businesses to create fake invoices or manipulate sales figures, thus reducing tax evasion.' },
        { icon: '📊', text: 'Automate Compliance:It automates the process offiling GST returns, especially GSTR-1, as the data from GST E-Invoice is directly populated, reducing manual errors and saving time.' },
        { icon: '💰', text: 'Improve ITC Matching:With real-time invoice data, the system can more accurately matchInput Tax Credit (ITC)between buyers and sellers, minimizing disputes and discrepancies.' },
        { icon: '⚖️', text: 'Standardize Data:It brings uniformity to invoice data across different businesses and software, making data analysis and reconciliation much easier for both taxpayers and tax authorities.' },
        { icon: '🔍', text: 'Eliminate Fake Invoices:The unique IRN and digital signature make it almost impossible to generate or use fake invoices.' },
        { icon: '📅', text: 'Facilitates Faster GST Refunds:With accurate, real-time reporting, e-invoicing speeds up the verification process, leading to quicker GST refunds.' },
      ],
    },
    eligibility: [
      'All entities requiring GST E-Invoice services',
    ],
    documents: [
      {
        category: 'Required Documents',
        items: [
          'Contact Your Professionals for GST E-Invoice document checklist',
        ],
      },
    ],
    process: [
      { title: 'Step 1: GSTIN Enablement and IRP Registration', desc: 'First, ensure your GSTIN is enabled for e-invoicing under GST. This typically involves providing your GSTIN, setting up credentials, and verifying your details. This is your gateway to the GST E-Invoice portal.' },
      { title: 'Step 2: Choose Your Method to Communicate with the IRP', desc: 'You have several options for sending your invoice data to the IRP:' },
      { title: 'Step 3: Create and Upload the Invoice Data', desc: 'You continue to create your invoices in your own accounting or billing software. Ensure all mandatory fields for an e-invoice are accurately captured. Once ready, your software (if integrated via API) or you (if using an offline utility or web portal) will prepare the invoice data in the prescribed JSON format and upload it to the IRP.' },
      { title: 'Step 4: IRPs Validation and Return', desc: 'The IRP receives your invoice data (JSON file). It performs several validation checks, including:' },
      { title: 'Step 5: Issuing the Final, Valid E-Invoice', desc: 'The IRP returns the digitally signed e-invoice (with the IRN and QR Code embedded) to your accounting software or through the portal. You then issue this validated GST E-Invoice to your buyer.' },
    ],
    fees: [
      { item: 'Professional Fees', cost: 'Contact Your Professionals for pricing' },
    ],
    advantages: [
      { icon: '✅', title: 'Expert GST E-Invoice Support', desc: 'Dedicated compliance manager from Your Professionals' },
    ],
    faqs: [
      {
        q: 'What is the main purpose of e-invoicing?',
        a: 'The main purpose of e-invoicing under GST is to enable the electronic authentication of B2B invoices and certain other documents, ensuring real-time reporting to the tax authorities. This helps in curbing tax evasion, automating GSTR-1 filing, and improving ITC matching.',
      },
      {
        q: 'Is an invoice valid without an IRN if I am supposed to generate one?',
        a: '',
      },
      {
        q: 'My turnover crossed the limit this year. When do I have to start e-invoicing?',
        a: '',
      },
      {
        q: 'Is e-invoicing applicable for B2C (Business to Consumer) invoices?',
        a: '',
      },
      {
        q: 'Do I need to generate an e-invoice for a nil-rated or exempt supply?',
        a: '',
      },
      {
        q: 'How many IRP portals are there?',
        a: '',
      },
      {
        q: 'Is there a time limit to report an invoice to the IRP?',
        a: '',
      },
      {
        q: 'Can I generate an IRN for an invoice with a future date?',
        a: '',
      },
      {
        q: 'Can I upload invoices in bulk?',
        a: '',
      },
      {
        q: 'Is the Invoice Number the same as the IRN?',
        a: '',
      },
      {
        q: 'Do I have to print the IRN on the invoice?',
        a: '',
      },
      {
        q: 'Is it compulsory to print the QR code on the invoice?',
        a: '',
      },
      {
        q: 'Can I print the QR code on a separate sticker and paste it?',
        a: '',
      },
      {
        q: 'What is the time limit to cancel an e-invoice?',
        a: '',
      },
      {
        q: 'What do I do if I find a mistake after 24 hours?',
        a: '',
      },
      {
        q: 'If I cancel an IRN, can I use the same invoice number again?',
        a: '',
      },
      {
        q: 'Does e-invoicing replace the e-way bill?',
        a: '',
      },
      {
        q: 'How does e-invoicing link with GSTR-1?',
        a: '',
      },
    ],
    cta: {
      heading: 'Need Help With GST E-Invoice?',
      subheading:
        'Let Your Professionals handle your gst e-invoice requirements with expert guidance and timely filing.',
      features: [
        'Expert Tax Professionals',
        'Timely Filing Guarantee',
        'Dedicated Support Manager',
        'Transparent Pricing',
      ],
    },
  },
  'e-way-bill-registration': {
    slug: 'e-way-bill-registration',
    title: 'E-Way Bill Registration',
    subtitle:
      'An E-way Bill is an electronic document that is mandatory for the movement of goodsexceeding Rs. 50,000 in value. It ensures the goods transported comply with GST regulations.',
    heroFeatures: [
      'Ensure Legal Compliance:Meet GST requirements to avoid penalties during the transport of goods.',
      'Facilitate Smooth Movement of Goods:Generate e-way bills to enable hassle-free interstate and intrastate transport.',
      'Reduce Tax Evasion:Create transparency in the supply chain by tracking goods movement electronically.',
      'Improve Transparency:Help the government monitor and track shipments in real-time.',
      'Minimize Delays:Avoid unnecessary inspections and hold-ups at checkpoints with valid e-way bills.',
    ],
    overview: {
      heading: 'What is E-Way Bill Registration?',
      paragraphs: [
        'An E-way Bill is an electronic document that is mandatory for the movement of goodsexceeding Rs. 50,000 in value. It ensures the goods transported comply with GST regulations.',
        'E-way bill registration is simply the process of enrolling yourself on the official E-way Bill portal to generate these necessary documents. This system was introduced by the Goods and Services Tax (GST) Council in India to simplify the movement of goods across states and within states, making the process transparent and reducing tax evasion.',
        'The primary goal of E-way bill registration underGSTis to track the movement of goods and ensure that taxes are paid correctly.',
      ],
      highlights: [
        { icon: '📋', text: 'Ensure Legal Compliance:Meet GST requirements to avoid penalties during the transport of goods.' },
        { icon: '📊', text: 'Facilitate Smooth Movement of Goods:Generate e-way bills to enable hassle-free interstate and intrastate transport.' },
        { icon: '💰', text: 'Reduce Tax Evasion:Create transparency in the supply chain by tracking goods movement electronically.' },
        { icon: '⚖️', text: 'Improve Transparency:Help the government monitor and track shipments in real-time.' },
        { icon: '🔍', text: 'Minimize Delays:Avoid unnecessary inspections and hold-ups at checkpoints with valid e-way bills.' },
        { icon: '📅', text: 'Simplify Documentation:Replace multiple documents with a single electronic document for goods movement.' },
      ],
    },
    eligibility: [
      'All entities requiring E-Way Bill Registration services',
    ],
    documents: [
      {
        category: 'Required Documents',
        items: [
          'Contact Your Professionals for E-Way Bill Registration document checklist',
        ],
      },
    ],
    process: [
      { title: '1. Navigate to the Official Portal:', desc: 'Visit the official E-way Bill portal (ewaybillgst.gov.in) to start your E-way Bill registration and related activities.' },
      { title: '2. Initiate Registration:', desc: 'Once youve set your username and password, click "Submit."' },
      { title: '3. Enter Your GSTIN:', desc: 'Once youve set your username and password, click "Submit."' },
      { title: '4. Verify Auto-Populated Details:', desc: 'Once youve set your username and password, click "Submit."' },
      { title: '5. Authenticate with OTP:', desc: 'Once youve set your username and password, click "Submit."' },
      { title: '6. Create Login Credentials:', desc: 'Once youve set your username and password, click "Submit."' },
    ],
    fees: [
      { item: 'Professional Fees', cost: 'Contact Your Professionals for pricing' },
    ],
    advantages: [
      { icon: '✅', title: 'Ensures GST compliance and helps avoid penalties or legal issues.', desc: 'Ensures GST compliance and helps avoid penalties or legal issues.' },
      { icon: '🏛️', title: 'Reduces transit time due to less paperwork and faster verification.', desc: 'Reduces transit time due to less paperwork and faster verification.' },
      { icon: '🤝', title: 'Minimizes tax evasion through better tracking and transparency.', desc: 'Minimizes tax evasion through better tracking and transparency.' },
      { icon: '📈', title: 'Enables real-time tracking of consignments for better logistics.', desc: 'Enables real-time tracking of consignments for better logistics.' },
      { icon: '🔒', title: 'Fully digital process reduces manual errors and saves time.', desc: 'Fully digital process reduces manual errors and saves time.' },
      { icon: '💼', title: 'Improves operational efficiency for suppliers and transporters.', desc: 'Improves operational efficiency for suppliers and transporters.' },
      { icon: '📋', title: 'Increases transparency in inter-state and intra-state trade.', desc: 'Increases transparency in inter-state and intra-state trade.' },
      { icon: '🛡️', title: 'Promotes accountability among all parties in the supply chain.', desc: 'Promotes accountability among all parties in the supply chain.' },
      { icon: '🌐', title: 'Simplifies the reconciliation of invoices andGST returns.', desc: 'Simplifies the reconciliation of invoices andGST returns.' },
    ],
    faqs: [
      {
        q: 'What is the fee for E-Way Bill registration?',
        a: 'There is no government fee for E-way bill registration. It is a free service provided by the GSTN.',
      },
      {
        q: 'How long does the E-Way Bill registration process take?',
        a: '',
      },
      {
        q: 'Can I register for an E-Way Bill with my PAN card only?',
        a: '',
      },
      {
        q: 'What is a Transporter ID (TRANSIN), and how do I get one?',
        a: '',
      },
      {
        q: 'Is an E-Way Bill required for transporting goods within the same state?',
        a: '',
      },
      {
        q: 'How do I download my E-Way Bill registration certificate?',
        a: '',
      },
      {
        q: 'What should I do if I forget my E-Way Bill portal password?',
        a: '',
      },
      {
        q: 'Can a single E-Way Bill be generated for multiple invoices?',
        a: '',
      },
      {
        q: 'Is two-factor authentication (2FA) mandatory for E-Way Bill login?',
        a: '',
      },
    ],
    cta: {
      heading: 'Need Help With E-Way Bill Registration?',
      subheading:
        'Let Your Professionals handle your e-way bill registration requirements with expert guidance and timely filing.',
      features: [
        'Expert Tax Professionals',
        'Timely Filing Guarantee',
        'Dedicated Support Manager',
        'Transparent Pricing',
      ],
    },
  },
};

export default data;
