import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './slide-tabs.css';

export interface SlideTab {
  id: string;
  label: string;
}

interface SlideTabsProps {
  tabs: readonly SlideTab[];
  activeId: string;
  onNavigate?: (id: string) => void;
}

export function SlideTabs({ tabs, activeId, onNavigate }: SlideTabsProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const tabsRef = useRef(new Map<string, HTMLAnchorElement>());
  const [hovered, setHovered] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const [position, setPosition] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });
  const reducedMotion = useReducedMotion();
  const highlighted = hovered ?? focused ?? activeId;

  useEffect(() => {
    let disposed = false;
    const measure = () => {
      const list = listRef.current;
      const tab = tabsRef.current.get(highlighted);
      if (!list || !tab || !list.getClientRects().length) {
        setPosition(previous => previous.opacity ? { ...previous, opacity: 0 } : previous);
        return;
      }
      const bounds = list.getBoundingClientRect();
      const target = tab.getBoundingClientRect();
      setPosition({ left: target.left - bounds.left - list.clientLeft, top: target.top - bounds.top - list.clientTop, width: target.width, height: target.height, opacity: 1 });
    };
    measure();
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure);
    if (listRef.current) observer?.observe(listRef.current);
    tabsRef.current.forEach(tab => observer?.observe(tab));
    void document.fonts.ready.then(() => { if (!disposed) measure(); });
    window.addEventListener('resize', measure);
    return () => { disposed = true; observer?.disconnect(); window.removeEventListener('resize', measure); };
  }, [highlighted, tabs]);

  return <ul className="slide-tabs" ref={listRef}
    onMouseLeave={() => setHovered(null)}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(null); }}>
    {tabs.map(tab => <li key={tab.id} className="slide-tab">
      <a ref={element => { if (element) tabsRef.current.set(tab.id, element); else tabsRef.current.delete(tab.id); }}
        href={`#${tab.id}`} aria-current={activeId === tab.id ? 'location' : undefined}
        onMouseEnter={() => setHovered(tab.id)}
        onFocus={() => { setFocused(tab.id); setHovered(null); }}
        onClick={() => { setHovered(null); setFocused(null); onNavigate?.(tab.id); }}>
        {tab.label}
      </a>
    </li>)}
    <motion.li aria-hidden="true" className="slide-tabs-cursor" initial={false} animate={position}
      transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 430, damping: 36 }} />
  </ul>;
}
