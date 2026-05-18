import { Award, Building2, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    id: '01',
    title: 'Software Testing',
    issuer: 'SkillStone',
    date: 'Jan 2023',
    url: 'https://drive.google.com/file/d/1Gl6iGZjmrE9egjeqdtHnVuHoZH9J5SPE/view?usp=sharing',
    accent: '#8b5cf6',
    glow: 'rgba(139,92,246,0.18)',
    border: 'rgba(139,92,246,0.28)',
    initial: 'SS',
    featured: true,
  },
  {
    id: '02',
    title: 'Master Java Programming – Complete Beginner to Advanced',
    issuer: 'GeeksforGeeks',
    date: 'May 2023',
    url: 'https://media.geeksforgeeks.org/courses/certificates/acea10fcfb67e78a301faf3cf7b75278.pdf',
    accent: '#22c55e',
    glow: 'rgba(34,197,94,0.18)',
    border: 'rgba(34,197,94,0.28)',
    initial: 'GG',
    featured: false,
  },
  {
    id: '03',
    title: 'Web and Mobile Testing with Selenium',
    issuer: 'Coursera',
    date: 'Mar 2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/GXBVT8VXVC4E',
    accent: '#3b82f6',
    glow: 'rgba(59,130,246,0.18)',
    border: 'rgba(59,130,246,0.28)',
    initial: 'CO',
    featured: false,
  },
  {
    id: '04',
    title: 'API Testing using Postman',
    issuer: 'Postman',
    date: 'Aug 2024',
    url: 'https://badges.parchment.com/public/assertions/RwuGsHy4R3SVYyiy5I7wxQ',
    accent: '#f97316',
    glow: 'rgba(249,115,22,0.18)',
    border: 'rgba(249,115,22,0.28)',
    initial: 'PM',
    featured: false,
  },
  {
    id: '05',
    title: 'Introduction to Programming Using Python',
    issuer: 'HackerRank',
    date: 'Sep 2022',
    url: 'https://www.hackerrank.com/certificates/2463d87a894c',
    accent: '#10b981',
    glow: 'rgba(16,185,129,0.18)',
    border: 'rgba(16,185,129,0.28)',
    initial: 'HR',
    featured: false,
  },
];

const CertCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => (
  <div
    className="group relative animate-fade-in-up"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Outer glow */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
      style={{ background: cert.glow }}
    />

    <div
      className="relative h-full rounded-2xl overflow-hidden transition-all duration-400 group-hover:-translate-y-2 flex flex-col"
      style={{
        background: 'rgba(5,18,45,0.92)',
        border: `1px solid ${cert.border}`,
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full flex-shrink-0" style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)` }} />

      {/* Corner ribbon */}
      <div
        className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none"
      >
        <div
          className="absolute top-3 right-[-22px] w-28 text-center text-[9px] font-black tracking-widest uppercase rotate-45 py-1"
          style={{ background: cert.accent, color: '#050d1a' }}
        >
          Certified
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* Top: issuer badge + id */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Issuer avatar */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${cert.accent}33, ${cert.accent}11)`,
                border: `1px solid ${cert.accent}55`,
                color: cert.accent,
                boxShadow: `0 0 12px ${cert.accent}30`,
              }}
            >
              {cert.initial}
            </div>
            <div>
              <p className="text-xs font-bold text-white subheading-font leading-tight">{cert.issuer}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3 h-3" style={{ color: cert.accent }} />
                <span className="text-xs body-font" style={{ color: cert.accent }}>Verified</span>
              </div>
            </div>
          </div>

          {/* Cert number */}
          <span
            className="text-2xl font-black opacity-20 select-none"
            style={{ color: cert.accent, fontVariantNumeric: 'tabular-nums' }}
          >
            {cert.id}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-white leading-snug subheading-font flex-1">
          {cert.title}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-500 text-xs">
          <span className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" style={{ color: cert.accent }} />
            <span className="body-font text-slate-300">{cert.issuer}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" style={{ color: cert.accent }} />
            <span className="body-font">{cert.date}</span>
          </span>
        </div>

        {/* CTA */}
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 subheading-font group/btn"
          style={{
            background: `linear-gradient(135deg, ${cert.accent}22, ${cert.accent}11)`,
            border: `1px solid ${cert.accent}40`,
            color: cert.accent,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = cert.accent;
            (e.currentTarget as HTMLElement).style.color = '#050d1a';
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${cert.accent}60`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${cert.accent}22, ${cert.accent}11)`;
            (e.currentTarget as HTMLElement).style.color = cert.accent;
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          <ExternalLink className="w-3.5 h-3.5" />
          View Certificate
        </a>
      </div>
    </div>
  </div>
);

const Certifications = () => (
  <section id="certifications" className="py-14 section-secondary relative overflow-hidden">
    <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
    <div className="scan-line" style={{ animationDelay: '3s' }} />
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-16 w-72 h-72 bg-violet-500/6 rounded-full blur-3xl orb-float" />
      <div className="absolute bottom-16 right-16 w-64 h-64 bg-orange-500/6 rounded-full blur-3xl orb-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-6 relative z-10">

      {/* Header */}
      <div className="text-center mb-10 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/20 rounded-full px-5 py-2 mb-6">
          <Award className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-amber-400 font-medium tracking-widest uppercase body-font">Credentials</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold gradient-text-primary heading-font mb-4">
          Certifications
        </h2>
        <div className="section-divider max-w-24 mx-auto mb-6" />
        <p className="text-lg text-slate-400 max-w-2xl mx-auto body-font">
          Industry-recognized credentials validating my technical expertise
        </p>
      </div>

      {/* Bento grid — first card spans 2 cols on md+ */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <div
            key={cert.id}
            className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
          >
            <CertCard cert={cert} index={i} />
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="card-enhanced p-8 max-w-xl mx-auto">
          <Award className="w-8 h-8 text-amber-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-2 subheading-font">Always Learning</h3>
          <p className="text-slate-400 mb-6 body-font text-sm">
            Continuously investing in new skills to stay at the cutting edge of software quality.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-[#050d1a] rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 subheading-font"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Certifications;
