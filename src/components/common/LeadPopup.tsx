import { useState, useEffect, useCallback } from 'react';
import LeadForm from './LeadForm';

const SEEN_KEY = 'hasSeenConsultationPopup';

const markSeen = () => {
    try { localStorage.setItem(SEEN_KEY, 'true'); } catch { /* private mode / blocked storage */ }
};

export default function LeadPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [initialService, setInitialService] = useState('');
    // Bumped on every open so the form always starts fresh (and re-applies a preset service).
    const [openCount, setOpenCount] = useState(0);

    const open = useCallback((service = '') => {
        setInitialService(service);
        setOpenCount((n) => n + 1);
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
        markSeen();
    }, []);

    useEffect(() => {
        // Free Consultation buttons, menu items and CTAs all fire this event.
        const handleOpenPopup = (e: Event) => open((e as CustomEvent<{ service?: string }>).detail?.service);
        window.addEventListener('openConsultationPopup', handleOpenPopup);

        // Auto-open once for first-time visitors, shortly after the site loads.
        let seen = false;
        try { seen = !!localStorage.getItem(SEEN_KEY); } catch { /* treat as unseen */ }
        const timer = seen ? undefined : setTimeout(() => open(), 5000);

        return () => {
            if (timer) clearTimeout(timer);
            window.removeEventListener('openConsultationPopup', handleOpenPopup);
        };
    }, [open]);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, close]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[110] flex items-start sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={close}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Free consultation and instant quote"
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md px-6 py-8 sm:px-9 sm:py-10 my-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={close}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="text-center">
                    <span className="inline-block bg-amber-50 text-[var(--color-brand-secondary)] font-extrabold text-[11px] uppercase tracking-wider px-4 py-2 rounded-full border border-amber-200">
                        FREE CONSULTATION &amp; INSTANT QUOTE
                    </span>
                </div>

                <h2
                    className="text-center text-[26px] sm:text-[30px] font-extrabold leading-[1.15] text-[#090a3d] mt-5 mb-7"
                    style={{ fontFamily: 'var(--font-sans)' }}
                >
                    Receive Your<br />
                    <span className="text-[var(--color-brand-secondary)]">Personalized Quote</span><br />
                    Instantly
                </h2>

                <LeadForm key={openCount} initialService={initialService} onSuccess={close} />
            </div>
        </div>
    );
}
