import { GraduationCap, School, MapPin, Calendar, Star } from 'lucide-react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

const EDU_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4';

/* ── SVG circular progress ring ─────────────────────────────────────── */
const CircleProgress = ({ score }: { score: number }) => {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" className="rotate-[-90deg]">
      <circle cx="45" cy="45" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
      <circle cx="45" cy="45" r={r} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="7"
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1.2s ease-out' }} />
    </svg>
  );
};

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

const Education = () => (
  <section id="education" className="relative py-24 bg-black overflow-hidden">
    <FadingVideo src={EDU_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />
    <div className="absolute inset-0 bg-black/60 z-[1]" />

    <div className="container relative z-10 px-8 md:px-16 mx-auto">

      {/* ── Section header ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-sm font-body text-white/80 mb-4 tracking-wide">// Academic Record</p>
        <h2 className="font-heading italic text-white leading-[0.9] tracking-[-3px]"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
          Educational<br />journey
        </h2>
      </motion.div>

      {/* ── Zigzag timeline ── */}
      <div className="relative max-w-5xl mx-auto">

        {/* Center spine */}
        <div className="absolute top-0 bottom-0 hidden w-px -translate-x-1/2 lg:block left-1/2
                        bg-gradient-to-b from-white/30 via-white/15 to-white/5" />

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative mb-10 lg:mb-12"
            >
              {/* Center node */}
              <div className="absolute z-20 flex-col items-center hidden -translate-x-1/2 -translate-y-1/2
                              lg:flex left-1/2 top-10">
                <div className="liquid-glass w-11 h-11 rounded-full flex items-center justify-center
                                text-sm font-body font-semibold text-white">
                  {edu.chapter}
                </div>
              </div>

              {/* Connector line */}
              <div
                className="hidden lg:block absolute top-10 w-[calc(50%-3.5rem)] h-px opacity-20"
                style={{
                  background: `linear-gradient(${isLeft ? 'to left' : 'to right'}, transparent, white)`,
                  [isLeft ? 'right' : 'left']: 'calc(50% + 1.5rem)',
                }}
              />

              {/* Card */}
              <div className={`lg:w-[calc(50%-4rem)] ${isLeft ? 'lg:mr-auto lg:pr-4' : 'lg:ml-auto lg:pl-4'}`}>
                <div className="liquid-glass rounded-[1.25rem] p-6 lg:p-8 group
                                hover:-translate-y-1 transition-transform duration-300">

                  {/* Top row: icon + chapter + score ring */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div className="liquid-glass rounded-[0.75rem] w-11 h-11 flex items-center justify-center">
                        {edu.type === 'university'
                          ? <GraduationCap className="w-5 h-5 text-white" />
                          : <School className="w-5 h-5 text-white" />}
                      </div>
                      {/* Chapter badge */}
                      <span className="hidden lg:inline liquid-glass rounded-full px-3 py-1
                                       text-xs font-body text-white/70">
                        Chapter {edu.chapter}
                      </span>
                    </div>

                    {/* Score ring */}
                    <div className="relative flex items-center justify-center">
                      <CircleProgress score={edu.score} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Star className="w-3 h-3 mb-0.5 text-white/50" />
                        <span className="text-xs font-body font-semibold text-white leading-none">
                          {edu.score}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Degree & school */}
                  <h3 className="font-heading italic text-white text-2xl tracking-[-0.5px] leading-none mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-body text-white/70 mb-1">{edu.specialization}</p>
                  <p className="text-sm font-body text-white/50 mb-5">{edu.school}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-white/50 font-body">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-white/30" />{edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-white/30" />{edu.period}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-5 w-full h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-white/40 origin-left scale-x-0
                                    group-hover:scale-x-100 transition-transform duration-1000 ease-out"
                         style={{ width: `${edu.score}%` }} />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Education;
