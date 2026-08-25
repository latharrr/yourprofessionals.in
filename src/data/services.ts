export interface ServiceData {
    slug: string;
    title: string;
    subtitle: string;
    heroFeatures: string[];
    overview: { heading: string; paragraphs: string[]; highlights: { icon: string; text: string }[] };
    types?: { title: string; desc: string }[];
    eligibility: string[];
    documents: { category: string; items: string[] }[];
    process: { title: string; desc: string; time?: string }[];
    fees: { item: string; cost: string }[];
    penalties?: { violation: string; penalty: string }[];
    advantages: { icon: string; title: string; desc: string }[];
    disadvantages?: string[];
    compliance?: { area: string; details: string }[];
    faqs: { q: string; a: string }[];
    cta?: { heading: string; subheading: string; features: string[] };
}

export const SERVICES: Record<string, ServiceData> = {};

// --- Import and merge all service data ---
// Registration
import { GOVT_REGISTRATIONS } from './registration/govt-registrations';
import { FSSAI_REGISTRATIONS } from './registration/fssai-registrations';
import { TRADE_REGISTRATIONS } from './registration/trade-registrations';
import { BUSINESS_CERTIFICATES } from './registration/business-certificates';
import { BUSINESS_LICENSES } from './registration/business-licenses';
import { BIS_REGISTRATIONS } from './registration/bis-registrations';
import { NGO_REGISTRATIONS } from './registration/ngo-registrations';
import { INTERNATIONAL_REGISTRATIONS } from './registration/international-registrations';
import { OTHER_SERVICES } from './registration/other-services';
import { COMPANY_REGISTRATIONS } from './registration/company-registrations';
// Compliance
import { COMPANY_COMPLIANCE } from './compliance/company-compliance';
import { ANNUAL_COMPLIANCE } from './compliance/annual-compliance';
import { MCA_SERVICES } from './compliance/mca-services';
import { EVENT_BASED_COMPLIANCE } from './compliance/event-based-compliance';
import { CONVERT_BUSINESS } from './compliance/convert-business';
// IPR
import { IPR_REGISTRATIONS } from './ipr/ipr-registrations';
// Income Tax
import INCOME_TAX from './income-tax/income-tax';
// GST
import GST from './gst/gst';
// Consultation
import CA_SERVICES from './consultation/ca-services';
import BUSINESS_CONSULTANTS from './consultation/business-consultants';
import LAWYER_EXPERT from './consultation/lawyer-expert';
import { PROFESSIONAL_SERVICES } from './consultation/professional-services';
// More
import { ENVIRONMENTAL } from './more/environmental';
import { AGREEMENTS } from './more/agreements';
import { REGULATORY } from './more/regulatory';
import { TOOLS_CALCULATORS } from './more/tools-calculators';
import { LITIGATION_SERVICES } from './more/litigation';

Object.assign(SERVICES,
    GOVT_REGISTRATIONS, FSSAI_REGISTRATIONS, TRADE_REGISTRATIONS,
    BUSINESS_CERTIFICATES, BUSINESS_LICENSES, BIS_REGISTRATIONS,
    NGO_REGISTRATIONS, INTERNATIONAL_REGISTRATIONS, OTHER_SERVICES,
    COMPANY_COMPLIANCE, ANNUAL_COMPLIANCE, MCA_SERVICES,
    EVENT_BASED_COMPLIANCE, CONVERT_BUSINESS, IPR_REGISTRATIONS,
    INCOME_TAX, GST, CA_SERVICES, BUSINESS_CONSULTANTS, LAWYER_EXPERT,
    COMPANY_REGISTRATIONS, ENVIRONMENTAL, AGREEMENTS, REGULATORY, TOOLS_CALCULATORS,
    LITIGATION_SERVICES, PROFESSIONAL_SERVICES,
);

// Mismatched menu item alias mappings to correct keys
SERVICES['llp-annual-compliance'] = SERVICES['llp-compliance'];
SERVICES['gstr-1-filing'] = SERVICES['gst-return-filing'];
SERVICES['gstr-3b-filing'] = SERVICES['gst-return-filing'];
SERVICES['gstr-2b-reconciliation'] = SERVICES['gst-return-filing'];
SERVICES['gst-tds-tcs-filing'] = SERVICES['gst-return-filing'];
SERVICES['gstr-9-9c'] = SERVICES['gstr9-return-filing'];
SERVICES['gst-registration-cancellation'] = SERVICES['cancel-gst-registration'];
SERVICES['gst-registration-amendment'] = SERVICES['additional-place-of-business-gst'];
SERVICES['gst-compliance-ecommerce'] = SERVICES['gst-registration-ecommerce'];
SERVICES['e-way-bill-compliances'] = SERVICES['e-way-bill-registration'];
SERVICES['gst-refund'] = SERVICES['gst-return-filing'];
SERVICES['advance-tax-calculation'] = SERVICES['income-tax-return-filing'];
SERVICES['tax-planning-consultation'] = SERVICES['income-tax-return-filing'];

// New business conversion option fallbacks
SERVICES['convert-sole-proprietorship-to-llp'] = SERVICES['convert-partnership-into-llp'];
SERVICES['convert-llp-to-private-limited'] = SERVICES['convert-private-limited-to-llp'];
SERVICES['convert-partnership-to-private-limited'] = SERVICES['convert-private-limited-to-llp'];
SERVICES['convert-sole-proprietorship-to-private-limited'] = SERVICES['convert-private-limited-to-llp'];
