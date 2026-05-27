import { useState } from 'react';
import { MapPin, Calendar, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

const EXP_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4';

const experiences = [
  {
    title: 'Quality Analyst Executive',
    company: 'Legistify Services PVT Ltd',
    companyUrl: 'https://www.linkedin.com/company/legistify/',
    companyLogo: 'https://i.postimg.cc/mk9f00CG/images.png',
    companyInitial: 'L',
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
  },
  {
    title: 'Quality Analyst Intern (Automation Testing)',
    company: 'Wesoftek Solutions',
    companyUrl: 'https://wesoftek.com/',
    companyLogo: 'https://i.postimg.cc/cLhyy7gg/1683614811477.jpg',
    companyInitial: 'W',
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
  },
];

const ExpCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="liquid-glass rounded-[1.25rem] overflow-hidden"
    >
      {/* Main content */}
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start gap-5">

          {/* Company logo */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-xl overflow-hidden liquid-glass">
              {exp.companyLogo ? (
                <img src={exp.companyLogo} alt={exp.company} loading="lazy"
                  width={56} height={56} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center
                                font-heading italic text-white text-2xl select-none">
                  {exp.companyInitial}
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <h3 className="font-heading italic text-white text-2xl tracking-[-0.5px] leading-tight">
                {exp.title}
              </h3>
              {/* Status badge */}
              <span className="liquid-glass rounded-full px-3 py-1 text-xs font-body flex items-center gap-1.5 text-white/80 flex-shrink-0">
                <span className={`w-1.5 h-1.5 rounded-full bg-white/60 ${exp.isCurrent ? 'animate-pulse' : ''}`} />
                {exp.isCurrent ? 'Currently Here' : exp.duration}
              </span>
            </div>

            {/* Company + meta */}
            <div className="flex flex-wrap gap-4 mb-4">
              <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-body text-white/70 hover:text-white transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
                {exp.company}
              </a>
              <span className="flex items-center gap-1.5 text-sm font-body text-white/50">
                <MapPin className="w-3.5 h-3.5" />{exp.location}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-body text-white/50">
                <Calendar className="w-3.5 h-3.5" />{exp.period}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span key={tag}
                  className="liquid-glass rounded-full px-2.5 py-1 text-[11px] font-body text-white/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-body
                   text-white/40 hover:text-white/70 transition-colors
                   border-t border-white/[0.06]"
      >
        {expanded
          ? <><ChevronUp className="w-4 h-4" />Hide Details</>
          : <><ChevronDown className="w-4 h-4" />Show Responsibilities</>}
      </button>

      {/* Expandable bullets */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: expanded ? '600px' : '0px' }}
      >
        <div className="px-6 md:px-8 py-5 border-t border-white/[0.06]">
          <ul className="space-y-3">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                <p className="text-sm font-body font-light text-white/70 leading-relaxed">
                  {b}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => (
  <section id="experience" className="relative py-24 bg-black overflow-hidden">
    <FadingVideo src={EXP_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />
    <div className="absolute inset-0 bg-black/60 z-[1]" />

    <div className="container mx-auto px-8 md:px-16 relative z-10">

      {/* ── Section header ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-sm font-body text-white/80 mb-4 tracking-wide">// Work History</p>
        <h2 className="font-heading italic text-white leading-[0.9] tracking-[-3px]"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
          Where I've<br />been building
        </h2>
      </motion.div>

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
