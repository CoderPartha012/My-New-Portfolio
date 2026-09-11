import { MapPin, Calendar, ExternalLink, ArrowUpRight } from 'lucide-react';
import QAReveal from './QAReveal';

const experiences = [
  {
    title: 'Quality Analyst Executive',
    company: 'Legistify Services PVT Ltd',
    companyUrl: 'https://www.linkedin.com/company/legistify/',
    companyLogo: '/images/legistify.png',
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
    title: 'Quality Assurance Intern',
    company: 'Wesoftek Solutions',
    companyUrl: 'https://wesoftek.com/',
    companyLogo: '/images/wesoftek.jpg',
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

const chapters = [
  { label: 'Learning the craft', summary: 'Test planning, defect lifecycle, and the first automation scripts.', tone: 'cyan' },
  { label: 'Owning product quality', summary: 'End-to-end QA ownership, integrations, and release confidence.', tone: 'mint' },
];

export default function Experience() {
  return (
    <section id="experience" className="qa-theme qa-work" aria-labelledby="work-title">
      <QAReveal className="qa-container">
        <div className="qa-section-heading qa-heading-row">
          <div><p className="qa-eyebrow">04 / WORK HISTORY</p><h2 id="work-title">My journey in QA.<br /><span className="qa-gradient-text">From learning to ownership.</span></h2></div>
          <p className="qa-section-summary">Two chapters in my corporate QA journey, connecting hands-on testing foundations with responsibility for production quality.</p>
        </div>
        <ol className="qa-career-roadmap">
          {[...experiences].reverse().map((exp, index) => {
            const chapter = chapters[index];
            return (
              <li key={exp.company} className={'qa-career-stop qa-tone-' + chapter.tone}>
                <div className="qa-career-milestone">
                  <span className="qa-career-node" aria-hidden="true" />
                  <p className="qa-eyebrow">CHAPTER 0{index + 1}</p>
                  <h3>{chapter.label}</h3>
                  <p className="qa-career-period"><Calendar size={15} aria-hidden="true" />{exp.period}</p>
                  <p className="qa-career-summary">{chapter.summary}</p>
                </div>
                <article className="qa-career-card">
                  <div className="qa-role-body">
                    <div className="qa-role-heading"><img src={exp.companyLogo} alt="" width={48} height={48} loading="lazy" /><div><h4>{exp.title}</h4><a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">{exp.company}<ExternalLink size={14} aria-hidden="true" /></a></div></div>
                    <p className="qa-career-location"><MapPin size={14} aria-hidden="true" />{exp.location}</p>
                    <ul className="qa-role-bullets">{exp.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
                    <div className="qa-role-tools"><p className="qa-eyebrow">TOOLS & TECHNOLOGIES</p><div>{exp.tags.map(tag => <span className="qa-experience-chip" key={tag.name}><span><img src={tag.image} alt="" loading="lazy" width={18} height={18} /></span>{tag.name}</span>)}</div></div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
        <div className="qa-career-next"><span className="qa-career-next-dot" aria-hidden="true" /><div><p className="qa-eyebrow">THE NEXT CHAPTER</p><p>Bringing a quality-first mindset to my next QA role.</p></div><a href="#contact">Let's connect<ArrowUpRight size={18} aria-hidden="true" /></a></div>
      </QAReveal>
    </section>
  );
}
