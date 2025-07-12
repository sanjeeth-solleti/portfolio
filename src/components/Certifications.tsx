import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Shield, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Example Certification",
      issuer: "Certification Authority",
      date: "2024",
      image: "/certificate-example.jpg", // You can replace this with your actual certificate image
      description: "Description of the certification and what skills it validates.",
      credentialId: "CERT-123456",
      verificationUrl: "https://example.com/verify",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
      color: "from-matrix-500/20 to-neon-600/20",
      borderColor: "border-matrix-400/30",
      iconColor: "text-matrix-400"
    }
    // Add more certifications here as needed
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
    <section id="certifications" className="py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              &lt;Certifications/&gt;
            </span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300`}></div>
              <div className={`relative bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden border ${cert.borderColor} hover:border-opacity-60 transition-all duration-300`}>
                
                {/* Certificate Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.src = "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                  
                  {/* Certificate icon */}
                  <div className="absolute top-4 left-4 p-2 bg-gray-800/80 rounded-lg backdrop-blur-sm">
                    <Award className={cert.iconColor} size={20} />
                  </div>
                  
                  {/* Verification badge */}
                  <div className="absolute top-4 right-4 p-2 bg-green-500/20 rounded-lg backdrop-blur-sm">
                    <CheckCircle className="text-green-400" size={16} />
                  </div>
                </div>
                
                {/* Certificate Content */}
                <div className="p-4 sm:p-6">
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-mono">
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-between mb-2">
                      <p className={`text-base font-semibold ${cert.iconColor} font-mono`}>
                        {cert.issuer}
                      </p>
                      <div className="flex items-center text-gray-400 text-sm font-mono">
                        <Calendar size={14} className="mr-1" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  {/* Skills */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Credential Info */}
                  <div className="border-t border-gray-700/50 pt-4">
                    {cert.credentialId && (
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-2 font-mono">
                        <span>Credential ID:</span>
                        <span className="text-gray-300">{cert.credentialId}</span>
                      </div>
                    )}
                    
                    {cert.verificationUrl && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-xs ${cert.iconColor} hover:text-opacity-80 transition-colors duration-200 font-mono`}
                      >
                        <ExternalLink size={12} className="mr-1" />
                        [VERIFY_CREDENTIAL]
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-matrix-400/30"></div>
                <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-neon-400/20"></div>
                
                {/* Status indicators */}
                <div className="absolute bottom-2 left-2 flex space-x-1">
                  <div className="w-1 h-1 bg-matrix-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-neon-400 rounded-full animate-cyber-pulse"></div>
                  <div className="w-1 h-1 bg-electric-400 rounded-full animate-glow"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state message when no certifications */}
        {certifications.length === 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            className="text-center py-12"
          >
            <Shield className="text-gray-600 mx-auto mb-4" size={48} />
            <p className="text-gray-400 font-mono">
              [CERTIFICATIONS_LOADING] - Coming Soon...
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;