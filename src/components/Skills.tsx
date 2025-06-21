import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Shield,
  Zap,
  ShieldCheck,
  Bug,
} from 'lucide-react';

import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiC,
  SiWireshark,
  SiBurpsuite,
  SiSplunk,
  SiLinux,
  SiSqlite,
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa'; // ✅ Correct import for Java

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-matrix-400" size={24} />,
      color: "from-matrix-500/20 to-matrix-600/20",
      borderColor: "border-matrix-400/30",
      skills: [
        { name: "C", icon: <SiC className="text-blue-400" size={20} /> },
        { name: "Python", icon: <SiPython className="text-yellow-400" size={20} /> },
        { name: "Java", icon: <FaJava className="text-red-500" size={20} /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={20} /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" size={20} /> }
      ]
    },
    {
      title: "Cybersecurity & Tools",
      icon: <Shield className="text-neon-400" size={24} />,
      color: "from-neon-500/20 to-neon-600/20",
      borderColor: "border-neon-400/30",
      skills: [
        { name: "Kali Linux", icon: <SiLinux className="text-gray-400" size={20} /> },
        { name: "Wireshark", icon: <SiWireshark className="text-blue-400" size={20} /> },
        { name: "Burp Suite", icon: <SiBurpsuite className="text-orange-400" size={20} /> },
        { name: "SQLMap", icon: <SiSqlite className="text-green-400" size={20} /> },
        { name: "Splunk", icon: <SiSplunk className="text-electric-400" size={20} /> }
      ]
    },
    {
      title: "Automation Tools & AI Skills",
      icon: <Zap className="text-warning-400" size={24} />,
      color: "from-warning-500/20 to-warning-600/20",
      borderColor: "border-warning-400/30",
      skills: [
        { name: "Invicti Netsparker", icon: <ShieldCheck className="text-blue-400" size={20} /> },
        { name: "Nessus", icon: <ShieldCheck className="text-purple-400" size={20} /> },
        { name: "Acunetix", icon: <Bug className="text-red-400" size={20} /> }, // Placeholder for Acunetix
        { name: "AI Prompt Engineering", icon: <Zap className="text-electric-400" size={20} /> },
        { name: "AI-Assisted Development", icon: <Zap className="text-yellow-400" size={20} /> }
      ]
    }
  ];

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
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 relative">
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
              &lt;Skills/&gt;
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300`}></div>
              <div className={`relative bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 border ${category.borderColor} hover:border-opacity-60 transition-all duration-300`}>
                <div className="flex flex-col items-center mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 rounded-lg bg-gray-700/50 mb-3">
                    {category.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-mono text-center">
                    {category.title}
                  </h3>
                </div>

                <motion.div
                  variants={containerVariants}
                  className="space-y-3 sm:space-y-4"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillItemVariants}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="relative"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Decorative dots */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-matrix-400 rounded-full animate-pulse opacity-40"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-neon-400 rounded-full animate-cyber-pulse opacity-30"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
