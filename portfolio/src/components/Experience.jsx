import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Backend Developer Intern',
    company: 'Flouci',
    companyUrl: 'https://flouci.com',
    location: 'Tunis, Tunisia',
    date: 'Jul 2025 — Aug 2025',
    points: [
      'Worked on backend development using Django in microservices architecture',
      'Gained practical exposure to real-world software development and project workflows',
      'Strengthened technical skills in Python, Django, and database management',
      'Collaborated with team members to implement features and solve development challenges',
    ],
    technologies: ['Python', 'Django', 'Microservices', 'PostgreSQL'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      {/* Floating accent dots */}
      <motion.div
        className="absolute left-[5%] top-1/3 w-2 h-2 rounded-full bg-[#00FFFF]"
        animate={{
          y: [-15, 15, -15],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[10%] top-1/4 w-3 h-3 rounded-full bg-[#FF00FF]"
        animate={{
          y: [10, -10, 10],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute right-[15%] bottom-1/4 w-2 h-2 rounded-full bg-[#00FFFF]"
        animate={{
          y: [-10, 10, -10],
          x: [5, -5, 5],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF00FF] font-mono text-sm">// EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Where I've <span className="gradient-text text-glow">Worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, #FF00FF, #00FFFF, transparent)',
            }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative pl-8 md:pl-20 pb-12"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00FFFF] border-4 border-[#0a0a0f]"
              >
                <span className="absolute inset-0 rounded-full bg-[#00FFFF] animate-ping opacity-30" />
              </motion.div>

              {/* Experience Card */}
              <div className="glass-card gradient-border p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  {/* Left content */}
                  <div className="flex items-start gap-4">
                    {/* Company Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF00FF]/20 to-[#00FFFF]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#00FFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00FFFF] hover:underline flex items-center gap-1 mt-1"
                      >
                        {exp.company}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        </svg>
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Date badge */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.date}
                  </div>
                </div>

                {/* Points */}
                <ul className="mt-6 space-y-3">
                  {exp.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + pointIndex * 0.1 }}
                      className="flex items-start gap-3 text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] mt-2 flex-shrink-0" />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm border border-[#00FFFF]/30 text-[#00FFFF] bg-[#00FFFF]/10"
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
