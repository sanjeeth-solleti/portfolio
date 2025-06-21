import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const fullText = "CyberSecurity Engineer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev: string) => prev + fullText[currentIndex]);
        setCurrentIndex((prev: number) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `${Math.random() > 0.5 ? '#22c55e' : Math.random() > 0.5 ? '#22d3ee' : '#d946ef'}`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-matrix-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-neon-500/10 rounded-full blur-3xl animate-cyber-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-electric-500/30 rounded-full blur-2xl animate-glow"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6 sm:space-y-8"
        >
          <div className="space-y-4 sm:space-y-6">
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold"
            >
              <span className="block text-gray-100 mb-2">Hello, I'm</span>
              <motion.span 
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                className="block bg-gradient-to-r from-matrix-400 via-neon-400 via-electric-400 to-matrix-500 bg-clip-text text-transparent bg-300% font-mono tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-5xl"
              >
                VASAVA SANJEETH SOLLETI
              </motion.span>
            </motion.h1>

            <motion.div 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 min-h-[30px] sm:min-h-[40px] mb-4 sm:mb-6"
            >
              <div className="flex items-center justify-center space-x-2">
                <span className="text-matrix-400 font-mono"></span>
                <span className="border-r-2 border-matrix-400 animate-pulse pr-1 font-mono">
                  {displayText}
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 rounded-lg blur opacity-30"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-matrix-500/30">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                <span className="text-matrix-400 font-mono">[MISSION]</span> Passionate about defending digital infrastructure and hunting threats. 
                Specialized in SOC operations, incident response, and vulnerability assessment 
                with hands-on experience in enterprise security tools.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 pt-4"
          >
            {['Threat Hunter', 'SOC Analyst', 'Incident Responder', 'Security Engineer'].map((role, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-matrix-500/20 to-neon-500/20 border border-matrix-400/30 rounded-full text-matrix-400 font-mono text-xs sm:text-sm hover:border-matrix-400/60 transition-all duration-300"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-matrix-400 transition-colors duration-300 p-2 rounded-full hover:bg-matrix-400/10"
          >
            <ChevronDown size={24} className="sm:w-8 sm:h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;