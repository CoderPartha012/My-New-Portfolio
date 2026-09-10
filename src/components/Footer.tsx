import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';

const footerLinks = [
  ['About me', 'about'], ['Skills', 'skills'], ['Education', 'education'],
  ['Experience', 'experience'], ['Projects', 'projects'], ['Certifications', 'certifications'],
];

export default function Footer() {
  return (
    <footer className="qa-theme qa-footer">
      <div className="qa-container">
        <div className="qa-footer-main">
          <div className="qa-footer-identity">
            <a className="qa-brand" href="#hero" aria-label="Partha Rakshit, QA Engineer — back to top"><span className="qa-brand-icon"><ShieldCheck size={23} aria-hidden="true" /></span><span><strong>Partha Rakshit<span className="qa-brand-dot">.</span></strong><small>QA ENGINEER / SOFTWARE TESTING</small></span></a>
            <p>Thoughtful testing.<br />Software people can rely on.</p>
            <div className="qa-footer-socials"><a href="https://github.com/CoderPartha012" target="_blank" rel="noopener noreferrer" aria-label="Partha Rakshit on GitHub"><Github size={19} aria-hidden="true" /></a><a href="https://www.linkedin.com/in/partharakshit" target="_blank" rel="noopener noreferrer" aria-label="Partha Rakshit on LinkedIn"><Linkedin size={19} aria-hidden="true" /></a><a href="mailto:partharakshit5653@gmail.com" aria-label="Email Partha Rakshit"><Mail size={19} aria-hidden="true" /></a></div>
          </div>
          <nav className="qa-footer-nav" aria-label="Footer navigation"><p className="qa-eyebrow">EXPLORE</p><div>{footerLinks.map(([label, id]) => <a href={'#' + id} key={id}>{label}</a>)}</div></nav>
          <div className="qa-footer-connect"><p className="qa-eyebrow">HAVE A QA OPPORTUNITY?</p><a href="#contact" className="qa-footer-cta">Let's talk quality.<ArrowUpRight size={22} aria-hidden="true" /></a><a className="qa-footer-email" href="mailto:partharakshit5653@gmail.com">partharakshit5653@gmail.com</a><span><span className="qa-status-dot" />Open to QA Engineer & SDET roles</span></div>
        </div>
        <div className="qa-footer-bottom"><p>© {new Date().getFullYear()} Partha Rakshit. All rights reserved.</p><a href="#hero">Back to top<ArrowUp size={16} aria-hidden="true" /></a></div>
      </div>
    </footer>
  );
}
