import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Radio } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "vasavasanjeeth@gmail.com", link: "mailto:vasavasanjeeth@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 94911 60802", link: "tel:+919491160802" },
    { icon: MapPin, label: "Location", value: "Tuni, Andhra Pradesh", link: "#" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/sanjeeth-solleti" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/vasava-sanjeeth-solleti-9aa790268" },
    { icon: FaWhatsapp, label: "WhatsApp", url: "https://wa.me/9491160802" }
  ];

  return (
    <section id="contact" className="py-20 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-green-500/10 border-2 border-green-500 rounded-lg mb-4">
            <div className="flex items-center gap-3">
              <Radio className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-mono text-sm">COMMUNICATION_TERMINAL.SYS</span>
            </div>
          </div>
          <motion.h2 className="text-5xl md:text-6xl font-black text-green-400 mb-4" style={{ fontFamily: "'Orbitron', monospace" }} animate={{ textShadow: ['0 0 20px rgba(34, 197, 94, 0.5)', '0 0 40px rgba(34, 197, 94, 0.8)', '0 0 20px rgba(34, 197, 94, 0.5)'] }} transition={{ duration: 2, repeat: Infinity }}>
            ESTABLISH CONNECTION
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <motion.a key={i} href={info.link} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ x: 10, boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)' }} className="block bg-black border-2 border-green-500/30 rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-green-500 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-green-400 font-mono text-xs">{info.label}</div>
                    <div className="text-white font-mono">{info.value}</div>
                  </div>
                </div>
              </motion.a>
            ))}

            <motion.a href="/Sanjeeth_Solleti_Resume.pdf" download whileHover={{ scale: 1.05 }} className="block bg-green-500/20 border-2 border-green-500 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-3 text-green-400 font-mono font-bold">
                <Download className="w-5 h-5" />
                <span>DOWNLOAD RESUME</span>
              </div>
            </motion.a>

            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, i) => (
                <motion.a key={i} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 10 }} className="w-14 h-14 border-2 border-green-500 rounded-lg flex items-center justify-center text-green-400 hover:bg-green-500/20">
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center items-center">
            <div className="relative">
              <motion.div className="absolute -inset-4 bg-green-500 rounded-full blur-2xl opacity-30" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} />
              <img src="/sanjeeth.jpg" alt="Sanjeeth" className="relative w-80 h-80 object-cover rounded-full border-4 border-green-500" />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 pt-8 border-t border-green-500/30 text-center">
          <p className="text-gray-400 font-mono text-sm">© 2024 Sanjeeth Solleti. SYSTEM DESIGNED & SECURED</p>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default Contact;
