import { useState } from 'react';
import { Code, Database, TestTube, Wrench, CheckCircle, Star, Zap, Award, TrendingUp } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-cyan-500 to-sky-500',
      skills: [
        { name: 'Java',       image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',           level: 90, description: 'Advanced proficiency in Java development' },
        { name: 'C',          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',                 level: 80, description: 'Strong foundation in C programming' },
        { name: 'C++',        image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', level: 85, description: 'Object-oriented programming expertise' },
        { name: 'Python',     image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',       level: 75, description: 'Scripting and automation with Python' },
        { name: 'JavaScript', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', level: 80, description: 'Modern JavaScript and ES6+ features' },
      ],
    },
    {
      title: 'Database Technologies',
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'MySQL',   image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',     level: 85, description: 'Database design and optimization' },
        { name: 'MongoDB', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg', level: 80, description: 'NoSQL database and aggregation pipelines' },
      ],
    },
    {
      title: 'Software Testing & QA',
      icon: <TestTube className="w-8 h-8" />,
      gradient: 'from-sky-500 to-indigo-500',
      skills: [
        { name: 'Selenium WebDriver', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg', level: 95, description: 'Advanced test automation framework' },
        { name: 'TestNG',             image: 'https://avatars.githubusercontent.com/u/12528662?s=200&v=4',                                    level: 90, description: 'Testing framework and annotations' },
        { name: 'JUnit',              image: 'https://junit.org/junit5/assets/img/junit5-logo.png',                                            level: 85, description: 'Unit testing framework' },
        { name: 'JMeter',             image: 'https://jmeter.apache.org/images/logo.svg',                                                     level: 80, description: 'Performance and load testing' },
        { name: 'Postman',            image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',                               level: 90, description: 'API testing and documentation' },
        { name: 'Jenkins',            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg',  level: 75, description: 'CI/CD pipeline automation' },
        { name: 'Jira',               image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg',        level: 85, description: 'Project management and bug tracking' },
        { name: 'Manual Testing',     image: 'https://cdn-icons-png.flaticon.com/512/1548/1548780.png',                                        level: 95, description: 'Comprehensive manual testing strategies' },
        { name: 'Automation Testing', image: 'https://cdn-icons-png.flaticon.com/512/1935/1935081.png',                                        level: 90, description: 'End-to-end automation solutions' },
        { name: 'Maven',              image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg',    level: 80, description: 'Build automation and dependency management' },
        { name: 'Katalon Studio',     image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Katalon-logo-vector.svg',                    level: 75, description: 'Codeless test automation platform' },
        { name: 'Taiga',              image: 'https://i.pcmag.com/imagery/reviews/05ytXbuzmj4tffmbZKU1msC-9.fit_scale.size_760x427.v1569475207.png', level: 70, description: 'Agile project management' },
      ],
    },
    {
      title: 'Development & Tools',
      icon: <Wrench className="w-8 h-8" />,
      gradient: 'from-amber-500 to-orange-500',
      skills: [
        { name: 'React.js',         image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',                                                                        level: 85, description: 'Modern React development' },
        { name: 'Next.js',          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',                                                                      level: 80, description: 'Full-stack React framework' },
        { name: 'Git',              image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',                                                                            level: 90, description: 'Version control and collaboration' },
        { name: 'GitHub',           image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',                                                                      level: 85, description: 'Code repository and project management' },
        { name: 'Microsoft Office', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Microsoft_Office_2013-2019_logo_and_wordmark.svg/2560px-Microsoft_Office_2013-2019_logo_and_wordmark.svg.png', level: 90, description: 'Professional documentation and reporting' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 section-primary relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 cyber-grid opacity-35 pointer-events-none" />
      <div className="scan-line" style={{ animationDelay: '6s' }} />

      {/* Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl orb-float" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl orb-float-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h2 className="text-5xl lg:text-6xl font-bold gradient-text-primary heading-font">
              Skills & Expertise
            </h2>
            <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
          </div>
          <div className="section-divider max-w-24 mx-auto mb-6" />
          <p className="text-xl text-slate-400 max-w-3xl mx-auto body-font">
            A comprehensive toolkit of technologies and methodologies I use to deliver exceptional software quality
          </p>
        </div>

        <div className="grid gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-enhanced p-8 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-6 mb-8">
                <div className={`p-4 bg-gradient-to-br ${category.gradient} rounded-2xl shadow-lg animate-pulse-glow`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white subheading-font">{category.title}</h3>
                  <div className="section-divider max-w-16 mt-2" />
                </div>
                <TrendingUp className="w-8 h-8 text-amber-400" />
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative card-enhanced p-6 cursor-pointer transform hover:scale-105 transition-all duration-300"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Level badge */}
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className={`flex items-center gap-1 px-2 py-1 bg-gradient-to-r ${category.gradient} rounded-full text-white text-xs font-bold shadow-lg`}>
                        <Star className="w-3 h-3 fill-current" />
                        {skill.level}%
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      {/* Icon */}
                      <div className="w-16 h-16 flex items-center justify-center p-2 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 skill-icon border border-cyan-400/10">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-full h-full object-contain group-hover:brightness-110 transition-all"
                        />
                      </div>

                      <div className="text-center w-full">
                        <h4 className="font-bold text-sm text-white group-hover:gradient-text-primary transition-all duration-300 subheading-font">
                          {skill.name}
                        </h4>
                        {/* Progress bar */}
                        <div className="w-full bg-white/5 rounded-full h-2 mt-2 overflow-hidden border border-cyan-400/10">
                          <div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Tooltip */}
                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20">
                        <div className="px-3 py-2 bg-[#0a1830] border border-cyan-400/30 text-white rounded-lg text-sm font-medium shadow-lg whitespace-nowrap">
                          {skill.description}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0a1830]" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="card-enhanced p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-amber-400" />
              <h3 className="text-2xl font-bold text-white subheading-font">Ready to Collaborate?</h3>
            </div>
            <p className="text-slate-400 mb-6 body-font">
              Let's work together to ensure your software meets the highest quality standards
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 text-lg transform hover:scale-105 transition-all duration-300"
            >
              <CheckCircle className="w-5 h-5" />
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
