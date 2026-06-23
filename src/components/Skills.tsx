import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Server, ShieldCheck, Hammer, Layers } from 'lucide-react';
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
      { name: 'Katalon Studio', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Katalon-logo-vector.svg',                      level: 75 },
      { name: 'Taiga',          image: 'https://i.pcmag.com/imagery/reviews/05ytXbuzmj4tffmbZKU1msC-9.fit_scale.size_760x427.v1569475207.png', level: 70 },
    ],
  },
  {
    id: 'backend', title: 'Backend', icon: Layers,
    skills: [
      { name: 'Spring Boot', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg',                                                         level: 80 },
      { name: 'Spring MVC',  image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original-wordmark.svg',                                                level: 75 },
      { name: 'Hibernate',   image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/hibernate/hibernate-original.svg',                                                   level: 75 },
      { name: 'JPA',         image: 'https://www.openhab.org/logos/jpa.svg',                                                                                                              level: 75 },
      { name: 'REST APIs',   image: 'https://cdn.prod.website-files.com/62d9b9c78f111f03f778e150/68624ec9dc394e09ab806d0b_rest%20api%20image.png',                                        level: 80 },
      { name: 'JDBC',        image: 'https://www.openhab.org/logos/jdbc.svg',                                                                                                             level: 75 },
      { name: 'Maven',       image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/maven/maven-original.svg',                                                           level: 80 },
      { name: 'Mockito',     image: 'https://avatars.githubusercontent.com/u/4023816?s=200&v=4',                                                                                          level: 75 },
      { name: 'Docker',      image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',                                                         level: 70 },
      { name: 'AWS',         image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',                          level: 65 },
    ],
  },
  {
    id: 'tools', title: 'Dev & Tools', icon: Hammer,
    skills: [
      { name: 'Git',       image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',       level: 90 },
      { name: 'GitHub',    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', level: 85 },
      { name: 'MS Office', image: 'https://img.icons8.com/color/96/microsoft-office-2019.png',                                  level: 90 },
    ],
  },
];

/* ── Level helpers ──────────────────────────────────────────────────────── */
const levelLabel = (n: number) =>
  n >= 90 ? 'Expert' : n >= 80 ? 'Advanced' : n >= 70 ? 'Proficient' : 'Familiar';

const levelColor = (n: number) =>
  n >= 90 ? '#00d4ff' : n >= 80 ? '#10b981' : n >= 70 ? '#f59e0b' : '#a78bfa';

const levelGradient = (n: number) =>
  n >= 90 ? 'linear-gradient(90deg,#00d4ff,#0ea5e9)'
  : n >= 80 ? 'linear-gradient(90deg,#10b981,#059669)'
  : n >= 70 ? 'linear-gradient(90deg,#f59e0b,#d97706)'
  : 'linear-gradient(90deg,#a78bfa,#8b5cf6)';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, amount: 0.1 as const },
  transition:  { duration: 0.6, delay, ease: 'easeOut' },
});

const LEGEND = [
  { label: 'Expert',    color: '#00d4ff' },
  { label: 'Advanced',  color: '#10b981' },
  { label: 'Proficient',color: '#f59e0b' },
  { label: 'Familiar',  color: '#a78bfa' },
];

/* ── Skill card (horizontal) ────────────────────────────────────────────── */
interface Skill { name: string; image: string; level: number; }

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.03, ease: 'easeOut' }}
    className="group liquid-glass rounded-[0.875rem] p-4 flex items-center gap-4
               hover:-translate-y-0.5 transition-transform duration-200 cursor-default"
    onMouseEnter={e => {
      const glow = levelColor(skill.level);
      (e.currentTarget as HTMLDivElement).style.boxShadow =
        `0 10px 36px rgba(0,0,0,0.45), 0 0 22px ${glow}26`;
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = '';
    }}
  >
    {/* Icon */}
    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
      <img
        src={skill.image} alt={skill.name} loading="lazy" width={36} height={36}
        className="w-9 h-9 object-contain"
      />
    </div>

    {/* Info */}
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-body font-medium text-white truncate pr-2">{skill.name}</p>
        <span
          className="text-[10px] font-body font-semibold flex-shrink-0 tracking-widest uppercase"
          style={{ color: levelColor(skill.level) }}
        >
          {levelLabel(skill.level)}
        </span>
      </div>
      {/* Animated gradient progress bar */}
      <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: levelGradient(skill.level) }}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay: index * 0.035, ease: 'easeOut' }}
        />
      </div>
    </div>

    {/* Percentage */}
    <span
      className="text-xs font-body font-semibold flex-shrink-0 tabular-nums"
      style={{ color: levelColor(skill.level), opacity: 0.75 }}
    >
      {skill.level}%
    </span>
  </motion.div>
);

