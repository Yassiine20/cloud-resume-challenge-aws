import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

// Animated particle
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

// Floating gradient orb
function GradientOrb({ className, color1, color2, animate = true }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      style={{
        background: `radial-gradient(circle, ${color1} 0%, ${color2} 50%, transparent 70%)`,
      }}
      animate={animate ? {
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
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

// Shooting star
function ShootingStar({ delay }) {
  const startX = Math.random() * 100;
  const startY = Math.random() * 50;
  
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
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
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 15 + 10,
        ease: 'easeOut',
      }}
    />
  );
}

// Grid lines effect
function GridEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
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

  // Generate particles once
  const particles = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: Math.random() > 0.7 
        ? `rgba(255, 0, 255, ${Math.random() * 0.5 + 0.2})`
        : Math.random() > 0.5
        ? `rgba(0, 255, 255, ${Math.random() * 0.5 + 0.2})`
        : `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
      floatRange: Math.random() * 30 - 15,
      driftRange: Math.random() * 20 - 10,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  // Generate shooting stars
  const shootingStars = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,
      delay: i * 8 + Math.random() * 5,
    }));
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f]" />
      
      {/* Grid effect */}
      <GridEffect />
      
      {/* Gradient orbs */}
      <GradientOrb 
        className="w-[600px] h-[600px] -top-48 -left-48"
        color1="#FF00FF"
        color2="#FF00FF"
      />
      <GradientOrb 
        className="w-[500px] h-[500px] top-1/4 -right-32"
        color1="#00FFFF"
        color2="#00FFFF"
      />
      <GradientOrb 
        className="w-[400px] h-[400px] top-1/2 left-1/4"
        color1="#FF00FF"
        color2="#00FFFF"
      />
      <GradientOrb 
        className="w-[600px] h-[600px] bottom-1/4 right-1/4"
        color1="#00FFFF"
        color2="#FF00FF"
      />
      <GradientOrb 
        className="w-[500px] h-[500px] -bottom-32 -left-32"
        color1="#FF00FF"
        color2="#FF00FF"
      />
      
      {/* Particles */}
      {particles.map((particle) => (
        <Particle key={particle.id} particle={particle} />
      ))}
      
      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <ShootingStar key={star.id} delay={star.delay} />
      ))}
      
      {/* Vignette overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, #0a0a0f 70%)',
          opacity: 0.5,
        }}
      />
    </div>
  );
}
