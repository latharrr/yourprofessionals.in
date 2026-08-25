import { useState } from 'react';

interface ChatMessage {
    sender: 'ai' | 'user';
    text: string;
    options?: string[];
}

export default function AIAgentWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            sender: 'ai',
            text: "Hello! I am your AI Corporate Advisor. How can I help you with business registration or compliance today?",
            options: [
                "Pvt Ltd Incorporation",
                "GST Filing & Registration",
                "Trademark & Brand Protection",
                "Speak to a Chartered Accountant"
            ]
        }
    ]);
    const [inputVal, setInputVal] = useState('');
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [leadCaptured, setLeadCaptured] = useState(false);
    const [showLeadForm, setShowLeadForm] = useState(false);

    const handleOptionClick = (option: string) => {
        setMessages(prev => [
            ...prev,
            { sender: 'user', text: option }
        ]);

        setTimeout(() => {
            if (option === "Speak to a Chartered Accountant" || option.includes("Contact")) {
                setShowLeadForm(true);
                setMessages(prev => [
                    ...prev,
                    {
                        sender: 'ai',
                        text: "Great! Please share your contact details below so our senior CA team can call you back within 15 minutes."
                    }
                ]);
            } else {
                setMessages(prev => [
                    ...prev,
                    {
                        sender: 'ai',
                        text: `Sure! Regarding ${option}, we offer 100% online processing with expert CA/CS verification. Would you like a detailed price quote or to schedule a callback?`,
                        options: ["Request Free Callback", "Get Price Quotation", "Chat on WhatsApp"]
                    }
                ]);
            }
        }, 600);
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputVal.trim()) return;

        const text = inputVal.trim();
        setInputVal('');

        setMessages(prev => [...prev, { sender: 'user', text }]);

        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                {
                    sender: 'ai',
                    text: `Thank you for asking about "${text}". Our expert team handles over 300+ statutory services. Please share your phone number to get instant assistance.`,
                    options: ["Request Free Callback", "Chat on WhatsApp"]
                }
            ]);
        }, 700);
    };

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userName || !userPhone) return;
        setLeadCaptured(true);
        setShowLeadForm(false);
        setMessages(prev => [
            ...prev,
            {
                sender: 'ai',
                text: `✓ Thank you ${userName}! Your request has been sent to our CA desk. We will call you on ${userPhone} shortly.`
            }
        ]);
    };

    return (
        <>
            {/* ── FLOATING TRIGGER BUTTON - BOTTOM RIGHT (SMALL ROUND CIRCLE, ENTERPRISE GRADE) ── */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#090a3d] hover:bg-[#12155a] text-white shadow-[0_8px_32px_rgba(9,10,61,0.25)] hover:shadow-[0_12px_40px_rgba(9,10,61,0.35)] transition-all duration-300 hover:scale-105 border border-white/10 cursor-pointer select-none group"
                    aria-label="Open AI Assistant"
                >
                    {/* Ring Glow Effect */}
                    <span className="absolute inset-0 rounded-full border border-[#b8860b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-105" />

                    {/* Sleek SVG Robot Icon (Replacing raw emoji) */}
                    <svg className="w-6 h-6 text-white group-hover:rotate-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.765 6 6 0 001.257-3.241C4.304 15.6 4.02 13.848 4.02 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>

                    {/* Tiny Smart Green Status Dot (Top-Right of Circle) */}
                    <span className="absolute top-0 right-0 flex h-3.5 w-3.5 translate-x-1/4 -translate-y-1/4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
                    </span>
                </button>
            </div>

            {/* ── AI CHATBOT DIALOG MODAL (ENTERPRISE UI/UX) ── */}
            {isOpen && (
                <div 
                    className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden flex flex-col max-h-[520px] transition-all animate-in fade-in slide-in-from-bottom-6 duration-300"
                    style={{ backdropFilter: 'blur(20px)' }}
                >
                    
                    {/* Header */}
                    <div className="bg-[#090a3d] text-white px-5 py-4 flex items-center justify-between border-b border-white/5">
                        <div className="flex items-center gap-3">
                            {/* Smart Icon Container */}
                            <div className="w-8.5 h-8.5 rounded-full bg-gradient-to-tr from-[#b8860b] to-[#e8b730] flex items-center justify-center text-white shadow-md">
                                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.765 6 6 0 001.257-3.241C4.304 15.6 4.02 13.848 4.02 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs tracking-wide leading-none uppercase text-gray-100">AI Corporate Advisor</h4>
                                <span className="text-[10px] text-emerald-400 flex items-center gap-1.5 mt-1 font-semibold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white flex items-center justify-center text-xs font-bold cursor-pointer transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages Body */}
                    <div className="p-4 flex-1 overflow-y-auto space-y-3.5 bg-gray-50 text-xs">
                        {messages.map((m, idx) => (
                            <div key={idx} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                <div className={`max-w-[85%] p-3.5 rounded-xl leading-relaxed shadow-sm ${
                                    m.sender === 'user' 
                                        ? 'bg-[#090a3d] text-white rounded-tr-none' 
                                        : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                                }`}>
                                    {m.text}
                                </div>

                                {/* Option buttons */}
                                {m.options && (
                                    <div className="flex flex-col gap-1.5 mt-2 w-full max-w-[85%]">
                                        {m.options.map((opt, oIdx) => (
                                            <button
                                                key={oIdx}
                                                onClick={() => handleOptionClick(opt)}
                                                className="w-full text-left bg-white hover:bg-gray-100 hover:text-[#090a3d] border border-gray-200 text-gray-700 text-[11px] font-medium px-4 py-2.5 rounded-lg transition-all cursor-pointer shadow-sm"
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Inline Lead Capture Form */}
                        {showLeadForm && !leadCaptured && (
                            <form onSubmit={handleLeadSubmit} className="bg-white p-4 rounded-xl border border-gray-150 shadow-md space-y-3 text-xs">
                                <p className="font-semibold text-gray-900 border-b border-gray-100 pb-1.5">Request CA Callback:</p>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="Your Full Name"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#b8860b]"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        placeholder="10-Digit Mobile Number"
                                        value={userPhone}
                                        maxLength={10}
                                        onChange={(e) => setUserPhone(e.target.value.replace(/[^0-9]/g, ''))}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#b8860b]"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#b8860b] hover:bg-[#a67800] text-white font-bold py-2.5 rounded-lg text-xs transition-colors cursor-pointer shadow-sm"
                                >
                                    Submit Request
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Chat Input Bar */}
                    <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Type your question here..."
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#b8860b] focus:bg-white transition-all"
                        />
                        <button
                            type="submit"
                            className="w-8.5 h-8.5 rounded-lg bg-[#090a3d] hover:bg-[#12155a] text-white flex items-center justify-center text-xs transition-colors cursor-pointer shrink-0"
                            aria-label="Send Message"
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
