import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Certified Ethical Hacker V13",
      authority: "EC-Council",
      date: "2025",
      description: "Expertise in offensive security, vulnerability exploitation, and advanced attack techniques",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Google Cybersecurity Professional",
      authority: "Coursera",
      date: "2025",
      description: "Security operations, network security, risk management, and incident response",
      icon: CheckCircle,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "SOC Level-1",
      authority: "TryHackMe",
      date: "2025",
      description: "SIEM monitoring, log analysis, alert triage, and incident handling",
      icon: Award,
      color: "from-matrix-400 to-neon-400"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
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
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-recognized credentials validating cybersecurity expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-30 blur-xl rounded-2xl transition duration-500`}></div>
              
              {/* Card */}
              <div className="relative h-full bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-300">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${cert.color} rounded-xl`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-matrix-400 group-hover:to-neon-400 transition-all">
                  {cert.title}
                </h3>

                {/* Authority & Date */}
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <span className="text-neon-400 font-semibold">{cert.authority}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-matrix-400/50 rounded-full group-hover:animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
