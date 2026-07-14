import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="#14D67B" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    title: 'Frameworks',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="#D59A5D" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    skills: ['Django', 'FastAPI', 'Angular', 'REST APIs'],
  },
  {
    title: 'Tools & Cloud',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="#9A9A9A" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    skills: ['AWS', 'Docker', 'PostgreSQL', 'Git'],
  },
];

const allTechnologies = [
  'Python', 'Django', 'FastAPI', 'JavaScript', 'TypeScript', 'Angular',
  'PostgreSQL', 'MySQL', 'Redis', 'AWS', 'Docker', 'Git', 'GitHub Actions',
  'REST APIs', 'Microservices', 'Celery', 'OpenAI', 'HTML/CSS', 'Tailwind',
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-gap" ref={ref}>
      <div className="section-container">
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
            Tech<br />stack.
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3" style={{ gap: '28px' }}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + catIndex * 0.08 }}
              style={{
                border: '1px solid #ECECEC',
                borderRadius: '4px',
                padding: '36px',
                backgroundColor: '#FCFCFC',
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                {category.icon}
                <p
                  style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#9A9A9A',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {category.title}
                </p>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <p
                    key={skill}
                    style={{ fontSize: '14px', color: '#6F6F6F' }}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-8"
          style={{
            border: '1px solid #ECECEC',
            borderRadius: '4px',
            padding: '36px',
            backgroundColor: '#FCFCFC',
          }}
        >
          <p
            className="text-center mb-6"
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#9A9A9A',
              fontFamily: 'var(--font-mono)',
            }}
          >
            All Technologies
          </p>
          <div className="flex flex-wrap justify-center" style={{ gap: '8px' }}>
            {allTechnologies.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  padding: '4px 12px',
                  border: '1px solid #DADADA',
                  borderRadius: '999px',
                  color: '#9A9A9A',
                  backgroundColor: 'transparent',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
