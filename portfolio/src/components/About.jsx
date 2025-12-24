import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '2+', label: 'Projects Shipped' },
  { value: '3rd', label: 'Year CS Student' },
  { value: '5+', label: 'Technologies' },
];

const expertise = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Backend Dev',
    subtitle: 'Django & FastAPI Expert',
    color: 'from-[#FF00FF]',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: 'Databases',
    subtitle: 'PostgreSQL & MySQL',
    color: 'from-[#00FFFF]',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud',
    subtitle: 'AWS Infrastructure',
    color: 'from-[#FF00FF]',
  },
];

const codeContent = `const focus = [
  "Backend Development",
  "Cloud Architecture",
  "API Design"
];`;

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      {/* Section-specific floating elements */}
      <motion.div
        className="absolute left-10 top-1/4 w-2 h-2 rounded-full bg-[#FF00FF]"
        animate={{
          y: [-20, 20, -20],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-20 top-1/3 w-3 h-3 rounded-full bg-[#00FFFF]"
        animate={{
          y: [20, -20, 20],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF00FF] font-mono text-sm">// ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Crafting <span className="gradient-text text-glow">Digital</span> Experiences
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card gradient-border p-6 h-full hover:shadow-lg hover:shadow-[#FF00FF]/10 transition-all duration-300">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-gray-500 text-sm font-mono">about.md</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Third-year Computer Science student at the{' '}
                  <span className="text-white">Higher Institute of Information Technologies and Communication</span>,
                  specializing in{' '}
                  <span className="gradient-text font-medium">Software Engineering</span> and{' '}
                  <span className="gradient-text font-medium">Information Systems</span>.
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  Passionate about backend development and building reliable software solutions.
                  Skilled in web technologies such as Django, Angular, and relational databases.
                  Curious, motivated, and eager to apply my knowledge in real-world projects while
                  continuously learning and contributing to collaborative environments.
                </p>

                {/* Code block */}
                <div className="bg-[#0a0a0f] rounded-lg p-4 mt-6">
                  <pre className="text-sm font-mono">
                    <code>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-400">focus</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="text-yellow-400">[</span>
                      {'\n'}
                      {'  '}<span className="text-green-400">"Backend Development"</span>,
                      {'\n'}
                      {'  '}<span className="text-green-400">"Cloud Architecture"</span>,
                      {'\n'}
                      {'  '}<span className="text-green-400">"API Design"</span>
                      {'\n'}
                      <span className="text-yellow-400">]</span>;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card gradient-border p-6"
              >
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Expertise Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="glass-card p-6 group hover:bg-white/10 transition-all cursor-default"
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} to-transparent flex items-center justify-center text-white mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
