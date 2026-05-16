import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import Loader from './components/Loader';
import ChatBot from './components/ChatBot';

function App() {
  const [loading, setLoading] = useState(true);
  const handleDone = useCallback(() => setLoading(false), []);

  return (
    <>
      {/* Loader — always mounted so its fade-out plays */}
      <Loader onDone={handleDone} />

      {/* Main portfolio — rendered beneath loader, revealed after fade */}
      <div
        className="min-h-screen relative bg-[#050d1a] transition-colors duration-300"
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease 0.2s',
        }}
      >
        <Background3D />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}

export default App;
