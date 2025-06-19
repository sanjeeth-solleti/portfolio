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
      skills: [
        { name: "Python", icon: <SiPython className="text-yellow-400" size={20} /> },
        { name: "Java", icon: <FaJava className="text-red-500" size={20} /> },
        { name: "C", icon: <SiC className="text-blue-400" size={20} /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={20} /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" size={20} /> }
      ]
    },
    {
      title: "Security Skills",
      skills: [
        { name: "Vulnerability Assessment", icon: <Bug className="text-red-400" size={20} /> },
        { name: "SIEM", icon: <Activity className="text-green-400" size={20} /> },
        { name: "Incident Response", icon: <AlertTriangle className="text-yellow-400" size={20} /> },
        { name: "Log Analysis", icon: <Search className="text-cyan-400" size={20} /> },
        { name: "Malware Analysis", icon: <Eye className="text-purple-400" size={20} /> }
      ]
    },
    {
      title: "Security Tools",
      skills: [
        { name: "Wireshark", icon: <SiWireshark className="text-blue-400" size={20} /> },
        { name: "Metasploit", icon: <SiMetasploit className="text-red-400" size={20} /> },
        { name: "Nmap", icon: <SiPinetwork className="text-green-400" size={20} /> },
        { name: "Burp Suite", icon: <SiBurpsuite className="text-orange-400" size={20} /> },
        { name: "Splunk", icon: <SiSplunk className="text-purple-400" size={20} /> }
      ]
    },
    {
      title: "Additional Skills",
      skills: [
        { name: "Manual Testing", icon: <Bug className="text-yellow-400" size={20} /> },
        { name: "Network Security", icon: <Lock className="text-cyan-400" size={20} /> },
        { name: "SQLMap", icon: <Bug className="text-red-400" size={20} /> },
        { name: "Invicti Netsparker", icon: <Shield className="text-blue-400" size={20} /> },
        { name: "AI-Assisted Development", icon: <Zap className="text-purple-400" size={20} /> }
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
    <section id="skills" className="py-20">
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
              Skills & Technologies
            </span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
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
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    {category.title}
                  </h3>

                  <motion.div
                    variants={containerVariants}
                    className="space-y-4"
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillItemVariants}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200"
                      >
                        {skill.icon}
                        <span className="text-slate-300 font-medium">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;