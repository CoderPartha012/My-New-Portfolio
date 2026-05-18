import { useState, useEffect, useRef } from 'react';
import { Eye } from 'lucide-react';

const SS_KEY   = 'pr-session-counted';   // sessionStorage — survives refresh, cleared on tab close
const CACHE_KEY = 'pr-count-cache';      // localStorage   — last known API count for instant display
const HIT_URL  = 'https://api.countapi.xyz/hit/partha-rakshit-portfolio/visitors';
const GET_URL  = 'https://api.countapi.xyz/get/partha-rakshit-portfolio/visitors';

const formatCount = (n: number): string => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000)     return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
};

const readCache = (): number | null => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const n = parseInt(raw, 10);
    return Number.isFinite(n) && n > 0 ? n : null;
  } catch {
    return null;
  }
};

const writeCache = (n: number) => {
  try { localStorage.setItem(CACHE_KEY, String(n)); } catch { /* storage quota */ }
};

const VisitorCounter = () => {
  const [count, setCount]   = useState<number | null>(readCache);
  const [loading, setLoading] = useState(true);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    // ── Step 1: Mark this session as counted SYNCHRONOUSLY ──────────────────
    // Done before any async work so a fast re-mount cannot trigger a second hit.
    const alreadyCounted = sessionStorage.getItem(SS_KEY) === '1';
    if (!alreadyCounted) {
      sessionStorage.setItem(SS_KEY, '1');
    }

    // ── Step 2: Choose endpoint ──────────────────────────────────────────────
    // HIT  → increments the counter by 1 and returns the new total
    // GET  → reads the current counter without incrementing
    const url = alreadyCounted ? GET_URL : HIT_URL;

    // ── Step 3: Fetch ────────────────────────────────────────────────────────
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: unknown) => {
        if (!mounted.current) return;

        const value = (data as { value?: number })?.value;
        if (typeof value === 'number' && value > 0) {
          setCount(value);
          writeCache(value);   // keep localStorage in sync with real API count
        }
      })
      .catch(() => {
        // API down — keep showing the cached count already in state (from readCache)
      })
      .finally(() => {
        if (mounted.current) setLoading(false);
      });

    // ── Cleanup: prevent setState on unmounted component ────────────────────
    return () => { mounted.current = false; };
  }, []); // runs exactly once per mount

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
      {/* Eye icon */}
      <div className="relative flex items-center justify-center w-5 h-5">
        <Eye className="w-3.5 h-3.5 text-cyan-400 relative z-10" />
        <span
          className="absolute inset-0 rounded-full"
          style={{ background: 'rgba(0,212,255,0.15)', animation: 'pulse 2.5s ease-in-out infinite' }}
        />
      </div>

      {/* Count — show cached value immediately, replace with fresh API value */}
      {loading && count === null ? (
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
          {count !== null ? formatCount(count) : '—'}
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
