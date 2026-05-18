import { useState } from 'react';
import { Terminal, Server, ShieldCheck, Hammer, Zap } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Terminal,
    accent: '#06b6d4',
    skills: [
      { name: 'Java',       image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',              level: 90 },
      { name: 'C',          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',                    level: 80 },
      { name: 'C++',        image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',    level: 85 },
      { name: 'Python',     image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',          level: 75 },
      { name: 'JavaScript', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',  level: 80 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Server,
    accent: '#10b981',
    skills: [
      { name: 'MySQL',   image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',     level: 85 },
      { name: 'MongoDB', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg', level: 80 },
    ],
  },
  {
    id: 'testing',
    title: 'Testing & QA',
    icon: ShieldCheck,
    accent: '#8b5cf6',
    skills: [
      { name: 'Selenium',          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg',   level: 95 },
      { name: 'TestNG',            image: 'https://avatars.githubusercontent.com/u/12528662?s=200&v=4',                                        level: 90 },
      { name: 'JUnit',             image: 'https://junit.org/junit5/assets/img/junit5-logo.png',                                               level: 85 },
      { name: 'JMeter',            image: 'https://jmeter.apache.org/images/logo.svg',                                                        level: 80 },
      { name: 'Postman',           image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',                                  level: 90 },
      { name: 'Jenkins',           image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg',     level: 75 },
      { name: 'Jira',              image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg',           level: 85 },
      { name: 'Manual Testing',    image: 'https://cdn-icons-png.flaticon.com/512/1548/1548780.png',                                           level: 95 },
      { name: 'Automation',        image: 'https://cdn-icons-png.flaticon.com/512/1935/1935081.png',                                           level: 90 },
      { name: 'Maven',             image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg',       level: 80 },
      { name: 'Katalon Studio',    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Katalon-logo-vector.svg',                       level: 75 },
      { name: 'Taiga',             image: 'https://i.pcmag.com/imagery/reviews/05ytXbuzmj4tffmbZKU1msC-9.fit_scale.size_760x427.v1569475207.png', level: 70 },
    ],
  },
  {
    id: 'tools',
    title: 'Dev & Tools',
    icon: Hammer,
    accent: '#f59e0b',
    skills: [
      { name: 'React.js',  image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',   level: 85 },
      { name: 'Next.js',   image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', level: 80 },
      { name: 'Git',       image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',       level: 90 },
      { name: 'GitHub',    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', level: 85 },
      { name: 'MS Office', image: 'https://img.icons8.com/color/96/microsoft-office-2019.png', level: 90 },
    ],
  },
];

const levelLabel = (n: number) => n >= 90 ? 'Expert' : n >= 80 ? 'Advanced' : n >= 70 ? 'Proficient' : 'Familiar';

const Skills = () => {
  const [activeId, setActiveId] = useState('languages');

  const active = skillCategories.find((c) => c.id === activeId)!;

  return (
    <section id="skills" className="py-14 section-primary relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-35 pointer-events-none" />
      <div className="scan-line" style={{ animationDelay: '6s' }} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl orb-float" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-violet-500/6 rounded-full blur-3xl orb-float-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-5 py-2 mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium tracking-widest uppercase body-font">Tech Stack</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text-primary heading-font mb-4">
            Skills & Expertise
          </h2>
          <div className="section-divider max-w-24 mx-auto mb-6" />
          <p className="text-lg text-slate-400 max-w-2xl mx-auto body-font">
            A comprehensive toolkit of technologies and methodologies I use to deliver exceptional software quality
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveId(cat.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 subheading-font"
                style={{
                  background: isActive ? cat.accent : 'rgba(255,255,255,0.04)',
                  color: isActive ? '#050d1a' : cat.accent,
                  border: `1px solid ${isActive ? cat.accent : cat.accent + '40'}`,
                  boxShadow: isActive ? `0 0 18px ${cat.accent}50` : 'none',
                }}
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Skills panel */}
        <div
          key={activeId}
          className="rounded-2xl p-6 md:p-8 animate-fade-in-up"
          style={{
            background: 'rgba(5,18,45,0.85)',
            border: `1px solid ${active.accent}25`,
            backdropFilter: 'blur(12px)',
            boxShadow: `0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px ${active.accent}15`,
          }}
        >
          {/* Panel header */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${active.accent}20`, border: `1px solid ${active.accent}40` }}
            >
              <active.icon className="w-5 h-5" style={{ color: active.accent }} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white subheading-font">{active.title}</h3>
              <p className="text-xs body-font" style={{ color: active.accent }}>{active.skills.length} skills</p>
            </div>
          </div>

          {/* Skill cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {active.skills.map((skill, i) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-3 p-4 rounded-xl cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  animationDelay: `${i * 0.05}s`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = `${active.accent}12`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${active.accent}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${active.accent}20`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-md p-2 group-hover:shadow-lg transition-all duration-300">
                  <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
                </div>

                {/* Name */}
                <p className="text-xs font-bold text-white text-center subheading-font leading-tight">{skill.name}</p>

                {/* Level pill */}
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full body-font"
                  style={{ background: `${active.accent}20`, color: active.accent, border: `1px solid ${active.accent}30` }}
                >
                  {levelLabel(skill.level)}
                </span>

                {/* Progress bar */}
                <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%`, background: active.accent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
