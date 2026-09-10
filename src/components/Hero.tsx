import { ArrowDown, ArrowUpRight, Check, FileText, GitBranch, ShieldCheck } from 'lucide-react';

const RESUME_URL = 'https://drive.google.com/file/d/1K-J8HZ9LW4Y8AGUIs48KwsGbtfuJaHvZ/view?usp=sharing';
const workflow = [
  ['01', 'Understand the product', 'Requirements, user journeys & risk'],
  ['02', 'Test beyond the happy path', 'Functional, API & integration testing'],
  ['03', 'Automate what matters', 'Repeatable regression coverage'],
  ['04', 'Build release confidence', 'Clear defects & actionable reporting'],
];

export default function Hero() {
  return (
    <section id="hero" className="qa-theme qa-hero" aria-labelledby="hero-title">
      <div className="qa-container">
        <div className="qa-hero-grid">
          <div>
            <p className="qa-availability"><span /> Open to QA Engineer & SDET opportunities</p>
            <p className="qa-intro">Hi, I'm Partha Rakshit.</p>
            <h1 id="hero-title">QA Engineer.<br /><span>Quality at every step.</span></h1>
            <p className="qa-hero-description">I turn complex workflows into reliable user experiences through thoughtful manual testing, test automation, and API validation.</p>
            <div className="qa-specialties" aria-label="Testing focus"><span>Manual testing</span><span>Test automation</span><span>API testing</span></div>
            <div className="qa-actions">
              <a className="qa-button qa-button-primary" href="#projects">Explore my work <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a className="qa-button qa-button-secondary" href={RESUME_URL} target="_blank" rel="noopener noreferrer">View resume <FileText size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <aside className="qa-workflow" aria-labelledby="workflow-title">
            <div className="qa-panel-top"><span><GitBranch size={15} aria-hidden="true" /> quality / workflow</span><span className="qa-panel-tag">MY APPROACH</span></div>
            <div className="qa-workflow-heading"><ShieldCheck size={30} aria-hidden="true" /><div><h2 id="workflow-title">Confidence before release.</h2><p>From the first requirement to the final check.</p></div></div>
            <ol className="qa-workflow-list">{workflow.map(([number, title, description]) => <li key={number}><span className="qa-step-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><Check size={17} aria-hidden="true" /></li>)}</ol>
            <div className="qa-workflow-footer"><span className="qa-code">mindset</span><span>Question. Validate. Improve.</span></div>
          </aside>
        </div>
        <div className="qa-toolbelt"><span className="qa-eyebrow">MY TESTING TOOLKIT</span><div>{['Selenium', 'Playwright', 'Java', 'TestNG', 'Postman', 'Jira'].map(tool => <span key={tool}>{tool}</span>)}</div><a href="#about">Meet the tester <ArrowDown size={16} aria-hidden="true" /></a></div>
      </div>
    </section>
  );
}
