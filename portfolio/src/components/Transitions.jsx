import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Glowing line divider
export function GlowingDivider() {
  return (
    <div className="relative py-12 flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute w-full h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 0, 255, 0.5), rgba(0, 255, 255, 0.5), transparent)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#FF00FF] to-[#00FFFF]"
        animate={{
          x: ['-50vw', '50vw'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          boxShadow: '0 0 20px 5px rgba(255, 0, 255, 0.5)',
        }}
      />
    </div>
  );
}

// Parallax wrapper for sections
export function ParallaxSection({ children, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated section wrapper with reveal effect
export function RevealSection({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Floating dots cluster
export function FloatingDots({ position = 'left' }) {
  const dots = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.5,
  }));

  return (
    <div 
      className={`absolute w-32 h-32 ${
        position === 'left' ? 'left-10' : 'right-10'
      } top-1/2 -translate-y-1/2 opacity-30 pointer-events-none`}
    >
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-gradient-to-r from-[#FF00FF] to-[#00FFFF]"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Gradient mesh effect
export function GradientMesh({ className = '' }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 400 400" className="opacity-10">
        <defs>
          <linearGradient id="meshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF00FF" />
            <stop offset="100%" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,200 Q100,100 200,200 T400,200"
          stroke="url(#meshGrad)"
          strokeWidth="1"
          fill="none"
          animate={{
            d: [
              "M0,200 Q100,100 200,200 T400,200",
              "M0,200 Q100,300 200,200 T400,200",
              "M0,200 Q100,100 200,200 T400,200",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  );
}

// Animated border glow
export function GlowBorder({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute -inset-px rounded-xl opacity-50"
        style={{
          background: 'linear-gradient(135deg, #FF00FF, #00FFFF, #FF00FF)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="relative bg-[#0a0a0f] rounded-xl">
        {children}
      </div>
    </div>
  );
}
