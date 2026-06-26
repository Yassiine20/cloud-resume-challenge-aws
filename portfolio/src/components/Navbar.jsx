import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${
        scrolled
          ? 'border-white/10 bg-slate-950/70 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'border-white/10 bg-white/5 backdrop-blur-md'
      }`}
    >
      <div className="flex items-center justify-between">
        <motion.a href="#" className="flex items-center gap-2 group" whileHover={{ scale: 1.02 }}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#34d399] to-[#22d3ee] shadow-lg shadow-emerald-500/20">
            <span className="text-lg font-bold text-white">&gt;_</span>
          </div>
          <span className="text-lg font-semibold text-white">
            yassine<span className="text-slate-400">.dev</span>
          </span>
        </motion.a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`relative text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1) ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
              whileHover={{ y: -2 }}
            >
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#34d399] to-[#22d3ee]"
                />
              )}
              {link.name}
            </motion.a>
          ))}

          <motion.a
            href="/cv.pdf"
            download="Mohamed_Yassine_Chebbi_CV.pdf"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#34d399] to-[#22d3ee] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 transition-shadow hover:shadow-emerald-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </motion.a>
        </div>

        <button className="text-white md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mt-3 rounded-2xl border border-white/10 bg-slate-950/80 p-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block py-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            className="mt-3 inline-block rounded-full bg-gradient-to-r from-[#34d399] to-[#22d3ee] px-4 py-2 text-sm font-medium text-white"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
