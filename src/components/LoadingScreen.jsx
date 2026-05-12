
import React from 'react';
import { motion } from 'framer-motion';

// Holi color palette
const holiColors = [
  '#FF1493', // Deep Pink
  '#FF6B35', // Orange
  '#FFD700', // Gold
  '#00E676', // Green
  '#00BCD4', // Cyan
  '#E040FB', // Purple-Pink
  '#FFEB3B', // Yellow
  '#F44336', // Red
];

// Generate splash blobs — big irregular paint splats
const splashes = [
  { x: '12%', y: '18%', size: 180, color: '#FF1493', delay: 0.2, rotate: 15 },
  { x: '72%', y: '12%', size: 200, color: '#FFD700', delay: 0.5, rotate: -20 },
  { x: '45%', y: '70%', size: 160, color: '#00E676', delay: 0.8, rotate: 30 },
];

// Smaller splatter dots that burst outward from each splash
const splatDots = [];
splashes.forEach((splash, si) => {
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2 + Math.random() * 0.5;
    const dist = 60 + Math.random() * 80;
    splatDots.push({
      id: `${si}-${i}`,
      originX: splash.x,
      originY: splash.y,
      dx: Math.cos(angle) * dist,
      dy: Math.sin(angle) * dist,
      size: 8 + Math.random() * 14,
      color: holiColors[(si * 3 + i) % holiColors.length],
      delay: splash.delay + 0.1 + i * 0.03,
    });
  }
});

// Color shower particles (falling gulaal)
const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  size: Math.random() * 8 + 3,
  color: holiColors[i % holiColors.length],
  delay: Math.random() * 1.5 + 0.5,
  duration: Math.random() * 1.5 + 1.8,
  drift: (Math.random() - 0.5) * 50,
}));

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{ overflow: 'hidden' }}
    >
      {/* === HOLI PAINT SPLASHES === */}
      {splashes.map((splash, i) => (
        <motion.div
          key={`splash-${i}`}
          style={{
            position: 'absolute',
            left: splash.x,
            top: splash.y,
            width: splash.size,
            height: splash.size,
            borderRadius: '42% 58% 62% 38% / 45% 55% 45% 55%',
            background: `radial-gradient(circle at 40% 40%, ${splash.color}, ${splash.color}cc 60%, transparent 100%)`,
            transform: `translate(-50%, -50%) rotate(${splash.rotate}deg)`,
            filter: 'blur(2px)',
            zIndex: 1,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.4, 1], opacity: [0, 0.7, 0.45] }}
          transition={{
            duration: 0.6,
            delay: splash.delay,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* === SPLATTER DOTS (burst from splashes) === */}
      {splatDots.map((dot) => (
        <motion.div
          key={`dot-${dot.id}`}
          style={{
            position: 'absolute',
            left: dot.originX,
            top: dot.originY,
            width: dot.size,
            height: dot.size,
            borderRadius: '50%',
            background: dot.color,
            filter: 'blur(1px)',
            zIndex: 2,
          }}
          initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
          animate={{ x: dot.dx, y: dot.dy, scale: 1, opacity: [0, 0.9, 0.5] }}
          transition={{
            duration: 0.5,
            delay: dot.delay,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* === FALLING GULAAL PARTICLES === */}
      {particles.map((p) => (
        <motion.div
          key={`particle-${p.id}`}
          style={{
            position: 'absolute',
            top: '-5%',
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            filter: `blur(${p.size > 8 ? 2 : 0}px)`,
            opacity: 0.7,
            zIndex: 2,
          }}
          initial={{ y: '-10vh', opacity: 0 }}
          animate={{
            y: '110vh',
            x: p.drift,
            opacity: [0, 0.9, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeIn',
            repeat: Infinity,
            repeatDelay: Math.random() * 0.5,
          }}
        />
      ))}

      {/* === MAIN CONTENT === */}
      <div className="flex flex-col items-center justify-center text-center" style={{ zIndex: 10, position: 'relative' }}>
        <motion.img
          className="w-24 h-24 md:w-32 md:h-32 mb-8"
          alt="XiteNodes logo"
          src="https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/Eee_noback.png"
          initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
          animate={{
            rotate: [0, 720, 360, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
            opacity: 1,
          }}
          transition={{
            rotate: { duration: 2.0, ease: "circOut", times: [0, 0.3, 0.7, 1] },
            scale: { duration: 0.8, ease: "backOut", delay: 2.0, times: [0, 0.2, 0.4, 0.6, 1] },
            opacity: { duration: 0.5, ease: "easeOut" }
          }}
        />

        {/* Holi-colored progress bar */}
        <motion.div
          className="w-56 md:w-72 h-2.5 bg-slate-700/70 rounded-full mx-auto overflow-hidden mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #FF1493, #FFD700, #00E676, #E040FB, #00BCD4)',
            }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "linear", delay: 0.3 }}
          />
        </motion.div>

        <motion.p
          className="text-md"
          style={{ color: '#FFD700' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Optimizing Next-Gen Hosting Experience...
        </motion.p>

        <motion.p
          className="absolute bottom-8 text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Website still in BETA phase.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
