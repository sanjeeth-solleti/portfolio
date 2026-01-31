import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Shield, Zap } from 'lucide-react';

const Projects = () => {
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
      gradient: "from-matrix-400 to-neon-400",
      icon: Shield
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
      gradient: "from-neon-400 to-electric-400",
      icon: Zap
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative security solutions built with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-xl rounded-2xl transition duration-500`}></div>
              
              {/* Card */}
              <div className="relative h-full bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-300 flex flex-col">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${project.gradient} bg-opacity-10 rounded-xl`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-matrix-400 group-hover:to-neon-400 transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 flex-1">
                  <h4 className="text-sm font-semibold text-matrix-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-neon-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-matrix-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-matrix-400 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-neon-400 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-1.5 bg-electric-400 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/sanjeeth-solleti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-matrix-500/10 to-neon-500/10 border border-matrix-400/30 rounded-full text-white hover:border-matrix-400 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
