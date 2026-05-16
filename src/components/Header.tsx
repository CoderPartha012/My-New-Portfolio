import { useState, useEffect, useCallback } from 'react';
import { X, Home, User, Zap, GraduationCap, Briefcase, Code2, Award, Mail, FileText } from 'lucide-react';

const navItems = [
  { name: 'Home',           id: 'hero',           Icon: Home },
  { name: 'About',          id: 'about',          Icon: User },
  { name: 'Skills',         id: 'skills',         Icon: Zap },
  { name: 'Education',      id: 'education',      Icon: GraduationCap },
  { name: 'Experience',     id: 'experience',     Icon: Briefcase },
  { name: 'Projects',       id: 'projects',       Icon: Code2 },
  { name: 'Certifications', id: 'certifications', Icon: Award },
  { name: 'Contact',        id: 'contact',        Icon: Mail },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  /* ── track scroll for pill shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── IntersectionObserver: highlight active section ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  /* lock body scroll when overlay open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ═══════════════════════════════════════
          DESKTOP — floating pill navbar
      ═══════════════════════════════════════ */}
      <header
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-500"
        style={{
          background: 'rgba(5,18,45,0.75)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(0,212,255,0.18)',
          boxShadow: scrolled
            ? '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,255,0.12), 0 0 30px rgba(0,212,255,0.08)'
            : '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        {/* Logo mark */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 px-3 py-1.5 mr-2 rounded-full group"
          style={{ background: 'rgba(0,212,255,0.06)' }}
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black"
            style={{
              background: 'linear-gradient(135deg,#0284c7,#00d4ff)',
              color: '#050d1a',
              boxShadow: '0 0 10px rgba(0,212,255,0.4)',
            }}
          >
            PR
          </div>
          <span
            className="text-sm font-bold tracking-wide heading-font"
            style={{
              background: 'linear-gradient(135deg,#00d4ff,#10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Portfolio
          </span>
        </button>

        {/* Divider */}
        <div className="w-px h-5 mx-1" style={{ background: 'rgba(0,212,255,0.15)' }} />

        {/* Nav items */}
        {navItems.map(({ name, id, Icon }) => {
          const isActive = activeId === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold subheading-font transition-all duration-250 group"
              style={{
                background: isActive ? 'rgba(0,212,255,0.12)' : 'transparent',
                color: isActive ? '#00d4ff' : '#7db3cc',
                border: isActive ? '1px solid rgba(0,212,255,0.25)' : '1px solid transparent',
                boxShadow: isActive ? '0 0 12px rgba(0,212,255,0.15)' : 'none',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.color = '#e2f0ff';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.color = '#7db3cc';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }
              }}
            >
              <Icon className="w-3 h-3 flex-shrink-0" />
              {name}
              {/* Active dot */}
              {isActive && (
                <span
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: '#00d4ff', boxShadow: '0 0 6px #00d4ff' }}
                />
              )}
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-px h-5 mx-1" style={{ background: 'rgba(0,212,255,0.15)' }} />

        {/* Resume button */}
        <a
          href="https://drive.google.com/file/d/1pSxUujwep6NO93flyU4FHG_vVke0efKl/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold subheading-font transition-all duration-250"
          style={{
            background: 'linear-gradient(135deg,#0284c7,#00d4ff)',
            color: '#050d1a',
            boxShadow: '0 0 12px rgba(0,212,255,0.3)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,212,255,0.55)';
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(0,212,255,0.3)';
            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          }}
        >
          <FileText className="w-3 h-3" />
          Resume
        </a>
      </header>

      {/* ═══════════════════════════════════════
          MOBILE — top bar + hamburger
      ═══════════════════════════════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-5 py-3.5 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(5,13,26,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,212,255,0.10)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black"
            style={{
              background: 'linear-gradient(135deg,#0284c7,#00d4ff)',
              color: '#050d1a',
              boxShadow: '0 0 10px rgba(0,212,255,0.35)',
            }}
          >
            PR
          </div>
          <span
            className="text-base font-bold heading-font"
            style={{
              background: 'linear-gradient(135deg,#00d4ff,#10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Portfolio
          </span>
        </button>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-300"
          style={{
            background: menuOpen ? 'rgba(0,212,255,0.12)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${menuOpen ? 'rgba(0,212,255,0.35)' : 'rgba(255,255,255,0.08)'}`,
          }}
          aria-label="Toggle menu"
        >
          <span
            className="block h-0.5 rounded-full transition-all duration-300 origin-center"
            style={{
              width: '18px',
              background: menuOpen ? '#00d4ff' : '#7db3cc',
              transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-0.5 rounded-full transition-all duration-300"
            style={{
              width: '18px',
              background: menuOpen ? '#00d4ff' : '#7db3cc',
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            className="block h-0.5 rounded-full transition-all duration-300 origin-center"
            style={{
              width: '18px',
              background: menuOpen ? '#00d4ff' : '#7db3cc',
              transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </header>

      {/* ═══════════════════════════════════════
          MOBILE OVERLAY MENU
      ═══════════════════════════════════════ */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col transition-all duration-400"
        style={{
          background: 'rgba(2,11,24,0.97)',
          backdropFilter: 'blur(20px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
        }}
      >
        {/* Cyber grid in overlay */}
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-500/6 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <div className="relative z-10 flex justify-end px-5 pt-5 pb-2">
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200"
            style={{
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.25)',
            }}
          >
            <X className="w-5 h-5 text-cyan-400" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="relative z-10 flex flex-col justify-center flex-1 px-8 gap-1 pb-10">
          {navItems.map(({ name, id, Icon }, i) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 group"
                style={{
                  background: isActive ? 'rgba(0,212,255,0.10)' : 'transparent',
                  border: isActive ? '1px solid rgba(0,212,255,0.22)' : '1px solid transparent',
                  animationDelay: `${i * 45}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `opacity 0.35s ease ${i * 45}ms, transform 0.35s ease ${i * 45}ms, background 0.2s, border 0.2s`,
                }}
              >
                {/* Icon container */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: isActive
                      ? 'linear-gradient(135deg,#0284c7,#00d4ff)'
                      : 'rgba(255,255,255,0.05)',
                    border: isActive ? 'none' : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: isActive ? '0 0 16px rgba(0,212,255,0.35)' : 'none',
                  }}
                >
                  <Icon
                    className="w-4.5 h-4.5"
                    style={{ color: isActive ? '#050d1a' : '#7db3cc', width: '18px', height: '18px' }}
                  />
                </div>

                {/* Label */}
                <span
                  className="text-lg font-bold subheading-font transition-colors duration-200"
                  style={{ color: isActive ? '#00d4ff' : '#94a3b8' }}
                >
                  {name}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <div
                    className="ml-auto w-1.5 h-6 rounded-full"
                    style={{
                      background: 'linear-gradient(180deg,#00d4ff,#10b981)',
                      boxShadow: '0 0 8px rgba(0,212,255,0.5)',
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Resume CTA */}
        <div className="relative z-10 px-8 pb-6">
          <a
            href="https://drive.google.com/file/d/1pSxUujwep6NO93flyU4FHG_vVke0efKl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold subheading-font transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg,#0284c7,#00d4ff)',
              color: '#050d1a',
              boxShadow: '0 0 20px rgba(0,212,255,0.35)',
            }}
          >
            <FileText className="w-4 h-4" />
            View Resume
          </a>
        </div>

        {/* Bottom label */}
        <div className="relative z-10 text-center pb-8">
          <p className="text-xs text-slate-600 body-font tracking-widest uppercase">
            Partha Rakshit · Portfolio
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
