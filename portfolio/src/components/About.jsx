import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '2+', label: 'Projects Shipped' },
  { value: '3rd', label: 'Year CS Student' },
  { value: '5+', label: 'Technologies' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-gap" ref={ref}>
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <h2
              className="font-display font-bold text-primary"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              Crafting<br />
              <span style={{ color: '#14D67B' }}>Digital</span><br />
              Experiences.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="card" style={{ backgroundColor: '#FCFCFC', borderColor: '#ECECEC' }}>
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFBD2E' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28CA42' }} />
              </div>

              <p style={{ color: '#6F6F6F', lineHeight: '1.7', fontSize: '16px' }}>
                Third-year Computer Science student at the{' '}
                <span style={{ color: '#111111', fontWeight: 500 }}>
                  Higher Institute of Information Technologies and Communication
                </span>
                , specializing in Software Engineering and Information Systems.
              </p>
              <p style={{ color: '#6F6F6F', lineHeight: '1.7', fontSize: '16px', marginTop: '16px' }}>
                Passionate about backend development and building reliable software solutions.
                Skilled in web technologies such as Django, Angular, and relational databases.
              </p>

              <div
                className="mt-6"
                style={{
                  backgroundColor: '#151515',
                  padding: '28px',
                  borderRadius: '2px',
                }}
              >
                <pre style={{ margin: 0, fontSize: '13px', fontFamily: 'var(--font-mono)', lineHeight: '1.6' }}>
                  <code>
                    <span style={{ color: '#C586C0' }}>const</span>{' '}
                    <span style={{ color: '#9CDCFE' }}>focus</span>{' '}
                    <span style={{ color: '#D4D4D4' }}>=</span>{' '}
                    <span style={{ color: '#CE9178' }}>[</span>{'\n'}
                    {'  '}<span style={{ color: '#CE9178' }}>"Backend Development"</span>,{'\n'}
                    {'  '}<span style={{ color: '#CE9178' }}>"Cloud Architecture"</span>,{'\n'}
                    {'  '}<span style={{ color: '#CE9178' }}>"API Design"</span>{'\n'}
                    <span style={{ color: '#CE9178' }}>]</span>;
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                border: '1px solid #E8E8E8',
                borderRadius: '2px',
                padding: '32px 24px',
                backgroundColor: '#FCFCFC',
              }}
            >
              <p
                className="font-display font-bold text-primary"
                style={{ fontSize: '32px' }}
              >
                {stat.value}
              </p>
              <p style={{ fontSize: '13px', color: '#9A9A9A', marginTop: '4px' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
