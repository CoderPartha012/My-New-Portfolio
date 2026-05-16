import { GraduationCap, School, MapPin, Calendar, BookOpen, Star } from 'lucide-react';

const CircleProgress = ({ score, gradient }: { score: number; gradient: string }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const gradientId = `grad-${score}`;
  const [color1, color2] = gradient.includes('cyan')
    ? ['#06b6d4', '#0ea5e9']
    : gradient.includes('emerald')
    ? ['#10b981', '#14b8a6']
    : ['#f59e0b', '#eab308'];

  return (
    <svg width="90" height="90" viewBox="0 0 90 90" className="rotate-[-90deg]">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>
      {/* Track */}
      <circle cx="45" cy="45" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="7" />
      {/* Progress */}
      <circle
        cx="45"
        cy="45"
        r={radius}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1.2s ease-out', filter: `drop-shadow(0 0 6px ${color1})` }}
      />
    </svg>
  );
};

const Education = () => {
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
      gradient: 'from-cyan-500 to-sky-500',
      accentColor: '#06b6d4',
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
      gradient: 'from-emerald-500 to-teal-500',
      accentColor: '#10b981',
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
      gradient: 'from-amber-500 to-yellow-500',
      accentColor: '#f59e0b',
    },
  ];

  return (
    <section id="education" className="relative py-24 overflow-hidden section-primary">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none cyber-grid opacity-20" />
      <div className="scan-line" style={{ animationDelay: '4s' }} />

      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full top-16 left-10 w-80 h-80 bg-cyan-500/6 blur-3xl orb-float" />
        <div className="absolute rounded-full bottom-10 right-10 w-72 h-72 bg-sky-500/6 blur-3xl orb-float-delayed" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-emerald-500/4 blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">

        {/* Section header */}
        <div className="mb-20 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 border rounded-full bg-cyan-500/10 border-cyan-400/20">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium tracking-widest uppercase text-cyan-400 body-font">Academic Record</span>
          </div>
          <h2 className="mb-4 text-5xl font-bold lg:text-6xl gradient-text-primary heading-font">
            Educational Journey
          </h2>
          <div className="mx-auto mb-6 section-divider max-w-24" />
          <p className="max-w-2xl mx-auto text-xl text-slate-400 body-font">
            Chapters of learning that shaped my technical foundation
          </p>
        </div>

        {/* Zigzag timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Center spine */}
          <div className="absolute top-0 bottom-0 hidden w-px -translate-x-1/2 lg:block left-1/2 bg-gradient-to-b from-cyan-500/60 via-emerald-500/60 to-amber-500/60" />

          {education.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative mb-16 lg:mb-20 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Center node */}
                <div className="absolute z-20 flex-col items-center hidden -translate-x-1/2 -translate-y-1/2 lg:flex left-1/2 top-10">
                  <div
                    className="flex items-center justify-center w-12 h-12 text-sm font-bold text-white border-2 rounded-full shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${edu.accentColor}33, ${edu.accentColor}11)`,
                      borderColor: `${edu.accentColor}66`,
                      boxShadow: `0 0 16px ${edu.accentColor}44`,
                    }}
                  >
                    {edu.chapter}
                  </div>
                </div>

                {/* Horizontal connector line */}
                <div
                  className="hidden lg:block absolute top-10 w-[calc(50%-3.5rem)] h-px opacity-40"
                  style={{
                    background: `linear-gradient(${isLeft ? 'to left' : 'to right'}, transparent, ${edu.accentColor})`,
                    [isLeft ? 'right' : 'left']: 'calc(50% + 1.5rem)',
                  }}
                />

                {/* Card */}
                <div className={`lg:w-[calc(50%-4rem)] ${isLeft ? 'lg:mr-auto lg:pr-4' : 'lg:ml-auto lg:pl-4'}`}>
                  <div
                    className="relative p-6 overflow-hidden transition-all duration-500 group card-enhanced lg:p-8 hover:-translate-y-2 hover:shadow-2xl"
                    style={{ '--accent': edu.accentColor } as React.CSSProperties}
                  >
                    {/* Glow border on hover */}
                    <div
                      className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none rounded-xl group-hover:opacity-100"
                      style={{ boxShadow: `inset 0 0 0 1px ${edu.accentColor}44` }}
                    />

                    {/* Top row: icon + chapter tag + score ring */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        {/* Icon */}
                        <div
                          className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${edu.accentColor}22, ${edu.accentColor}11)`,
                            border: `1px solid ${edu.accentColor}33`,
                          }}
                        >
                          {edu.type === 'university' ? (
                            <GraduationCap className="w-6 h-6" style={{ color: edu.accentColor }} />
                          ) : (
                            <School className="w-6 h-6" style={{ color: edu.accentColor }} />
                          )}
                        </div>
                        {/* Chapter badge */}
                        <span
                          className="hidden px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full lg:inline"
                          style={{
                            color: edu.accentColor,
                            background: `${edu.accentColor}18`,
                            border: `1px solid ${edu.accentColor}30`,
                          }}
                        >
                          Chapter {edu.chapter}
                        </span>
                      </div>

                      {/* Score ring */}
                      <div className="relative flex items-center justify-center">
                        <CircleProgress score={edu.score} gradient={edu.gradient} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center rotate-0">
                          <Star className="w-3 h-3 mb-0.5" style={{ color: edu.accentColor }} />
                          <span className="text-xs font-bold leading-none text-white">{edu.score}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Degree & school */}
                    <h3 className="mb-1 text-xl font-bold text-white transition-colors duration-300 subheading-font group-hover:text-cyan-300">
                      {edu.degree}
                    </h3>
                    <p className="mb-1 font-semibold body-font" style={{ color: edu.accentColor }}>
                      {edu.specialization}
                    </p>
                    <p className="mb-5 text-sm text-slate-300 body-font">{edu.school}</p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-5 text-sm text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" style={{ color: edu.accentColor }} />
                        <span className="body-font">{edu.location}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" style={{ color: edu.accentColor }} />
                        <span className="body-font">{edu.period}</span>
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-5">
                      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${edu.gradient} rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out`}
                          style={{ width: `${edu.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
