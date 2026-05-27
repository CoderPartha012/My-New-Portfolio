import { ExternalLink, ShieldCheck, Building2, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

const CERT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4';

const certifications = [
  { id:'01', title:'Software Testing', issuer:'SkillStone', date:'Jan 2023', initial:'SS',
    url:'https://drive.google.com/file/d/1Gl6iGZjmrE9egjeqdtHnVuHoZH9J5SPE/view?usp=sharing' },
  { id:'02', title:'Master Java Programming – Complete Beginner to Advanced', issuer:'GeeksforGeeks', date:'May 2023', initial:'GG',
    url:'https://media.geeksforgeeks.org/courses/certificates/acea10fcfb67e78a301faf3cf7b75278.pdf' },
  { id:'03', title:'Web and Mobile Testing with Selenium', issuer:'Coursera', date:'Mar 2023', initial:'CO',
    url:'https://www.coursera.org/account/accomplishments/certificate/GXBVT8VXVC4E' },
  { id:'04', title:'API Testing using Postman', issuer:'Postman', date:'Aug 2024', initial:'PM',
    url:'https://badges.parchment.com/public/assertions/RwuGsHy4R3SVYyiy5I7wxQ' },
  { id:'05', title:'Introduction to Programming Using Python', issuer:'HackerRank', date:'Sep 2022', initial:'HR',
    url:'https://www.hackerrank.com/certificates/2463d87a894c' },
];

const CertCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group liquid-glass rounded-[1.25rem] overflow-hidden flex flex-col
               hover:-translate-y-1 transition-transform duration-300"
  >
    <div className="flex flex-col flex-1 p-6 gap-4">

      {/* Top: initial badge + cert number */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="liquid-glass rounded-[0.75rem] w-11 h-11 flex items-center justify-center
                          text-xs font-body font-bold text-white flex-shrink-0">
            {cert.initial}
          </div>
          <div>
            <p className="text-xs font-body font-medium text-white leading-tight">{cert.issuer}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <ShieldCheck className="w-3 h-3 text-white/40" />
              <span className="text-[10px] font-body text-white/40">Verified</span>
            </div>
          </div>
        </div>
        <span className="text-2xl font-heading italic text-white/10 select-none">{cert.id}</span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-body font-medium text-white leading-snug flex-1">
        {cert.title}
      </h3>

      {/* Meta */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/40 text-xs font-body">
        <span className="flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5" />
          <span className="text-white/60">{cert.issuer}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />{cert.date}
        </span>
      </div>

      {/* CTA */}
      <a
        href={cert.url} target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-body
                   font-medium text-white/70 hover:text-black hover:bg-white
                   liquid-glass transition-all duration-200"
      >
        <ExternalLink className="w-3.5 h-3.5" />View Certificate
      </a>
    </div>
  </motion.div>
);

const Certifications = () => (
  <section id="certifications" className="relative py-24 bg-black overflow-hidden">
    <FadingVideo src={CERT_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />
    <div className="absolute inset-0 bg-black/60 z-[1]" />

    <div className="container mx-auto px-8 md:px-16 relative z-10">

      {/* ── Section header ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-sm font-body text-white/80 mb-4 tracking-wide">// Credentials</p>
        <h2 className="font-heading italic text-white leading-[0.9] tracking-[-3px]"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
          Earned &amp;<br />verified
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => <CertCard key={cert.id} cert={cert} index={i} />)}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-16"
      >
        <div className="liquid-glass rounded-[1.25rem] p-8 max-w-xl mx-auto">
          <p className="text-sm font-body text-white/60 mb-2">// Always Learning</p>
          <h3 className="font-heading italic text-white text-3xl tracking-[-1px] leading-none mb-3">
            Continuously growing
          </h3>
          <p className="text-sm font-body font-light text-white/60 mb-6">
            Investing in new skills to stay at the cutting edge of software quality.
          </p>
          <a href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full
                       text-sm font-body font-semibold hover:bg-white/90 transition-colors">
            Let's Work Together
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Certifications;
