import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'End of Studies Intern',
    company: 'EXCELLIA Solutions',
    companyUrl: 'https://excellia.tn/',
    date: 'Feb 2026 — May 2026',
    points: [
      'Developing a platform for monitoring transactions to catch fraudulent activity',
      'Building a Machine Learning model to detect fraudulent transactions',
    ],
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'ML'],
  },
  {
    title: 'Backend Developer Intern',
    company: 'Flouci',
    companyUrl: 'https://flouci.com',
    date: 'Jul 2025 — Aug 2025',
    points: [
      'Backend development using Django in microservices architecture',
      'Gained practical exposure to real-world software development workflows',
      'Strengthened skills in Python, Django, and database management',
      'Collaborated with team members to implement features and solve challenges',
    ],
    technologies: ['Python', 'Django', 'Microservices', 'PostgreSQL'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-gap" ref={ref}>
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
            Where I&apos;ve<br />worked.
          </h2>
        </motion.div>

        <div className="mt-16 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            >
              <div
                style={{
                  backgroundColor: '#FCFCFC',
                  border: '1px solid #ECECEC',
                  borderRadius: '4px',
                  padding: '36px',
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <p
                      style={{
                        fontSize: '13px',
                        color: '#D59A5D',
                        fontFamily: 'var(--font-mono)',
                        marginBottom: '8px',
                      }}
                    >
                      {exp.date}
                    </p>
                    <h3
                      className="font-display font-bold text-primary"
                      style={{ fontSize: '20px' }}
                    >
                      {exp.title}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      style={{ color: '#6F6F6F', fontSize: '15px' }}
                    >
                      {exp.company}
                    </a>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                      style={{ color: '#6F6F6F', fontSize: '14px', lineHeight: '1.6' }}
                    >
                      <span
                        className="mt-2 shrink-0"
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          backgroundColor: '#9A9A9A',
                        }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 10px',
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
