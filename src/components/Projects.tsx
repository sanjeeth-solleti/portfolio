import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Mini Cybersecurity Projects",
      description: "A comprehensive collection of beginner-friendly yet effective cybersecurity tools built using Python and Bash. These mini applications focus on core security principles including network monitoring, system hardening, and intrusion detection to strengthen overall security posture.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      technologies: ["Python", "Bash", "Scapy", "UFW", "Network Security"],
      github: "https://github.com",
      featured: true,
      icon: <Shield className="text-cyan-400" size={24} />,
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
      icon: <Smartphone className="text-blue-400" size={24} />,
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
    <section id="projects" className="py-20">
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
              Featured Projects
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
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    {project.title}
                  </h4>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Sub-projects for cybersecurity project */}
                  {project.subProjects && (
                    <div className="mb-4">
                      <h5 className="text-cyan-400 font-semibold mb-2">Included Projects:</h5>
                      <ul className="space-y-1">
                        {project.subProjects.map((subProject, idx) => (
                          <li key={idx} className="text-slate-400 text-sm flex items-start">
                            <span className="text-cyan-400 mr-2 mt-1.5 w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0"></span>
                            {subProject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Highlights for mobile app project */}
                  {project.highlights && (
                    <div className="mb-4">
                      <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-slate-400 text-sm flex items-start">
                            <span className="text-cyan-400 mr-2 mt-1.5 w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-cyan-400/10 text-cyan-400 rounded border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
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
            className="inline-flex items-center px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;