import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Smartphone, Terminal, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Mini Cybersecurity Projects",
      description: "A comprehensive collection of beginner-friendly yet effective cybersecurity tools built using Python and Bash. These mini applications focus on core security principles including network monitoring, system hardening, and intrusion detection to strengthen overall security posture.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      technologies: ["Python", "Bash", "Scapy", "UFW", "Network Security"],
      github: "https://github.com",
      featured: true,
      icon: <Shield className="text-matrix-400" size={24} />,
      color: "from-matrix-500/20 to-matrix-600/20",
      borderColor: "border-matrix-400/30",
      subProjects: [
        "Packet Sniffer – Advanced network packet capture and analysis using Scapy library",
        "Firewall Rules Setup – Automated secure firewall configuration with UFW for enhanced protection", 
        "Honeypot (HoneyMonitor) – Intelligent logging system for unauthorized access attempts on decoy services"
      ]
    },
    {
      title: "CampusConnect – Student Services App",
      description: "A comprehensive all-in-one mobile application that empowers students to seamlessly access their academic information including real-time attendance tracking, examination marks, fee status, and personal profile management with secure authentication and data synchronization.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      technologies: ["Flutter", "Firebase", "Dart", "Firebase Auth", "Realtime Database"],
      github: "https://github.com",
      featured: true,
      icon: <Smartphone className="text-neon-400" size={24} />,
      color: "from-neon-500/20 to-neon-600/20",
      borderColor: "border-neon-400/30",
      highlights: [
        "Designed and implemented clean, responsive UI using Flutter framework ensuring intuitive user experience across different screen sizes and devices",
        "Integrated Firebase Authentication for robust secure login system and comprehensive user data protection",
        "Established real-time synchronization between frontend and Firebase backend to deliver up-to-date academic data instantly",
        "Utilized AI prompting skills with ChatGPT to generate optimized UI code, debug complex backend logic, and significantly accelerate development timeline"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
    <section id="projects" className="py-20 relative">
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
              &lt;Featured_Projects/&gt;
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
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300`}></div>
              <div className={`relative bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden border ${project.borderColor} hover:border-opacity-60 transition-all duration-300`}>
                <div className="aspect-video relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-2 bg-gray-800/80 rounded-lg backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="w-2 h-2 bg-matrix-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-neon-400 rounded-full animate-cyber-pulse"></div>
                    <div className="w-2 h-2 bg-electric-400 rounded-full animate-glow"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-white font-mono">
                      {project.title}
                    </h4>
                    <Terminal className="text-gray-400" size={16} />
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Sub-projects for cybersecurity project */}
                  {project.subProjects && (
                    <div className="mb-4">
                      <h5 className="text-matrix-400 font-semibold mb-2 font-mono text-sm">
                        [INCLUDED_PROJECTS]
                      </h5>
                      <ul className="space-y-2">
                        {project.subProjects.map((subProject, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start">
                            <span className="text-matrix-400 mr-2 mt-1.5 w-1 h-1 bg-matrix-400 rounded-full flex-shrink-0 animate-pulse"></span>
                            {subProject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Highlights for mobile app project */}
                  {project.highlights && (
                    <div className="mb-4">
                      <h5 className="text-neon-400 font-semibold mb-2 font-mono text-sm">
                        [KEY_ACHIEVEMENTS]
                      </h5>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start">
                            <span className="text-neon-400 mr-2 mt-1.5 w-1 h-1 bg-neon-400 rounded-full flex-shrink-0 animate-pulse"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-matrix-400/50 transition-colors duration-200 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-matrix-400 transition-colors duration-200 font-mono text-sm"
                    >
                      <Github size={18} className="mr-2" />
                      [VIEW_CODE]
                    </motion.a>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-matrix-400/30"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
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