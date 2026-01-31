import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Wifi, Shield, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  const [isHacked, setIsHacked] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsHacked(true), 1000);
    
    const lines = [
      '> Accessing main server...',
      '> Authentication: BYPASSED',
      '> Loading user profile...',
      '> PROFILE LOADED: SANJEETH.EXE',
    ];

    lines.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
      }, 500 + index * 400);
    });

    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center px-4">
      {/* Matrix Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 font-mono text-green-500 opacity-20 text-sm"
            style={{ left: `${i * 3.33}%` }}
            animate={{
              y: ['0vh', '100vh'],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {Array.from({ length: 30 }, () => Math.random().toString(36)[2]).join('')}
          </motion.div>
        ))}
      </div>

      {/* 3D Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 overflow-hidden opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(34, 197, 94, 0.3) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 2px, transparent 2px)
            `,
            backgroundSize: '80px 80px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center bottom',
          }}
          animate={{
            backgroundPositionY: ['0px', '80px'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto w-full"
        style={{ y, opacity }}
      >
        {/* Main Server Container */}
        <motion.div
          initial={{ rotateY: -30, opacity: 0, scale: 0.8 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative"
          style={{ perspective: '2000px' }}
        >
          {/* Server Frame */}
          <div className="relative bg-black/80 backdrop-blur-xl border-4 border-green-500 rounded-2xl p-8 md:p-12 overflow-hidden"
            style={{
              boxShadow: '0 0 60px rgba(34, 197, 94, 0.4), inset 0 0 60px rgba(34, 197, 94, 0.1)',
            }}
          >
            {/* Corner Indicators */}
            {[['-top-4 -left-4'], ['-top-4 -right-4'], ['-bottom-4 -left-4'], ['-bottom-4 -right-4']].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute w-8 h-8 ${pos[0]}`}
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(34, 197, 94, 0.5)',
                    '0 0 20px rgba(34, 197, 94, 1)',
                    '0 0 10px rgba(34, 197, 94, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              >
                <div className="w-full h-full border-4 border-green-500 rounded-sm" />
              </motion.div>
            ))}

            {/* Scanning Line */}
            <motion.div
              className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"
              animate={{
                y: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Header - System Status */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-green-500/30">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-green-500 rounded-full flex items-center justify-center"
                >
                  <Shield className="w-6 h-6 text-green-400" />
                </motion.div>
                <div>
                  <div className="text-green-400 font-mono text-sm">SYSTEM ID: MAIN_SERVER_01</div>
                  <div className="text-gray-500 font-mono text-xs">STATUS: ACCESSED</div>
                </div>
              </div>
              <div className="flex gap-2">
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <Wifi className="w-5 h-5 text-green-400" />
              </div>
            </div>

            {/* Terminal Output */}
            <div className="mb-8 bg-black/60 border-2 border-green-500/30 rounded-lg p-4 font-mono text-sm">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-green-400 mb-1"
                >
                  {line}
                </motion.div>
              ))}
              {isHacked && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-green-400"
                >
                  █
                </motion.span>
              )}
            </div>

            {/* Main Content */}
            <div className="text-center space-y-6">
              {/* Name Display */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-black mb-4"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(34, 197, 94, 0.5)',
                      '0 0 40px rgba(34, 197, 94, 0.8)',
                      '0 0 20px rgba(34, 197, 94, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white">VASAVA SANJEETH</span>
                  <br />
                  <span className="text-green-400">SOLLETI</span>
                </motion.h1>
              </motion.div>

              {/* Role Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, type: "spring", stiffness: 200 }}
                className="inline-block"
              >
                <div className="px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400 rounded-lg relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative flex items-center gap-3">
                    <Terminal className="w-6 h-6 text-green-400" />
                    <span className="text-2xl md:text-3xl font-bold text-green-400" style={{ fontFamily: "'Orbitron', monospace" }}>
                      CYBERSECURITY ENGINEER
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
              >
                {[
                  { label: 'SOC Operations', icon: '🛡️' },
                  { label: 'Threat Hunting', icon: '🎯' },
                  { label: 'Incident Response', icon: '🚨' },
                  { label: 'Security Analysis', icon: '🔍' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.7 + i * 0.1, type: "spring" }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(34, 197, 94, 0.6)',
                    }}
                    className="bg-black/60 border-2 border-green-500/30 rounded-lg p-4 cursor-pointer"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-green-400 font-mono text-sm">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Access Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="flex items-center justify-center gap-4 pt-6"
              >
                <Lock className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-mono">
                  SECURITY CLEARANCE: <span className="text-white font-bold">GRANTED</span>
                </span>
              </motion.div>
            </div>

            {/* Data Streams */}
            <div className="absolute top-0 left-0 right-0 h-full pointer-events-none opacity-20">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-px bg-green-400"
                  style={{ top: `${20 + i * 15}%` }}
                  animate={{
                    width: ['0%', '100%', '0%'],
                    left: ['0%', '0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          onClick={scrollToNext}
          className="flex justify-center mt-12 cursor-pointer"
        >
          <div className="text-center">
            <div className="text-green-400 font-mono text-sm mb-2">PROCEED TO NEXT SYSTEM</div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-green-400 text-4xl"
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)',
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default Hero;
