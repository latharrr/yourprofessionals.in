import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { findAnswer } from '../../lib/agentKnowledge';
import type { ServiceLite } from '../../lib/agentKnowledge';
import { isValidPhone } from '../../data/leadServices';
import { submitLead } from '../../lib/submitLead';

type OptionAction = 'topic' | 'quote' | 'callback' | 'whatsapp';

interface ChatOption {
    label: string;
    action: OptionAction;
    /** For 'topic': the service page this starter opens. */
    slug?: string;
}

interface ChatMessage {
    sender: 'ai' | 'user';
    text: string;
    options?: ChatOption[];
    links?: { label: string; to: string }[];
}

const WHATSAPP_NUMBER = '919354332511';

const FOLLOW_UPS: ChatOption[] = [
    { label: 'Get Price Quotation', action: 'quote' },
    { label: 'Request Free Callback', action: 'callback' },
    { label: 'Chat on WhatsApp', action: 'whatsapp' },
];

const GREETING: ChatMessage = {
    sender: 'ai',
    text: 'Hello! I am your Corporate Advisor. Ask me about business registration, GST, trademark or compliance — or pick a topic below.',
    options: [
        { label: 'Pvt Ltd Incorporation', action: 'topic', slug: 'private-limited-company-registration' },
        { label: 'GST Filing & Registration', action: 'topic', slug: 'gst-registration' },
        { label: 'Trademark & Brand Protection', action: 'topic', slug: 'trademark-registration' },
        { label: 'Speak to a Chartered Accountant', action: 'callback' },
    ],
};

