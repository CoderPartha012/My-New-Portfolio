import { ArrowDown, FileText, Code, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-gradient pb-16 relative overflow-hidden"
    >
      {/* Animated cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl orb-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl orb-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl animate-pulse-glow" />
        {/* Extra corner glows */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-cyan-400/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-400/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        {/* Greeting badge */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
          <div className="flex items-center gap-2 px-4 py-2 glass-morphism rounded-full shadow-lg">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-cyan-300 body-font tracking-widest uppercase">
              Welcome to my digital space
            </span>
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up heading-font"
          style={{ animationDelay: '0.2s' }}
        >
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span className="gradient-text-primary">Partha Rakshit</span>
            {/* Underline glow */}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full opacity-70 blur-sm" />
          </span>
        </h1>

        {/* Role pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex items-center gap-2 px-5 py-2.5 glass-morphism rounded-full shadow-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300">
            <Code className="w-5 h-5 text-cyan-400" />
            <span className="text-lg md:text-xl text-white subheading-font">Software Tester</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 glass-morphism rounded-full shadow-lg border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-300">
            <Zap className="w-5 h-5 text-emerald-400" />
            <span className="text-lg md:text-xl text-white subheading-font">Quality Analyst</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 glass-morphism rounded-full shadow-lg border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300">
            <span className="text-amber-400 text-lg">⚡</span>
            <span className="text-lg md:text-xl text-white subheading-font">Problem Solver</span>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-xl md:text-2xl text-slate-300 mb-14 max-w-3xl mx-auto leading-relaxed body-font animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Passionate about ensuring software quality and reliability through innovative testing
          methodologies and automation frameworks.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap justify-center gap-6 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="#contact"
            className="btn-primary flex items-center gap-2 text-lg transform hover:scale-105 transition-all duration-300"
          >
            <span className="w-2 h-2 bg-current rounded-full" />
            Get in Touch
          </a>
          <a
            href="#projects"
            className="btn-secondary flex items-center gap-2 text-lg transform hover:scale-105 transition-all duration-300"
          >
            <Code className="w-5 h-5" />
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1pSxUujwep6NO93flyU4FHG_vVke0efKl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg px-6 py-3 rounded-xl font-bold border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/70 transition-all duration-300 transform hover:scale-105"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="p-3 glass-morphism rounded-full shadow-lg border border-cyan-400/20">
            <ArrowDown className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
