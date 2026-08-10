import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

const ABOUT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4';

const IMAGES = [
  'https://i.postimg.cc/LXmHk0Md/my-personal.png',
  'https://i.postimg.cc/SxWRW9zL/Whats-App-Image-2026-05-09-at-01-48-18.jpg',
];

const JOURNEY = [
  `My journey into quality assurance started in December 2023 when I joined Wesoftek Solutions as a QA Intern 🚀 That's where I got my hands dirty for the first time with real testing — writing test cases, finding bugs, learning how software actually breaks in ways you never expect. Those six months taught me the fundamentals and made me realize that QA isn't just about clicking buttons 🖱️ It's about thinking like a user who's trying to get something done and figuring out everything that could go wrong.`,
  `After my internship, I joined Legistify, a Legal SaaS platform, as a Quality Analyst Executive in September 2024 💼 This is where everything changed. I was given full ownership of two production modules — Contract Management and Notice Management. There was no senior QA guiding me. I had to figure out what quality should look like, build the processes myself, and take responsibility for every release 🔥`,
  `Over almost two years at Legistify, I went from writing test cases to building automation suites 🤖 monitoring production APIs 📊 tracking infrastructure health on AWS ☁️ testing AI features across multiple LLM models 🧠 and leading CRM integration testing for platforms like HubSpot, Zoho, Salesforce, and Slack 🔗 I wasn't just finding bugs anymore. I was owning quality as a system.`,
  `Today, I'm looking for my next challenge 🎯 A role where I can bring this end-to-end quality mindset to a larger product, a bigger team, and more complex problems.`,
];

const EXPERTISE = [
  {
    title: 'Manual Testing',
    desc: 'Thorough functional, regression, integration, and E2E testing across web and mobile platforms. Authored 550+ test cases covering UI flows, edge cases, negative scenarios, and AI feature testing.',
  },
  {
    title: 'Test Automation',
    desc: 'Hands-on automation using Java, Selenium WebDriver, Playwright, and TestNG. Built and maintained automation suites that reduced regression effort and improved release confidence.',
  },
  {
    title: 'API Testing',
    desc: 'Validated API contracts, request/response structures, status codes, and error handling using Postman. Tested complex two-way data sync flows across CRM integrations.',
  },
  {
    title: 'Database Testing',
    desc: 'Data validation and integrity checks on MySQL and MongoDB. Verified that what users enter, what APIs send, and what the database stores are all consistent.',
  },
  {
    title: 'Performance Monitoring',
    desc: 'Tracked API bottlenecks using New Relic (P90/P95 latency, error rates, throughput). Monitored code quality through SonarQube and infrastructure health on AWS (Redis/ElastiCache, OpenSearch).',
  },
  {
    title: 'AI Prompt Testing',
    desc: 'Designed and executed prompt testing across GPT-4, LLaMA 3, Claude Sonnet, and Gemini. Tracked response quality, accuracy, and hallucination metrics across models.',
  },
  {
    title: 'Integration Testing',
    desc: 'Led end-to-end CRM integration testing for HubSpot, Zoho, Salesforce, and Slack, validating API contracts and data synchronization workflows.',
  },
  {
    title: 'Reporting and Communication',
    desc: 'Delivered weekly performance reports, code quality reports, database health reports, defect reports, and automation reports to stakeholders consistently.',
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
            <motion.div {...fadeUp(0.2)} className="liquid-glass rounded-[1.25rem] p-8 space-y-4">
              <p className="text-sm font-body text-white/60 mb-1 tracking-wide">// My Journey</p>
              {JOURNEY.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-white/90 font-body font-light">
                  {para}
                </p>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Expertise ── */}
        <motion.div {...fadeUp(0.3)} className="mt-16">
          <p className="text-sm font-body text-white/60 mb-6 tracking-wide">// Expertise</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {EXPERTISE.map((e, i) => (
              <motion.div
                key={e.title}
                {...fadeUp(0.35 + i * 0.05)}
                className="liquid-glass rounded-[1.25rem] p-6 cursor-default"
              >
                <h4 className="font-heading italic text-white text-xl tracking-[-0.5px] leading-none mb-2">
                  {e.title}
                </h4>
                <p className="text-sm leading-relaxed text-white/70 font-body font-light">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
