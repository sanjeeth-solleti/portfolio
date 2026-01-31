import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Server, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-blue-500/10 border-2 border-blue-500 rounded-lg mb-4">
            <div className="flex items-center gap-3">
              <Server className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-mono text-sm">ACADEMIC_SERVER.SYS</span>
            </div>
          </div>
          <motion.h2 className="text-5xl md:text-6xl font-black text-blue-400 mb-4" style={{ fontFamily: "'Orbitron', monospace" }} animate={{ textShadow: ['0 0 20px rgba(59, 130, 246, 0.5)', '0 0 40px rgba(59, 130, 246, 0.8)', '0 0 20px rgba(59, 130, 246, 0.5)'] }} transition={{ duration: 2, repeat: Infinity }}>
            EDUCATION
          </motion.h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <div className="relative bg-black border-2 border-blue-500/30 rounded-xl overflow-hidden">
            <div className="bg-blue-500/10 px-6 py-4 border-b-2 border-blue-500/30">
              <div className="flex items-center gap-4">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                </motion.div>
                <div>
                  <div className="text-blue-400 font-mono text-sm">ACADEMIC_RECORD_001</div>
                  <div className="text-gray-500 font-mono text-xs">STATUS: VERIFIED</div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-black text-white mb-2" style={{ fontFamily: "'Orbitron', monospace" }}>Bachelor of Technology (B.Tech)</h3>
              <h4 className="text-2xl text-blue-400 font-bold mb-4">Computer Science and Engineering (Cyber Security)</h4>
              <div className="text-xl text-gray-300 font-medium mb-6">Chalapathi Institute of Engineering and Technology</div>

              <div className="inline-block px-6 py-3 bg-blue-500/20 border-2 border-blue-400 rounded-lg mb-6">
                <span className="text-blue-400 font-bold text-2xl">8.45</span>
                <span className="text-gray-400 text-sm ml-2">/10 GPA</span>
              </div>

              <div className="flex flex-wrap gap-6 mb-6 text-gray-400 font-mono">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>Oct 2022 – Mar 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Guntur, Andhra Pradesh</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Computer Networks', 'Foundation of CyberSecurity', 'Ethical Hacking', 'Digital Forensics', 'Network Security', 'Cryptography'].map((subject, i) => (
                  <motion.span key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-md text-blue-400 font-mono text-sm">
                    {subject}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default Education;
