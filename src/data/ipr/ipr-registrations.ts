import type { ServiceData } from '../services';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  IPR REGISTRATIONS — All IPR Registration Data (Consolidated)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const IPR_REGISTRATIONS: Record<string, ServiceData> = {
// ─── 1. TRADEMARK REGISTRATION ────────────────────────────────────────

    'trademark-registration': {
        slug: 'trademark-registration',
        title: 'Trademark Registration',
        subtitle:
            'Trademark registration in India is governed by the Trade Marks Act, 1999. It allows individuals and businesses to legally protect their brand names, logos, and unique identifiers used for goods or services. Once registered, the trademark owner gets exclusive rights to use the mark across India and c',
        heroFeatures: [
            '1. Exclusive Brand Ownership',
            '2. Legal Protection Framework',
            '3. Right to Action Against Infringement',
            '4. Business Asset Creation',
            '5. Consumer Trust Building',
        ],
        overview: {
            heading: 'What is Trademark Registration in India?',
            paragraphs: [
                'Trademark registration in India is governed by the Trade Marks Act, 1999. It allows individuals and businesses to legally protect their brand names, logos, and unique identifiers used for goods or services. Once registered, the trademark owner gets exclusive rights to use the mark across India and can take legal action against infringement.',
                'Trademark registration is often referred to as brand registration, brand name registration, or logo registration, depending on what is being protected. It not only helps you safeguard your business or product name but also protects your logo, tagline, and other visual elements.',
                'This ensures that no one else can use your brand identity without permission, giving you exclusive rights over your intellectual property.',
                'According to the World Intellectual Property Organisation (WIPO), India has over 3.2 million active trademarks, making the nation the 2nd largest holder of active trademarks. This sharp rise shows that more and more businesses in India are recognizing the importance of protecting their brand identity in todays competitive and expanding economy.',
                'A trademark is a unique sign, word, symbol, logo, design, sound, or color combination that distinguishes one businesss goods or services from others. It helps consumers identify the source of products or services and builds brand trust over time.',
                'Examples of trademarks include:',
            ],
            highlights: [
                { icon: '📋', text: 'Brand names' },
                { icon: '📊', text: 'Business names' },
                { icon: '💰', text: 'Logos and symbols' },
                { icon: '⚖️', text: 'Slogans and taglines' },
                { icon: '🔍', text: 'Sounds or jingles' },
                { icon: '📅', text: 'Product packaging shapes' },
            ],
        },
        types: [
            { title: 'Difference between TM, ®, and © Symbols', desc: 'Trademarks are identified with symbols like  TM, ®, and ©. These symbols mean the following:' },
        ],
        eligibility: [
            'Individuals',
            'Sole proprietors',
            'Startups and MSMEs',
            'Partnership firms',
            'Private Limited and Public Limited Companies',
            'Trusts and societies',
            'Foreign individuals or companies',
            'The trademark must be unique and distinctive',
            'It should not be identical or similar to an existing trademark',
            'It should not be generic, deceptive, or offensive',
            'The applicant must intend to use the trademark',
            'The mark must comply with trademark registration guidelines',
            'The mark must be capable of being represented graphically in a clear, precise manner.',
            'It should not contain prohibited elements, such as national emblems, flags, or symbols, as specified under the Emblems and Names Act.',
        ],
        documents: [
            {
                category: 'Trademark Application Forms',
                items: [
                    'Form TM-A for standard applications',
                    'Power of Attorney if filing through an agent or attorney',
                    'Authorization form (TM-48)',
                ],
            },
            {
                category: 'Applicant Identity Documents',
                items: [
                    'For individuals: PAN card, Aadhaar card, voter ID, or passport copy',
                    'For companies: Certificate of Incorporation, MOA /AOA',
                    'For partnerships: Partnership deed and registration certificate',
                    'For LLPs: LLP Agreement and registration certificate',
                ],
            },
            {
                category: 'Trademark Representation Materials',
                items: [
                    'Clear representation of the mark in JPEG format (for logos/device marks)',
                    'Specific format requirements for sound marks, 3D marks, or other non-traditional marks',
                    'Label specimens showing actual use of the mark on goods or in services',
                ],
            },
            {
                category: 'Priority Documents (if applicable)',
                items: [
                    'Certified copy of the priority application if claiming convention priority',
                    'English translation of priority trademark registration documents if in a foreign language',
                    'Form TM-P for claiming convention priority',
                ],
            },
            {
                category: 'Use-Related Documentation',
                items: [
                    'Affidavit of use if the mark is already in commercial use',
                    'User declaration with specific dates of first use in commerce',
                    'Evidence of use, such as invoices, advertisements, and packaging samples',
                ],
            },
            {
                category: 'Business Documentation',
                items: [
                    'Business registration documents appropriate to the entity type',
                    'GST registration certificate',
                    'Shop and establishment certificate (if applicable)',
                ],
            },
            {
                category: 'Additional Supporting Materials',
                items: [
                    'Consent letter from living persons if their name/likeness appears in the mark',
                    'NOC from the relevant authority for certain regulated terms',
                    'Supporting evidence for acquired distinctiveness claims (if applicable)',
                    'MSME or Startup certificate (for fee benefits)',
                ],
            },
        ],
        process: [
            { title: 'Step 1: Conduct a Trademark Search', desc: 'Searching reduces the risk of rejection or opposition later in the process.' },
            { title: 'Step 2: Choose the Appropriate Trademark Class', desc: 'Attach a clear image of the logo/symbol (if applicable) and a power of attorney if filing through an agent.' },
            { title: 'Step 3: Prepare the Trademark Application', desc: 'Attach a clear image of the logo/symbol (if applicable) and a power of attorney if filing through an agent.' },
            { title: 'Step 4: Allotment of Application Number & TM Symbol Usage', desc: 'This is a critical step; many applications face trademark opposition at this stage.' },
            { title: 'Step 5: Formal Examination by Trademark Registry', desc: 'This is a critical step; many applications face trademark opposition at this stage.' },
            { title: 'Step 6: Respond to Trademark Objection (if any)', desc: 'This is a critical step; many applications face trademark opposition at this stage.' },
            { title: 'Step 7: Trademark Journal Publication', desc: 'This is a critical step; many applications face trademark opposition at this stage.' },
            { title: 'Step 8: Handling Trademark Opposition (if filed)', desc: 'The registration is valid for 10 years and can be renewed indefinitely every 10 years. This entire trademark registration process in India can be handled online with professional support from service providers like Your Professionals.' },
            { title: 'Step 9: Issuance of Registration Certificate', desc: 'The registration is valid for 10 years and can be renewed indefinitely every 10 years. This entire trademark registration process in India can be handled online with professional support from service providers like Your Professionals.' },
        ],
        fees: [
            { item: 'Trademark Registration Charges', cost: 'Trademark registration costs in India involve various official trademark registration fees and professional service charges.' },
            { item: 'Additional Compliance Costs', cost: 'Maintaining trademark rights also involves ongoing compliance costs and potential expenses.. Renewal Fees: Rs. 9,000 for individuals/startups/small enterprises and Rs. 18,000 for others per class every 10 years.; Restoration Fees: Rs. 5,000 plus renewal fees if the renewal deadline is missed (within 6 months).; Assignment Recording: Rs. 9,000 for individuals/startups/small enterprises and Rs. 18,000 for others per mark.; Change of Name/Address: Rs. 900 for individuals/startups/small enterprises and Rs. 1,800 for others.' },
        ],
        advantages: [
            { icon: '✅', title: '1. Exclusive Brand Ownership', desc: 'Secures legal monopoly over your brand identity in the marketplace.. Grants exclusive ownership rights over your brand.; Prevents competitors from using identical or deceptively similar marks.' },
            { icon: '🏛️', title: '2. Legal Protection Framework', desc: 'Registration creates a solid legal foundation for defending your brand.. Protects against unauthorized use or imitation under the Trademarks Act, 1999.; Creates a legal presumption of ownership, reducing the burden of proof in disputes.' },
            { icon: '🤝', title: '3. Right to Action Against Infringement', desc: 'Enables effective legal recourse against unauthorized brand usage.. Grants the right to sue for trademark infringement with stronger remedies.; Allows for seeking injunctions, damages, and accounts of profits from infringers.' },
            { icon: '📈', title: '4. Business Asset Creation', desc: 'Transforms intangible brand equity into quantifiable business assets.. Creates a valuable intellectual property asset that appears on company balance sheets.; Enhances company valuation during mergers, acquisitions, or fundraising.' },
            { icon: '🔒', title: '5. Consumer Trust Building', desc: 'Registration helps establish authenticity and reliability in the market.. Allows use of the ® symbol, signaling official protection to consumers.; Builds brand credibility and customer trust.' },
            { icon: '💼', title: '6. Franchising Opportunities', desc: 'Enables structured business expansion through legitimate brand licensing.. Helps in business expansion and franchising.; Provides security when allowing others to use your brand under license.' },
            { icon: '📋', title: '7. Customs Protection Access', desc: 'Registered marks can be recorded with customs authorities for border protection.. Allows recording with Indian customs to prevent the importation of counterfeit goods.; Creates an additional enforcement mechanism at international borders.' },
            { icon: '🛡️', title: '8. Perpetual Protection Possibility', desc: 'Creates potentially unlimited protection through proper maintenance.. Initially valid for 10 years but renewable indefinitely with timely renewals.; Enables building a multi-generational brand legacy with proper maintenance.' },
        ],
        compliance: [
            { area: 'Exclusive Nationwide Rights', details: 'After registration, you are legally allowed to use the ® (Registered) symbol with your trademark.. It signals that your brand is officially protected under Indian law.; Using the ® symbol helps deter potential infringers.; Avoid using it before registration, as it may lead to penalties.' },
            { area: 'Monitor for Infringement', details: 'Regularly watch the market and trademark journals for possible misuse or similar trademarks.. Keep an eye out for unauthorized use of your mark.; Use online tools or legal services to track trademark filings and market use.; Take prompt legal action if infringement is found, through trademark opposi' },
            { area: 'Maintain Proper Usage', details: 'Consistently use your trademark the way it was registered to keep your rights active.. Avoid major changes in spelling, design, or representation without applying for a new trademark.; Use the trademark in business materials—like packaging, advertising, and invoices.; You can expand globally using i' },
            { area: 'Renew the Trademark Timely', details: 'Trademark protection is valid for 10 years and must be renewed to remain in force.. Apply for trademark renewal before expiry, or within the grace period (6 months after expiry).; File Form TM-R for renewal with applicable government fees.; If not renewed, the trademark may be removed from the regis' },
            { area: 'Record Trademark Licensing or Assignment', details: 'If you license your brand to someone or transfer ownership, record it officially with the Trademark Registry.. Submit appropriate forms like TM-P (for licensing) or TM-A/TM-M (for assignments).; This ensures legal recognition of the licensee or new owner.' },
            { area: 'Enforce Your Rights When Needed', details: 'Use legal tools to protect your trademark against infringement or misuse.. Send legal notices to infringers.; File for damages or injunction in civil court if required.; Take part in proceedings like trademark rectification if others misuse or wrongly register a similar mark.' },
        ],
        faqs: [
            { q: 'What is the difference between ™ and ® symbols?', a: 'The ™ symbol can be used by anyone claiming trademark rights, even without registration. The ® symbol can only be used after the trademark is officially registered with the Trade Marks Registry. Using ® without registration is a punishable offence under Section 107 of the Trade Marks Act.' },
            { q: 'How long does trademark registration take in India?', a: 'The entire process typically takes 8–12 months if there are no objections or oppositions. If the Examiner raises objections, the timeline extends to 12–18 months. Opposed applications may take 18–36 months to resolve.' },
            { q: 'Can I register a trademark in multiple classes?', a: 'Yes. India follows a multi-class filing system under the Trade Marks Rules, 2017. You can file a single application covering multiple Nice Classification classes, though the government fee is charged per class (₹4,500 for individuals/startups/MSMEs or ₹9,000 for others per class).' },
            { q: 'What happens if someone opposes my trademark application?', a: 'If a third party files a Notice of Opposition within 4 months of journal publication, Your Professionals files a counter-statement on your behalf. Both parties submit evidence, and a hearing is conducted before the Registrar, who decides whether to allow or refuse the registration.' },
            { q: 'Can a trademark be registered if it is already in use by someone else?', a: 'Not if the prior user has a registered trademark in the same or similar class. However, if you have been using the mark prior to the other party (honest concurrent use under Section 12), you may still obtain registration by proving prior use with evidence.' },
            { q: 'Is a trademark search mandatory before filing?', a: 'While not legally mandatory, Your Professionals strongly recommends a comprehensive trademark search before filing. It helps identify identical or similar existing marks that could lead to objections, opposition, or refusal — saving time and money.' },
            { q: 'What can be registered as a trademark in India?', a: 'Under Section 2(zb) of the Trade Marks Act, a trademark can include words, names, letters, numerals, devices, brand names, headings, labels, colours, shapes of goods, packaging, sound marks, and any combination thereof that is capable of distinguishing goods or services.' },
            { q: 'How does Your Professionals help with trademark registration?', a: 'Your Professionals provides end-to-end trademark registration services — from availability search and classification advice to TM-A filing, examination report response, hearing representation, opposition defence, and certificate procurement. We ensure your brand is protected efficiently and cost-effectively.' },
        ],
        cta: {
            heading: 'Need Help With Trademark Registration?',
            subheading:
                'Let Your Professionals handle your trademark registration requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Trademark Registration Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 2. TRADEMARK RENEWAL ─────────────────────────────────────────────

    'trademark-renewal': {
        slug: 'trademark-renewal',
        title: 'Trademark Renewal',
        subtitle:
            'Trademark renewal is the legal process of extending the protection of your registered trademark beyond its initial 10-year validity period in India. This crucial step ensures your brand name, logo, or symbol remains exclusively yours, preventing others from using similar marks that could confuse con',
        heroFeatures: [
            'Renewal Window Begins 1 Year Before Expiry: You can apply for renewal up to 12 months before the expiry of the trademarks 10-year validity period.',
            'Grace Period of 6 Months After Expiry: If the renewal is not done before expiry, there is a 6-month grace period during which you can still renew the trademark by paying a late fee.',
            'After Grace Period: Restoration Required: If the renewal is not completed within the grace period, you must apply for restoration along with renewal. This process involves additional fees and justification.',
            'No Automatic Reminders from Registry: Trademark holders are responsible for tracking renewal deadlines; the Trademark Registry does not guarantee reminders.',
            'Recommended: Start Process Early: It is advisable to start the renewal process 3–6 months in advance to avoid delays or the risk of losing protection.',
        ],
        overview: {
            heading: 'What is Trademark Renewal?',
            paragraphs: [
                'Trademark renewal is the legal process of extending the protection of your registered trademark beyond its initial 10-year validity period in India. This crucial step ensures your brand name, logo, or symbol remains exclusively yours, preventing others from using similar marks that could confuse consumers.',
                'Failing to renew on time has serious consequences. Your trademark can be removed from the official register, leaving the brand identity you have worked hard to build unprotected and vulnerable to misuse or infringement. For any business, from a startup to an established company, timely renewal is essential for securing your market position and maintaining customer trust.',
                'You can initiate the trademark renewal process up to one year before its expiry date.',
                'Renewing your trademark ensures continued exclusive rights to use the mark and protects it from unauthorized use.',
                'Trademarks have a limited validity (usually 10 years); failure to renew can lead to automatic cancellation.',
                'Trademark renewal safeguards your brands reputation, identity, and consumer recognition in the market.',
            ],
            highlights: [
                { icon: '📋', text: 'Renewal Window Begins 1 Year Before Expiry: You can apply for renewal up to 12 months before the expiry of the trademarks 10-year validity period.' },
                { icon: '📊', text: 'Grace Period of 6 Months After Expiry: If the renewal is not done before expiry, there is a 6-month grace period during which you can still renew the trademark by paying a late fee.' },
                { icon: '💰', text: 'After Grace Period: Restoration Required: If the renewal is not completed within the grace period, you must apply for restoration along with renewal. This process involves additional fees and justification.' },
                { icon: '⚖️', text: 'No Automatic Reminders from Registry: Trademark holders are responsible for tracking renewal deadlines; the Trademark Registry does not guarantee reminders.' },
                { icon: '🔍', text: 'Recommended: Start Process Early: It is advisable to start the renewal process 3–6 months in advance to avoid delays or the risk of losing protection.' },
            ],
        },
        eligibility: [
            'The Proprietor of the Registered Trademark: This is the primary and most direct eligible party. The individual, company, or entity in whose name the trademark is officially registered with the Trademark Registry.',
            'An Authorized Representative or Agent: The registered proprietor can appoint an authorized representative, such as a trademark agent, attorney, or legal firm, to file the renewal application on their behalf. In such cases, a Power of Attorney (PoA) is required from the proprietor authorizing the representative to act for them.',
            'No Proof of Use Required: In India, unlike some other jurisdictions, you are generally not required to submit proof of continued use of the trademark to renew it within the statutory period. Renewal is considered an inherent right of the registered proprietor.',
            'No Changes to the Mark: While minor alterations may sometimes be permissible during renewal, the core identity of the trademark must remain unchanged. Any significant modifications typically necessitate filing a fresh trademark application.',
            'Lapsed Trademarks Can Be Renewed/Restored: Even if a trademark has expired, the original proprietor (or their authorized agent) has a specific timeframe to act: Renewal with Surcharge: Possible within six months after the expiry date. Restoration: Possible between six months and one year after the expiry date, but this incurs a higher fee and typically requires an additional application (Form TM-R). Beyond one year from the expiry date: the trademark generally cannot be restored and would require a fresh application for registration.',
            'Renewal with Surcharge: Possible within six months after the expiry date.',
            'Restoration: Possible between six months and one year after the expiry date, but this incurs a higher fee and typically requires an additional application (Form TM-R).',
            'Beyond one year from the expiry date: the trademark generally cannot be restored and would require a fresh application for registration.',
            'Registrars Notice: The Registrar of Trademarks is mandated to issue a notice (Form O-3) to the registered proprietor regarding the impending expiry, usually six months before the due date. This serves as a reminder; however, the ultimate responsibility for timely renewal rests with the trademark proprietor.',
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'Trademark Registration Certificate Copy: A copy of your original trademark registration certificate.',
                    'Applicant/Proprietor Details: Full name, address, and contact information of the trademark owner.',
                    'Trademark Number: The specific registration number of the trademark to be renewed.',
                    'Proof of Identity and Address: For individuals, a copy of Aadhaar card/ PAN card; for companies, a Certificate of Incorporation.',
                    'Details of Authorized Agent (if applicable): If an agent is filing, their name and registration number.',
                    'New Representation of the Mark: If the visual representation of the trademark is being altered, the new representation must be submitted.',
                ],
            },
        ],
        process: [
            { title: 'What Happens if an Objection is Raised During Renewal?', desc: 'Though rare for straightforward renewals, objections can occur if:' },
        ],
        fees: [
            { item: 'Normal Renewal (Filed before expiry) — E-filing (Online)', cost: 'Rs. 9,000' },
            { item: 'Physical Filing (Offline)', cost: 'Rs. 10,000' },
            { item: 'Renewal with Surcharge (Filed within 6 months after expiry) — E-filing (Online)', cost: 'Rs. 13,500 (Rs. 9,000 + Rs. 4,500 surcharge)' },
            { item: 'Physical Filing (Offline)', cost: 'Rs. 15,000 (Rs. 10,000 + Rs. 5,000 surcharge)' },
            { item: 'Restoration & Renewal (Filed between 6 months and 1 year after expiry) — E-filing (Online)', cost: 'Rs. 18,000 (Rs. 9,000 + Rs. 9,000 restoration fee)' },
            { item: 'Physical Filing (Offline)', cost: 'Rs. 20,000 (Rs. 10,000 + Rs. 10,000 restoration fee)' },
        ],
        advantages: [
            { icon: '✅', title: 'Expert IP Support', desc: 'Dedicated IP professionals from Your Professionals for Trademark Renewal' },
            { icon: '🛡️', title: 'Legal Protection', desc: 'Comprehensive protection of your intellectual property rights' },
            { icon: '📈', title: 'Brand Value Enhancement', desc: 'Strengthen your brand and business value through proper IP registration' },
        ],
        faqs: [
            { q: 'When should I file for trademark renewal?', a: 'You can file Form TM-R up to 6 months before the expiry date. The Registry sends a reminder notice (Form TM-24) approximately 6 months before expiry. Your Professionals recommends filing at least 3 months before the due date to avoid any last-minute complications.' },
            { q: 'What happens if I miss the trademark renewal deadline?', a: 'If you miss the renewal date, you have a 6-month grace period during which you can still renew by paying the standard fee plus a late surcharge. After this 6-month window, the trademark is removed from the Register. Restoration is possible within 1 year of removal via Form TM-13, but it is discretionary and involves additional costs.' },
            { q: 'Can a third party register my trademark if I fail to renew?', a: 'Yes. Once your trademark is removed from the Register, any third party can apply for registration of an identical or similar mark in the same class. During the restoration window, your pending Form TM-13 application may provide some protection, but there is no guarantee.' },
            { q: 'How much does trademark renewal cost in India?', a: 'The government fee for TM-R filing is ₹5,000 per class for individuals, startups, and MSMEs, and ₹10,000 per class for other entities. Late renewal attracts an additional surcharge of ₹3,000 or ₹5,000 per class respectively. Your Professionals\'s service fee for handling the renewal process is additional.' },
            { q: 'Do I need to prove use of the trademark at the time of renewal?', a: 'No. Unlike some jurisdictions (e.g., the US), India does not require proof of use or a declaration of use at the time of renewal. However, under Section 47, any person can apply for removal of a trademark that has not been used for a continuous period of 5 years and 3 months.' },
            { q: 'Can I renew a trademark that has been assigned to a new owner?', a: 'Yes, but the assignment must first be recorded with the Trademark Registry using Form TM-23. The new proprietor (assignee) can then file Form TM-R in their name. Your Professionals assists with both the assignment recording and subsequent renewal.' },
            { q: 'Is the renewal process different for Madrid Protocol trademarks?', a: 'Yes. International Registrations designating India under the Madrid Protocol are renewed directly through WIPO, not the Indian Registry. The renewal fee is paid to WIPO in Swiss Francs, and the validity is managed centrally. Your Professionals coordinates both Indian and international renewals.' },
            { q: 'How does Your Professionals help with trademark renewal?', a: 'Your Professionals provides proactive renewal management — tracking expiry dates across your entire trademark portfolio, filing TM-R applications well in advance, handling late renewals and restorations, and ensuring your brand protection remains uninterrupted. We also manage bulk renewals for businesses with multiple registrations.' },
        ],
        cta: {
            heading: 'Need Help With Trademark Renewal?',
            subheading:
                'Let Your Professionals handle your trademark renewal requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Trademark Renewal Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 3. TRADEMARK OBJECTION ───────────────────────────────────────────

    'trademark-objection': {
        slug: 'trademark-objection',
        title: 'Trademark Objection',
        subtitle:
            'A trademark objection is an official notice from the trademark examiner flagging an application for not meeting legal requirements or for conflicting with existing trademarks. It is not a rejection but a request for the applicant to provide clarification or resolve the identified issues.',
        heroFeatures: [
            'It is not a rejection, but rather a request for the applicant to resolve the issues raised.',
            'The objection is typically communicated through an examination report.',
            'Lack of Distinctiveness: The trademark might be too generic, descriptive, or similar to common terms, making it difficult to distinguish from other marks.',
            'Conflict with Existing Trademarks: The proposed mark may be too similar to a previously registered or pending trademark, potentially causing consumer confusion.',
            'Prohibited Elements: The trademark might contain forbidden words, symbols, or designs.',
        ],
        overview: {
            heading: 'What is a Trademark Objection?',
            paragraphs: [
                'A trademark objection is an official notice from the trademark examiner flagging an application for not meeting legal requirements or for conflicting with existing trademarks. It is not a rejection but a request for the applicant to provide clarification or resolve the identified issues.',
                'What It Is: A trademark objection is a stage in the trademark registration process where the trademark office expresses concerns about a particular application.',
                'Why It Happens: Objections arise for several reasons:',
                'What It Means for the Applicant: An objection presents an opportunity for the applicant to address the concerns:',
            ],
            highlights: [
                { icon: '📋', text: 'It is not a rejection, but rather a request for the applicant to resolve the issues raised.' },
                { icon: '📊', text: 'The objection is typically communicated through an examination report.' },
                { icon: '💰', text: 'Lack of Distinctiveness: The trademark might be too generic, descriptive, or similar to common terms, making it difficult to distinguish from other marks.' },
                { icon: '⚖️', text: 'Conflict with Existing Trademarks: The proposed mark may be too similar to a previously registered or pending trademark, potentially causing consumer confusion.' },
                { icon: '🔍', text: 'Prohibited Elements: The trademark might contain forbidden words, symbols, or designs.' },
                { icon: '📅', text: 'Other Issues: The trademark could be misleading, deceptive, or violate other trademark laws.' },
            ],
        },
        eligibility: [
            'All individuals and entities requiring IP protection services',
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'Authorization Form TM-48.',
                    'Trademark examination report or application number.',
                    'ID proof like an Aadhaar card or a passport.',
                    'Address proof, such as a utility bill or bank statement.',
                    'Invoices and purchase bills related to the trademark.',
                    'An affidavit showing how and since when the trademark is being used.',
                    'Advertisements in newspapers, magazines, or online platforms.',
                    'Proof that the trademark is available online, like website links or listings.',
                    'Evidence that the trademark is used for business, such as product packaging or labels.',
                    'Business cards and letterheads with the trademark.',
                    'Government certificates like MSME or FSSAI registration.',
                    'Screenshots of social media pages or copies of ads.',
                    'Written reply to the examination report.',
                ],
            },
        ],
        process: [
            { title: 'Step 1: Conduct a Thorough Trademark Search', desc: 'Before you apply, check if your trademark or something very similar is already taken. Use the Indian Trademark Registrys online search tool, which offers free trademark search options. If you find anything too close, rethink your choice. Even abandoned marks can cause trouble, so it is best to avoid them too.' },
            { title: 'Step 2: Use a Distinct Mark', desc: 'The more unique your trademark is, the better. A distinct name not only avoids legal issues but also helps your brand stand out. Try creating a new word or combining terms in a creative way to make your brand memorable and legally safe.' },
            { title: 'Step 3: Avoid Deceptively Similar Marks', desc: 'Your mark should not look or sound like any existing trademark. If it does, it could confuse consumers, and the trademark office will likely reject it.' },
            { title: 'Step 4: Avoid Well-Known Marks', desc: 'Avoid names that resemble famous or widely recognized brands, even in unrelated industries. These are strongly protected, and your application will almost certainly be rejected if you seem to be piggybacking on their reputation.' },
            { title: 'Step 5:  Do Not Use Common Words', desc: 'Using generic terms like "Tech Solutions" or "Best Education" will not work. These words are too broad and cannot be registered. Your trademark should be original enough to set you apart from everyone else in the same field.' },
            { title: 'Step 6: Coin a New Word', desc: 'Inventing your own words is a great way to avoid objections. Since it is completely new, there is little to no chance someone else has already registered it. Plus, it builds a strong and unique brand identity.' },
            { title: 'Step 7:  Do Not Use Names of Geographical Locations', desc: 'Do not include names of countries, cities, or regions in your trademark. For example, "Bangalore Sweets" might be rejected because place names cannot usually be owned by one business. They must stay open for everyone to use.' },
            { title: 'Step 8: Draft Applications Without Any Errors', desc: 'Make sure all the information in your application—like the business name, trademark details, and class of goods/services is 100% accurate. Typos, incorrect info, or missing details can lead to delays or objections.' },
            { title: 'Step 9: Conduct Additional Searches Specific to the Field of Operations', desc: 'If your business is digital (like an app or website), search app stores and the internet in addition to the official trademark database. Someone might be using a similar name informally, which could still lead to conflicts.' },
            { title: 'Step 10: Avoid Any Offensive Marks', desc: 'Your trademark should be respectful and appropriate for all audiences. Avoid words or images that could offend religious, cultural, or community sentiments. Offensive marks are automatically rejected.' },
        ],
        fees: [
            { item: 'TM Attorney Fee', cost: '₹1,899' },
            { item: 'Affidavit and Notary', cost: '₹100' },
            { item: 'TM Govt Fees', cost: 'Nil' },
            { item: 'Total Fees', cost: '₹1,999' },
        ],
        advantages: [
            { icon: '✅', title: 'Expert IP Support', desc: 'Dedicated IP professionals from Your Professionals for Trademark Objection' },
            { icon: '🛡️', title: 'Legal Protection', desc: 'Comprehensive protection of your intellectual property rights' },
            { icon: '📈', title: 'Brand Value Enhancement', desc: 'Strengthen your brand and business value through proper IP registration' },
        ],
        compliance: [
            { area: 'Review of Reply: The examining officer reviews your response', details: 'Review of Reply: The examining officer reviews your response.' },
            { area: 'Acceptance or Further Action: If satisfied, the officer acce', details: 'Acceptance or Further Action: If satisfied, the officer accepts the application. If not, they may schedule a hearing.' },
            { area: 'Publication and Opposition: Once accepted, the mark is publi', details: 'Publication and Opposition: Once accepted, the mark is published in the Trademarks Journal for 4 months, allowing third parties to oppose it.' },
            { area: 'Show Cause Notice: If the officer is not satisfied with the ', details: 'Show Cause Notice: If the officer is not satisfied with the reply, they may issue a "show cause notice," requiring the applicant to explain why their trademark should be registered.' },
            { area: 'Hearing: If a show-cause notice is issued, a hearing may be ', details: 'Hearing: If a show-cause notice is issued, a hearing may be scheduled where the applicant can present their case to the Trademark Registry.' },
            { area: 'Final Decision: After the opposition period (and any related', details: 'Final Decision: After the opposition period (and any related proceedings), the Registry makes a final decision.' },
            { area: 'Appeal: If the application is rejected, you can appeal the d', details: 'Appeal: If the application is rejected, you can appeal the decision to the Intellectual Property Appellate Board.' },
        ],
        faqs: [
            { q: 'What happens if I don\'t respond to a trademark objection?', a: 'If no reply is filed within 30 days of the Examination Report, the Trademark Registrar treats the application as abandoned under Rule 33 of the Trade Marks Rules, 2017. You would need to file a fresh application with new fees.' },
            { q: 'Can I file the objection reply myself without a trademark attorney?', a: 'Yes, you can file the reply yourself through the IP India portal. However, trademark objections involve legal complexities requiring knowledge of the Trade Marks Act, Rules, and relevant case law. Professional assistance from Your Professionals significantly improves the chances of success.' },
            { q: 'What is the difference between a trademark objection and a trademark opposition?', a: 'A trademark objection is raised by the Registrar/Examiner during examination before publication. A trademark opposition is filed by a third party after the mark is published in the Trademark Journal. They are distinct proceedings with different procedures and timelines.' },
            { q: 'How long does it take to resolve a trademark objection?', a: 'If the written reply is accepted, the objection can be resolved within 2–4 months. If a hearing is scheduled, it may take 6–12 months or longer depending on the Registrar\'s calendar and complexity of the case.' },
            { q: 'Can I appeal if my trademark application is refused after the hearing?', a: 'Yes. If the Registrar refuses the application after the hearing, you can file an appeal before the Intellectual Property Appellate Board (IPAB) or the relevant High Court within the prescribed time limit.' },
            { q: 'What are the most common grounds for trademark objection in India?', a: 'The most common grounds are: (1) descriptive or non-distinctive mark under Section 9(1)(a)–(b), (2) deceptive similarity with an existing mark under Section 11(1), (3) marks identical to well-known trademarks under Section 11(2), and (4) incorrect classification of goods/services.' },
            { q: 'Does Your Professionals handle TM hearing representation?', a: 'Yes. Your Professionals provides end-to-end support including drafting the written reply, compiling evidence, preparing the applicant for the hearing, and representing the applicant before the Trademark Registrar at the hearing.' },
            { q: 'Is the Examination Report the same as a Show Cause Notice?', a: 'In trademark practice, the Examination Report effectively serves as a show cause notice — it asks the applicant to show cause why the mark should be registered despite the identified objections. The applicant must respond with a written reply or attend a hearing.' },
        ],
        cta: {
            heading: 'Need Help With Trademark Objection?',
            subheading:
                'Let Your Professionals handle your trademark objection requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Trademark Objection Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 4. TRADEMARK OPPOSITION ──────────────────────────────────────────

    'trademark-opposition': {
        slug: 'trademark-opposition',
        title: 'Trademark Opposition',
        subtitle:
            'Trademark opposition is a legal process that allows any third party to challenge the registration of a trademark after it has been published in the official trademark journal. If someone believes that the new trademark is too similar to their own, could confuse consumers, or violate trademark laws, ',
        heroFeatures: [
            'Owners of similar registered trademarks.',
            'Businesses have been using a similar trademark for a long time (even if not registered).',
            'Anyone who believes the trademark is descriptive, misleading, or goes against trademark laws.',
            'Protecting existing trademark rights.',
            'Preventing consumer confusion in the market.',
        ],
        overview: {
            heading: 'What is Trademark Opposition?',
            paragraphs: [
                'Trademark opposition is a legal process that allows any third party to challenge the registration of a trademark after it has been published in the official trademark journal. If someone believes that the new trademark is too similar to their own, could confuse consumers, or violate trademark laws, they can file an opposition to stop it from being registered.',
                'Anyone can oppose a trademark application if they believe it affects their rights or is invalid. This includes:',
                'Trademark opposition plays a key role in:',
            ],
            highlights: [
                { icon: '📋', text: 'Owners of similar registered trademarks.' },
                { icon: '📊', text: 'Businesses have been using a similar trademark for a long time (even if not registered).' },
                { icon: '💰', text: 'Anyone who believes the trademark is descriptive, misleading, or goes against trademark laws.' },
                { icon: '⚖️', text: 'Protecting existing trademark rights.' },
                { icon: '🔍', text: 'Preventing consumer confusion in the market.' },
                { icon: '📅', text: 'Ensuring unique and valid trademarks are registered.' },
            ],
        },
        types: [
            { title: 'Form TM-O', desc: 'Purpose: Used to formally oppose a trademark application published in the Trade Marks Journal.; Filing: Must be filed within four months of the trademarks advertisement in the Journal.; Contents: Includes the trademark application details, the opponents details, and the grounds for opposition.; Fee: Requires payment of a prescribed fee, which may vary based on the number of grounds cited.' },
            { title: 'Form TM-M', desc: 'Purpose: Used for various post-registration or pre-registration requests related to trademarks, including some used in opposition proceedings.; Filing: Can be used for different types of requests, such as applying for expedited processing, requesting extensions of time, or making other amendments to trademark applications or registrations.; Contents: The form is divided into sections, with Part A for applicant and agent details and Part B for selecting the specific request and providing relevant details.; Key Sections: Can be used for requesting rectification of the register.' },
        ],
        eligibility: [
            'Any person: This is a broad definition, encompassing individuals, companies, trusts, partnerships, and any legal entity.',
            'Prior users: If someone has been using a similar mark before the applicant, they can oppose the registration.',
            'Registered trademark owners: If the mark is similar to a registered trademark, the owner can oppose.',
            'Competitors: Businesses operating in the same or related fields can oppose if they believe the new mark is likely to confuse.',
            'General public: Even the public can oppose if they believe the mark is deceptive or harmful, although this is less common.',
            'Industry watchdogs: Organizations concerned with trademark protection may also oppose.',
            'Within Four Months: The notice of opposition must be filed within four months from the date of publication of the trademark application in the Trademarks Journal.',
            'After Publication: Opposition can only be filed after the trademark application has been published in the journal.',
            'Once Published: It is crucial to monitor the Trademarks Journal for publications and act promptly if an opposition is warranted.',
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'Notice of Opposition (Form TM-O): This is the primary document for initiating the opposition process.',
                    'Application Details: The notice must include the application number of the trademark being opposed.',
                    'Grounds for Opposition: Clearly state the reasons for opposing the trademark registration, such as similarity to an existing mark or lack of distinctiveness.',
                    'Applicant and Opponent Information: Provide details about both the applicant (the one seeking registration) and the opponent (the one opposing the application).',
                    'Evidence: Supporting documents to substantiate the grounds for opposition. This may include:',
                    'Affidavits: Statements made under oath to support the opposition. Prior Use Evidence: Proof of prior use of a similar mark, such as sales invoices, product images, and advertising materials. Government Registrations: If the opposition is based on a prior registration, provide a copy of the registration certificate.',
                    'Affidavits: Statements made under oath to support the opposition.',
                    'Prior Use Evidence: Proof of prior use of a similar mark, such as sales invoices, product images, and advertising materials.',
                    'Government Registrations: If the opposition is based on a prior registration, provide a copy of the registration certificate.',
                    'Power of Attorney: If an attorney is representing the opponent, a Power of Attorney authorizes them to act on the opponents behalf.',
                    'Fees: Pay the prescribed fee for filing the Notice of Opposition.',
                    'Counter Statement: The applicant will have an opportunity to file a counter-statement to the opposition.',
                    'Hearing Statements: If the opposition is contested, both parties may be required to submit hearing statements.',
                    'Adjournment Requests: If needed, parties can request adjournments of the hearing.',
                ],
            },
        ],
        process: [
            { title: '1. Notice of Trademark Opposition', desc: 'Any person can file for trademark opposition with the Registrar within 4 months from the date of advertisement of the registration application in the trademark journal by submitting a notice in Form TM-O and paying the prescribed fees.' },
            { title: '2. Counterstatement for Notice of Trademark Opposition', desc: 'The applicant must file their counterstatement to the notice of opposition with the Registrar in Form TM-O within 2 months of receiving a copy of the notice of opposition, stating their facts. The Registrar will serve a copy of the counterstatement to the opposing party.' },
            { title: '3. Evidence For and Against Trademark Opposition', desc: 'The opposing party shall provide evidence supporting their notice of opposition to the Registrar within 2 months of receiving a copy of the counterstatement filed by the applicant. The opposing party should also send all copies of the evidence to the applicant.' },
            { title: '4. Hearing and Decision Concerning Trademark Opposition', desc: 'The Registrar, after the receipt of evidence from both parties and further evidence from the opposing party, will give notice to both parties of the first date of hearing. If the opposing party is not present on the hearing date, the opposition will be dismissed, and the Registrar will register the trademark.' },
        ],
        fees: [
            { item: 'Professional Service Fee', cost: 'Contact Your Professionals for pricing' },
        ],
        advantages: [
            { icon: '✅', title: 'Expert IP Support', desc: 'Dedicated IP professionals from Your Professionals for Trademark Opposition' },
            { icon: '🛡️', title: 'Legal Protection', desc: 'Comprehensive protection of your intellectual property rights' },
            { icon: '📈', title: 'Brand Value Enhancement', desc: 'Strengthen your brand and business value through proper IP registration' },
        ],
        compliance: [
            { area: '1. Trademark Application is Refused', details: 'Review Petition: The applicant can file a review petition with the Registrar within 30 days of the refusal notice.; Appeal: If the review is denied or if the applicant chooses to bypass the review process, they can appeal to the IPAB or the High Court within three months of the refusal order.; Groun' },
            { area: '2. Trademark Proceeds to Registration', details: 'Advertisement in Journal: If the application is accepted, it is advertised in the Trade Marks Journal to allow for public opposition.; Opposition Period: A period is provided for third parties to oppose the registration.; Registration: If no opposition is filed or the opposition is unsuccessful, the' },
            { area: '3. Challenging the Registrars Decision', details: 'Appeal to IPAB or High Court: If the applicant disagrees with the Registrars decision, they can appeal to the IPAB or directly to the High Court.; Time Limits: Appeals must be filed within specific timeframes (e.g., three months for the IPAB).; Evidence and Arguments: The applicant will need to pres' },
        ],
        faqs: [
            { q: 'Who can file a trademark opposition in India?', a: 'Any person can file a trademark opposition under Section 21 of the Trade Marks Act, 1999. There is no requirement to be a registered trademark owner. You only need to demonstrate that you are an aggrieved party with a legitimate interest in opposing the mark.' },
            { q: 'What is the time limit for filing a trademark opposition?', a: 'The Notice of Opposition (Form TM-O) must be filed within 4 months from the date of publication of the trademark in the Trademark Journal. An extension of 1 month may be granted by the Registrar on an application made before the expiry of the 4-month period.' },
            { q: 'What happens if the applicant does not file a Counter-Statement?', a: 'If the applicant fails to file a Counter-Statement within 2 months of receiving the Notice of Opposition, the trademark application is deemed abandoned under Rule 45(1) of the Trade Marks Rules, 2017. The applicant loses all rights under that application.' },
            { q: 'On what grounds can a trademark be opposed?', a: 'Common grounds include: (1) deceptive similarity with an earlier mark (Section 11(1)), (2) conflict with a well-known trademark (Section 11(2)), (3) descriptive or non-distinctive mark (Section 9), (4) bad faith filing, (5) the applicant not being the true proprietor, and (6) the mark causing confusion among the public.' },
            { q: 'How long does a trademark opposition proceeding take?', a: 'From filing the Notice of Opposition to the final order, the proceeding typically takes 12–24 months. This includes statutory periods for Counter-Statement (2 months), evidence by opponent (2 months), evidence by applicant (2 months), reply evidence (1 month), and scheduling of the hearing.' },
            { q: 'Can I appeal the Registrar\'s decision in an opposition case?', a: 'Yes. Either party can file an appeal against the Registrar\'s order before the relevant High Court within 3 months from the date of the order, as per Section 91 of the Trade Marks Act, 1999.' },
            { q: 'What is the difference between trademark opposition and trademark cancellation?', a: 'Opposition is a pre-registration remedy filed during the 4-month publication window to prevent a mark from being registered. Cancellation (rectification) is a post-registration remedy under Section 57 to remove an already-registered mark from the register. Both are adjudicated by the Registrar.' },
            { q: 'How does Your Professionals help with trademark opposition?', a: 'Your Professionals provides end-to-end support including Trademark Journal monitoring, drafting and filing the Notice of Opposition or Counter-Statement, compiling evidence with affidavits, preparing legal arguments with case law citations, and representing you at the hearing before the Registrar.' },
        ],
        cta: {
            heading: 'Need Help With Trademark Opposition?',
            subheading:
                'Let Your Professionals handle your trademark opposition requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Trademark Opposition Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 5. INTERNATIONAL TRADEMARK REGISTRATION ──────────────────────────

    'international-trademark-registration': {
        slug: 'international-trademark-registration',
        title: 'International Trademark Registration',
        subtitle:
            'Imagine you have created a unique brand. It could be a catchy name for your new software, a cool logo for your fashion line, or a special jingle. In India, you have protected this brand by registering it as a trademark.',
        heroFeatures: [
            'Legal Safeguard',
            'Builds Business Value & Trust',
            'New Business Opportunities',
            'Protects During Export/Import',
        ],
        overview: {
            heading: 'Overview of International Trademark Registration in India',
            paragraphs: [
                'Imagine you have created a unique brand. It could be a catchy name for your new software, a cool logo for your fashion line, or a special jingle. In India, you have protected this brand by registering it as a trademark.',
                'But what happens when you want to expand overseas? How do you stop someone in another country from copying your brand name or logo?',
                'An Indian trademark offers protection only within the country. To safeguard your brand globally, you need International Trademark Registration. This process allows you to secure your trademark rights in multiple countries through a single application, ensuring your brand stays protected as your business grows across borders.',
                'A trademark is the core of your brands identity. It is a sign that tells customers, This product or service originates from a specific company and meets a certain standard of quality. It can be a name, a logo, a slogan, or even a sound.',
                'When you register a trademark in India, you get the exclusive right to use it in India. This means no one else in India can use a similar mark for similar goods or services. This protection is territorial, meaning it is limited to the geographic borders of India.',
                'International Trademark Registration is the process of getting the same protection in other countries. It extends your brands legal protection beyond Indias borders. It gives you the exclusive right to use your trademark in the specific countries you choose.',
            ],
            highlights: [
                { icon: '📋', text: 'Protect Your Brand When You Sell Abroad: If you want to sell your products or services in other countries, you need to protect your brand there. Without international registration, anyone can copy your name or logo, causing confusion for your customers and damaging your reputation.' },
                { icon: '📊', text: 'Secure Your Online Presence with International Registration: In todays digital world, your business is already global. Your website can be seen by people anywhere. If you sell products online, customers from other countries can buy from you. International trademark protection ensures your brand is safe and cannot be misused as your online reach grows.' },
                { icon: '💰', text: 'To Prevent "Trademark Squatting": Trademark squatting is a serious issue in international business. Someone in another country may notice your growing brand in India and register it in their own country before you do. Later, they can block your entry into that market or demand a hefty payment to release the trademark rights. By registering your trademark internationally in advance, you secure your brand and prevent such costly legal and business hurdles.' },
                { icon: '⚖️', text: 'Building a Global Brand: If your dream is to build a brand that is recognized worldwide, then international registration is a must. It is a fundamental step in creating a strong, global brand identity.' },
            ],
        },
        eligibility: [
            'You are a citizen of India.',
            'You have a business in India. This means you have a real and effective industrial or commercial establishment in India. It could be your factory, your office, or your main place of business.',
            'You are "domiciled" in India. Domicile is a legal term that means India is your permanent home, the place you always intend to return to.',
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'A copy of your Indian Trademark Application or Registration Certificate: This is to get the correct application number and details of your basic mark.',
                    'Identity and Address Proof of the Applicant: This could be your PAN card, Aadhaar card, or company incorporation certificate.',
                    'Power of Attorney (Form TM-48): If you are using a trademark attorney or an agent to file the application for you, you need to sign this form to give them the authority to act on your behalf.',
                    'A digital image of your trademark/logo, if it is a device mark.',
                ],
            },
        ],
        process: [
            { title: 'Step 1: Trademark Search on the WIPOs Global Brand Database', desc: 'Before you spend any money, it is a very good idea to search. You need to check if a similar trademark already exists in the countries where you want to apply.' },
            { title: 'Step 2: File international trademark registration application in Form MM2(E)', desc: 'Once you are ready, you start the process by applying to the Indian Trademark Office.' },
            { title: 'Step 3: Indian Trademark Office Verification', desc: 'The Indian Trademark Office will now act as your home office. They will look at your MM2(E) application and compare it with your basic Indian mark.' },
            { title: 'Step 4: Examination of Application by WIPO', desc: 'Now your application is with WIPO. They will do a formal examination.' },
            { title: 'Step 5: Publication and Notifying Your Chosen Countries', desc: 'This is a key step. WIPO will:' },
            { title: 'Step 6: Examination by Each Countrys Trademark Office', desc: 'Now, the trademark office in each country you designated will examine your application according to its national laws.' },
            { title: 'Step 7: Grant of International Registration by WIPO', desc: 'If a designated country does not refuse protection within the deadline, your trademark is considered protected in that country. WIPO will record the grant of protection in the International Register and will notify you.' },
        ],
        fees: [
            { item: 'Handling Fee — Indian Trademark Office — ~₹5,000', cost: 'One-time processing fee for forwarding the application to WIPO.' },
            { item: 'Basic Fee (Black & White) — WIPO — 653 CHF', cost: 'Standard base fee for international application.' },
            { item: 'Basic Fee (Color) — WIPO — 903 CHF', cost: 'Applicable if the trademark includes colors.' },
            { item: 'Country Designation Fee — WIPO — 100 CHF per country', cost: 'For member countries with standard designation fees.' },
            { item: 'Individual Country Fee — WIPO — Varies', cost: 'Country-specific fee (e.g., USA, EU, Japan have higher rates).' },
            { item: 'Supplementary Fee — WIPO — 100 CHF', cost: 'Charged per class beyond the first three classes.' },
            { item: 'Professional Fee — Your Attorney/Firm — Varies', cost: 'For expert services including filing, classification, and legal support.' },
        ],
        advantages: [
            { icon: '✅', title: 'Legal Safeguard', desc: 'An international trademark is like a legal shield for your brand in other countries.. Exclusive Rights: It gives you the sole right to use your brand name and logo in the countries where you have registered it.; Power to Stop Copycats: If someone in another country tries to use your trademark, you c' },
            { icon: '🏛️', title: 'Builds Business Value & Trust', desc: 'A strong brand is one of the most valuable assets of a company. International trademark registration significantly increases this value.' },
            { icon: '🤝', title: 'New Business Opportunities', desc: 'An international trademark can open doors to new and exciting business opportunities that you might not have considered.' },
            { icon: '📈', title: 'Protects During Export/Import', desc: 'When you send your products to another country, they have to pass through customs. A registered trademark can make this process much smoother.' },
        ],
        disadvantages: [
            'Choosing a Weak Mark: A weak trademark is too descriptive (e.g., "Sweet Chocolate" for chocolates) or generic. These are very difficult to register and protect. Choose a unique, distinctive, and memorable name or logo.',
            'Inadequate Trademark Search: Many people skip the search to save time. This is a big mistake. If you apply for a mark that is already taken in another country, your application will be refused, and you will lose your application fees. A thorough search is a very important first step.',
            'Incorrect Classification: Your goods and services must be classified into the correct classes (there are 45 classes in total). If you put your product in the wrong class, your application can be rejected. This is an area where professional help is very valuable.',
            'Application Errors: Simple mistakes in the application form, like spelling your name wrong or entering the wrong address, can cause serious problems. Double-check every detail before you submit the form.',
        ],
        faqs: [
            { q: 'What is the Madrid Protocol for international trademark registration?', a: 'The Madrid Protocol is an international treaty administered by WIPO that allows trademark owners to file a single application through their home country\'s trademark office to seek protection in multiple member countries. India has been a member since July 2013.' },
            { q: 'How many countries can I protect my trademark in through the Madrid System?', a: 'The Madrid System currently covers over 130 countries, including the USA, EU (via EUIPO), UK, China, Japan, Australia, and most major trading nations. You can designate any combination of member countries in your application.' },
            { q: 'Do I need an Indian trademark registration before filing internationally?', a: 'You need either a pending Indian trademark application or an existing Indian registration as the base mark. The international application is filed through the Indian Trademark Office as the Office of Origin.' },
            { q: 'What happens if my Indian trademark application is refused after international filing?', a: 'If the base Indian mark is cancelled, refused, or restricted within the first 5 years (dependency period), the international registration is correspondingly affected. However, you can convert the affected designations into independent national applications (transformation) to preserve your rights.' },
            { q: 'How long does international trademark registration take?', a: 'WIPO processes the application in about 2–4 months. Each designated country then has 12–18 months to examine and grant or refuse protection. The total timeline varies by country and whether objections are raised.' },
            { q: 'Is international trademark registration expensive?', a: 'The Madrid System is significantly more cost-effective than filing individual national applications. Total costs depend on the number of designated countries and classes. Your Professionals provides a detailed fee estimate based on your specific filing strategy.' },
            { q: 'Can I add more countries later to my international registration?', a: 'Yes. You can file a subsequent designation at any time to extend protection to additional Madrid Protocol member countries without submitting a new international application.' },
            { q: 'How does Your Professionals help with international trademark registration?', a: 'Your Professionals provides end-to-end support — from trademark search and country strategy to WIPO application preparation, filing through the Indian Trademark Office, responding to foreign office actions, and ongoing portfolio management.' },
        ],
        cta: {
            heading: 'Need Help With International Trademark Registration?',
            subheading:
                'Let Your Professionals handle your international trademark registration requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete International Trademark Registration Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 6. TRADEMARK RECTIFICATION ───────────────────────────────────────

    'trademark-rectification': {
        slug: 'trademark-rectification',
        title: 'Trademark Rectification',
        subtitle:
            'Trademark rectification is the legal process of correcting or modifying entries in the Indian Trademark Registry. This ensures the accuracy and validity of registered trademarks. It is a crucial mechanism to address errors, omissions, or circumstances that make a registered trademark legally untenab',
        heroFeatures: [
            'Is Trademark Rectification the Same as Cancellation or Opposition?',
        ],
        overview: {
            heading: 'What is Trademark Rectification?',
            paragraphs: [
                'Trademark rectification is the legal process of correcting or modifying entries in the Indian Trademark Registry. This ensures the accuracy and validity of registered trademarks. It is a crucial mechanism to address errors, omissions, or circumstances that make a registered trademark legally untenable.',
                'Think of it as a clean-up operation for the trademark database, ensuring that only valid and rightful registrations remain.',
            ],
            highlights: [
            ],
        },
        types: [
            { title: 'Section 57 of the Trade Marks Act', desc: 'Section 57 of the Trade Marks Act, 1999, is the core provision enabling rectification of trademark entries in India. Here are its key aspects in pointers:' },
        ],
        eligibility: [
            'All individuals and entities requiring IP protection services',
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'Contact Your Professionals for document checklist',
                ],
            },
        ],
        process: [
            { title: 'Step 1: Drafting the Application and Statement of Case', desc: 'Step 1: Drafting the Application and Statement of Case' },
            { title: 'Step 2: Filing the Application with the Trademark Registry', desc: 'Step 2: Filing the Application with the Trademark Registry' },
            { title: 'Step 3: The Registrar Sends a Notice to the Trademark Owner', desc: 'Step 3: The Registrar Sends a Notice to the Trademark Owner' },
            { title: 'Step 4: Filing the Counter-Statement to Defend Your Trademark', desc: 'Step 4: Filing the Counter-Statement to Defend Your Trademark' },
            { title: 'Step 5: Submitting Evidence and Affidavits from Both Sides', desc: 'Step 5: Submitting Evidence and Affidavits from Both Sides' },
            { title: 'Step 6: The Hearing Process', desc: 'Step 6: The Hearing Process' },
            { title: 'Step 7: The Final Order and Its Impact on the Register', desc: 'Step 7: The Final Order and Its Impact on the Register' },
        ],
        fees: [
            { item: '1. Government Fees (Official Fees for Filing TM-O)', cost: 'This is the mandatory fee paid to the Trademark Registry for applying for rectification of a trademark in India (Form TM-O).; Online Filing (E-Filing): Rs. 2,700; Offline Filing (Physical Filing): Rs. 3,000; Note: This fee is per application for rectification, not per error or change.' },
            { item: '2. Professional Fees (Legal/Consultancy Charges)', cost: 'Many individuals and businesses choose to engage trademark attorneys, legal firms, or online service providers to handle the procedure for rectification of a trademark due to its legal complexities.; Typical Range: While highly variable, professional fees for a standard rectification of trademark can typically range anywhere from Rs. 3,000 to Rs. 15,000 or more, excluding government fees, for the basic filing and drafting services. Complex cases, especially those involving hearings and extensive evidence, could incur higher legal costs.; Varying Costs: These professional fees can vary significantly based on:' },
            { item: '3. Additional Potential Costs:', cost: 'Evidence Collection: If you need to conduct market surveys, obtain specific documents, or hire investigators to gather evidence for your grounds for rectification of trademark (especially for non-use or deceptive marks), these would be additional expenses.; Hearing Fees: While there might not be a direct government fee for attending a hearing, your legal representative will charge for their appearance and arguments during the hearing process.; Miscellaneous: Costs for notarization of affidavits, courier charges, etc.' },
        ],
        advantages: [
            { icon: '✅', title: 'Is Trademark Rectification the Same as Cancellation or Opposition?', desc: 'While all three involve challenging a trademark, they serve different purposes.' },
        ],
        compliance: [
            { area: 'Acknowledgment of Application: After filing the TM-O form an', details: 'Acknowledgment of Application: After filing the TM-O form and required documents, the Trademark Registry issues an acknowledgment confirming receipt of the rectification application.' },
            { area: 'Examination by the Registrar: The Registrar of Trademarks ex', details: 'Examination by the Registrar: The Registrar of Trademarks examines whether the application is valid, complete, and within legal grounds for rectification or cancellation.' },
            { area: 'Notice to the Registered Proprietor: If the application is a', details: 'Notice to the Registered Proprietor: If the application is accepted, the Registry sends a legal notice to the current trademark holder (registered proprietor), inviting their response within a specified timeframe (usually 30 days).' },
            { area: 'Filing of Counter-Statement: The registered proprietor may f', details: 'Filing of Counter-Statement: The registered proprietor may file a counter-statement defending the registration. If no reply is received, the Registrar may proceed ex parte (without their input).' },
            { area: 'Submission of Evidence: Both parties are required to file th', details: 'Submission of Evidence: Both parties are required to file their evidence in support of their claims. This includes affidavits, documents, usage records, non-use proof, etc.' },
            { area: 'Hearing by the Registrar: The Registrar may call for a heari', details: 'Hearing by the Registrar: The Registrar may call for a hearing, where both parties or their attorneys can present oral arguments. This step is crucial in high-stakes rectification cases.' },
            { area: 'Final Order: After reviewing all submissions and hearing bot', details: 'Final Order: After reviewing all submissions and hearing both parties, the Registrar issues a final decision, either rectifying (amending/removing) the trademark or rejecting the application.' },
            { area: 'Appeal (if needed): If either party is dissatisfied with the', details: 'Appeal (if needed): If either party is dissatisfied with the decision, they can appeal before the Intellectual Property Appellate Board (IPAB) or the relevant High Court.' },
        ],
        faqs: [
            { q: 'What is trademark rectification under Indian law?', a: 'Trademark rectification is a legal proceeding under Section 57 of the Trade Marks Act, 1999, that allows any aggrieved person to apply for the correction, modification, or removal of a trademark entry from the Register of Trademarks.' },
            { q: 'On what grounds can a trademark be rectified or removed?', a: 'Common grounds include: the mark was registered without sufficient cause, the registration was obtained by fraud, the mark conflicts with a prior registered/unregistered mark, the proprietor had no bona fide intention to use it, or the mark has not been used for 5 years and 3 months.' },
            { q: 'Who can file a trademark rectification application?', a: 'Any "person aggrieved" can file — this includes competitors, trademark applicants whose marks were refused due to the cited registration, and anyone whose business interests are adversely affected by the registered mark.' },
            { q: 'Where is the rectification application filed?', a: 'The application (Form TM-26) can be filed before the Registrar of Trademarks at the appropriate trademark office having jurisdiction based on the registered proprietor\'s address, or directly before the High Court.' },
            { q: 'What is the filing fee for trademark rectification?', a: 'The government fee for filing Form TM-26 before the Registrar is ₹3,000 per class for individuals and ₹5,000 per class for entities. E-filing attracts a 10% discount. High Court filing fees vary by jurisdiction.' },
            { q: 'How long does trademark rectification take?', a: 'Proceedings before the Registrar typically take 12–24 months, while High Court proceedings may take longer depending on the court\'s schedule. The timeline depends on evidence complexity, counter-statements, and hearing schedules.' },
            { q: 'Can a registered trademark owner defend against rectification?', a: 'Yes. The registered proprietor receives notice and has 2 months to file a counter-statement with evidence defending the validity of their registration. They can present arguments during the hearing to oppose the rectification.' },
            { q: 'How does Your Professionals help with trademark rectification?', a: 'Your Professionals provides comprehensive support — evaluating the merits of your case, gathering evidence, drafting the TM-26 application and Statement of Case, filing before the appropriate forum, and representing you throughout the proceedings.' },
        ],
        cta: {
            heading: 'Need Help With Trademark Rectification?',
            subheading:
                'Let Your Professionals handle your trademark rectification requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Trademark Rectification Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 7. TRADEMARK REGISTRATION ECOMMERCE ──────────────────────────────

    'trademark-registration-ecommerce': {
        slug: 'trademark-registration-ecommerce',
        title: 'Trademark Registration for E-commerce',
        subtitle:
            'For any Indian e-commerce business, trademark registration is crucial for safeguarding your brands identity and securing its future. A trademark, which can be your brand name, logo, slogan, or even product packaging, provides exclusive legal rights, preventing others from copying. This protection is',
        heroFeatures: [
            'Exclusive Legal Protection: A registered trademark grants you the sole right to use your brand name, logo, or slogan for your specific products or services across India. This legal exclusivity is your strongest legal tool against others trying to copy or misuse your brand.',
            'Preventing Brand Confusion and Infringement: In the crowded e-commerce space, identical or similar brands can easily confuse customers. A trademark clearly distinguishes your offerings, preventing competitors from free-riding on your reputation and allowing you to take legal action against infringers.',
            'Building Trust and Credibility: A registered trademark signals professionalism and legitimacy to your customers. It helps build a strong, trustworthy brand image, encouraging customer loyalty and attracting new buyers who recognize and trust your mark.',
            'Creating a Valuable Asset: Your trademark is an intangible asset that appreciates as your business grows. It can be licensed, sold, or even used as collateral, significantly increasing your businesss overall valuation.',
            'Access to E-commerce Platform Brand Protections: Platforms often require a registered trademark to access their advanced brand protection tools, combat counterfeiting, and gain greater control over your product listings.',
        ],
        overview: {
            heading: 'Overview of Trademark Registration for E-commerce Business',
            paragraphs: [
                'For any Indian e-commerce business, trademark registration is crucial for safeguarding your brands identity and securing its future. A trademark, which can be your brand name, logo, slogan, or even product packaging, provides exclusive legal rights, preventing others from copying. This protection is vital in the competitive online marketplace, where establishing customer trust and brand recognition is paramount.',
                'Beyond legal security, a registered trademark transforms your brand into a valuable business asset. This value is recognized by major platforms like Amazon Brand Registry and Flipkart Brand Hub, which offer authenticated brands enhanced protection against counterfeits and access to exclusive selling tools.',
                'Therefore, meticulously choosing the correct trademark classes for your e-commerce services (typically Class 35) and your specific product categories is essential to ensure comprehensive protection and avoid costly rejections or insufficient coverage.',
            ],
            highlights: [
            ],
        },
        eligibility: [
            'All individuals and entities requiring IP protection services',
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'Contact Your Professionals for document checklist',
                ],
            },
        ],
        process: [
            { title: 'Step 1: Conduct a Comprehensive Trademark Search', desc: 'Before you even think about filing, conduct a thorough trademark search. This helps you identify if any identical or similar trademarks already exist in India for similar goods or services. Skipping this step is a common and costly mistake. A comprehensive search vastly reduces the risk of your application being objected to or opposed later. We help you conduct an exhaustive trademark search for e-commerce.' },
            { title: 'Step 2: File the Application (Form TM-A)', desc: 'Once your search confirms that the desired trademark is available, you will proceed to file an online application using Form TM-A through the Indian Trademark Registry. This application must include accurate details about your brand, the nature of your goods or services, and the specific trademark classes relevant to your business—especially crucial for e-commerce sellers dealing across multiple product categories. Precision is key here, as any errors can lead to unnecessary delays or rejections.' },
            { title: 'Step 3: The Examination – What the Registry Checks For', desc: 'Once filed, a Trademark Examiner reviews your application to ensure your mark is distinctive, correctly classified, and does not conflict with existing trademarks. This review considers both absolute and relative grounds for refusal. If issues arise, an examination report will be issued, and you will need to respond within the deadline, justified with supporting documents or clarifications. For e-commerce businesses, where brand visibility is high and competition is intense, addressing objections promptly is essential to safeguard your brands identity.' },
            { title: 'Step 4: Publication in the Trademark Journal – The Public Test', desc: 'Once your application clears examination (and any objections, if raised, are resolved), it gets published in the official Trademark Journal. This acts as a public announcement, giving third parties a four-month window to file an opposition if they believe your mark conflicts with theirs. For e-commerce brands operating in a competitive digital marketplace, this step is critical, as any challenge can delay your legal protection.' },
            { title: 'Step 5: Receive the Registration Certificate', desc: 'If no opposition is filed, or if any raised are successfully defended, your trademark proceeds to final registration. The Trademark Registry then issues the official certificate, granting you the right to use the ® symbol. For online sellers, this marks a vital milestone. Your brand is now legally protected across India, helping you build trust and stand out on e-commerce platforms.' },
        ],
        fees: [
            { item: 'Professional Service Fee', cost: 'Contact Your Professionals for pricing' },
        ],
        advantages: [
            { icon: '✅', title: 'Exclusive Legal Protection: A registered trademark grants you the sole right to ', desc: 'Exclusive Legal Protection: A registered trademark grants you the sole right to use your brand name, logo, or slogan for your specific products or services across India. This legal exclusivity is your strongest legal tool against others trying to copy or misuse your brand.' },
            { icon: '🏛️', title: 'Preventing Brand Confusion and Infringement: In the crowded e-commerce space, id', desc: 'Preventing Brand Confusion and Infringement: In the crowded e-commerce space, identical or similar brands can easily confuse customers. A trademark clearly distinguishes your offerings, preventing competitors from free-riding on your reputation and allowing you to take legal action against infringers.' },
            { icon: '🤝', title: 'Building Trust and Credibility: A registered trademark signals professionalism a', desc: 'Building Trust and Credibility: A registered trademark signals professionalism and legitimacy to your customers. It helps build a strong, trustworthy brand image, encouraging customer loyalty and attracting new buyers who recognize and trust your mark.' },
            { icon: '📈', title: 'Creating a Valuable Asset: Your trademark is an intangible asset that appreciate', desc: 'Creating a Valuable Asset: Your trademark is an intangible asset that appreciates as your business grows. It can be licensed, sold, or even used as collateral, significantly increasing your businesss overall valuation.' },
            { icon: '🔒', title: 'Access to E-commerce Platform Brand Protections: Platforms often require a regis', desc: 'Access to E-commerce Platform Brand Protections: Platforms often require a registered trademark to access their advanced brand protection tools, combat counterfeiting, and gain greater control over your product listings.' },
            { icon: '💼', title: 'Deterring Counterfeiters and Scams: A registered trademark provides the legal ba', desc: 'Deterring Counterfeiters and Scams: A registered trademark provides the legal backing to fight against the proliferation of counterfeit products and fraudulent sellers who might try to exploit your brands reputation online.' },
            { icon: '📋', title: 'Safeguarding Marketing Investments: You invest heavily in marketing and building', desc: 'Safeguarding Marketing Investments: You invest heavily in marketing and building your brands presence. A trademark protects these investments by ensuring that your brand identity remains unique and cannot be easily mimicked by competitors seeking to capitalize on your efforts.' },
        ],
        disadvantages: [
            'Choosing a Generic or Descriptive Name: Avoid trademarks that are too generic or describe the products/services directly, as they are harder to protect.',
            'Not Conducting a Thorough Search: Failing to check existing trademarks can lead to rejection or legal disputes. Always do a comprehensive trademark search first.',
            'Incorrect Trademark Class Selection: Registering under the wrong class can limit your protection. Ensure you select all relevant classes for your products and services.',
            'Ignoring Proper Use Requirements: Trademark protection requires actual use in commerce. Registering a mark you do not use can cause cancellation.',
            'Delaying Registration: Waiting too long increases the risk of someone else registering a similar mark first. File early to secure your rights.',
            'Inadequate Documentation: Submitting incomplete or incorrect documents can delay the process or cause rejection. Follow the checklist carefully.',
        ],
        faqs: [
            { q: 'Can I apply for Amazon Brand Registry with a pending trademark application?', a: 'Yes. Amazon Brand Registry accepts trademarks that have a pending application (with serial/application number) or are already registered. Your Professionals files your TM application and provides the application number typically within 1–2 working days for immediate Brand Registry enrollment.' },
            { q: 'Which trademark class should an e-commerce seller file under?', a: 'It depends on the products you sell. For example, Class 25 covers clothing and footwear, Class 18 covers bags and leather goods, Class 3 covers cosmetics, and Class 9 covers electronics. Your Professionals conducts a detailed product analysis to identify the correct class(es) for comprehensive protection.' },
            { q: 'What is the difference between ™ and ® symbols?', a: 'The ™ symbol indicates a trademark that has been applied for but not yet registered — anyone can use it. The ® symbol can only be used after the trademark is officially registered by the Trade Marks Registry. Using ® without registration is a criminal offence under the Trade Marks Act, 1999.' },
            { q: 'How long does trademark registration take for e-commerce sellers?', a: 'The typical timeline is 8–12 months if there are no objections or oppositions. However, you receive the TM application number within 1–2 days of filing, which is sufficient for Brand Registry enrollment on most platforms.' },
            { q: 'Can I register a trademark for multiple e-commerce platforms with one application?', a: 'Yes. A single trademark registration protects your brand across all platforms and channels — Amazon, Flipkart, Meesho, Myntra, your own website, offline retail, and any other marketplace. You do not need separate registrations for each platform.' },
            { q: 'What happens if my trademark application receives an objection?', a: 'The Examiner may raise objections under Section 9 (absolute grounds) or Section 11 (relative grounds — similarity with existing marks). Your Professionals drafts a detailed reply with legal arguments, evidence of distinctiveness, and prior use proof to overcome the objection.' },
            { q: 'Can I trademark my product name and brand logo separately?', a: 'Yes, and it is often recommended. Filing separate applications for the word mark (brand name) and device mark (logo) provides broader protection. If one is challenged, the other remains protected. Your Professionals offers discounted multi-application packages.' },
            { q: 'What is the cost of trademark registration for e-commerce sellers?', a: 'The government fee is ₹4,500 per class for individuals, startups, and MSMEs, and ₹9,000 per class for other entities. Your Professionals\'s professional fee starts at ₹1,500 per class, making the total cost highly affordable for online sellers.' },
        ],
        cta: {
            heading: 'Need Help With Trademark Registration for E-commerce?',
            subheading:
                'Let Your Professionals handle your trademark registration for e-commerce requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Trademark Registration for E-commerce Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 8. TRADEMARK HEARING ─────────────────────────────────────────────

    'trademark-hearing': {
        slug: 'trademark-hearing',
        title: 'Trademark Hearing',
        subtitle:
            'A trademark hearing is an official session conducted by the trademark registry to address objections or issues raised during the examination of a trademark application. It lets you:',
        heroFeatures: [
            'Direct Presentation: Allows you or your legal representative to present arguments and evidence directly to the Hearing Officer.',
            'Clearer Objections: It helps clear up any confusion or specific objections from the examiner or opposing party.',
            'Efficient Dispute Resolution: Offers a formal, structured platform to resolve disputes, which is often faster and more focused than court litigation.',
            'Trademark Protection: It helps protect the trademark owners rights. They can defend their mark against objections or opposition.',
            'Legal Recognition: A successful hearing can lead to the legal registration of the trademark. This boosts brand identity.',
        ],
        overview: {
            heading: 'What is a Trademark Hearing?',
            paragraphs: [
                'A trademark hearing is an official session conducted by the trademark registry to address objections or issues raised during the examination of a trademark application. It lets you:',
                'This helps make sure only valid trademarks are registered and avoids conflicts.',
                'A trademark hearing matters because it:',
                'The Registrar of Trademarks calls for a hearing when an applicants written response to an examination report is deemed unsatisfactory or when a third party files an opposition. This session provides the applicant a final opportunity to present their case in person, clarify any outstanding issues, and justify why their trademark should be registered before a final decision is made.',
                'A Show Cause Hearing is an important step in the trademark registration process in India. It happens when the Registrar is not fully satisfied with the applicants written reply to the examination report or the objections raised earlier.',
                'If the application status shows "Ready for Show Cause Hearing Trademark Status," it means the Registrar wants the applicant to appear and explain why the trademark should be accepted. This is the applicants chance to give more information, clear doubts, and defend their case in person or through their representative.',
            ],
            highlights: [
                { icon: '📋', text: 'Explain your side of the case' },
                { icon: '📊', text: 'Submit important documents' },
                { icon: '💰', text: 'Respond to concerns from the examiner or others' },
                { icon: '⚖️', text: 'Gives you a chance to defend your application.' },
                { icon: '🔍', text: 'Helps clear up any doubts or objections.' },
                { icon: '📅', text: 'Ensures a fair process by hearing from both sides.' },
            ],
        },
        eligibility: [
            'All individuals and entities requiring IP protection services',
        ],
        documents: [
            {
                category: 'Key Documents Required for the Trademark Hearing',
                items: [
                    'Trademark Application Copy: This includes the application details, the trademark itself, goods/services, and applicant information.',
                    'Examination Report: The report that lists the objections from the Trademark Office.',
                    'Response to Examination Report: Your previous reply to the objections.',
                    'Affidavit of Usage (if used): If you have used the mark, a statement showing when and how much, with proof, can show it is become unique.',
                    'Evidence of Use: Product labels, packaging, ads, marketing materials, invoices, sales records, and website data. These show how the trademark is used in business.',
                    'Ownership Proof: Documents showing you legally own the mark, like a company registration.',
                    'Documents to Counter Objections: Any papers or proof that directly address and fight the objections (e.g., market surveys, expert opinions).',
                    'Previous Correspondence: Copies of all earlier communications with the Trademark Office or any involved parties regarding the application or objections.',
                ],
            },
            {
                category: 'Types of Evidence to Present for Trademark Hearing',
                items: [
                    'Sales figures and money spent on marketing the mark.',
                    'Advertisements, brochures, and promo materials.',
                    'Customer reviews or surveys.',
                    'Details of any other intellectual property rights you hold.',
                    'Articles or news about your mark.',
                ],
            },
        ],
        process: [
            { title: '1. Receive the Trademark Hearing Notice', desc: 'The hearing process begins once you receive a trademark hearing notice from the Registrar. This notice is usually issued under Section 18(4) of the Trade Marks Act, 1999, and informs you of the scheduled date and issues to be discussed.' },
            { title: '2. Prepare Your Case for the Hearing', desc: 'Careful preparation is essential. Collect all necessary documents required for the trademark hearing, including evidence that supports your claim. If a representative attends the trademark hearing on your behalf, submitting an Authority Letter (Form TM-M) or a Power of Attorney (Form TM-48) is mandatory.' },
            { title: '3. How to Get a Trademark Hearing Date', desc: 'Usually, a hearing date is already allotted to you by the Trademark Office. If you have not received it yet, you can request a hearing date through the official IP India Trademark Portal at ipindia.gov.in. Once your request is processed, a hearing date will be assigned to you.' },
            { title: '4. Attend the Hearing', desc: 'India now offers online trademark hearings, providing flexibility to attend remotely. However, physical appearances may still be required at your respective Trademark Office (such as Mumbai, Delhi, Chennai, or Kolkata), depending on the hearing type or complexity.' },
            { title: '5. Post-Hear Procedures', desc: 'After the hearing, the Registrar reviews all submissions and may issue a final decision. You can track your trademark hearing status and view the trademark hearing cause list online for updates.' },
        ],
        fees: [
            { item: 'Other Potential Expenses', cost: 'Professional Fees: Hiring a trademark lawyer or agent for preparation, representation, and follow-up is a major cost.; Travel and Stay: If you attend a physical hearing, you will pay for travel and a place to stay.; Document Prep: Costs for making and printing documents, statements, and evidence.' },
        ],
        advantages: [
            { icon: '✅', title: 'Direct Presentation: Allows you or your legal representative to present argument', desc: 'Direct Presentation: Allows you or your legal representative to present arguments and evidence directly to the Hearing Officer.' },
            { icon: '🏛️', title: 'Clearer Objections: It helps clear up any confusion or specific objections from ', desc: 'Clearer Objections: It helps clear up any confusion or specific objections from the examiner or opposing party.' },
            { icon: '🤝', title: 'Efficient Dispute Resolution: Offers a formal, structured platform to resolve di', desc: 'Efficient Dispute Resolution: Offers a formal, structured platform to resolve disputes, which is often faster and more focused than court litigation.' },
            { icon: '📈', title: 'Trademark Protection: It helps protect the trademark owners rights. They can def', desc: 'Trademark Protection: It helps protect the trademark owners rights. They can defend their mark against objections or opposition.' },
            { icon: '🔒', title: 'Legal Recognition: A successful hearing can lead to the legal registration of th', desc: 'Legal Recognition: A successful hearing can lead to the legal registration of the trademark. This boosts brand identity.' },
            { icon: '💼', title: 'Faster Solutions: Trademark hearings often resolve registration issues quicker t', desc: 'Faster Solutions: Trademark hearings often resolve registration issues quicker than court actions.' },
            { icon: '📋', title: 'Cost-Effective: Compared to full court cases, trademark hearings are generally a', desc: 'Cost-Effective: Compared to full court cases, trademark hearings are generally a cheaper way to settle disputes.' },
        ],
        faqs: [
            { q: 'When is a trademark hearing scheduled?', a: 'A hearing is scheduled when (1) your written reply to the Examination Report does not fully satisfy the Examiner under Section 15, (2) a third party files an opposition against your published trademark under Section 21, or (3) a rectification/cancellation petition is filed under Sections 47 or 57 of the Trade Marks Act, 1999.' },
            { q: 'Can I attend a trademark hearing virtually?', a: 'Yes. Since the Trade Marks (Amendment) Rules, 2017, the Registrar conducts hearings via video conferencing. Your Professionals can represent you at both physical hearings at Registry offices and virtual hearings without requiring your personal presence.' },
            { q: 'What happens if I miss the scheduled hearing date?', a: 'If you fail to appear without requesting an adjournment in advance, the Registrar may decide the matter ex parte. For examination hearings, your application may be refused or abandoned. For opposition hearings, the case may be decided against you in your absence.' },
            { q: 'How should I prepare for a trademark show cause hearing?', a: 'Your Professionals prepares comprehensive written submissions addressing each objection, compiles evidence of brand use and distinctiveness, researches relevant case law precedents, and conducts a pre-hearing briefing. Our attorney then presents structured oral arguments before the Registrar.' },
            { q: 'What are common grounds for objections at show cause hearings?', a: 'Common objections include descriptiveness or lack of distinctiveness (Section 9), deceptive similarity with prior marks (Section 11), use of prohibited marks or emblems (Section 9(2)), and geographical indications. Our attorneys develop specific strategies to counter each type of objection.' },
            { q: 'Can the Registrar\'s hearing decision be appealed?', a: 'Yes. If the Registrar refuses registration or passes an adverse order, you can file an appeal before the High Court having jurisdiction under Section 91 of the Trade Marks Act, 1999. Your Professionals advises on the merits of an appeal and assists with the filing process.' },
            { q: 'How much does trademark hearing representation cost?', a: 'Show cause hearing representation typically costs ₹5,000–₹15,000, opposition hearings ₹10,000–₹25,000, and rectification hearings ₹15,000–₹30,000. Outstation hearings may incur additional charges of ₹5,000–₹10,000. Your Professionals provides transparent, all-inclusive pricing.' },
            { q: 'Do I need to be personally present at the hearing?', a: 'No. Your Professionals\'s IP attorney appears on your behalf with a valid Power of Attorney (Form TM-M). You do not need to be personally present at either physical or virtual hearings. We handle all aspects of representation and keep you informed of the outcome.' },
        ],
        cta: {
            heading: 'Need Help With Trademark Hearing?',
            subheading:
                'Let Your Professionals handle your trademark hearing requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Trademark Hearing Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 9. RESPONSE TO TRADEMARK OBJECTION ───────────────────────────────

    'response-to-trademark-objection': {
        slug: 'response-to-trademark-objection',
        title: 'Response to Trademark Objection',
        subtitle:
            'A trademark objection reply is a formal written response to the Trademark Registry. It is submitted when an examiner raises an objection against your trademark application during its review. This objection, issued under Section 9 or Section 11 of the Indian Trade Marks Act, 1999, may arise due to re',
        heroFeatures: [
            'Official Communication: This report is the formal way the Trademark Examiner communicates their findings after reviewing your application.',
            'Detailed Objections: It lists every single reason why your trademark application cannot be accepted for registration in its current form.',
            'Legal Basis: Each objection will clearly state the specific section(s) of the Trade Marks Act, 1999, that your application is deemed to violate (e.g., Section 9 for non-distinctiveness, Section 11 for similarity to existing marks).',
            'Search Report Attached: Often, the Examination Report includes a "Search Report" as an annexure. This document lists all existing trademarks that the examiner found similar or identical to your proposed mark, which are the basis for Section 11 objections.',
            'Crucial for Reply: You must thoroughly read and understand every point in this report. Your entire trademark objection reply will be structured around rebutting these specific objections.',
        ],
        overview: {
            heading: 'What is a Trademark Objection Reply?',
            paragraphs: [
                'A trademark objection reply is a formal written response to the Trademark Registry. It is submitted when an examiner raises an objection against your trademark application during its review. This objection, issued under Section 9 or Section 11 of the Indian Trade Marks Act, 1999, may arise due to reasons such as a lack of distinctiveness or incorrect documentation.',
                'The reply must address each point of objection with legal reasoning, relevant case laws, and evidence showing that the mark is distinctive and eligible for registration. A timely and well-drafted reply can help overcome the objection and move the application toward registration.',
                'The Examination Report is the official document from the Trademark Registry that outlines the specific reasons for the trademark objection. It will cite relevant sections of the Trade Marks Act, 1999, under which the objections are raised.',
                'Understanding this report is the first crucial step in drafting a compelling response.',
                'Here is what you need to know about the Examination Report:',
            ],
            highlights: [
                { icon: '📋', text: 'Official Communication: This report is the formal way the Trademark Examiner communicates their findings after reviewing your application.' },
                { icon: '📊', text: 'Detailed Objections: It lists every single reason why your trademark application cannot be accepted for registration in its current form.' },
                { icon: '💰', text: 'Legal Basis: Each objection will clearly state the specific section(s) of the Trade Marks Act, 1999, that your application is deemed to violate (e.g., Section 9 for non-distinctiveness, Section 11 for similarity to existing marks).' },
                { icon: '⚖️', text: 'Search Report Attached: Often, the Examination Report includes a "Search Report" as an annexure. This document lists all existing trademarks that the examiner found similar or identical to your proposed mark, which are the basis for Section 11 objections.' },
                { icon: '🔍', text: 'Crucial for Reply: You must thoroughly read and understand every point in this report. Your entire trademark objection reply will be structured around rebutting these specific objections.' },
                { icon: '📅', text: 'Online Availability: Once issued, the Examination Report is uploaded to the IP India online portal, and you can access it using your trademark application number.' },
            ],
        },
        eligibility: [
            'All individuals and entities requiring IP protection services',
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'Copy of the Examination Report: The original or clear copy of the Examination Report issued by the Trademark Registry.',
                    'Trademark Application Details: Your trademark application number, date of filing, and a clear representation of your trademark.',
                    'Proof of Prior Use (if applicable):',
                    'Invoices, sales figures, and purchase orders from the date of first use.',
                    'Advertisement materials (print ads, digital ads, brochures).',
                    'Website screenshots, social media page links, and engagement data.',
                    'Any other promotional materials or evidence of market presence?',
                    'An affidavit of use, duly notarized, detailing the history and extent of your trademarks use.',
                    'Supporting Affidavits: If you need to establish facts, such as acquired distinctiveness or non-confusion, affidavits from relevant parties (e.g., customers, industry experts) are required.',
                    'Legal Arguments & Case Laws: References to relevant sections of the Trade Marks Act, 1999, and citations of relevant judgments from the Intellectual Property Appellate Board (IPAB) or High Courts that support your arguments.',
                    'Power of Attorney (Form TM-48): If you are filing the trademark objection reply through a trademark agent or attorney, a duly executed Power of Attorney in their favor.',
                    'Identity and Address Proof: For the applicant (e.g., PAN card, Aadhaar card, company registration certificate).',
                    'MSME/Startup Certificate: The MSME certificate is applicable to claim any benefits or demonstrate the nature of your business.',
                    'Any Amendments (Form TM-M): If you need to make any changes to the application (e.g., description of goods/services, applicant details), you will need to prepare and file Form TM-M along with the reply and pay the applicable government fees.',
                ],
            },
        ],
        process: [
            { title: 'Step 1: Access the IP India E-filing Portal', desc: 'Open your web browser and go to the official e-filing portal for trademarks in India.' },
            { title: 'Step 2: Log In to Your Account', desc: 'If you are a new user, you will need to register on the portal first. If you are using a trademark attorney, they will use their professional login credentials.' },
            { title: 'Step 3: Navigate to the Reply to Examination Report Section', desc: 'Step 3: Navigate to the Reply to Examination Report Section' },
            { title: 'Step 4: Enter Your Trademark Application Number', desc: 'Step 4: Enter Your Trademark Application Number' },
            { title: 'Step 5: Upload Your Main Trademark Objection Reply Document', desc: 'Step 5: Upload Your Main Trademark Objection Reply Document' },
            { title: 'Step 6: Attach Supporting Documents (Annexures)', desc: 'Step 6: Attach Supporting Documents (Annexures)' },
            { title: 'Step 7: Review and Verify All Submissions', desc: 'Step 7: Review and Verify All Submissions' },
            { title: 'Step 8: Submit the Reply', desc: 'Step 8: Submit the Reply' },
            { title: 'Step 9: Download the Acknowledgment Receipt', desc: 'Step 9: Download the Acknowledgment Receipt' },
        ],
        fees: [
            { item: 'Government Fees', cost: 'One of the most important aspects to note is that, generally, there is no direct government fee specifically for filing the trademark objection reply document itself.' },
            { item: 'Professional Fees', cost: 'This is usually the most significant component of the trademark objection reply charges. These fees are paid to trademark attorneys, legal consultants, or online service providers who assist you in drafting and filing your response.' },
        ],
        advantages: [
            { icon: '✅', title: 'Expert IP Support', desc: 'Dedicated IP professionals from Your Professionals for Response to Trademark Objection' },
            { icon: '🛡️', title: 'Legal Protection', desc: 'Comprehensive protection of your intellectual property rights' },
            { icon: '📈', title: 'Brand Value Enhancement', desc: 'Strengthen your brand and business value through proper IP registration' },
        ],
        compliance: [
            { area: 'Examination Review: The Trademark Officer reviews your reply', details: 'Examination Review: The Trademark Officer reviews your reply to assess if the objections are satisfactorily addressed.' },
            { area: 'Acceptance or Hearing Notice: If satisfied, the mark moves t', details: 'Acceptance or Hearing Notice: If satisfied, the mark moves to journal publication; if not, a hearing is scheduled for further clarification.' },
            { area: 'Trademark Hearing: You or your attorney presents your case i', details: 'Trademark Hearing: You or your attorney presents your case in person or online before the registrar to defend the application.' },
            { area: 'Post-Hearing Decision: Based on the hearing, the officer may', details: 'Post-Hearing Decision: Based on the hearing, the officer may accept, reject, or request modifications to the trademark.' },
            { area: 'Journal Publication & Opposition: If accepted, the trademark', details: 'Journal Publication & Opposition: If accepted, the trademark is published in the Trademark Journal for 4 months, allowing public opposition.' },
        ],
        faqs: [
            { q: 'What happens if I do not file a response to the Examination Report?', a: 'If no response is filed within 30 days from the date of the Examination Report, your trademark application is treated as abandoned under Rule 36 of the Trade Marks Rules, 2017. You will lose your filing date priority and will need to file a fresh application with new fees.' },
            { q: 'Can the 30-day deadline for filing a response be extended?', a: 'The Trade Marks Rules, 2017 provide a strict 30-day window. However, in practice, applicants may request an adjournment or extension at the hearing stage. It is strongly advisable to file the response within the prescribed time to avoid complications.' },
            { q: 'What are absolute grounds and relative grounds for objection?', a: 'Absolute grounds (Section 9) relate to the inherent nature of the mark — e.g., descriptiveness, generic terms, marks lacking distinctiveness, or deceptive marks. Relative grounds (Section 11) relate to conflict with earlier marks — e.g., identical or deceptively similar marks already registered or applied for in the same or similar class.' },
            { q: 'What evidence can strengthen my response?', a: 'Key evidence includes invoices and sales records showing use of the mark in trade, advertising expenditure data, media coverage, consumer surveys, social media presence, certificates of registration in other countries, and affidavits from trade professionals attesting to the mark\'s distinctiveness.' },
            { q: 'What happens at a show-cause hearing?', a: 'A show-cause hearing is scheduled if the Registrar is not satisfied with the written response. At the hearing, the applicant or their authorised agent presents oral arguments before the Registrar, explains the evidence, and addresses any remaining concerns. The Registrar then decides to accept or refuse the mark.' },
            { q: 'Can Your Professionals handle the entire objection response process?', a: 'Yes. Your Professionals manages the complete process — from analysing the Examination Report and gathering evidence to drafting the counter-statement, filing it online, and representing you at any hearing before the Trade Marks Registry.' },
            { q: 'What if my trademark is refused after the hearing?', a: 'If the Registrar refuses your trademark, you can file an appeal before the High Court (following the dissolution of IPAB). Your Professionals advises on the merits of an appeal and assists with the appellate proceedings.' },
            { q: 'Is there an additional government fee for filing the response?', a: 'No. There is no separate government fee for filing a response to the Examination Report. The fees were already paid at the time of filing the original trademark application (Form TM-A). However, professional fees for drafting and representation apply separately.' },
        ],
        cta: {
            heading: 'Need Help With Response to Trademark Objection?',
            subheading:
                'Let Your Professionals handle your response to trademark objection requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Response to Trademark Objection Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 10. TRADEMARK INFRINGEMENT ────────────────────────────────────────

    'trademark-infringement': {
        slug: 'trademark-infringement',
        title: 'Trademark Infringement',
        subtitle:
            'Trademark infringement occurs when an unauthorized party uses a mark that is identical or confusingly similar to a registered trademark, in a manner likely to cause consumer confusion. Under the Indian Trademarks Act, 1999, registered trademark owners have the exclusive right to use their marks, and',
        heroFeatures: [
            'Section 28 grants trademark owners the exclusive right to use their mark.',
            'Section 29 defines trademark infringement. It states that a registered trademark is infringed when anyone, other than the owner or an authorized user, uses a mark that is identical or confusingly similar to the registered mark in trade. This applies to goods or services covered by the trademarks registration.',
        ],
        overview: {
            heading: 'Overview of Trademark Infringement in India',
            paragraphs: [
                'Trademark infringement occurs when an unauthorized party uses a mark that is identical or confusingly similar to a registered trademark, in a manner likely to cause consumer confusion. Under the Indian Trademarks Act, 1999, registered trademark owners have the exclusive right to use their marks, and any unauthorized use can be legally challenged.',
                'In practical terms, infringement includes copying a logo, brand name, or any distinctive mark on similar or related goods and services without permission. The law presumes that such unauthorized use leads to consumer confusion, damaging the trademark owners brand and goodwill. Even the use of a well-known trademark on different goods may amount to infringement if it unfairly exploits the original marks reputation.',
                'This protection ensures that trademark owners can maintain their brand identity and prevent others from misleading consumers or benefiting from their established goodwill.',
                'Trademark infringement happens when someone, without your permission, uses your registered mark in any of the following ways, as outlined under Section 29 of the Trademarks Act, 1999.',
                '1. Identical Mark on Similar Goods: This occurs when someone uses the same trademark on goods or services that are very similar to yours, leading to confusion or misleading consumers.',
                'Example: KRBL Ltd. vs. Praveen Kumar Buyyani & Ors. (2025)',
            ],
            highlights: [
                { icon: '📋', text: 'Section 28 grants trademark owners the exclusive right to use their mark.' },
                { icon: '📊', text: 'Section 29 defines trademark infringement. It states that a registered trademark is infringed when anyone, other than the owner or an authorized user, uses a mark that is identical or confusingly similar to the registered mark in trade. This applies to goods or services covered by the trademarks registration.' },
            ],
        },
        types: [
            { title: '1. Direct Infringement', desc: 'Direct infringement is the classic case: someone who is not you (the proprietor) or your licensee uses your trademark in trade without permission. The law does not always require exact copying; it can be enough if the mark is deceptively similar to yours and used on the same or similar goods/services.' },
            { title: '2. Indirect Infringement', desc: 'Indirect infringement, also known as secondary liability, is not directly mentioned in Section 29 of the Trademarks Act, 1999, but Indian courts apply common law principles and corporate criminal liability (from the IPC and CrPC) to address it. In simple terms, it holds people or companies responsible if they help or benefit from another persons infringement of a trademark.' },
        ],
        eligibility: [
            'All individuals and entities requiring IP protection services',
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'Contact Your Professionals for document checklist',
                ],
            },
        ],
        process: [
            { title: 'Consultation', desc: 'Connect with Your Professionals experts for initial assessment' },
            { title: 'Document Collection', desc: 'Gather and submit all required documents' },
            { title: 'Filing', desc: 'Your Professionals files the application with the appropriate authority' },
            { title: 'Follow-up', desc: 'Track application status and handle any objections' },
        ],
        fees: [
            { item: 'Professional Service Fee', cost: 'Contact Your Professionals for pricing' },
        ],
        advantages: [
            { icon: '✅', title: 'Expert IP Support', desc: 'Dedicated IP professionals from Your Professionals for Trademark Infringement' },
            { icon: '🛡️', title: 'Legal Protection', desc: 'Comprehensive protection of your intellectual property rights' },
            { icon: '📈', title: 'Brand Value Enhancement', desc: 'Strengthen your brand and business value through proper IP registration' },
        ],
        faqs: [
            { q: 'What constitutes trademark infringement under Indian law?', a: 'Under Section 29 of the Trade Marks Act, 1999, infringement occurs when a person uses a mark identical or deceptively similar to a registered trademark, without authorisation, in the course of trade, in relation to goods or services covered by the registration. This includes use on packaging, advertising, business names, and domain names.' },
            { q: 'What is the difference between infringement and passing off?', a: 'Infringement is a statutory remedy available only to registered trademark owners under the Trade Marks Act, 1999. Passing off is a common law remedy available to both registered and unregistered trademark owners, based on misrepresentation causing damage to goodwill. Infringement requires a valid registration; passing off requires proof of reputation, misrepresentation, and damage.' },
            { q: 'Can I take action against someone using a similar (not identical) mark?', a: 'Yes. Section 29(2) covers the use of marks that are similar (not just identical) to the registered trademark on identical or similar goods/services, where such use is likely to cause confusion among the public. The test is whether an average consumer would be confused or deceived.' },
            { q: 'What is an ex-parte interim injunction?', a: 'An ex-parte interim injunction is a court order granted without hearing the other party, in urgent cases where delay would cause irreparable harm. In trademark infringement cases, courts routinely grant ex-parte injunctions to immediately restrain the infringer pending trial.' },
            { q: 'What are the criminal penalties for trademark counterfeiting?', a: 'Under Sections 103 and 104 of the Trade Marks Act, 1999, counterfeiting is punishable with imprisonment of not less than 6 months (extendable to 3 years) and a fine of not less than ₹50,000 (extendable to ₹2,00,000). Police can conduct search and seizure operations under a Magistrate\'s warrant.' },
            { q: 'Can I take action against infringement on e-commerce platforms?', a: 'Yes. Most e-commerce platforms (Amazon, Flipkart, Meesho, etc.) have brand protection programs and IP reporting mechanisms. Your Professionals can file takedown requests on these platforms and also initiate legal proceedings against sellers and platforms in appropriate cases.' },
            { q: 'How long does a trademark infringement case take in India?', a: 'While interim injunctions can be obtained within days to weeks, a full trial in a trademark infringement case typically takes 2–5 years depending on the court, complexity of the case, and parties involved. Commercial Courts Act, 2015 has expedited timelines in some jurisdictions.' },
            { q: 'Does Your Professionals handle the entire infringement process?', a: 'Yes. Your Professionals manages the complete enforcement process — from investigation and cease-and-desist notices to filing civil suits, obtaining injunctions, initiating criminal complaints, and representing you through trial and enforcement of the court decree.' },
        ],
        cta: {
            heading: 'Need Help With Trademark Infringement?',
            subheading:
                'Let Your Professionals handle your trademark infringement requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Trademark Infringement Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 11. TRADEMARK ASSIGNMENT ──────────────────────────────────────────

    'trademark-assignment': {
        slug: 'trademark-assignment',
        title: 'Trademark Assignment',
        subtitle:
            'Trademark Assignment is the legal process of transferring ownership of a registered or applied-for trademark from one party (the assignor) to another (the assignee). Section 37 of the Trade Marks Act, 1999, grants the proprietor the right to assign or transfer a trademark, with or without the goodwi',
        heroFeatures: [
            'Business Sale or Acquisition: When a company is sold or merged, transferring trademarks ensures that the brand identity and intellectual property rights move to the new owner seamlessly, maintaining business continuity.',
            'Licensing and Expansion Opportunities: A trademark transfer can allow companies to license the brand to partners or expand into new markets, making it easier to monetize the brands reputation.',
            'Rebranding or Strategic Partnerships: Companies may transfer trademarks to align with a new business strategy, collaborate with partners, or form joint ventures while protecting the brands value.',
            'Legal Protection and Enforcement: Transferring ownership formally ensures that the new owner can enforce trademark rights against infringement, avoiding disputes or loss of legal protection.',
            'Simplifying Corporate Structure: For large organizations, consolidating trademarks under a single entity through transfer can streamline management, reduce administrative costs, and improve clarity in ownership.',
        ],
        overview: {
            heading: 'What is Trademark Assignment?',
            paragraphs: [
                'Trademark Assignment is the legal process of transferring ownership of a registered or applied-for trademark from one party (the assignor) to another (the assignee). Section 37 of the Trade Marks Act, 1999, grants the proprietor the right to assign or transfer a trademark, with or without the goodwill of the business.',
                'This transfer can be complete or partial, depending on whether all rights or only specific rights are being transferred. It must be documented through an assignment deed and submitted to the Trademark Registry for official record.',
                'Trademark assignment is crucial when businesses are sold, merged, restructured, or when brand rights are inherited. Without a proper assignment, the new owner cannot legally claim or enforce trademark rights.',
                'Once approved by the Registrar, the assignment gives the assignee full legal authority to use, protect, and profit from the trademark.',
            ],
            highlights: [
            ],
        },
        types: [
            { title: '1. Complete Assignment', desc: 'In a complete assignment, the assignor transfers all their rights and interests in the trademark to the assignee across all goods and services for which the trademark is registered or used. The assignor loses all claims to the trademark, and the assignee becomes the sole owner.' },
            { title: '2. Partial Assignment', desc: 'A partial assignment involves transferring the trademark rights only for specific goods or services, or for a particular geographical area. The assignor retains rights over the remaining goods, services, or territories.' },
            { title: '3. Assignment with Goodwill', desc: 'An assignment with goodwill involves transferring the trademark, along with its associated reputation and business. This is common when an entire business is sold, ensuring the buyer also acquires the brands established market presence and customer loyalty. This type of assignment is often preferred as it ensures continuity of the brands identity and value.' },
            { title: '4. Assignment without Goodwill', desc: 'An assignment without goodwill (also known as a "gross assignment") means transferring the trademark rights independently of the business or reputation it has built. This is less common but can occur if, for example, a company wishes to sell only the brand name itself without selling the operational business tied to it. The Indian trademark law generally restricts such assignments to prevent consumer confusion.' },
        ],
        eligibility: [
            'All individuals and entities requiring IP protection services',
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'Contact Your Professionals for document checklist',
                ],
            },
        ],
        process: [
            { title: 'Step 1: Drafting the Trademark Assignment Agreement', desc: 'The first crucial step is to draft a detailed trademark assignment agreement. This legal document outlines the terms and conditions of the transfer, including:' },
            { title: 'Step 2: Executing the Agreement with Legal Formalities', desc: 'After drafting, both the assignor and assignee must execute the trademark assignment deed. This usually involves signing the agreement in the presence of witnesses and, where required, notarizing it. Proper execution ensures the legal validity of the transfer.' },
            { title: 'Step 3: Filing the Application with the Trademark Registry (Form TM-P)', desc: 'Once the assignment agreement is executed, you must apply to the Trademark Registry to officially record the change in ownership. To formally file the trademark assignment, you must submit Form TM-P along with the prescribed fees. This step is critical to ensure the assignment is recognized by the authorities and is binding on third parties.' },
            { title: 'Step 4: Advertisement and Registrars Review', desc: 'In some cases, especially for an assignment of a trademark without goodwill, the Registrar of Trademarks may require the assignment to be advertised in a prescribed manner. This is to ensure public awareness and prevent any potential confusion. The Registrar then reviews the application and supporting documents.' },
            { title: 'Step 5: Final Registration and Ownership Update', desc: 'Upon successful review and satisfaction of all requirements, the Registrar records the trademark assignment. The details of the new owner are updated in the trademark register. This final step formalizes the transfer of assignment of trademark rights.' },
        ],
        fees: [
            { item: 'Government Filing (Form TM-P) — Rs. 9,000 per mark per class — Rs. 2,700 per mark per class', cost: 'Rs. 900 per mark per class' },
            { item: 'Registrar Certificate (TM-17/TM-23) — Rs. 2,500 for the first mark; Rs. 500 for each additional mark — Same as above', cost: 'N/A' },
            { item: 'Extension for Advertisement (TM-21) — Up to Rs. 1,500 depending on the delay — Up to Rs. 1,500 depending on the delay', cost: 'N/A' },
            { item: 'Professional (Legal/Agent) Fees — Rs. 2,500 to Rs. 4,000 approximately — Rs. 2,500 to Rs. 4,000 approximately', cost: 'Rs. 7,000 to Rs. 9,000 approximately' },
            { item: 'Estimated Total Cost — Rs. 12,000 to Rs. 13,000 per mark per class — Rs. 5,000 to Rs. 6,500 per mark per class', cost: 'Rs. 8,000 to Rs. 10,000 total' },
            { item: 'Stamp Duty Charges — Approx. 0.25% to 1% of transaction value — Approx. 0.25% to 1% of transaction value', cost: 'Approx. 0.25% to 1% of transaction value' },
        ],
        advantages: [
            { icon: '✅', title: 'Business Sale or Acquisition: When a company is sold or merged, transferring tra', desc: 'Business Sale or Acquisition: When a company is sold or merged, transferring trademarks ensures that the brand identity and intellectual property rights move to the new owner seamlessly, maintaining business continuity.' },
            { icon: '🏛️', title: 'Licensing and Expansion Opportunities: A trademark transfer can allow companies ', desc: 'Licensing and Expansion Opportunities: A trademark transfer can allow companies to license the brand to partners or expand into new markets, making it easier to monetize the brands reputation.' },
            { icon: '🤝', title: 'Rebranding or Strategic Partnerships: Companies may transfer trademarks to align', desc: 'Rebranding or Strategic Partnerships: Companies may transfer trademarks to align with a new business strategy, collaborate with partners, or form joint ventures while protecting the brands value.' },
            { icon: '📈', title: 'Legal Protection and Enforcement: Transferring ownership formally ensures that t', desc: 'Legal Protection and Enforcement: Transferring ownership formally ensures that the new owner can enforce trademark rights against infringement, avoiding disputes or loss of legal protection.' },
            { icon: '🔒', title: 'Simplifying Corporate Structure: For large organizations, consolidating trademar', desc: 'Simplifying Corporate Structure: For large organizations, consolidating trademarks under a single entity through transfer can streamline management, reduce administrative costs, and improve clarity in ownership.' },
            { icon: '💼', title: 'Financial Benefits: Trademarks are valuable assets; transferring them can be par', desc: 'Financial Benefits: Trademarks are valuable assets; transferring them can be part of a sale agreement, providing financial returns or collateral for business deals.' },
        ],
        faqs: [
            { q: 'What is the difference between trademark assignment and licensing?', a: 'Assignment permanently transfers ownership of the trademark from the assignor to the assignee — the assignor ceases to be the proprietor. Licensing grants permission to use the mark while the licensor retains ownership. Assignment requires recordal with the Registry; licensing requires registration of the user under Section 49.' },
            { q: 'Can a trademark be assigned without the goodwill of the business?', a: 'Yes. Under Section 39 of the Trade Marks Act, 1999, a trademark can be assigned without the goodwill of the business. However, the Registrar must be satisfied that the assignment will not cause confusion among the public. The Registrar may impose conditions or direct advertisement of the assignment.' },
            { q: 'What is the difference between Form TM-23 and Form TM-24?', a: 'Form TM-23 is a joint application filed by both the assignor and assignee together for recording the assignment. Form TM-24 is filed by the assignee alone and must be accompanied by proof of title (e.g., the assignment deed, court order, or other documentary evidence of the transfer).' },
            { q: 'Is there a time limit for recording the assignment?', a: 'While there is no strict statutory deadline, it is advisable to file the application for recordal within 6 months from the date of the assignment deed. Delay in recording may result in the assignee being unable to enforce the mark, and third parties may acquire rights in the interim.' },
            { q: 'Can a pending trademark application be assigned?', a: 'Yes. A trademark application that has not yet been registered can be assigned. The assignment is recorded and the assignee replaces the assignor as the applicant on record, continuing with the registration process.' },
            { q: 'What happens if the assignment is not recorded with the Registry?', a: 'Under Section 45 of the Trade Marks Act, 1999, an unregistered assignment is not effective against third parties. The assignor remains the recorded proprietor, and the assignee cannot enforce the mark or be recognised as the owner until the assignment is recorded in the Register.' },
            { q: 'Can a trademark be assigned for only some goods or services?', a: 'Yes. Partial assignment is permitted, where the mark is transferred only for certain goods or services covered by the registration. However, Section 40 restricts assignments that would create confusion — the Registrar may refuse recordal if concurrent use of the mark by different persons would mislead the public.' },
            { q: 'Does Your Professionals handle the complete assignment process?', a: 'Yes. Your Professionals manages the entire trademark assignment process — from preliminary assessment and drafting the assignment deed to preparing and filing the TM-23 or TM-24 form, addressing Registry queries, and ensuring the assignment is recorded with the new proprietor reflected in the Register.' },
        ],
        cta: {
            heading: 'Need Help With Trademark Assignment?',
            subheading:
                'Let Your Professionals handle your trademark assignment requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Trademark Assignment Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 12. COPYRIGHT REGISTRATION ────────────────────────────────────────

    'copyright-registration': {
        slug: 'copyright-registration',
        title: 'Copyright Registration',
        subtitle:
            'Copyright Registration is the official legal process of securing your ownership over an original creative work with the government. This registration grants you exclusive rights over how your work is used, distributed, and reproduced.',
        heroFeatures: [
            'Disadvantages of Copyright Registration',
        ],
        overview: {
            heading: 'What is Copyright Registration?',
            paragraphs: [
                'Copyright Registration is the official legal process of securing your ownership over an original creative work with the government. This registration grants you exclusive rights over how your work is used, distributed, and reproduced.',
                'While copyright protection is automatically granted in India when a work is created, formal registration provides a legal advantage. The issued Copyright Registration certificate acts as prima facie evidence of your ownership in a court of law, which is essential for enforcement.',
                'The definition of Copyright Registration is the creation of a public, verifiable record of your intellectual property rights.',
                'The main purpose of Copyright Registration is:',
                'The registration of copyright under the Copyright Act 1957 applies to a broad spectrum of creative works.',
                'Here are the types of works eligible for Copyright Registration:',
            ],
            highlights: [
                { icon: '📋', text: 'Get Official Proof: Puts your name on a public list as the owner, which serves as strong proof in court.' },
                { icon: '📊', text: 'Protect Your Work: Allows you to sue people who copy your work illegally and warns others not to.' },
                { icon: '💰', text: 'Simplify Monetization: Makes it much easier and safer for you to sell, rent, or license your work.' },
                { icon: '⚖️', text: 'Gain Full Control: Gives you solid control over your creative vision and the money you earn from it.' },
                { icon: '🔍', text: 'Examples: Books, articles, poetry, manuscripts, blogs, and websites.' },
                { icon: '📅', text: 'Technical Works: Also covers computer programs (source code and object code) and databases.' },
            ],
        },
        eligibility: [
            'Be original and creative with a minimum level of creativity',
            'Be fixed in a tangible medium of expression',
            'Fall within the categories protected under the Copyright Act',
            'Not merely an idea, procedure, process, system, method of operation, concept, principle, or discovery',
            'Not a work that has fallen into the public domain',
            'The original author or creator of the work.',
            'The legal owner who has acquired rights through assignment or transfer.',
            'Organizations or employers for work created during employment.',
            'Legal heirs or representatives of deceased authors.',
        ],
        documents: [
            {
                category: 'Basic Documents for All Applications',
                items: [
                    'Completed Form XIV (application form)',
                    'Power of Attorney (if filed through an agent)',
                    'DD (Demand Draft)/IPO (Indian Postal Order)/online payment receipt for application fee',
                    'Statement of particulars and further particulars',
                    'Applicants identification proof (Aadhar/PAN/Passport)',
                    'Address proof of the applicant',
                    'Declaration of ownership and originality',
                ],
            },
            {
                category: 'For Literary Works',
                items: [
                    'Two copies of the manuscript/published work',
                    'Synopsis or extract of work (if complete work is voluminous)',
                    'NOC from the publisher (if published)',
                    'NOC from Co-authors or Contributors (if multiple people involved)',
                    'Assignment deed (if the author is not the applicant)',
                    'Evidence of first publication (for published works)',
                    'Translation permission (if the work is a translation)',
                ],
            },
            {
                category: 'For Artistic Works',
                items: [
                    'Photographs or digital images of the artwork',
                    'Description of the work, including dimensions, materials used',
                    'Exhibition history (if applicable)',
                    'Portfolio or catalog showing the work',
                    'Certificate of authenticity (if available)',
                    'Commission agreement (if work was commissioned)',
                    'NOC from client/employer (if artwork was made under contract or commission)',
                ],
            },
            {
                category: 'For Musical Works',
                items: [
                    'Musical notation or score',
                    'Audio recording (if available)',
                    'Lyrics (if applicable)',
                    'Collaboration agreements (if jointly created)',
                    'Performance permissions (if it includes other artists)',
                    'Publishing contracts (if commercially released)',
                ],
            },
            {
                category: 'For Cinematograph Films',
                items: [
                    'DVD/digital copy of the film',
                    'Synopsis and credits',
                    'Chain of title documents',
                    'Agreements with performers and technicians',
                    'Distribution agreements (if applicable)',
                    'Censorship certificate (if commercially released in India)',
                ],
            },
            {
                category: 'For Sound Recordings',
                items: [
                    'CD/digital copy of the recording',
                    'Details of performers and the recording process',
                    'Agreement with performers',
                    'Studio recording documentation',
                    'Mixing and mastering information',
                    'Composer/Lyricist NOC or Contracts (if third-party content was used)',
                    'Release information (if commercially available)',
                ],
            },
            {
                category: 'Additional Documents for Specific Cases',
                items: [
                    'For software: Portions of source code and object code',
                    'For foreign works: Evidence of first publication',
                    'For posthumous works: Death certificate of the author and heir documents',
                    'For joint authorship: No-objection certificates from all authors',
                    'For work created during employment: Employment contract or NOC from employer',
                    'For work made for hire: Contract detailing copyright ownership',
                ],
            },
        ],
        process: [
            { title: 'Step 1: Identify & Prepare Your Work', desc: 'Determine the appropriate classification for your work and gather all required documents, including proof of identity, copies of your work, and completed Form XIV.' },
            { title: 'Step 2: Create Your Application', desc: 'Register on the copyright e-filing portal (Copyright Office) for online filing or prepare physical documents for submission to the Copyright Office in New Delhi.' },
            { title: 'Step 3: Submit Your Application', desc: 'Complete the submission process either through the online portal (recommended) or by physical submission to the Copyright Office.' },
            { title: 'Step 4: Application Examination', desc: 'Your application undergoes scrutiny for completeness and compliance with copyright regulations.' },
            { title: 'Step 5: Publication & Opposition Period', desc: 'Application details are published in the Copyright Office Journal, followed by a 30-day window for third-party objections.' },
            { title: 'Step 6: Registration Certificate Issuance', desc: 'After successful verification and completion of the opposition period, the Copyright Office issues your registration certificate. The certificate is now digitally signed and available online as a PDF, and your copyright is entered into the Register of Copyrights as a public record.' },
        ],
        fees: [
            { item: 'Registration Costs', cost: 'The official government fees for Copyright Registration in India are statutory and paid directly to the Copyright Office. The current rates are as follows:' },
            { item: 'Penalties for Infringement', cost: 'Infringement of copyright is a serious offense under the Copyright Act, 1957, and carries both civil and criminal penalties, including:' },
        ],
        advantages: [
            { icon: '✅', title: 'Disadvantages of Copyright Registration', desc: 'While beneficial, it is good to be aware of the potential downsides:. Time, Cost, and Complexity: The registration process is not instant; it can take several months. It involves government fees and potentially legal costs if you hire help. The paperwork can also be complex.; Owners Responsibility: ' },
        ],
        faqs: [
            { q: 'Is copyright registration mandatory in India?', a: 'No, copyright automatically comes into existence when an original work is created and fixed in a tangible form. However, registration is highly recommended as it provides prima facie evidence of ownership, makes enforcement easier, and is necessary for filing infringement suits in many cases.' },
            { q: 'How long does copyright registration take in India?', a: 'The process typically takes 2 to 6 months from the date of filing, including the mandatory 30-day objection period and examination by the Copyright Examiner. Your Professionals ensures timely filing and follow-ups to minimize delays.' },
            { q: 'Can I copyright software or a mobile app?', a: 'Yes, computer programs (including software source code, mobile apps, and databases) are classified as literary works under Section 2(o) of the Copyright Act, 1957. Copyright registration is the most cost-effective way to protect software in India.' },
            { q: 'What is the duration of copyright protection in India?', a: 'For literary, dramatic, musical, and artistic works, copyright lasts for the lifetime of the author plus 60 years from the beginning of the calendar year following the year of the author\'s death. For cinematographic films and sound recordings, it lasts 60 years from the year of publication.' },
            { q: 'Can I register copyright for an unpublished work?', a: 'Yes, both published and unpublished works can be registered with the Copyright Office in India. Registration of unpublished works helps establish the date of creation and authorship, which can be crucial in future infringement disputes.' },
            { q: 'What is the difference between copyright and trademark?', a: 'Copyright protects original creative expressions (books, music, art, software) while trademarks protect brand identifiers (names, logos, slogans) used in commerce. A logo, for example, can be protected under both — copyright for its artistic expression and trademark for its brand identification function.' },
            { q: 'Is my Indian copyright valid internationally?', a: 'Yes, India is a signatory to the Berne Convention, TRIPS Agreement, and the Universal Copyright Convention. Works registered in India are automatically recognized and protected in over 180 member countries without the need for separate registration in each country.' },
            { q: 'How can Your Professionals help with copyright registration?', a: 'Your Professionals provides complete copyright registration support — from identifying the correct category of work and preparing the application in Form XIV to filing on the Copyright Office e-filing portal, handling examiner objections, and securing the registration certificate.' },
        ],
        cta: {
            heading: 'Need Help With Copyright Registration?',
            subheading:
                'Let Your Professionals handle your copyright registration requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Copyright Registration Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 13. PATENT REGISTRATION ───────────────────────────────────────────

    'patent-registration': {
        slug: 'patent-registration',
        title: 'Patent Registration',
        subtitle:
            'Patent registration is the legal process through which an inventor obtains exclusive rights to their invention for a specified period, usually 20 years from the filing date in India. A patent prevents others from manufacturing, applying, selling, or importing the patented product or process without ',
        heroFeatures: [
            'Legal Protection',
            'Commercial Value',
            'Brand Identity',
            'Sustainable Growth',
            'Challenges in the Patent Registration Process',
        ],
        overview: {
            heading: 'What is Patent Registration?',
            paragraphs: [
                'Patent registration is the legal process through which an inventor obtains exclusive rights to their invention for a specified period, usually 20 years from the filing date in India. A patent prevents others from manufacturing, applying, selling, or importing the patented product or process without the owners permission.',
                'This legal process ensures an invention is new, involves an inventive step, and is capable of industrial application, granting the owner legal ownership. In short, a patent protects the way an invention works, process, or method of manufacture.',
                'While the Indian Patents Act, 1970 does not explicitly categorize patents into specific types, patentable inventions can generally be divided based on their nature, such as:',
                'Product patents are granted for new, useful, and inventive physical items. These can include machines, devices, tools, pharmaceutical compositions, or chemical compounds.',
                'A process patent protects a new and original method of creating something, usually related to manufacturing or production. The focus is on the steps or techniques, not the end product.',
                'These patents cover innovations involving biological materials or processes. This can include genetically engineered microorganisms, biotechnological production techniques, or bio-based chemical processes.',
            ],
            highlights: [
                { icon: '📋', text: 'Example: A new drug formulation or a multi-functional mechanical device.' },
                { icon: '📊', text: 'Example: A unique method for purifying water or producing eco-friendly plastic.' },
                { icon: '💰', text: 'Example: A genetically modified microorganism that helps clean oil spills.' },
                { icon: '⚖️', text: 'Example: A traffic control system that uses both software and special devices to manage traffic better.' },
                { icon: '🔍', text: 'Making the patented invention.' },
                { icon: '📅', text: 'Using the patented invention.' },
            ],
        },
        eligibility: [
            'Novelty',
            'Inventive Step (Non-Obviousness)',
            'Industrial Applicability',
            'A Process or Method: A new way of making something or a new technical process.',
            'A Machine: A new device or apparatus.',
            'An Article of Manufacture: A product that has been made, like a tool or a component.',
            'A Composition of Matter: A new chemical compound or mixture of ingredients, such as a pharmaceutical drug.',
            'Additional: An improvement or changes to any of the above.',
            'Frivolous (useless) inventions or those contrary to well-established natural laws.',
            'Scientific principles or theories, discoveries of new scientific principles, or abstract theories.',
            'The mere discovery of any living or non-living substance occurring naturally on the earth or in nature (Section 3(b)).',
            'A new form of a known substance that does not enhance its efficacy (Section 3(c)).',
            'A mere discovery of a new property or new use for a known substance (Section 3(d)).',
            'Substances obtained by mere admixture resulting only in the aggregation of properties of components (Section 3(e)).',
            'Methods of agriculture or horticulture (Section 3(j)).',
            'Biological processes for the production or propagation of plants or animals, except microbiological processes (Section 3(k)).',
            'Processes for medical, surgical, curative, prophylactic, diagnostic, therapeutic, or other treatment of humans or animals (Section 3(i)).',
            'Computer programs per se (by themselves) and business methods (Section 3(k)).',
            'Literary, dramatic, musical, or artistic works, which are protected under copyright law, not patent law.',
            'Inventions prejudicial to public order, morality, or health (Section 3(f) and 3(j)).',
            'Inventions related to atomic energy as governed by separate laws (Section 4).',
            'Traditional knowledge or knowledge from biodiversity (Section 3(h)).',
            'Methods of playing games or algorithms without technical application (covered under computer programs and abstract ideas).',
        ],
        documents: [
            {
                category: '1. Application and Declarations',
                items: [
                    'Form 1 (Application for Grant of Patent): This form includes details about the inventor(s) and applicant(s), such as their names, addresses, and the inventions title. If you are claiming priority based on an earlier application filed abroad, this must also be mentioned.',
                    'Form 5 (Declaration of Inventorship): This document declares who the original inventors are. It must accompany the complete patent application or be submitted within the deadline set by the patent office.',
                    'Form 3 (Statement and Undertaking): This form provides information about any corresponding patent applications filed in other countries and requires periodic updates as necessary. It should be filed within six months of the initial application, if applicable.',
                    'Form 26 (Power of Attorney): Required only if you appoint a patent agent or attorney to represent you. This form authorizes them to act on your behalf.',
                    'Proof of Right to Apply: If the applicant is not the inventor (for example, a company filing on behalf of an employee), you need to submit a document such as an assignment deed or a No Objection Certificate (NOC) from the inventor.',
                    'Startup/Small Entity Certificate: Startups or small businesses seeking reduced fees must provide valid certificates like DPIIT recognition or MSME registration, which should be current at the time of filing.',
                ],
            },
            {
                category: '2. The Patent Specification (Form 2)',
                items: [
                    'Provisional Specification: An initial document to secure the filing date. A complete specification must be submitted within 12 months, or the application will be considered withdrawn.',
                    'Complete Specification:',
                    'Title: A brief and clear name of the invention. Field of Invention: The technical area to which the invention belongs. Background: Explanation of existing technologies and the problems the invention solves. Summary: A concise description of the invention and its advantages. Detailed Description: A thorough explanation, including examples and drawings, describing the best way to carry out the invention. Claims: Numbered statements that define the scope of legal protection sought. This section is critical from a legal perspective. Abstract: A summary (about 150 words) highlighting key technical points of the invention. Drawings: Clear, properly formatted illustrations, if applicable, that visually explain the invention. Sequence Listing (if applicable): For inventions involving biological sequences, a specific sequence listing must be submitted according to patent office guidelines.',
                    'Title: A brief and clear name of the invention.',
                    'Field of Invention: The technical area to which the invention belongs.',
                    'Background: Explanation of existing technologies and the problems the invention solves.',
                    'Summary: A concise description of the invention and its advantages.',
                    'Detailed Description: A thorough explanation, including examples and drawings, describing the best way to carry out the invention.',
                    'Claims: Numbered statements that define the scope of legal protection sought. This section is critical from a legal perspective.',
                    'Abstract: A summary (about 150 words) highlighting key technical points of the invention.',
                    'Drawings: Clear, properly formatted illustrations, if applicable, that visually explain the invention.',
                    'Sequence Listing (if applicable): For inventions involving biological sequences, a specific sequence listing must be submitted according to patent office guidelines.',
                ],
            },
            {
                category: '3. Additional Documents',
                items: [
                    'Request for Examination (Form 18): You must file this form to request examination of your patent application within the prescribed timeframe.',
                    'Priority Documents: If you claim priority based on an earlier application filed abroad, you need to provide certified copies of those priority documents within three months of filing the Indian application.',
                    'Assignment or Licensing Agreements: If there has been a transfer or license of rights after filing, submit the relevant agreements.',
                    'Statement of Inventorship and Authorization (Form 21): Use this if there are any changes in inventorship or applicant details during the application process.',
                ],
            },
        ],
        process: [
            { title: 'Step 1: Patentability Search', desc: 'Before filing a patent application, it is advisable to perform a thorough search for existing patents, publications, or products related to your invention. Although not mandatory, this search helps ensure your invention is unique and inventive, potentially saving you from wasted effort and expenses on an application that might be rejected for lack of novelty.' },
            { title: 'Step 2: Draft the Patent Application (Specification)', desc: 'Drafting your patent application is a crucial phase that requires precision. It is recommended to seek professional assistance because poorly drafted applications can weaken your patent rights or lead to refusal. You can choose to file:' },
            { title: 'Step 3: File the Patent Application', desc: 'Submit your application to the Indian Patent Office either online or offline, along with the necessary filing fees (Rs. 1,600 for individuals and startups/small entities, Rs. 8,000 for large companies). Once filed, you will receive a filing date and an application number, which establishes your priority.' },
            { title: 'Step 4: Publication of the Application', desc: 'Your patent application will be made public after 18 months from the earliest filing or priority date unless you request early publication by filing a specific request. After publication, the public can view your invention details and may oppose the application within a defined period.' },
            { title: 'Step 5: Request for Examination (RFE)', desc: 'The Patent Office will not examine your application on its own. You must formally ask for it by filing a Request For Examination (RFE) using Form 18. You have 48 months from the filing date to do this. Once you file the RFE, your application is placed in a queue for a patent examiner to review.' },
            { title: 'Step 6: Respond to the Examination Report', desc: 'An examiner will check your application to see if it meets all the requirements of the Patents Act (novelty, inventive step, etc.). The examiner will then issue a First Examination Report (FER), listing any objections. You will be given a chance to respond to these objections. You must provide clear arguments or amend your claims to satisfy the examiner.' },
            { title: 'Step 7: Grant of Patent', desc: 'If you successfully overcome all the objections, the Controller of Patents will grant the patent. The grant will be announced in the Patent Office Journal, and you will receive the official patent registration certificate. This certificate is the legal proof that you are the owner of the invention and have exclusive rights for 20 years from the filing date.' },
        ],
        fees: [
            { item: 'Individual — Rs. 1,600 — Rs. 4,000 — Rs. 2,000', cost: 'Rs. 8,000 to Rs. 10,000' },
            { item: 'Startup / Small Entity — Rs. 1,600 — Rs. 4,000 — Rs. 2,000', cost: 'Rs. 8,000 to Rs. 10,000' },
            { item: 'Large Company — Rs. 8,000 — Rs. 20,000 — Rs. 5,000', cost: 'Rs. 30,000 or more' },
            { item: 'Service', cost: 'Estimated Cost Range' },
            { item: 'Preparation of Patent Application', cost: 'Rs. 20,000 to Rs. 50,000' },
            { item: 'Filing and Patent Processing', cost: 'Rs. 10,000 to Rs. 30,000' },
            { item: 'Addressing Examination Reports', cost: 'Rs. 5,000 to Rs. 15,000' },
        ],
        advantages: [
            { icon: '✅', title: 'Legal Protection', desc: 'While getting a patent is very valuable, the process can have its challenges:. Exclusive Rights: Registration gives the patent owner the sole right to use the invention in India for 20 years.; Right to Sue: It gives you the legal power to take action against anyone who copies your patent.' },
            { icon: '🏛️', title: 'Commercial Value', desc: 'While getting a patent is very valuable, the process can have its challenges:. Earning Revenue: A patent can be licensed to other companies for royalty payments or sold for a one-time payment.; Increased Company Value: A strong patent portfolio makes a company more valuable to investors, partners, a' },
            { icon: '🤝', title: 'Brand Identity', desc: 'While getting a patent is very valuable, the process can have its challenges:. Competitive Edge: A patent can make it hard for competitors to enter the market.; Building Trust: Owning a patent shows you are innovative and an expert, which improves your brands reputation.' },
            { icon: '📈', title: 'Sustainable Growth', desc: 'While getting a patent is very valuable, the process can have its challenges:. Appeals to Investors: A patented invention serves as a valuable asset, making the business more attractive to potential investors.; Confidence to Expand: With patent protection in place, companies can confidently invest i' },
            { icon: '🔒', title: 'Challenges in the Patent Registration Process', desc: 'While getting a patent is very valuable, the process can have its challenges:. Long Process: The registration process can take 3 to 7 years or even longer, depending on its complexity.; Expensive: Besides government fees, you may need a patent professional to handle the complex application process, ' },
        ],
        faqs: [
            { q: 'What can be patented in India?', a: 'Any new invention — a product or process — that involves an inventive step and is capable of industrial application can be patented. However, the Patents Act, 1970 excludes certain categories under Sections 3 and 4, including abstract theories, mathematical methods, computer programs per se, methods of agriculture, traditional knowledge, and inventions contrary to public morality.' },
            { q: 'What is the difference between a provisional and complete specification?', a: 'A provisional specification is a preliminary description filed to secure an early filing date when the invention is still in development. A complete specification includes the full technical details, claims, drawings, and abstract. If a provisional is filed first, the complete specification must be submitted within 12 months.' },
            { q: 'How long does it take to get a patent granted in India?', a: 'The typical timeline from filing to grant is 3 to 5 years, depending on the complexity of the invention, examination backlog, and whether any opposition is filed. Expedited examination is available for startups, MSMEs, and female applicants under the revised Patent Rules.' },
            { q: 'How long is a patent valid in India?', a: 'A patent is valid for 20 years from the date of filing of the application. The patent holder must pay annual renewal fees to maintain the patent in force. Failure to pay renewal fees results in lapse of the patent.' },
            { q: 'Can software be patented in India?', a: 'Computer programs "per se" are excluded from patentability under Section 3(k) of the Patents Act. However, software inventions that demonstrate a technical effect or solve a technical problem beyond the ordinary interaction with a computer may be patentable — the key is framing the claims around the technical contribution.' },
            { q: 'What is the Patent Box Regime in India?', a: 'The Patent Box Regime under Section 115BBF of the Income Tax Act, 1961 offers a concessional tax rate of 10% on royalty income earned from patents developed and registered in India. This incentive encourages domestic innovation and patent filing.' },
            { q: 'Can I file a patent internationally from India?', a: 'Yes, you can file in foreign countries either directly or through the PCT (Patent Cooperation Treaty) route. An Indian filing gives you a 12-month priority window under the Paris Convention to file in other member countries. The PCT route allows entry into 150+ countries through a single international application.' },
            { q: 'How can Your Professionals help with patent registration?', a: 'Your Professionals provides end-to-end patent registration support — from prior art search and patentability analysis to specification drafting, application filing at the Indian Patent Office, responding to examination reports, handling oppositions, and guiding you through prosecution until the patent is granted.' },
        ],
        cta: {
            heading: 'Need Help With Patent Registration?',
            subheading:
                'Let Your Professionals handle your patent registration requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Patent Registration Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 14. DESIGN REGISTRATION ───────────────────────────────────────────

    'design-registration': {
        slug: 'design-registration',
        title: 'Design Registration',
        subtitle:
            'Design registration is the legal process of protecting the unique visual appearance of a product, officially recognizing you as the owner. In India, registering a design gives the creator the exclusive right to use it on products, manufacture and sell items featuring the design, and stop others from',
        heroFeatures: [
            'Legal Protection and Enforcement',
            'Commercial Value and Monetisation',
            'Marketplace Advantage and Brand Identity',
            'Long-Term Security and Investor Confidence',
        ],
        overview: {
            heading: 'What is Design Registration?',
            paragraphs: [
                'Design registration is the legal process of protecting the unique visual appearance of a product, officially recognizing you as the owner. In India, registering a design gives the creator the exclusive right to use it on products, manufacture and sell items featuring the design, and stop others from copying or imitating it without permission.',
                'Governed by the Designs Act 2000, this process ensures that a design is truly original, aesthetically unique, and has not been published before. Unlike patents, which protect how something works, design registration focuses on how something looks—its shape, pattern, or overall appearance.',
                'To obtain design registration in India under the Designs Act, 2000, and Design Rules, 2001, your design must meet these core requirements:',
                'Before beginning the application process, entrepreneurs, designers, and businesses should familiarize themselves with the different design categories that can be registered in India.',
                'Visual features applied to industrial products, including shape, configuration, pattern, ornament, or composition of lines or colors. These designs give products a unique visual appeal while maintaining functionality.',
                'Patterns, ornaments, or decorative elements are applied to the surface of products. Design registration protects the visual appearance rather than the functional aspects of the article.',
            ],
            highlights: [
                { icon: '📋', text: 'Novelty & Originality: The design must be new and not previously published, used, or sold publicly in India or elsewhere before your application date. It should not significantly resemble any existing design.' },
                { icon: '📊', text: 'Visual Appeal (Aesthetic): It must be primarily ornamental and visually attractive, rather than purely functional. Designs driven solely by an articles function are generally not registrable.' },
                { icon: '💰', text: 'Industrial Applicability: The design must be suitable for application to an article through industrial processes, allowing for its reproduction on manufactured goods.' },
                { icon: '⚖️', text: 'Non-Prohibited: The design should not violate public order or morality, threaten national security, or be a mere mechanical device, trademark, or copyrighted artwork.' },
                { icon: '🔍', text: 'No Prior Disclosure: It must not have been publicly disclosed in any way before you file your registration application.' },
                { icon: '📅', text: 'Grants a legal monopoly over your products appearance, preventing competitors from using an identical or deceptively similar design.' },
            ],
        },
        eligibility: [
            'All individuals and entities requiring IP protection services',
        ],
        documents: [
            {
                category: 'Basic Documents',
                items: [
                    'Completed Form 1 (Application for registration of design)',
                    'Form 2 (Representation sheet containing a clear visual representation)',
                    'Power of Attorney (Form 21, if filed through an agent)',
                    'Proof of payment of application fees',
                    'Applicants identification proof (Aadhar/PAN/Passport)',
                    'Address proof of the applicant.',
                ],
            },
            {
                category: 'For Design Representation',
                items: [
                    'Four identical copies of the design representation',
                    'Different views (front, rear, side, perspective) of the design',
                    'Clear photographs or drawings showing all features of the design',
                    'Statement of novelty highlighting the new features',
                ],
            },
            {
                category: 'For Convention Applications',
                items: [
                    'Priority document from the foreign design office',
                    'Certified English translation (if not in English)',
                    'Details of corresponding applications',
                ],
            },
            {
                category: 'Additional Documents for Specific Design Registration Cases',
                items: [
                    'For legal entity applicants: Certificate of incorporation /registration',
                    'For joint applicants: No-Objection Certificates from all designers',
                    'For employee designs: An Assignment deed from the designer',
                    'For acquired designs: Proof of right to apply',
                    'For designs derived from traditional knowledge: Source declaration',
                ],
            },
        ],
        process: [
            { title: 'Step 1: Design Search and Evaluation', desc: 'Conduct a thorough design search to ensure your design is novel and not previously registered. Evaluate your design against the registrability criteria of novelty, originality, and aesthetic appeal before starting the design registration process.' },
            { title: 'Step 2: Prepare Design Documentation', desc: 'Create clear visual representations of your design from multiple angles. Prepare a statement of novelty highlighting the unique features of your design that meet registration requirements.' },
            { title: 'Step 3: Classify Your Design', desc: 'Identify the appropriate class for your design according to the Locarno Classification system, which categorizes designs based on the type of product they apply to.' },
            { title: 'Step 4: File the Application', desc: 'Submit your design registration application either:' },
            { title: 'Step 5: Examination', desc: 'Your design registration application will be examined to determine if it meets the requirements of novelty, originality, and registrability. This typically takes 3-6 months.' },
            { title: 'Step 6: Respond to Examination Report', desc: 'Address any objections raised in the Examination Report within the specified period (usually 3 months) to continue your design registration process.' },
            { title: 'Step 7: Grant of Design Registration Certificate', desc: 'Once all objections are cleared and requirements are met, the design will be registered, and you will receive a Design Registration Certificate. The design will then be published in the Design Journal, officially granting you legal protection.' },
        ],
        fees: [
            { item: 'Registration Costs', cost: 'You pay specific government fees to register your design, which vary by applicant type:. For Individuals: Rs. 1,000 for filing a design application.; For Startups and Small Entities (SMEs): Rs. 2,000 for filing a design application; For Other Entities (e.g., Large Companies): Rs. 4,000 for filing a design application.' },
            { item: 'Penalties for Design Infringement', cost: 'If someone copies your registered design without permission, they face legal consequences under the Designs Act 2000.. Monetary Penalty: An infringer can pay up to Rs. 25,000 to the registered proprietor for each contravention, with a maximum limit of Rs. 50,000 for any one design, recoverable as a contract debt (meaning you can sue to recover it as if it were a debt owed to you).; Damages and Injunction: You can file a lawsuit seeking damages for losses incurred due to the infringement. The court may also issue an injunction, legally stopping the infringer from continuing to use your design.; Court Jurisdiction: You must bring legal actions for infringement before a District Court or a higher court.' },
        ],
        advantages: [
            { icon: '✅', title: 'Legal Protection and Enforcement', desc: 'Exclusive Ownership Rights: Registration grants the owner the sole right to use the design on a product throughout India. This legally prevents others from making, selling, or importing items with an identical or very similar design.; Official Right to Action: It provides an official basis for legal' },
            { icon: '🏛️', title: 'Commercial Value and Monetisation', desc: 'Revenue-Generating Asset: A registered design becomes an asset that can generate revenue. It can be sold, licensed to other companies for royalty income, or used as a key part of franchising agreements.; Enhanced Company Valuation: Registered designs are valuable assets that directly increase your c' },
            { icon: '🤝', title: 'Marketplace Advantage and Brand Identity', desc: 'Product Uniqueness: It establishes a unique visual identity that distinguishes a product from competitors, building strong brand recognition and customer loyalty in the marketplace.; Building Trust and Credibility: Registration serves as a public declaration of authenticity and innovation. It enhanc' },
            { icon: '📈', title: 'Long-Term Security and Investor Confidence', desc: 'Reducing Risk for Investors: A protected design portfolio demonstrates strong IP management to investors. This reduces the risk of imitation and signals a secure foundation for long-term growth.; Freedom for Innovation: With its design registered, a company can confidently invest in marketing, produ' },
        ],
        faqs: [
            { q: 'What is the difference between a design registration and a patent?', a: 'A design registration protects the visual appearance (shape, pattern, ornamentation) of an article, while a patent protects the functional, technical, or inventive aspects. If your innovation is in how a product looks, design registration is appropriate; if it is in how it works, a patent is needed.' },
            { q: 'Can I register a design that has already been publicly disclosed?', a: 'No. Under the Designs Act, 2000, a design must be new or original and not previously published in India or elsewhere. However, if you have filed a design application in a Paris Convention country, you can claim priority in India within 6 months.' },
            { q: 'How long does design registration take in India?', a: 'The typical timeline is 3–6 months from the date of filing to grant, assuming no objections are raised by the Controller. Your Professionals ensures complete and accurate applications to minimize delays.' },
            { q: 'Can a design registration be renewed?', a: 'Yes. The initial registration is valid for 10 years. It can be extended for an additional 5 years (total 15 years) by filing Form 3 with the prescribed renewal fee before the expiry of the initial period.' },
            { q: 'What cannot be registered as a design in India?', a: 'Purely functional designs, designs that are not new or original, designs contrary to public order or morality, designs that are mere mechanical contrivances, and designs that include scandalous or obscene matter cannot be registered.' },
            { q: 'Can I file a single application for multiple designs?', a: 'India follows a single-design-per-application rule. However, if the designs belong to the same class under the Locarno Classification and are applied to a set of articles ordinarily sold together, a single application for the set may be filed.' },
            { q: 'What are the consequences of not registering my design?', a: 'Without registration, you have no statutory right to prevent others from copying your design. You may only rely on passing off or copyright protection (if applicable), which are harder to enforce and offer weaker protection for industrial designs.' },
            { q: 'How does Your Professionals assist with design registration?', a: 'Your Professionals provides end-to-end design registration services — including prior art search, Locarno classification, application drafting, filing, examination response, and post-grant compliance — ensuring your product designs receive timely and robust protection.' },
        ],
        cta: {
            heading: 'Need Help With Design Registration?',
            subheading:
                'Let Your Professionals handle your design registration requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Design Registration Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },

// ─── 15. PATENT SEARCH ─────────────────────────────────────────────────

    'intellectual-property-dispute': {
        slug: 'intellectual-property-dispute',
        title: 'Intellectual Property Dispute',
        subtitle:
            'Your brand, original ideas, and creative work are valuable assets known as your Intellectual Property (IP). When someone uses your IP without permission, it can lead to an intellectual property dispute. Effectively handling these conflicts is essential to protect your business and maintain your comp',
        heroFeatures: [
            'Expert Intellectual Property Dispute Services',
            'Dedicated IP Professional Support',
            'Timely Filing Assurance',
            'End-to-End Process Management',
        ],
        overview: {
            heading: 'What is an Intellectual Property Dispute?',
            paragraphs: [
                'Your brand, original ideas, and creative work are valuable assets known as your Intellectual Property (IP). When someone uses your IP without permission, it can lead to an intellectual property dispute. Effectively handling these conflicts is essential to protect your business and maintain your competitive edge.',
                'In India, IP is governed by different acts based on the IP discussed, including the Copyright Act, 1957, Trade Marks Act, 1999, and Patents Act, 1970. It is regulated by the Controller General of Patents, Designs and Trade Marks (CGPDTM). Disputes are resolved in civil courts or specialized IP tribunals.',
                'An intellectual property dispute starts when someone infringes on, misuses, or challenges your IP rights. Such disputes can start with something simple like sending a legal notice or warning letter, but can also become more serious, leading to lawsuits or court battles.',
            ],
            highlights: [
            ],
        },
        eligibility: [
            'All individuals and entities requiring IP protection services',
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'Contact Your Professionals for document checklist',
                ],
            },
        ],
        process: [
            { title: 'Step 1', desc: 'Cease and Desist Notice: Your lawyer sends a formal letter to the person or company infringing your IP, asking them to stop immediately. This notice cites the relevant provisions under the Trade Marks Act, 1999, Copyright Act, 1957, or Patents Act, 1970.' },
            { title: 'Step 2', desc: 'Filing a Suit: If the other side does not stop, you file a lawsuit in the right court (District or High Court)  based on your IP type and location.' },
            { title: 'Step 3', desc: 'Interim Injunction: Your lawyer may ask the court for a temporary restraining order to prevent ongoing infringement during the pendency of the case, per Order XXXIX of the Code of Civil Procedure, 1908.' },
            { title: 'Step 4', desc: 'Pleadings and Evidence Exchange: Both sides submit their written claims and defenses, along with documents and proof supporting their case.' },
            { title: 'Step 5', desc: 'Discovery and Inspection (if needed): Sometimes, the court allows one party to inspect disputed goods or records to collect more evidence.' },
            { title: 'Step 6', desc: 'Trial and Final Arguments: The court listens to witnesses and experts. After that, both lawyers present their final arguments.' },
            { title: 'Step 7', desc: 'Judgment: The court adjudicates the matter and may grant injunctive relief to restrain the infringer, award monetary damages or compensation, and order the infringing party to bear the costs of the suit.' },
            { title: 'Step 8', desc: 'Appeal: If a party is unhappy with the decision, they can ask a higher court to review the case within a set time.' },
        ],
        fees: [
            { item: 'Professional Service Fee', cost: 'Contact Your Professionals for pricing' },
        ],
        advantages: [
            { icon: '✅', title: 'Expert IP Support', desc: 'Dedicated IP professionals from Your Professionals for Intellectual Property Dispute' },
            { icon: '🛡️', title: 'Legal Protection', desc: 'Comprehensive protection of your intellectual property rights' },
            { icon: '📈', title: 'Brand Value Enhancement', desc: 'Strengthen your brand and business value through proper IP registration' },
        ],
        faqs: [
            { q: 'Is a patent search mandatory before filing a patent application in India?', a: 'While not legally mandatory, a patent search is strongly recommended. It helps assess patentability, avoid prior art conflicts, and draft stronger claims. Filing without a search significantly increases the risk of rejection during examination.' },
            { q: 'What databases does Your Professionals search during a patent search?', a: 'Your Professionals searches the Indian Patent Office (InPASS/IPO), USPTO, EPO (Espacenet), WIPO (PATENTSCOPE), Google Patents, and relevant non-patent literature databases including IEEE, PubMed, and Google Scholar, depending on the technology domain.' },
            { q: 'What is a First Examination Report (FER) and why is it important?', a: 'The FER is the first official communication from the Indian Patent Office examiner after examining your patent application. It lists objections — including cited prior art — that must be addressed within 6 months. Failure to respond results in abandonment of the application.' },
            { q: 'How long does a comprehensive patent search take?', a: 'A standard patentability search typically takes 7–14 business days, including analysis and report preparation. Urgent searches can be completed in 3–5 business days. FTO and landscape searches may take 2–4 weeks depending on complexity.' },
            { q: 'Can a patent search guarantee that my invention is patentable?', a: 'No. A patent search provides a professional assessment based on available prior art, but cannot guarantee grant. Unpublished applications, trade secrets, and examiner discretion may affect the outcome. However, a thorough search significantly improves the probability of success.' },
            { q: 'What is the difference between a novelty search and a Freedom-to-Operate search?', a: 'A novelty search determines whether an invention is new (for filing purposes), while an FTO search determines whether a product or process infringes existing patents in force (for commercialization purposes). They serve different objectives and search different sets of references.' },
            { q: 'Should I conduct a patent search for a provisional application?', a: 'Yes. Even though a provisional specification establishes priority, conducting a search before filing helps identify the closest prior art, refine the invention disclosure, and ensure the complete specification (to be filed within 12 months) contains strong, differentiated claims.' },
            { q: 'How does Your Professionals help with patent searches?', a: 'Your Professionals provides end-to-end patent search services — from invention disclosure consultation and search strategy formulation to comprehensive database searching, prior art analysis, patentability opinion reports, and FER response preparation — all handled by registered patent agents and IP professionals.' },
        ],
        cta: {
            heading: 'Need Help With Intellectual Property Dispute?',
            subheading:
                'Let Your Professionals handle your intellectual property dispute requirements with expert guidance and timely filing.',
            features: [
                'Free Initial Consultation',
                'Complete Intellectual Property Dispute Support',
                'Dedicated IP Professional',
                'Transparent Pricing',
            ],
        },
    },


    'patent-search': {
        slug: 'patent-search',
        title: 'Patent Search Services',
        subtitle: 'Conduct a comprehensive search in patent databases to verify the novelty and patentability of your invention before filing.',
        heroFeatures: [
            'Global Patent Database Search',
            'Novelty & Prior Art Assessment',
            'Patentability Opinion Reports',
            'Saves Filing Time & Costs',
        ],
        overview: {
            heading: 'Why Perform a Patent Search?',
            paragraphs: [
                'Before investing time and capital into filing a patent application, conducting a thorough patent search is a critical first step. It helps determine if your invention is truly novel and does not duplicate existing prior art.',
                'A patent search scans Indian and international patent databases (USPTO, EPO, WIPO) for existing patents and published applications similar to your invention, helping you assess the risk of rejection or infringement.'
            ],
            highlights: [
                { icon: '🔍', text: 'Scan global patent repositories' },
                { icon: '📝', text: 'Analyze novelty of the invention' },
                { icon: '⚖️', text: 'Determine patentability potential' }
            ]
        },
        eligibility: [
            'Invention must be a new product or process.',
            'Must involve an inventive step (non-obviousness).',
            'Must have industrial applicability.'
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'Detailed description of the invention.',
                    'Technical drawings or flowcharts (if applicable).',
                    'Key search phrases and terms.',
                    'List of known competitor technologies.'
                ]
            }
        ],
        process: [
            { title: 'Step 1: Invention Disclosure', desc: 'Provide us with a technical write-up describing how your invention works and its novel features.' },
            { title: 'Step 2: Database Search', desc: 'Our patent specialists search through national and international databases using keywords and IPC classes.' },
            { title: 'Step 3: Prior Art Analysis', desc: 'Compare matching publications against your design to check for similarities.' },
            { title: 'Step 4: Patentability Report', desc: 'Deliver a comprehensive report outlining the novelty and likelihood of patent registration.' }
        ],
        fees: [
            { item: 'Patent Search Report', cost: '₹5,000' }
        ],
        advantages: [
            { icon: '💡', title: 'Saves Registration Cost', desc: 'Avoid filing patents that are likely to be rejected due to existing prior art.' },
            { icon: '🛡️', title: 'Strengthens Application', desc: 'Refine your patent claims based on search results to ensure smooth approval.' }
        ],
        faqs: [
            { q: 'Is a patent search mandatory?', a: 'No, but it is highly recommended to ensure your invention is novel and to draft stronger patent claims.' },
            { q: 'What is prior art?', a: 'Any public document or knowledge available before your filing date that describes a similar technology.' }
        ],
        cta: {
            heading: 'Need Help With Patent Search?',
            subheading: 'Get a professional patent search report prepared by our expert patent agents.',
            features: [
                'Comprehensive DB Checks',
                'Expert Patent Agents',
                'Detailed Novelty Reports'
            ]
        }
    }
};
