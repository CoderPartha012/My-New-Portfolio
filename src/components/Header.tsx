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
  'https://drive.google.com/file/d/1pSxUujwep6NO93flyU4FHG_vVke0efKl/view?usp=sharing';

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
        className="fixed top-4 left-0 right-0 z-50 hidden md:flex items-center justify-between px-8 lg:px-16 pointer-events-none"
      >
        {/* Left: "pr" monogram — 48×48 liquid-glass circle */}
        <button
          onClick={() => scrollTo('hero')}
          aria-label="Scroll to top"
          className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center
                     pointer-events-auto cursor-pointer"
        >
          <span className="font-heading italic text-white text-xl leading-none select-none">
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
          <span className="w-px h-4 bg-white/10 mx-1 flex-shrink-0" aria-hidden="true" />

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
        <div className="w-12 h-12 flex-shrink-0" aria-hidden="true" />
      </header>

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE — top bar
      ══════════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-5 py-4">
        <button
          onClick={() => scrollTo('hero')}
          aria-label="Scroll to top"
          className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <span className="font-heading italic text-white text-base leading-none">pr</span>
        </button>

        {/* Hamburger / close toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          {menuOpen ? (
            /* × close */
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}
              strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
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
        className="fixed inset-0 z-40 md:hidden flex flex-col pt-20 pb-8 px-8"
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
        <nav className="flex flex-col gap-1 flex-1 justify-center">
          {NAV_LINKS.map(({ label, id }, i) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left py-3 font-heading italic text-white/70 hover:text-white
                         transition-colors duration-150 cursor-pointer"
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
          className="liquid-glass-strong flex items-center justify-center gap-2 w-full py-4
                     rounded-full text-white font-body font-medium text-sm"
        >
          Download Resume
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}
