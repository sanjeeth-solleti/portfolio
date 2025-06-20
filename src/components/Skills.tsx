import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Shield, Search, AlertTriangle, Terminal, Zap, Bug, Eye, Lock, Activity 
} from 'lucide-react';
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiC,
  SiWireshark,
  SiMetasploit,
  SiBurpsuite,
  SiSplunk,
  SiPinetwork,
} from 'react-icons/si'; 
import { FaJava } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-matrix-400" size={24} />,
      color: "from-matrix-500/20 to-matrix-600/20",
      borderColor: "border-matrix-400/30",
      skills: [
        { name: "Python", icon: <SiPython className="text-yellow-400" size={20} />, level: 90 },
        { name: "Java", icon: <FaJava className="text-red-500" size={20} />, level: 85 },
        { name: "C", icon: <SiC className="text-blue-400" size={20} />, level: 80 },
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={20} />, level: 95 },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" size={20} />, level: 90 }
      ]
    },
    {
      title: "Security Skills",
      icon: <Shield className="text-neon-400" size={24} />,
      color: "from-neon-500/20 to-neon-600/20",
      borderColor: "border-neon-400/30",
      skills: [
        { name: "Vulnerability Assessment", icon: <Bug className="text-red-400" size={20} />, level: 88 },
        { name: "SIEM", icon: <Activity className="text-green-400" size={20} />, level: 85 },
        { name: "Incident Response", icon: <AlertTriangle className="text-warning-400" size={20} />, level: 82 },
        { name: "Log Analysis", icon: <Search className="text-neon-400" size={20} />, level: 90 },
        { name: "Malware Analysis", icon: <Eye className="text-electric-400" size={20} />, level: 78 }
      ]
    },
    {
      title: "Security Tools",
      icon: <Terminal className="text-electric-400" size={24} />,
      color: "from-electric-500/20 to-electric-600/20",
      borderColor: "border-electric-400/30",
      skills: [
        { name: "Wireshark", icon: <SiWireshark className="text-blue-400" size={20} />, level: 92 },
        { name: "Metasploit", icon: <SiMetasploit className="text-red-400" size={20} />, level: 85 },
        { name: "Nmap", icon: <SiPinetwork className="text-matrix-400" size={20} />, level: 88 },
        { name: "Burp Suite", icon: <SiBurpsuite className="text-warning-400" size={20} />, level: 80 },
        { name: "Splunk", icon: <SiSplunk className="text-electric-400" size={20} />, level: 75 }
      ]
    },
    {
      title: "Additional Skills",
      icon: <Zap className="text-warning-400" size={24} />,
      color: "from-warning-500/20 to-warning-600/20",
      borderColor: "border-warning-400/30",
      skills: [
        { name: "Manual Testing", icon: <Bug className="text-warning-400" size={20} />, level: 85 },
        { name: "Network Security", icon: <Lock className="text-neon-400" size={20} />, level: 87 },
        { name: "SQLMap", icon: <Bug className="text-red-400" size={20} />, level: 80 },
        { name: "Invicti Netsparker", icon: <Shield className="text-blue-400" size={20} />, level: 75 },
        { name: "AI-Assisted Development", icon: <Zap className="text-electric-400" size={20} />, level: 90 }
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
    <section id="skills" className="py-20 relative">
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
            <span className="bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 bg-clip-text text-transparent font-mono">
              &lt;Skills_&_Technologies/&gt;
            </span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300`}></div>
              <div className={`relative bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border ${category.borderColor} hover:border-opacity-60 transition-all duration-300`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 rounded-lg bg-gray-700/50 mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono text-center">
                    {category.title}
                  </h3>
                </div>

                <motion.div
                  variants={containerVariants}
                  className="space-y-4"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillItemVariants}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="relative"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        {skill.icon}
                        <span className="text-gray-300 font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Skill progress bar */}
                      <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                          className={`h-full bg-gradient-to-r ${category.color.replace('/20', '')} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Decorative corner elements */}
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