export default function AIAgentWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
    const [inputVal, setInputVal] = useState('');
    const [topic, setTopic] = useState('');
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [leadStatus, setLeadStatus] = useState<'idle' | 'sending' | 'done'>('idle');
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [leadError, setLeadError] = useState('');

    const endRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<ServiceLite[] | null>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ block: 'end' });
    }, [messages, showLeadForm, isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen]);

    const say = useCallback((msg: ChatMessage, delay = 500) => {
        setTimeout(() => setMessages((prev) => [...prev, msg]), delay);
    }, []);

    const openWhatsApp = (subject: string) => {
        const text = `Hi, I need help with ${subject || 'business registration and compliance services'}.`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    };

    const askForContact = (intro: string) => {
        setLeadStatus('idle');
        setLeadError('');
        setShowLeadForm(true);
        say({ sender: 'ai', text: intro });
    };

    const handleOption = (opt: ChatOption) => {
        setMessages((prev) => [...prev, { sender: 'user', text: opt.label }]);
        switch (opt.action) {
            case 'topic':
                setTopic(opt.label);
                say({
                    sender: 'ai',
                    text: `${opt.label}: we handle this 100% online with expert CA/CS verification. You can see the full process, documents and fees on the page below — or I can arrange a quote or callback.`,
                    links: opt.slug ? [{ label: `View ${opt.label}`, to: `/${opt.slug}` }] : undefined,
                    options: FOLLOW_UPS,
                });
                break;
            case 'quote':
                askForContact('Happy to help. Share your name and mobile number and our team will send you a detailed quote.');
                break;
            case 'callback':
                askForContact('Great! Please share your contact details below so our CA team can call you back.');
                break;
            case 'whatsapp':
                openWhatsApp(topic);
                say({ sender: 'ai', text: 'Opening WhatsApp for you. If it did not open, tap "Chat on WhatsApp" again.' }, 300);
                break;
        }
    };

    const loadServices = async (): Promise<ServiceLite[]> => {
        if (!servicesRef.current) {
            // Loaded on demand so the full service catalogue stays out of the main bundle.
            const { SERVICES } = await import('../../data/services');
            servicesRef.current = Object.values(SERVICES).map((s) => ({ slug: s.slug, title: s.title, subtitle: s.subtitle }));
        }
        return servicesRef.current;
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        const text = inputVal.trim();
        if (!text) return;
        setInputVal('');
        setMessages((prev) => [...prev, { sender: 'user', text }]);

        const answer = findAnswer(text, await loadServices());
        if (answer.kind === 'services') {
            setTopic(answer.matches[0].title);
            say({
                sender: 'ai',
                text: 'These look like the closest match. Tap one to see the process, documents and fees.',
                links: answer.matches.map((m) => ({ label: m.title, to: `/${m.slug}` })),
                options: FOLLOW_UPS.slice(0, 2),
            }, 400);
        } else if (answer.kind === 'faq') {
            say({
                sender: 'ai',
                text: answer.answer,
                options: FOLLOW_UPS,
            }, 400);
        } else {
            say({
                sender: 'ai',
                text: 'I could not find that in our guides. Our CA team can answer it directly. Share your number for a callback, or message us on WhatsApp.',
                options: [FOLLOW_UPS[1], FOLLOW_UPS[2]],
            }, 400);
        }
    };

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLeadError('');
        if (!userName.trim()) return;
        if (!isValidPhone('+91', userPhone)) {
            setLeadError('Enter a valid 10-digit mobile number.');
            return;
        }
        setLeadStatus('sending');
        try {
            const asked = messages.filter((m) => m.sender === 'user').map((m) => m.text).slice(-4).join(' | ');
            await submitLead({
                name: userName.trim(),
                phone: `+91 ${userPhone}`,
                service: `Website assistant: ${topic || 'General enquiry'}`,
                message: asked ? `Chat context: ${asked}` : undefined,
            });
            setShowLeadForm(false);
            setLeadStatus('done');
            setMessages((prev) => [
                ...prev,
                { sender: 'ai', text: `Thank you ${userName.trim()}! Your request has reached our CA desk. We will call you on +91 ${userPhone} shortly.` },
            ]);
            setUserName('');
            setUserPhone('');
        } catch {
            setLeadStatus('idle');
            setLeadError('Could not send your request. Please try again or use WhatsApp.');
        }
    };

    return (
        <>
            {/* ── FLOATING TRIGGER BUTTON (BOTTOM RIGHT) ── */}
            <div className="fixed bottom-6 right-4 sm:right-6 z-50">
                <button
                    type="button"
                    onClick={() => setIsOpen((o) => !o)}
                    className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#090a3d] hover:bg-[#12155a] text-white shadow-[0_8px_32px_rgba(9,10,61,0.25)] hover:shadow-[0_12px_40px_rgba(9,10,61,0.35)] transition-all duration-300 hover:scale-105 border border-white/10 cursor-pointer select-none group"
                    aria-label={isOpen ? 'Close assistant' : 'Open assistant'}
                    aria-expanded={isOpen}
                    aria-controls="site-assistant-panel"
                >
                    <span className="absolute inset-0 rounded-full border border-[#b8860b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-105" />
                    <svg className="w-6 h-6 text-white group-hover:rotate-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.765 6 6 0 001.257-3.241C4.304 15.6 4.02 13.848 4.02 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    <span className="absolute top-0 right-0 flex h-3.5 w-3.5 translate-x-1/4 -translate-y-1/4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
                    </span>
                </button>
            </div>

            {/* ── CHAT PANEL ── */}
            {isOpen && (
                <div
                    id="site-assistant-panel"
                    role="dialog"
                    aria-label="Corporate advisor chat"
                    className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] border border-gray-100 overflow-hidden flex flex-col max-h-[min(540px,calc(100vh-8rem))]"
                >
                    <div className="bg-[#090a3d] text-white px-5 py-4 flex items-center justify-between border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#b8860b] to-[#e8b730] flex items-center justify-center text-white shadow-md">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.765 6 6 0 001.257-3.241C4.304 15.6 4.02 13.848 4.02 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs tracking-wide leading-none uppercase text-gray-100">Corporate Advisor</h4>
                                <span className="text-[10px] text-emerald-400 flex items-center gap-1.5 mt-1 font-semibold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                                </span>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white flex items-center justify-center text-xs font-bold cursor-pointer transition-colors"
                            aria-label="Close assistant"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="p-4 flex-1 overflow-y-auto space-y-3.5 bg-gray-50 text-xs" role="log" aria-live="polite">
                        {messages.map((m, idx) => (
                            <div key={idx} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                <div className={`max-w-[85%] p-3.5 rounded-xl leading-relaxed shadow-sm whitespace-pre-line ${
                                    m.sender === 'user'
                                        ? 'bg-[#090a3d] text-white rounded-tr-none'
                                        : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                                }`}>
                                    {m.text}
                                </div>

                                {m.links && (
                                    <div className="flex flex-col gap-1.5 mt-2 w-full max-w-[85%]">
                                        {m.links.map((l) => (
                                            <Link
                                                key={l.to}
                                                to={l.to}
                                                onClick={() => setIsOpen(false)}
                                                className="w-full text-left bg-amber-50 hover:bg-amber-100 border border-amber-200 text-[#090a3d] text-[11px] font-bold px-4 py-2.5 rounded-lg transition-all flex items-center justify-between gap-2"
                                            >
                                                <span>{l.label}</span>
                                                <span aria-hidden="true">→</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}

                                {m.options && idx === messages.length - 1 && !showLeadForm && (
                                    <div className="flex flex-col gap-1.5 mt-2 w-full max-w-[85%]">
                                        {m.options.map((opt) => (
                                            <button
                                                key={opt.label}
                                                type="button"
                                                onClick={() => handleOption(opt)}
                                                className="w-full text-left bg-white hover:bg-gray-100 hover:text-[#090a3d] border border-gray-200 text-gray-700 text-[11px] font-medium px-4 py-2.5 rounded-lg transition-all cursor-pointer shadow-sm"
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {showLeadForm && (
                            <form onSubmit={handleLeadSubmit} className="bg-white p-4 rounded-xl border border-gray-200 shadow-md space-y-3 text-xs">
                                <p className="font-semibold text-gray-900 border-b border-gray-100 pb-1.5">Request CA Callback</p>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="Your Full Name"
                                        autoComplete="name"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#b8860b]"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        inputMode="numeric"
                                        autoComplete="tel-national"
                                        placeholder="10-Digit Mobile Number"
                                        value={userPhone}
                                        maxLength={10}
                                        onChange={(e) => setUserPhone(e.target.value.replace(/[^0-9]/g, ''))}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#b8860b]"
                                        required
                                    />
                                </div>
                                {leadError && <p role="alert" className="text-red-600 font-semibold">{leadError}</p>}
                                <button
                                    type="submit"
                                    disabled={leadStatus === 'sending'}
                                    className="w-full bg-[#b8860b] hover:bg-[#a67800] disabled:opacity-60 text-white font-bold py-2.5 rounded-lg text-xs transition-colors cursor-pointer shadow-sm"
                                >
                                    {leadStatus === 'sending' ? 'Sending…' : 'Submit Request'}
                                </button>
                            </form>
                        )}
                        <div ref={endRef} />
                    </div>

                    <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
                        <label htmlFor="assistant-input" className="sr-only">Type your question</label>
                        <input
                            id="assistant-input"
                            type="text"
                            placeholder="Type your question here..."
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#b8860b] focus:bg-white transition-all"
                        />
                        <button
                            type="submit"
                            className="w-9 h-9 rounded-lg bg-[#090a3d] hover:bg-[#12155a] text-white flex items-center justify-center text-xs transition-colors cursor-pointer shrink-0"
                            aria-label="Send message"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
