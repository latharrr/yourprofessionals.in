// Single source of truth for every lead / data-collection form on the site.
// Rule: "Other Service" is always the LAST option, and choosing it opens the
// OtherServiceModal so the visitor can type their specific requirement.

export const OTHER_SERVICE = 'Other Service';

// Older entry points (Header menu events, saved links) used these spellings.
const OTHER_SERVICE_ALIASES = ['Need help with Other Services', 'other'];

export const isOtherService = (value: string | undefined | null): boolean =>
    !!value && (value === OTHER_SERVICE || OTHER_SERVICE_ALIASES.includes(value));

// Services shown in the hero form, consultation popup, blog forms and contact page.
export const LEAD_SERVICES: string[] = [
    'Private Limited Company Registration',
    'One Person Company Registration (OPC)',
    'LLP Registration',
    'Partnership Firm Registration',
    'Sole Proprietorship Registration',
    'Startup India Registration',
    'Virtual Office',
    'Compliance Services',
    'Trademark Registration',
    'Copyright Registration',
    'GST Registration',
    'Section 8 Company Registration',
    'GST Return Filing',
    'FSSAI Registration',
    'BIS Registration',
    'NGO Registration',
    'Need A Job',
    OTHER_SERVICE,
];

// Company-type pages (company registration + individual service pages).
export const COMPANY_TYPE_SERVICES: string[] = [
    'Private Limited Company Registration',
    'One Person Company Registration (OPC)',
    'LLP Registration',
    'Partnership Firm Registration',
    'Sole Proprietorship Registration',
    'Startup India Registration',
    'Section 8 Company Registration',
    'Nidhi Company Registration',
    'Producer Company Registration',
    OTHER_SERVICE,
];

export const COUNTRY_CODES = ['+91', '+1', '+44', '+971', '+65', '+61'];

// What gets sent to the sheet / inbox: "Other: <what they typed>" for Other.
export const resolveServiceLabel = (service: string, customService: string): string =>
    isOtherService(service) && customService.trim() ? `Other: ${customService.trim()}` : service;

// Indian numbers must be exactly 10 digits; other countries 6–14.
export const isValidPhone = (code: string, digits: string): boolean =>
    code === '+91' ? /^[6-9]\d{9}$/.test(digits) : /^\d{6,14}$/.test(digits);
