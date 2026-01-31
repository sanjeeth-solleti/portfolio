import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
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
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic foundation in cybersecurity and computer science
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-to-br from-matrix-500 to-neon-600 rounded-2xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Bachelor of Technology (B.Tech)
                      </h3>
                      <h4 className="text-xl text-matrix-400 font-semibold mb-2">
                        Computer Science and Engineering (Cyber Security)
                      </h4>
                      <p className="text-lg text-gray-300 font-medium">
                        Chalapathi Institute of Engineering and Technology
                      </p>
                    </div>

                    {/* GPA Badge */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-matrix-500/20 to-neon-500/20 border border-matrix-400/30 rounded-full">
                        <span className="text-matrix-400 font-bold text-lg">8.45</span>
                        <span className="text-gray-400 text-sm">/10 GPA</span>
                      </div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Oct 2022 – Mar 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Guntur, Andhra Pradesh</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6 p-4 bg-gray-900/30 rounded-xl border border-gray-700/30">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-neon-400" />
                      <span className="text-sm font-semibold text-neon-400">Program Overview</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Specialized degree in Cybersecurity with focus on advanced security concepts, 
                      threat analysis, network security, and digital forensics. Coursework includes 
                      hands-on experience with industry-standard security tools and methodologies.
                    </p>
                  </div>

                  {/* Key Subjects */}
                  <div>
                    <h5 className="text-sm font-semibold text-electric-400 mb-3">Core Subjects:</h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Computer Networks',
                        'Foundation of CyberSecurity',
                        'Ethical Hacking',
                        'Digital Forensics',
                        'Network Security',
                        'Cryptography'
                      ].map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-matrix-400/50 transition-colors"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 flex gap-1">
                <div className="w-1.5 h-1.5 bg-matrix-400 rounded-full group-hover:animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-neon-400 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 bg-electric-400 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
