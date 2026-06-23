import { GraduationCap, School, MapPin, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

const EDU_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4';

const education = [
  {
    chapter: '01',
    school: 'Lovely Professional University',
    degree: 'Bachelor of Technology (B.Tech)',
    specialization: 'Computer Science and Engineering',
    location: 'Phagwara, Punjab',
    score: 80.80,
    period: '2020 – 2024',
    type: 'university',
  },
  {
    chapter: '02',
    school: 'Jhantipahari High School',
    degree: 'Class 12th',
    specialization: 'Higher Secondary Education',
    location: 'Bankura, West Bengal',
    score: 78.2,
    period: '2019',
    type: 'school',
  },
  {
    chapter: '03',
    school: 'Jhantipahari High School',
    degree: 'Class 10th',
    specialization: 'Secondary Education',
    location: 'Bankura, West Bengal',
    score: 77.42,
    period: '2017',
    type: 'school',
  },
];

/* ── Helpers ────────────────────────────────────────────────────────────── */
const typeAccent = (type: string) => type === 'university' ? '#00d4ff' : '#10b981';
const typeEnd    = (type: string) => type === 'university' ? '#0ea5e9' : '#059669';
const typeBadge  = (type: string) => type === 'university' ? 'University' : 'High School';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, amount: 0.15 as const },
  transition:  { duration: 0.6, delay, ease: 'easeOut' },
});

/* ── Animated score ring (SVG) ──────────────────────────────────────────── */
interface RingProps { score: number; id: string; color: string; endColor: string; }

