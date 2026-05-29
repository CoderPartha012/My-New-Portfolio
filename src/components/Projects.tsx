import { useState } from 'react';
import { Github, ExternalLink, Search, Star } from 'lucide-react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

const PROJECTS_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4';

const projects = [
  {
    title: 'TaskMate',
    description: 'A powerful, feature-rich task management system built with React, TypeScript, and modern web technologies. Beautiful intuitive interface for managing tasks, collaborating with team members, and tracking productivity.',
    image: 'https://i.postimg.cc/15j6jF9R/Taskmate.png',
    technologies: ['React', 'Tailwind CSS', 'Zustand'],
    github: 'https://github.com/CoderPartha012/TaskMate',
    live: 'https://taskmate-partha.netlify.app/',
    category: 'web',
    featured: true,
  },
  {
    title: 'Business Management System',
    description: 'A comprehensive business management solution built with Next.js, featuring a modern UI and extensive functionality for managing workforce, payroll, finances, and more.',
    image: 'https://i.postimg.cc/sDGvsMWV/slkjd.png',
    technologies: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Recharts'],
    github: 'https://github.com/CoderPartha012/BMS',
    live: 'https://business-management-system-partha.netlify.app/',
    category: 'web',
    featured: true,
  },
  {
    title: 'Bugdesk',
    description: 'A modern, full-featured bug tracking application built with React and TypeScript. Track bugs through a complete 7-stage lifecycle, collaborate with your team, and visualise project health — all in a clean, responsive interface with dark mode support.',
    image: 'https://i.postimg.cc/d1WtCPmX/ksjd.png',
    technologies: ['React', 'Tailwind CSS', 'Recharts 2', 'Browser localStorage'],
    github: 'https://github.com/CoderPartha012/Bug-Tracking-System',
    live: 'https://bugdesk.netlify.app/',
    category: 'web',
    featured: false,
  },
  {
    title: 'Maharaja Restaurant',
    description: 'A modern, responsive website for an authentic Indian restaurant. Seamless UX for viewing the menu, making reservations, and exploring the gallery.',
    image: 'https://i.postimg.cc/JhkbNDq1/ksjdhksjd.png',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    github: 'https://github.com/CoderPartha012/Maharaja',
    live: 'https://maharaja-a-simple-restaurant.netlify.app/',
    category: 'web',
    featured: false,
  },
  {
    title: 'Expenso',
    description: 'A modern expense tracking application. Helps users manage their finances by tracking expenses, setting budgets, and visualizing spending patterns.',
    image: 'https://i.postimg.cc/MTscmQc6/jshdjsd.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'JsPDF'],
    github: 'https://github.com/CoderPartha012/Expenso',
    live: 'https://expens-by-partha.netlify.app/',
    category: 'web',
    featured: false,
  },
  {
    title: 'CaseKaro Automation',
    description: 'Developed an end-to-end automation testing framework for casekaro.com using Java, Playwright, Cucumber, and JUnit following the BDD approach. Automated product search, cart validation, and multi-variant shopping workflows with robust UI validations, thread-safe browser management, screenshot capture on failure, and detailed test reporting using Maven-based execution.',
    image: 'https://i.postimg.cc/d1JHx4xy/asd.png',
    technologies: ['Java', 'Playwright', 'Cucumber (BDD)', 'JUnit', 'Maven', 'Git', 'Chromium Browser'],
    github: 'https://github.com/CoderPartha012/casekaro-automation',
    live: 'https://casekaro.com/',
    category: 'testing',
    featured: true,
  },
  {
    title: 'Zynerd Booking Automation',
    description: 'Developed an end-to-end automation testing framework for the Zynerd booking and Razorpay payment workflow using Java, Selenium WebDriver, and TestNG with the Page Object Model (POM) design pattern. Automated booking flow, payment processing, and form validation scenarios with reusable utilities, config-driven test data, explicit wait handling, and Maven-based test execution.',
    image: 'https://i.postimg.cc/T277tjqb/Zynerd.png',
    technologies: ['Java', 'Selenium WebDriver', 'TestNG', 'Maven', 'Page Object Model (POM)', 'SLF4J Logging'],
    github: 'https://github.com/CoderPartha012/zynerd-booking-automation',
    live: 'https://staging.zynerd.co.in/call-guidance-qa',
    category: 'testing',
    featured: true,
  },
];

