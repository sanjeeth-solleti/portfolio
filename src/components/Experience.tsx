import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, HardDrive, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [hackedDevices, setHackedDevices] = useState<number[]>([]);

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
      deviceId: "DB_001"
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
      deviceId: "DB_002"
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
      deviceId: "DB_003"
    }
  ];

  const hackDevice = (index: number) => {
    if (!hackedDevices.includes(index)) {
      setHackedDevices([...hackedDevices, index]);
    }
  };

  return (
    <section id="experience" className="py-20 relative bg-black overflow-hidden">
      {/* Matrix Rain */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 font-mono text-green-500 text-xs"
            style={{ left: `${i * 5}%` }}
            animate={{ y: ['0vh', '100vh'] }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3,
            }}
          >
            {Array.from({ length: 20 }, () => Math.random().toString(36)[2]).join('')}
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
          <div className="inline-block px-6 py-3 bg-green-500/10 border-2 border-green-500 rounded-lg mb-4">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-mono text-sm">DATABASE_SERVER.SYS</span>
            </div>
          </div>
          <motion.h2
            className="text-5xl md:text-6xl font-black text-green-400 mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}
            animate={{
              textShadow: [
                '0 0 20px rgba(34, 197, 94, 0.5)',
                '0 0 40px rgba(34, 197, 94, 0.8)',
                '0 0 20px rgba(34, 197, 94, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            EXPERIENCE RECORDS
          </motion.h2>
          <p className="text-gray-400 font-mono">Accessing professional timeline...</p>
        </motion.div>

        {/* Database Entries */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onViewportEnter={() => hackDevice(index)}
              className="relative"
            >
              {/* Device Container */}
              <div className="relative bg-black/60 backdrop-blur-xl border-2 border-green-500/30 rounded-xl overflow-hidden">
                {/* Hacking Progress Bar */}
                {hackedDevices.includes(index) && (
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2 }}
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400 z-10"
                  />
                )}

                {/* Device Header */}
                <div className="bg-green-500/10 px-6 py-4 border-b-2 border-green-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: hackedDevices.includes(index) ? 360 : 0 }}
                      transition={{ duration: 2 }}
                      className="w-10 h-10 border-2 border-green-500 rounded-full flex items-center justify-center"
                    >
                      <HardDrive className="w-5 h-5 text-green-400" />
                    </motion.div>
                    <div>
                      <div className="text-green-400 font-mono text-sm">{exp.deviceId}</div>
                      <div className="text-gray-500 font-mono text-xs">
                        STATUS: {hackedDevices.includes(index) ? 'DECRYPTED' : 'ENCRYPTED'}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <motion.div
                      animate={{ opacity: hackedDevices.includes(index) ? [1, 0.3, 1] : 0.3 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-3 h-3 bg-green-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Position Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Orbitron', monospace" }}>
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-green-400 font-mono text-lg mb-3">
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6 space-y-2">
                    {exp.description.map((desc, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-green-400 mt-1">▸</span>
                        <span className="font-mono text-sm">{desc}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}
                        className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-md text-green-400 font-mono text-xs cursor-pointer"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Scanning Lines */}
                {hackedDevices.includes(index) && (
                  <motion.div
                    className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent"
                    animate={{ y: ['0%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </div>

              {/* Connection Lines */}
              {index < experiences.length - 1 && (
                <div className="flex justify-center py-4">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '2rem' }}
                    viewport={{ once: true }}
                    className="w-0.5 bg-gradient-to-b from-green-500 to-transparent"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default Experience;
