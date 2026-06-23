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

/* ── Premium cert card ──────────────────────────────────────────────────── */
const CertCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.55, delay: index * 0.09, ease: 'easeOut' }}
    className="group relative liquid-glass rounded-[1.5rem] overflow-hidden
               transition-all duration-300 hover:-translate-y-2"
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow =
        '0 24px 64px rgba(0,0,0,0.55), 0 0 36px rgba(0,212,255,0.14)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = '';
    }}
  >
    {/* Gradient top accent line */}
    <div
      className="absolute top-0 inset-x-0 h-[1.5px] pointer-events-none"
      style={{ background: 'linear-gradient(90deg, #00d4ff 0%, #10b981 100%)' }}
    />

    {/* Large watermark number */}
    <span
      className="absolute -bottom-3 right-5 font-heading italic leading-none select-none pointer-events-none"
      style={{ fontSize: '6.5rem', color: 'rgba(255,255,255,0.04)' }}
    >
      {cert.id}
    </span>

    <div className="relative p-7 flex flex-col gap-5 h-full">

      {/* ── Row 1: issuer badge + date pill ── */}
      <div className="flex items-start justify-between gap-3">

        {/* Badge with gradient ring */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative flex-shrink-0">
            <div
              className="absolute -inset-[1.5px] rounded-[0.9rem] opacity-55 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #10b981)' }}
            />
            <div className="relative liquid-glass rounded-[0.75rem] w-12 h-12 z-10
                            flex items-center justify-center text-sm font-body font-bold text-white">
              {cert.initial}
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-body font-semibold text-white leading-tight truncate">
              {cert.issuer}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <ShieldCheck className="w-3 h-3 flex-shrink-0" style={{ color: '#00d4ff' }} />
              <span
                className="text-[10px] font-body font-medium tracking-widest uppercase"
                style={{ color: '#00d4ff' }}
              >
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* Date pill */}
        <div className="liquid-glass rounded-full px-3 py-1.5 flex items-center gap-1.5 flex-shrink-0">
          <Calendar className="w-3 h-3 text-white/50" />
          <span className="text-[10px] font-body text-white/60 whitespace-nowrap">{cert.date}</span>
        </div>
      </div>

      {/* ── Title ── */}
      <h3 className="font-heading italic text-white text-[1.2rem] leading-snug tracking-[-0.5px] flex-1">
        {cert.title}
      </h3>

      {/* Divider */}
      <div
        className="h-px"
        style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.09) 0%, transparent 100%)' }}
      />

      {/* ── CTA ── */}
      <a
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between"
      >
        <span className="text-xs font-body font-medium text-white/50
                         group-hover:text-white/80 transition-colors duration-200">
          View Certificate
        </span>
        <div className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center
                        group-hover:bg-white transition-all duration-300">
          <ExternalLink className="w-3.5 h-3.5 text-white/50 group-hover:text-black
                                   transition-colors duration-300" />
        </div>
      </a>
    </div>
  </motion.div>
);

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
      <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-3 mb-12">
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

      {/* ── Card grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} index={i} />
        ))}
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
