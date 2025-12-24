import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Django', level: 90 },
      { name: 'FastAPI', level: 80 },
      { name: 'Angular', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Git', level: 90 },
    ],
  },
];

const allTechnologies = [
  'Python', 'Django', 'FastAPI', 'JavaScript', 'TypeScript', 'Angular',
  'PostgreSQL', 'MySQL', 'Redis', 'AWS', 'Docker', 'Git', 'GitHub Actions',
  'REST APIs', 'Microservices', 'Celery', 'OpenAI', 'HTML/CSS', 'Tailwind',
];

function AnimatedProgressBar({ skill, isInView, delay }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300">{skill.name}</span>
        <span className="text-gray-500 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Floating accent elements */}
      <motion.div
        className="absolute right-10 top-20 w-32 h-32 rounded-full bg-[#FF00FF]/5 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-20 bottom-20 w-40 h-40 rounded-full bg-[#00FFFF]/5 blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF00FF] font-mono text-sm">// SKILLS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Tech <span className="gradient-text text-glow">Stack</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
              className="glass-card gradient-border p-6 hover:shadow-lg hover:shadow-[#00FFFF]/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <AnimatedProgressBar
                    key={skill.name}
                    skill={skill}
                    isInView={isInView}
                    delay={300 + catIndex * 100 + skillIndex * 100}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card gradient-border p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            All Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allTechnologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.03 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(255, 0, 255, 0.2)',
                  borderColor: 'rgba(255, 0, 255, 0.5)',
                  boxShadow: '0 0 15px rgba(255, 0, 255, 0.3)'
                }}
                className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300 cursor-default transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
