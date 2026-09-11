import { useEffect, useRef, useState } from 'react';

const RESUME_URL = 'https://drive.google.com/file/d/1K-J8HZ9LW4Y8AGUIs48KwsGbtfuJaHvZ/view?usp=sharing';
const workflow = [
  ['01', 'Understand the product', 'Requirements, user journeys & risk'],
  ['02', 'Test beyond the happy path', 'Functional, API & integration testing'],
  ['03', 'Automate what matters', 'Repeatable regression coverage'],
  ['04', 'Build release confidence', 'Clear defects & actionable reporting'],
];

const HERO_DESCRIPTION = 'I turn complex workflows into reliable user experiences through thoughtful manual testing, test automation, and API validation.';
const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4';

function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let delay: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = () => {
      clearTimeout(delay);
      clearInterval(interval);
      if (media.matches) { setDisplayed(text); return; }
      setDisplayed('');
      let index = 0;
      delay = setTimeout(() => {
        interval = setInterval(() => {
          index++;
          setDisplayed(text.slice(0, index));
          if (index >= text.length) clearInterval(interval);
        }, speed);
      }, startDelay);
    };
    start();
    media.addEventListener('change', start);
    return () => { clearTimeout(delay); clearInterval(interval); media.removeEventListener('change', start); };
  }, [text, speed, startDelay]);
  return { displayed, done: displayed.length === text.length };
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { displayed, done } = useTypewriter(HERO_DESCRIPTION);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)');
    let previousX: number | null = null;
    let targetTime = 0;
    let pending = false;
    const seek = () => {
      if (pending || video.seeking || video.readyState < 1 || !Number.isFinite(video.duration)) return;
      if (Math.abs(video.currentTime - targetTime) > 0.025) {
        pending = true;
        video.currentTime = targetTime;
      }
    };
    const seeked = () => { pending = false; seek(); };
    const reset = () => { previousX = null; targetTime = video.currentTime; };
    const move = (event: MouseEvent) => {
      const bounds = sectionRef.current?.getBoundingClientRect();
      if (media.matches || !bounds || bounds.bottom <= 0 || event.clientY < bounds.top || event.clientY > bounds.bottom) { previousX = null; return; }
      if (previousX === null) { previousX = event.clientX; return; }
      const delta = event.clientX - previousX;
      previousX = event.clientX;
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      targetTime = Math.max(0, Math.min(video.duration, targetTime + delta / window.innerWidth * 0.8 * video.duration));
      seek();
    };
    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('blur', reset);
    video.addEventListener('seeked', seeked);
    media.addEventListener('change', reset);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('blur', reset);
      video.removeEventListener('seeked', seeked);
      media.removeEventListener('change', reset);
    };
  }, []);
  return (
    <section ref={sectionRef} id="hero" className="qa-theme qa-hero hero-mainframe" aria-labelledby="hero-title">
      <video ref={videoRef} className="mf-video" src={HERO_VIDEO} muted playsInline preload="auto" aria-hidden="true" tabIndex={-1} />
      <div className="mf-video-wash" aria-hidden="true" />
      <div className="mf-container">
        <div className="mf-hero-grid">
          <div>
            <p className="mf-availability"><span /> Open to QA Engineer & SDET opportunities</p>
            <p className="mf-intro">Hi, I'm Partha Rakshit.</p>
            <h1 id="hero-title">QA Engineer.<br /><span>Quality at every step.</span></h1>
            <p className="mf-description"><span className="sr-only">{HERO_DESCRIPTION}</span><span className="mf-typewriter-space" aria-hidden="true">{HERO_DESCRIPTION}</span><span className="mf-typewriter-text" aria-hidden="true">{displayed}{!done && <span className="mf-cursor" />}</span></p>
            <div className="mf-specialties" aria-label="Testing focus"><span>Manual testing</span><span>Test automation</span><span>API testing</span></div>
            <div className="mf-actions">
              <a className="mf-pill" href="#projects">Explore my work <span aria-hidden="true">&#8599;</span></a>
              <a className="mf-pill mf-pill-outline" href={RESUME_URL} target="_blank" rel="noopener noreferrer">View resume <span aria-hidden="true">&#8599;</span></a>
            </div>
          </div>
          <aside className="mf-workflow" aria-labelledby="workflow-title">
            <div className="mf-panel-top"><span> quality / workflow</span><span className="mf-panel-tag">MY APPROACH</span></div>
            <div className="mf-workflow-heading"><div><h2 id="workflow-title">Confidence before release.</h2><p>From the first requirement to the final check.</p></div></div>
            <ol className="mf-workflow-list">{workflow.map(([number, title, description]) => <li key={number}><span className="mf-step-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span aria-hidden="true">&#10003;</span></li>)}</ol>
            <div className="mf-workflow-footer"><span className="mf-code">mindset</span><span>Question. Validate. Improve.</span></div>
          </aside>
        </div>
        <div className="mf-toolbelt"><span className="mf-eyebrow">MY TESTING TOOLKIT</span><div>{['Selenium', 'Playwright', 'Java', 'TestNG', 'Postman', 'Jira'].map(tool => <span key={tool}>{tool}</span>)}</div><a href="#about">Meet the tester <span aria-hidden="true">&#8595;</span></a></div>
      </div>
    </section>
  );
}
