import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import { GlowingDivider } from './components/Transitions';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global animated background */}
      <Background />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <GlowingDivider />
          <About />
          <GlowingDivider />
          <Experience />
          <GlowingDivider />
          <Projects />
          <Education />
          <GlowingDivider />
          <Skills />
          <GlowingDivider />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

