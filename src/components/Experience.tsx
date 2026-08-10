import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

const EXP_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4';

const experiences = [
  {
    title: 'Quality Analyst Executive',
    company: 'Legistify Services PVT Ltd',
    companyUrl: 'https://www.linkedin.com/company/legistify/',
    companyLogo: 'https://i.postimg.cc/mk9f00CG/images.png',
    companyInitial: 'L',
    location: 'Gurgaon, Haryana',
    period: 'Sept 2024 – May 2026',
    isCurrent: true,
    bullets: [
      'Owned end to end QA for Contract Management and Notice Management modules of a Legal SaaS platform, covering functional, regression, smoke, API, database, mobile, and automation testing.',
      'Created and maintained 340+ test cases for redesigned UI workflows and automated relevant regression scenarios using Java, Selenium, Playwright, and TestNG.',
      'Performed API testing and database validation using Postman, MySQL, and MongoDB, ensuring API responses, business logic, and underlying data remained consistent.',
      'Conducted AI feature and prompt testing across models including GPT 4, Liama 3, and Sonnet 4, evaluating responses and maintaining structured AI testing reports.',
      'Led integration testing for HubSpot, Zoho, Salesforce, and Slack, validating API contracts, data integrity, and synchronization workflows.',
      'Used New Relic to analyze API performance, error rates, latency, throughput, and transaction traces, identifying bottlenecks and maintaining weekly performance reports.',
      'Used SonarQube, AWS ElastiCache/Redis, and OpenSearch to monitor code quality and application infrastructure health, tracking key metrics through regular QA reports.',
      'Managed defects using Taiga and prepared Automation Reports, Test Execution Reports, and Defect Reports to support release quality.',
    ],
    tags: [
      { name: 'Java',        image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
      { name: 'Selenium',    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg' },
      { name: 'Playwright',  image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/playwright/playwright-original.svg' },
      { name: 'TestNG',      image: 'https://avatars.githubusercontent.com/u/12528662?s=200&v=4' },
      { name: 'Postman',     image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
      { name: 'MySQL',       image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB',     image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
      { name: 'New Relic',   image: 'https://cdn.simpleicons.org/newrelic' },
      { name: 'SonarQube',   image: 'https://cdn.simpleicons.org/sonarqubeserver' },
      { name: 'AWS',         image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Taiga',       image: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/taiga.svg' },
      { name: 'API Testing', image: 'https://img.icons8.com/color/96/api.png' },
      { name: 'AI Testing',  image: 'https://img.icons8.com/color/96/artificial-intelligence.png' },
    ],
  },
  {
    title: 'Quality Analyst Intern (Automation Testing)',
    company: 'Wesoftek Solutions',
    companyUrl: 'https://wesoftek.com/',
    companyLogo: 'https://i.postimg.cc/cLhyy7gg/1683614811477.jpg',
    companyInitial: 'W',
    location: 'Gurgaon, Haryana',
    period: 'Dec 2023 – May 2024',
    isCurrent: false,
    bullets: [
      'Designed test plans and executed functional, UI, UAT, compatibility, and exploratory testing for web and desktop applications built on Laravel.',
      'Performed API testing using Postman and developed automated test scripts using Selenium WebDriver and TestNG.',
      'Conducted load and stress testing using JMeter and performed security testing using Firebug and Temper Data Tools.',
      'Executed regression, Alpha, and Beta testing for web and Android/iOS applications and validated application behavior across different devices and environments.',
      'Managed the complete bug lifecycle using Jira, collaborating with developers and validating backend data using SQL queries.',
    ],
    tags: [
      { name: 'Selenium',       image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg' },
      { name: 'TestNG',         image: 'https://avatars.githubusercontent.com/u/12528662?s=200&v=4' },
      { name: 'Postman',        image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
      { name: 'Jira',           image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg' },
      { name: 'Manual Testing', image: 'https://cdn-icons-png.flaticon.com/512/1548/1548780.png' },
      { name: 'PostgreSQL',     image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
    ],
  },
];

const ExpCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="liquid-glass rounded-[1.25rem] overflow-hidden"
    >
      {/* Main content */}
      <div className="p-6 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start">

          {/* Company logo */}
          <div className="flex-shrink-0">
            <div className="overflow-hidden w-14 h-14 rounded-xl liquid-glass">
              {exp.companyLogo ? (
                <img src={exp.companyLogo} alt={exp.company} loading="lazy"
                  width={56} height={56} className="object-cover w-full h-full" />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-2xl italic text-white select-none font-heading">
                  {exp.companyInitial}
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <h3 className="font-heading italic text-white text-2xl tracking-[-0.5px] leading-tight">
                {exp.title}
              </h3>
            </div>

            {/* Company + meta */}
            <div className="flex flex-wrap gap-4 mb-4">
              <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-body text-white/70 hover:text-white transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
                {exp.company}
              </a>
              <span className="flex items-center gap-1.5 text-sm font-body text-white/50">
                <MapPin className="w-3.5 h-3.5" />{exp.location}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-body text-white/50">
                <Calendar className="w-3.5 h-3.5" />{exp.period}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span key={tag.name}
                  className="liquid-glass rounded-full pl-1.5 pr-2.5 py-1 text-[11px] font-body text-white/70 flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img src={tag.image} alt={tag.name} loading="lazy" width={12} height={12}
                      className="w-3 h-3 object-contain" />
                  </span>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bullets */}
      <div className="px-6 md:px-8 py-5 border-t border-white/[0.06]">
        <ul className="space-y-3">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
              <p className="text-sm font-light leading-relaxed font-body text-white/70">
                {b}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => (
  <section id="experience" className="relative py-24 overflow-hidden bg-black">
    <FadingVideo src={EXP_VIDEO} className="absolute inset-0 z-0 object-cover w-full h-full" />
    <div className="absolute inset-0 bg-black/60 z-[1]" />

    <div className="container relative z-10 px-8 mx-auto md:px-16">

      {/* ── Section header ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mb-4 text-sm tracking-wide font-body text-white/80">// Work History</p>
        <h2 className="font-heading italic text-white leading-[0.9] tracking-[-3px]"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
          Where I've<br />been building
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <ExpCard key={exp.company + exp.title} exp={exp} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
