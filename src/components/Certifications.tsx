import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, Lock } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Certified Ethical Hacker V13",
      authority: "EC-Council",
      date: "2025",
      description: "Expertise in offensive security, vulnerability exploitation, and advanced attack techniques",
      icon: Shield,
      badgeId: "BADGE_001"
    },
    {
      title: "Google Cybersecurity Professional",
      authority: "Coursera",
      date: "2025",
      description: "Security operations, network security, risk management, and incident response",
      icon: CheckCircle,
      badgeId: "BADGE_002"
    },
    {
      title: "SOC Level-1",
      authority: "TryHackMe",
      date: "2025",
      description: "SIEM monitoring, log analysis, alert triage, and incident handling",
      icon: Award,
      badgeId: "BADGE_003"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-yellow-500/10 border-2 border-yellow-500 rounded-lg mb-4">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-mono text-sm">SECURITY_BADGES.SYS</span>
            </div>
          </div>
          <motion.h2
            className="text-5xl md:text-6xl font-black text-yellow-400 mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}
            animate={{ textShadow: ['0 0 20px rgba(234, 179, 8, 0.5)', '0 0 40px rgba(234, 179, 8, 0.8)', '0 0 20px rgba(234, 179, 8, 0.5)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            CERTIFICATIONS
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5, boxShadow: '0 0 50px rgba(234, 179, 8, 0.5)' }}
              className="relative bg-black border-2 border-yellow-500/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="w-12 h-12 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                  <cert.icon className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <div className="text-yellow-400 font-mono text-xs">{cert.badgeId}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Orbitron', monospace" }}>{cert.title}</h3>
              <div className="text-yellow-400 font-mono text-sm mb-1">{cert.authority}</div>
              <div className="text-gray-500 font-mono text-xs mb-4">{cert.date}</div>
              <p className="text-gray-400 text-sm font-mono">{cert.description}</p>
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

export default Certifications;
