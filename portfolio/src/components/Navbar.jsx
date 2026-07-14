import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of [...sections].reverse()) {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="section-container flex items-center justify-between h-[68px]">
        <a href="#" className="font-display text-[15px] font-bold text-primary tracking-tight">
          M.Y.C
        </a>

        <div className="hidden items-center md:flex" style={{ gap: '36px' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs transition-colors"
                style={{
                  color: isActive ? '#111111' : '#7A7A7A',
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <a
          href="/cv.pdf"
          download="Mohamed_Yassine_Chebbi_CV.pdf"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-on-primary text-xs font-medium"
          style={{ padding: '10px 20px', borderRadius: '999px' }}
        >
          Resume
        </a>

        <button
          className="text-on-surface md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="bg-surface md:hidden" style={{ borderTop: '1px solid #E8E8E8' }}>
          <div className="section-container py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-xs transition-colors"
                style={{ color: '#7A7A7A' }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/cv.pdf"
              download
              className="btn-primary text-xs mt-2 inline-flex"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
