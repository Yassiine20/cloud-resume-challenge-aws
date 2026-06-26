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
    <div className="relative min-h-screen overflow-x-hidden text-slate-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-0 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute right-[-6%] top-24 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />
      </div>

      <Background />

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

