import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, AlertTriangle, Lock, Zap, Eye, Bug, Activity } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Shield className="text-matrix-400" size={24} />,
      title: "Threat Defense",
      description: "Proactive security monitoring and incident response",
      color: "from-matrix-500/20 to-matrix-600/20"
    },
    {
      icon: <Search className="text-neon-400" size={24} />,
      title: "Threat Hunting",
      description: "Advanced log analysis and anomaly detection",
      color: "from-neon-500/20 to-neon-600/20"
    },
    {
      icon: <AlertTriangle className="text-warning-400" size={24} />,
      title: "SOC Operations",
      description: "24/7 security operations and incident management",
      color: "from-warning-500/20 to-warning-600/20"
    },
    {
      icon: <Lock className="text-electric-400" size={24} />,
      title: "Vulnerability Assessment",
      description: "Comprehensive security testing and risk evaluation",
      color: "from-electric-500/20 to-electric-600/20"
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

  return (
    <section id="about" className="py-20 relative">
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
              &lt;About_Me/&gt;
            </span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
          >
            {/* Profile Photo */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-matrix-500 to-neon-500 rounded-full blur opacity-75 animate-glow"></div>
                <img
                  src="/sanjeeth.jpg"
                  alt="Sanjeeth Solleti"
                  className="relative w-64 h-65 object-cover rounded-full border-4 border-gray-700 shadow-2xl shadow-matrix-500/30"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-matrix-500/20 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-matrix-400/30 via-neon-400/30 to-electric-400/30 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-lg p-8 border border-matrix-500/30 hover:border-matrix-400/50 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Activity className="text-matrix-400 animate-pulse" size={20} />
                    <span className="text-matrix-400 font-mono text-sm">STATUS: ACTIVE</span>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a dedicated cybersecurity engineer with expertise in SOC operations, 
                    threat hunting, and incident response. My passion lies in protecting digital 
                    infrastructure through proactive monitoring and advanced security analysis.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Specialized in log analysis, malware detection, and vulnerability assessment, 
                    I leverage cutting-edge security tools and methodologies to identify and 
                    neutralize threats before they impact business operations.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    With hands-on experience in enterprise security platforms like Deloitte and Tata Group, I bring practical knowledge of threat prevention, 
                    network security, and Zero Trust architecture implementation.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300`}></div>
                <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-matrix-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-gray-700/50 mr-3 group-hover:bg-gray-600/50 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white font-mono">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-matrix-400 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-neon-400 rounded-full animate-cyber-pulse opacity-40"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;