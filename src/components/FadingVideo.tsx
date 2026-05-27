/**
 * FadingVideo — looping <video> with rAF-driven crossfade.
 *
 * Performance behaviour:
 *  - preload="none"  → the browser won't fetch any video bytes until play() is called.
 *  - IntersectionObserver (rootMargin 300px) → play() is called when the section is
 *    about to enter the viewport, pause() when it leaves.
 *  - This means only 1–2 videos are actually decoding at a time instead of all 7+.
 *
 * Fade logic (unchanged):
 *  - FADE_MS = 500 ms for both fade-in and fade-out.
 *  - FADE_OUT_LEAD = 0.55 s — start fading out this many seconds before the end.
 *  - fadeTo() reads current opacity from video.style.opacity so every new fade
 *    resumes exactly where the previous one left off.
 *  - No CSS transitions — all opacity changes go through rAF.
 *  - `loop` is intentionally OFF; looping is re-implemented via the `ended` event.
 */
import { useRef, useEffect } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const FADE_MS       = 500;   // ms
const FADE_OUT_LEAD = 0.55;  // seconds before end to begin fade-out

export default function FadingVideo({ src, className = '', style }: FadingVideoProps) {
  const videoRef     = useRef<HTMLVideoElement>(null);
  const rafRef       = useRef<number>(0);
  const fadingOutRef = useRef(false);
  const playingRef   = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    /* ── fade helper ──────────────────────────────────────────────────── */
    function fadeTo(target: number, duration: number) {
      cancelAnimationFrame(rafRef.current);
      const start = performance.now();
      const from  = parseFloat(video!.style.opacity || '0');

      function step(now: number) {
        const t = Math.min((now - start) / duration, 1);
        video!.style.opacity = String(from + (target - from) * t);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
      }
      rafRef.current = requestAnimationFrame(step);
    }

    /* ── video events ─────────────────────────────────────────────────── */
    function onLoadedData() {
      video!.style.opacity = '0';
      fadeTo(1, FADE_MS);
    }

    function onTimeUpdate() {
      if (!video!.duration) return;
      const remaining = video!.duration - video!.currentTime;
      if (!fadingOutRef.current && remaining <= FADE_OUT_LEAD && remaining > 0) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    }

    function onEnded() {
      video!.style.opacity = '0';
      setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1, FADE_MS);
      }, 100);
    }

    video.style.opacity = '0';
    video.addEventListener('loadeddata', onLoadedData);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended',      onEnded);

    /* ── IntersectionObserver — play when near viewport ──────────────── */
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!playingRef.current) {
              playingRef.current = true;
              video.play().catch(() => {});
            }
          } else {
            if (playingRef.current) {
              playingRef.current = false;
              video.pause();
              cancelAnimationFrame(rafRef.current);
              video.style.opacity = '0';
              fadingOutRef.current = false;
            }
          }
        }
      },
      { rootMargin: '300px' },   // start loading 300 px before entering viewport
    );

    observer.observe(video);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      video.removeEventListener('loadeddata', onLoadedData);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended',      onEnded);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      preload="none"
      /* autoPlay intentionally omitted — IntersectionObserver handles play() */
      /* loop intentionally omitted — manual via `ended` */
      aria-hidden="true"
      tabIndex={-1}
      className={className}
      style={{ opacity: 0, ...style }}
    />
  );
}
