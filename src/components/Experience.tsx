import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Cyber Forensics Specialist & SOCMINT Intern",
      company: "Cyber Privilege",
      location: "Remote",
      period: "Aug 2025 - Nov 2025",
      description: [
        "Conducted end-to-end digital forensic investigations on compromised Windows and Linux systems",
        "Performed SOCMINT and OSINT investigations to identify threat actors and trace digital footprints",
        "Created legally defensible forensic reports with ISO 9001:2015-compliant documentation"
      ],
      technologies: ["Autopsy", "FTK Imager", "Volatility", "Wireshark", "Splunk", "Memory Forensics"],
      color: "from-matrix-400 to-neon-400"
    },
    {
      title: "Cybersecurity Specialist",
      company: "Future Interns",
      location: "Remote",
      period: "June 2025 - July 2025",
      description: [
        "Conducted vulnerability assessments using OWASP ZAP, Burp Suite, and SQLMap",
        "Monitored SIEM alerts using ELK Stack and Splunk for incident classification",
        "Developed secure file sharing system with AES encryption in Python Flask"
      ],
      technologies: ["DVWA", "BurpSuite", "Splunk", "Python", "Flask", "Cryptography"],
      color: "from-neon-400 to-electric-400"
    },
    {
      title: "Security Job Simulations",
      company: "Forage",
      location: "Remote",
      period: "June 2025",
      description: [
        "Deloitte Australia: Investigated server logs and detected scraping activity",
        "TCS: Worked on identity and access management and security documentation",
        "Mastercard: Identified phishing threats and designed security awareness programs",
        "Commonwealth Bank: Created Splunk dashboards for fraud detection"
      ],
      technologies: ["Log Analysis", "IAM", "Splunk", "Incident Response", "Security Awareness"],
      color: "from-electric-400 to-matrix-400"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
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
              Professional Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hands-on experience in cybersecurity operations and threat analysis
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-matrix-400 via-neon-400 to-electric-400"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-matrix-400 to-neon-400 rounded-full border-4 border-gray-900 z-10 shadow-lg shadow-matrix-400/50"></div>

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative"
                  >
                    {/* Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 blur rounded-2xl transition duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-matrix-400 transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-neon-400 font-semibold mb-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-matrix-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-matrix-400/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-matrix-400/50 rounded-full group-hover:animate-pulse"></div>
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
