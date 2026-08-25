import type { ServiceData } from '../services';

const data: Record<string, ServiceData> = {

    'consumer-complaint': {
        slug: 'consumer-complaint',
        title: 'Consumer Complaint',
        subtitle: 'A consumer complaint is a formal expression of dissatisfaction by a buyer regarding a product or service they have purchased. It usually involves issues.',
        heroFeatures: [
            'Defective goods',
            'Poor service',
            'Unfair trade practices',
            'Overcharging',
            'Delivery delays',
        ],
        overview: {
            heading: 'What is a Consumer Complaint?',
            paragraphs: [
                'A consumer complaint is a formal expression of dissatisfaction by a buyer regarding a product or service they have purchased. It usually involves issues like:',
                'Under the Consumer Protection Act, first enacted in 1986 and updated in 2019, anyone who buys something (fully, partly, or on promise to pay) is a "consumer." If you\'re a consumer, you have the right to complain to the seller, service provider, or even legal authorities to get help, like a refund, replacement, or compensation.',
                'This applies to anything bought in stores, online, on the phone, through telemarketing, or direct selling.',
                'A consumer court is a special court in India that deals exclusively with disputes and complaints related to the sale of goods or services. If your new washing machine doesn\'t work, or a company overcharges you, or your internet provider never shows up, you can go to the Consumer Court to get help.',
            ],
            highlights: [
                { icon: '📋', text: 'Defective goods' },
                { icon: '⚡', text: 'Poor service' },
                { icon: '🏛️', text: 'Unfair trade practices' },
                { icon: '💼', text: 'Overcharging' },
                { icon: '🔒', text: 'Delivery delays' },
                { icon: '📊', text: 'District Consumer Disputes Redressal Forum (DCDRF) - For claims up to Rs. 50 lakhs-1 Crore' },
            ],
        },
        types: [
            { title: 'Pecuniary Jurisdiction', desc: 'Based on the monetary value of the goods or services involved. The Consumer Protection Act, 2019, sets clear monetary thresholds for each level of commission, and these limits have been constitutionally upheld by the Supreme Court. Depending on the geographical location of the parties or the cause of action. Consumers have several options for filing based on location: Commission Level | Value of Goods/Services; District Commission | Up to Rs. 50 Lakhs - Rs. 1 Cr; State Commission | Between Rs. 1 Cr - Rs. 10 Cr; National Commission | Above Rs. 10 Cr; Territorial Jurisdiction:' },
            { title: 'Territorial Jurisdiction', desc: 'Depending on the geographical location of the parties or the cause of action. Consumers have several options for filing based on location: In case of dissatisfaction with the outcome of: The complaint can be filed in the Consumer Commission where the opposing party (the company or service provider) resides or carries on business.; Alternatively, filing is permissible where the opposing party has a branch office or personally works for gain.; A complaint can also be filed where the cause of action - the event or circumstances leading to the dispute - occurred, either wholly or in part.; Significantly, consumers may also file in a forum where they reside or work for gain, offering a convenient option.; If multiple opposing parties are involved, the complaint can be filed in any forum where at least one of the parties resides or conducts business.' },
            { title: 'Appellate Jurisdiction', desc: 'In case of dissatisfaction with the outcome of: Consumers should always refer to the latest provisions of the Act for the most precise and up-to-date figures. The District Forum: Consumers can file an appeal with the State Commission.; State Commission: The consumer can further appeal to the National Commission.; National Commission: Consumers have the option to approach the Supreme Court for a final appeal.' },
        ],
        eligibility: [
            'Consumer: Any individual who has purchased goods or services for consideration. This also includes those who did not directly buy the goods but used them with the buyer\'s consent, and goods purchased for self-employment rather than resale.',
            'Voluntary organizations registered under the Companies Act, 1956.',
            'Central or State Government authorities.',
            'Multiple consumers with a common interest.',
            'Beneficiaries of the goods or services in question.',
            'Legal representatives of a deceased consumer.',
            'Legal heirs or their representatives.',
            'Spouse or relatives of the consumer.',
        ],
        documents: [
            {
                category: 'Required Documents',
                items: [
                    'Voluntary organizations registered under the Companies Act, 1956.',
                    'Proof of purchase: This can be receipts, invoices, bills, or warranty cards.',
                    'Proof of communication: Any correspondence with the seller or service provider, such as emails, WhatsApp chats, or call recordings, is valuable.',
                    'Legal notice: A copy of the formal legal notice sent to the opposing party, if applicable.',
                    'Memo of Parties: A document listing the names and addresses of all parties involved.',
                    'Other relevant documents: Any additional papers that support the complaint.',
                    'Once logged in, draft the detailed complaint, similar to the manual process mentioned above. All supporting documents should be uploaded digitally.',
                    'The complaint can be filed in the Consumer Commission where the opposing party (the company or service provider) resides or carries on business.',
                    'Alternatively, filing is permissible where the opposing party has a branch office or personally works for gain.',
                ],
            },
        ],
        process: [
            { title: 'Initial Steps Before Formal Filing', desc: 'Consumers should initially try to resolve the issue directly with the seller or service provider. Many companies have established internal grievance redressal mechanisms, and often, complaints can be resolved efficiently at this stage. If direct resolution proves unsuccessful, the next recommended step is to send a formal legal notice to the opposing party. This notice should clearly state the issue, detail the deficiency in goods or services, and specify the relief sought, such as replacement, refund, or compensation. A reasonable timeframe, typically 15-30 days, should be given for the resolution. While sending a legal notice is generally not mandatory for consumer complaints, it is highly recommended as a matter of best practice. This strategy helps consumers get quicker, cheaper resolutions and reduces pressure on the courts. It also motivates businesses to build strong internal grievance systems.' },
            { title: 'Official Government Process for Consumer Complaint Filing', desc: 'For consumers opting to file a complaint manually, a structured process ensures all necessary legal requirements are met.' },
            { title: 'Digital Process For Consumer Complaint Filing (E-Daakhil Portal)', desc: 'The E-Daakhil portal is a digital platform introduced by the National Consumer Disputes Redressal Commission (NCDRC). This innovative platform significantly streamlines the consumer grievance redressal process by allowing consumers to file complaints without the need for physical visits to the consumer court. The benefits of using E-Daakhil are substantial: Here\'s how you can file a complaint via the E-Daakhil portal: Consumers can track their complaint status online and receive email or mobile notifications regarding their progress. Navigating the E-Daakhil portal can have a learning curve. For a streamlined and error-free submission, services like Your Professionals can manage the entire digital filing process for you. It offers convenient access from the comfort of one\'s home.; It is time-saving by avoiding long queues and extensive paperwork.; Provides transparency through real-time online tracking of complaint status.; Has a user-friendly interface, ensuring a paperless and transparent process for all users.; First, visit the official E-Daakhil portal: edaakhil.nic.in; Register and create an account using your details.; Once logged in, draft the detailed complaint, similar to the manual process mentioned above. All supporting documents should be uploaded digitally.; The prescribed fee (ranging from Rs. 200 - 1,000) has to be paid securely online.; Upon submission, the system provides a unique complaint number for future reference.' },
        ],
        fees: [
            { item: 'District Consumer Disputes Redressal Forum (DCDRF) - Up to ₹5 Lakh', cost: 'No fee (Nil)' },
            { item: 'District Consumer Disputes Redressal Forum (DCDRF) - Above ₹5 Lakh and up to ₹10 Lakh', cost: '₹200' },
            { item: 'District Consumer Disputes Redressal Forum (DCDRF) - Above ₹10 Lakh and up to ₹20 Lakh', cost: '₹400' },
            { item: 'District Consumer Disputes Redressal Forum (DCDRF) - Above ₹20 Lakh', cost: '₹1,000' },
            { item: 'State Consumer Disputes Redressal Commission (SCDRC) - Above ₹50 Lakh and up to ₹1 Crore', cost: '₹2,000' },
            { item: 'State Consumer Disputes Redressal Commission (SCDRC) - Above ₹1 Crore', cost: '₹2,500' },
            { item: 'National Consumer Disputes Redressal Commission (NCDRC) - Above ₹2 Crores and up to ₹4 Crores', cost: '₹3,000' },
            { item: 'National Consumer Disputes Redressal Commission (NCDRC) - Above ₹4 Crores and up to ₹6 Crores', cost: '₹4,000' },
            { item: 'National Consumer Disputes Redressal Commission (NCDRC) - Above ₹6 Crores and up to ₹8 Crores', cost: '₹5,000' },
            { item: 'National Consumer Disputes Redressal Commission (NCDRC) - Above ₹8 Crores and up to ₹10 Crores', cost: '₹6,000' },
            { item: 'National Consumer Disputes Redressal Commission (NCDRC) - Above ₹10 Crores', cost: '₹7,500' },
        ],
        advantages: [
            { icon: '⚡', title: 'Defective goods', desc: 'Defective goods' },
            { icon: '💰', title: 'Poor service', desc: 'Poor service' },
            { icon: '🔒', title: 'Unfair trade practices', desc: 'Unfair trade practices' },
            { icon: '📋', title: 'Overcharging', desc: 'Overcharging' },
            { icon: '🌐', title: 'Delivery delays', desc: 'Delivery delays' },
            { icon: '🛡️', title: 'District Consumer Disputes Redressal Forum (DCDRF)', desc: 'District Consumer Disputes Redressal Forum (DCDRF) - For claims up to Rs. 50 lakhs-1 Crore' },
        ],
        faqs: [
            { q: 'How do I register a consumer complaint online?', a: 'Here\'s how you can register a complaint online: Visit the E-Daakhil portal at edaakhil.nic.in. Register with your details, log in, and draft your complaint. Upload supporting documents and pay the nominal fee online. After submission, you\'ll receive a unique reference number to track your complaint status.' },
        ],
        cta: {
            heading: 'Get Started with Consumer Complaint',
            subheading: 'Your Professionals provides expert assistance for all your consumer complaint needs with end-to-end support.',
            features: [
                'Defective goods',
                'Poor service',
                'Unfair trade practices',
                'Overcharging',
            ],
        },
    },

    'cheque-bounce-notice': {
        slug: 'cheque-bounce-notice',
        title: 'Cheque Bounce Notice',
        subtitle: 'A cheque bounce, also known as a dishonored or returned cheque, happens when a bank declines to process a cheque submitted for payment.',
        heroFeatures: [
            'Insufficient Funds: The most common reason is when the account holder doesn\'t...',
            'Signature Mismatch: If the signature on the cheque doesn\'t match the signatur...',
            'Incorrect or Incomplete Information: Errors like a wrong date, payee name, or...',
            'Overwriting or Alterations: Any changes or overwrites on the cheque, unless p...',
            'Stale Cheque: A cheque presented after three months from the date of issue is...',
        ],
        overview: {
            heading: 'Overview of Cheque Bounce',
            paragraphs: [
                'A cheque bounce, also known as a dishonored or returned cheque, happens when a bank declines to process a cheque submitted for payment. This usually occurs because the payer\'s account has insufficient funds to cover the cheque\'s amount. Nevertheless, other factors, such as incorrect details (e.g., date, signature, or account number) or a damaged cheque, can also lead to a cheque bouncing.',
                'A cheque bounce notice is a legal notice you receive when a cheque you issued fails to clear, usually due to reasons like not enough money in your account or wrong details. The person who didn\'t get the payment sends you this notice, asking you to pay the amount within 15 days. If you don\'t pay on time, they can file a legal case against you under the law. So, it\'s important to act quickly and settle the matter.',
                'A cheque bounces when the bank doesn\'t clear it, which means the payment doesn\'t go through, and the cheque is sent back to the person who tried to deposit it.',
                'This happens when the issuer\'s account lacks sufficient funds, the signature doesn\'t match the one on file, or there are other issues like a damaged or incorrectly dated cheque.',
            ],
            highlights: [
                { icon: '📋', text: 'Insufficient Funds: The most common reason is when the account holder doesn\'t have enough money to cover the amount written on the cheque.' },
                { icon: '⚡', text: 'Signature Mismatch: If the signature on the cheque doesn\'t match the signature on file with the bank, it will be rejected.' },
                { icon: '🏛️', text: 'Incorrect or Incomplete Information: Errors like a wrong date, payee name, or the amount written in words that do not match the figures can also cause a bounce.' },
                { icon: '💼', text: 'Overwriting or Alterations: Any changes or overwrites on the cheque, unless properly authenticated with the issuer\'s signature, can lead to rejection.' },
                { icon: '🔒', text: 'Stale Cheque: A cheque presented after three months from the date of issue is considered stale and won\'t be honored.' },
                { icon: '📊', text: 'Other Issues: A damaged cheque, an account closure, or a stop payment instruction from the issuer can also result in a bounced cheque.' },
            ],
        },
        types: [
            { title: 'Key Details in Cheque Bounce Notice Sample Format', desc: 'The contents of the Cheque Bounce Notice are: The name and address of the drawer of the cheque.; The name and address of the payee.; Information about the cheque was presented to the bank for payment.; Details of the cheque number, date, and amount.; Date of return of the cheque.' },
            { title: 'When to Send a Cheque Bounce Notice?', desc: 'A cheque bounce notice should be sent when a cheque you received is not cleared by the bank. You must send the notice within 30 days from the date the bank returns the bounced cheque. In the notice, you should ask the person to pay the due amount within 15 days. If they don\'t pay, you can take legal action under the Negotiable Instruments Act.' },
            { title: 'Sending the Notice', desc: 'Registered Post with Acknowledgment Due (RPAD): This is the most reliable method as it provides a record of delivery with the AD card.; Courier Service: If using a courier, choose a reputable service that offers a tracking number and delivery confirmation.; E-mail (through an advocate): Sending the notice via email, especially through an advocate, is also acceptable.' },
            { title: 'Proof of Delivery', desc: 'AD card: For RPAD, the acknowledgment card signed by the recipient serves as proof of delivery.; Courier receipt: For courier service, the delivery confirmation document from the courier serves as proof.; Email confirmation: If sent via email through an advocate, the email confirmation from the advocate acts as proof.' },
            { title: 'Response Time', desc: 'The person who issued the bounced cheque (drawer) has 15 days from the date of receiving the notice to make the payment.' },
            { title: 'Consequences of Non-Payment', desc: 'If the drawer fails to pay within 15 days of receiving the notice, the payee (holder of the cheque) can file a complaint in court under Section 138 of the Negotiable Instruments Act.' },
            { title: 'Court Proceedings', desc: 'The court in the city where the cheque was presented for payment has jurisdiction to hear the case.; The court will review the documents, including the notice and proof of delivery, and issue a summons to the drawer if satisfied with the case.' },
            { title: 'Notice Period (15 Days)', desc: 'The payee sends a legal notice to the drawer, demanding payment for the bounced cheque within 15 days.; If the drawer pays the amount within this period, the matter is resolved, and no further action is taken.' },
            { title: 'Legal Action (if payment is not made)', desc: 'If the drawer fails to pay within the 15-day notice period, the payee can file a criminal complaint under Section 138 of the Negotiable Instruments Act.; This complaint is typically filed in a Magistrate\'s court.; The court will then issue a summons to the drawer, and the case will proceed through the court system.' },
            { title: 'Penalties and Consequences', desc: 'Criminal Prosecution: If the drawer is found guilty, they can face penalties such as imprisonment for up to two years, a fine up to twice the cheque amount, or both.; Civil Suit: The payee can also pursue a civil suit to recover the amount of the bounced cheque.; Bank Penalties: The bank may also impose charges for the bounced cheque, and the drawer\'s credit rating could be negatively impacted.; Revocation of Services: In some cases, repeated cheque bounces can lead to the revocation of banking services like chequebook privileges.' },
        ],
        eligibility: [
            'Applicable to businesses and individuals seeking Cheque Bounce Notice services.',
        ],
        documents: [
            {
                category: 'The Dishonored Cheque and Bank Documents',
                items: [
                    'Original Bounced Cheque: The physical cheque is the primary evidence in your case.',
                    'Cheque Return Memo / Bank Memo: This vital document from your bank states the reason and date of the dishonor (e.g., "Funds Insufficient," "Signature Mismatch," "Account Closed," "Stop Payment"). This memo acts as concrete proof of the cheque\'s dishonor.',
                    'Bank Statement (Optional but Recommended): A copy of your bank statement showing the debit entry for the cheque presentation and the subsequent credit entry upon its return (if applicable) can further substantiate your claim.',
                ],
            },
            {
                category: 'Legal Notice and Proof of Dispatch/Delivery',
                items: [
                    'Copy of the Legal Demand Notice: A true copy of the formal written notice you sent to the drawer demanding payment of the bounced cheque amount. Proof of Service of Notice: This is extremely important to demonstrate that the drawer received the legal notice within the stipulated timeframe. Acceptable proofs include: Registered Post with Acknowledgment Due (RPAD) Slip: The postal receipt from sending the registered post.',
                    'RPAD Acknowledgment Card (AD Card): The card is signed by the recipient upon delivery and is returned to you by the postal department. This is considered very strong proof of delivery.',
                    'Courier Receipt and Delivery Confirmation: If sent via courier, the receipt with the tracking number and the delivery confirmation report from the courier company.',
                    'Email Confirmation (if sent through an advocate): In some cases, especially if sent via a lawyer\'s official email, the email confirmation can serve as proof.',
                ],
            },
            {
                category: 'Complaint and Supporting Affidavits',
                items: [
                    'Criminal Complaint (Drafted by a Lawyer): This is the formal petition filed in the Magistrate\'s court. It should clearly outline the entire chronology of events, including: Affidavit of the Complainant: A sworn statement by the payee affirming the truthfulness of the facts stated in the complaint. This is usually filed along with the complaint. Details of the payee (complainant) and the drawer (accused).',
                    'The transaction or underlying debt for which the cheque was issued.',
                    'Full details of the cheque (number, date, amount, bank).',
                    'Details of the cheque\'s presentation and dishonor, along with the reason.',
                    'Particulars of the legal notice sent, including date of dispatch and receipt.',
                    'A statement that the drawer failed to make payment within the 15-day notice period.',
                    'A prayer for legal action under Section 138 of the Negotiable Instruments Act.',
                ],
            },
            {
                category: 'Documents Proving Legally Enforceable Debt/Liability (Crucial)',
                items: [
                    'While Section 138 presumes a legally enforceable debt, it\'s always beneficial to provide documents that support the existence of such a debt or liability. This strengthens your case and helps counter potential defenses by the drawer. These may include: Invoices, Bills, or Receipts: If the cheque was issued against goods or services provided.',
                    'Loan Agreements / Promissory Notes: If the cheque was issued for a loan repayment.',
                    'Supply Orders or Contracts: Documents establishing the business transaction.',
                    'Correspondence (Emails, SMS, etc.): Any communication between the parties related to the debt or the cheque.',
                    'Account Statements: If it\'s a long-standing financial relationship, relevant entries show the outstanding amount.',
                ],
            },
            {
                category: 'Identity and Authorization Documents',
                items: [
                    'Complainant\'s Identity Proof: A copy of the payee\'s Aadhar Card, PAN Card, or other government-issued ID.',
                    'Vakalatnama (Power of Attorney): If the complaint is being filed by a lawyer on behalf of the payee, a signed Vakalatnama authorizes the lawyer to represent the payee in court.',
                    'Board Resolution (for Companies/Organizations): If the complainant is a company or an organization, a board resolution authorizes a specific individual (e.g., director, manager) to file the complaint on behalf of the entity.',
                ],
            },
            {
                category: 'Court Fees',
                items: [
                    'Court Fee Stamp / Challan: Court fees are payable based on the cheque amount. The specific amount varies by jurisdiction and cheque value, and these fees must be affixed to the complaint or paid as per court rules.',
                ],
            },
        ],
        process: [
            { title: 'Filing the Complaint', desc: 'The complaint is typically filed before a Judicial Magistrate First Class or a Metropolitan Magistrate in the court having jurisdiction (usually where the cheque was presented for payment). The complaint should be in writing, accompanied by an affidavit and all necessary documents, including the original bounced cheque, the cheque return memo, a copy of the legal notice, and proof of its delivery.' },
            { title: 'Court Examination and Summons', desc: 'Upon receiving the complaint and supporting documents, the Magistrate will examine the complainant under oath (known as the "sworn statement" or "complainant\'s examination"). Suppose the Magistrate is satisfied that a prima facie case exists (meaning, there appears to be enough evidence to proceed). In that case, they will then issue a summons to the drawer (accused), directing them to appear before the court on a specified date. These summons are typically sent via registered post.' },
            { title: 'Drawer\'s Appearance and Plea', desc: 'Once the drawer receives the summons, they are legally bound to appear before the court. Upon their appearance, they usually apply for bail, which is generally granted. The court will then formally ask the drawer to state their plea - whether they plead guilty to the offense or claim innocence. If the drawer pleads guilty, the court may proceed to pass a judgment of conviction and impose penalties. If the drawer pleads not guilty, the case will proceed to trial.' },
            { title: 'Court Proceedings (Trial)', desc: 'If the drawer pleads not guilty, the case moves into the trial phase. This involves the following: Complaint\'s Evidence: The complainant will present their evidence, often through an affidavit, reiterating the facts of the case. The drawer\'s lawyer will then have the opportunity to cross-examine the complainant and their witnesses.; Accused\'s Statement: After the complainant\'s evidence, the court will record the statement of the accused under Section 313 of the Criminal Procedure Code, allowing them to explain the circumstances and the evidence against them.; Accused\'s Evidence: The drawer then gets the chance to present their defense, including calling witnesses and submitting documents to prove their innocence. The complainant\'s lawyer will have the right to cross-examine the defense witnesses.; Final Arguments: After all evidence has been presented, both parties (through their lawyers) will present their final arguments, summarizing their case and citing relevant legal provisions and precedents.' },
            { title: 'Execution of Judgment', desc: 'After hearing the final arguments and considering all the evidence, the Magistrate will deliver the judgment. If Convicted: If the drawer is found guilty, the court will pass a conviction order. The penalties can include imprisonment for a term that may extend to two years, a fine which may extend to twice the amount of the cheque, or both. The court may also direct the drawer to pay compensation to the payee. The judgment can be executed by initiating recovery proceedings for the fine/compensation or by a warrant for imprisonment.; If Acquitted: If the drawer is found not guilty, they are acquitted of the charges.; Appeal: Either party, if aggrieved by the judgment, has the right to file an appeal in a higher court (e.g., Sessions Court) within a stipulated period.' },
        ],
        fees: [
            { item: 'Cheque Bounce Notice consultation', cost: 'Contact for pricing' },
        ],
        penalties: [
            { violation: 'Imprisonment', penalty: 'If the drawer fails to make the payment within the 15-day notice period and the payee subsequently files a complaint under Section 138 of the Negotiable Instruments Act, 1881, and the drawer is found guilty, they can face imprisonment for a term which may extend to two years. This makes cheque bounce a criminal offense, not just a civil one.' },
            { violation: 'Fine', penalty: 'In addition to or as an alternative to imprisonment, the court can impose a fine which may extend to twice the amount of the cheque. This fine is often intended to compensate the payee for the financial loss incurred due to the bounced cheque. The amount of the fine can be substantial, especially for high-value cheques.' },
            { violation: 'Both Imprisonment and Fine', penalty: 'The court can impose both a fine and jail time. This means the drawer could be sentenced to a jail term and also be required to pay a hefty fine, depending on the specifics of the case, the amount involved, and the conduct of the drawer.' },
            { violation: 'Issuance of Summons and Warrant', penalty: 'If the drawer ignores the legal notice and the payee files a complaint, the court will first issue a summons to the drawer, directing them to appear. If the drawer fails to appear even after receiving the summons, the court can then issue bailable or non-bailable warrants for their arrest. This can lead to the police apprehending the drawer to ensure their presence in court.' },
            { violation: 'Impact on Creditworthiness and Reputation', penalty: 'A cheque bounce can severely impact the drawer\'s financial standing. Banks often report bounced cheques to credit bureaus, leading to a negative impact on the drawer\'s credit score (CIBIL score). A poor credit score can make it difficult to obtain future loans, credit cards, or other financial services. Furthermore, a criminal conviction for a cheque bounce can significantly damage an individual\'s or business\'s reputation, affecting future business dealings and personal credibility.' },
            { violation: 'Civil Liability', penalty: 'While Section 138 deals with the criminal aspect of cheque bounce, the payee also retains the right to initiate a civil suit for recovery of the cheque amount along with interest and costs. This means the drawer could face both criminal prosecution and a civil lawsuit for the same bounced cheque, leading to multiple legal battles and liabilities.' },
            { violation: 'Restrictions on Professional Positions', penalty: 'In certain professions or positions of public trust, a criminal conviction, including one for a cheque bounce, can lead to disqualification or restrictions on holding specific professional or directorial positions. For example, directors of companies might face disqualification from holding directorships if convicted of certain offenses, including those under Section 138 of the Negotiable Instruments Act.' },
        ],
        advantages: [
            { icon: '⚡', title: 'Insufficient Funds: The most common reason is when', desc: 'Insufficient Funds: The most common reason is when the account holder doesn\'t have enough money to cover the amount written on the cheque.' },
            { icon: '💰', title: 'Signature Mismatch: If the signature on the cheque', desc: 'Signature Mismatch: If the signature on the cheque doesn\'t match the signature on file with the bank, it will be rejected.' },
            { icon: '🔒', title: 'Incorrect or Incomplete Information: Errors like a', desc: 'Incorrect or Incomplete Information: Errors like a wrong date, payee name, or the amount written in words that do not match the figures can also cause a bounce.' },
            { icon: '📋', title: 'Overwriting or Alterations: Any changes or overwri', desc: 'Overwriting or Alterations: Any changes or overwrites on the cheque, unless properly authenticated with the issuer\'s signature, can lead to rejection.' },
            { icon: '🌐', title: 'Stale Cheque: A cheque presented after three month', desc: 'Stale Cheque: A cheque presented after three months from the date of issue is considered stale and won\'t be honored.' },
            { icon: '🛡️', title: 'Other Issues: A damaged cheque, an account closure', desc: 'Other Issues: A damaged cheque, an account closure, or a stop payment instruction from the issuer can also result in a bounced cheque.' },
        ],
        faqs: [
            { q: 'What is the punishment for a bounced cheque?', a: 'Under Section 138 of the Negotiable Instruments Act, 1881, if a drawer is found guilty of a cheque bounce due to insufficient funds, they can face imprisonment for a term that may extend to two years, or a fine which may extend to twice the amount of the cheque, or both. The court may also order the drawer to pay compensation to the payee.' },
        ],
        cta: {
            heading: 'Get Started with Cheque Bounce Notice',
            subheading: 'Your Professionals provides expert assistance for all your cheque bounce notice needs with end-to-end support.',
            features: [
                'Insufficient Funds: The most common reason is when the account holder doesn\'t...',
                'Signature Mismatch: If the signature on the cheque doesn\'t match the signatur...',
                'Incorrect or Incomplete Information: Errors like a wrong date, payee name, or...',
                'Overwriting or Alterations: Any changes or overwrites on the cheque, unless p...',
            ],
        },
    },

};

export default data;
