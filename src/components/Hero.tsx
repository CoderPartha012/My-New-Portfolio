import { useState, useEffect } from 'react';
import { ArrowDown, FileText, Code, Mail, Github, Linkedin, MapPin } from 'lucide-react';

const ROLES = ['Quality Analystc Executive', 'Software Tester', 'Test Automation Engineer', 'Problem Solver'];

const stats = [
  { value: '2+',    label: 'Years Exp.' },
  { value: '7+',    label: 'Projects' },
  { value: '1000+', label: 'Tests Written' },
  { value: '3+',    label: 'Frameworks' },
];

const Hero = () => {
  const [roleIdx, setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping]     = useState(true);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), 1800);
      return () => clearTimeout(t);
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      }
      setRoleIdx((p) => (p + 1) % ROLES.length);
      setTyping(true);
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen pb-6 overflow-hidden section-gradient"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none cyber-grid opacity-40" />
      <div className="scan-line" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full -top-40 -right-40 w-96 h-96 bg-cyan-500/10 blur-3xl orb-float" />
        <div className="absolute rounded-full -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 blur-3xl orb-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-sky-500/4 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 py-16 mx-auto">
        <div className="flex flex-col items-center max-w-6xl gap-12 mx-auto lg:flex-row lg:gap-16">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full animate-fade-in-up"
              style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
              <span className="text-sm tracking-widest uppercase text-cyan-300 body-font">Available for Work</span>
            </div>

            {/* Name */}
            <h1
              className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl heading-font animate-fade-in-up"
              style={{ animationDelay: '0.15s' }}
            >
              <span className="text-white">Hi, I'm</span>{' '}
              <span className="relative inline-block gradient-text-primary">
                Partha Rakshit
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full opacity-60" />
              </span>
            </h1>

            {/* Typewriter role */}
            <div
              className="flex items-center justify-center gap-2 mb-6 lg:justify-start animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <span className="text-lg text-slate-500 body-font">›</span>
              <span className="text-xl md:text-2xl font-semibold text-cyan-400 subheading-font min-w-[280px] text-left">
                {displayed}
                <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-0.5 align-middle" style={{ animation: 'pulse 1s ease-in-out infinite' }} />
              </span>
            </div>

            {/* Description */}
            <p
              className="max-w-xl mx-auto mb-10 text-base leading-relaxed md:text-lg text-slate-400 lg:mx-0 body-font animate-fade-in-up"
              style={{ animationDelay: '0.45s' }}
            >
              Passionate about ensuring software quality and reliability through innovative testing
              methodologies and automation frameworks.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap justify-center gap-4 mb-10 lg:justify-start animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 rounded-xl hover:scale-105 subheading-font"
                style={{
                  background: 'linear-gradient(135deg,#0284c7,#00d4ff)',
                  color: '#050d1a',
                  boxShadow: '0 4px 20px rgba(0,212,255,0.3)',
                }}
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 rounded-xl hover:scale-105 subheading-font"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(0,212,255,0.25)',
                  color: '#7db3cc',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.5)';
                  (e.currentTarget as HTMLElement).style.color = '#00d4ff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.25)';
                  (e.currentTarget as HTMLElement).style.color = '#7db3cc';
                }}
              >
                <Code className="w-4 h-4" />
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1pSxUujwep6NO93flyU4FHG_vVke0efKl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 rounded-xl hover:scale-105 subheading-font"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#94a3b8',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)';
                  (e.currentTarget as HTMLElement).style.color = '#e2e8f0';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLElement).style.color = '#94a3b8';
                }}
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center justify-center gap-4 lg:justify-start animate-fade-in-up"
              style={{ animationDelay: '0.75s' }}
            >
              {[
                { href: 'mailto:partharakshit5653@gmail.com', icon: Mail,     label: 'Email',    color: '#ef4444' },
                { href: 'https://www.linkedin.com/in/partharakshit', icon: Linkedin, label: 'LinkedIn', color: '#3b82f6' },
                { href: 'https://github.com/CoderPartha012',         icon: Github,   label: 'GitHub',   color: '#94a3b8' },
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-xl hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = `${color}20`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${color}50`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Terminal profile card ── */}
          <div
            className="w-full lg:w-[400px] flex-shrink-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                background: 'rgba(5,13,26,0.90)',
                border: '1px solid rgba(0,212,255,0.15)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,255,0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Terminal title bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-slate-500 body-font">profile.json</span>
              </div>

              {/* JSON body */}
              <div className="p-5 font-mono text-sm leading-7">
                <p className="text-slate-600">{'{'}</p>
                <div className="ml-4 space-y-1">
                  <p><span className="text-cyan-400">"name"</span><span className="text-slate-400">: </span><span className="text-emerald-400">"Partha Rakshit"</span><span className="text-slate-600">,</span></p>
                  <p><span className="text-cyan-400">"role"</span><span className="text-slate-400">: </span><span className="text-amber-400">"Quality Analyst Executive"</span><span className="text-slate-600">,</span></p>
                  <p><span className="text-cyan-400">"company"</span><span className="text-slate-400">: </span><span className="text-emerald-400">"Legistify"</span><span className="text-slate-600">,</span></p>
                  <p><span className="text-cyan-400">"location"</span><span className="text-slate-400">: </span><span className="text-emerald-400">"Gurgaon, India"</span><span className="text-slate-600">,</span></p>
                  <p><span className="text-cyan-400">"focus"</span><span className="text-slate-400">: [</span></p>
                  <div className="ml-4">
                    <p><span className="text-violet-400">"Test Automation"</span><span className="text-slate-600">,</span></p>
                    <p><span className="text-violet-400">"API Testing"</span><span className="text-slate-600">,</span></p>
                    <p><span className="text-violet-400">"CI / CD"</span></p>
                  </div>
                  <p><span className="text-slate-400">]</span><span className="text-slate-600">,</span></p>
                  <p>
                    <span className="text-cyan-400">"available"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">true</span>
                  </p>
                </div>
                <p className="text-slate-600">{'}'}</p>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

              {/* Stats row */}
              <div className="grid grid-cols-4 divide-x divide-white/5">
                {stats.map((s) => (
                  <div key={s.label} className="py-4 flex flex-col items-center gap-0.5">
                    <span className="text-base font-bold gradient-text-primary heading-font">{s.value}</span>
                    <span className="text-[10px] text-slate-500 body-font text-center leading-tight">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Footer bar */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ background: 'rgba(0,212,255,0.05)', borderTop: '1px solid rgba(0,212,255,0.10)' }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs text-slate-400 body-font">Gurgaon, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                  <span className="text-xs font-semibold text-emerald-400 body-font">Open to Work</span>
                </div>
              </div>
            </div>

            {/* Floating info chips below card */}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <div
          className="p-2.5 rounded-full"
          style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}
        >
          <ArrowDown className="w-5 h-5 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
