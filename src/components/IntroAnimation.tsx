import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimationControls } from 'framer-motion';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

// Helper function to calculate the horizontal position of each letter
function getLetterX(i: number, total: number, spacing: number = 56): number {
  return (i - (total - 1) / 2) * spacing;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const [showName, setShowName] = useState(false);
  const [final, setFinal] = useState(false);

  const letters = Array.from('SANJEETH');

  // --- FIX APPLIED HERE ---
  // We use `useMemo` to create a stable array of AnimationControls.
  // This prevents the controls from being recreated on every render,
  // which was the cause of the unpredictable animation behavior in production.
  // `useAnimation()` hook should not be called in a loop or callback.
  const controls = useMemo(() => letters.map(() => new AnimationControls()), [letters.length]);

  useEffect(() => {
    let timer1: ReturnType<typeof setTimeout>;
    let timer2: ReturnType<typeof setTimeout>;

    const runSequence = async () => {
      // Set the initial state for all letters before starting the animation
      await Promise.all(
        // Use the stable `controls` array
        controls.map((ctrl) =>
          ctrl.set({
            x: 0,
            y: 40,
            z: 0,
            opacity: 0,
            scale: 0.6,
            rotateX: 20,
            filter: 'blur(8px)',
            color: '#666',
          })
        )
      );

      // Animate each letter into place sequentially
      for (let i = 0; i < letters.length; i++) {
        // Use the stable `controls` array to start the animation for each letter
        await controls[i].start({
          x: getLetterX(i, letters.length),
          y: 0,
          z: 30,
          opacity: 1,
          scale: [0.6, 1.2, 1],
          rotateX: [20, -10, 0],
          color: ['#6ee7b7', '#a78bfa', '#e0e7ff'],
          filter: ['blur(8px)', 'blur(0px)', 'blur(0px)'],
          textShadow: [
            '0 0 0 rgba(0,0,0,0)',
            '0 0 14px #a78bfa, 0 0 32px #6ee7b7, 0 0 54px #d8b4fe',
            '0 0 0 rgba(0,0,0,0)',
          ],
          transition: { duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] },
        });
        // A short delay between each letter's animation
        await new Promise((r) => setTimeout(r, 170));
      }

      // After the initial name animation, trigger the full name reveal
      timer1 = setTimeout(() => {
        setShowName(true);
        // After the full name is shown, trigger the final exit animation
        timer2 = setTimeout(() => {
          setFinal(true);
          onAnimationComplete();
        }, 3200);
      }, 1100);
    };

    runSequence();

    // Cleanup function to stop animations and clear timers when the component unmounts
    return () => {
      // Use the stable `controls` array for cleanup
      controls.forEach((c) => c.stop());
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
    // Dependency array includes the stable `controls` array
  }, [onAnimationComplete, controls, letters.length]);

  // When the animation is completely finished, render nothing.
  if (final) return null;

  return (
    <motion.div
      key="intro-animation"
      className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 1 } }}
      style={{ perspective: 1200 }}
    >
      {/* Background cinematic neon particles and floating orbs with glow */}
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
        {/* Decorative layered glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-tr from-green-400/30 via-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-br from-blue-400/15 via-purple-600/10 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-purple-400/40 to-blue-300/40 rounded-full filter blur-2xl animate-pulse" />
      </div>

      {/* Cinematic animated letters */}
      {!showName && (
        <motion.h1
          className="relative flex z-10"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              // --- FIX APPLIED HERE ---
              // Each letter is animated by its corresponding stable control
              animate={controls[i]}
              className="inline-block text-6xl sm:text-8xl lg:text-9xl font-black bg-gradient-to-r from-green-400 via-purple-500 to-blue-400 bg-clip-text text-transparent font-mono tracking-tight select-none"
              style={{ minWidth: '1ch', whiteSpace: 'pre', textShadow: '0 0 8px rgba(255,255,255,0.3)' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>
      )}

      {/* Full name cinematic reveal */}
      {showName && (
        <motion.div
          initial={{ opacity: 0, scale: 1.05, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.47, 0, 0.745, 0.715] }}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        >
          <div className="w-full flex justify-center items-center">
            <motion.span
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-green-400 via-purple-500 to-blue-400 bg-clip-text text-transparent font-mono tracking-normal select-none"
              style={{
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
