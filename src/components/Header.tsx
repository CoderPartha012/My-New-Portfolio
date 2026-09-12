import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { SlideTabs } from './ui/slide-tabs';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'education', 'experience', 'projects', 'certifications', 'contact']
      .map(id => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const readingLine = Math.max(96, window.innerHeight * 0.2);
      let current = sections[0]?.id ?? 'hero';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = 'contact';
      }
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateActive); };
    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const media = window.matchMedia('(min-width: 1100px)');
    const closeOnDesktop = () => { if (media.matches) setMenuOpen(false); };
    document.addEventListener('keydown', onEscape);
    media.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', onEscape);
      media.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header className="qa-theme qa-header mf-header slide-header" data-hero>
      <div className="qa-container qa-header-inner">
        <a href="#hero" className="qa-brand" aria-label="Partha Rakshit, QA Engineer — home" onClick={() => setMenuOpen(false)}><strong>Partha Rakshit</strong></a>
        <button ref={toggleRef} type="button" className="qa-menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}</button>
        <nav id="primary-navigation" aria-label="Main navigation" className={`qa-nav ${menuOpen ? 'qa-nav-open' : ''}`}>
          <SlideTabs tabs={NAV_LINKS} activeId={active} onNavigate={() => setMenuOpen(false)} />
          <a className="qa-nav-contact" href="#contact" aria-current={active === 'contact' ? 'location' : undefined} onClick={() => setMenuOpen(false)}>Let's talk <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  );
}
