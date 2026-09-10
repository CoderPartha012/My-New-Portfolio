import SkillIcon from './SkillIcon';
import { useState } from 'react';
import { Bug, Code2, Database, GitBranch, Layers, Workflow, ArrowUpRight } from 'lucide-react';
import QAReveal from './QAReveal';

const categories = [
  { title: 'Test design & delivery', label: 'QUALITY ASSURANCE', group: 'testing', icon: Bug, tone: 'mint', description: 'Turn requirements into clear test scenarios and actionable defects.', tools: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'Integration Testing', 'Jira', 'Taiga'] },
  { title: 'Automation & frameworks', label: 'REPEATABLE CONFIDENCE', group: 'testing', icon: Workflow, tone: 'cyan', description: 'Build repeatable checks for critical flows and regression coverage.', tools: ['Selenium', 'Playwright', 'TestNG', 'JUnit', 'Mockito', 'Katalon Studio'] },
  { title: 'API & data validation', label: 'BEYOND THE INTERFACE', group: 'testing', icon: Database, tone: 'violet', description: 'Validate service behavior, performance, and the data behind the UI.', tools: ['Postman', 'REST APIs', 'JMeter', 'MySQL', 'MongoDB'] },
  { title: 'Programming', label: 'ENGINEERING FOUNDATIONS', group: 'engineering', icon: Code2, tone: 'cyan', description: 'Programming foundations for test scripts, debugging, and automation.', tools: ['Java', 'Python', 'JavaScript', 'C', 'C++'] },
  { title: 'Backend & infrastructure', label: 'SYSTEM UNDERSTANDING', group: 'engineering', icon: Layers, tone: 'violet', description: 'Understand application layers and the environments under test.', tools: ['Spring Boot', 'Spring MVC', 'Hibernate', 'JPA', 'JDBC', 'Maven', 'Docker', 'AWS'] },
  { title: 'Delivery & collaboration', label: 'CONNECTED WORKFLOWS', group: 'delivery', icon: GitBranch, tone: 'mint', description: 'Version control, build workflows, and clear team documentation.', tools: ['Git', 'GitHub', 'Jenkins', 'MS Office'] },
];
const filters = [{ id: 'all', label: 'All expertise' }, { id: 'testing', label: 'Testing & QA' }, { id: 'engineering', label: 'Engineering' }, { id: 'delivery', label: 'Delivery & tools' }];

export default function Skills() {
  const [filter, setFilter] = useState('all');
  const visible = categories.filter(category => filter === 'all' || category.group === filter);
  return (
    <section id="skills" className="qa-theme qa-skills" aria-labelledby="skills-title">
      <QAReveal className="qa-container">
        <div className="qa-section-heading qa-heading-row"><div><p className="qa-eyebrow">02 / SKILLS & EXPERTISE</p><h2 id="skills-title">The toolkit behind<br /><span className="qa-gradient-text">reliable software.</span></h2></div><p className="qa-section-summary">From exploratory testing to automated checks, the tools I use to investigate, validate, and improve software quality.</p></div>
        <div className="qa-skill-filters" role="group" aria-label="Filter skill categories">{filters.map(item => <button key={item.id} type="button" aria-pressed={filter === item.id} aria-controls="qa-skill-results" onClick={() => setFilter(item.id)}>{item.label}</button>)}</div>
        <p className="sr-only" role="status">Showing {visible.length} skill categories for {filters.find(item => item.id === filter)?.label}.</p>
        <div id="qa-skill-results" className="qa-skill-grid">{visible.map(({ title, label, icon: Icon, tone, description, tools }, index) => <article key={`${filter}-${title}`} className={`qa-skill-card qa-tone-${tone}`} style={{ animationDelay: `${index * 65}ms` }}><div className="qa-skill-card-top"><span className="qa-category-icon"><Icon size={22} aria-hidden="true" /></span><span className="qa-card-index">{String(categories.findIndex(category => category.title === title) + 1).padStart(2, '0')}</span></div><p className="qa-card-label">{label}</p><h3>{title}</h3><p className="qa-card-description">{description}</p><ul className="qa-skill-chips" aria-label={`${title} skills`}>{tools.map(tool => <li key={tool}><SkillIcon name={tool} /><span>{tool}</span></li>)}</ul></article>)}</div>
        <div className="qa-skills-bottom"><span><span className="qa-status-dot" /> Tools serve the test. Curiosity drives it.</span><a className="qa-text-link" href="#projects">Explore my projects <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </QAReveal>
    </section>
  );
}