/* ── Single project card ─────────────────────────────────────────────── */
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group liquid-glass rounded-[1.25rem] overflow-hidden flex flex-col"
  >
    {/* Image */}
    <div className="relative overflow-hidden aspect-video flex-shrink-0">
      <img src={project.image} alt={project.title} loading="lazy"
        width={640} height={360}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 liquid-glass rounded-full px-2.5 py-1
                         flex items-center gap-1 text-[11px] font-body text-white">
          <Star className="w-3 h-3 fill-white" />Featured
        </div>
      )}

      {/* Overlay links */}
      <div className="absolute inset-0 flex items-center justify-center gap-4
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      bg-black/40">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="liquid-glass rounded-full p-3 hover:scale-110 transition-transform">
          <Github className="w-5 h-5 text-white" />
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer"
          className="liquid-glass-strong rounded-full p-3 hover:scale-110 transition-transform">
          <ExternalLink className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-start justify-between mb-3 gap-2">
        <h3 className="font-heading italic text-white text-2xl tracking-[-0.5px] leading-none">
          {project.title}
        </h3>
        <span className="liquid-glass rounded-full px-2.5 py-0.5 text-[11px] font-body text-white/60
                         whitespace-nowrap flex-shrink-0">
          {project.category}
        </span>
      </div>

      <p className="text-sm font-body font-light text-white/70 leading-relaxed line-clamp-3 flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((tech) => (
          <span key={tech}
            className="liquid-glass rounded-full px-2.5 py-1 text-[11px] font-body text-white/60">
            {tech}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-auto">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 liquid-glass rounded-full
                     text-sm font-body text-white/70 hover:text-white transition-colors">
          <Github className="w-4 h-4" />Code
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white rounded-full
                     text-sm font-body font-medium text-black hover:bg-white/90 transition-colors">
          <ExternalLink className="w-4 h-4" />Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

/* ── Section ──────────────────────────────────────────────────────────── */
const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = projects.filter((p) => {
    const matchCat = filter === 'all' || p.category === filter;
    const q = search.toLowerCase();
    const matchSearch = !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.technologies.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <section id="projects" className="relative py-24 bg-black overflow-hidden">
      <FadingVideo src={PROJECTS_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      <div className="container mx-auto px-8 md:px-16 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-body text-white/80 mb-4 tracking-wide">// Portfolio</p>
          <h2 className="font-heading italic text-white leading-[0.9] tracking-[-3px]"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            Featured<br />projects
          </h2>
        </motion.div>

        {/* ── Filters + search ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4"
        >
          {/* Category pills */}
          <div className="flex gap-2">
            {['all', 'web', 'testing'].map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-body transition-all duration-200 cursor-pointer
                            ${filter === cat ? 'bg-white text-black' : 'liquid-glass text-white/70 hover:text-white'}`}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text" placeholder="Search projects…"
              value={search} onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2.5 rounded-full liquid-glass text-sm font-body
                         text-white placeholder-white/30 bg-transparent outline-none
                         focus:ring-1 focus:ring-white/20 w-64"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          </div>
        </motion.div>

        {/* ── Grid ── */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="liquid-glass rounded-[1.25rem] p-12 max-w-md mx-auto">
              <Search className="w-12 h-12 mx-auto mb-4 text-white/30" />
              <h3 className="font-heading italic text-white text-2xl mb-2">No Projects Found</h3>
              <p className="text-sm font-body text-white/50">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
