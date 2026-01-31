import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Activity } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python"],
      gradient: "from-matrix-500/20 to-matrix-600/20"
    },
    {
      title: "Tools & Platforms",
      icon: Shield,
      skills: [
        "Splunk",
        "Wazuh",
        "CrowdStrike",
        "ELK",
        "Burp Suite",
        "Nmap",
        "SQLMap",
        "Metasploit",
        "Wireshark",
        "Nessus",
        "NetSparker"
      ],
      gradient: "from-neon-500/20 to-neon-600/20"
    },
    {
      title: "SOC & Security",
      icon: Activity,
      skills: [
        "SIEM Monitoring",
        "Incident Triage",
        "Threat Detection",
        "Log Analysis",
        "Vulnerability Assessment",
        "Digital Forensics",
        "OSINT"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 text-sm bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-matrix-400/50 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
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
