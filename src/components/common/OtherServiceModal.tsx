import { useState, useEffect } from 'react';

interface OtherServiceModalProps {
    isOpen: boolean;
    initialValue: string;
    onClose: () => void;
    onSave: (value: string) => void;
}

export default function OtherServiceModal({ isOpen, initialValue, onClose, onSave }: OtherServiceModalProps) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        if (isOpen) setValue(initialValue);
    }, [isOpen, initialValue]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!value.trim()) return;
        onSave(value.trim());
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 cursor-pointer"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 className="text-lg font-bold text-[#090a3d] mb-1">Tell us what you need</h3>
                <p className="text-xs text-gray-500 mb-4">Briefly describe the service or requirement you're looking for.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        autoFocus
                        rows={3}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="e.g. ISO 22000 certification for my food business..."
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-2 focus:ring-[var(--color-brand-secondary)]/20 resize-none"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold py-3 rounded-xl transition-all shadow-md text-sm cursor-pointer"
                    >
                        Save Requirement
                    </button>
                </form>
            </div>
        </div>
    );
}
