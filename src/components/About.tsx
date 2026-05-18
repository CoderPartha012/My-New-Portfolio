import { useState, useEffect } from 'react';
import { Target, Trophy, Code, Award } from 'lucide-react';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://i.postimg.cc/LXmHk0Md/my-personal.png',
    'https://i.postimg.cc/SxWRW9zL/Whats-App-Image-2026-05-09-at-01-48-18.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const keyPoints = [
    {
      icon: <Target className="w-7 h-7" />,
      title: 'Expertise',
      description: 'Test Automation, Full-Stack Testing',
      gradient: 'from-cyan-500 to-sky-500',
    },
    {
      icon: <Trophy className="w-7 h-7" />,
      title: 'Tech Stack',
      description: 'Selenium, TestNG, Java',
      gradient: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <section
      id="about"
      className="pt-2 pb-14 section-secondary relative overflow-hidden"
    >
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="scan-line" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl orb-float" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl orb-float-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center text-[#050d1a] font-bold text-sm">✦</span>
            <h2 className="text-5xl lg:text-6xl font-bold gradient-text-primary heading-font">
              About Me
            </h2>
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-[#050d1a] font-bold text-sm">✦</span>
          </div>
          <div className="section-divider max-w-24 mx-auto mb-6" />
          <p className="text-xl text-slate-400 body-font">
            Ensuring software quality, one test at a time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Carousel */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative group w-64 md:w-72 lg:w-80 flex-shrink-0">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-emerald-500 to-sky-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-80 transition duration-1000 animate-pulse-glow" />
            <div className="relative rounded-3xl overflow-hidden w-full aspect-[3/4] shadow-2xl border border-cyan-400/20">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Partha Rakshit ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover object-center transform transition-all duration-1000 ${
                    currentImageIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/30 via-transparent to-transparent" />
            </div>

            {/* Dots */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    currentImageIndex === index
                      ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 w-8 shadow-lg'
                      : 'w-3 bg-white/25 hover:bg-white/50'
                  }`}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {/* Bio card */}
            <div className="card-enhanced p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white subheading-font">My Journey</h3>
              </div>
              <p className="text-lg leading-relaxed text-slate-300 body-font">
                🚀 Passionate about automation testing, full-stack quality assurance, and scalable solutions,
                I specialize in building robust test automation frameworks and ensuring software reliability.
                Currently, I work as a Quality Analyst at Legistify, where I contribute to enhancing software
                quality through rigorous testing methodologies.
              </p>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-1 gap-5">
              {keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="card-enhanced p-6 cursor-pointer group"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-4 bg-gradient-to-br ${point.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 text-white`}>
                      {point.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1 subheading-font group-hover:gradient-text-primary transition-all duration-300">
                        {point.title}
                      </h4>
                      <p className="text-slate-400 body-font">{point.description}</p>
                    </div>
                    <Award className="w-6 h-6 text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
