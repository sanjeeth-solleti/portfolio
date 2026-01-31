import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Smartphone, Terminal } from 'lucide-react';

const Projects = () => {

  // ✅ UPDATED PROJECTS (ONLY 2 PROJECTS)
  const featuredProjects = [
    {
      id: 2,
      title: "AI-Powered Security Automation Tool (AutoSOC-L1)",
      shortDescription: "An intelligent platform that automates Level-1 SOC alert triage and incident handling.",
      fullDescription: "Designed to reduce alert fatigue by ingesting SIEM alerts, classifying threats using AI, and automatically creating incident tickets.",
      category: "Security Automation",
      technologies: ["Python", "Flask", "Wazuh", "Splunk", "Machine Learning", "REST APIs", "Jira"],
      github: "https://github.com/sanjeeth-solleti/AutoSOC-L1",
      liveDemo: null,
      featured: true,
      icon: Shield,
      iconColor: "text-neon-400",
      gradientFrom: "from-neon-500/20",
      gradientTo: "to-neon-600/20",
      borderColor: "border-neon-400/30",
      features: [
        {
          name: "Automated Alert Ingestion",
          description: "Collects and normalizes alerts from Wazuh SIEM"
        },
        {
          name: "AI Alert Classification",
          description: "Classifies and prioritizes alerts based on severity"
        },
        {
          name: "Jira Ticket Automation",
          description: "Creates incident tickets automatically for critical threats"
        }
      ]
    },

    {
      id: 3,
      title: "Automated Threat Intelligence Engine",
      shortDescription: "A modular system for automated IOC extraction and threat enrichment.",
      fullDescription: "Extracts indicators from logs, enriches them using threat intelligence sources, and generates actionable security reports.",
      category: "Threat Intelligence",
      technologies: ["Python", "Flask", "React", "Threat Intelligence APIs", "NLP", "Docker"],
      github: "https://github.com/sanjeeth-solleti/AutoThreatIntel",
      liveDemo: null,
      featured: true,
      icon: Shield,
      iconColor: "text-electric-400",
      gradientFrom: "from-electric-500/20",
      gradientTo: "to-electric-600/20",
      borderColor: "border-electric-400/30",
      features: [
        {
          name: "IOC Extraction",
          description: "Extracts IPs, URLs, domains, and hashes from logs"
        },
        {
          name: "Threat Enrichment",
          description: "Enriches indicators using multiple intelligence sources"
        },
        {
          name: "AI-Assisted Reports",
          description: "Generates concise threat analysis with recommendations"
        }
      ]
    }
  ];

  // ================= ANIMATION VARIANTS =================

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // ================= SUB COMPONENTS =================

  const ProjectFeatures = ({ features, colorClass }) => (
    <div className="mb-4">
      <h5 className={`${colorClass} font-semibold mb-3 font-mono text-sm`}>
        [INCLUDED_PROJECTS]
      </h5>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-400 text-xs sm:text-sm flex items-start">
            <span className={`${colorClass} mr-2 mt-1.5 w-1 h-1 bg-current rounded-full animate-pulse`}></span>
            <div>
              <span className="font-medium text-gray-300">{feature.name}</span>
              <span className="text-gray-500"> – {feature.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  const TechnologyTags = ({ technologies }) => (
    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
      {technologies.map((tech, idx) => (
        <span
          key={idx}
          className="px-2 sm:px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-matrix-400/50 transition-colors duration-200 font-mono"
        >
          {tech}
        </span>
      ))}
    </div>
  );

  const ProjectLinks = ({ github, liveDemo }) => (
    <div className="flex space-x-4">
      {github && (
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-matrix-400 transition-colors duration-200 font-mono text-sm"
        >
          <Github size={18} className="mr-2" />
          [VIEW_CODE]
        </motion.a>
      )}

      {liveDemo && (
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-neon-400 transition-colors duration-200 font-mono text-sm"
        >
          <ExternalLink size={18} className="mr-2" />
          [LIVE_DEMO]
        </motion.a>
      )}
    </div>
  );

  const StatusIndicators = () => (
    <div className="absolute top-4 right-4 flex space-x-2">
      <div className="w-2 h-2 bg-matrix-400 rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-neon-400 rounded-full animate-cyber-pulse"></div>
      <div className="w-2 h-2 bg-electric-400 rounded-full animate-glow"></div>
    </div>
  );

  const DecorativeElements = () => (
    <>
      <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-matrix-400/30"></div>
      <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-neon-400/20"></div>
    </>
  );

  const ProjectCard = ({ project }) => {
    const IconComponent = project.icon;

    return (
      <motion.div variants={cardVariants} whileHover={{ scale: 1.02, y: -10 }} className="group relative">
        <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300`}></div>

        <div className={`relative bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden border ${project.borderColor} hover:border-opacity-60 transition-all duration-300`}>
          
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-700/50 rounded-lg">
                  <IconComponent className={project.iconColor} size={24} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white font-mono">
                  {project.title}
                </h4>
              </div>

              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-mono ${project.iconColor} bg-gray-700/50 rounded-full`}>
                  {project.category}
                </span>
                <Terminal className="text-gray-400" size={16} />
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-300 mb-2 text-sm sm:text-base">{project.shortDescription}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{project.fullDescription}</p>
            </div>

            {project.features && (
              <ProjectFeatures features={project.features} colorClass={project.iconColor} />
            )}

            <TechnologyTags technologies={project.technologies} />
            <ProjectLinks github={project.github} liveDemo={project.liveDemo} />
          </div>

          <StatusIndicators />
          <DecorativeElements />
        </div>
      </motion.div>
    );
  };

  // ================= MAIN RETURN =================

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 bg-clip-text text-transparent font-mono">
              &lt;Featured_Projects/&gt;
            </span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-32 h-1 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/sanjeeth-solleti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border-2 border-matrix-400/50 text-matrix-400 rounded-lg hover:bg-matrix-400/10 hover:border-matrix-400 transition-all duration-300 font-mono"
          >
            <Github size={20} className="mr-2" />
            [VIEW_ALL_PROJECTS]
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
