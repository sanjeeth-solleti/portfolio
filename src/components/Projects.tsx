import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Github, ExternalLink, Cpu } from 'lucide-react';

const Projects = () => {
  const [activeDevice, setActiveDevice] = useState<number | null>(null);

  const projects = [
    {
      title: "AI-Powered Security Automation (AutoSOC-L1)",
      description: "Intelligent platform automating Level-1 SOC alert triage and incident handling to reduce alert fatigue.",
      features: [
        "Automated alert ingestion from Wazuh SIEM",
        "AI-powered threat classification and prioritization",
        "Automatic Jira ticket creation for critical threats"
      ],
      technologies: ["Python", "Flask", "Wazuh", "Splunk", "ML", "Jira"],
      github: "https://github.com/sanjeeth-solleti/AutoSOC-L1",
      deviceId: "MOBILE_001",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Automated Threat Intelligence Engine",
      description: "Modular system for automated IOC extraction and threat enrichment with actionable security reports.",
      features: [
        "Extracts IPs, URLs, domains, and hashes from logs",
        "Enriches indicators using multiple intelligence sources",
        "Generates AI-assisted threat analysis reports"
      ],
      technologies: ["Python", "Flask", "React", "Threat Intel APIs", "NLP", "Docker"],
      github: "https://github.com/sanjeeth-solleti/AutoThreatIntel",
      deviceId: "MOBILE_002",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-black overflow-hidden">
      {/* Digital Rain */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 font-mono text-cyan-500 text-xs"
            style={{ left: `${i * 4}%` }}
            animate={{ y: ['0vh', '100vh'] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3,
            }}
          >
            {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-cyan-500/10 border-2 border-cyan-500 rounded-lg mb-4">
            <div className="flex items-center gap-3">
              <Smartphone className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm">MOBILE_DEVICES.SYS</span>
            </div>
          </div>
          <motion.h2
            className="text-5xl md:text-6xl font-black text-cyan-400 mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}
            animate={{
              textShadow: [
                '0 0 20px rgba(6, 182, 212, 0.5)',
                '0 0 40px rgba(6, 182, 212, 0.8)',
                '0 0 20px rgba(6, 182, 212, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            PROJECT DIRECTORY
          </motion.h2>
          <p className="text-gray-400 font-mono">Accessing project repositories...</p>
        </motion.div>

        {/* Mobile Devices Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -30, z: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setActiveDevice(index)}
              onHoverEnd={() => setActiveDevice(null)}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              {/* Mobile Device Frame */}
              <div className="relative">
                {/* Device Glow */}
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0`}
                  animate={{
                    opacity: activeDevice === index ? 0.6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Device Body */}
                <div className="relative bg-black border-4 border-cyan-500/50 rounded-3xl overflow-hidden"
                  style={{
                    boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
                  }}
                >
                  {/* Device Header */}
                  <div className="bg-cyan-500/10 px-6 py-4 border-b-2 border-cyan-500/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={activeDevice === index ? { rotate: 360 } : {}}
                          transition={{ duration: 1 }}
                          className="w-8 h-8 border-2 border-cyan-500 rounded-lg flex items-center justify-center"
                        >
                          <Cpu className="w-4 h-4 text-cyan-400" />
                        </motion.div>
                        <div>
                          <div className="text-cyan-400 font-mono text-xs">{project.deviceId}</div>
                          <div className="text-gray-500 font-mono text-xs">
                            STATUS: {activeDevice === index ? 'ACCESSING' : 'STANDBY'}
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex gap-1"
                      >
                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Device Screen */}
                  <div className="p-6 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black min-h-[400px]">
                    {/* Screen Scan Effect */}
                    {activeDevice === index && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-20"
                        animate={{ y: ['0%', '400%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Orbitron', monospace" }}>
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 font-mono">{project.description}</p>

                      {/* Features */}
                      <div className="mb-4">
                        <div className="text-cyan-400 font-mono text-xs mb-2">FEATURES:</div>
                        <div className="space-y-2">
                          {project.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-2 text-gray-300 text-xs font-mono"
                            >
                              <span className="text-cyan-400">▸</span>
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="text-cyan-400 font-mono text-xs mb-2">TECH STACK:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400 text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Access Button */}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border-2 border-cyan-500 rounded-lg text-cyan-400 font-mono text-sm hover:bg-cyan-500/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>ACCESS REPO</span>
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    </div>

                    {/* Binary Background */}
                    <div className="absolute bottom-0 right-0 opacity-5 font-mono text-xs text-cyan-400 overflow-hidden">
                      {Array.from({ length: 10 }, (_, i) => (
                        <div key={i}>
                          {Array.from({ length: 50 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Device Bottom */}
                  <div className="h-6 bg-cyan-500/5 border-t-2 border-cyan-500/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/sanjeeth-solleti"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(6, 182, 212, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500/10 border-2 border-cyan-500 rounded-lg text-cyan-400 font-mono"
          >
            <Github className="w-6 h-6" />
            <span>ACCESS ALL REPOSITORIES</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default Projects;
