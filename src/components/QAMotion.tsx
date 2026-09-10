import { useEffect, useRef } from 'react';

/**
 * Global motion controller. Two jobs, both decorative:
 *
 *  1. Scroll progress rail — reads as a live test-run bar across the top.
 *  2. `qa-inview` bookkeeping — ambient looping animations (shimmer, radar pings,
 *     aurora drift) are scoped to this class so they only run for the section the
 *     visitor is actually looking at. Off-screen loops still cost style recalc
 *     every frame, and this measured ~2x cheaper during scroll.
 */
export default function QAMotion() {
  const ref = useRef<HTMLDivElement>(null);

  /* ── Scroll progress ─────────────────────────────────────────────────── */
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      element.style.setProperty('--qa-progress', String(Math.min(Math.max(progress, 0), 1)));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  /* ── Pause ambient motion outside the viewport ───────────────────────── */
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('section[id], footer.qa-footer');
    if (!targets.length) return;
    if (!('IntersectionObserver' in window)) {
      targets.forEach(target => target.classList.add('qa-inview'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('qa-inview', entry.isIntersecting));
    }, { rootMargin: '120px 0px' });
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="qa-theme qa-progress" aria-hidden="true"><span /></div>;
}
