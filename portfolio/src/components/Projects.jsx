import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'ChicBot',
    subtitle: 'E-Commerce Chatbot',
    description:
      'Multilingual e-commerce chatbot with DistilBERT intent classification and personalized recommendations.',
    technologies: ['Python', 'FastAPI', 'HTML/CSS', 'Transformers'],
    github: 'https://github.com/Yassiine20/commercial-chatbot',
    image: '/projects/chicbot.jpg',
  },
  {
    title: 'Cloud Resume Challenge',
    subtitle: 'AWS Cloud Infrastructure',
    description:
      'Personal resume website with serverless architecture. Visitor counter using AWS Lambda, API Gateway, and DynamoDB.',
    technologies: ['AWS', 'Lambda', 'DynamoDB', 'S3', 'CloudFront'],
    github: 'https://github.com/Yassiine20/cloud-resume-challenge-aws',
    image: '/projects/cloud-resume.jpg',
  },
  {
    title: 'Video Summary AI',
    subtitle: 'Full-Stack Application',
    description:
      'AI-powered video summarization tool with Django REST + Angular. OpenAI Whisper for transcription and Groq LLM for summaries.',
    technologies: ['Django', 'Angular', 'OpenAI', 'Celery', 'Redis'],
    github: 'https://github.com/Yassiine20/video-summary',
    image: '/projects/video-ai.jpg',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-gap" ref={ref}>
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
            Featured<br />work.
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2" style={{ gap: '28px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="group"
              style={{
                backgroundColor: '#FCFCFC',
                border: '1px solid #ECECEC',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '240px',
                  backgroundColor: '#E8E4E0',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div style={{ padding: '24px' }}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className="font-display font-bold text-primary"
                      style={{ fontSize: '18px' }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#9A9A9A', marginTop: '2px' }}>
                      {project.subtitle}
                    </p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '1px solid #E8E8E8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9A9A9A',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <p style={{ color: '#6F6F6F', fontSize: '14px', lineHeight: '1.6', marginTop: '12px' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 10px',
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/Yassiine20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs"
          >
            View All on GitHub
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
