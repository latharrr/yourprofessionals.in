export default function DueDatesTicker() {
  const dates = [
    { label: "GSTR-1 (Monthly)", date: "11th of every month" },
    { label: "GSTR-3B (Monthly)", date: "20th of every month" },
    { label: "ITR Filing (Individuals)", date: "31st July 2026" },
    { label: "AOC-4 (ROC Annual Filing)", date: "30th October 2026" },
    { label: "MGT-7 (ROC Annual Return)", date: "29th November 2026" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-[#090a3d] border-b border-[rgba(199,145,0,0.3)] z-[100] flex items-center overflow-hidden select-none">
      <div className="bg-[#b8860b] text-white text-[10px] font-extrabold uppercase px-4 h-full flex items-center shadow-md shrink-0 relative z-10">
        Due Dates
      </div>
      <div className="flex-1 overflow-hidden relative flex items-center">
        <div className="flex whitespace-nowrap text-white/90 text-xs font-semibold py-1">
          {/* First set */}
          <div className="flex shrink-0 items-center animate-marquee">
            {dates.map((item, idx) => (
              <span key={`ticker-1-${idx}`} className="mx-8">
                <span className="text-[#b8860b]">{item.label}:</span> {item.date}
              </span>
            ))}
          </div>
          {/* Second set for infinite scroll */}
          <div className="flex shrink-0 items-center animate-marquee" aria-hidden="true">
            {dates.map((item, idx) => (
              <span key={`ticker-2-${idx}`} className="mx-8">
                <span className="text-[#b8860b]">{item.label}:</span> {item.date}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
