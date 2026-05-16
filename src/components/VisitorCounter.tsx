import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const LS_KEY = 'pr-local-visits';
const SS_KEY = 'pr-session-counted';
const NAMESPACE = 'partha-rakshit-portfolio';
const API_KEY = 'visitors';

const formatCount = (n: number): string => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
};

const getLocalCount = (): number => {
  try {
    return parseInt(localStorage.getItem(LS_KEY) || '0', 10) || 0;
  } catch {
    return 0;
  }
};

const VisitorCounter = () => {
  const [count, setCount] = useState<number>(getLocalCount);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem(SS_KEY);

    // Increment local count on a new session
    if (!alreadyCounted) {
      const next = getLocalCount() + 1;
      try { localStorage.setItem(LS_KEY, String(next)); } catch { /* ignore */ }
      sessionStorage.setItem(SS_KEY, '1');
      setCount(next);
    }

    // Try global API — update display if it works
    const url = alreadyCounted
      ? `https://api.countapi.xyz/get/${NAMESPACE}/${API_KEY}`
      : `https://api.countapi.xyz/hit/${NAMESPACE}/${API_KEY}`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (typeof data?.value === 'number' && data.value > 0) {
          setCount(data.value);
        }
      })
      .catch(() => { /* keep local count */ })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      className="fixed top-5 left-5 z-40 hidden md:flex items-center gap-2 px-3 py-2 rounded-full select-none"
      style={{
        background: 'rgba(5,13,26,0.80)',
        border: '1px solid rgba(0,212,255,0.18)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,212,255,0.06)',
      }}
      title="Total portfolio visitors"
    >
      {/* Eye icon with pulse ring */}
      <div className="relative flex items-center justify-center w-5 h-5">
        <Eye className="w-3.5 h-3.5 text-cyan-400 relative z-10" />
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'rgba(0,212,255,0.15)',
            animation: 'pulse 2.5s ease-in-out infinite',
          }}
        />
      </div>

      {/* Count */}
      {loading ? (
        <span className="flex gap-0.5 items-center h-4">
          {[0, 1, 2].map((n) => (
            <span
              key={n}
              className="w-1 h-1 rounded-full bg-cyan-400"
              style={{ animation: `pulse 1.2s ease-in-out ${n * 0.2}s infinite` }}
            />
          ))}
        </span>
      ) : (
        <span className="text-xs font-bold text-white tabular-nums leading-none">
          {formatCount(count)}
        </span>
      )}

      {/* Label */}
      <span className="text-xs body-font leading-none" style={{ color: '#4a7a8a' }}>
        views
      </span>
    </div>
  );
};

export default VisitorCounter;
