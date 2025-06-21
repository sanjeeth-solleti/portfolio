import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 bg-clip-text text-transparent font-mono">
              &lt;Education/&gt;
            </span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-matrix-400/30 via-neon-400/30 to-electric-400/30 rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-matrix-400/30 hover:border-matrix-400/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-shrink-0 mx-auto sm:mx-0"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-matrix-500 to-neon-600 rounded-lg flex items-center justify-center relative">
                    <GraduationCap className="text-white" size={24} />
                    <div className="absolute inset-0 bg-gradient-to-r from-matrix-400/20 to-neon-400/20 rounded-lg animate-pulse"></div>
                  </div>
                </motion.div>
                
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-mono">
                        Bachelor of Technology (B.Tech)
                      </h3>
                      <h4 className="text-lg sm:text-xl text-matrix-400 font-semibold mb-1 font-mono">
                        Computer Science and Engineering (Cyber Security)
                      </h4>
                      <p className="text-base sm:text-lg text-gray-300 font-medium">
                        Chalapathi Institute of Engineering and Technology
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="mt-4 lg:mt-0 lg:text-right"
                    >
                      <div className="flex items-center justify-center sm:justify-start lg:justify-end text-gray-400 mb-2 font-mono text-sm sm:text-base">
                        <Calendar size={16} className="mr-2" />
                        <span>Oct 2022 – Mar 2026</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start lg:justify-end text-matrix-400">
                        <Award size={16} className="mr-2" />
                        <span className="font-semibold font-mono text-sm sm:text-base">GPA: 8.33/10</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="border-t border-gray-700/50 pt-4"
                  >
                    <div className="flex items-center justify-center sm:justify-start mb-3">
                      <BookOpen className="text-neon-400 mr-2" size={16} />
                      <span className="text-neon-400 font-mono text-sm">[PROGRAM_OVERVIEW]</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                      Pursuing a specialized degree in Cybersecurity with focus on advanced security concepts, 
                      threat analysis, network security, and digital forensics. Coursework includes hands-on 
                      experience with industry-standard security tools and methodologies.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-4"
                  >
                    <div className="flex items-center justify-center sm:justify-start mb-3">
                      <div className="w-2 h-2 bg-electric-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-electric-400 font-mono text-sm">[CORE_SUBJECTS]</span>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                      {[
                        'Network Security',
                        'Cryptography',
                        'Ethical Hacking',
                        'Security Analytics',
                        'Incident Response'
                      ].map((subject, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 sm:px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-matrix-400/50 transition-colors duration-200 font-mono"
                        >
                          {subject}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-matrix-400/30"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-neon-400/30"></div>
              
              {/* Status indicators */}
              <div className="absolute top-2 right-2 flex space-x-1">
                <div className="w-1 h-1 bg-matrix-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-neon-400 rounded-full animate-cyber-pulse"></div>
                <div className="w-1 h-1 bg-electric-400 rounded-full animate-glow"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
