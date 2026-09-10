import QAReveal from './QAReveal';
import { Bug, Code2, Database, Network, ArrowUpRight, MapPin } from 'lucide-react';

const expertise = [
  { icon: Bug, title: 'Explore & challenge', description: 'Functional, regression, and end-to-end testing with attention to edge cases and real user journeys.' },
  { icon: Code2, title: 'Automate & repeat', description: 'Regression suites with Selenium, Playwright, Java, and TestNG to make repeatable checks dependable.' },
  { icon: Network, title: 'Connect & validate', description: 'API contracts in Postman and CRM data flows across HubSpot, Zoho, Salesforce, and Slack.' },
  { icon: Database, title: 'Look beneath the UI', description: 'MySQL and MongoDB data validation, API performance monitoring, and AI response quality testing.' },
];

export default function About() {
  return (
    <section id="about" className="qa-theme qa-about" aria-labelledby="about-title">
      <QAReveal className="qa-container">
        <div className="qa-section-heading"><p className="qa-eyebrow">01 / ABOUT ME</p><h2 id="about-title">A curious mind.<br className="qa-mobile-break" /> A quality-first approach.</h2></div>
        <div className="qa-about-grid">
          <figure className="qa-portrait">
            <img src="https://i.postimg.cc/LXmHk0Md/my-personal.png" alt="Partha Rakshit" width={320} height={360} loading="lazy" />
            <figcaption><strong>Partha Rakshit</strong><span>Quality Analyst Executive</span><span className="qa-location"><MapPin size={14} aria-hidden="true" /> Gurgaon, India</span></figcaption>
          </figure>
          <div className="qa-about-content">
            <p className="qa-about-lead">I don't just check if software works.<br />I ask where it could fail—and why.</p>
            <p>My QA journey began at Wesoftek Solutions in December 2023. In September 2024, I joined Legistify, a Legal SaaS platform, taking ownership of quality for its Contract Management and Notice Management modules.</p>
            <p>That experience shaped how I test: understand the business, follow the data, challenge assumptions, and make every defect clear enough to act on. My work spans manual testing, automation, CRM integrations, and AI features.</p>
            <div className="qa-expertise-grid">{expertise.map(({ icon: Icon, title, description }) => <div className="qa-expertise" key={title}><Icon size={20} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></div>)}</div>
            <a href="#experience" className="qa-text-link">See my QA experience <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </QAReveal>
    </section>
  );
}
