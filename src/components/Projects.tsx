import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-deprecated
import { Github, ExternalLink, Search, Tags, Code, Zap, Star } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
      gradient: 'from-cyan-500 to-sky-500',
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
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Bug-Tracking-System',
      description: 'A modern, feature-rich bug tracking application built with React and TypeScript. Track, manage, and collaborate on software bugs efficiently with a beautiful and intuitive interface.',
      image: 'https://i.postimg.cc/4N9S6KBS/ksdh.png',
      technologies: ['React', 'Tailwind CSS', 'Recharts', 'React Toastify', 'React Dropzone'],
      github: 'https://github.com/CoderPartha012/Bug-Tracking-System',
      live: 'https://bug-tracking-system.netlify.app/',
      category: 'testing',
      featured: true,
      gradient: 'from-sky-500 to-indigo-500',
    },
    {
      title: 'Maharaja - Authentic Indian Restaurant',
      description: 'A modern, responsive website for an authentic Indian restaurant, built with React, TypeScript, and Tailwind CSS. Seamless user experience for viewing the menu, making reservations, and exploring the gallery.',
      image: 'https://i.postimg.cc/JhkbNDq1/ksjdhksjd.png',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'React-router-dom', 'Framer-motion'],
      github: 'https://github.com/CoderPartha012/Maharaja',
      live: 'https://maharaja-a-simple-restaurant.netlify.app/',
      category: 'web',
      featured: false,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Expenso - Smart Expense Tracking',
      description: 'A modern, feature-rich expense tracking application built with React and TypeScript. Helps users manage their finances by tracking expenses, setting budgets, and visualizing spending patterns.',
      image: 'https://i.postimg.cc/MTscmQc6/jshdjsd.png',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Date-fns', 'JsPDF'],
      github: 'https://github.com/CoderPartha012/Expenso',
      live: 'https://expens-by-partha.netlify.app/',
      category: 'web',
      featured: false,
      gradient: 'from-teal-500 to-cyan-500',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-14 section-primary relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 cyber-grid opacity-35 pointer-events-none" />
      <div className="scan-line" style={{ animationDelay: '5s' }} />

      {/* Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl orb-float" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl orb-float-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-5 py-2 mb-6">
            <Code className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium tracking-widest uppercase body-font">Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text-primary heading-font mb-4">
            Featured Projects
          </h2>
          <div className="section-divider max-w-24 mx-auto mb-6" />
          <p className="text-lg text-slate-400 max-w-2xl mx-auto body-font">
            Explore my latest projects showcasing innovation in web development and testing automation
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex gap-2">
            {['all', 'web', 'testing'].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium subheading-font transform hover:scale-105 ${
                  filter === category
                    ? 'gradient-primary text-[#050d1a] shadow-lg shadow-cyan-400/20'
                    : 'glass-morphism text-slate-300 hover:text-white'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 rounded-xl glass-morphism border border-cyan-400/20 focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent w-full md:w-80 body-font text-white placeholder-slate-500 bg-transparent"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-amber-400 fill-current" />
              <h3 className="text-2xl font-bold text-white subheading-font">Featured Projects</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} featured />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white subheading-font">More Projects</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index + featuredProjects.length} featured={false} />
              ))}
            </div>
          </div>
        )}

        {/* No results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="card-enhanced p-12 max-w-md mx-auto">
              <Search className="w-16 h-16 mx-auto mb-4 text-slate-500" />
              <h3 className="text-xl font-bold text-white mb-2 subheading-font">No Projects Found</h3>
              <p className="text-slate-400 body-font">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, featured }: { project: any; index: number; featured: boolean }) => (
  <div
    className={`group card-enhanced overflow-hidden animate-fade-in-up ${featured ? 'ring-1 ring-cyan-400/20' : ''}`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Featured badge */}
    {featured && (
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-[#050d1a] text-sm font-bold shadow-lg">
          <Star className="w-4 h-4 fill-current" />
          Featured
        </div>
      </div>
    )}

    {/* Image */}
    <div className="relative overflow-hidden aspect-video">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        width={640}
        height={360}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Overlay actions */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 glass-morphism rounded-full shadow-lg hover:scale-110 transition-transform border border-cyan-400/30">
          <Github className="w-6 h-6 text-white" />
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full shadow-lg hover:scale-110 transition-transform">
          <ExternalLink className="w-6 h-6 text-white" />
        </a>
      </div>
      {/* Gradient top bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-white group-hover:gradient-text-primary transition-all duration-300 subheading-font">
          {project.title}
        </h3>
        <span className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium`}>
          {project.category}
        </span>
      </div>

      <p className="text-slate-400 mb-6 line-clamp-3 body-font">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Tags className="w-4 h-4 mt-1 text-cyan-400" />
        {project.technologies.map((tech: string, i: number) => (
          <span key={i} className="text-sm px-3 py-1 bg-white/5 hover:bg-white/10 border border-cyan-400/10 hover:border-cyan-400/30 rounded-full transition-colors body-font text-slate-300">
            {tech}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-cyan-400/10 hover:border-cyan-400/30 rounded-lg transition-all subheading-font text-slate-300 hover:text-white"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 gradient-primary rounded-lg text-[#050d1a] font-bold transition-all transform hover:scale-105 subheading-font"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
