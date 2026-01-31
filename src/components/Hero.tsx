import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const fullText = "Cybersecurity Engineer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev: string) => prev + fullText[currentIndex]);
        setCurrentIndex((prev: number) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-matrix-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-neon-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-electric-500/10 to-transparent rounded-full blur-3xl"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-matrix-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-matrix-500/10 to-neon-500/10 border border-matrix-400/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-matrix-400" />
            <span className="text-sm text-gray-300 font-medium">Available for Opportunities</span>
          </motion.div>

          {/* Name */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                <span className="block text-white mb-2">
                  Vasava Sanjeeth
                </span>
                <span className="block bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 bg-clip-text text-transparent">
                  Solleti
                </span>
              </h1>
            </motion.div>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light"
            >
              <span className="inline-block border-r-2 border-matrix-400 pr-2 animate-pulse">
                {displayText}
              </span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Specialized in <span className="text-matrix-400 font-semibold">SOC operations</span>, <span className="text-neon-400 font-semibold">threat hunting</span>, and <span className="text-electric-400 font-semibold">incident response</span> with hands-on experience in enterprise security tools.
          </motion.p>

          {/* Expertise Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3 pt-4"
          >
            {['Security Analyst', 'Threat Hunter', 'SOC Engineer', 'Incident Responder'].map((tag, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-sm text-gray-300 hover:border-matrix-400/50 transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={scrollToNext}
            className="mt-12 inline-flex flex-col items-center gap-2 text-gray-400 hover:text-matrix-400 transition-colors cursor-pointer group"
          >
            <span className="text-sm font-medium">Explore More</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
