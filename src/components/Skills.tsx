import { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Server, ShieldCheck, Hammer } from 'lucide-react';
import FadingVideo from './FadingVideo';

const SKILLS_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4';

const skillCategories = [
  {
    id: 'languages', title: 'Languages', icon: Terminal,
    skills: [
      { name: 'Java',       image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',             level: 90 },
      { name: 'C',          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',                   level: 80 },
      { name: 'C++',        image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',   level: 85 },
      { name: 'Python',     image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',         level: 75 },
      { name: 'JavaScript', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', level: 80 },
    ],
  },
  {
    id: 'databases', title: 'Databases', icon: Server,
    skills: [
      { name: 'MySQL',   image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',     level: 85 },
      { name: 'MongoDB', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg', level: 80 },
    ],
  },
  {
    id: 'testing', title: 'Testing & QA', icon: ShieldCheck,
    skills: [
      { name: 'Selenium',       image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg',   level: 95 },
      { name: 'TestNG',         image: 'https://avatars.githubusercontent.com/u/12528662?s=200&v=4',                                       level: 90 },
      { name: 'JUnit',          image: 'https://junit.org/junit5/assets/img/junit5-logo.png',                                              level: 85 },
      { name: 'JMeter',         image: 'https://jmeter.apache.org/images/logo.svg',                                                       level: 80 },
      { name: 'Postman',        image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',                                 level: 90 },
      { name: 'Jenkins',        image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg',    level: 75 },
      { name: 'Jira',           image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg',          level: 85 },
      { name: 'Manual Testing', image: 'https://cdn-icons-png.flaticon.com/512/1548/1548780.png',                                          level: 95 },
      { name: 'Automation',     image: 'https://cdn-icons-png.flaticon.com/512/1935/1935081.png',                                          level: 90 },
      { name: 'Maven',          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg',      level: 80 },
      { name: 'Katalon Studio', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Katalon-logo-vector.svg',                      level: 75 },
      { name: 'Taiga',          image: 'https://i.pcmag.com/imagery/reviews/05ytXbuzmj4tffmbZKU1msC-9.fit_scale.size_760x427.v1569475207.png', level: 70 },
    ],
  },
  {
    id: 'tools', title: 'Dev & Tools', icon: Hammer,
    skills: [
      { name: 'React.js',  image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',   level: 85 },
      { name: 'Next.js',   image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', level: 80 },
      { name: 'Git',       image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',       level: 90 },
      { name: 'GitHub',    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', level: 85 },
      { name: 'MS Office', image: 'https://img.icons8.com/color/96/microsoft-office-2019.png',                                  level: 90 },
    ],
  },
];

const levelLabel = (n: number) =>
  n >= 90 ? 'Expert' : n >= 80 ? 'Advanced' : n >= 70 ? 'Proficient' : 'Familiar';

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, amount: 0.1 as const },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const Skills = () => {
  const [activeId, setActiveId] = useState('languages');
  const active = skillCategories.find((c) => c.id === activeId)!;

  return (
    <section id="skills" className="relative py-24 bg-black overflow-hidden">
      <FadingVideo src={SKILLS_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="container mx-auto px-8 md:px-16 relative z-10">

        {/* ── Section header ── */}
        <motion.div {...fadeUp()} className="mb-16">
          <p className="text-sm font-body text-white/80 mb-4 tracking-wide">// Skills &amp; Expertise</p>
          <h2 className="font-heading italic text-white leading-[0.9] tracking-[-3px]"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            Tools of<br />the craft
          </h2>
        </motion.div>

        {/* ── Tab bar ── */}
        <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-3 mb-10">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body font-medium
                            transition-all duration-200 cursor-pointer
                            ${isActive
                              ? 'bg-white text-black'
                              : 'liquid-glass text-white/80 hover:text-white'}`}
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </button>
            );
          })}
        </motion.div>

        {/* ── Skills panel ── */}
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="liquid-glass rounded-[1.25rem] p-6 md:p-8"
        >
          {/* Panel header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="liquid-glass rounded-[0.75rem] w-10 h-10 flex items-center justify-center">
              <active.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-heading italic text-white text-2xl tracking-[-0.5px] leading-none">
                {active.title}
              </h3>
              <p className="text-xs font-body text-white/50 mt-0.5">{active.skills.length} skills</p>
            </div>
          </div>

          {/* Skill cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group liquid-glass rounded-xl p-4 flex flex-col items-center gap-3
                           cursor-default hover:-translate-y-1 transition-transform duration-200"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-md p-2">
                  <img src={skill.image} alt={skill.name} loading="lazy"
                    width={48} height={48} className="w-full h-full object-contain" />
                </div>
                {/* Name */}
                <p className="text-xs font-body font-medium text-white text-center leading-tight">
                  {skill.name}
                </p>
                {/* Level pill */}
                <span className="text-[10px] font-body px-2.5 py-0.5 rounded-full
                                 bg-white/10 text-white/70 border border-white/10">
                  {levelLabel(skill.level)}
                </span>
                {/* Progress bar */}
                <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-white/60 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
