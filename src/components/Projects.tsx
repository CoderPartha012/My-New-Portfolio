import { useState } from 'react';
import { Github, ArrowUpRight, Search, FolderGit2 } from 'lucide-react';
import QAReveal from './QAReveal';
import { CircularGallery } from './ui/circular-gallery';

const projects = [
  {
    title: 'TaskMate',
    description: 'A powerful, feature-rich task management system built with React, TypeScript, and modern web technologies. Beautiful intuitive interface for managing tasks, collaborating with team members, and tracking productivity.',
    image: '/images/taskmate.png',
    technologies: ['React', 'Tailwind CSS', 'Zustand', 'SheetJS'],
    github: 'https://github.com/CoderPartha012/TaskMate',
    live: 'https://taskmatebypartha.netlify.app/',
    category: 'web',
    featured: true,
  },
  {
    title: 'Business Management System',
    description: 'A comprehensive business management solution built with Next.js, featuring a modern UI and extensive functionality for managing workforce, payroll, finances, and more.',
    image: '/images/business-management.png',
    technologies: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Recharts'],
    github: 'https://github.com/CoderPartha012/BMS',
    live: 'https://business-management-system-partha.netlify.app/',
    category: 'web',
    featured: true,
  },
  {
    title: 'Bugdesk',
    description: 'A modern, full-featured bug tracking application built with React and TypeScript. Track bugs through a complete 7-stage lifecycle, collaborate with your team, and visualise project health — all in a clean, responsive interface with dark mode support.',
    image: '/images/bugdesk.png',
    technologies: ['React', 'Tailwind CSS', 'Recharts 2', 'Browser localStorage'],
    github: 'https://github.com/CoderPartha012/Bug-Tracking-System',
    live: 'https://bugdesk.netlify.app/',
    category: 'web',
    featured: false,
  },
  {
    title: 'Maharaja Restaurant',
    description: 'A modern, responsive website for an authentic Indian restaurant. Seamless UX for viewing the menu, making reservations, and exploring the gallery.',
    image: '/images/maharaja.png',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    github: 'https://github.com/CoderPartha012/Maharaja',
    live: 'https://maharaja-a-simple-restaurant.netlify.app/',
    category: 'web',
    featured: false,
  },
  {
    title: 'Expenso',
    description: 'A modern expense tracking application. Helps users manage their finances by tracking expenses, setting budgets, and visualizing spending patterns.',
    image: '/images/expenso.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'JsPDF'],
    github: 'https://github.com/CoderPartha012/Expenso',
    live: 'https://expensobypartha.netlify.app/',
    category: 'web',
    featured: false,
  },
  {
    title: 'CaseKaro Automation',
    description: 'Developed an end-to-end automation testing framework for casekaro.com using Java, Playwright, Cucumber, and JUnit following the BDD approach. Automated product search, cart validation, and multi-variant shopping workflows with robust UI validations, thread-safe browser management, screenshot capture on failure, and detailed test reporting using Maven-based execution.',
    image: '/images/casekaro.png',
    technologies: ['Java', 'Playwright', 'Cucumber (BDD)', 'JUnit', 'Maven', 'Git', 'Chromium Browser'],
    github: 'https://github.com/CoderPartha012/casekaro-automation',
    live: 'https://casekaro.com/',
    category: 'testing',
    featured: true,
  },
  {
    title: 'Zynerd Booking Automation',
    description: 'Developed an end-to-end automation testing framework for the Zynerd booking and Razorpay payment workflow using Java, Selenium WebDriver, and TestNG with the Page Object Model (POM) design pattern. Automated booking flow, payment processing, and form validation scenarios with reusable utilities, config-driven test data, explicit wait handling, and Maven-based test execution.',
    image: '/images/zynerd.png',
    technologies: ['Java', 'Selenium WebDriver', 'TestNG', 'Maven', 'Page Object Model (POM)', 'SLF4J Logging'],
    github: 'https://github.com/CoderPartha012/zynerd-booking-automation',
    live: 'https://staging.zynerd.co.in/call-guidance-qa',
    category: 'testing',
    featured: true,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const filtered = [...projects].sort((a, b) => Number(b.category === 'testing') - Number(a.category === 'testing')).filter(project => (filter === 'all' || project.category === filter) && [project.title, project.description, ...project.technologies].join(' ').toLowerCase().includes(search.trim().toLowerCase()));
  return <section id="projects" className="qa-theme qa-projects" aria-labelledby="projects-title"><QAReveal className="qa-container">
    <div className="qa-section-heading qa-heading-row"><div><p className="qa-eyebrow">05 / PROJECTS</p><h2 id="projects-title">Built to learn.<br /><span className="qa-gradient-text">Tested to understand.</span></h2></div><p className="qa-section-summary">Automation frameworks and applications that put my testing and engineering skills into practice.</p></div>
    <div className="qa-project-controls"><div className="qa-skill-filters" role="group" aria-label="Filter projects">{[['all', 'All projects'], ['testing', 'Test automation'], ['web', 'Web applications']].map(([id, label]) => <button type="button" aria-pressed={filter === id} key={id} onClick={() => setFilter(id)}>{label}</button>)}</div><label className="qa-project-search"><Search size={17} aria-hidden="true" /><span className="sr-only">Search projects</span><input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search projects or tools" /></label></div>
    <p className="sr-only" role="status">{filtered.length} projects found.</p>
    <CircularGallery key={filtered.map(project => project.title).join('|')} items={filtered.map(project => ({ common: project.title, binomial: project.category, photo: { url: project.image, text: project.title + ' preview' }, content: (<article key={project.title} className="qa-project-card"><div className="qa-project-image"><img src={project.image} alt={project.title + ' preview'} width={640} height={360} loading="lazy" /><span>{project.category === 'testing' ? 'TEST AUTOMATION' : 'WEB APPLICATION'}</span></div><div className="qa-project-body"><h3>{project.title}</h3><p>{project.description}</p><ul className="qa-skill-chips">{project.technologies.map(tool => <li key={tool}>{tool}</li>)}</ul><div className="qa-project-links"><a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={'View code for ' + project.title}><Github size={17} aria-hidden="true" />View code</a><a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={(project.category === 'testing' ? 'View test target for ' : 'Open demo for ') + project.title}>{project.category === 'testing' ? 'Test target' : 'Live demo'}<ArrowUpRight size={17} aria-hidden="true" /></a></div></div></article>) }))} />
    {filtered.length === 0 && <div className="qa-project-empty"><FolderGit2 size={30} aria-hidden="true" /><h3>No matching projects</h3><p>Try another tool or clear the filters.</p><button className="qa-button qa-button-secondary" onClick={() => { setFilter('all'); setSearch(''); }}>Show all projects</button></div>}
  </QAReveal></section>;
}
