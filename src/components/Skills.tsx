import { useState } from 'react';
import { motion } from 'motion/react';
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
      { name: 'JPA',         image: 'https://www.openhab.org/logos/jpa.svg',                                          level: 75 },
      { name: 'REST APIs',   image: 'https://cdn.prod.website-files.com/62d9b9c78f111f03f778e150/68624ec9dc394e09ab806d0b_rest%20api%20image.png',                                                                                             level: 80 },
      { name: 'JDBC',        image: 'https://www.openhab.org/logos/jdbc.svg',                                                    level: 75 },
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
    <section id="skills" className="relative py-24 overflow-hidden bg-black">
      <FadingVideo src={SKILLS_VIDEO} className="absolute inset-0 z-0 object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="container relative z-10 px-8 mx-auto md:px-16">

        {/* ── Section header ── */}
        <motion.div {...fadeUp()} className="mb-16">
          <p className="mb-4 text-sm tracking-wide font-body text-white/80">// Skills &amp; Expertise</p>
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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex flex-col items-center gap-3 p-4 transition-transform duration-200 cursor-default group liquid-glass rounded-xl hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex items-center justify-center p-2 bg-white shadow-md w-14 h-14 rounded-xl">
                  <img src={skill.image} alt={skill.name} loading="lazy"
                    width={48} height={48} className="object-contain w-full h-full" />
                </div>
                {/* Name */}
                <p className="text-xs font-medium leading-tight text-center text-white font-body">
                  {skill.name}
                </p>
                {/* Level pill */}
                <span className="text-[10px] font-body px-2.5 py-0.5 rounded-full
                                 bg-white/10 text-white/70 border border-white/10">
                  {levelLabel(skill.level)}
                </span>
                {/* Progress bar */}
                <div className="w-full h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full transition-all duration-700 ease-out rounded-full bg-white/60"
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
