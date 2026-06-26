import { motion } from 'framer-motion';

const focusAreas = ['Backend systems', 'Cloud architecture', 'API design'];
const quickStats = [
  { label: 'Years in CS', value: '3rd' },
  { label: 'Core stack', value: 'Django / FastAPI' },
  { label: 'Cloud', value: 'AWS' },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/45 p-8 shadow-[0_20px_80px_rgba(2,6,23,0.42)] backdrop-blur-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-70"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
              </span>
              <span className="text-sm font-medium text-sky-300">Open to internships & opportunities</span>
            </div>

            <p className="mt-6 font-mono text-sm text-slate-400">&lt;hello world /&gt;</p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              I&apos;m <span className="gradient-text">Mohamed</span>
              <br />
              <span className="gradient-text">Yassine</span>{' '}
              <span className="text-white">CHEBBI</span>
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">Software Developer</span>
              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-sm text-sky-200">Tunisia</span>
              <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-sm text-indigo-200">Backend focused</span>
            </div>

            <p className="mt-6 max-w-2xl text-lg text-slate-400">
              Third-year CS student building reliable backend platforms with{' '}
              <span className="gradient-text font-medium">Django</span>,{' '}
              <span className="gradient-text font-medium">FastAPI</span>, and cloud infrastructure.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition-all hover:shadow-sky-400/20"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Let&apos;s Connect
              </motion.a>
              <motion.a
                href="#projects"
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition-all hover:bg-white/5"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                View Projects
              </motion.a>
            </div>

            <div className="mt-8 flex gap-4">
              <motion.a href="https://github.com/Yassiine20" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-indigo-400/50 hover:text-white" whileHover={{ scale: 1.08, y: -2 }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </motion.a>
              <motion.a href="https://linkedin.com/in/medyassine20" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-sky-400/50 hover:text-white" whileHover={{ scale: 1.08, y: -2 }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </motion.a>
              <motion.a href="mailto:mohamed.y.chebbi@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-indigo-400/50 hover:text-white" whileHover={{ scale: 1.08, y: -2 }}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-900/45 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.4)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Profile snapshot</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">Currently building</h2>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">Available</span>
            </div>

            <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900">
              <img src="/Personal_image.JPG" alt="Mohamed Yassine CHEBBI" className="h-72 w-full object-cover object-center" />
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {quickStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.4rem] border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 to-sky-400/10 p-4">
              <p className="text-sm font-semibold text-white">Focus areas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm text-slate-300">{item}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500">
        <span className="text-sm font-mono">scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
