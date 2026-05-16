import { useEffect, useState } from 'react';

const DURATION = 5000; // ms before loader exits

const Loader = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'done'>('loading');
  const [glitch, setGlitch] = useState(false);

  /* ── progress bar ── */
  useEffect(() => {
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase('done');
        setTimeout(onDone, 600); // wait for fade-out
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  /* ── random glitch flashes ── */
  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120);
    }, 900);
    return () => clearInterval(id);
  }, []);

  const checks = [
    { label: 'Initializing environment',  threshold: 15 },
    { label: 'Loading components',         threshold: 40 },
    { label: 'Mounting portfolio',         threshold: 65 },
    { label: 'Applying cyber theme',       threshold: 85 },
    { label: 'Ready',                      threshold: 100 },
  ];

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: '#020b18',
        opacity: phase === 'done' ? 0 : 1,
        transition: 'opacity 0.6s ease',
        pointerEvents: phase === 'done' ? 'none' : 'all',
      }}
    >
      {/* ── Cyber grid ── */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* ── Scan line ── */}
      <div className="scan-line" />

      {/* ── Corner accents ── */}
      {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8 pointer-events-none`}>
          <div
            className="absolute inset-0"
            style={{
              borderTop: i < 2 ? '2px solid rgba(0,212,255,0.5)' : 'none',
              borderBottom: i >= 2 ? '2px solid rgba(0,212,255,0.5)' : 'none',
              borderLeft: i % 2 === 0 ? '2px solid rgba(0,212,255,0.5)' : 'none',
              borderRight: i % 2 === 1 ? '2px solid rgba(0,212,255,0.5)' : 'none',
            }}
          />
        </div>
      ))}

      {/* ── Ambient orbs ── */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl orb-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/6 rounded-full blur-3xl orb-float-delayed pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-8">

        {/* Logo mark */}
        <div className="relative mb-8">
          {/* Outer ring */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              border: '1px solid rgba(0,212,255,0.2)',
              boxShadow: '0 0 40px rgba(0,212,255,0.15)',
              animation: 'spin 8s linear infinite',
            }}
          >
            {/* Inner ring (counter-spin) */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                border: '1px solid rgba(16,185,129,0.3)',
                animation: 'spin 4s linear infinite reverse',
              }}
            >
              {/* Center initials */}
              <span
                className="text-2xl font-black heading-font"
                style={{
                  background: 'linear-gradient(135deg,#00d4ff,#10b981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                PR
              </span>
            </div>
          </div>

          {/* Rotating arc dots */}
          {[0, 90, 180, 270].map((deg) => (
            <div
              key={deg}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ transform: `rotate(${deg}deg)` }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: deg === 0 || deg === 180 ? '#00d4ff' : '#10b981',
                  transform: 'translateY(-48px)',
                  boxShadow: `0 0 8px ${deg === 0 || deg === 180 ? '#00d4ff' : '#10b981'}`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Name with glitch */}
        <div className="relative mb-2 text-center overflow-hidden">
          <h1
            className="text-3xl md:text-4xl font-black heading-font text-white tracking-wider"
            style={{
              textShadow: glitch
                ? '2px 0 #00d4ff, -2px 0 #10b981'
                : '0 0 20px rgba(0,212,255,0.3)',
              transform: glitch ? `translateX(${Math.random() > 0.5 ? 2 : -2}px)` : 'none',
            }}
          >
            PARTHA RAKSHIT
          </h1>
          {/* Glitch duplicate layers */}
          {glitch && (
            <>
              <h1
                className="absolute inset-0 text-3xl md:text-4xl font-black heading-font tracking-wider"
                style={{ color: '#00d4ff', opacity: 0.4, clipPath: 'inset(30% 0 50% 0)', transform: 'translateX(3px)' }}
              >
                PARTHA RAKSHIT
              </h1>
              <h1
                className="absolute inset-0 text-3xl md:text-4xl font-black heading-font tracking-wider"
                style={{ color: '#10b981', opacity: 0.4, clipPath: 'inset(60% 0 20% 0)', transform: 'translateX(-3px)' }}
              >
                PARTHA RAKSHIT
              </h1>
            </>
          )}
        </div>

        <p className="text-slate-500 text-xs tracking-[0.3em] uppercase body-font mb-10">
          Quality Analyst · Software Tester
        </p>

        {/* Progress bar */}
        <div className="w-full mb-5">
          <div
            className="w-full h-0.5 rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg,#0284c7,#00d4ff,#10b981)',
                boxShadow: '0 0 12px rgba(0,212,255,0.6)',
              }}
            />
          </div>
        </div>

        {/* Check list */}
        <div className="w-full space-y-2">
          {checks.map((item) => {
            const done = progress >= item.threshold;
            const active = progress < item.threshold &&
              progress >= (checks[checks.indexOf(item) - 1]?.threshold ?? 0);
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 transition-all duration-300"
                style={{ opacity: done ? 1 : active ? 0.6 : 0.2 }}
              >
                {/* Status icon */}
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                  style={{
                    border: `1px solid ${done ? '#10b981' : active ? '#00d4ff' : 'rgba(255,255,255,0.15)'}`,
                    background: done ? 'rgba(16,185,129,0.15)' : 'transparent',
                    boxShadow: done ? '0 0 8px rgba(16,185,129,0.4)' : active ? '0 0 8px rgba(0,212,255,0.3)' : 'none',
                  }}
                >
                  {done && <span style={{ color: '#10b981' }}>✓</span>}
                  {active && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                      style={{ animation: 'pulse 1s ease-in-out infinite' }}
                    />
                  )}
                </div>

                <span
                  className="text-xs body-font tracking-wide"
                  style={{ color: done ? '#10b981' : active ? '#00d4ff' : '#334155' }}
                >
                  {item.label}
                  {active && <span className="ml-1 animate-pulse">...</span>}
                </span>

                {done && (
                  <span className="ml-auto text-xs" style={{ color: '#10b981' }}>
                    OK
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom percentage */}
        <div className="mt-8 flex items-center gap-3">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg,transparent,rgba(0,212,255,0.3))' }} />
          <span
            className="text-sm font-black heading-font tabular-nums"
            style={{
              background: 'linear-gradient(135deg,#00d4ff,#10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {Math.floor(progress)}%
          </span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg,rgba(0,212,255,0.3),transparent)' }} />
        </div>
      </div>

      {/* Spin keyframe injected inline */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
