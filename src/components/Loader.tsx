import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './loader.css';

const INTRO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const [leaving, setLeaving] = useState(false);
  const finishRef = useRef<() => void>(() => {});

  useEffect(() => {
    const video = videoRef.current;
    const content = document.getElementById('portfolio-content');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    let dismissed = false;
    let disposed = false;
    let playbackTimer: ReturnType<typeof setTimeout> | undefined;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;

    const finish = () => {
      if (dismissed || disposed) return;
      dismissed = true;
      clearTimeout(playbackTimer);
      clearTimeout(limitTimer);
      video?.pause();
      setLeaving(true);
      exitTimer = setTimeout(onComplete, motion.matches ? 0 : 450);
    };
    finishRef.current = finish;
    const playing = () => {
      // Give the cinematic intro a short viewing window, without fake progress.
      if (!playbackTimer) playbackTimer = setTimeout(finish, 2600);
    };
    const motionChanged = () => { if (motion.matches) finish(); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') finish(); };
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key === 'Tab') { event.preventDefault(); skipRef.current?.focus(); }
    };

    document.body.style.overflow = 'hidden';
    if (content) content.inert = true;
    skipRef.current?.focus({ preventScroll: true });
    document.addEventListener('keydown', escape);
    document.addEventListener('keydown', trapFocus);
    motion.addEventListener('change', motionChanged);
    video?.addEventListener('playing', playing);
    video?.addEventListener('error', finish);
    // Even when the CDN stalls, the portfolio is available within six seconds.
    const limitTimer = setTimeout(finish, 6000);
    if (motion.matches) finish();
    else if (video) {
      video.src = INTRO_VIDEO;
      void video.play().catch(finish);
    }

    return () => {
      disposed = true;
      clearTimeout(playbackTimer);
      clearTimeout(exitTimer);
      clearTimeout(limitTimer);
      document.removeEventListener('keydown', escape);
      document.removeEventListener('keydown', trapFocus);
      motion.removeEventListener('change', motionChanged);
      video?.removeEventListener('playing', playing);
      video?.removeEventListener('error', finish);
      video?.pause();
      video?.removeAttribute('src');
      video?.load();
      document.body.style.overflow = previousOverflow;
      if (content) content.inert = false;
      if (dismissed) {
        const target = document.getElementById(window.location.hash.slice(1)) ?? document.getElementById('main-content');
        if (target) {
          const priorTabIndex = target.getAttribute('tabindex');
          if (priorTabIndex === null) target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          if (priorTabIndex === null) target.removeAttribute('tabindex');
        }
      } else previousFocus?.focus({ preventScroll: true });
    };
  }, [onComplete]);

  return <div className={`portfolio-loader${leaving ? ' portfolio-loader-leaving' : ''}`} role="dialog" aria-modal="true" aria-labelledby="intro-title" aria-describedby="intro-status">
    <div className="intro-plate" aria-hidden="true"><video ref={videoRef} className="intro-video" muted loop playsInline preload="auto" tabIndex={-1} /></div>
    <div className="intro-topbar"><span className="intro-name">Partha Rakshit</span><button ref={skipRef} className="intro-skip" type="button" onClick={() => finishRef.current()}>Skip intro <ArrowUpRight size={17} aria-hidden="true" /></button></div>
    <div className="intro-copy"><p className="intro-eyebrow">QA ENGINEER / SOFTWARE TESTING</p><h1 id="intro-title">Thoughtful testing.<br /><span>Software people<br className="intro-mobile-break" /> can rely on.</span></h1></div>
    <div className="intro-bottom"><p id="intro-status" role="status">Opening portfolio<span aria-hidden="true"> / </span><span className="intro-status-note">Please wait a moment</span></p><span className="intro-escape">ESC TO SKIP</span></div>
  </div>;
}
