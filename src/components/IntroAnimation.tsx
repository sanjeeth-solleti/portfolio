"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation, AnimationControls } from 'framer-motion';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

function getLetterX(i: number, total: number, spacing: number = 56): number {
  return (i - (total - 1) / 2) * spacing;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const [lettersVisible, setLettersVisible] = useState(true);
  const [final, setFinal] = useState(false);

  const letters = Array.from('SANJEETH');
  const controlsRef = useRef<AnimationControls[]>(letters.map(() => useAnimation())).current;

  useEffect(() => {
    let timeout1: ReturnType<typeof setTimeout>;
    let timeout2: ReturnType<typeof setTimeout>;

    // Animate in (all start at center X)
    (async () => {
      await Promise.all(
        controlsRef.map(ctrl =>
          ctrl.set({
            x: 0,                        // All start at center X
            y: 0, z: 0,
            opacity: 0,
            scale: 0.01,                 // Dramatic explosion!
            rotateX: 0,
            filter: 'blur(32px)', 
            color: '#6ee7b7',
          })
        )
      );
      for (let i = 0; i < letters.length; i++) {
        controlsRef[i].start({
          x: getLetterX(i, letters.length),
          y: [0, -22, 0],
          z: [0, 120, 0],
          opacity: [0, 1, 1],
          scale: [0.01, 1.33, 1],
          rotateX: [30, -7, 0],
          color: [
            '#f3f6f6',      // WHITE burst on arrival
            '#6ee7b7',      // green
            '#22d3ee',      // cyan
            '#60a5fa',      // blue
          ],
          filter: [
            'blur(32px)',
            'blur(0px)',
            'drop-shadow(0 0 48px #80ffd9)',
            'none',
          ],
          transition: {
            type: "spring",
            bounce: 0.55,
            stiffness: 115,
            damping: 8,
            mass: 0.5,
            duration: 0.93,
            delay: i * 0.11,
          }
        });
        // SHINE effect: trigger after landing (not on simulate, but for real, see below)
      }
    })();

    // Timing for exit
    const entranceDelay = 0.11 * (letters.length - 1);
    const bounceInDuration = 0.93;
    const extraPause = 1.2;
    const timeUntilHideLetters = (entranceDelay + bounceInDuration + extraPause) * 1000;

    // Animate out and remove after show (vanish to center, blur & light)
    timeout1 = setTimeout(() => {
      controlsRef.forEach((ctrl, i) => {
        ctrl.start({
          x: 0,
          y: -50,
          opacity: 0,
          scale: 0.5,
          rotateX: -45,
          filter: [
            'blur(0px)',
            'blur(18px) brightness(2.5)', // glow out
          ],
          transition: {
            duration: 0.75,
            delay: i * 0.06, // quick stagger for vanish!
            ease: [0.65, 0, 0.35, 1]
          }
        });
      });
      setTimeout(() => setLettersVisible(false), 740);
    }, timeUntilHideLetters);

    // Call onAnimationComplete after whole sequence
    timeout2 = setTimeout(() => {
      setFinal(true);
      onAnimationComplete();
    }, timeUntilHideLetters + 1000);

    return () => {
      controlsRef.forEach(c => c.stop());
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onAnimationComplete, controlsRef, letters.length]);

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
      {/* Cinematic particles (same as before) */}
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
              filter: ['brightness(80%)', 'brightness(180%)', 'brightness(80%)']
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              background:
                Math.random() > 0.5
                  ? 'rgba(110,231,183,0.7)'
                  : Math.random() > 0.5
                  ? 'rgba(167,139,250,0.7)'
                  : 'rgba(224,231,255,0.7)'
            }}
          />
        ))}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-tr from-green-400/30 via-purple-500/20 to-blue-400/20 rounded-full blur-4xl animate-cyber-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-br from-blue-400/15 via-purple-600/10 to-pink-500/15 rounded-full blur-5xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-purple-400/40 to-blue-300/40 rounded-full filter blur-3xl animate-glow" />
      </div>

      {/* MOVIE TITLE EFFECT: Letters blast out from center, shimmer, then vanish */}
      <AnimatePresence mode="wait">
        {lettersVisible && (
          <motion.h1
            className="relative flex space-x-4 z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 1.3, ease: 'easeOut' } }}
            exit={{ opacity: 0 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {letters.map((letter, i) => (
              <motion.span
                key={`letter-${i}`}
                animate={controlsRef[i]}
                className="inline-block text-6xl sm:text-8xl lg:text-9xl font-black bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent font-mono select-none"
                style={{
                  minWidth: '1ch',
                  whiteSpace: 'pre',
                  position: 'relative',
                  textShadow: `0 0 32px #a1f4ff, 0 0 14px #54ffe0, 0 0 32px #21e1f8`,
                  willChange: 'filter, transform, color'
                }}
              >
                {letter}
                {/* SHIMMER/SHINE: after 500ms, over each letter */}
                <motion.span
                  initial={{ left: '-120%', opacity: 0 }}
                  animate={{
                    left: ['-120%', '160%'],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    delay: i * 0.11 + 0.47, // hits after landing
                    duration: 0.39,
                    ease: 'linear',
                    repeat: 0,
                  }}
                  style={{
                    position: 'absolute',
                    top: 0, bottom: 0,
                    width: '64%',
                    pointerEvents: 'none',
                    background:
                      'linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.5) 42%, rgba(255,255,255,0.09) 100%)',
                    filter: 'blur(0.3px) brightness(1.25)',
                    mixBlendMode: 'screen'
                  }}
                />
              </motion.span>
            ))}
          </motion.h1>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default IntroAnimation;
