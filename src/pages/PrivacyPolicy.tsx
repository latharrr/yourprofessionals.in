import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

const privacyPolicySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    url: 'https://www.yourprofessionals.in/privacy-policy',
    description: "Your Professionals' Privacy Policy explaining how we collect, use, store, protect and share personal information collected via our website, enquiry forms, Meta/Facebook/Instagram lead ads, Google Ads lead forms, telephone and email.",
    dateModified: '2026-09-14',
    isPartOf: {
        '@type': 'WebSite',
        name: 'Your Professionals',
        url: 'https://www.yourprofessionals.in',
    },
    publisher: {
        '@type': 'Organization',
        name: 'Your Professionals',
        url: 'https://www.yourprofessionals.in',
    },
};

function Section({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
    return (
        <section className="scroll-mt-28" id={`section-${number}`}>
            <h2 className="text-xl md:text-2xl font-bold text-[#090a3d] mb-4">
                {number}. {title}
            </h2>
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                {children}
            </div>
        </section>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return <h3 className="text-base md:text-lg font-semibold text-[#090a3d] mt-6 mb-2">{children}</h3>;
}

function List({ items }: { items: string[] }) {
    return (
        <ul className="list-disc pl-5 space-y-1.5 marker:text-[var(--color-brand-secondary)]">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <SEO
                title="Privacy Policy – Your Professionals"
                description="Read Your Professionals' Privacy Policy to understand how we collect, use, store, protect and share your personal information across our website, enquiry forms, Meta and Google Ads lead forms, and other communication channels."
                canonical="/privacy-policy"
                schema={privacyPolicySchema}
            />
            <Header />
            <main className="flex-grow pt-28">
                {/* Hero */}
                <section className="bg-gradient-to-br from-[#090a3d] via-[#0f1163] to-[#1a1c6e] text-white py-14 md:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--color-brand-secondary)] rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                    </div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block bg-white/10 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/10">
                            Legal
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Privacy Policy</h1>
                        <p className="text-gray-300 text-sm md:text-base">
                            Effective Date: 14 September 2026 &nbsp;·&nbsp; Last Updated: 14 September 2026
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-14 md:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                        <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                            <p>
                                Your Professionals (&ldquo;Your Professionals&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you provide to us.
                            </p>
                            <p>
                                This Privacy Policy explains how Your Professionals collects, uses, stores, protects and shares personal information when you visit our website, submit an enquiry, interact with our advertisements, or use our services.
                            </p>
                            <p>
                                This policy is intended to provide clear information about our data practices and applies to information collected through our website, Meta/Facebook/Instagram lead forms, Google Ads lead forms, enquiry forms, telephone, email and other communication channels.
                            </p>
                        </div>

                        <Section number={1} title="Information We Collect">
                            <p>Depending on how you interact with us, we may collect the following information:</p>

                            <SubHeading>Contact Information</SubHeading>
                            <List items={[
                                'Name',
                                'Mobile number',
                                'Email address',
                                'City, state and address, where required',
                            ]} />

                            <SubHeading>Business Information</SubHeading>
                            <List items={[
                                'Business or proposed business name',
                                'Nature of business',
                                'Business registration requirements',
                                'GST-related requirements',
                                'Type of business structure being considered',
                                'Expected timeline for registration',
                                'Other information you voluntarily provide regarding your enquiry',
                            ]} />

                            <SubHeading>Information Required to Provide Services</SubHeading>
                            <p>
                                If you engage Your Professionals for a service, we may request additional information or documents necessary to provide that service. Depending on the service, this may include identity, address, business, tax, financial, registration or other documents.
                            </p>
                            <p>We aim to collect only information that is reasonably necessary for the relevant service.</p>

                            <SubHeading>Technical Information</SubHeading>
                            <p>
                                When you visit our website, certain technical information may be collected automatically, such as IP address, browser type, device information, pages visited, referring source and general website usage information.
                            </p>
                        </Section>

                        <Section number={2} title="Information Collected Through Meta and Google Ads">
                            <p>Your Professionals may advertise its services through platforms including Facebook, Instagram and Google Ads.</p>
                            <p>
                                When you interact with one of our advertisements and submit a lead form, we may receive information that you voluntarily provide, such as your name, telephone number, email address and details about your business requirement.
                            </p>
                            <p>This information may be used to:</p>
                            <List items={[
                                'respond to your enquiry;',
                                'understand your requirements;',
                                'provide information about our services;',
                                'provide quotations;',
                                'arrange consultations;',
                                'follow up on your enquiry; and',
                                'provide the services you request.',
                            ]} />
                            <p>Meta and Google may separately process information according to their own privacy policies and terms.</p>
                        </Section>

                        <Section number={3} title="How We Use Your Information">
                            <p>Your Professionals may use personal information to:</p>
                            <List items={[
                                'respond to enquiries and requests;',
                                'provide business registration and compliance services;',
                                'provide GST, taxation, accounting and related services;',
                                'understand your requirements;',
                                'prepare quotations;',
                                'communicate with you about requested services;',
                                'provide customer support;',
                                'process and manage documents;',
                                'improve our website and services;',
                                'measure and improve advertising performance;',
                                'prevent fraud, spam and misuse;',
                                'comply with applicable legal and regulatory requirements; and',
                                'establish, exercise or defend legal rights.',
                            ]} />
                            <p>Where required by applicable law, we will obtain your consent before processing personal information for a particular purpose.</p>
                            <p>The Digital Personal Data Protection Act, 2023 requires notices associated with consent to explain the personal data involved, the purpose of processing and how applicable rights and grievance mechanisms may be exercised.</p>
                        </Section>

                        <Section number={4} title="Advertising and Marketing">
                            <p>Your Professionals may use advertising and measurement technologies provided by platforms such as Meta and Google to understand the effectiveness of our advertising campaigns.</p>
                            <p>This may include measuring whether an advertisement results in an enquiry, lead submission, website visit or other permitted interaction.</p>
                            <p>Where legally required, we will obtain appropriate consent for advertising, tracking or sharing of information.</p>
                            <p>We do not sell your personal information as a standalone database or product.</p>
                        </Section>

                        <Section number={5} title="Sharing of Personal Information">
                            <p>We may share personal information where reasonably necessary to provide our services or operate our business.</p>
                            <p>This may include sharing information with:</p>
                            <List items={[
                                'authorised employees and representatives of Your Professionals;',
                                'professional consultants and service providers;',
                                'technology, hosting and communication providers;',
                                'CRM or lead-management providers;',
                                'advertising and analytics providers;',
                                'payment or service providers, where applicable;',
                                'government departments and regulatory authorities; and',
                                'other parties where disclosure is required or permitted by law.',
                            ]} />
                            <p>Where third-party service providers process information on our behalf, we seek to use appropriate contractual, technical and organisational safeguards.</p>
                            <p>Where customer information is used with Google services for advertising measurement or related customer-data functions, applicable Google requirements concerning disclosure, consent and data protection will be followed.</p>
                        </Section>

                        <Section number={6} title="Meta, Facebook and Instagram">
                            <p>Your Professionals may use Meta advertising products, including Facebook and Instagram Lead Ads.</p>
                            <p>If you submit your information through a Meta lead form, the information you provide may be shared with Your Professionals so that we can respond to your enquiry.</p>
                            <p>Meta may independently collect and process information when you use Facebook or Instagram. Such processing is governed by Meta&apos;s applicable privacy policies and terms.</p>
                            <p>Your Professionals does not control Meta&apos;s independent processing of information on its platforms.</p>
                        </Section>

                        <Section number={7} title="Google Ads">
                            <p>Your Professionals may use Google Ads and Google lead forms to generate business enquiries.</p>
                            <p>When you submit information through a Google-hosted lead form, the information may be provided to Your Professionals so that we can contact you regarding your enquiry.</p>
                            <p>Google requires advertisers using lead forms to provide a business privacy-policy URL.</p>
                            <p>Google may separately process information according to its own privacy policies and applicable terms.</p>
                        </Section>

                        <Section number={8} title="Cookies and Similar Technologies">
                            <p>Our website may use cookies and similar technologies for purposes such as:</p>
                            <List items={[
                                'website functionality;',
                                'security;',
                                'analytics;',
                                'performance measurement;',
                                'advertising measurement; and',
                                'improving user experience.',
                            ]} />
                            <p>Where applicable law requires consent for non-essential cookies or similar technologies, we will provide an appropriate mechanism for obtaining and managing that consent.</p>
                            <p>You may also control certain cookies through your browser settings.</p>
                        </Section>

                        <Section number={9} title="Data Security">
                            <p>Your Professionals takes reasonable technical and organisational measures to protect personal information against unauthorised access, misuse, loss, alteration or disclosure.</p>
                            <p>Depending on the nature of the information and the services involved, security measures may include access controls, restricted access, secure systems, authentication mechanisms and other reasonable safeguards.</p>
                            <p>However, no method of electronic transmission or storage can be guaranteed to be completely secure.</p>
                        </Section>

                        <Section number={10} title="Data Retention">
                            <p>We retain personal information for as long as reasonably necessary for the purposes described in this Privacy Policy.</p>
                            <p>This may include the period necessary to:</p>
                            <List items={[
                                'respond to an enquiry;',
                                'provide requested services;',
                                'maintain business and transaction records;',
                                'comply with legal, tax or regulatory obligations;',
                                'resolve disputes; or',
                                'establish, exercise or defend legal claims.',
                            ]} />
                            <p>When information is no longer required and there is no legal or legitimate reason to retain it, we will take reasonable steps to delete or securely dispose of it.</p>
                        </Section>

                        <Section number={11} title="Your Rights and Choices">
                            <p>Subject to applicable law, you may have rights relating to your personal information, including the ability to:</p>
                            <List items={[
                                'request information about the processing of your personal data;',
                                'request correction of inaccurate information;',
                                'request deletion of personal information where applicable;',
                                'withdraw consent where processing is based on consent;',
                                'raise a privacy-related grievance; and',
                                'exercise other rights available under applicable law.',
                            ]} />
                            <p>You can contact Your Professionals using the details provided below to make a privacy-related request.</p>
                            <p>We may need to verify your identity before processing certain requests.</p>
                        </Section>

                        <Section number={12} title="Third-Party Websites and Services">
                            <p>Our website or communications may contain links to third-party websites or services.</p>
                            <p>Third-party websites and platforms have their own privacy policies and terms. Your Professionals is not responsible for the privacy practices or security of websites that we do not control.</p>
                            <p>We recommend reviewing the relevant third party&apos;s privacy policy before providing personal information.</p>
                        </Section>

                        <Section number={13} title="Children's Privacy">
                            <p>Our services are primarily intended for adults, entrepreneurs, businesses and professionals.</p>
                            <p>We do not knowingly seek to collect personal information from children for business-registration or professional-service advertising.</p>
                            <p>If we become aware of information being collected in circumstances where processing is not permitted by applicable law, we will take appropriate steps.</p>
                        </Section>

                        <Section number={14} title="Changes to This Privacy Policy">
                            <p>Your Professionals may update this Privacy Policy from time to time to reflect changes in our services, technology, data practices, advertising platforms or applicable laws.</p>
                            <p>Any updated version will be published on this page with a revised &ldquo;Last Updated&rdquo; date.</p>
                        </Section>

                        <Section number={15} title="Contact Us">
                            <p>If you have questions, concerns or requests regarding this Privacy Policy or the processing of your personal information, please contact:</p>
                            <address className="not-italic bg-gray-50 rounded-2xl p-6 border border-gray-150 space-y-1.5">
                                <p className="font-semibold text-[#090a3d]">Your Professionals</p>
                                <p>
                                    Email:{' '}
                                    <a href="mailto:info@yourprofessionals.in" className="text-[var(--color-brand-secondary)] hover:underline">
                                        info@yourprofessionals.in
                                    </a>
                                </p>
                                <p>
                                    Phone:{' '}
                                    <a href="tel:+917011936958" className="text-[var(--color-brand-secondary)] hover:underline">
                                        +91-7011936958
                                    </a>
                                </p>
                                <p>
                                    Address: Office No. 204, U-172, Street No. 4, Laxmi Nagar, Block U, Shakarpur, Delhi &ndash; 110092, India
                                </p>
                            </address>
                        </Section>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
