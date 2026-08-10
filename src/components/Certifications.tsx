import { ExternalLink, ShieldCheck, Calendar, Award } from 'lucide-react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

const CERT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4';

const certifications = [
  { id: '01', title: 'Software Testing',                                     issuer: 'SkillStone',    date: 'Jan 2023', initial: 'SS',
    url: 'https://drive.google.com/file/d/1Gl6iGZjmrE9egjeqdtHnVuHoZH9J5SPE/view?usp=sharing' },
  { id: '02', title: 'Master Java Programming – Complete Beginner to Advanced', issuer: 'GeeksforGeeks', date: 'May 2023', initial: 'GG',
    url: 'https://media.geeksforgeeks.org/courses/certificates/acea10fcfb67e78a301faf3cf7b75278.pdf' },
  { id: '03', title: 'Web and Mobile Testing with Selenium',                 issuer: 'Coursera',      date: 'Mar 2023', initial: 'CO',
    url: 'https://www.coursera.org/account/accomplishments/certificate/GXBVT8VXVC4E' },
  { id: '04', title: 'API Testing using Postman',                            issuer: 'Postman',       date: 'Aug 2024', initial: 'PM',
    url: 'https://badges.parchment.com/public/assertions/RwuGsHy4R3SVYyiy5I7wxQ' },
  { id: '05', title: 'Introduction to Programming Using Python',             issuer: 'HackerRank',    date: 'Sep 2022', initial: 'HR',
    url: 'https://www.hackerrank.com/certificates/2463d87a894c' },
];

const STATS = [
  { value: '05', label: 'Certificates' },
  { value: '5',  label: 'Platforms'    },
];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, amount: 0.1 as const },
  transition:  { duration: 0.6, delay, ease: 'easeOut' },
});

/* ── Medal-style seal node (sits on the timeline spine) ─────────────────── */
const SealNode = () => (
  <div className="relative w-12 h-12 lg:w-14 lg:h-14">
    <div
      className="absolute inset-0 rounded-full animate-spin-slow"
      style={{ background: 'conic-gradient(from 0deg, #00d4ff, #10b981, #f59e0b, #00d4ff)' }}
    />
    <div className="absolute inset-[3px] rounded-full bg-black" />
    <div className="absolute inset-[6px] rounded-full liquid-glass flex items-center justify-center animate-pulse-glow">
      <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: '#00d4ff' }} />
    </div>
  </div>
);

