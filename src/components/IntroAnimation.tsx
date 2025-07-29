import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

function getLetterX(i: number, total: number, spacing: number = 56): number {
  return (i - (total - 1) / 2) * spacing;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const [lettersVisible, setLettersVisible] = useState(true);
  const [showFullName, setShowFullName] = useState(false);
  const [final, setFinal] = useState(false);
  const letters = Array.from('SANJEETH');

  // Animation sequence control
  useEffect(() => {
    let timeout1: ReturnType<typeof setTimeout>;
    let timeout2: ReturnType<typeof setTimeout>;
    let timeout3: ReturnType<typeof setTimeout>;

    // 1. Wait until all letters animate in: ~170*8 ms + 1s pause
    timeout1 = setTimeout(() => {
      setLettersVisible(false); // triggers AnimatePresence exit on SANJEETH
    }, 170 * letters.length + 1000);

    // 2. Wait for exit animation to finish (0.7s), then show full name
    timeout2 = setTimeout(() => {
      setShowFullName(true);
      // 3. Then wait for display, then callback and remove everything
      timeout3 = setTimeout(() => {
        setFinal(true);
        onAnimationComplete();
      }, 3200); // full name stays for 3.2s
    }, 170 * letters.length + 1000 + 700);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [onAnimationComplete, letters.length]);

  if (final) return null;

  return (
    <motion.div
      key="intro-animation"
      className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black z-50 flex items-center justify-center overflow-hidden perspective-1000"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 1 } }}
      style={{ perspective: 1200 }}
    >
      {/* Background: Neon particles and orbs (unchanged) */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0, 1.8, 0],
              x: [0, (Math.random() * 300) - 150],
              y: [0, (Math.random() * 300) - 150],
              filter: ['brightness(80%)', 'brightness(180%)', 'brightness(80%)'],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              background:
                Math.random() > 0.5
                  ? 'rgba(110, 231, 183, 0.7)'
                  : Math.random() > 0.5
                  ? 'rgba(167, 139, 250, 0.7)'
                  : 'rgba(224, 231, 255, 0.7)',
            }}
          />
        ))}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-tr from-green-400/30 via-purple-500/20 to-blue-400/20 rounded-full blur-4xl animate-cyber-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-br from-blue-400/15 via-purple-600/10 to-pink-500/15 rounded-full blur-5xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-purple-400/40 to-blue-300/40 rounded-full filter blur-3xl animate-glow" />
      </div>

      {/* AnimatePresence ensures smooth exit animation */}
      <AnimatePresence>
        {lettersVisible && (
          <motion.h1
            key="sanjeeth"
            className="relative flex space-x-4 z-10"
            initial={{ rotateY: -15, scale: 0.8, opacity: 0 }}
            animate={{ rotateY: 0, scale: 1, opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } }}
            exit={{
              opacity: 0,
              filter: "blur(12px)",
              y: 40,
              scale: 0.6,
              transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{
                  x: 0, y: 40, z: 0,
                  opacity: 0, scale: 0.6, rotateX: 20,
                  filter: 'blur(8px)', color: '#666'
                }}
                animate={{
                  x: getLetterX(i, letters.length),
                  y: 0, z: 30,
                  opacity: 1, scale: [0.6, 1.2, 1],
                  rotateX: [20, -10, 0],
                  color: ['#6ee7b7', '#a78bfa', '#e0e7ff'],
                  filter: ['blur(8px)', 'blur(0px)', 'blur(0px)'],
                  textShadow: [
                    '0 0 0 rgba(0,0,0,0)',
                    '0 0 14px #a78bfa, 0 0 32px #6ee7b7, 0 0 54px #d8b4fe',
                    '0 0 0 rgba(0,0,0,0)',
                  ]
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: i * 0.17
                }}
                className="inline-block text-6xl sm:text-8xl lg:text-9xl font-black font-mono tracking-tight select-none"
                style={{
                  minWidth: '1ch',
                  whiteSpace: 'pre',
                  textShadow: '0 0 8px rgba(255,255,255,0.3)'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
        )}
      </AnimatePresence>

      {/* Full name cinematic reveal, flawlessly timed */}
      {showFullName && (
        <motion.div
          initial={{ opacity: 0, scale: 1.05, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.47, 0, 0.745, 0.715] }}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          style={{ perspective: 1200 }}
        >
          <div className="w-full flex justify-center items-center">
            <motion.span
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-mono tracking-normal select-none"
              initial={{ rotateX: 10 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 1.3 }}
              style={{
                color: '#6ee7b7',
                textAlign: 'center',
                whiteSpace: 'normal',
                maxWidth: '90vw',
                wordBreak: 'break-word',
                margin: '0 auto',
                display: 'block',
              }}
            >
              VASAVA SANJEETH SOLLETI
            </motion.span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default IntroAnimation;