const ScoreRing = ({ score, id, color, endColor }: RingProps) => {
  const r    = 36;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative inline-flex items-center justify-center flex-shrink-0">
      {/* Rotated SVG so arc starts at 12-o'clock */}
      <svg width="88" height="88" viewBox="0 0 88 88" className="rotate-[-90deg]">
        <defs>
          <linearGradient id={`edu-ring-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle cx="44" cy="44" r={r} fill="none"
          stroke="rgba(255,255,255,0.07)" strokeWidth="5" />
        {/* Animated arc */}
        <motion.circle
          cx="44" cy="44" r={r} fill="none"
          stroke={`url(#edu-ring-${id})`}
          strokeWidth="5" strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ * (1 - score / 100) }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, delay: 0.35, ease: 'easeOut' }}
        />
      </svg>
      {/* Centred label overlay (NOT rotated) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[0.9rem] font-body font-bold text-white leading-none tabular-nums">
          {score}%
        </span>
        <span className="text-[9px] font-body text-white/35 mt-0.5 tracking-widest uppercase">
          Score
        </span>
      </div>
    </div>
  );
};

/* ── Education card ─────────────────────────────────────────────────────── */
type EduItem = typeof education[number];

const EduCard = ({ edu, index, total }: { edu: EduItem; index: number; total: number }) => {
  const color    = typeAccent(edu.type);
  const end      = typeEnd(edu.type);
  const isLeft   = index % 2 === 0;

  return (
    <motion.div
      {...fadeUp(index * 0.13)}
      className="relative mb-10 lg:mb-14"
    >
      {/* ── Timeline node (desktop) ── */}
      <div className="absolute z-20 hidden lg:flex -translate-x-1/2 -translate-y-1/2 left-1/2 top-12">
        <div className="relative">
          <div
            className="absolute -inset-[1.5px] rounded-full opacity-55 pointer-events-none"
            style={{ background: `linear-gradient(135deg, ${color}, ${end})` }}
          />
          <div className="relative liquid-glass w-12 h-12 rounded-full z-10
                          flex items-center justify-center text-sm font-body font-bold text-white">
            {edu.chapter}
          </div>
        </div>
      </div>

      {/* ── Connector line (desktop) ── */}
      <div
        className="hidden lg:block absolute top-12 h-px"
        style={{
          width: 'calc(50% - 4.25rem)',
          opacity: 0.18,
          background: `linear-gradient(${isLeft ? 'to left' : 'to right'}, transparent, ${color})`,
          [isLeft ? 'right' : 'left']: 'calc(50% + 2.25rem)',
        }}
      />

      {/* ── Card ── */}
      <div className={`lg:w-[calc(50%-4.75rem)] ${isLeft ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
        <div
          className="relative liquid-glass rounded-[1.5rem] overflow-hidden
                     hover:-translate-y-1.5 transition-all duration-300 cursor-default"
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              `0 24px 60px rgba(0,0,0,0.5), 0 0 32px ${color}1f`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = '';
          }}
        >
          {/* Gradient top accent bar */}
          <div
            className="absolute top-0 inset-x-0 h-[1.5px] pointer-events-none"
            style={{ background: `linear-gradient(90deg, ${color} 0%, ${end} 100%)` }}
          />

          <div className="p-7 md:p-8">

            {/* ── Row 1: icon + badges · score ring ── */}
            <div className="flex items-start justify-between mb-6 gap-4">
              <div className="flex flex-col gap-2.5">
                {/* Type icon */}
                <div
                  className="w-12 h-12 rounded-[0.875rem] flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${color}30, ${color}14)` }}
                >
                  {edu.type === 'university'
                    ? <GraduationCap className="w-5 h-5 text-white" />
                    : <School        className="w-5 h-5 text-white" />}
                </div>
                {/* Type badge + chapter counter */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="text-[10px] font-body font-semibold tracking-widest uppercase
                               px-2.5 py-1 rounded-full"
                    style={{ color, background: `${color}18`, border: `1px solid ${color}2e` }}
                  >
                    {typeBadge(edu.type)}
                  </span>
                  <span className="liquid-glass rounded-full px-2.5 py-1 text-[10px] font-body text-white/45">
                    {edu.chapter} / {String(total).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Animated score ring */}
              <ScoreRing score={edu.score} id={edu.chapter} color={color} endColor={end} />
            </div>

            {/* ── Degree & institution ── */}
            <h3 className="font-heading italic text-white text-[1.3rem] leading-snug tracking-[-0.5px] mb-1">
              {edu.degree}
            </h3>
            <p className="text-sm font-body text-white/65 mb-1">{edu.specialization}</p>
            <p className="text-sm font-body font-semibold mb-5" style={{ color }}>
              {edu.school}
            </p>

            {/* Divider */}
            <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.07)' }} />

            {/* ── Meta row ── */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-body text-white/50 mb-5">
              <span className="flex items-center gap-1.5">
                <MapPin   className="w-3.5 h-3.5 text-white/30" />{edu.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-white/30" />{edu.period}
              </span>
            </div>

            {/* ── Animated gradient progress bar ── */}
            <div className="w-full h-1.5 rounded-full overflow-hidden"
                 style={{ background: 'rgba(255,255,255,0.07)' }}>
              <motion.div
                className="h-full rounded-full origin-left"
                style={{
                  width: `${edu.score}%`,
                  background: `linear-gradient(90deg, ${color} 0%, ${end} 100%)`,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, delay: index * 0.1 + 0.45, ease: 'easeOut' }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[10px] font-body text-white/25">Academic score</span>
              <span
                className="text-[10px] font-body font-semibold tabular-nums"
                style={{ color, opacity: 0.7 }}
              >
                {edu.score}%
              </span>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Section ────────────────────────────────────────────────────────────── */
const Education = () => (
  <section id="education" className="relative py-24 bg-black overflow-hidden">
    <FadingVideo src={EDU_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />
    <div className="absolute inset-0 bg-black/60 z-[1]" />

    <div className="container relative z-10 px-8 md:px-16 mx-auto">

      {/* ── Section header ── */}
      <motion.div {...fadeUp()} className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <p className="text-sm font-body text-white/80 tracking-wide">// Academic Record</p>
        </div>
        <h2
          className="font-heading italic text-white leading-[0.9] tracking-[-3px]"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
        >
          Educational<br />journey
        </h2>
      </motion.div>

      {/* ── Zigzag timeline ── */}
      <div className="relative max-w-5xl mx-auto">

        {/* Gradient spine (desktop) */}
        <div
          className="absolute top-0 bottom-0 hidden w-[2px] -translate-x-1/2 lg:block left-1/2 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #00d4ff 0%, #10b981 35%, rgba(255,255,255,0.18) 65%, transparent 100%)',
          }}
        />

        {education.map((edu, i) => (
          <EduCard key={edu.chapter} edu={edu} index={i} total={education.length} />
        ))}

      </div>
    </div>
  </section>
);

export default Education;
