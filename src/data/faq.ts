import { GENERATED_FAQ_CATEGORIES } from './faq.generated';

export interface FAQCategory {
    id: string;
    label: string;
    items: {
        question: string;
        answer: string;
        iconType: 'building' | 'document' | 'clock' | 'chart' | 'globe' | 'shield' | 'calculator';
    }[];
}

// Hand-written, site-process FAQs (not part of the client's FAQ database).
export const WORKING_WITH_US: FAQCategory =
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
};

// 150 questions (5 categories x 30) generated from the client's markdown by
// scripts/faq-from-markdown.py, followed by the hand-written category above.
export const FAQ_DATA: FAQCategory[] = [...GENERATED_FAQ_CATEGORIES, WORKING_WITH_US];

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
