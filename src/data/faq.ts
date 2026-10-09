export interface FAQCategory {
    id: string;
    label: string;
    items: {
        question: string;
        answer: string;
        iconType: 'building' | 'document' | 'clock' | 'chart' | 'globe' | 'shield' | 'calculator';
    }[];
}

// Source: "FAQs for Your Professionals" database (150 questions, 30 per category).
export const FAQ_DATA: FAQCategory[] = [
    {
        id: "company-registration",
        label: "Company Registration",
        items: [
            {
                question: "What is a Private Limited Company and why do most Indian startups choose it?",
                answer: "A Private Limited Company is a separate legal entity registered under the Companies Act, 2013 and owned by shareholders whose liability is limited to the amount they have agreed to invest. The company can own assets, sign contracts and be sued in its own name, independent of its founders. Indian startups favour this structure for three practical reasons:\n\n• Investors can only be issued equity shares by a company, so almost all angel and VC funding rounds require a Private Limited Company or an LLP.\n• Limited liability protects the founders' personal assets if the business fails or is sued.\n• Banks, large clients and government tenders often treat an incorporated company as more credible than an unregistered proprietorship.\n\nThe trade-off is higher compliance: audited accounts, annual ROC filings and board meetings apply regardless of turnover.",
                iconType: 'building'
            },
            {
                question: "How do I register a private limited company in India?",
                answer: "Company registration in India is fully online through the Ministry of Corporate Affairs (MCA) portal using the integrated SPICe+ form. The broad sequence is:\n\n• Obtain a Class 3 Digital Signature Certificate (DSC) for each proposed director and subscriber.\n• Reserve the company name through SPICe+ Part A, or file the name together with incorporation in a single submission.\n• File SPICe+ Part B with director details, registered office, capital structure and the linked e-MoA (INC-33) and e-AoA (INC-34).\n• Submit the linked AGILE-PRO-S form, which covers EPFO, ESIC, profession tax where applicable, and bank account opening.\n• Pay applicable stamp duty and government fees, then receive the Certificate of Incorporation with PAN, TAN and DIN allotted together.\n\nMost rejections come from name conflicts and errors in the objects clause of the MoA, which is why founders commonly use a CA or CS firm such as Your Professionals to prepare and file the application.",
                iconType: 'document'
            },
            {
                question: "How much does private limited company registration cost in India?",
                answer: "The total cost has four separate components, and only one of them is a professional fee:\n\n• MCA form filing fee: no filing fee is charged on the SPICe+ incorporation form where authorised share capital does not exceed Rs. 15 lakh, which covers most new companies.\n• State stamp duty on the MoA and AoA: this varies significantly by state and rises with authorised capital, and it is non-refundable if the application is rejected.\n• Digital Signature Certificates: charged per director by the certifying agency.\n• Professional fees for drafting, filing and follow-up.\n\nBecause stamp duty is state-specific and capital-linked, two identical companies registered in different states can pay materially different amounts. Ask any service provider for a written break-up of government charges versus professional fees before you pay, and confirm current rates, as fee rules are revised from time to time.",
                iconType: 'calculator'
            },
            {
                question: "How long does company registration take in India?",
                answer: "With complete and consistent documents, incorporation is typically completed within roughly one to two weeks. The realistic breakdown is a day or two for Digital Signature Certificates, a few working days for name approval, and a few more for the Registrar to process SPICe+ and issue the Certificate of Incorporation. Timelines are indicative rather than guaranteed, because MCA processing speed varies by Registrar office and workload.\n\nThe two most common causes of delay are name rejection and mismatched director KYC documents, both of which are avoidable with a proper name search and document check before filing.",
                iconType: 'clock'
            },
            {
                question: "What documents are required for company registration in India?",
                answer: "Requirements fall into three groups. For every director and shareholder: PAN card, Aadhaar, a passport-size photograph, and one identity proof such as a passport, voter ID or driving licence. For address proof of each director: a bank statement or utility bill in their own name, usually not older than two months. For the registered office: a recent utility bill for the premises, plus a No Objection Certificate from the owner and a copy of the rent agreement if the property is rented. Foreign nationals must provide notarised and apostilled copies of their passport and address proof. Documents that do not match each other exactly on name and address spelling are the single most common reason applications are marked for resubmission.",
                iconType: 'document'
            },
            {
                question: "LLP vs Private Limited Company: which is better for my business?",
                answer: "Both give limited liability, but they suit different plans. A Private Limited Company can issue equity shares, accommodate ESOPs and take on institutional investors, which makes it the standard choice for any business that intends to raise external funding. An LLP has lighter annual compliance and no requirement for a statutory audit until it crosses prescribed turnover or contribution thresholds, which makes it cost-effective for professional practices, consultancies, family businesses and services firms that will be funded from internal accruals. In short: if you expect to raise equity, register a company; if you want a low-maintenance structure with partner flexibility and no fundraising plans, an LLP is usually the better fit.",
                iconType: 'building'
            },
            {
                question: "What is the minimum capital required to start a private limited company in India?",
                answer: "There is no minimum paid-up capital requirement for a private limited company in India; that requirement was removed by amendment to the Companies Act. In practice founders declare a modest authorised capital, commonly in the range of Rs. 1 lakh to Rs. 10 lakh, and subscribe to a small portion of it. This matters commercially because state stamp duty is generally calculated on authorised capital, so declaring a very large figure at incorporation increases your upfront cost with no benefit. Authorised capital can be increased later through Form SH-7 when you actually raise funds, so there is rarely a reason to over-declare at the start.",
                iconType: 'calculator'
            },
            {
                question: "Can a single person register a company in India?",
                answer: "Yes. A One Person Company (OPC) lets a single individual hold all the shares while still getting a separate legal entity and limited liability. An OPC needs one member, one director and one nominee who takes over if the member dies or becomes incapacitated. The member and nominee must be natural persons, and rules on residency were relaxed in 2021 so that non-resident Indians can also incorporate an OPC. A standard private limited company, by contrast, needs a minimum of two shareholders and two directors. The main limitation of an OPC is that it cannot issue shares to outside investors without first converting to a private limited company, so it suits solo consultants and single-owner trading businesses more than fundraising startups.",
                iconType: 'document'
            },
            {
                question: "How many directors are required for a private limited company, and does one have to live in India?",
                answer: "A private limited company needs a minimum of two directors and can have up to fifteen without special approval. Directors must be individuals, at least eighteen years old, and must hold a Director Identification Number. Importantly, at least one director must be a resident of India, meaning a person who has stayed in India for the prescribed minimum number of days in the previous financial year under Section 149(3) of the Companies Act, 2013. This is the requirement that most often trips up overseas founders: a company owned entirely by non-residents still needs at least one resident director on the board from the date of incorporation.",
                iconType: 'building'
            },
            {
                question: "Can a foreigner or NRI register a company in India or become a director?",
                answer: "Yes. Foreign nationals, NRIs and foreign companies can hold shares in an Indian private limited company, and in most sectors 100 percent foreign ownership is permitted under the automatic route without prior government approval. Foreign nationals can also serve as directors. Three conditions matter in practice: at least one director must satisfy the Indian residency test; identity and address documents executed outside India must be notarised and apostilled or consularised; and inbound share capital must be reported to the Reserve Bank of India through the prescribed FDI filings within the applicable timelines. Sectors under the government approval route, or subject to press-note restrictions on investors from certain neighbouring countries, need specialist advice before you incorporate.",
                iconType: 'globe'
            },
            {
                question: "What is a DSC and DIN, and do I need them before registering a company?",
                answer: "A Digital Signature Certificate (DSC) is the electronic signature used to sign MCA forms, and every proposed director and subscriber needs a Class 3 DSC before incorporation documents can be filed. It is issued by licensed certifying agencies after video-based KYC and is usually ready within a day. A Director Identification Number (DIN) is a unique lifetime number allotted to each director; an individual may hold only one DIN. For a new company you do not apply for DIN separately, because DINs for the first directors are allotted automatically through the SPICe+ incorporation form. A separate DIR-3 application is only needed when appointing a new director to an existing company.",
                iconType: 'document'
            },
            {
                question: "How do I choose a company name that will actually get approved by MCA?",
                answer: "Names are reserved through SPICe+ Part A and are checked against existing companies, LLPs and registered trademarks. A name is likely to be rejected if it closely resembles an existing entity, if it conflicts with a registered or applied-for trademark, if it uses restricted words such as those implying government patronage without approval, or if the name does not reflect the main objects of the business. Two practical steps prevent most rejections: search the MCA name database and the IP India trademark register before applying, and submit a distinctive coined word rather than a generic descriptive term. Approved names are reserved for a limited period, so incorporation documents should be ready before you apply.",
                iconType: 'document'
            },
            {
                question: "What are MOA and AOA, and why do they matter after registration?",
                answer: "The Memorandum of Association (MoA) is the company's charter. It states the name, registered office state, objects the company may pursue, liability of members and authorised capital. The Articles of Association (AoA) are the internal rulebook, covering how directors are appointed, how shares are transferred, how board and shareholder meetings run, and what majorities are needed for key decisions. Both are filed electronically as INC-33 and INC-34 during incorporation. They matter long after registration: a narrow objects clause can block you from entering a new line of business without an amendment, and generic articles frequently need to be replaced during a funding round to accommodate investor rights, which costs time and fees later.",
                iconType: 'document'
            },
            {
                question: "Can I use my home address as the registered office of my company?",
                answer: "Yes. A residential address can be used as a registered office, and there is no requirement to have commercial premises. What matters is that the address is a real location where statutory notices can be received, and that you can produce a recent utility bill for the premises plus a No Objection Certificate from the owner. If the property is rented, the rent agreement is also required. Note that the registered office fixes the Registrar of Companies jurisdiction and the state whose stamp duty applies, and that some states levy profession tax based on this address. Shared and virtual office addresses are commonly used, but only where the provider can supply valid ownership documents and an NOC.",
                iconType: 'document'
            },
            {
                question: "Proprietorship vs private limited company: when should I convert?",
                answer: "A proprietorship is the cheapest and fastest way to start, but it is not a separate legal entity, so business debts are personal debts and profits are taxed at your individual slab rates. Converting to a private limited company usually makes sense when one of these becomes true: you are about to raise external investment, you want to bring in a co-founder with a defined equity share, your clients or lenders require a company to transact, your personal exposure to business liability has become uncomfortable, or your profits are high enough that corporate tax rates plus structured remuneration are more efficient than personal slab rates. Conversion needs proper planning because assets, contracts, GST registration and bank accounts all have to be migrated.",
                iconType: 'clock'
            },
            {
                question: "What is SPICe+ and what services are included in it?",
                answer: "SPICe+ is the MCA's integrated incorporation form that bundles several registrations into one submission. Part A handles name reservation. Part B handles incorporation itself and simultaneously delivers DIN allotment for first directors, company PAN and TAN, and, through the linked AGILE-PRO-S form, EPFO and ESIC registration, profession tax registration in states where it applies, and the opening of a company bank account. GST registration can also be applied for through the same route. The practical benefit is that a founder no longer has to approach four departments separately, but it also means an error in one section can hold up the whole application, so the details need to be consistent across all parts.",
                iconType: 'document'
            },
            {
                question: "What compliance is required in the first year after company incorporation?",
                answer: "This is the area where new founders most often default, because the obligations start immediately even if the business has not begun trading. The core first-year items are:\n\n• Appoint the first statutory auditor by board resolution within 30 days of incorporation, and file Form ADT-1.\n• Open the company bank account, bring in the subscription money from shareholders, and file Form INC-20A declaring commencement of business within 180 days of incorporation.\n• Hold board meetings as required, and maintain statutory registers and minutes from day one.\n• Get the first financial statements audited, hold the first AGM within the permitted period, and file AOC-4 and MGT-7 or MGT-7A with the Registrar.\n• File the company's income tax return, and complete director KYC as and when it falls due.\n\nMissing INC-20A is the single most common early default, and it can expose the company to strike-off proceedings. Many founders engage a compliance partner such as Your Professionals for the first year precisely because these deadlines run from incorporation, not from first revenue.",
                iconType: 'building'
            },
            {
                question: "Do I need GST registration immediately after registering a company?",
                answer: "Not automatically. Incorporation and GST registration are separate. GST becomes compulsory when you cross the applicable aggregate turnover threshold, or immediately, regardless of turnover, if you fall into a compulsory category such as making inter-state supplies of goods, selling through an e-commerce operator, being liable under reverse charge, or acting as an agent or input service distributor. Many new companies also register voluntarily on day one, because business customers usually want a GST invoice to claim input tax credit, and because credit on your own purchases is otherwise lost. The decision is commercial as much as legal: if your customers are registered businesses, early registration usually helps rather than hurts.",
                iconType: 'document'
            },
            {
                question: "Partnership firm vs LLP: which one should I register?",
                answer: "A traditional partnership firm is governed by the Indian Partnership Act, 1932 and is simple and inexpensive to set up, but partners carry unlimited joint liability, meaning personal assets are exposed to firm debts and to the acts of other partners. An LLP is registered with the MCA, is a separate legal entity with perpetual succession, and limits each partner's liability to their agreed contribution while protecting them from liability arising purely from another partner's wrongful acts. The trade-off is that an LLP must file annual returns and statements of account with the Registrar. For most new ventures with two or more owners, the liability protection of an LLP outweighs the modest additional compliance.",
                iconType: 'document'
            },
            {
                question: "What is a Section 8 company and who should register one?",
                answer: "A Section 8 company is a not-for-profit company registered under Section 8 of the Companies Act, 2013 for charitable, educational, scientific, social welfare, environmental or similar objects. Its profits must be applied to promoting its objects and cannot be distributed as dividends to members. It requires a licence from the Central Government, granted through the incorporation process, and offers stronger governance credibility than a trust or society because it is regulated by the MCA and files annual returns. It is usually the right choice for organisations that expect to receive institutional grants or CSR funding, where donors want transparent, audited, publicly filed accounts. Separate registrations under the Income-tax Act are needed before donors can claim deductions.",
                iconType: 'document'
            },
            {
                question: "Should a newly registered company apply for Udyam MSME registration and Startup India recognition?",
                answer: "Both are free, both are separate from incorporation, and both are worth doing if you qualify. Udyam registration is the government's MSME registration and is usually completed quickly online using PAN and Aadhaar. It gives access to priority-sector lending, protection under the MSME delayed-payment provisions, concessional fee slabs including reduced trademark filing fees, and preference in certain public procurement. DPIIT recognition under the Startup India framework is granted to eligible innovative entities and unlocks self-certification under specified labour and environmental laws, IPR fee rebates, and eligibility to apply separately for the Section 80-IAC profit-linked tax holiday, which requires a further Inter-Ministerial Board approval. Because the eligibility framework was revised in 2026, confirm current criteria on the official portal before applying.",
                iconType: 'document'
            },
            {
                question: "What happens if MCA rejects my proposed company name, and can I reapply?",
                answer: "A rejected name is not the end of the application. When the Registrar refuses a name it states the ground, usually resemblance to an existing company or LLP, conflict with a registered or applied-for trademark, use of a restricted or prohibited word, or a name that does not match the stated objects. The portal generally allows a limited number of resubmissions within a prescribed period, after which the application lapses and the fee is lost. Two practical points save time and money. First, propose a distinctive coined or invented word rather than a descriptive phrase, because generic combinations of ordinary business words are the most frequently refused. Second, do the trademark search before you apply, not after, since a name cleared by MCA can still be blocked later by a trademark owner. If a name is critical to your brand, secure it as a trademark rather than relying on name approval alone.",
                iconType: 'shield'
            },
            {
                question: "How do I open the company's bank account after incorporation, and what is subscription money?",
                answer: "A company must have its own current account, and business receipts should never be routed through a director's personal account once the company exists. An account can be applied for through the AGILE-PRO-S form linked to SPICe+, or opened directly with a bank afterwards. Banks typically ask for the Certificate of Incorporation, MoA and AoA, company PAN, a board resolution authorising the account and signatories, KYC of directors and the authorised signatory, and proof of the registered office.\n\nSubscription money is the amount each initial shareholder agreed to pay for the shares stated in the MoA. It must actually be deposited into the company's account, because the declaration in Form INC-20A confirming receipt of subscription money has to be filed within 180 days of incorporation before the company can legally commence business or borrow. Founders who delay opening the account almost always end up missing INC-20A.",
                iconType: 'building'
            },
            {
                question: "What is the difference between authorised, subscribed and paid-up capital?",
                answer: "Authorised capital is the ceiling stated in the Memorandum, the maximum value of shares the company is permitted to issue. It is not money in the bank; it only sets a limit, and it drives the stamp duty payable at incorporation and on any later increase. Issued and subscribed capital is the portion of that ceiling the company has actually offered and shareholders have agreed to take. Paid-up capital is what shareholders have actually paid in and is the figure that appears on the balance sheet and in most compliance thresholds.\n\nA common example: a company declares Rs. 10 lakh authorised capital, issues 10,000 shares of Rs. 10 each to its two founders, and receives Rs. 1 lakh. Its authorised capital is Rs. 10 lakh and its paid-up capital is Rs. 1 lakh. Confusing the two leads founders either to over-declare authorised capital and overpay stamp duty, or to promise investors an allotment the current ceiling cannot accommodate.",
                iconType: 'calculator'
            },
            {
                question: "How should co-founders decide the shareholding split, and what protects each of them later?",
                answer: "Shareholding should reflect contribution over time, not just who had the idea. Factors worth weighing are capital invested, full-time versus part-time involvement, the skills each founder brings, and who carries the risk of leaving a job. A perfectly equal split among founders looks fair but creates deadlock when they disagree, so decide in advance how a tie is broken.\n\nWhat protects everyone is documentation, not intent. The Articles of Association govern share transfers and board decisions, and a separate founders' or shareholders' agreement typically covers vesting of founder shares over a period of years, restrictions on transferring shares to outsiders, roles and time commitment, exit and buy-back terms, and what happens if a founder leaves early. Agreeing this at incorporation costs very little; renegotiating it after one founder walks away holding a large stake is expensive and sometimes fatal to a funding round.",
                iconType: 'calculator'
            },
            {
                question: "Can I register a company or become a director while I am employed full-time?",
                answer: "There is nothing in the Companies Act that prevents a salaried person from being a shareholder or a director, provided they are otherwise eligible. The restrictions come from your employment contract and, for some people, their service rules. Check your contract for clauses on exclusivity, dual employment, conflict of interest, non-compete and ownership of intellectual property created during your employment, because IP clauses in particular can give your employer a claim over what you build. Government and public sector employees are usually restricted by service conduct rules and should obtain permission before taking a directorship.\n\nTwo practical options are commonly used. You can hold shares without taking a board seat, which keeps you an investor rather than an officer. Or you can join as a director from the start and disclose it to your employer where the contract requires it. Directorships are public information on the MCA portal, so an undisclosed appointment is easily discovered.",
                iconType: 'document'
            },
            {
                question: "What are the options for a foreign company that wants to set up in India?",
                answer: "Foreign companies typically choose between an incorporated entity and an unincorporated presence, and the two are treated very differently.\n\n• A wholly owned subsidiary is an Indian private limited company owned by the foreign parent. It can carry on business freely in permitted sectors, hire, invoice and contract in its own name, and is the most common choice for genuine operations.\n• An LLP is possible for foreign investors in sectors where 100 percent FDI is allowed under the automatic route without performance-linked conditions.\n• A liaison office may only carry out representative and communication activities and cannot earn income in India.\n• A branch office can undertake specified activities such as export and import, professional services and research.\n• A project office is set up for a specific contract in India.\n\nLiaison, branch and project offices are established under FEMA through the authorised dealer bank and, in some cases, with Reserve Bank of India approval, and they have narrower permitted activities plus their own reporting. For most foreign founders building a real Indian business, a subsidiary is simpler to run than a branch, but the choice affects tax and repatriation, so take advice before committing.",
                iconType: 'globe'
            },
            {
                question: "Can one person be a director in several companies, and can two companies share the same registered office?",
                answer: "Yes to both, within limits. Under Section 165 of the Companies Act, 2013 an individual may hold directorships in up to 20 companies at a time, of which not more than 10 may be public companies. The same DIN is used across all of them, and a single DIR-3 KYC covers the individual rather than each company. Bear in mind that disqualification arising from one company's non-filing affects the person's ability to be reappointed in every other company, so a dormant, unfiled company is a live risk to your other directorships.\n\nTwo or more companies can also use the same registered office address, which is normal for group entities and for founders operating several ventures from one premises. Each company must independently be able to produce valid proof for that address, a No Objection Certificate from the owner, and evidence that it actually receives statutory correspondence there. Where a shared or virtual office is used, confirm the provider will support each entity separately.",
                iconType: 'document'
            },
            {
                question: "What are the most common mistakes founders make while registering a company?",
                answer: "The recurring ones are avoidable and expensive to fix later:\n\n• Choosing a name without checking the trademark register, then discovering the brand cannot be protected or must be changed.\n• Declaring a large authorised capital \"for the future\" and paying avoidable state stamp duty, when it can be increased later through Form SH-7.\n• Submitting identity and address documents where the name spelling or address does not match across papers, which triggers resubmission.\n• Drafting an objects clause that is too narrow, so a later change of business needs a formal amendment of the Memorandum.\n• Accepting a generic set of Articles that has to be replaced during the first funding round.\n• Adding a family member or friend as a second director purely to meet the minimum, without any agreement on how they can be removed.\n• Treating incorporation as the finish line and missing the first-year deadlines, particularly ADT-1 and INC-20A.\n\nSpending a little time on the name, the capital structure and the shareholders' agreement before filing saves far more than it costs.",
                iconType: 'shield'
            },
            {
                question: "Can I convert my LLP into a private limited company later, or a company into an LLP?",
                answer: "Both conversions are legally possible but neither is a simple switch, and each has conditions.\n\nAn LLP can be converted into a private limited company under the Companies Act by registering as a company under Part I of Chapter XXI, which requires consent of the partners, publication of notice, and filing the prescribed forms along with incorporation documents. This is the route most often used when an LLP starts attracting equity investors, since an LLP cannot issue shares or run an ESOP.\n\nA private limited company can be converted into an LLP under the LLP Act, but only where the company has no outstanding security interest on its assets and all shareholders become partners with no one else joining. Conversion in either direction carries tax consequences, including possible capital gains exposure unless prescribed conditions are met, and it means migrating PAN, GST registration, bank accounts, licences and contracts. Because of this, founders who expect to raise equity are usually better off incorporating as a company at the outset rather than converting later.",
                iconType: 'shield'
            }
        ]
    },
    {
        id: "gst-tax",
        label: "GST & Income Tax",
        items: [
            {
                question: "Who needs GST registration in India and what is the turnover limit?",
                answer: "GST registration becomes compulsory once your aggregate turnover crosses the applicable threshold: broadly Rs. 40 lakh for suppliers of goods and Rs. 20 lakh for service providers in most states, with lower limits of Rs. 20 lakh and Rs. 10 lakh in special category states. Two points are widely misunderstood. First, aggregate turnover is computed PAN-India across all your GSTINs and includes exempt supplies and exports, not just taxable sales. Second, the higher Rs. 40 lakh limit is conditional and does not apply to certain notified goods or to businesses making inter-state supplies of goods. Separately, some businesses must register from the first rupee regardless of turnover, including e-commerce sellers and those liable under reverse charge.",
                iconType: 'building'
            },
            {
                question: "What documents are required for GST registration?",
                answer: "The core set is consistent across entity types: PAN of the business and of the promoters, Aadhaar of the authorised signatory and promoters, a photograph of each promoter, proof of the principal place of business, and bank account details. Proof of place of business is usually a recent electricity bill or property tax receipt, plus a rent agreement and No Objection Certificate if the premises are rented. Companies and LLPs additionally provide the Certificate of Incorporation and a board resolution or authorisation letter for the authorised signatory. Under the current simplified process the department has been directed to seek only the documents listed in the prescribed annexure, so requests for extra paperwork can be pushed back on.",
                iconType: 'document'
            },
            {
                question: "How long does GST registration take now?",
                answer: "This changed materially from 1 November 2025. Under the simplified scheme introduced by Rule 14A of the CGST Rules, eligible low-risk applicants and those who self-assess their monthly output tax liability on B2B supplies as being within the prescribed limit can receive electronic approval within three working days of generating the Application Reference Number, provided Aadhaar authentication of the primary authorised signatory and at least one promoter or partner is successful. Applications that are not routed through this scheme, or that the risk engine flags, follow the normal timeline of roughly seven working days, extending to around thirty days where physical verification of premises is triggered. Aadhaar authentication failures are now the main cause of delay.",
                iconType: 'clock'
            },
            {
                question: "Should I register for GST voluntarily if my turnover is below the limit?",
                answer: "It depends almost entirely on who your customers are. If you sell to registered businesses, voluntary registration usually helps: your clients can claim input tax credit on your invoices, which makes your pricing competitive, and you can claim credit on your own purchases such as software, rent and professional fees. If you sell mainly to end consumers, registering early adds cost without benefit, because consumers cannot claim credit and your prices effectively rise. The obligation that comes with voluntary registration is real: once registered, you must file returns for every period, including nil returns, and late filing attracts fees even when there is no tax to pay.",
                iconType: 'document'
            },
            {
                question: "Do I need a separate GST registration for each state?",
                answer: "Yes. GST is a state-level registration, so a business with a place of business in more than one state needs a separate GSTIN in each of those states, all linked to the same PAN. This commonly catches growing businesses that open a branch office, a warehouse or a fulfilment centre in another state, and e-commerce sellers who store stock in marketplace warehouses across multiple states. Simply selling to customers in another state does not by itself require registration there; what triggers it is having a place of business or storing goods in that state. Each GSTIN files its own returns, so multi-state operations multiply compliance and make consolidated bookkeeping important.",
                iconType: 'calculator'
            },
            {
                question: "Which GST returns does a business have to file, and when?",
                answer: "A regular taxpayer files two recurring returns plus an annual return:\n\n• GSTR-1, the statement of outward supplies, filed monthly by the 11th of the following month.\n• GSTR-3B, the summary return through which tax is actually paid, filed monthly by the 20th of the following month.\n• Businesses with turnover up to the prescribed limit may opt for the QRMP scheme and file GSTR-1 and GSTR-3B quarterly while paying tax monthly, with quarterly due dates that vary by state.\n• GSTR-9, the annual return, and GSTR-9C, the reconciliation statement, apply above prescribed turnover thresholds.\n• Composition taxpayers file CMP-08 quarterly and GSTR-4 annually instead.\n\nNil returns are still mandatory for periods with no activity, and an unfiled return blocks the next period's filing, so one missed month quickly becomes several.",
                iconType: 'building'
            },
            {
                question: "What happens if I file my GST returns late?",
                answer: "Three separate consequences apply, and they stack. A late fee accrues per day of delay, at a reduced rate for nil returns, subject to prescribed caps. Interest runs on any unpaid tax from the original due date at the notified rate. And the portal blocks you from filing the next period until the earlier one is filed, so delays compound. There is now a hard outer limit as well: returns cannot be filed once three years have elapsed from their original due date, after which the period is permanently closed on the portal with no late-filing route available. Prolonged non-filing can also lead to suspension or cancellation of registration and blocking of e-way bill generation.",
                iconType: 'shield'
            },
            {
                question: "What is Input Tax Credit and why do ITC claims get rejected?",
                answer: "Input Tax Credit lets you set off GST paid on business purchases against GST collected on sales. A claim only survives scrutiny if every statutory condition is met: you hold a valid tax invoice, you have actually received the goods or services, the supplier has reported the invoice and paid the tax, and the credit appears in your auto-generated GSTR-2B. Claims most commonly fail because the supplier did not file GSTR-1, because the invoice was reported against the wrong GSTIN, or because the claim was made after the statutory time limit. Payment to the supplier within the prescribed period is also required, failing which credit must be reversed. Monthly reconciliation of purchase records against GSTR-2B, and use of the Invoice Management System to accept or reject invoices, is the only reliable protection.",
                iconType: 'shield'
            },
            {
                question: "What is the GST Composition Scheme and should my business opt for it?",
                answer: "The Composition Scheme lets small taxpayers pay GST at a low flat rate on turnover instead of the normal rate, with far simpler quarterly compliance through CMP-08 and an annual GSTR-4. It is designed for small traders, manufacturers, restaurants and, under a separate variant, small service providers, each with its own turnover ceiling and rate. The trade-offs are significant: you cannot claim input tax credit, you cannot collect GST from your customers or issue a tax invoice, and you cannot make inter-state outward supplies or supply through an e-commerce operator. It therefore suits a local, cash-and-carry, consumer-facing business, and is usually a poor fit for anyone selling B2B or online.",
                iconType: 'building'
            },
            {
                question: "Is e-invoicing mandatory for my business?",
                answer: "E-invoicing applies to B2B and export invoices once your aggregate annual turnover crosses the notified threshold, currently Rs. 5 crore, tested against turnover in any financial year since GST began. It does not apply to B2C sales for most businesses. Once covered, an invoice is only legally valid if it has been reported to the Invoice Registration Portal and carries an Invoice Reference Number and signed QR code. A further restriction applies to larger taxpayers: businesses with aggregate turnover of Rs. 10 crore or more must report each invoice, credit note and debit note to the IRP within 30 days of the document date, after which the portal rejects it and no IRN can be generated. Because thresholds have been lowered repeatedly, businesses approaching the limit should prepare in advance.",
                iconType: 'building'
            },
            {
                question: "What should I do if my business receives a GST notice?",
                answer: "First, identify what kind of notice it is, because the deadline and the correct response differ. Common ones include a notice for non-filing of returns, a scrutiny notice pointing to a discrepancy between your returns, a notice proposing rejection or cancellation of registration, and a show cause notice proposing demand of tax. Every notice specifies a reply period, and the portal often closes the reply window automatically once it lapses. Do not ignore a notice on the assumption that it is a system-generated error: an unanswered notice can proceed to a best-judgment assessment or cancellation. Gather the underlying reconciliation before drafting, respond on the portal within the stated period, and take professional help for anything proposing a demand. Your Professionals assists with notice assessment and drafting replies.",
                iconType: 'shield'
            },
            {
                question: "Can GST registration be cancelled if my business has stopped operating?",
                answer: "Yes, and it should be, because an active GSTIN keeps generating return obligations and late fees even when there is no business. Cancellation is applied for on the GST portal in Form REG-16, stating the reason and the date from which cancellation is sought, together with details of stock held and any consequent liability. Before applying, all returns up to the date of cancellation must be filed. After the cancellation order is issued, a final return in Form GSTR-10 must be filed within the prescribed period, and missing it attracts its own penalty. Note that cancellation does not erase past liabilities, and the department can still assess earlier periods. Registration cancelled by an officer for non-filing can sometimes be revoked if you act within the prescribed window.",
                iconType: 'shield'
            },
            {
                question: "Do freelancers and consultants in India need GST registration?",
                answer: "A freelancer providing services becomes liable to register once aggregate turnover crosses the services threshold, which is Rs. 20 lakh in most states and Rs. 10 lakh in special category states. Two situations catch freelancers out. If you supply services through an e-commerce operator or platform, registration requirements can be triggered irrespective of turnover, so the platform's terms need checking. And if you invoice overseas clients, the supply may qualify as an export of services and be zero-rated, but only if the prescribed conditions are met, including receipt of payment in convertible foreign exchange, and export benefits generally require registration. Freelancers close to the threshold should track turnover monthly rather than discovering the breach at year end.",
                iconType: 'building'
            },
            {
                question: "Do exporters have to pay GST, and what is a LUT?",
                answer: "Exports of goods and services are treated as zero-rated supplies, so no GST is ultimately borne on them. There are two routes. You can export on payment of IGST and then claim a refund of the tax paid, which ties up working capital until the refund is processed. Or you can furnish a Letter of Undertaking in Form RFD-11 and export without paying IGST at all, then claim a refund of accumulated input tax credit. The LUT route is preferred by most exporters and by service exporters invoicing foreign clients, because it avoids blocking cash. A LUT is furnished on the GST portal and must be renewed for each financial year, which is a deadline exporters routinely forget.",
                iconType: 'globe'
            },
            {
                question: "What is the difference between GST and income tax for a business?",
                answer: "They are entirely separate systems and a business usually has to deal with both. GST is an indirect tax on the supply of goods and services. You collect it from your customer, offset input tax credit, and remit the balance to the government, so GST is generally not your own cost and is not computed on profit. Income tax is a direct tax on the profit your business earns in a financial year, paid out of your own funds after deducting allowable expenses. They have different registrations, different portals, different returns and different due dates. A common and expensive mistake is treating GST collected as business income; it is money held on behalf of the government and should never be spent as revenue.",
                iconType: 'building'
            },
            {
                question: "Which income tax return should my business file, and what are the due dates?",
                answer: "The form depends on the entity. Companies other than those claiming charitable exemption file ITR-6. LLPs and partnership firms file ITR-5. A proprietor reports business income in their personal return, using ITR-3, or ITR-4 if opting for presumptive taxation. Due dates were staggered for assessment year 2026-27: broadly 31 July for salaried filers using ITR-1 and ITR-2, 31 August for business and professional filers not subject to audit, 31 October where a tax audit applies, and 30 November for transfer pricing cases. Because these dates have shifted and the Central Board of Direct Taxes extends them from time to time, confirm the applicable date for the current year before planning your closing.",
                iconType: 'clock'
            },
            {
                question: "Does a company have to file returns even if it had no revenue or transactions?",
                answer: "Yes, and this is one of the most common and costly misunderstandings among first-time founders. A registered company must file its income tax return every year regardless of whether it earned anything, and must also complete its ROC annual filings and, if registered, its GST returns, including nil returns. Compliance obligations attach to the existence of the entity, not to its activity. The consequences of assuming otherwise are severe: per-day ROC late fees with no upper limit, income tax late filing fees and loss of the ability to carry forward business losses, and eventual strike-off of the company or disqualification of its directors. If a company is genuinely inactive, the correct route is dormant status or a formal strike-off, not silence.",
                iconType: 'building'
            },
            {
                question: "When is a tax audit required for a business in India?",
                answer: "Under Section 44AB, a business must get its accounts audited by a Chartered Accountant if turnover exceeds Rs. 1 crore, with the threshold rising to Rs. 10 crore where both cash receipts and cash payments are within 5 percent of the respective totals. For professionals the limit is gross receipts exceeding Rs. 50 lakh, and the enhanced digital-transaction threshold does not apply to professions. A tax audit can also be triggered at lower turnover if you have opted out of a presumptive scheme and declare income below the prescribed percentage. Note that a tax audit under the Income-tax Act is different from the statutory audit every company must undergo under the Companies Act, and a company can be subject to both.",
                iconType: 'clock'
            },
            {
                question: "What is advance tax and does my business have to pay it?",
                answer: "Advance tax is the requirement to pay income tax during the year in which the income is earned rather than after it ends. It applies once your estimated annual tax liability, net of TDS, crosses the prescribed threshold. Payment is made in four instalments, cumulatively 15 percent by 15 June, 45 percent by 15 September, 75 percent by 15 December and 100 percent by 15 March. Falling short triggers interest under Sections 234B and 234C, which is charged monthly and is not waived merely because the return is filed on time. Businesses with lumpy or seasonal revenue are most exposed, because a strong final quarter can create a shortfall in earlier instalments that is only discovered at filing.",
                iconType: 'calculator'
            },
            {
                question: "What is TDS and which TDS returns does a business have to file?",
                answer: "Tax Deducted at Source requires a business to withhold tax on specified payments such as salaries, contractor payments, professional fees, rent, commission and interest, deposit it with the government by the prescribed monthly date, and report it quarterly. The main quarterly returns are Form 24Q for salaries, Form 26Q for other resident payments and Form 27Q for payments to non-residents. Once returns are filed, TDS certificates in Form 16 and Form 16A are issued to the payees. Two consequences make TDS worth taking seriously: interest and late fees accrue for delayed deduction, deposit or filing, and expenses on which TDS was required but not deducted can be partly or wholly disallowed when computing your taxable profit.",
                iconType: 'building'
            },
            {
                question: "What business expenses can I claim to reduce my company's tax?",
                answer: "Broadly, expenditure incurred wholly and exclusively for the purposes of the business is deductible, including salaries, rent, professional and legal fees, software subscriptions, marketing, travel, insurance, interest on business borrowings and depreciation on assets. What gets disallowed in assessment is usually not the nature of the expense but its documentation and treatment: personal expenses routed through the business, cash payments above the prescribed limit, expenses without invoices in the company's name, and payments on which TDS was required but not deducted. A further trap is Section 43B(h), under which amounts payable to micro and small enterprise suppliers are only deductible in the year of actual payment if they exceed the prescribed credit period. Clean books are the deduction strategy.",
                iconType: 'calculator'
            },
            {
                question: "What must a valid GST tax invoice contain, and when must it be issued?",
                answer: "A tax invoice is the document on which your customer's input tax credit depends, so the details are not cosmetic. It should carry your name, address and GSTIN; a consecutive serial number unique for the financial year; the date of issue; the recipient's name, address and GSTIN where registered; the HSN code for goods or SAC for services; a description, quantity and unit; the taxable value after discount; the rate and amount of CGST and SGST, or IGST for inter-state supplies; the place of supply; a note where tax is payable under reverse charge; and a signature or digital signature.\n\nOn timing, an invoice for goods is generally issued at or before removal or delivery, and for services within 30 days of supply. Businesses covered by e-invoicing must additionally report the invoice to the Invoice Registration Portal and print the IRN and QR code. Composition dealers and suppliers of exempt goods issue a bill of supply instead, which does not show tax.",
                iconType: 'clock'
            },
            {
                question: "What is the Reverse Charge Mechanism and when do I have to pay GST on my own purchases?",
                answer: "Normally the supplier collects GST and pays it to the government. Under the Reverse Charge Mechanism the liability shifts to the recipient, so you pay the tax directly on certain purchases. It commonly applies to notified services such as goods transport agency services, legal services from an advocate, sponsorship, services from a director in a personal capacity, and import of services from abroad, as well as to certain notified goods and to specified purchases from unregistered suppliers.\n\nThree practical points matter. Tax under reverse charge must be paid in cash and cannot be set off against your existing input tax credit balance, although you can usually claim the amount paid as credit afterwards if the purchase is otherwise eligible. Where the supplier is unregistered, you must raise a self-invoice and a payment voucher. And a person liable to pay tax under reverse charge is required to register regardless of turnover, which surprises small businesses that import software or use a foreign consultant.",
                iconType: 'clock'
            },
            {
                question: "I made a mistake in a GST return I already filed. How do I correct it?",
                answer: "GST has no revised return, so corrections work differently depending on where the error sits.\n\nIf you have filed GSTR-1 for a period but not yet filed GSTR-3B for the same period, you can correct the outward supply details through GSTR-1A before filing GSTR-3B. This matters because the outward liability in GSTR-3B has been auto-populated and non-editable since the July 2025 tax period, so you can no longer simply overwrite the figure in GSTR-3B.\n\nIf the period has closed, missed or wrong invoices are amended in a later month's GSTR-1 using the amendment tables. Missed input tax credit is claimed in a later GSTR-3B, and excess credit is reversed there. There is an outer time limit: amendments and credit claims relating to a financial year generally cannot be made after 30 November following the end of that year, or the date of filing the annual return, whichever is earlier. Where tax was underpaid, paying it voluntarily with interest through Form DRC-03 is usually cheaper than waiting for a notice.",
                iconType: 'shield'
            },
            {
                question: "What are the current GST rate slabs after the 2025 rate change?",
                answer: "The rate structure was simplified with effect from 22 September 2025. The earlier four-slab system was replaced with two main rates, a lower rate of 5 percent for essential and mass-consumption items and a standard rate of 18 percent for most goods and services, together with a separate higher demerit rate applying to a narrow list of items such as luxury goods, tobacco products and certain other categories. The 12 percent and 28 percent slabs were removed as part of that change.\n\nA number of goods and services continue to be nil-rated or exempt, and a few items carry special rates outside this structure, for example precious metals. Because the applicable rate depends on the specific HSN or SAC classification of what you sell, and because rates are revised by the GST Council from time to time, confirm the rate for your particular product or service against current notifications rather than relying on a general slab list. Any FAQ or price list still referring to four slabs is out of date.",
                iconType: 'calculator'
            },
            {
                question: "How do I claim a GST refund, and why do refunds get delayed?",
                answer: "Refunds arise in a few defined situations: exports and other zero-rated supplies made under a Letter of Undertaking, accumulated credit due to an inverted duty structure where inputs are taxed higher than outputs, tax paid on exports where the IGST route was used, excess balance lying in the electronic cash ledger, and tax paid in excess or under the wrong head. Applications are generally made in Form RFD-01 on the portal within two years of the relevant date, supported by statements of invoices and the prescribed declarations. Exporters are usually eligible for a provisional refund of a substantial part of the claim, with the balance released after scrutiny.\n\nDelays almost always trace back to the same causes: mismatch between the shipping bill, GSTR-1 and GSTR-3B data; bank account not validated or not linked to the GSTIN; missing foreign inward remittance evidence for service exports; a deficiency memo issued and not responded to; or returns not filed for intervening periods. Getting the underlying data consistent before filing is far quicker than arguing after a deficiency memo.",
                iconType: 'calculator'
            },
            {
                question: "What is an e-way bill and when does my business need to generate one?",
                answer: "An e-way bill is an electronic document required for the movement of goods where the consignment value exceeds the prescribed limit, generally Rs. 50,000, whether the movement is for supply, return, job work or stock transfer. It is generated on the e-way bill portal before the goods start moving. Part A carries the invoice and consignment details and Part B carries the vehicle number, which the transporter can update. Validity is linked to the distance to be covered, and a bill that expires in transit has to be extended within the permitted window.\n\nSome states set different thresholds for movement within the state, and certain goods are exempt, so check the position for your state and product. Two practical risks are worth knowing: goods moving without a valid e-way bill can be detained with tax and penalty payable to release them, and the facility to generate e-way bills is blocked if returns have not been filed for the prescribed number of consecutive periods, which can halt dispatches entirely.",
                iconType: 'clock'
            },
            {
                question: "Which income tax law applies to my business now, the 1961 Act or the Income-tax Act, 2025?",
                answer: "Both, depending on the year in question. The Income-tax Act, 2025 took effect on 1 April 2026 and replaced the Income-tax Act, 1961, with the Income Tax Rules, 2026 superseding the 1962 Rules. The change is largely one of restructuring and simplified drafting rather than a wholesale change of the underlying tax base, but section numbers, form references and procedural language differ.\n\nIn practice this means the return for financial year 2025-26, filed in assessment year 2026-27, is still governed by the old Act, while income earned from financial year 2026-27 onwards falls under the new Act. Older assessments, appeals and proceedings continue under the law that applied to them. When you read guidance online, check which year it relates to, because a great deal of published material still cites 1961 Act section numbers without saying so. Where this FAQ set refers to familiar provisions such as Section 44AB or 43B(h), those references relate to the position under the earlier Act and the corresponding provisions carried into the new law.",
                iconType: 'building'
            },
            {
                question: "What rate of income tax does a private limited company pay?",
                answer: "A domestic company is taxed at a flat rate rather than on slabs, and the rate depends on which regime it is in. Under the ordinary regime the base rate is 25 percent for companies with turnover within the prescribed limit and 30 percent for others, plus surcharge where applicable and health and education cess. Under the concessional regime introduced by Section 115BAA the base rate is 22 percent, and a lower rate under Section 115BAB has been available to eligible new manufacturing companies subject to conditions and commencement timelines.\n\nThe concessional regimes come with a trade-off: the company gives up specified deductions, exemptions and set-off of certain brought-forward losses, and once the option is exercised it generally cannot be withdrawn in later years. A company with large deductions, unabsorbed depreciation or accumulated losses may be better off in the ordinary regime, at least initially. Because rates, surcharge levels and eligibility conditions are revised in Finance Acts, run the comparison for your own numbers each year before opting.",
                iconType: 'calculator'
            },
            {
                question: "I have received an income tax notice. What does it mean and what should I do?",
                answer: "Not every communication from the department is a problem, but every one has a deadline. The common types are an intimation under Section 143(1) comparing your return with the department's computation, a defective return notice under Section 139(9), a request for information under Section 142(1), a scrutiny notice under Section 143(2), a proposal to adjust a refund against an old demand under Section 245, and a reassessment notice where the department believes income has escaped assessment.\n\nThe practical steps are the same in each case. Log in to the income tax portal and read the notice itself rather than relying on an email summary, because the notice states the section, the assessment year and the response window. Reconcile your return against Form 26AS and the Annual Information Statement, since most mismatch notices arise from TDS credits, interest income or high-value transactions reported by third parties. Respond online within the stated period, attaching the supporting documents. Ignoring a notice converts a routine query into a best-judgment assessment with tax, interest and penalty, and appeals are far more expensive than a timely reply.",
                iconType: 'shield'
            }
        ]
    },
    {
        id: "roc-compliance",
        label: "ROC Compliance",
        items: [
            {
                question: "What is ROC compliance and which businesses have to do it?",
                answer: "ROC compliance is the set of filings every entity registered with the Ministry of Corporate Affairs must make with the Registrar of Companies, along with the internal governance those filings certify. It applies to every private limited company, public company, One Person Company and LLP from the date of incorporation, irrespective of turnover, profit or whether the business has actually started. It is separate from GST and income tax compliance, and completing those does not discharge your ROC obligations. Broadly it covers annual filings of financial statements and annual returns, event-based filings whenever something changes such as a director, address or share capital, and director-level filings such as KYC.",
                iconType: 'building'
            },
            {
                question: "What are the annual compliance requirements for a private limited company?",
                answer: "The recurring annual cycle for a private limited company is:\n\n• Get the financial statements audited by the statutory auditor.\n• Hold the required board meetings during the year, and hold the Annual General Meeting within the permitted period.\n• File Form AOC-4 with the audited financial statements, board's report and auditor's report.\n• File Form MGT-7, or MGT-7A for small companies and OPCs, containing the annual return.\n• File Form ADT-1 where an auditor is appointed or reappointed.\n• Complete director KYC, and file DPT-3 and MSME-1 where applicable.\n• Maintain statutory registers and minutes, and file the company's income tax return.\n\nNone of this is optional for a company with no revenue. Many founders retain a CS or compliance partner such as Your Professionals on an annual basis because the deadlines are interdependent and a delay in the audit pushes every subsequent filing late.",
                iconType: 'building'
            },
            {
                question: "What is the difference between AOC-4 and MGT-7?",
                answer: "They carry different information to the Registrar. AOC-4 is the filing of the financial statements: the balance sheet, profit and loss account, notes, board's report and auditor's report, and it is filed within 30 days of the Annual General Meeting under Section 137. MGT-7 is the annual return: a governance snapshot showing shareholding pattern, list of members, directors and key managerial personnel, meetings held, and details of any changes during the year, and it is filed within 60 days of the AGM under Section 92. Small companies and One Person Companies file the simplified MGT-7A instead of MGT-7. Both are separate filings with separate fees, and filing one does not satisfy the other.",
                iconType: 'document'
            },
            {
                question: "What are the ROC filing due dates for a private limited company?",
                answer: "Most annual ROC deadlines are calculated from the date of your AGM rather than being fixed calendar dates, which is why generic date lists can mislead. For a financial year ending 31 March, the AGM must normally be held by 30 September. AOC-4 is then due within 30 days of that AGM and MGT-7 or MGT-7A within 60 days. If you hold the AGM earlier, both filings fall due earlier. Separately, DPT-3 is an annual filing due after the financial year end, MSME-1 is half-yearly, and DIR-3 KYC has its own cycle. Because the MCA periodically extends specific due dates by circular, verify the current year's position rather than relying on last year's calendar.",
                iconType: 'clock'
            },
            {
                question: "What happens if I miss an ROC filing deadline?",
                answer: "The additional fee for delayed filing of AOC-4 and MGT-7 accrues at a per-day rate with no upper cap, so the cost grows indefinitely rather than settling at a fixed penalty. Beyond fees, the consequences escalate. The company and its officers in default can face separate penalties under the Companies Act. Directors of a company that fails to file financial statements or annual returns for three consecutive financial years become disqualified under Section 164(2) and cannot be reappointed for five years, which affects every other company they sit on. Persistent non-filing also leads the Registrar to initiate strike-off. Because the fee is time-based, filing late is always cheaper than filing later.",
                iconType: 'clock'
            },
            {
                question: "What is DIR-3 KYC and how often do directors have to file it now?",
                answer: "DIR-3 KYC is the verification of a director's contact and identity details with the MCA, required of every individual holding a Director Identification Number, including designated partners of LLPs and directors who are inactive or non-resident. This requirement changed significantly with effect from 31 March 2026: the filing moved from an annual cycle to once every three consecutive financial years, the earlier e-form and web service were merged into a single Form DIR-3 KYC Web, and the due date is 30 June following the relevant third financial year. Any change in mobile number, email or address must still be updated within 30 days. Missing the filing deactivates the DIN, blocking the director from signing any MCA form until it is reactivated on payment of the prescribed fee.",
                iconType: 'clock'
            },
            {
                question: "What is Form ADT-1 and when must a company appoint its auditor?",
                answer: "Every company must have a statutory auditor. The first auditor is appointed by the Board of Directors within 30 days of incorporation, and if the Board fails to do so the members must appoint one within the prescribed further period. Thereafter, auditors are appointed by the shareholders at the Annual General Meeting, normally for a term of five years. Form ADT-1 is the intimation filed with the Registrar recording the appointment, generally within 15 days of the meeting at which the appointment was made. Newly incorporated companies frequently overlook the 30-day appointment window because they have no accounts yet, but the obligation runs from incorporation and a missing auditor blocks the audit and every filing that depends on it.",
                iconType: 'clock'
            },
            {
                question: "Does my company have to file DPT-3 if it has never taken any deposits?",
                answer: "In most cases yes, and this is one of the most commonly missed filings. DPT-3 is not limited to companies that accept public deposits: it is an annual return covering both deposits and money received that is not treated as a deposit. That second category captures very ordinary startup transactions, including unsecured loans from directors, share application money pending allotment, and advances from customers that remain outstanding beyond the prescribed period. A company that has funded itself through a director's loan is therefore usually required to file, even though the founders would not describe it as having taken deposits. The return is filed annually for the position as at the financial year end, with the amounts certified by the auditor where required.",
                iconType: 'document'
            },
            {
                question: "What is Form MSME-1 and when does a company have to file it?",
                answer: "MSME-1 is a half-yearly return in which a company reports amounts still outstanding to suppliers registered as micro or small enterprises where payment has remained unpaid beyond the period prescribed under the MSMED Act, generally 45 days from acceptance. It requires disclosure of the amounts due and the reasons for delay. Two things make this filing important beyond the ROC. Under the MSMED Act, delayed payment attracts compound interest at a penal rate that cannot be claimed as a tax deduction. And under Section 43B(h) of the Income-tax Act, amounts owed to micro and small suppliers beyond the permitted period are only deductible in the year they are actually paid, which can materially increase taxable profit. Collecting supplier Udyam details is therefore a compliance task, not an administrative one.",
                iconType: 'clock'
            },
            {
                question: "Does a private limited company have to hold an Annual General Meeting?",
                answer: "Yes. Every company other than a One Person Company must hold an AGM each year to adopt the audited accounts, appoint or reappoint the auditor and transact other prescribed business. The first AGM must be held within nine months of the end of the first financial year, and subsequent AGMs within six months of the financial year end and no more than fifteen months after the previous AGM. For a company with a 31 March year end, that normally means holding the AGM by 30 September. The AGM date is not merely procedural: it starts the clock for AOC-4 and MGT-7, so delaying the meeting automatically makes those filings late as well.",
                iconType: 'building'
            },
            {
                question: "Is a statutory audit mandatory for a company with no turnover?",
                answer: "Yes. Statutory audit under the Companies Act is mandatory for every company from its first financial year, with no turnover threshold and no exemption for dormant or pre-revenue businesses. This is a frequent source of confusion because the Income-tax Act does have turnover thresholds for a tax audit, and founders assume the same logic applies. It does not: a company with nil revenue must still have its accounts audited by a Chartered Accountant and file them in AOC-4. LLPs are treated differently and only require audit above prescribed turnover or contribution limits, which is one reason LLPs carry lower annual running costs than companies for small operations.",
                iconType: 'building'
            },
            {
                question: "What are the annual compliance requirements for an LLP?",
                answer: "An LLP has two core annual filings. Form 11 is the annual return, covering partners and contribution details, and is due by 30 May for the preceding financial year. Form 8 is the Statement of Account and Solvency, and is due by 30 October. An audit is required only where turnover or partner contribution exceeds the prescribed limits, which is why LLPs are cheaper to maintain than companies at small scale. Designated partners must also complete their DIN KYC. The critical point that catches LLP partners out is the penalty structure: late filing attracts a per-day additional fee that continues to accrue, and because LLP filings are often neglected in low-activity years, the accumulated liability can eventually exceed the cost of running the entity.",
                iconType: 'building'
            },
            {
                question: "What compliance applies to a One Person Company?",
                answer: "An OPC gets some relief but is not exempt. It is not required to hold an Annual General Meeting, and it files the simplified annual return in Form MGT-7A. AOC-4 is filed within 180 days from the close of the financial year rather than being linked to an AGM date. Statutory audit is still mandatory, the sole director must still complete DIR-3 KYC, and DPT-3 and other event-based filings apply as they would to any company. The one item unique to an OPC is the nominee: the nomination must be kept current, and any change of nominee has to be intimated to the Registrar in the prescribed form. Many single founders underestimate this and leave an outdated nominee on record for years.",
                iconType: 'building'
            },
            {
                question: "My company now qualifies as a small company after the new limits: what changes?",
                answer: "The thresholds were raised with effect from 1 December 2025, so a private company qualifies as a small company if its paid-up share capital does not exceed Rs. 10 crore and its turnover for the immediately preceding financial year does not exceed Rs. 100 crore, both conditions being satisfied together. Holding and subsidiary companies, Section 8 companies and companies governed by special Acts remain excluded regardless of size.\n\nThe practical benefits are meaningful: the simplified annual return in MGT-7A, an abridged board's report, a reduced minimum number of board meetings, no requirement for a cash flow statement, no mandatory rotation of auditors, and lower monetary penalties for certain defaults. Because many mid-sized companies newly qualify, it is worth re-testing your status before your next annual filing.",
                iconType: 'building'
            },
            {
                question: "How do I change my company's registered office address?",
                answer: "The procedure depends on how far you are moving. A shift within the same city, town or village needs a board resolution and Form INC-22 with fresh address proof and a No Objection Certificate. A shift to a different city within the same state and the same Registrar's jurisdiction additionally needs a special resolution of the shareholders and Form MGT-14. A shift from one state to another is the most involved: it requires a special resolution, an alteration of the Memorandum, approval from the Regional Director in Form INC-23 after notice to creditors and the existing Registrar, and then filing of the approval. Timelines run from the date of the change, so update the address promptly rather than at the next annual filing.",
                iconType: 'document'
            },
            {
                question: "How do I change my company's name after registration?",
                answer: "A company can change its name, but the process is a formal amendment of the Memorandum, not an administrative update. In outline: reserve the new name through the MCA name reservation facility, pass a board resolution and then a special resolution of the shareholders, file Form MGT-14 for the special resolution, and file Form INC-24 seeking Central Government approval for the change. On approval, a fresh Certificate of Incorporation is issued. The change does not affect the company's identity, so its CIN, PAN and existing contracts and liabilities all continue. What does need updating afterwards is every downstream record: GST registration, bank accounts, licences, statutory registers and letterheads. Check trademark availability before you reserve the name, not after.",
                iconType: 'document'
            },
            {
                question: "How do I add or remove a director in a private limited company?",
                answer: "Both are event-based filings that must be completed within 30 days of the event. To appoint a director, the incoming person needs a DIN and a valid DSC, must provide consent in Form DIR-2 and a declaration of eligibility in Form DIR-8, and the appointment is made by board resolution followed by shareholder approval where required, then filed in Form DIR-12. To remove or record a resignation, the company files DIR-12, and a resigning director may also file Form DIR-11 in their own name, which is worth doing because it independently records the resignation date. Remember that the company must continue to satisfy the minimum director count and the resident director requirement at all times, so plan replacements before an exit takes effect.",
                iconType: 'building'
            },
            {
                question: "How do I increase the authorised share capital of my company?",
                answer: "Authorised capital is the ceiling on the shares your company can issue, so it has to be raised before you can allot shares beyond that limit, which typically arises just as a funding round is closing. The steps are: check that the Articles permit an increase and amend them first if they do not, pass a board resolution and then an ordinary resolution of the shareholders in general meeting to alter the capital clause of the Memorandum, and file Form SH-7 with the Registrar within 30 days along with the prescribed fee and additional stamp duty on the increased amount. Because stamp duty is state-specific and calculated on the increase, this is a real cost, and it is a common reason to avoid over-declaring capital at incorporation.",
                iconType: 'calculator'
            },
            {
                question: "How do I transfer shares in a private limited company?",
                answer: "Shares in a private limited company are transferable but restricted by the Articles, which commonly give existing shareholders a right of first refusal, so the first step is always to read the Articles and follow any pre-emption procedure. The transfer itself is executed on Form SH-4, signed by both transferor and transferee, and must be properly stamped at the applicable rate on the consideration. The instrument, together with the original share certificate, is delivered to the company, the Board approves the transfer, and the company records it in the register of members and endorses or issues share certificates. An unstamped or defectively executed SH-4 is a frequent problem discovered years later during due diligence, when it is far harder to fix.",
                iconType: 'building'
            },
            {
                question: "What is a dormant company and should I apply for dormant status?",
                answer: "Dormant status under Section 455 is a formal recognition that a company is inactive or has been formed only to hold an asset or intellectual property and has no significant accounting transactions. It is applied for in Form MSC-1 after a special resolution, and once granted the company files a simplified annual return in Form MSC-3 instead of the full annual filing set. This is the correct route for a founder who wants to preserve a company name, an IP holding or a licence without running full compliance, and it is far cheaper than letting the company drift into default. It is not, however, a way to escape past defaults, and a dormant company must still be revived formally before it resumes business.",
                iconType: 'shield'
            },
            {
                question: "How do I close a company that is no longer operating?",
                answer: "For a company with no assets, no liabilities and no ongoing operations, voluntary strike-off under Section 248 in Form STK-2 is the usual route and is far simpler than formal winding up. Before applying you generally need to have filed all overdue annual returns and financial statements up to the date operations ceased, closed the bank accounts, settled liabilities, and passed a special resolution, with the application supported by an affidavit, indemnity bond and a statement of accounts. A company that never filed Form INC-20A or never commenced business follows a slightly different path. If a company has already been struck off by the Registrar, restoration is possible only through an appeal to the National Company Law Tribunal within the prescribed period, which is significantly more expensive than closing properly in the first place.",
                iconType: 'shield'
            },
            {
                question: "How many board meetings must a private limited company hold, and how should they be recorded?",
                answer: "The first board meeting must be held within 30 days of incorporation. After that, an ordinary private limited company must hold at least four board meetings in a calendar year with a gap of not more than 120 days between two consecutive meetings. Small companies, One Person Companies with more than one director, and dormant companies get relief: they need to hold at least one meeting in each half of the calendar year, with a minimum gap of 90 days between the two.\n\nNotice of at least seven days is normally required, and meetings can be held by video conferencing for most business. Quorum is two directors or one-third of the total strength, whichever is higher. Minutes must be recorded, entered in the minutes book within the prescribed period, signed and preserved permanently. The common failure is not the meeting itself but the record: companies that reconstruct a year of minutes the night before an audit create documents that do not stand up in diligence or in a dispute.",
                iconType: 'document'
            },
            {
                question: "What statutory registers and records must a company maintain?",
                answer: "Beyond the accounting records, the Companies Act requires a set of registers to be kept, normally at the registered office, and updated as events occur rather than annually. The main ones are the register of members, the register of directors and key managerial personnel along with their shareholding, the register of charges, the register of loans, guarantees, securities and investments, the register of contracts and arrangements in which directors are interested, and the register of share transfers. Alongside these sit the minutes books for board meetings and general meetings, and copies of resolutions.\n\nThese registers are not decorative. They are the primary evidence of who owns the company and who authorised what, they are inspected by the auditor, they are requested in every funding or acquisition due diligence, and failure to maintain them attracts penalties on the company and its officers. Keeping them current takes minutes at the time of each event and days to reconstruct later.",
                iconType: 'document'
            },
            {
                question: "How does a company issue new shares to an investor or a new co-founder?",
                answer: "Issuing new shares, called allotment, is different from transferring existing shares. The company creates fresh shares and receives the money, so the existing shareholders' percentages dilute.\n\nThe usual sequence is: confirm that authorised capital is sufficient and increase it through SH-7 if not; decide the route, typically a rights issue to existing shareholders, a private placement to identified persons, or a preferential allotment; for a private placement, approve a shareholders' resolution and circulate the offer letter in Form PAS-4 to named persons, keeping the record in PAS-5; receive the subscription money only through banking channels into a separate bank account, never in cash; obtain a valuation report from a registered valuer where required; pass the board resolution allotting the shares; file Form PAS-3 with the Registrar within 30 days of allotment; and issue share certificates within two months, paying stamp duty on them.\n\nIf the investor is a non-resident, the inbound funds must also be reported to the Reserve Bank of India within the prescribed timeline. Skipping the offer letter or accepting money before the paperwork is one of the most common defects found later in diligence.",
                iconType: 'chart'
            },
            {
                question: "What is Form MGT-14 and which decisions have to be filed with the Registrar?",
                answer: "MGT-14 is the form through which certain resolutions and agreements are filed with the Registrar, generally within 30 days of passing. It is required for all special resolutions, which are the decisions needing a three-fourths majority, such as altering the Memorandum or Articles, changing the company name, shifting the registered office outside the local limits, changing the objects clause, approving a private placement, or converting the company.\n\nCertain board resolutions passed under Section 179(3), for example borrowing money or making investments, also fall within the filing requirement, although private companies have been given exemption from filing board resolutions of that category, subject to the conditions of the relevant exemption notification. The practical point for founders is timing: MGT-14 is a 30-day filing and is easy to overlook because the decision feels complete once the meeting is over. Late filing attracts additional fees, and an unfiled special resolution can hold up a subsequent form that depends on it, such as INC-24 for a name change.",
                iconType: 'document'
            },
            {
                question: "Does my company have to register a charge when it takes a bank loan?",
                answer: "Yes. Where a company creates a charge on its assets, for example by giving security for a term loan, working capital facility or equipment finance, particulars of the charge must be filed with the Registrar in Form CHG-1 within 30 days of creation. Later periods are available on payment of additional fees, but the outer limits are strict and missing them entirely is difficult to remedy. Modification of a charge is filed the same way, and once the loan is repaid, satisfaction of the charge is filed in Form CHG-4, normally within 30 days.\n\nTwo practical consequences follow. An unregistered charge is not taken into account by a liquidator or other creditors in an insolvency, which is why lenders usually insist on the filing, though the obligation sits with the company. And a satisfied loan whose CHG-4 was never filed leaves a charge showing as open on the MCA record for years, which surfaces awkwardly during due diligence or when applying for a new facility. The company should also maintain its own register of charges in Form CHG-7.",
                iconType: 'clock'
            },
            {
                question: "What is a Significant Beneficial Owner and does my company need to file BEN-2?",
                answer: "The rules on significant beneficial ownership are designed to identify the individual who ultimately controls a company, even where the shares are held through another company, LLP, trust or foreign entity. Broadly, an individual is a significant beneficial owner if, acting alone or together with others, they indirectly hold at least the prescribed percentage of shares, voting rights or rights to distributable dividend, or exercise significant influence or control, with 10 percent being the usual test.\n\nWhere such a person exists, they must declare their interest to the company in Form BEN-1, the company records it in a register in Form BEN-3, and the company files Form BEN-2 with the Registrar within 30 days of receiving the declaration. Companies whose shares are held directly by individuals in their own names typically have nothing to file, which is why many small companies never encounter this. It becomes relevant as soon as a holding company, an LLP, a trust or an overseas entity appears on the cap table, and non-compliance carries penalties on both the individual and the company.",
                iconType: 'building'
            },
            {
                question: "What happens if my auditor resigns, and how do I change auditors?",
                answer: "Auditors are normally appointed for a term of five years, so a mid-term change is treated as an exception rather than routine.\n\nIf the auditor resigns, they must file Form ADT-3 with the Registrar within 30 days stating the reasons. The resulting casual vacancy is filled by the Board within 30 days, and where the vacancy arose from resignation, the appointment must also be approved by the members within three months. The new appointment is intimated in Form ADT-1.\n\nRemoving an auditor before the end of their term is deliberately harder: it requires prior approval of the Central Government through Form ADT-2, followed by a special resolution of the members, and the outgoing auditor must be given an opportunity to be heard. In practice most changes happen by mutual agreement at the end of a term or through resignation. One point worth noting for founders: an auditor's resignation with adverse reasons is publicly visible on the MCA record and is read carefully by investors and lenders.",
                iconType: 'building'
            },
            {
                question: "How do I change my company's business activity or add new objects?",
                answer: "A company can only carry on the activities permitted by the objects clause of its Memorandum, so a genuine change of business needs a formal amendment rather than a note in the accounts. The steps are: pass a board resolution approving the proposed alteration, convene a general meeting and pass a special resolution altering the objects clause, and file Form MGT-14 with the Registrar within 30 days along with the altered Memorandum. Additional requirements apply where a company has raised money from the public and has not fully utilised it.\n\nAlongside the ROC filing, remember the downstream updates: the business activity code in your ROC and income tax filings, the list of goods and services on your GST registration, any sectoral licence or registration the new activity requires, and your bank's records. Founders often discover the problem the other way round, when a bank or a client asks why the company's stated objects do not cover the service being invoiced.",
                iconType: 'building'
            },
            {
                question: "What is director disqualification and can it be reversed?",
                answer: "Disqualification stops a person from being appointed or reappointed as a director. The most common route is Section 164(2), which catches directors of a company that has failed to file its financial statements or annual returns for three consecutive financial years; the disqualification lasts five years and applies to the individual across every company, not only the defaulting one. Other grounds under Section 164(1) include being of unsound mind, being an undischarged insolvent, or conviction for certain offences. Disqualified directors typically find their DIN deactivated and are unable to sign any MCA form.\n\nRemedies are limited and slow. Where the Registrar has published a list of disqualified directors, affected persons have historically challenged it before the High Court, and the MCA has from time to time notified schemes allowing defaulting companies to regularise filings. A director who has resigned from the defaulting company before the default period should ensure DIR-11 and DIR-12 records are accurate, as an incorrect record is a frequent cause of wrongful inclusion. The realistic protection is preventive: never leave a dormant or abandoned company unfiled, because it silently endangers every other directorship you hold.",
                iconType: 'shield'
            }
        ]
    },
    {
        id: "accounting",
        label: "Accounting",
        items: [
            {
                question: "What is the difference between bookkeeping and accounting?",
                answer: "Bookkeeping is the disciplined recording of transactions as they happen: entering sales and purchase invoices, recording receipts and payments, reconciling the bank, and keeping supporting documents filed. Accounting sits on top of that and turns the recorded data into meaning: applying the correct treatment to each item, computing depreciation and provisions, preparing financial statements, and interpreting what the numbers say about the business. In practice most small Indian businesses need both, and outsourced accounting services usually bundle them, with monthly bookkeeping feeding into periodic reporting and year-end financials. The distinction matters when you are hiring: a bookkeeper keeps the records clean, but you still need a qualified accountant to close the books and sign off.",
                iconType: 'chart'
            },
            {
                question: "Is a business legally required to maintain books of accounts, and for how long?",
                answer: "Yes, and under more than one law. Every company must keep proper books of accounts on an accrual basis and double entry system under Section 128 of the Companies Act, 2013, at its registered office, and preserve them together with supporting vouchers for at least eight financial years. The Income-tax Act separately requires books to be maintained once income or turnover crosses prescribed limits, with its own retention period. GST law requires registered persons to keep prescribed records for a specified number of years from the due date of the annual return. The practical implication is that the longest applicable period governs, so a business should plan on retaining records for at least eight years, in a form that can actually be retrieved during an assessment.",
                iconType: 'clock'
            },
            {
                question: "What is included in monthly outsourced accounting services?",
                answer: "A typical monthly engagement covers the recurring cycle a business cannot afford to fall behind on:\n\n• Recording sales, purchases, expenses, receipts and payments in the accounting software.\n• Bank and credit card reconciliation.\n• Accounts receivable and accounts payable tracking, with an ageing summary.\n• GST workings and reconciliation of purchase records against GSTR-2B, plus return filing where included.\n• TDS computation, payment support and quarterly return filing.\n• Payroll processing and related statutory workings.\n• Monthly management reports covering profit and loss, cash position and key ratios.\n\nScope varies considerably between providers, so ask specifically whether GST and TDS filings, payroll and year-end financials are inside or outside the monthly fee. Your Professionals offers accounting alongside GST and ROC compliance, which avoids the reconciliation gaps that appear when different firms handle the books and the returns.",
                iconType: 'chart'
            },
            {
                question: "Should I hire an in-house accountant or outsource my accounting?",
                answer: "The honest comparison is not cost alone but coverage and continuity. An in-house accountant gives you daily availability, immediate context on your business and direct control, which matters once transaction volume is high or you need someone on site handling cash, inventory or collections. Outsourcing gives you a team rather than an individual, so leave and attrition do not stall your filings, and you get access to qualified review at a fraction of a full-time senior salary. The usual failure mode of in-house-only is that a single junior accountant handles books, GST and TDS without supervision and errors surface at audit. The usual failure mode of outsourcing is poor document flow. Many growing businesses end up with a hybrid: an in-house executive for daily entries, with an outsourced firm reviewing, reconciling and filing.",
                iconType: 'chart'
            },
            {
                question: "How much do accounting services cost for a small business in India?",
                answer: "Fees vary widely because the work does. Rather than comparing headline prices, compare what drives them: monthly transaction volume, the number of bank accounts and payment gateways to reconcile, whether you are GST registered and in how many states, whether payroll and TDS are included, whether the engagement covers only bookkeeping or also return filing and year-end financials, and whether statutory audit support is inside scope. Two quotes that look far apart are often quoting different scopes. Ask for a written scope note listing exactly which filings are included, what the turnaround commitment is, who reviews the work, and what happens if volumes increase. That comparison is far more useful than a per-month figure.",
                iconType: 'calculator'
            },
            {
                question: "What are financial statements and what does each one tell me?",
                answer: "Three statements answer three different questions. The Profit and Loss account covers a period and tells you whether the business made money: revenue less expenses equals profit. The Balance Sheet is a snapshot on one date and tells you what the business owns and owes: assets on one side, liabilities and shareholders' funds on the other. The Cash Flow Statement reconciles the two by showing where cash actually came from and went, split between operating, investing and financing activities. The reason founders need all three is that a business can be profitable and still run out of cash, typically because customers pay slowly while salaries, GST and vendor payments do not wait. Profit is an opinion; cash is a fact.",
                iconType: 'chart'
            },
            {
                question: "What is bank reconciliation and how often should it be done?",
                answer: "Bank reconciliation is the process of matching every transaction in your books against the bank statement and explaining each difference, whether it is a cheque not yet cleared, a payment gateway settlement in transit, bank charges not yet recorded, or an entry recorded twice. It should be done monthly at minimum, and weekly for businesses with high payment volumes or multiple gateways. The reason it matters is that an unreconciled bank account makes every downstream number unreliable: your reported profit, your GST liability and your cash position all depend on it. It is also the control that most reliably catches fraud, duplicate payments and gateway shortfalls, which is why auditors examine reconciliations closely.",
                iconType: 'clock'
            },
            {
                question: "What is GST reconciliation, and can it be outsourced together with my accounting?",
                answer: "GST reconciliation is the matching of three sets of data: your books, the returns you filed, and what your suppliers reported about you on the GST portal. The critical exercise is comparing purchase records against the auto-generated GSTR-2B, because input tax credit is only safely available where the supplier has actually reported the invoice. Sales reconciliation matters equally, since figures reported in GSTR-1 now flow into GSTR-3B without the ability to edit them there. Yes, it can and arguably should be outsourced together with accounting, because the reconciliation depends on the same purchase and sales ledgers your bookkeeper maintains. Splitting bookkeeping and GST filing between two firms is the most common cause of unclaimed credit and mismatch notices.",
                iconType: 'chart'
            },
            {
                question: "Which accounting software should an Indian small business use?",
                answer: "Rather than a single answer, judge software against your actual requirements: does it handle GST-compliant invoicing and return-ready reports, does it support e-invoicing if you are covered by that mandate, can it produce a proper trial balance and financial statements, does it integrate with your bank and payment gateways, and can your accountant and auditor access it easily. Desktop packages remain widespread in India and are well understood by accountants and auditors. Cloud accounting adds automatic backups, multi-user access from anywhere and easier collaboration with an outsourced team, which is why it suits distributed startups. The genuine risk with cloud tools is not security, which is generally strong, but data ownership: confirm you can export your complete data if you change provider.",
                iconType: 'chart'
            },
            {
                question: "What are MIS reports and why should a founder review them monthly?",
                answer: "MIS reports are the internal management reports that translate accounting data into decisions. Unlike statutory financial statements, which are prepared once a year in a prescribed format, MIS is built for the business and typically covers revenue by product, customer or channel, gross margin, fixed cost trend, cash and runway, receivables ageing, and progress against budget. Reviewing them monthly changes behaviour: it surfaces a slipping collection cycle, a customer quietly becoming loss-making, or a cost line growing faster than revenue, while there is still time to act. Waiting for the annual audited accounts means seeing problems eighteen months after they started. Most outsourced accounting engagements can include a monthly MIS pack if you ask for it at the outset.",
                iconType: 'chart'
            },
            {
                question: "When should a startup hire an accountant or outsource bookkeeping?",
                answer: "Earlier than most founders think, but the trigger points are specific. Bring in professional help when any of these happen: you incorporate a company, because statutory audit and ROC filings begin immediately; you register for GST, because monthly returns start and errors compound; you hire your first employee, because payroll, TDS and provident fund obligations attach; you start raising money, because investors will diligence your books and cap table; or you find yourself spending more than a few hours a month on data entry instead of the business. The costly pattern is delaying until the first notice arrives, because cleaning up two years of unrecorded transactions and unreconciled GST invariably costs more than maintaining them would have.",
                iconType: 'clock'
            },
            {
                question: "How should I account for expenses I paid personally for my business?",
                answer: "Once you incorporate, the company is a separate legal person and its money is not yours. Expenses you pay personally should be recorded properly rather than ignored: keep the invoice in the company's name wherever possible, record the expense in the company's books, and show the amount owed back to you either as a reimbursement payable or as an unsecured loan from a director. Both routes are legitimate, but they have consequences: a director's loan generally has to be reported in the company's annual DPT-3 filing, and reimbursements need supporting bills to survive scrutiny. What causes real damage is the opposite habit, paying personal costs from the company account, which produces disallowed expenses in assessment and messy audit qualifications.",
                iconType: 'calculator'
            },
            {
                question: "What does payroll processing involve for a small Indian company?",
                answer: "Payroll is far more than transferring salaries. Each cycle involves computing gross to net pay with the correct treatment of allowances and reimbursements, deducting and depositing TDS on salary and issuing Form 16 annually, and administering statutory contributions where applicable, principally provident fund and employee state insurance, each of which becomes applicable once you cross the prescribed employee count. Profession tax applies in some states and is deducted and paid at state-specific rates. Each of these has its own monthly deposit date and periodic return. Because the thresholds are headcount-based, fast-growing startups often become liable mid-year without noticing, and back-dated provident fund liability with interest and damages is expensive to correct.",
                iconType: 'calculator'
            },
            {
                question: "How should TDS be recorded and tracked in my books?",
                answer: "There are two directions and businesses routinely confuse them. TDS you deduct from vendors, contractors and employees is a liability: it is not your money, it sits in a payable ledger and must be deposited by the monthly due date and reported quarterly. TDS deducted by your customers from payments to you is an asset: it is tax already paid on your behalf and should be tracked as a receivable, then claimed against your final tax liability. The control that matters here is reconciling that receivable against Form 26AS and the annual information statement, because if a customer deducted but never deposited or reported it correctly, you cannot claim the credit. Catching that within the year gives you time to have the customer correct their return.",
                iconType: 'document'
            },
            {
                question: "How should an e-commerce seller handle accounting and reconciliation?",
                answer: "E-commerce accounting is harder than it looks because the money you receive is not the money you earned. A marketplace settles a net amount after deducting commission, fulfilment and shipping charges, payment gateway fees, returns and tax collected at source, so booking the settlement figure as revenue understates both sales and expenses and produces a GST mismatch. The correct approach is to account for gross sales, record each deduction as a separate expense, and reconcile the settlement report to the bank credit line by line. Returns and cancellations need to be tracked through credit notes, and TCS deducted by the operator has to be matched to the credit reflected on the GST portal. Multi-state warehousing adds separate GST registrations and stock transfer documentation.",
                iconType: 'chart'
            },
            {
                question: "Do freelancers need to maintain books of accounts in India?",
                answer: "It depends on income level and the scheme you choose. Once gross receipts or income cross the thresholds in Section 44AA, maintaining books becomes mandatory, and specified professionals face stricter requirements. Many freelancers instead opt for presumptive taxation under Section 44ADA, which lets eligible professionals declare a prescribed percentage of gross receipts as income without maintaining detailed books or undergoing a tax audit, provided receipts stay within the prescribed ceiling. Even where books are not strictly required, keeping a simple record of invoices raised, payments received, TDS deducted by clients and business expenses is worth doing: it supports your return if questioned, helps you reconcile Form 26AS, and is usually required when applying for a loan or visa.",
                iconType: 'building'
            },
            {
                question: "What is year-end closing and what will my accountant need from me?",
                answer: "Year-end closing is the process of finalising the books for the financial year so that financial statements can be prepared and audited. Expect your accountant to ask for bank statements and confirmations for every account as at 31 March, closing stock valuation, a list of receivables and payables with ageing, fixed asset additions and disposals with invoices, loan statements and interest certificates, details of any expenses paid personally by directors, and copies of GST and TDS returns filed during the year. They will then record depreciation, provisions, prepaid and outstanding expenses, and reconcile GST and TDS to the books. Starting this in April rather than August is the single biggest determinant of whether your audit, ROC filings and income tax return all land on time.",
                iconType: 'building'
            },
            {
                question: "What are the most common accounting mistakes small businesses in India make?",
                answer: "The recurring ones are strikingly consistent across industries:\n\n• Mixing personal and business transactions in one account, which makes reconciliation and assessment defence far harder.\n• Treating GST collected as revenue and spending it, then facing a cash shortfall at the return due date.\n• Never reconciling purchase records against GSTR-2B, and quietly losing input tax credit.\n• Recording only the net amount received from payment gateways and marketplaces instead of gross sales less charges.\n• Failing to deduct TDS on payments such as rent, professional fees and contractor bills, resulting in disallowed expenses.\n• Doing the entire year's bookkeeping in the last quarter, when supporting documents are already missing.\n\nNone of these are complicated to fix in advance; all of them are expensive to fix afterwards.",
                iconType: 'shield'
            },
            {
                question: "What is a virtual CFO and does my business need one?",
                answer: "A virtual CFO is a senior finance professional engaged part-time to do what a full-time CFO would, without the cost of one. The work is forward-looking rather than record-keeping: budgeting and forecasting, cash flow and runway planning, pricing and margin analysis, structuring for a funding round, investor and board reporting, and putting internal financial controls in place. It is distinct from bookkeeping and from statutory audit. The typical trigger is a business that has outgrown its accountant but cannot justify a full-time CFO, commonly when preparing to raise capital, when managing multiple entities or states, or when revenue has grown faster than financial discipline. If your questions have shifted from what did we earn to what should we do next, that is the signal.",
                iconType: 'chart'
            },
            {
                question: "What is the difference between cash and accrual accounting, and which one must my business follow?",
                answer: "Under cash accounting you record income when money is received and expenses when they are paid. Under accrual accounting you record income when it is earned and expenses when they are incurred, regardless of when cash moves. The difference is not academic: a business that invoices Rs. 10 lakh in March and collects in May shows very different results under the two methods.\n\nCompanies do not have a choice. Section 128 of the Companies Act requires books to be kept on the accrual basis and the double entry system. Under the Income-tax Act, businesses and professionals other than companies may follow either the cash or the mercantile system, provided it is applied consistently, and switching methods without good reason invites questions. GST works on its own rules of time of supply, so your GST liability can arise before you have been paid.\n\nFor any business with credit sales, staff or inventory, accrual accounting is the only method that shows the real position, which is why lenders and investors ask for accrual financials even from businesses that keep cash records internally.",
                iconType: 'chart'
            },
            {
                question: "How do I keep track of cash flow and know how long my money will last?",
                answer: "Profit and cash are different things, and businesses usually fail on cash. Three simple practices cover most of the risk.\n\nFirst, maintain a short rolling forecast, typically the next 12 or 13 weeks, listing expected collections week by week against known outflows: salaries, rent, vendor payments, EMIs, GST, TDS and advance tax instalments. Statutory payments are the ones most often forgotten because they are not invoiced to you.\n\nSecond, track net monthly burn, which is cash out minus cash in, and divide your available cash by it to get runway in months. Watching runway monthly changes decisions earlier than watching the bank balance.\n\nThird, attack the collection cycle rather than the cost base first. Invoicing on the day of delivery, agreeing payment terms in writing, and following up at 7 and 30 days usually releases more cash than expense cuts. If your customers are large corporates on 60 to 90 day terms while your suppliers expect 30, that gap is a funding requirement and should be planned for, not discovered.",
                iconType: 'clock'
            },
            {
                question: "What is a chart of accounts and why does it matter for a small business?",
                answer: "The chart of accounts is the list of ledgers into which every transaction is recorded: sales lines, expense heads, assets, liabilities, taxes and capital. It is the structure that decides what your reports can tell you.\n\nA chart designed carelessly produces reports nobody can act on, typically because half the spending sits in a head called miscellaneous expenses. A chart designed well lets you see revenue split by product, channel or geography, separate direct costs from overheads so gross margin is visible, isolate marketing spend by activity, and keep statutory ledgers such as GST payable, GST input, TDS payable and TDS receivable clean and reconcilable.\n\nTwo design points save real trouble later. Keep separate ledgers for each tax and each direction of tax, because merged tax ledgers make GST and TDS reconciliation extremely painful. And avoid endless granularity, since fifty expense heads that nobody reviews are worse than fifteen that get looked at monthly. Set the structure up correctly at the start; restructuring a chart of accounts mid-year makes year-on-year comparison difficult.",
                iconType: 'building'
            },
            {
                question: "How should a business handle inventory and stock valuation?",
                answer: "If you buy or make goods, inventory is usually the largest number on your balance sheet that nobody verifies until the auditor asks. Two systems are used. A perpetual system updates stock with every purchase and sale, giving live quantities and requiring disciplined data entry. A periodic system relies on a physical count at the end of the period to derive consumption. Growing product businesses tend to move to a perpetual system once volumes make counting impractical.\n\nValuation follows a consistent cost formula, usually first-in-first-out or weighted average, and closing stock is generally carried at the lower of cost and net realisable value, so damaged, obsolete or unsellable stock has to be written down rather than carried at cost. Cost includes freight and duties that bring the goods to their present location, but not GST that you have claimed as input credit.\n\nPractical controls matter as much as the method: a physical count at year end with a reconciliation to the books, documentation for stock transferred between your own warehouses in other states, including the e-way bill, and separate tracking for goods lying with job workers or in marketplace fulfilment centres.",
                iconType: 'calculator'
            },
            {
                question: "How do I manage receivables and reduce late payments from customers?",
                answer: "Start with visibility. An ageing report grouping outstanding invoices into current, 30, 60, 90 and over 90 days tells you where the money is stuck and which customers are drifting. Without it, follow-up is driven by whoever shouts loudest.\n\nThe controls that work are unglamorous. Agree credit terms in writing before delivery rather than assuming them. Invoice on the day of dispatch or completion, since a late invoice guarantees a late payment. Send a statement of account monthly. Set an internal escalation rhythm, for example a reminder at 7 days, a call at 30, a stop on further supply at 60. For larger customers, confirm their invoice submission process, because most delays in corporate accounts payable start with an invoice that never entered the system.\n\nTwo further points. If your customer is a company and you are a registered micro or small enterprise, the MSMED Act gives you a statutory right to interest on payment delayed beyond the prescribed period, and the customer must report the outstanding amount in Form MSME-1. And genuinely irrecoverable debts should be written off in the books rather than carried indefinitely, since the deduction under the Income-tax Act generally depends on the write-off actually being made.",
                iconType: 'shield'
            },
            {
                question: "How are fixed assets and depreciation recorded, and why do two different figures appear?",
                answer: "A fixed asset is something bought for long-term use, such as equipment, computers, furniture or vehicles, and its cost is capitalised and written off over its useful life instead of being charged to the profit and loss account in one go. Cost includes freight, installation and any duty that is not recoverable as input credit.\n\nThe reason two depreciation figures appear is that two laws compute it differently. For the financial statements, depreciation is charged over the useful life of the asset in the manner prescribed under Schedule II of the Companies Act. For income tax, depreciation is computed on the written down value of a block of assets at the rates prescribed under the Income-tax Act, with a well-known practical rule that an asset put to use for less than 180 days in the year gets only half the year's depreciation. So book depreciation and tax depreciation legitimately differ, and the difference is reconciled in the tax computation.\n\nThe record that holds this together is a fixed asset register listing each asset, its date of purchase, cost, location, depreciation and disposal. Businesses that do not keep one struggle at audit and end up carrying assets they scrapped years ago.",
                iconType: 'calculator'
            },
            {
                question: "What bills and documents do I need to keep, and are digital copies enough?",
                answer: "Keep everything that supports a number in your books: sales invoices issued, purchase invoices and expense bills in the business's name, bank and credit card statements, payment proofs, contracts and purchase orders, delivery challans and e-way bills, payroll records, loan and interest certificates, TDS challans and certificates, and copies of every return filed. The recurring problem is not missing bills for large purchases but the accumulation of small unsupported expenses, which are the first thing disallowed in an assessment.\n\nDigital records are acceptable. The Companies Act permits books to be maintained in electronic form subject to conditions including that the records remain accessible in India, are retained in their original format and are backed up, and GST law likewise contemplates electronic record-keeping. A scanned or emailed invoice is fine, provided it is complete, legible and retained for the required period.\n\nTwo habits make audits and assessments far easier: insist that vendors raise the invoice in the company's name and with its GSTIN, because an invoice in a director's personal name generally cannot support either the expense deduction or the input tax credit; and file documents month by month rather than in one annual scramble.",
                iconType: 'document'
            },
            {
                question: "What is the difference between statutory audit, tax audit and internal audit?",
                answer: "They have different triggers, different auditors and different purposes.\n\nStatutory audit is required under the Companies Act for every company from its first financial year, regardless of turnover. It is conducted by a Chartered Accountant appointed by the shareholders, and the audited accounts are filed with the Registrar in AOC-4.\n\nTax audit is required under Section 44AB of the Income-tax Act only when turnover or gross receipts cross the prescribed thresholds, or where a presumptive scheme has been opted out of and income is declared below the prescribed rate. It results in a report in the prescribed form filed with the income tax department, and it applies to proprietorships, firms and LLPs as well as companies.\n\nInternal audit is a management-oriented review of processes and controls. It is mandatory only for prescribed classes of companies, based on thresholds of turnover, borrowings, paid-up capital or deposits, and it is voluntary for everyone else, though many growing businesses adopt it once cash handling, inventory or multi-location operations create control risk.\n\nA single company can be subject to all three at once, which is why founders should not assume that clearing one audit closes the others.",
                iconType: 'calculator'
            },
            {
                question: "How do I account for invoices and payments in foreign currency?",
                answer: "You may invoice an overseas client in foreign currency, but your books are maintained in rupees, so every transaction has to be converted. The invoice is recorded at the exchange rate on the transaction date. When payment is received later at a different rate, the difference is booked as a foreign exchange gain or loss rather than adjusted against revenue. Balances still outstanding at the year end are restated at the closing rate, which produces an unrealised gain or loss.\n\nBank charges and the difference between the contracted rate and the rate the bank actually applies should be recorded as an expense, not netted off silently against income, otherwise your revenue figure will not agree with your GST returns.\n\nOn documentation, export of services is zero-rated under GST only where the prescribed conditions are met, including receipt of payment in convertible foreign exchange, so retain the foreign inward remittance advice or certificate for each receipt. If you export under a Letter of Undertaking, remember it has to be renewed each financial year. Where TDS has been deducted overseas, keep the withholding certificate, as foreign tax credit claims require supporting evidence and a separate filing.",
                iconType: 'globe'
            },
            {
                question: "What financial records will investors or banks ask for during due diligence?",
                answer: "Assume everything will be checked against an external source. A typical request list covers audited financial statements for the last two or three years, the trial balance and ledgers for the current year, bank statements for all accounts, income tax returns with computations, GST returns with reconciliations, TDS returns and challans, ROC filings and statutory registers, the cap table with share certificates and Form PAS-3 or SH-4 records, key customer and vendor contracts, employment agreements, loan documents and any tax or regulatory notices with their status.\n\nWhat causes deals to slow down is rarely a weak number. It is inconsistency: revenue in the financials that does not agree with GST returns, cash sales with no supporting documentation, related party transactions that were never disclosed, share allotments made without the proper resolutions, or a charge showing as open on the MCA record long after the loan was repaid.\n\nThe practical takeaway is that diligence readiness is a by-product of monthly discipline. A business that reconciles bank, GST and TDS every month and files its ROC forms on time can produce a data room in days; one that does not spends months and a great deal of professional fees reconstructing it.",
                iconType: 'chart'
            },
            {
                question: "How should petty cash and employee expense reimbursements be handled?",
                answer: "Small cash spending is where controls usually break first, so keep it deliberately boring. Maintain an imprest system: a fixed float held by one named person, with every payment supported by a voucher and a bill, and the float topped back up to the same amount when reimbursed. That way the cash on hand plus the vouchers should always equal the float, and a shortfall is visible immediately.\n\nFor employee claims, set a simple written policy covering what can be claimed, what evidence is needed, a submission deadline each month, and who approves. Reimbursements of actual business expenses supported by bills are generally not treated as salary income of the employee, whereas fixed allowances paid without any bill usually are, so the documentation affects the employee's tax as well as the company's deduction.\n\nTwo limits are worth remembering. Cash payments to a single person in a single day above the prescribed limit under the Income-tax Act are disallowed as a deduction, so large vendor payments should never be settled in cash. And expenses paid personally by a director should be routed through a reimbursement or director's loan account, since a director's loan feeds into the company's annual DPT-3 filing.",
                iconType: 'calculator'
            }
        ]
    },
    {
        id: "trademark-ipr",
        label: "Trademark & IPR",
        items: [
            {
                question: "What is trademark registration and why does a business need it?",
                answer: "A trademark is any mark that distinguishes your goods or services from someone else's: a brand name, logo, tagline, or a combination of these. Registration under the Trade Marks Act, 1999 gives you a statutory, exclusive right to use that mark for the goods and services you registered it for, across India. Without registration you are limited to a passing-off action, which requires you to first prove reputation and goodwill in court, a slower and far more expensive route. Registration also gives you something to license, assign or value as an asset, and it is routinely checked during investor due diligence and by e-commerce marketplaces running brand-protection programmes.",
                iconType: 'building'
            },
            {
                question: "How do I register a trademark in India?",
                answer: "The process is handled by the Trade Marks Registry under IP India and runs roughly as follows:\n\n• Conduct a search of the trademark register for identical and similar marks in the relevant class.\n• Identify the correct class or classes, and the applicant category, since fees differ.\n• File Form TM-A online with the mark, applicant details, description of goods or services, date of first use if already in use, and Form TM-48 authorising your agent.\n• The Registry conducts a formality check and then examination, issuing an examination report if it raises objections.\n• Reply to the examination report within the prescribed period, and attend a hearing if required.\n• If accepted, the mark is advertised in the Trade Marks Journal and remains open to opposition for the prescribed period.\n• If unopposed, or if opposition is decided in your favour, the registration certificate is issued.\n\nYou can use the TM symbol from the date of application; the ® symbol may only be used once registration is granted.",
                iconType: 'document'
            },
            {
                question: "How much does trademark registration cost in India?",
                answer: "Government fees are fixed by the First Schedule to the Trade Marks Rules, 2017 and are charged per class, per mark. For e-filing, the fee is Rs. 4,500 per class for individuals, sole proprietors, DPIIT-recognised startups and Udyam-registered small enterprises, and Rs. 9,000 per class for companies, LLPs and other applicants that do not qualify for the concession. Physical filing costs more. Two things drive the total beyond this: the number of classes you file in, since each is charged separately, and professional fees for search, drafting and prosecution. Note that to claim the concessional rate you must submit a valid Udyam or DPIIT certificate at the time of filing, and the concession applies to the application, not to renewal.",
                iconType: 'calculator'
            },
            {
                question: "How long does trademark registration take in India?",
                answer: "A straightforward application that attracts no objection and no opposition commonly takes somewhere in the region of a year to eighteen months to reach registration, though timelines vary considerably with Registry workload. If an examination report is issued, or if a third party files opposition, the process can extend well beyond that. What matters commercially is that you do not have to wait for registration to get protection in practice: your priority dates from the filing date, and you may use the TM symbol as soon as the application is filed. The ® symbol may only be used after the certificate is granted, and using it prematurely is an offence under the Act.",
                iconType: 'clock'
            },
            {
                question: "What documents are required for trademark registration?",
                answer: "The core set is short. You need a clear representation of the mark, usually a high-resolution image if it includes a logo or stylised text. You need identity and address proof of the applicant, and for a company or LLP the incorporation certificate. You need Form TM-48, the power of attorney authorising your trademark agent or attorney to act. If you are claiming the concessional fee slab, you need the Udyam registration certificate or DPIIT recognition certificate. And if the mark is already in use, you need evidence supporting the claimed date of first use, typically an affidavit accompanied by dated invoices, advertising material or packaging, because an unsupported use claim can be challenged later.",
                iconType: 'document'
            },
            {
                question: "How do I check whether my brand name is available before applying?",
                answer: "IP India provides a free public search facility on its website where you can search the register by wordmark, by Vienna code for device marks, and by class. A useful search goes beyond exact matches. Marks are refused for being deceptively similar, so you need to check phonetic equivalents, common misspellings, translations and marks that differ only by a generic suffix. You should also search the MCA company and LLP name database and check domain and marketplace availability, because a brand name that is legally registrable but already occupied commercially is still a problem. A professional search additionally interprets whether an existing similar mark is genuinely blocking, which the raw database will not tell you.",
                iconType: 'document'
            },
            {
                question: "What are trademark classes and how do I choose the right one?",
                answer: "Trademarks are registered for specified goods or services grouped into 45 classes under the Nice Classification, with classes 1 to 34 covering goods and 35 to 45 covering services. Protection is limited to the classes you file in, so the choice directly determines how much of your business is actually protected. Fees are charged per class, which creates a real trade-off between cost and coverage. The most expensive mistake is filing in a class that does not match your actual activity, for example registering a software product under a goods class when the offering is delivered as a service. Note that the Nice Classification moved to its 13th edition with effect from 1 January 2026, which reorganised certain headings, so confirm current classification rather than relying on older guidance.",
                iconType: 'building'
            },
            {
                question: "Can I register my brand name, logo and tagline separately?",
                answer: "Yes, and the distinction matters. A wordmark registers the name itself in plain text, protecting it regardless of font, colour or styling, which gives the broadest protection for the name. A device mark registers the logo as a visual composition; if the logo includes the name, protection attaches to that overall combination rather than to the words alone. A tagline can be registered if it is distinctive rather than purely descriptive or laudatory. Because each is a separate application with its own fee, growing brands often file the wordmark first, since it is the most flexible protection, then add the logo once the visual identity has settled. Rebranding after registering only a logo means starting again.",
                iconType: 'calculator'
            },
            {
                question: "What happens if my trademark application receives an objection?",
                answer: "An objection is not a rejection. The Registry issues an examination report setting out its grounds, and you get a prescribed period, generally 30 days, to reply. Objections usually fall under one of two headings. Section 9 raises absolute grounds, meaning the mark is considered descriptive, generic, non-distinctive or otherwise incapable of distinguishing your goods. Section 11 raises relative grounds, meaning it conflicts with an earlier identical or similar mark. A reply typically argues distinctiveness, distinguishes the cited marks on the goods, channels of trade or overall impression, and where the mark is already in use, files evidence of acquired distinctiveness. If the reply does not satisfy the examiner, a hearing follows. Missing the reply deadline can result in the application being treated as abandoned, so this stage is time-critical.",
                iconType: 'shield'
            },
            {
                question: "What is trademark opposition and what happens if someone opposes my mark?",
                answer: "Once your application is accepted it is advertised in the Trade Marks Journal, and any third party may file a notice of opposition within the prescribed period. Opposition is an adversarial proceeding, not an administrative query. You must file a counter statement within the prescribed time, failing which the application is deemed abandoned, and both sides then file evidence by affidavit before a hearing. Oppositions are most often filed by proprietors of similar earlier marks, sometimes strategically by competitors. Two practical points: a thorough pre-filing search substantially reduces the risk of opposition, and many oppositions settle through a negotiated coexistence or limitation of the goods specification rather than being fought to a decision.",
                iconType: 'shield'
            },
            {
                question: "How long is a trademark valid and how do I renew it?",
                answer: "A registered trademark is valid for ten years from the date of application and can be renewed indefinitely for successive ten-year periods, which makes it one of the few intellectual property rights that need never expire. Renewal is applied for within the prescribed window before expiry, and the renewal fee is charged per class. Two points cause avoidable losses. The concessional fee slab available to individuals, startups and small enterprises applies to the initial application, not to renewal, so budget for the standard rate. And if you miss the deadline, the mark can be removed from the register, with restoration available only within a limited further period on payment of a surcharge. Diarise renewal dates independently of your agent's reminders.",
                iconType: 'clock'
            },
            {
                question: "Can I sell or transfer my trademark to someone else?",
                answer: "Yes. A trademark is a transferable asset and can be assigned with the goodwill of the business or, in limited circumstances, without it. Assignment is effected by a written agreement and then recorded with the Registrar in the prescribed form so the register reflects the new proprietor; until it is recorded, the transfer is not effective against third parties and the assignee may struggle to enforce the mark. A trademark can alternatively be licensed, allowing another party to use it while ownership stays with you, and registering the licensee as a permitted user protects the mark from vulnerability on grounds of non-use by the proprietor. This becomes relevant in franchising, group restructuring and when a founder-held mark needs to be moved into the operating company before a funding round.",
                iconType: 'building'
            },
            {
                question: "What is trademark infringement and what can I do if someone copies my brand?",
                answer: "Infringement is the unauthorised use of a mark identical or deceptively similar to your registered mark in relation to similar goods or services, in a way likely to cause confusion. Remedies include a civil suit seeking an injunction to stop the use, damages or an account of profits, and delivery up of infringing material; the Act also provides criminal remedies for falsification of marks. In practice, most matters begin with a cease and desist notice, which resolves a large share of disputes without litigation, and with takedown complaints to e-commerce marketplaces and domain registrars, which act quickly on registered rights. If your mark is unregistered you are limited to a passing-off action, which requires proving reputation, misrepresentation and damage, and that is precisely why registration is worth doing early.",
                iconType: 'shield'
            },
            {
                question: "Is my company name automatically protected as a trademark?",
                answer: "No, and this is one of the most consequential misunderstandings founders have. MCA name approval only means no other company or LLP is registered with a closely similar name; it grants no exclusive right to use that name as a brand. Someone else can hold, or later obtain, a trademark for the same name and legally require you to stop using it commercially, even though your incorporation certificate remains valid. The reverse is also true: a registered trademark owner can object to a company name that infringes their mark. The practical sequence is therefore to check the trademark register before you finalise a company name, and to file a trademark application for the brand rather than assuming incorporation has covered it.",
                iconType: 'shield'
            },
            {
                question: "Does owning the domain name protect my brand?",
                answer: "No. Registering a domain is a contractual arrangement with a registrar on a first-come basis; it gives you the right to use that web address, not exclusive rights in the name itself. A party holding a registered trademark for the same name can pursue action against a confusingly similar domain, including through domain dispute resolution procedures, and can also object to your use of the name in trade. Conversely, holding the domain gives you little leverage against someone who registers the trademark. For an online-first brand the sensible order is to check the trademark register first, then secure the domain and social handles, then file the trademark application, so that the name you have invested in marketing is one you can actually keep.",
                iconType: 'globe'
            },
            {
                question: "What is the difference between a trademark, copyright, patent and design registration?",
                answer: "Each protects a different thing, and a single business often needs more than one:\n\n• Trademark protects brand identifiers such as names, logos and taglines, under the Trade Marks Act, 1999, renewable indefinitely.\n• Copyright protects original creative expression such as text, music, artwork, films and software code, under the Copyright Act, 1957.\n• Patent protects a new invention that is novel, involves an inventive step and is capable of industrial application, under the Patents Act, 1970, for a limited term from the filing date.\n• Design registration protects the visual appearance of an article, its shape, configuration, pattern or ornamentation, under the Designs Act, 2000.\n\nA consumer products company might hold a trademark for its brand, a design registration for the bottle shape, copyright in the packaging artwork and a patent for the dispensing mechanism, each covering something the others do not.",
                iconType: 'document'
            },
            {
                question: "Do I need to register copyright in India, or is it automatic?",
                answer: "Copyright arises automatically the moment an original work is created in a fixed form, so registration is not a precondition for the right to exist. What registration gives you is evidence. A certificate from the Copyright Office creates a public record of ownership and the date of creation, which is far easier to rely on in a dispute than assembling proof after the fact. Registration is therefore worth doing for assets you would actually litigate over: software source code, training content, published works, artwork, music and audiovisual material. For businesses, two related points matter more than registration itself: ensure employment contracts and contractor agreements assign copyright to the company, and keep dated records of creation, because a startup that cannot prove it owns its own code is a diligence problem.",
                iconType: 'document'
            },
            {
                question: "What is a patent and is it worth filing for a startup?",
                answer: "A patent grants a time-limited monopoly over an invention in exchange for publicly disclosing how it works. To qualify, an invention must be novel, involve an inventive step and be capable of industrial application, and certain subject matter is excluded, including computer programmes as such and business methods, which is why many software startups find their core product is not patentable in India even though the underlying hardware or process may be. Filing is a multi-stage process involving a provisional or complete specification, publication, a request for examination, and responses to objections, and it takes years rather than months. DPIIT-recognised startups receive a substantial rebate on official patent fees and can request expedited examination. For most software startups, trademark and copyright protection plus trade secret discipline deliver more value per rupee than a patent.",
                iconType: 'document'
            },
            {
                question: "How do I protect my brand in other countries?",
                answer: "Trademark rights are territorial, so an Indian registration protects you only in India. There are two routes outward. You can file national applications directly in each country of interest, which is straightforward for one or two markets. Or you can use the Madrid Protocol, filing a single international application through IP India as the office of origin and designating multiple member countries, which is generally more efficient once you are targeting several markets and keeps renewals centralised. The Madrid route requires an existing Indian application or registration as the base, and for the first five years the international registration remains dependent on that base mark. Exporters and D2C brands selling into overseas marketplaces should plan this before launch, since marketplace brand-protection programmes require local rights.",
                iconType: 'globe'
            },
            {
                question: "Should I file a trademark before or after launching my brand?",
                answer: "Before, wherever possible. Trademark rights in India are strongly influenced by who applies first, and your priority date is the date of filing, so applying early is cheap insurance. Filing after launch creates two specific risks. Someone else may have filed for a similar mark in the interim, leaving you to fight an objection or opposition over a name you have already printed on packaging and paid to advertise. And if you discover a conflict only after building recognition, rebranding costs you the marketing spend, the domain, the packaging inventory and the customer recall. The efficient sequence is: search the register, then secure the company name and domain, then file the trademark application, and only then commit budget to brand identity and launch marketing.",
                iconType: 'building'
            },
            {
                question: "Should the trademark be registered in my personal name or the company's name?",
                answer: "As a rule, the mark should be owned by the entity that actually uses it commercially, which for an incorporated business is the company. Ownership that does not match commercial reality creates problems later: investors expect the operating company to own its brand, and a founder-held mark has to be assigned to the company before or during a funding round, which costs time, stamp duty and paperwork at exactly the wrong moment.\n\nThere are two situations where individual ownership is sensible. If the company does not exist yet, file in the founder's name and record an assignment to the company after incorporation. And where a family or group runs several operating entities under one brand, the mark is sometimes held by a holding entity and licensed to the operators, with the licensees recorded as permitted users.\n\nThe concessional government fee for individuals, sole proprietors, startups and small enterprises sometimes tempts founders to file personally to save money. That saving is small compared with the cost of a later assignment and the diligence questions it raises, so decide on ownership grounds first and fees second.",
                iconType: 'document'
            },
            {
                question: "What kinds of names or marks cannot be registered as trademarks?",
                answer: "Certain marks are refused on absolute grounds, broadly because they cannot distinguish one trader's goods from another's, and others are refused because they conflict with earlier rights.\n\nMarks that usually fail on absolute grounds include those that merely describe the product or its quality, quantity, purpose or geographical origin; generic words that are the common name for the goods; laudatory words such as best or premium standing alone; marks that would deceive or confuse the public about the nature or origin of the goods; marks likely to hurt religious sentiments; scandalous or obscene matter; and names or emblems whose use is prohibited under the Emblems and Names (Prevention of Improper Use) Act, such as national symbols and the names of certain institutions. Common surnames and ordinary geographical names are generally weak and difficult to register.\n\nMarks fail on relative grounds where they are identical or deceptively similar to an earlier registered mark or pending application for similar goods or services.\n\nThe important exception is acquired distinctiveness: a mark that was originally descriptive can become registrable if long and extensive use has caused the public to associate it exclusively with you, but proving that requires substantial documented evidence, which is why coined or invented words are far easier and cheaper to protect.",
                iconType: 'document'
            },
            {
                question: "What is a well-known trademark and how is it different from an ordinary registration?",
                answer: "An ordinary registration protects your mark for the goods and services in the classes you filed. A well-known trademark receives wider protection: because the public associates the mark so strongly with one source, others can be restrained from using it even for unrelated goods, and it becomes a barrier to similar marks across classes.\n\nA mark can be recognised as well known by a court or the Registrar in the course of proceedings, and the Trade Marks Rules also allow a proprietor to request determination as a well-known mark by application to the Registrar on payment of the prescribed fee, supported by evidence. That evidence is substantial: the extent and duration of use, geographical reach, promotion and advertising spend, public recognition, sales figures, registrations obtained in India and abroad, and any successful enforcement. Marks accepted as well known are published in a list maintained by the Registry.\n\nFor most businesses this is aspirational rather than immediate. It matters as a long-term reason to maintain consistent brand usage, keep records of advertising and sales, and enforce against infringers, since all of that becomes the evidence base later.",
                iconType: 'globe'
            },
            {
                question: "What happens if I register a trademark but do not use it?",
                answer: "A trademark is meant to be used, not stockpiled. If a registered mark has not been used in relation to the goods or services it is registered for, an aggrieved person can apply to have it removed from the register on grounds of non-use, broadly where there has been no bona fide use for a continuous period of five years and three months from the date the mark was entered in the register. Non-use can also weaken your position when you try to enforce the mark against someone who is using a similar name.\n\nTwo practical protections follow. Keep dated evidence of genuine commercial use for each class you hold: invoices, packaging, advertising, website archives and marketplace listings. And where the mark is actually used by a related company or franchisee rather than by the registered proprietor, record that party as a permitted user, so that their use supports the registration.\n\nThe wider lesson is to file in the classes that reflect your real and near-term business rather than filing defensively across many classes, since unused registrations cost money to maintain and are vulnerable anyway.",
                iconType: 'document'
            },
            {
                question: "Can two businesses legally use the same or a similar name?",
                answer: "Sometimes, yes. Trademark rights are granted for specified goods and services, so identical names can coexist where they operate in genuinely different fields and there is no likelihood of confusion. This is why the same word can appear as a brand of clothing and as a brand of industrial machinery.\n\nCoexistence becomes harder in three situations. If the goods or services are related or sold through the same channels, the Registry and courts will usually find a likelihood of confusion even across different classes. If the earlier mark is well known, it can be protected across unrelated goods. And if consumers are likely to assume a connection between the two businesses, coexistence is unlikely to be permitted.\n\nThere are also two negotiated or statutory routes. The Act allows registration in cases of honest concurrent use, where two parties have independently and genuinely used the same mark, subject to conditions and limitations the Registrar may impose. And parties frequently settle oppositions through a coexistence agreement that limits each side's goods, territory or presentation of the mark. If you discover a similar name in a different field, a negotiated coexistence is usually far cheaper than a fight.",
                iconType: 'document'
            },
            {
                question: "How do I stop others from using my brand on marketplaces and social media?",
                answer: "Enforcement online is mostly procedural rather than litigious, and having a registration makes it dramatically faster.\n\nOn e-commerce platforms, major marketplaces run brand protection or brand registry programmes that accept a trademark registration certificate, and in some cases a pending application, and then allow you to report counterfeit listings, unauthorised sellers using your brand name and misuse of your product images. Copyright in your own photographs and packaging artwork is a useful second ground, since image theft is often easier to prove than trademark infringement.\n\nOn social platforms, trademark and copyright complaint forms allow you to report impersonating handles and infringing content, again supported by your registration.\n\nFor domains, a confusingly similar domain registered in bad faith can be challenged through the applicable dispute resolution procedure, INDRP for .in domains and UDRP for most generic domains, rather than by suing the registrant.\n\nTwo habits make all of this work: monitor the Trade Marks Journal and the register for similar applications so you can oppose within the window, and act promptly, because long tolerance of an infringer weakens your position when you finally object.",
                iconType: 'globe'
            },
            {
                question: "Who owns the work created by my employees, freelancers and agencies?",
                answer: "The default rules are different for employees and outsiders, and the difference catches startups out.\n\nFor copyright in work created by an employee in the course of employment under a contract of service, the employer is generally treated as the first owner, unless there is an agreement to the contrary. For work commissioned from a freelancer, consultant or agency, the creator ordinarily retains copyright unless it has been assigned to you in writing. That means the logo your designer made, the code your contract developer wrote and the video your agency produced may not belong to your company at all if you only paid an invoice.\n\nPatents follow a stricter path. Rights in an invention originate with the inventor and must be assigned to the company in writing, so employment alone is not always sufficient.\n\nThe fix is straightforward and cheap if done at the start: include clear IP assignment and confidentiality clauses in every employment contract and every contractor or agency engagement, take an assignment deed for significant deliverables such as logos and source code, and keep dated records of creation. Investors examine this closely, and a company that cannot show it owns its own product or brand assets is a diligence problem that is expensive to cure retrospectively.",
                iconType: 'building'
            },
            {
                question: "How do I protect confidential business information and trade secrets?",
                answer: "India has no dedicated trade secrets statute, so protection comes from contract, common law obligations of confidence and internal discipline rather than from a registration you can file.\n\nContractually, use non-disclosure agreements before sharing anything material with prospective partners, vendors or investors, and include confidentiality obligations in employment and contractor agreements that survive the end of the engagement. Define what is confidential specifically rather than relying on a broad clause, and set out permitted use and return or destruction of materials.\n\nPractically, treat the information as confidential in the way you handle it: restrict access to those who need it, mark documents, control access to code repositories and customer databases, and run a proper exit process when someone leaves, revoking access on the last day rather than weeks later. Courts assessing a breach of confidence look at whether the information was genuinely treated as confidential.\n\nTrade secret protection is the right choice where an invention is not patentable in India, where disclosure through the patent process would help competitors more than the monopoly helps you, or for customer lists, pricing models, supplier terms and internal processes, which are not patentable at all.",
                iconType: 'shield'
            },
            {
                question: "What is design registration and when should a product business file it?",
                answer: "Design registration under the Designs Act, 2000 protects the visual appearance of an article: its shape, configuration, pattern, ornamentation or composition of lines and colours, as judged by the eye. It protects how a product looks, not how it works and not the brand name on it, which is why a product business often needs a design registration and a trademark together.\n\nTwo conditions matter most. The design must be new or original, and it must not have been published or disclosed anywhere before the filing date, so showing the product at an exhibition, listing it online or shipping it to customers before filing can destroy your ability to register it. File first, launch second. Purely functional features, and features dictated solely by the function of the article, cannot be registered as designs.\n\nRegistration is granted for ten years from the date of registration and can be extended by a further five years on application before expiry.\n\nIt is worth filing where the look of the product is part of why customers buy it, such as furniture, jewellery, packaging, consumer appliances, footwear and handicrafts. There is also a copyright angle to be aware of: where a design is capable of being registered under the Designs Act but is not registered, copyright protection can be lost once the article has been reproduced industrially beyond the limit set out in the Copyright Act, which is another reason not to rely on copyright alone for product shapes.",
                iconType: 'clock'
            },
            {
                question: "I have received a legal notice saying my brand infringes someone else's trademark. What should I do?",
                answer: "Do not ignore it and do not reply in anger. A cease and desist notice is an invitation to resolve the matter before litigation, and how you respond in the first few weeks usually determines the cost of the whole dispute.\n\nStart with facts. Check the register to confirm whether the sender actually holds a registration or only a pending application, which classes and goods it covers, its filing date and whether it is currently in force. Then compare it with your own position: when you first used your mark, whether you have a filing of your own, whether the goods and channels genuinely overlap, and what evidence of use you can document. Priority and actual use often matter more than who wrote first.\n\nThe realistic options are to demonstrate that there is no infringement because the goods, channels or marks differ; to negotiate a coexistence or a limitation of goods; to seek a licence; or to rebrand. Rebranding hurts, but it is cheapest when done early, before further inventory, packaging and marketing spend accumulates.\n\nRespect any deadline in the notice, keep the correspondence factual, and avoid admissions. Where the sender is threatening court action, take advice quickly, since injunctions in trademark matters can be obtained at short notice and an unanswered notice is used to show that your use was not in good faith.",
                iconType: 'shield'
            }
        ]
    },
    {
        id: 'working-with-us',
        label: 'Working With Us',
        items: [
            {
                question: "How do I get a quote from Your Professionals?",
                answer: "Fill in the short form at the top of this page (name, mobile or WhatsApp number, email and the service you need) or tap Free Consultation anywhere on the site. Your all-inclusive quote is sent to your email, and if you leave the WhatsApp option ticked, updates reach you there too. A Chartered Accountant or Company Secretary from our team then calls you to walk through it, at no charge.",
                iconType: 'calculator'
            },
            {
                question: "What if the service I need is not in the list?",
                answer: "Choose Other Service, the last option in the service dropdown. A box opens where you can describe exactly what you need in your own words, for example a specific licence, certificate or compliance filing. Our team reads your requirement and comes back to you with the right guidance and a quote.",
                iconType: 'document'
            },
            {
                question: "Which services does Your Professionals offer?",
                answer: "We cover 300+ services across business registration and licensing, GST and income tax, ROC and MCA compliance, trademark and other IPR, FSSAI and BIS approvals, NGO registrations, accounting and bookkeeping, and international company setups. Every service has its own page with the process, documents required, timelines and fees.",
                iconType: 'building'
            },
            {
                question: "Is the whole process online?",
                answer: "Yes. Registrations and filings are processed 100% online with expert CA and CS verification, so you can share documents digitally and track progress without visiting an office.",
                iconType: 'globe'
            },
            {
                question: "How quickly will someone get back to me?",
                answer: "Our team calls back as soon as possible after your request during working hours, which are Monday to Saturday, 9:00 AM to 7:00 PM IST. Requests received outside these hours are picked up when the team is next online. If you need an answer sooner, use Chat on WhatsApp.",
                iconType: 'clock'
            }
        ]
    }
];

// Search-engine FAQ markup: the first six questions of each category. Marking up all
// answers would add ~150 KB of JSON-LD to the homepage; the full set is still on the page
// and in llms-full.txt.
const SCHEMA_ITEMS_PER_CATEGORY = 6;

export const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.flatMap((category) =>
        category.items.slice(0, SCHEMA_ITEMS_PER_CATEGORY).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        }))
    ),
};
