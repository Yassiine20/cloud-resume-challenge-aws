import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

function Particle({ particle }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: particle.size,
        height: particle.size,
        background: particle.color,
      }}
      animate={{
        y: [0, particle.floatRange, 0],
        x: [0, particle.driftRange, 0],
        opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: particle.delay,
      }}
    />
  );
}

function GradientOrb({ className, color1, color2, animate = true }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      style={{
        background: `radial-gradient(circle, ${color1} 0%, ${color2} 50%, transparent 70%)`,
      }}
      animate={animate ? {
        scale: [1, 1.2, 1],
        opacity: [0.14, 0.24, 0.14],
        x: [0, 30, 0],
        y: [0, -20, 0],
      } : {}}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

function ShootingStar({ delay }) {
  const startX = Math.random() * 100;
  const startY = Math.random() * 50;

  return (
    <motion.div
      className="absolute h-1 w-1 rounded-full bg-white"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.3)',
      }}
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: [0, 150, 200],
        y: [0, 100, 150],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 15 + 10,
        ease: 'easeOut',
      }}
    />
  );
}

function GridEffect() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
}

export default function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: Math.random() > 0.7
        ? `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2})`
        : Math.random() > 0.5
        ? `rgba(56, 189, 248, ${Math.random() * 0.5 + 0.2})`
        : `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
      floatRange: Math.random() * 30 - 15,
      driftRange: Math.random() * 20 - 10,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  const shootingStars = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,
      delay: i * 8 + Math.random() * 5,
    }));
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0d0d15] to-[#020617]" />
      <GridEffect />
      <GradientOrb className="-top-48 -left-48 h-[600px] w-[600px]" color1="#818cf8" color2="#818cf8" />
      <GradientOrb className="top-1/4 -right-32 h-[500px] w-[500px]" color1="#38bdf8" color2="#38bdf8" />
      <GradientOrb className="left-1/4 top-1/2 h-[400px] w-[400px]" color1="#818cf8" color2="#38bdf8" />
      <GradientOrb className="bottom-1/4 right-1/4 h-[600px] w-[600px]" color1="#38bdf8" color2="#818cf8" />
      <GradientOrb className="-bottom-32 -left-32 h-[500px] w-[500px]" color1="#6366f1" color2="#6366f1" />
      {particles.map((particle) => (
        <Particle key={particle.id} particle={particle} />
      ))}
      {shootingStars.map((star) => (
        <ShootingStar key={star.id} delay={star.delay} />
      ))}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, #020617 70%)',
          opacity: 0.55,
        }}
      />
    </div>
  );
}
