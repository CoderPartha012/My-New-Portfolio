import Header       from './components/Header';
import Hero         from './components/Hero';
import Capabilities from './components/Capabilities';
import About        from './components/About';
import Skills       from './components/Skills';
import Education    from './components/Education';
import Experience   from './components/Experience';
import Projects     from './components/Projects';
import Certifications from './components/Certifications';
import Contact      from './components/Contact';
import Footer       from './components/Footer';
import ChatBot      from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Capabilities />
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
