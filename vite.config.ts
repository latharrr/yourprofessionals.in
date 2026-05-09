import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

const DOMAIN = 'https://yourprofessionals.in'

// All static + dynamic service slugs
const serviceRoutes = [
  // Registration
  'company-registration', 'private-limited-company-registration', 'llp-registration',
  'public-limited-company-registration', 'partnership-firm-registration', 'ngo-registration',
  'trust-registration', 'sole-proprietorship-registration', 'one-person-company',
  'society-registration', 'startup-india-registration', 'startup-registration',
  'virtual-office', 'nidhi-company-registration', 'microfinance-company-registration',
  'producer-company-registration', 'wordmark-registration', 'psara-license',
  'iec-registration', 'digital-signature-certificate', 'class-3-digital-signature-certificate',
  'indian-subsidiary-registration', 'small-scale-industries-registration',
  'foreign-subsidiary-company-registration', 'foreign-company-registration', 'barcode-registration',
  // Government Registration
  'drug-license', 'liquor-license', 'iso-registration', 'ayush-license', 'fieo-registration',
  'medical-device-registration', 'isi-mark-certification', 'professional-tax-registration',
  'ptec-registration', 'rcmc-registration', 'factory-license', 'icegate-registration',
  'petrol-pump-license', 'network-license', 'tec-certification', 'spice-plus-form',
  'issn-number', 'iso-22000-certification', 'iso-50001-certification', 'iso-31000-certification',
  'iso-9001-certification', 'iso-27001-certification', 'iso-14001-certification',
  'duns-number', 'geographical-indication-registration', 'gmp-certification',
  'isbn-number-registration', 'tobacco-license',
  // FSSAI
  'fssai-registration', 'fssai-central-license', 'fssai-state-license',
  'fssai-product-approval', 'fssai-license-renewal', 'halal-certification',
  // Trade
  'trade-licence-registration', 'trade-licence-renewal',
  // Business Certificates
  'rera-registration', 'nsic-registration', 'peso-certificate', 'hallmark-registration',
  'rubber-board-registration', 'ijcepa-certificate', 'fpo-mark-certification',
  'spice-board-registration', 'bee-registration', 'make-in-india-certificate',
  'zed-certification', 'nsdc-registration', 'ngo-project-report', 'cmmi-certification',
  'apeda-registration', 'texprocil-registration', 'certificate-of-good-standing', 'ce-certification',
  // Business Licenses
  'rni-registration', 'cdsco-registration', 'ad-code-registration', 'gsp-registration',
  'safta-license', 'wpc-certificate', 'mstc-license-registration', 'agmark-license',
  // BIS
  'bis-certification', 'bis-certification-power-banks', 'bis-fmcs-certification', 'bis-certification-toys',
  // NGO
  'section-8-company-registration', 'section-8-microfinance-company-registration',
  'darpan-registration', '12a-and-80g-registration', 'fcra-registration', 'ngo-accounting',
  // International
  'company-registration-in-dubai', 'uk-company-registration', 'singapore-company-registration',
  'usa-company-registration', 'canada-company-registration', 'oman-company-registration',
  'malaysia-company-registration', 'australia-company-registration', 'thailand-company-registration',
  'hong-kong-company-registration', 'indonesia-company-registration', 'qatar-company-registration',
  'italy-company-registration', 'sweden-company-registration', 'ireland-company-registration',
  'netherlands-company-registration', 'mauritius-company-registration',
  'saudi-arabia-company-registration', 'france-company-registration', 'germany-company-registration',
  'british-virgin-islands-registration', 'new-zealand-company-registration',
  'dubai-free-zone-company-registration',
  // Other Services
  'virtual-cfo-services', 'tea-board-registration', 'insurance-repository-registration',
  'sepc-license', 'gjepc-registration', 'isp-registration',
  // Compliance
  'msme-registration', 'epf-registration', 'shop-and-establishment-registration',
  'llp-annual-compliance', 'annual-compliance-private-limited', 'outsource-bookkeeping-services',
  'bookkeeping-and-accounting-services', 'nidhi-company-compliance', 'change-in-llp-agreement',
  'appointment-of-auditor', 'ngo-compliance', 'annual-compliance-society',
  'annual-compliance-partnership-firm', 'form-inc-20a', 'trust-annual-compliance',
  'partnership-firm-tax-return-filing',
  // MCA
  'change-private-limited-company-name', 'close-private-limited-company',
  'change-in-registered-office', 'change-in-object-clause', 'revival-of-struck-off-companies',
  'change-in-director', 'add-designated-partner', 'dir-3-kyc-for-directors',
  'strike-off-section-8-companies',
  // Event Compliance
  'winding-up-of-company', 'director-appointment', 'increase-authorized-capital',
  'removal-of-director', 'change-of-auditor', 'issue-of-shares', 'transfer-of-shares',
  // Convert Business
  'convert-partnership-into-llp',
  // IPR
  'trademark-registration', 'trademark-renewal', 'trademark-objection', 'trademark-opposition',
  'international-trademark-registration', 'trademark-rectification',
  'trademark-registration-ecommerce', 'trademark-hearing', 'response-to-trademark-objection',
  'trademark-infringement', 'trademark-assignment', 'copyright-registration',
  'patent-registration', 'design-registration', 'patent-search',
  // Income Tax
  'income-tax-return-filing', 'tds-return-filing', 'itr-2-form-filing', 'itr-7-form-filing',
  'itr-1-form-filing', 'advance-tax-calculation', 'tax-planning-consultation',
  'dtaa', 'transfer-pricing', 'tp-study-report', 'form-15-ca', 'international-taxation-consultancy',
  // GST
  'gstr-1-filing', 'gstr-3b-filing', 'gstr-2b-reconciliation', 'gstr-9-9c',
  'gst-tds-tcs-filing', 'gst-refund', 'gst-registration-cancellation',
  'virtual-place-of-business-gst', 'e-way-bill-compliances', 'gst-registration-amendment',
  'gst-compliance-ecommerce',
  // Litigation
  'litigation-income-tax', 'litigation-gst', 'litigation-custom',
  'litigation-international-taxation', 'litigation-mca', 'litigation-rera',
  'litigation-fema-fcra', 'litigation-pmla', 'litigation-other-corporate',
  // CA / Consultation
  'online-chartered-accountant-services', 'mergers-and-acquisitions',
  'financial-consultancy-services', 'financial-modeling-for-startups',
  'company-secretary-services', 'cma-services',
  'consumer-complaint', 'cheque-bounce-notice',
  'registered-valuer', 'actuarial-services', 'other-professional-services',
  // Environmental
  'consent-to-establish', 'environmental-due-diligence', 'epr-registration',
  'environmental-auditing', 'plastic-waste-authorization', 'epr-authorization-e-waste',
  'environmental-impact-assessment', 'rohs-certification', 'environmental-management-plan',
  // Agreements
  'memorandum-of-understanding', 'joint-venture-agreement', 'franchise-agreement',
  'shareholders-agreement', 'founders-agreement', 'legal-heir-certificate', 'sale-deed',
  'terms-of-use-agreement', 'master-service-agreement', 'succession-certificate',
  'gift-deed', 'relinquishment-deed', 'transfer-pricing-agreement', 'non-disclosure-agreement',
  'share-purchase-agreement', 'service-level-agreement', 'probate-of-will',
  'fire-department-noc', 'non-compete-agreement',
  // Regulatory
  'nbfc-registration', 'nbfc-compliance', 'payment-bank-license', 'payment-gateway-license',
  'legal-notice-defamation', 'legal-notice',
  // Labor Law
  'sa8000-certification',
  // Tools
  'nic-code', 'company-name-check', 'search-registered-company', 'trademark-search',
  'trademark-registration-details', 'trademark-class-search',
]

const staticRoutes = [
  '/',
  '/contact-us',
  '/company-registration',
  '/sip-calculator',
  '/step-up-sip-calculator',
  '/gst-calculator',
  '/gst-interest-calculator',
  '/income-tax-calculator',
  '/home-loan-emi-calculator',
  '/ppf-calculator',
  '/tds-calculator',
  '/tds-interest-calculator',
  '/8th-pay-commission-calculator',
]

const dynamicRoutes = serviceRoutes.map((s) => `/${s}`)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: DOMAIN,
      dynamicRoutes: [...staticRoutes, ...dynamicRoutes],
      generateRobotsTxt: false,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router'],
          'vendor-router': ['react-router-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