/* ── Section ────────────────────────────────────────────────────────────── */
const Skills = () => {
  const [activeId, setActiveId] = useState('languages');
  const active      = skillCategories.find(c => c.id === activeId)!;
  const totalSkills = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-black">
      <FadingVideo src={SKILLS_VIDEO} className="absolute inset-0 z-0 object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="container relative z-10 px-8 mx-auto md:px-16">

        {/* ── Section header ── */}
        <motion.div {...fadeUp()} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <p className="text-sm font-body text-white/80 tracking-wide">// Skills &amp; Expertise</p>
            <span className="liquid-glass rounded-full px-3 py-1 text-xs font-body font-medium text-white/60">
              {totalSkills} skills
            </span>
            <span className="liquid-glass rounded-full px-3 py-1 text-xs font-body font-medium text-white/60">
              {skillCategories.length} categories
            </span>
          </div>
          <h2
            className="font-heading italic text-white leading-[0.9] tracking-[-3px]"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            Tools of<br />the craft
          </h2>
        </motion.div>

        {/* ── Mobile tab bar (hidden on lg+) ── */}
        <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-2 mb-7 lg:hidden">
          {skillCategories.map(cat => {
            const Icon = cat.icon;
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-medium
                            transition-all duration-200 cursor-pointer
                            ${isActive ? 'bg-white text-black' : 'liquid-glass text-white/70 hover:text-white'}`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.title}
              </button>
            );
          })}
        </motion.div>

        {/* ── Main layout: sidebar + panel ── */}
        <motion.div {...fadeUp(0.15)} className="flex gap-5 items-start">

          {/* ── Desktop sidebar (lg+) ── */}
          <aside className="hidden lg:flex flex-col gap-1 w-60 flex-shrink-0 liquid-glass rounded-[1.5rem] p-3">
            {/* Sidebar header */}
            <div className="px-3 pt-2 pb-3 mb-1">
              <p className="text-xs font-body font-semibold text-white/30 tracking-widest uppercase">
                Categories
              </p>
            </div>

            {skillCategories.map(cat => {
              const Icon  = cat.icon;
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`relative w-full flex items-center gap-3 px-4 py-3.5 rounded-[0.875rem] text-left
                              transition-all duration-200 cursor-pointer group/item
                              ${isActive ? 'bg-white/[0.07]' : 'hover:bg-white/[0.04]'}`}
                >
                  {/* Active left accent bar */}
                  {isActive && (
                    <div
                      className="absolute left-0 inset-y-2.5 w-[3px] rounded-r-full"
                      style={{ background: 'linear-gradient(to bottom, #00d4ff, #10b981)' }}
                    />
                  )}

                  {/* Category icon */}
                  <div
                    className="w-9 h-9 rounded-[0.625rem] flex items-center justify-center flex-shrink-0
                               transition-all duration-200"
                    style={isActive ? {
                      background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(16,185,129,0.18))',
                    } : { background: 'rgba(255,255,255,0.06)' }}
                  >
                    <Icon
                      className="w-4 h-4 transition-colors duration-200"
                      style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.45)' }}
                    />
                  </div>

                  {/* Label */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="text-sm font-body font-medium leading-tight transition-colors duration-200 truncate"
                      style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.55)' }}
                    >
                      {cat.title}
                    </p>
                    <p className="text-[10px] font-body text-white/25 mt-0.5">
                      {cat.skills.length} skills
                    </p>
                  </div>

                  {/* Count bubble */}
                  <span
                    className="text-[10px] font-body font-semibold flex-shrink-0 tabular-nums transition-colors duration-200"
                    style={{ color: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)' }}
                  >
                    {String(cat.skills.length).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </aside>

          {/* ── Skills panel ── */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="liquid-glass rounded-[1.5rem] overflow-hidden"
              >
                {/* Panel header */}
                <div
                  className="px-6 md:px-8 pt-6 pb-5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-[0.75rem] flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(16,185,129,0.18))' }}
                      >
                        <active.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading italic text-white text-2xl tracking-[-0.5px] leading-none">
                          {active.title}
                        </h3>
                        <p className="text-xs font-body text-white/40 mt-0.5">
                          {active.skills.length} skills in this category
                        </p>
                      </div>
                    </div>

                    {/* Level legend */}
                    <div className="hidden sm:flex items-center gap-4">
                      {LEGEND.map(l => (
                        <div key={l.label} className="flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: l.color }}
                          />
                          <span className="text-[10px] font-body text-white/40">{l.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skill cards grid */}
                <div className="p-5 md:p-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.skills.map((skill, i) => (
                    <SkillCard key={`${activeId}-${skill.name}`} skill={skill} index={i} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
