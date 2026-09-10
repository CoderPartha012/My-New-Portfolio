import Header       from './components/Header';
import Hero         from './components/Hero';

import About        from './components/About';
import Skills       from './components/Skills';
import Education    from './components/Education';
import Experience   from './components/Experience';
import Projects     from './components/Projects';
import Certifications from './components/Certifications';
import Contact      from './components/Contact';
import Footer       from './components/Footer';
import ChatBot      from './components/ChatBot';
import QAMotion     from './components/QAMotion';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <a href="#main-content" className="qa-skip-link">Skip to main content</a>
      <QAMotion />
      <Header />
      <main id="main-content" tabIndex={-1}>
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
  );
}

export default App;
