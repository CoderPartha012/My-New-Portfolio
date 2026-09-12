import QAReveal from './QAReveal';
import { Bug, Code2, Database, Network, ArrowUpRight, MapPin } from 'lucide-react';
import './about.css';

const expertise = [
  { icon: Bug, title: 'Explore & challenge', description: 'Functional, regression, and end-to-end testing with attention to edge cases and real user journeys.' },
  { icon: Code2, title: 'Automate & repeat', description: 'Regression suites with Selenium, Playwright, Java, and TestNG to make repeatable checks dependable.' },
  { icon: Network, title: 'Connect & validate', description: 'API contracts in Postman and CRM data flows across HubSpot, Zoho, Salesforce, and Slack.' },
  { icon: Database, title: 'Look beneath the UI', description: 'MySQL and MongoDB data validation, API performance monitoring, and AI response quality testing.' },
];

export default function About() {
  return (
    <section id="about" className="qa-theme mf-about" aria-labelledby="about-title">
      <QAReveal className="mf-about-container">
        <div className="mf-about-heading">
          <p className="mf-about-eyebrow">01 / ABOUT ME</p>
          <h2 id="about-title">A curious mind.<br /><span>A quality-first approach.</span></h2>
        </div>
        <div className="mf-about-grid">
          <figure className="mf-about-portrait">
            <div className="mf-about-photo"><img src="/images/partha-rakshit.png" alt="Partha Rakshit" width={600} height={800} loading="lazy" decoding="async" /></div>
            <figcaption><div><strong>Partha Rakshit</strong><span>Quality Analyst Executive</span></div><span className="mf-about-location"><MapPin size={14} aria-hidden="true" /> Gurgaon, India</span></figcaption>
          </figure>
          <div className="mf-about-content">
            <p className="mf-about-lead">I don't just check if software works.<br /><span>I ask where it could fail—and why.</span></p>
            <div className="mf-about-story">
              <p>My QA journey began at Wesoftek Solutions in December 2023. In September 2024, I joined Legistify, a Legal SaaS platform, taking ownership of quality for its Contract Management and Notice Management modules.</p>
              <p>That experience shaped how I test: understand the business, follow the data, challenge assumptions, and make every defect clear enough to act on. My work spans manual testing, automation, CRM integrations, and AI features.</p>
            </div>
            <a href="#experience" className="mf-about-link">See my QA experience <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="mf-about-expertise">{expertise.map(({ icon: Icon, title, description }, index) => <div className="mf-about-specialty" key={title}><div className="mf-about-specialty-top"><Icon size={22} strokeWidth={1.5} aria-hidden="true" /><span aria-hidden="true">0{index + 1}</span></div><h3>{title}</h3><p>{description}</p></div>)}</div>
      </QAReveal>
    </section>
  );
}
