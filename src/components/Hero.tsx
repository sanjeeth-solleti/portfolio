import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "CyberSecurity Engineer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold"
            >
              <span className="block text-white">Hello, I'm</span>
              <motion.span 
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-300% animate-gradient"
              >
                VASAVA SANJEETH SOLLETI
              </motion.span>
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="text-2xl md:text-3xl text-slate-300 min-h-[40px] mb-4"
            >
              <span className="border-r-2 border-cyan-400 animate-pulse pr-1">
                {displayText}
              </span>
            </motion.div>
          </div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about defending digital infrastructure and hunting threats. 
            Specialized in SOC operations, incident response, and vulnerability assessment 
            with hands-on experience in enterprise security tools.
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
            >
              View My Work
            </motion.button>
            
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { icon: Github, url: "https://github.com/sanjeeth-solleti" },
              { icon: Linkedin, url: "https://www.linkedin.com/in/vasava-sanjeeth-solleti-9aa790268" },
              { icon: Mail, url: "mailto:vasavasanjeeth@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                variants={buttonVariants}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={social.url}
                target={social.icon === Mail ? undefined : "_blank"}
                rel={social.icon === Mail ? undefined : "noopener noreferrer"}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;