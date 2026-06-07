/**
 * Header — liquid-glass pill navbar (desktop) + full-screen serif overlay (mobile).
 *
 * Desktop (fixed top-4, px-8 / lg:px-16, z-50):
 *   [pr monogram circle]   [Home · About · Skills · Projects · Contact | Download Resume]   [invisible spacer]
 *
 * Mobile: monogram + hamburger toggle → full-screen black overlay with serif nav links.
 */
import { useState, useCallback, useEffect } from 'react';

const RESUME_URL =
  'https://drive.google.com/file/d/1yj1d1wOlS9aV808MfqK15tq3racngtfB/view?usp=sharing';

const NAV_LINKS = [
  { label: 'Home',           id: 'hero'           },
  { label: 'About',          id: 'about'          },
  { label: 'Skills',         id: 'skills'         },
  { label: 'Experience',     id: 'experience'     },
  { label: 'Projects',       id: 'projects'       },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact',        id: 'contact'        },
];

/* ── Inline SVG: ArrowUpRight ──────────────────────────────────────────── */
function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  /* Lock body scroll while mobile overlay is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          DESKTOP — three-column fixed bar
      ══════════════════════════════════════════════════════════════════ */}
      <header
        className="fixed left-0 right-0 z-50 items-center justify-between hidden px-8 pointer-events-none top-4 md:flex lg:px-16"
      >
        {/* Left: "pr" monogram — 48×48 liquid-glass circle */}
        <button
          onClick={() => scrollTo('hero')}
          aria-label="Scroll to top"
          className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer pointer-events-auto liquid-glass"
        >
          <span className="text-xl italic leading-none text-white select-none font-heading">
            pr
          </span>
        </button>

        {/* Center: nav pill */}
        <nav className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center gap-0.5 pointer-events-auto">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-3 py-2 text-sm font-medium text-white/90 font-body rounded-full
                         transition-colors duration-150 hover:text-white hover:bg-white/[0.07]
                         cursor-pointer whitespace-nowrap"
            >
              {label}
            </button>
          ))}

          {/* Separator */}
          <span className="flex-shrink-0 w-px h-4 mx-1 bg-white/10" aria-hidden="true" />

          {/* Download Resume CTA — solid white pill */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-white text-black px-4 py-2 rounded-full
                       text-sm font-semibold font-body whitespace-nowrap
                       hover:bg-white/90 transition-colors duration-150"
          >
            Download Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        {/* Right: invisible 48×48 spacer to balance the logo */}
        <div className="flex-shrink-0 w-12 h-12" aria-hidden="true" />
      </header>

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE — top bar
      ══════════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 md:hidden">
        <button
          onClick={() => scrollTo('hero')}
          aria-label="Scroll to top"
          className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer liquid-glass"
        >
          <span className="text-base italic leading-none text-white font-heading">pr</span>
        </button>

        {/* Hamburger / close toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer liquid-glass"
        >
          {menuOpen ? (
            /* × close */
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}
              strokeLinecap="round" className="w-4 h-4" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* ☰ hamburger */
            <span className="flex flex-col gap-[5px] items-center">
              <span className="block w-4 h-[1.5px] bg-white/80 rounded-full" />
              <span className="block w-4 h-[1.5px] bg-white/80 rounded-full" />
              <span className="block w-2.5 h-[1.5px] bg-white/80 rounded-full" />
            </span>
          )}
        </button>
      </header>

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE OVERLAY — full-screen serif menu
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className="fixed inset-0 z-40 flex flex-col px-8 pt-20 pb-8 md:hidden"
        style={{
          background: 'rgba(0,0,0,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        <nav className="flex flex-col justify-center flex-1 gap-1">
          {NAV_LINKS.map(({ label, id }, i) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="py-3 italic text-left transition-colors duration-150 cursor-pointer font-heading text-white/70 hover:text-white"
              style={{
                fontSize: 'clamp(1.75rem, 7vw, 2.5rem)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-16px)',
                transition: `opacity 0.35s ease ${i * 50}ms, transform 0.35s ease ${i * 50}ms, color 0.15s`,
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Resume CTA at bottom */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="flex items-center justify-center w-full gap-2 py-4 text-sm font-medium text-white rounded-full liquid-glass-strong font-body"
        >
          Download Resume
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
