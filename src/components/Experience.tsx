import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Terminal, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
    title: "Cybersecurity Job Simulations – Forage",
    company: "Forage",
    location: "Remote",
    period: "June 2025",
    color: "from-matrix-500/20 to-neon-600/20",
    borderColor: "border-matrix-400/30",
    description: [
      <span key="deloitte">
        <strong>Deloitte Australia – Security Analyst:</strong> Investigated internal server logs, detected scraping activity, and recommended risk mitigation strategies.
      </span>,
      <span key="tcs">
        <strong>Tata Consultancy Services – IAM Developer:</strong> Worked on identity and access management, documented security practices, and aligned strategies with business objectives.
      </span>,
      <span key="mastercard">
        <strong>Mastercard – Security Awareness Analyst:</strong> Assisted in identifying phishing threats and analyzing organizational risk areas. Contributed to the design of targeted security training programs to strengthen employee awareness.
      </span>,
      <span key="cba">
        <strong>Commonwealth Bank – Security Analyst:</strong> Utilized Splunk to create data visualization dashboards for fraud detection. Participated in simulated incident response, including threat containment, reporting, and recovery support.
      </span>
    ],
    technologies: [
      "Log File Analysis", "IAM & RBAC", "Multi-Factor Authentication", "Phishing Detection",
      "Security Awareness", "Splunk", "Incident Response", "Data Visualization", "Access Control"
    ]
  },
  {
    title: "Cybersecurity Specialist",
    company: "Future Interns",
    location: "Remote",
    period: "June 2025 - July 2025",
    color: "from-matrix-500/20 to-neon-600/20",
    borderColor: "border-matrix-400/30",
    description: [
      "Conducted vulnerability assessment of web applications using OWASP ZAP, Burp Suite, and SQLMap; identified and reported critical issues such as XSS and SQL injection with detailed mitigation strategies.",
      "Monitored simulated SIEM alerts using ELK Stack and Splunk; performed incident classification, log analysis, and prepared incident response documentation to simulate SOC operations.",
      "Developed a secure file sharing system with AES encryption in Python Flask; ensured confidentiality and integrity of file transmission and storage, documented implementation on GitHub."
    ],
    technologies: [
      "DVWM", "BurpSuite", "Splunk", "Log Analysis",
      "Vulnerability Assessment", "Encryption", "cryptography"
    ]
  },
  {
  title: "Cyber Forensics Specialist & SOCMINT Intern",
  company: "Cyber Privilege",
  location: "Remote",
  period: "Aug 2025 - Nov 2025",
  color: "from-matrix-500/20 to-neon-600/20",
  borderColor: "border-matrix-400/30",
  description: [
    "Conducted end-to-end digital forensic investigations on compromised Windows and Linux systems, preserving evidence integrity using MD5, SHA-1, SHA-256, and SHA-512 hashing.",
    "Performed SOCMINT and OSINT investigations to identify threat actors, trace digital footprints, and validate malicious artifacts.",
    "Created legally defensible forensic reports and maintained ISO 9001:2015-compliant documentation for case handling."
  ],
  technologies: [
    "Autopsy", "FTK Imager", "Volatility", "Wireshark", "Splunk", "OSINT Framework", "Log Analysis", "Memory Forensics", "Disk Forensics", "Cryptography"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 relative">
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
              &lt;Experience/&gt;
            </span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-matrix-400 via-neon-400 to-electric-400"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={index % 2 === 0 ? cardVariants : cardVariantsRight}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-matrix-400 to-neon-400 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center"
                >
                  <Terminal size={12} className="text-gray-900" />
                </motion.div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'
                }`}>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300`}></div>
                    <div className={`relative bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 border ${exp.borderColor} hover:border-opacity-60 transition-all duration-300`}>
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white font-mono pr-2">
                            {exp.title}
                          </h3>
                          <Zap className="text-matrix-400 animate-pulse flex-shrink-0" size={16} />
                        </div>
                        <div className="flex flex-col space-y-2 text-gray-400 mb-3 text-sm sm:text-base">
                          <div className="flex items-center">
                            <ExternalLink size={16} className="mr-2 text-neon-400 flex-shrink-0" />
                            <span className="font-medium text-neon-400 font-mono">{exp.company}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2 flex-shrink-0" />
                            <span className="font-mono">{exp.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2 flex-shrink-0" />
                            <span className="font-mono">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 sm:space-y-3 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start leading-relaxed text-sm sm:text-base">
                            <span className="text-matrix-400 mr-3 mt-2 w-1 h-1 bg-matrix-400 rounded-full flex-shrink-0 animate-pulse"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-matrix-400/50 transition-colors duration-200 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-matrix-400 rounded-full animate-pulse opacity-60"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-neon-400 rounded-full animate-cyber-pulse opacity-40"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
