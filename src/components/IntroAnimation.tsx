import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HackerIntroProps {
  onAnimationComplete?: () => void;
}

const HackerIntro: React.FC<HackerIntroProps> = ({ onAnimationComplete }) => {
  const [phase, setPhase] = useState(0);
  const [hackProgress, setHackProgress] = useState(0);

  useEffect(() => {
    const timeline = [
      { delay: 500, action: () => setPhase(1) },   // Hacker enters
      { delay: 2000, action: () => setPhase(2) },  // System scan
      { delay: 3500, action: () => setPhase(3) },  // Hacking sequence
      { delay: 5500, action: () => setPhase(4) },  // Name reveal
      { delay: 7000, action: () => setPhase(5) },  // Access granted
      { delay: 8500, action: () => onAnimationComplete?.() },
    ];

    const timers = timeline.map(({ delay, action }) => setTimeout(action, delay));
    return () => timers.forEach(clearTimeout);
  }, [onAnimationComplete]);

  useEffect(() => {
    if (phase === 3) {
      const interval = setInterval(() => {
        setHackProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [phase]);

  const matrixCode = Array.from({ length: 20 }, () => 
    Array.from({ length: 30 }, () => 
      Math.random() > 0.5 ? String.fromCharCode(0x30A0 + Math.random() * 96) : Math.random().toString(36)[2]
    ).join('')
  );

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 text-green-500 font-mono text-sm"
            style={{ left: `${i * 2}%` }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          >
            {matrixCode[i % matrixCode.length]}
          </motion.div>
        ))}
      </div>

      {/* Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 65, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(60deg) translateY(50%)',
          }}
          animate={{
            backgroundPositionY: ['0px', '50px'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-6xl w-full">
          
          {/* Phase 1: Hacker Character Enters */}
          <AnimatePresence>
            {phase >= 1 && (
              <motion.div
                initial={{ x: -200, opacity: 0, rotateY: -45 }}
                animate={{ x: 0, opacity: 1, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute left-8 bottom-24 md:left-16"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  {/* Hacker Avatar */}
                  <div className="relative w-32 h-32 md:w-48 md:h-48">
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-50"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Character Circle */}
                    <div className="relative w-full h-full bg-gradient-to-br from-green-400 to-emerald-600 rounded-full border-4 border-green-500 flex items-center justify-center shadow-2xl overflow-hidden">
                      <div className="text-6xl md:text-8xl">🥷</div>
                      
                      {/* Scanning Line */}
                      {phase >= 2 && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/50 to-transparent"
                          animate={{ y: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </div>

                    {/* Code Particles around character */}
                    {phase >= 1 && [...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-green-500 font-mono text-xs"
                        style={{
                          left: `${50 + Math.cos((i * Math.PI) / 6) * 120}%`,
                          top: `${50 + Math.sin((i * Math.PI) / 6) * 120}%`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.5, 1, 0.5],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      >
                        {['01', '10', 'FF', 'A0', 'C3'][i % 5]}
                      </motion.div>
                    ))}
                  </div>

                  {/* Typing Status */}
                  {phase >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                    >
                      <div className="px-4 py-2 bg-black/80 border-2 border-green-500 rounded-lg">
                        <span className="text-green-400 font-mono text-sm">
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                          >
                            █
                          </motion.span>
                          {' '}INITIALIZING...
                        </span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 2 & 3: System Scan & Hacking */}
          <AnimatePresence>
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center space-y-8"
              >
                {/* Terminal Window */}
                <motion.div
                  initial={{ y: -50, rotateX: -20 }}
                  animate={{ y: 0, rotateX: 0 }}
                  className="w-full max-w-3xl bg-black/90 border-4 border-green-500 rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    boxShadow: '0 0 50px rgba(34, 197, 94, 0.5)',
                  }}
                >
                  {/* Terminal Header */}
                  <div className="bg-green-500/20 px-4 py-3 border-b-2 border-green-500 flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-green-400 font-mono text-sm ml-4">
                      root@sanjeeth-systems:~#
                    </span>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-6 font-mono text-sm space-y-2 h-64 overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-green-400"
                    >
                      {'>'} Scanning systems...
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-cyan-400"
                    >
                      {'>'} Target identified: PORTFOLIO.SYS
                    </motion.div>
                    {phase >= 3 && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-yellow-400"
                        >
                          {'>'} Initiating breach protocol...
                        </motion.div>
                        
                        {/* Progress Bar */}
                        <div className="mt-4">
                          <div className="flex items-center gap-4">
                            <span className="text-green-400">HACKING:</span>
                            <div className="flex-1 h-6 bg-black border-2 border-green-500 rounded overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 relative overflow-hidden"
                                style={{ width: `${hackProgress}%` }}
                              >
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                  animate={{ x: ['-100%', '200%'] }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                              </motion.div>
                            </div>
                            <span className="text-green-400 font-bold w-12">{hackProgress}%</span>
                          </div>
                        </div>

                        {/* Scrolling Code */}
                        <div className="mt-4 space-y-1 opacity-50">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ 
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity 
                              }}
                              className="text-green-500 text-xs"
                            >
                              {`0x${Math.random().toString(16).substr(2, 8)} >> ${['BYPASS', 'DECRYPT', 'INJECT', 'EXPLOIT'][i % 4]}`}
                            </motion.div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 4: Name Reveal */}
          <AnimatePresence>
            {phase >= 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center">
                  {/* Glitch Effect Name */}
                  <motion.div
                    className="relative"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(34, 197, 94, 0.8)",
                        "0 0 30px rgba(34, 197, 94, 1)",
                        "0 0 10px rgba(34, 197, 94, 0.8)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-green-400 mb-6" style={{ fontFamily: "'Orbitron', monospace" }}>
                      SANJEETH
                    </h1>
                    
                    {/* Glitch Layers */}
                    <motion.h1
                      className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black text-red-500 opacity-70"
                      animate={{
                        x: [-2, 2, -2],
                        opacity: [0, 0.7, 0],
                      }}
                      transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
                      style={{ fontFamily: "'Orbitron', monospace" }}
                    >
                      SANJEETH
                    </motion.h1>
                    <motion.h1
                      className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black text-cyan-500 opacity-70"
                      animate={{
                        x: [2, -2, 2],
                        opacity: [0, 0.7, 0],
                      }}
                      transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2, delay: 0.1 }}
                      style={{ fontFamily: "'Orbitron', monospace" }}
                    >
                      SANJEETH
                    </motion.h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-block px-8 py-4 bg-black/80 border-2 border-green-500 rounded-lg"
                  >
                    <h2 className="text-2xl md:text-3xl text-green-400 font-mono">
                      CYBERSECURITY OPERATOR
                    </h2>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 5: Access Granted */}
          <AnimatePresence>
            {phase >= 5 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <div className="text-8xl md:text-9xl mb-4">✓</div>
                  <motion.h2
                    className="text-4xl md:text-6xl font-black text-green-400"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(34, 197, 94, 0.8)",
                        "0 0 40px rgba(34, 197, 94, 1)",
                        "0 0 20px rgba(34, 197, 94, 0.8)",
                      ],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{ fontFamily: "'Orbitron', monospace" }}
                  >
                    ACCESS GRANTED
                  </motion.h2>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)',
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap');
      `}</style>
    </div>
  );
};

export default HackerIntro;