/* ── Holographic credential card ─────────────────────────────────────────── */
const CertCard = ({ cert }: { cert: typeof certifications[0] }) => (
  <motion.a
    href={cert.url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -4 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
    className="group relative block liquid-glass rounded-[1.25rem] p-6 overflow-hidden"
  >
    {/* Holographic shimmer sweep on hover */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer
                 transition-opacity duration-300 pointer-events-none"
      style={{
        backgroundImage: 'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.14) 50%, transparent 70%)',
        backgroundSize: '250% 100%',
      }}
    />
    {/* Gradient top accent line */}
    <div
      className="absolute top-0 inset-x-0 h-[1.5px] pointer-events-none"
      style={{ background: 'linear-gradient(90deg, #00d4ff 0%, #10b981 50%, #f59e0b 100%)' }}
    />
    {/* Watermark index */}
    <span
      className="absolute -bottom-4 right-4 font-heading italic leading-none select-none pointer-events-none"
      style={{ fontSize: '5.5rem', color: 'rgba(255,255,255,0.035)' }}
    >
      {cert.id}
    </span>

    <div className="relative flex items-start justify-between gap-4 mb-4">
      {/* Issuer avatar */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="relative flex-shrink-0">
          <div
            className="absolute -inset-[1.5px] rounded-full opacity-60"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #10b981)' }}
          />
          <div className="relative liquid-glass rounded-full w-10 h-10 z-10
                          flex items-center justify-center text-xs font-body font-bold text-white">
            {cert.initial}
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-body font-semibold text-white truncate">{cert.issuer}</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Calendar className="w-3 h-3 text-white/40 flex-shrink-0" />
            <span className="text-[10px] font-body text-white/40 whitespace-nowrap">{cert.date}</span>
          </div>
        </div>
      </div>

      {/* Verified pill */}
      <div className="liquid-glass rounded-full px-2.5 py-1 flex items-center gap-1 flex-shrink-0">
        <ShieldCheck className="w-3 h-3" style={{ color: '#10b981' }} />
        <span className="text-[9px] font-body font-semibold tracking-widest uppercase text-white/60">
          Verified
        </span>
      </div>
    </div>

    <h3 className="relative font-heading italic text-white text-[1.1rem] leading-snug tracking-[-0.3px] mb-5">
      {cert.title}
    </h3>

    <div className="relative flex items-center gap-1.5 text-xs font-body font-medium text-white/50
                    group-hover:text-white transition-colors duration-200">
      View Certificate
      <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200
                               group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </div>
  </motion.a>
);

/* ── One entry on the credential timeline ────────────────────────────────── */
const TimelineItem = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: 'easeOut' }}
      className="relative lg:grid lg:grid-cols-2 lg:gap-12"
    >
      {/* Seal node on the spine */}
      <div className="absolute z-10 left-6 top-6 lg:left-1/2 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2">
        <SealNode />
      </div>

      {/* Card — alternates sides on desktop, always right of the spine on mobile */}
      <div className={`pl-16 lg:pl-0 ${isLeft ? 'lg:col-start-1 lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
        <CertCard cert={cert} />
      </div>
    </motion.div>
  );
};

/* ── Section ────────────────────────────────────────────────────────────── */
const Certifications = () => (
  <section id="certifications" className="relative py-24 bg-black overflow-hidden">
    <FadingVideo src={CERT_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />
    <div className="absolute inset-0 bg-black/60 z-[1]" />

    <div className="container mx-auto px-8 md:px-16 relative z-10">

      {/* ── Section header ── */}
      <motion.div {...fadeUp()} className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <p className="text-sm font-body text-white/80 tracking-wide">// Credentials</p>
          <span className="liquid-glass rounded-full px-3 py-1 text-xs font-body font-medium text-white/60">
            {String(certifications.length).padStart(2, '0')} certificates
          </span>
        </div>
        <h2
          className="font-heading italic text-white leading-[0.9] tracking-[-3px]"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
        >
          Earned &amp;<br />verified
        </h2>
      </motion.div>

      {/* ── Stats strip ── */}
      <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-3 mb-16">
        {STATS.map(s => (
          <div
            key={s.label}
            className="liquid-glass rounded-[0.875rem] px-5 py-3 flex items-baseline gap-2"
          >
            <span className="font-heading italic text-white text-2xl tracking-[-1px]">{s.value}</span>
            <span className="text-xs font-body text-white/50">{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* ── Credential timeline ── */}
      <div className="relative">
        {/* Spine — mobile (left aligned) */}
        <div
          className="lg:hidden absolute left-6 top-2 bottom-2 w-px -translate-x-1/2 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.16) 6%, rgba(255,255,255,0.16) 94%, transparent 100%)' }}
        />
        {/* Spine — desktop (centered) */}
        <div
          className="hidden lg:block absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.16) 6%, rgba(255,255,255,0.16) 94%, transparent 100%)' }}
        />

        <div className="flex flex-col gap-14 lg:gap-10">
          {certifications.map((cert, i) => (
            <TimelineItem key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>

      {/* ── Footer CTA banner ── */}
      <motion.div {...fadeUp(0.3)} className="mt-16">
        <div className="relative liquid-glass rounded-[1.5rem] overflow-hidden p-8 md:p-10">

          {/* Subtle gradient wash */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #10b981 100%)' }}
          />
          {/* Glow orb */}
          <div
            className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-white/40" />
                <p className="text-sm font-body text-white/60 tracking-wide">// Always Learning</p>
              </div>
              <h3
                className="font-heading italic text-white leading-[0.9] tracking-[-2px] mb-3"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
              >
                Continuously growing
              </h3>
              <p className="text-sm font-body font-light text-white/60 max-w-md leading-relaxed">
                Investing in new skills to stay at the cutting edge of software quality assurance.
              </p>
            </div>

            <a
              href="#contact"
              className="flex-shrink-0 flex items-center gap-2 bg-white text-black
                         px-7 py-3.5 rounded-full text-sm font-body font-semibold
                         whitespace-nowrap hover:bg-white/90 transition-colors duration-150"
            >
              Let's Work Together
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  </section>
);

export default Certifications;
