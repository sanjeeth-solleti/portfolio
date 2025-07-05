import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Transform values based on scroll progress
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.6, 0.4, 0.2]);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.3, 0.6, 1],
            [
              'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #000000 100%)',
              'linear-gradient(225deg, #1e293b 0%, #0f172a 50%, #1a1a2e 100%)',
              'linear-gradient(315deg, #000000 0%, #1a1a2e 50%, #0f172a 100%)',
              'linear-gradient(45deg, #1a1a2e 0%, #000000 50%, #0f172a 100%)'
            ]
          )
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 0.5
          }}
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${15 + (i * 10)}%`,
            x: useTransform(scrollYProgress, [0, 1], [0, (i % 2 === 0 ? 100 : -100)]),
            y: useTransform(scrollYProgress, [0, 1], [0, (i % 3 === 0 ? -50 : 50)]),
            rotate: rotateX
          }}
        >
          <div className={`w-16 h-16 border-2 ${
            i % 3 === 0 ? 'border-matrix-400/20 bg-matrix-400/5' :
            i % 3 === 1 ? 'border-neon-400/20 bg-neon-400/5' :
            'border-electric-400/20 bg-electric-400/5'
          } ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg rotate-45'} backdrop-blur-sm`} />
        </motion.div>
      ))}

      {/* Enhanced matrix rain effect */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-matrix-400 to-transparent"
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: ['-100vh', '100vh'],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 20,
              ease: 'linear'
            }}
            style={{
              left: `${Math.random() * 100}%`,
              height: '200px',
              x: useTransform(scrollYProgress, [0, 1], [0, Math.random() * 50 - 25])
            }}
          />
        ))}
      </div>

      {/* Parallax particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 3 === 0 ? '#4ade80' : i % 3 === 1 ? '#22d3ee' : '#e879f9',
              x: useTransform(scrollYProgress, [0, 1], [0, (mousePosition.x - 50) * (i % 3)]),
              y: useTransform(scrollYProgress, [0, 1], [0, (mousePosition.y - 50) * (i % 2)]),
              scale: scale,
              opacity: opacity
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Scroll-responsive grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          x: useTransform(scrollYProgress, [0, 1], [0, -20]),
          y: useTransform(scrollYProgress, [0, 1], [0, -20]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2])
        }}
      />

      {/* Dynamic light beams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`beam-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: '-10%',
            width: '2px',
            height: '120%',
            background: `linear-gradient(to bottom, transparent, ${
              i === 0 ? '#4ade80' : i === 1 ? '#22d3ee' : '#e879f9'
            }40, transparent)`,
            rotate: useTransform(scrollYProgress, [0, 1], [0, 15 * (i + 1)]),
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.6, 0.3, 0])
          }}
          animate={{
            scaleY: [0.5, 1.2, 0.5],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}

      {/* Scroll-triggered energy waves */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(34, 197, 94, 0.1) 0%, 
            rgba(34, 211, 238, 0.05) 25%, 
            transparent 50%)`,
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1.5]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.4, 0.2, 0])
        }}
      />

      {/* Cyberpunk-style scan lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(34, 197, 94, 0.03) 2px,
            rgba(34, 197, 94, 0.03) 4px
          )`,
          y: useTransform(scrollYProgress, [0, 1], [0, -100])
        }}
      />

      {/* Floating code fragments */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-matrix-400/20 font-mono text-xs select-none"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + i * 12}%`,
            x: useTransform(scrollYProgress, [0, 1], [0, (i % 2 === 0 ? 50 : -50)]),
            y: useTransform(scrollYProgress, [0, 1], [0, (i % 3 === 0 ? -30 : 30)]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, (i % 2 === 0 ? 10 : -10)])
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.8
          }}
        >
          {['def secure()', 'if threat:', 'encrypt()', 'scan()', 'protect()', 'analyze()'][i]}
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollAnimatedBackground;