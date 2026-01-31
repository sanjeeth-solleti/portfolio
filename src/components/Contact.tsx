import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vasavasanjeeth@gmail.com",
      link: "mailto:vasavasanjeeth@gmail.com",
      color: "from-matrix-400 to-neon-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 94911 60802",
      link: "tel:+919491160802",
      color: "from-neon-400 to-electric-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tuni, Andhra Pradesh",
      link: "#",
      color: "from-electric-400 to-matrix-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/sanjeeth-solleti",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vasava-sanjeeth-solleti-9aa790268",
      color: "hover:text-blue-400"
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      url: "https://wa.me/9491160802",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
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
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm actively seeking opportunities in cybersecurity. Let's discuss how I can contribute to your team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group relative block"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-20 blur rounded-xl transition duration-300`}></div>
                  
                  {/* Card */}
                  <div className="relative flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700/50 group-hover:border-gray-600 transition-all duration-300">
                    <div className={`p-3 bg-gradient-to-br ${info.color} rounded-lg`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                    <Send className="w-4 h-4 text-gray-400 group-hover:text-matrix-400 transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/Sanjeeth_Solleti_Resume.pdf"
                download="Sanjeeth_Solleti_Resume"
                className="group relative block"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-matrix-400 to-neon-400 opacity-50 group-hover:opacity-100 blur rounded-xl transition duration-300"></div>
                
                {/* Button */}
                <div className="relative flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-matrix-500 to-neon-600 rounded-xl text-white font-semibold">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </div>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Connect on Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700/50 ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 opacity-20 group-hover:opacity-40 blur-2xl rounded-full transition duration-500"></div>
              
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src="/sanjeeth.jpg"
                  alt="Sanjeeth"
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-gray-700 shadow-2xl"
                />
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-matrix-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-neon-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-700/50 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Sanjeeth Solleti. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
