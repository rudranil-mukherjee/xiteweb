
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedParticles = ({ count = 20 }) => {
  const particles = Array.from({ length: count });

  const getRandomValue = (min, max) => Math.random() * (max - min) + min;

  return (
    <div className="floating-particles -z-10">
      {particles.map((_, i) => {
        const size = getRandomValue(1.5, 4); // Slightly smaller for subtlety
        const duration = getRandomValue(15, 30); // Slower overall movement
        const delay = getRandomValue(0, 15); // Increased delay spread
        const initialX = `${getRandomValue(0, 100)}%`;
        const initialY = `${getRandomValue(0, 100)}%`;
        
        const colors = [
          'bg-pink-500/20', 
          'bg-purple-500/20', 
          'bg-cyan-500/20', 
          'bg-blue-500/20',
          'bg-white/10'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <motion.div
            key={i}
            className={`animated-particle ${color}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: initialX,
              top: initialY,
            }}
            animate={{
              x: [0, getRandomValue(-25, 25), getRandomValue(-15, 15), 0], // Reduced travel distance
              y: [0, getRandomValue(-25, 25), getRandomValue(-15, 15), 0],
              scale: [1, getRandomValue(0.7, 1.3), 1], // Softer scale changes
              opacity: [0, getRandomValue(0.2, 0.6), 0], // Softer opacity
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedParticles;
