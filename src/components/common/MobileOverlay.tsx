import { useState, useLayoutEffect } from 'react';

export default function MobileOverlay() {
  // Start with true so the overlay renders on first paint on mobile;
  // useLayoutEffect runs synchronously before the browser paints.
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useLayoutEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (!isMobile) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      <img
        src="/mobile-view.jpeg"
        alt="Mobile view"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
        }}
      />
    </div>
  );
}
