import { useId, useState } from 'react';
import OtherServiceModal from './OtherServiceModal';
import { LEAD_SERVICES, COUNTRY_CODES, OTHER_SERVICE, isOtherService, isValidPhone, resolveServiceLabel } from '../../data/leadServices';
import { submitLead } from '../../lib/submitLead';

const WHATSAPP_URL =
    'https://wa.me/919354332511?text=Hi%2C%20I%20need%20assistance%20with%20business%20registration%20and%20compliance%20services.';

const FIELD_BASE =
    'w-full bg-white border border-gray-200 rounded-xl text-[#090a3d] placeholder-gray-500 focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-2 focus:ring-[var(--color-brand-secondary)]/20 transition-all';
const ICON = 'w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#090a3d] pointer-events-none';

interface LeadFormProps {
    /** Pre-selected service, e.g. when opened from a menu item. */
    initialService?: string;
    /** Called a moment after a successful submit (the popup uses it to close itself). */
    onSuccess?: () => void;
    /** Shorter fields and tighter spacing so the whole form fits on a laptop's first screen. */
    compact?: boolean;
}

export default function LeadForm({ initialService = '', onSuccess, compact = false }: LeadFormProps) {
    const uid = useId();
    const FIELD = `${FIELD_BASE} ${compact ? 'h-11 text-sm [@media(max-height:700px)]:h-10' : 'h-14 text-[15px]'}`;
    const startService = isOtherService(initialService) ? OTHER_SERVICE : initialService;

    const [formData, setFormData] = useState({
        name: '',
        phoneCode: '+91',
        phone: '',
        email: '',
        service: startService,
        customService: '',
    });
    const [whatsappUpdates, setWhatsappUpdates] = useState(true);
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [formError, setFormError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    // Opening with "Other" preselected (Header menu) should immediately ask what they need.
    const [otherModalOpen, setOtherModalOpen] = useState(isOtherService(initialService));

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        setPhoneError(/[^0-9]/.test(raw) ? 'Please enter numbers only.' : '');
        setFormData((prev) => ({ ...prev, phone: raw.replace(/[^0-9]/g, '') }));
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setEmailError(val.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? 'Please enter a valid email address.' : '');
        setFormData((prev) => ({ ...prev, email: val }));
    };

    const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        setFormData((prev) => ({ ...prev, service: val, customService: isOtherService(val) ? prev.customService : '' }));
        if (isOtherService(val)) setOtherModalOpen(true);
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setFormError('');
        if (phoneError || emailError || !formData.name.trim() || !formData.phone || !formData.email || !formData.service) {
            setFormError('Please fill all fields correctly before submitting.');
            return;
        }
        if (!isValidPhone(formData.phoneCode, formData.phone)) {
            setPhoneError(formData.phoneCode === '+91' ? 'Enter a valid 10-digit mobile number.' : 'Enter a valid mobile number.');
            return;
        }
        if (isOtherService(formData.service) && !formData.customService.trim()) {
            setFormError('Please tell us which service you need.');
            setOtherModalOpen(true);
            return;
        }

        setIsSubmitting(true);
        try {
            await submitLead({
                name: formData.name.trim(),
                phone: `${formData.phoneCode} ${formData.phone}`,
                email: formData.email,
                service: resolveServiceLabel(formData.service, formData.customService),
                message: whatsappUpdates ? 'Wants quote and updates on WhatsApp.' : 'Does not want WhatsApp updates.',
            });
            setSubmitSuccess(true);
            setFormData({ name: '', phoneCode: '+91', phone: '', email: '', service: '', customService: '' });
            setTimeout(() => {
                setSubmitSuccess(false);
                onSuccess?.();
            }, 3500);
        } catch {
            setFormError('Something went wrong. Please try again or chat with us on WhatsApp.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className="text-center py-10" role="status">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                <h4 className="text-lg font-extrabold text-[#090a3d]">Thank you!</h4>
                <p className="text-gray-600 text-sm mt-1">Your details are in. Our CA team will contact you shortly with your quote.</p>
            </div>
        );
    }

    return (
        <>
            {formError && (
                <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-bold text-center">
                    {formError}
                </div>
            )}

            <form className={compact ? 'space-y-3 [@media(max-height:700px)]:space-y-2' : 'space-y-4'} onSubmit={handleSubmit} noValidate>
                {/* Full Name */}
                <div className="relative">
                    <label htmlFor={`${uid}-name`} className="sr-only">Full Name</label>
                    <svg className={ICON} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                    <input
                        id={`${uid}-name`}
                        type="text"
                        autoComplete="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className={`${FIELD} pl-12 pr-4`}
                    />
                </div>

                {/* Country code + mobile */}
                <div>
                    <div className="flex gap-3">
                        <div className="relative w-[36%] shrink-0">
                            <label htmlFor={`${uid}-code`} className="sr-only">Country code</label>
                            <svg className={ICON} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                            <select
                                id={`${uid}-code`}
                                value={formData.phoneCode}
                                onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                                className={`${FIELD} appearance-none pl-12 pr-8 font-semibold cursor-pointer`}
                            >
                                {COUNTRY_CODES.map((code) => (
                                    <option key={code} value={code}>{code}</option>
                                ))}
                            </select>
                            <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#090a3d] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <div className="flex-1">
                            <label htmlFor={`${uid}-phone`} className="sr-only">Mobile / WhatsApp number</label>
                            <input
                                id={`${uid}-phone`}
                                type="tel"
                                inputMode="numeric"
                                autoComplete="tel-national"
                                placeholder="Mobile / WhatsApp"
                                maxLength={formData.phoneCode === '+91' ? 10 : 14}
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                required
                                aria-invalid={!!phoneError}
                                className={`${FIELD} px-4 ${phoneError ? 'border-red-400 ring-2 ring-red-200' : ''}`}
                            />
                        </div>
                    </div>
                    {phoneError && <p className="text-red-500 text-xs mt-1.5 pl-1">{phoneError}</p>}
                </div>

                {/* Email */}
                <div>
                    <div className="relative">
                        <label htmlFor={`${uid}-email`} className="sr-only">Email Address</label>
                        <svg className={ICON} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                        <input
                            id={`${uid}-email`}
                            type="email"
                            autoComplete="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleEmailChange}
                            required
                            aria-invalid={!!emailError}
                            className={`${FIELD} pl-12 pr-4 ${emailError ? 'border-red-400 ring-2 ring-red-200' : ''}`}
                        />
                    </div>
                    {emailError && <p className="text-red-500 text-xs mt-1.5 pl-1">{emailError}</p>}
                </div>

                {/* Service — "Other Service" is always the last option */}
                <div className="relative">
                    <label htmlFor={`${uid}-service`} className="sr-only">Select Service</label>
                    <select
                        id={`${uid}-service`}
                        value={formData.service}
                        onChange={handleServiceChange}
                        required
                        className={`${FIELD} appearance-none px-4 pr-11 font-semibold cursor-pointer ${formData.service ? '' : 'text-[#090a3d]'}`}
                    >
                        <option value="" disabled>Select Service</option>
                        {LEAD_SERVICES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                    <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-[#090a3d] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>

                {/* What they typed in the "Other" popup */}
                {isOtherService(formData.service) && (
                    <div className="flex items-center justify-between gap-2 bg-amber-50/70 border border-amber-200 rounded-xl px-4 py-3">
                        <span className="text-xs text-gray-700 truncate">
                            {formData.customService
                                ? <><span className="font-bold text-[#090a3d]">Your requirement:</span> {formData.customService}</>
                                : 'No requirement noted yet.'}
                        </span>
                        <button type="button" onClick={() => setOtherModalOpen(true)} className="text-xs font-bold text-[var(--color-brand-secondary)] hover:underline shrink-0 cursor-pointer">
                            {formData.customService ? 'Edit' : 'Add details'}
                        </button>
                    </div>
                )}

                {/* WhatsApp opt-in */}
                <label className={`flex items-center gap-3 cursor-pointer select-none ${compact ? '' : 'pt-1'}`}>
                    <input
                        type="checkbox"
                        checked={whatsappUpdates}
                        onChange={(e) => setWhatsappUpdates(e.target.checked)}
                        className="w-5 h-5 rounded-md accent-[var(--color-brand-secondary)] cursor-pointer"
                    />
                    <span className={`${compact ? 'text-sm' : 'text-[15px]'} text-gray-600`}>Send updates on WhatsApp</span>
                </label>

                {/* Primary CTA */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${compact ? 'h-12 [@media(max-height:700px)]:h-11' : 'h-14'} bg-[var(--color-brand-secondary)] hover:bg-[#a67800] text-white text-base font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                            <span>Submitting…</span>
                        </>
                    ) : (
                        <>
                            <span>Get Quote Now</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                        </>
                    )}
                </button>

                {/* or — Chat on WhatsApp */}
                <div className={`flex items-center gap-4 ${compact ? '' : 'pt-1'}`} aria-hidden="true">
                    <span className="h-px flex-1 bg-gray-200" />
                    <span className="text-sm font-semibold text-[#090a3d]">or</span>
                    <span className="h-px flex-1 bg-gray-200" />
                </div>
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2.5 font-bold text-[#090a3d] hover:text-[#25D366] transition-colors ${compact ? 'text-base' : 'py-1 text-lg'}`}
                >
                    <svg className={`${compact ? 'w-6 h-6' : 'w-8 h-8'} shrink-0`} viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.56-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.66-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    <span>Chat on WhatsApp</span>
                </a>
            </form>

            <OtherServiceModal
                isOpen={otherModalOpen}
                initialValue={formData.customService}
                onClose={() => setOtherModalOpen(false)}
                onSave={(value) => {
                    setFormError('');
                    setFormData((prev) => ({ ...prev, customService: value }));
                }}
            />
        </>
    );
}
