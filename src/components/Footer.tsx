import { useEffect, useRef } from 'react';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const footerLinks = [['About me', 'about'], ['Skills', 'skills'], ['Education', 'education'], ['Experience', 'experience'], ['Projects', 'projects'], ['Certifications', 'certifications']];

export default function Footer() {
  const watermark = useRef<SVGSVGElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    let active = true;
    const fit = () => {
      const svg = watermark.current;
      const text = svg?.querySelector('text');
      if (!active || !svg || !text) return;
      const box = text.getBBox();
      if (box.width && box.height) svg.setAttribute('viewBox', `${box.x} ${box.y} ${box.width} ${box.height}`);
    };
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => { if (motion.matches) video.current?.pause(); else void video.current?.play().catch(() => {}); };
    void document.fonts.ready.then(fit);
    window.addEventListener('resize', fit);
    motion.addEventListener('change', updateMotion);
    updateMotion();
    return () => { active = false; window.removeEventListener('resize', fit); motion.removeEventListener('change', updateMotion); };
  }, []);
  return <footer className="portfolio-footer"><section className="footer-section" aria-label="Portfolio footer">
    <div className="footer-wrapper">
      <div className="footer-left">
        <video ref={video} className="footer-left-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4" type="video/mp4" /></video>
        <a className="footer-logo" href="#hero" aria-label="Partha Rakshit, QA Engineer — back to top"><span className="footer-logo-mark">P</span><span><strong className="footer-logo-name">Partha Rakshit<span>.</span></strong><small>QA ENGINEER / SOFTWARE TESTING</small></span></a>
        <p className="footer-tagline">Thoughtful testing.<br /><span>Software people can rely on.</span></p>
        <div className="footer-social-row"><span className="footer-social-label">Stay in touch!</span><div className="footer-social-icons"><a href="https://github.com/CoderPartha012" target="_blank" rel="noopener noreferrer" aria-label="Partha Rakshit on GitHub"><Github size={17} /></a><a href="https://www.linkedin.com/in/partharakshit" target="_blank" rel="noopener noreferrer" aria-label="Partha Rakshit on LinkedIn"><Linkedin size={17} /></a><a href="mailto:partharakshit5653@gmail.com" aria-label="Email Partha Rakshit"><Mail size={17} /></a></div></div>
      </div>
      <div className="footer-right">
        <div className="footer-lucky-graphic" aria-hidden="true"><div className="lucky-cube"><span>P</span></div><div className="lucky-text-row"><svg viewBox="0 0 24 24"><path d="M3 20 C6 14 10 9 18 5 M18 5 L12 5 M18 5 L18 11" /></svg><span>Feeling lucky?</span></div></div>
        <nav className="footer-nav-cols" aria-label="Footer navigation"><div className="footer-col"><h2>EXPLORE</h2>{footerLinks.slice(0, 3).map(([label, id]) => <a href={'#' + id} key={id}>{label}</a>)}</div><div className="footer-col footer-col-secondary">{footerLinks.slice(3).map(([label, id]) => <a href={'#' + id} key={id}>{label}</a>)}</div></nav>
        <div className="footer-bottom"><div className="footer-copyright"><p>© {new Date().getFullYear()} Partha Rakshit. All rights reserved.</p><a href="#hero">Back to top<ArrowUp size={15} aria-hidden="true" /></a></div><div className="footer-cta-mini"><p>HAVE A QA OPPORTUNITY?</p><a href="#contact" className="footer-cta">Let's talk quality.<ArrowUpRight size={21} aria-hidden="true" /></a><a className="footer-email" href="mailto:partharakshit5653@gmail.com">partharakshit5653@gmail.com</a><span className="footer-availability">Open to QA Engineer & SDET roles</span></div></div>
      </div>
    </div>
    <div className="footer-watermark" aria-hidden="true"><svg ref={watermark} viewBox="0 0 2300 380" preserveAspectRatio="xMidYMid meet"><text x="0" y="300" fontSize="320">Partha Rakshit</text></svg></div>
  </section></footer>;
}
