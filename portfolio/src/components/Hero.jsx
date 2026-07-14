import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex items-center" style={{ paddingTop: '120px', paddingBottom: '140px' }}>
      <div className="section-container w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[55%_45%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="uppercase mb-6"
              style={{
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#8A8A8A',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Software Developer
            </p>

            <h1
              className="font-display font-bold text-primary"
              style={{
                fontSize: 'clamp(40px, 5.5vw, 64px)',
                lineHeight: '0.95',
                letterSpacing: '-0.02em',
              }}
            >
              Architecting<br />
              <span style={{ color: '#14D67B' }}>Reliable</span><br />
              Backend Systems.
            </h1>

            <p
              className="mt-8"
              style={{
                maxWidth: '500px',
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#666666',
              }}
            >
              Third-year CS student building reliable backend platforms with Django, FastAPI, and cloud infrastructure.
            </p>

            <div className="mt-10 flex flex-wrap" style={{ gap: '16px' }}>
              <a href="#contact" className="btn-primary">
                Let&apos;s Connect
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative" style={{ width: '100%', maxWidth: '400px' }}>
              <div
                className="overflow-hidden"
                style={{
                  aspectRatio: '4/5',
                  backgroundColor: '#DDDDDD',
                  borderRadius: '4px',
                }}
              >
                <img
                  src="/Personal_image.jpg"
                  alt="Mohamed Yassine CHEBBI"
                  className="w-full h-full object-cover object-center"
                  style={{ filter: 'grayscale(15%)' }}
                />
              </div>
              <div
                className="absolute bottom-4 left-4 bg-white px-4 py-2"
                style={{
                  borderRadius: '2px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: '#111111',
                  letterSpacing: '0.02em',
                }}
              >
                Backend Engineer
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
