import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

const ABOUT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4';

const IMAGES = [
  'https://i.postimg.cc/LXmHk0Md/my-personal.png',
  'https://i.postimg.cc/SxWRW9zL/Whats-App-Image-2026-05-09-at-01-48-18.jpg',
];

const KEY_POINTS = [
  {
    title: 'Expertise',
    desc:  'Test Automation · Full-Stack Testing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    title: 'Tech Stack',
    desc:  'Selenium · TestNG · Java · Postman',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, amount: 0.15 as const },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const About = () => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setImgIdx((p) => (p + 1) % IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Background video */}
      <FadingVideo src={ABOUT_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      <div className="container mx-auto px-8 md:px-16 relative z-10">

        {/* ── Section header ── */}
        <motion.div {...fadeUp()} className="mb-16">
          <p className="text-sm font-body text-white/80 mb-4 tracking-wide">// About Me</p>
          <h2 className="font-heading italic text-white leading-[0.9] tracking-[-3px]"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            The person<br />behind the tests
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Photo carousel ── */}
          <motion.div {...fadeUp(0.1)} className="flex justify-center">
            <div className="relative w-64 md:w-72 lg:w-80 flex-shrink-0">
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-[2rem] blur-2xl opacity-30"
                   style={{ background: 'rgba(255,255,255,0.15)' }} />
              {/* Image container */}
              <div className="relative liquid-glass rounded-[1.75rem] overflow-hidden w-full aspect-[3/4] shadow-2xl">
                {IMAGES.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Partha Rakshit ${i + 1}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    width={320} height={427}
                    className={`absolute inset-0 w-full h-full object-cover object-center
                                transition-all duration-1000
                                ${imgIdx === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                  />
                ))}
              </div>
              {/* Dots */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex gap-2.5">
                {IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    aria-label={`Show image ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      imgIdx === i ? 'bg-white w-7' : 'w-2.5 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Content ── */}
          <div className="space-y-6">
            {/* Bio card */}
            <motion.div {...fadeUp(0.2)} className="liquid-glass rounded-[1.25rem] p-8">
              <p className="text-sm font-body text-white/60 mb-3 tracking-wide">// My Journey</p>
              <p className="text-base leading-relaxed text-white/90 font-body font-light">
                Passionate about automation testing, full-stack quality assurance, and scalable solutions,
                I specialise in building robust test automation frameworks and ensuring software reliability.
                Currently I work as a Quality Analyst at Legistify, contributing to software quality through
                rigorous testing methodologies.
              </p>
            </motion.div>

            {/* Key-point cards */}
            {KEY_POINTS.map((pt, i) => (
              <motion.div
                key={pt.title}
                {...fadeUp(0.3 + i * 0.1)}
                className="liquid-glass rounded-[1.25rem] p-6 flex items-center gap-6 cursor-default"
              >
                {/* Icon box */}
                <div className="liquid-glass rounded-[0.75rem] w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {pt.icon}
                </div>
                <div>
                  <h4 className="font-heading italic text-white text-2xl tracking-[-0.5px] leading-none mb-1">
                    {pt.title}
                  </h4>
                  <p className="text-sm text-white/70 font-body font-light">{pt.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
