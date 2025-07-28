import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Smartphone, Terminal, Zap, Globe, Database } from 'lucide-react';

const Projects = () => {
  // Project data structure - easy to add new projects
  const featuredProjects = [
    {
      id: 1,
      title: "Mini Cybersecurity Projects",
      shortDescription: "A comprehensive collection of beginner-friendly yet effective cybersecurity tools built using Python and Bash.",
      fullDescription: "These mini applications focus on core security principles including network monitoring, system hardening, and intrusion detection to strengthen overall security posture.",
      category: "Security",
      technologies: ["Python", "Bash", "Scapy", "UFW", "Network Security"],
      github: "https://github.com/sanjeeth-solleti/Mini-Cyber-Security-Projects",
      liveDemo: null,
      featured: true,
      icon: Shield,
      iconColor: "text-matrix-400",
      gradientFrom: "from-matrix-500/20",
      gradientTo: "to-matrix-600/20",
      borderColor: "border-matrix-400/30",
      features: [
        {
          name: "Packet Sniffer",
          description: "Advanced network packet capture and analysis using Scapy library"
        },
        {
          name: "Firewall Rules Setup",
          description: "Automated secure firewall configuration with UFW for enhanced protection"
        },
        {
          name: "Honeypot (HoneyMonitor)",
          description: "Intelligent logging system for unauthorized access attempts on decoy services"
        }
      ]
    },
    {
      id: 2,
      title: "CampusConnect – Student Services App",
      shortDescription: "A comprehensive all-in-one mobile application that empowers students to seamlessly access their academic information.",
      fullDescription: "Features include real-time attendance tracking, examination marks, fee status, and personal profile management with secure authentication and data synchronization.",
      category: "Mobile Development",
      technologies: ["Flutter", "Firebase", "Dart", "Firebase Auth", "Realtime Database"],
      github: "https://github.com/sanjeeth-solleti/CampusConnect",
      liveDemo: null,
      featured: true,
      icon: Smartphone,
      iconColor: "text-neon-400",
      gradientFrom: "from-neon-500/20",
      gradientTo: "to-neon-600/20",
      borderColor: "border-neon-400/30",
      achievements: [
        "Designed and implemented clean, responsive UI using Flutter framework ensuring intuitive user experience across different screen sizes and devices",
        "Integrated Firebase Authentication for robust secure login system and comprehensive user data protection",
        "Established real-time synchronization between frontend and Firebase backend to deliver up-to-date academic data instantly",
        "Utilized AI prompting skills with ChatGPT to generate optimized UI code, debug complex backend logic, and significantly accelerate development timeline"
      ]
    }
    // Add more projects here easily by following the same structure
  ];

  // Animation variants
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

  // Component for rendering project features
  const ProjectFeatures = ({ features, colorClass }) => (
    <div className="mb-4">
      <h5 className={`${colorClass} font-semibold mb-3 font-mono text-sm`}>
        [INCLUDED_PROJECTS]
      </h5>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-400 text-xs sm:text-sm flex items-start">
            <span className={`${colorClass} mr-2 mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0 animate-pulse`}></span>
            <div>
              <span className="font-medium text-gray-300">{feature.name}</span>
              <span className="text-gray-500"> – {feature.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  // Component for rendering project achievements
  const ProjectAchievements = ({ achievements, colorClass }) => (
    <div className="mb-4">
      <h5 className={`${colorClass} font-semibold mb-3 font-mono text-sm`}>
        [KEY_ACHIEVEMENTS]
      </h5>
      <ul className="space-y-2">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="text-gray-400 text-xs sm:text-sm flex items-start">
            <span className={`${colorClass} mr-2 mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0 animate-pulse`}></span>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );

  // Component for rendering technology tags
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

  // Component for rendering project links
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

  // Component for rendering status indicators
  const StatusIndicators = () => (
    <div className="absolute top-4 right-4 flex space-x-2">
      <div className="w-2 h-2 bg-matrix-400 rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-neon-400 rounded-full animate-cyber-pulse"></div>
      <div className="w-2 h-2 bg-electric-400 rounded-full animate-glow"></div>
    </div>
  );

  // Component for rendering decorative elements
  const DecorativeElements = () => (
    <>
      <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-matrix-400/30"></div>
      <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-neon-400/20"></div>
    </>
  );

  // Main project card component
  const ProjectCard = ({ project, index }) => {
    const IconComponent = project.icon;
    
    return (
      <motion.div 
        variants={cardVariants}
        whileHover={{ scale: 1.02, y: -10 }}
        className="group relative"
      >
        {/* Hover glow effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300`}></div>
        
        {/* Main card container */}
        <div className={`relative bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden border ${project.borderColor} hover:border-opacity-60 transition-all duration-300`}>
          
          {/* Project image section */}
          <div className="aspect-video relative overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
            
            {/* Project icon */}
            <div className="absolute top-4 left-4 p-2 bg-gray-800/80 rounded-lg backdrop-blur-sm">
              <IconComponent className={project.iconColor} size={24} />
            </div>
            
            {/* Status indicators */}
            <StatusIndicators />
          </div>
          
          {/* Project content section */}
          <div className="p-4 sm:p-6">
            {/* Project header */}
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg sm:text-xl font-bold text-white font-mono">
                {project.title}
              </h4>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-mono ${project.iconColor} bg-gray-700/50 rounded-full`}>
                  {project.category}
                </span>
                <Terminal className="text-gray-400" size={16} />
              </div>
            </div>
            
            {/* Project description */}
            <div className="mb-4">
              <p className="text-gray-300 mb-2 leading-relaxed text-sm sm:text-base">
                {project.shortDescription}
              </p>
              <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                {project.fullDescription}
              </p>
            </div>
            
            {/* Project-specific content */}
            {project.features && (
              <ProjectFeatures 
                features={project.features} 
                colorClass={project.iconColor} 
              />
            )}
            
            {project.achievements && (
              <ProjectAchievements 
                achievements={project.achievements} 
                colorClass={project.iconColor} 
              />
            )}
            
            {/* Technology tags */}
            <TechnologyTags technologies={project.technologies} />
            
            {/* Project links */}
            <ProjectLinks github={project.github} liveDemo={project.liveDemo} />
          </div>

          {/* Decorative elements */}
          <DecorativeElements />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 bg-clip-text text-transparent font-mono">
              &lt;Featured_Projects/&gt;
            </span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 mx-auto"
          ></motion.div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View all projects button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={itemVariants}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/sanjeeth-solleti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 border-2 border-matrix-400/50 text-matrix-400 rounded-lg hover:bg-matrix-400/10 hover:border-matrix-400 transition-all duration-300 font-mono text-sm sm:text-base"
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
