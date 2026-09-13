import { forwardRef, useEffect, useRef, useState, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import './circular-gallery.css';

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: { url: string; text: string; pos?: string; by?: string };
  content?: ReactNode;
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
}

/** A circular gallery with optional custom cards, keyboard navigation and motion controls. */
const CircularGallery = forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className = '', radius = 560, autoRotateSpeed = 0.02, style, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [paused, setPaused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const [staticLayout, setStaticLayout] = useState(false);
    const [visible, setVisible] = useState(false);
    const viewportRef = useRef<HTMLDivElement>(null);
    const step = items.length ? 360 / items.length : 360;
    const active = items.length ? ((Math.round(-rotation / step) % items.length) + items.length) % items.length : 0;
    const stopped = paused || hovered || focused || staticLayout || !visible || items.length < 2;
    const effectiveRadius = items.length < 2 ? 0 : Math.max(radius, items.length * 78);

    useEffect(() => {
      const media = window.matchMedia('(max-width: 700px), (prefers-reduced-motion: reduce)');
      const update = () => setStaticLayout(media.matches);
      update();
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    }, []);

    useEffect(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      if (typeof IntersectionObserver === 'undefined') {
        setVisible(true);
        return;
      }
      const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
      observer.observe(viewport);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      const viewport = viewportRef.current;
      if (!viewport || staticLayout || items.length < 2) return;
      const cards = Array.from(viewport.querySelectorAll<HTMLElement>('.circular-gallery-item'));
      const measure = () => {
        // Layout heights ignore the carousel's perspective transforms. Reserve
        // only the tallest card plus room for its top offset and lower shadow.
        const height = Math.max(...cards.map(card => card.offsetHeight), 0);
        viewport.style.setProperty('--gallery-content-height', `${height + 48}px`);
      };
      if (typeof ResizeObserver === 'undefined') {
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
      }
      const observer = new ResizeObserver(measure);
      cards.forEach(card => observer.observe(card));
      measure();
      return () => observer.disconnect();
    }, [items.length, staticLayout]);

    useEffect(() => {
      if (stopped) return;
      let frame = 0;
      let previous = 0;
      let lastScroll = window.scrollY;
      let scrollUntil = 0;
      const scroll = () => {
        const delta = window.scrollY - lastScroll;
        lastScroll = window.scrollY;
        scrollUntil = performance.now() + 150;
        setRotation(value => value - Math.max(-100, Math.min(100, delta)) * 0.045);
      };
      const animate = (now: number) => {
        if (previous && now > scrollUntil && !document.hidden) {
          setRotation(value => value - autoRotateSpeed * Math.min(now - previous, 50) / (1000 / 60));
        }
        previous = now;
        frame = requestAnimationFrame(animate);
      };
      window.addEventListener('scroll', scroll, { passive: true });
      frame = requestAnimationFrame(animate);
      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('scroll', scroll);
      };
    }, [stopped, autoRotateSpeed]);

    const select = (index: number) => {
      setPaused(true);
      setRotation(current => {
        const position = Math.round(-current / step);
        return -(position + index - active) * step;
      });
    };

    if (!items.length) return null;

    return (
      <div ref={ref} className={`circular-gallery ${className}`} data-paused={paused || undefined} role="region" aria-roledescription="carousel"
        aria-label="Project gallery" style={{ ...style, '--gallery-radius': `${effectiveRadius}px` } as CSSProperties}
        {...props}
        onKeyDown={event => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            select(active + (event.key === 'ArrowRight' ? 1 : -1));
          }
        }}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
        <div className="circular-gallery-toolbar">
          <p className="circular-gallery-position"><span>{String(active + 1).padStart(2, '0')}</span> / {String(items.length).padStart(2, '0')}</p>
          <div className="circular-gallery-buttons">
            {!staticLayout && items.length > 1 && <button type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Start gallery rotation' : 'Pause gallery rotation'} title={paused ? 'Start gallery rotation' : 'Pause gallery rotation'}>{paused ? <Play size={18} /> : <Pause size={18} />}</button>}
            <button type="button" onClick={() => select(active - 1)} disabled={items.length < 2} aria-label="Previous project"><ArrowLeft size={20} /></button>
            <button type="button" onClick={() => select(active + 1)} disabled={items.length < 2} aria-label="Next project"><ArrowRight size={20} /></button>
          </div>
        </div>
        <div ref={viewportRef} className="circular-gallery-viewport" data-static={staticLayout || items.length < 2 || undefined}
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <div className="circular-gallery-orbit" aria-hidden="true" />
          <div className="circular-gallery-track" style={{ transform: `translateZ(${-effectiveRadius}px) rotateY(${rotation}deg)` }}>
            {items.map((item, index) => {
              const angle = index * step;
              const distance = Math.abs(((angle + rotation) % 360 + 540) % 360 - 180);
              const selected = index === active;
              return <div key={item.photo.url} className="circular-gallery-item" data-active={selected}
                ref={element => { if (element) element.inert = !selected; }}
                role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${items.length}: ${item.common}`}
                aria-hidden={!selected}
                style={{ transform: `rotateY(${angle}deg) translateZ(${effectiveRadius}px)`, opacity: selected ? 1 : Math.max(0.18, 1 - distance / 130) }}>
                {item.content ?? <article className="circular-gallery-default-card">
                  <img src={item.photo.url} alt={item.photo.text} style={{ objectPosition: item.photo.pos || 'center' }} />
                  <div><h3>{item.common}</h3><p>{item.binomial}</p>{item.photo.by && <p>Photo by: {item.photo.by}</p>}</div>
                </article>}
              </div>;
            })}
          </div>
        </div>
        <div className="circular-gallery-pagination" aria-label="Choose project">
          {items.map((item, index) => <button key={item.photo.url} type="button" aria-label={`Show ${item.common}`} aria-pressed={active === index} onClick={() => select(index)}><span /></button>)}
        </div>
      </div>
    );
  },
);

CircularGallery.displayName = 'CircularGallery';
export { CircularGallery };
