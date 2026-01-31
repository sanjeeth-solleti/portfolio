import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Activity, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python"],
      color: "from-blue-500 to-cyan-500",
      deviceId: "CONSOLE_001"
    },
    {
      title: "Tools & Platforms",
      icon: Shield,
      skills: [
        "Splunk", "Wazuh", "CrowdStrike", "ELK", "Burp Suite",
        "Nmap", "SQLMap", "Metasploit", "Wireshark", "Nessus", "NetSparker"
      ],
      color: "from-purple-500 to-pink-500",
      deviceId: "CONSOLE_002"
    },
    {
      title: "SOC & Security",
      icon: Activity,
      skills: [
        "SIEM Monitoring", "Incident Triage", "Threat Detection",
        "Log Analysis", "Vulnerability Assessment", "Digital Forensics", "OSINT"
      ],
      color: "from-orange-500 to-red-500",
      deviceId: "CONSOLE_003"
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 font-mono text-green-500 text-xs"
            style={{ left: `${i * 3.33}%` }}
            animate={{ y: ['0vh', '100vh'] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "linear", delay: Math.random() * 3 }}
          >
            {Array.from({ length: 20 }, () => Math.random().toString(36)[2]).join('')}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-green-500/10 border-2 border-green-500 rounded-lg mb-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-mono text-sm">SECURITY_CONSOLE.SYS</span>
            </div>
          </div>
          <motion.h2
            className="text-5xl md:text-6xl font-black text-green-400 mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}
            animate={{ textShadow: ['0 0 20px rgba(34, 197, 94, 0.5)', '0 0 40px rgba(34, 197, 94, 0.8)', '0 0 20px rgba(34, 197, 94, 0.5)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SKILL MATRIX
          </motion.h2>
          <p className="text-gray-400 font-mono">Loading capabilities...</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              <div className="relative bg-black border-2 border-green-500/30 rounded-xl overflow-hidden">
                <div className="bg-green-500/10 px-4 py-3 border-b-2 border-green-500/30">
                  <div className="flex items-center gap-3">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                      <category.icon className="w-6 h-6 text-green-400" />
                    </motion.div>
                    <div>
                      <div className="text-green-400 font-mono text-sm">{category.title}</div>
                      <div className="text-gray-500 font-mono text-xs">{category.deviceId}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.05 }}
                        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)' }}
                        className="px-3 py-2 bg-green-500/10 border border-green-500/30 rounded-md text-green-400 font-mono text-xs cursor-pointer"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent h-full"
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default Skills;
