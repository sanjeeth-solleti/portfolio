import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Zap } from 'lucide-react';
import {
  SiPython, SiHtml5, SiCss3, SiC, SiWireshark,
  SiBurpsuite, SiSplunk, SiLinux, SiSqlite
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C", icon: SiC, color: "text-blue-400", level: 85 },
        { name: "Python", icon: SiPython, color: "text-yellow-400", level: 90 },
        { name: "Java", icon: FaJava, color: "text-red-500", level: 80 },
        { name: "HTML", icon: SiHtml5, color: "text-orange-500", level: 85 },
        { name: "CSS", icon: SiCss3, color: "text-blue-500", level: 80 }
      ],
      gradient: "from-matrix-500/20 to-matrix-600/20"
    },
    {
      title: "Cybersecurity Tools",
      icon: Shield,
      skills: [
        { name: "Kali Linux", icon: SiLinux, color: "text-gray-300", level: 90 },
        { name: "Wireshark", icon: SiWireshark, color: "text-blue-400", level: 85 },
        { name: "Burp Suite", icon: SiBurpsuite, color: "text-orange-400", level: 85 },
        { name: "SQLMap", icon: SiSqlite, color: "text-green-400", level: 80 },
        { name: "Splunk", icon: SiSplunk, color: "text-neon-400", level: 88 }
      ],
      gradient: "from-neon-500/20 to-neon-600/20"
    },
    {
      title: "Security & Automation",
      icon: Zap,
      skills: [
        { name: "Nessus", level: 85 },
        { name: "Acunetix", level: 82 },
        { name: "Invicti", level: 80 },
        { name: "AI Prompting", level: 90 },
        { name: "SIEM Analysis", level: 88 }
      ],
      gradient: "from-electric-500/20 to-electric-600/20"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for defending digital infrastructure and hunting threats
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300`}></div>
              
              {/* Card */}
              <div className="relative h-full bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {skill.icon && <skill.icon className={`w-5 h-5 ${skill.color || 'text-gray-400'}`} />}
                          <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        </div>
                        {skill.level && (
                          <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                        )}
                      </div>
                      
                      {/* Progress Bar */}
                      {skill.level && (
                        <div className="h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                            className="h-full bg-gradient-to-r from-matrix-400 to-neon-400 rounded-full"
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-matrix-400/50 rounded-full group-hover:animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
