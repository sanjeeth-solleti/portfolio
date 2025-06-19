import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

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
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-white" size={32} />
                  </div>
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Bachelor of Technology (B.Tech)
                      </h3>
                      <h4 className="text-xl text-cyan-400 font-semibold mb-1">
                        Computer Science and Engineering (Cyber Security)
                      </h4>
                      <p className="text-lg text-slate-300 font-medium">
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
                      <div className="flex items-center text-slate-400 mb-2 lg:justify-end">
                        <Calendar size={16} className="mr-2" />
                        <span>Oct 2022 – Mar 2026</span>
                      </div>
                      <div className="flex items-center text-green-400 lg:justify-end">
                        <Award size={16} className="mr-2" />
                        <span className="font-semibold">GPA: 8.22/10</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="border-t border-slate-700/50 pt-4"
                  >
                    <p className="text-slate-300 leading-relaxed">
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
                    className="mt-4 flex flex-wrap gap-2"
                  >
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
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-400/20"
                      >
                        {subject}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;