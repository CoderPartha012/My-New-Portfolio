import { useState } from 'react';
import { MapPin, Calendar, ExternalLink, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Quality Analyst Executive',
    company: 'Legistify Services PVT Ltd',
    companyUrl: 'https://www.linkedin.com/company/legistify/',
    companyInitial: 'L',
    companyLogo: 'https://i.postimg.cc/mk9f00CG/images.png',
    location: 'Gurgaon, Haryana',
    period: 'Sept 2024 – Present',
    duration: 'Current',
    isCurrent: true,
    bullets: [
      'Developed and executed comprehensive test plans and scripts to ensure software quality and reliability.',
      'Performed smoke testing to validate critical functionalities and tracked major bugs end-to-end.',
      'Used New Relic to analyze transaction traces, error analytics, and custom dashboards to identify bottlenecks.',
      'Monitored database performance via MongoDB Atlas and AWS, focusing on CPU utilization metrics.',
      'Leveraged Taiga for agile team collaboration and project management workflows.',
    ],
    tags: ['Taiga', 'New Relic', 'MongoDB Atlas', 'AWS', 'Test Automation', 'Smoke Testing'],
    accent: {
      gradient: 'from-cyan-400 to-emerald-400',
      glow: 'rgba(0,212,255,0.12)',
      border: 'rgba(0,212,255,0.25)',
      stripe: 'bg-gradient-to-b from-cyan-400 to-emerald-400',
      tag: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',
      initial: 'from-cyan-500 to-sky-600',
      status: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/25',
      statusDot: 'bg-emerald-400',
    },
  },
  {
    title: 'Quality Analyst Intern (Automation Testing)',
    company: 'Wesoftek Solutions',
    companyUrl: 'https://wesoftek.com/',
    companyInitial: 'W',
    companyLogo: 'https://i.postimg.cc/cLhyy7gg/1683614811477.jpg',
    location: 'Gurgaon, Haryana',
    period: 'Dec 2023 – May 2024',
    duration: '6 Months',
    isCurrent: false,
    bullets: [
      'Designed test plans and executed functional, UI, UAT, compatibility, and exploratory testing for web and desktop apps on the Laravel platform.',
      'Performed web API testing using Postman and wrote automation scripts with Selenium WebDriver + TestNG.',
      'Conducted security testing with Firebug and Temper Data Tools; load/stress testing via JMeter.',
      'Executed regression, Alpha, and Beta testing; developed and ran manual tests for Android and iOS apps.',
      'Managed the full bug lifecycle using Mantis Bug Tracker and validated backend data flow with SQL queries.',
    ],
    tags: ['Selenium', 'TestNG', 'JMeter', 'Postman', 'Laravel', 'Mantis', 'SQL'],
    accent: {
      gradient: 'from-sky-400 to-indigo-400',
      glow: 'rgba(56,189,248,0.10)',
      border: 'rgba(56,189,248,0.22)',
      stripe: 'bg-gradient-to-b from-sky-400 to-indigo-400',
      tag: 'bg-sky-400/10 text-sky-300 border-sky-400/20',
      initial: 'from-sky-500 to-indigo-600',
      status: 'text-slate-400 bg-white/5 border-white/10',
      statusDot: 'bg-slate-500',
    },
  },
];

type Experience = typeof experiences[0] & { companyLogo?: string };

const ExpCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div
      className="animate-fade-in-up group relative"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{ background: exp.accent.glow }}
      />

      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: 'rgba(5,18,45,0.88)',
          border: `1px solid ${exp.accent.border}`,
        }}
      >
        {/* Left stripe */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 ${exp.accent.stripe} rounded-l-2xl`} />

        {/* ── Main content ── */}
        <div className="pl-7 pr-6 pt-6 pb-0">
          <div className="flex flex-col md:flex-row md:items-start gap-5">

            {/* Company logo badge */}
            <div className="flex-shrink-0">
              <div
                className={`w-14 h-14 rounded-xl overflow-hidden shadow-lg border`}
                style={{ borderColor: exp.accent.border }}
              >
                {exp.companyLogo ? (
                  <img
                    src={exp.companyLogo}
                    alt={exp.company}
                    loading="lazy"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${exp.accent.initial} flex items-center justify-center text-white text-2xl font-black select-none`}>
                    {exp.companyInitial}
                  </div>
                )}
              </div>
            </div>

            {/* Header info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <h3 className="text-xl font-bold text-white subheading-font leading-snug">
                  {exp.title}
                </h3>

                {/* Status badge */}
                <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${exp.accent.status} flex-shrink-0`}>
                  <span
                    className={`w-2 h-2 rounded-full ${exp.accent.statusDot} ${exp.isCurrent ? 'animate-pulse' : ''}`}
                  />
                  {exp.isCurrent ? 'Currently Here' : exp.duration}
                </span>
              </div>

              {/* Company link + meta */}
              <div className="flex flex-wrap gap-4 mb-4">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors subheading-font"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {exp.company}
                </a>
                <span className="flex items-center gap-1.5 text-sm text-slate-500 body-font">
                  <MapPin className="w-3.5 h-3.5 text-slate-600" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-slate-500 body-font">
                  <Calendar className="w-3.5 h-3.5 text-slate-600" />
                  {exp.period}
                </span>
              </div>

              {/* Tag strip (always visible) */}
              <div className="flex flex-wrap gap-1.5 pb-5">
                {exp.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-2.5 py-1 rounded-full border ${exp.accent.tag} body-font`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Expand / collapse toggle ── */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-slate-500 hover:text-slate-300 transition-colors border-t body-font"
          style={{ borderColor: exp.accent.border }}
        >
          {expanded ? (
            <><ChevronUp className="w-4 h-4" /> Hide Details</>
          ) : (
            <><ChevronDown className="w-4 h-4" /> Show Responsibilities</>
          )}
        </button>

        {/* ── Expandable bullet section ── */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: expanded ? '600px' : '0px' }}
        >
          <div className="pl-7 pr-6 py-5 border-t" style={{ borderColor: exp.accent.border }}>
            {/* Decorative company letter in background */}
            <div
              className="absolute right-6 top-1/2 -translate-y-1/2 text-[10rem] font-black leading-none select-none pointer-events-none opacity-[0.025]"
              style={{ background: `linear-gradient(135deg, white, transparent)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              {exp.companyInitial}
            </div>

            <ul className="space-y-3 relative z-10">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 group/bullet">
                  {/* Custom marker */}
                  <span
                    className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.accent.stripe} opacity-80 group-hover/bullet:scale-125 transition-transform`}
                    style={{ background: `linear-gradient(135deg, ${exp.isCurrent ? '#00d4ff' : '#38bdf8'}, ${exp.isCurrent ? '#10b981' : '#6366f1'})` }}
                  />
                  <p className="text-slate-300 text-sm leading-relaxed body-font group-hover/bullet:text-white transition-colors">
                    {bullet}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => (
  <section id="experience" className="py-14 section-secondary relative overflow-hidden">
    <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
    <div className="scan-line" style={{ animationDelay: '2s' }} />
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl orb-float" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-sky-500/8 rounded-full blur-3xl orb-float-delayed" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center mb-10 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-5 py-2 mb-6">
          <Briefcase className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-400 font-medium tracking-widest uppercase body-font">Work History</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold gradient-text-primary heading-font mb-4">
          Experience
        </h2>
        <div className="section-divider max-w-24 mx-auto mb-6" />
        <p className="text-lg text-slate-400 max-w-2xl mx-auto body-font">
          Click <span className="text-cyan-400 font-semibold">"Show Responsibilities"</span> to expand each role
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <ExpCard key={exp.company + exp.title} exp={exp} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
