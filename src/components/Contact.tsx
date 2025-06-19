import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-cyan-400" size={24} />,
      title: "Email",
      content: "vasavasanjeeth@gmail.com",
      link: "mailto:vasavasanjeeth@gmail.com"
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      title: "Phone",
      content: "+91 94911 60802",
      link: "tel:+919491160802"
    },
    {
      icon: <MapPin className="text-purple-400" size={24} />,
      title: "Location",
      content: "Tuni, Andhra Pradesh",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/sanjeeth-solleti",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vasava-sanjeeth-solleti-9aa790268",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp",
      url: "https://wa.me/9491160802",
      color: "hover:text-green-400"
    }
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            I'm actively seeking opportunities to contribute, learn, and grow through internships or entry-level roles. If you're hiring or open to collaboration, I'd love to connect and discuss how I can add value to your team.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6"
            >
              Let's Start a Conversation
            </motion.h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                      {info.title}
                    </h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-200">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Resume Download Button */}
            <motion.div 
              variants={itemVariants}
              className="pt-6"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Sanjeeth_Solleti_Resume.pdf"
                download="Sanjeeth_Solleti_Resume"
                className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-100 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Resume
              </motion.a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="pt-6"
            >
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 ${social.color} transition-colors duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
            className="flex justify-center relative"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-25"></div>
              <motion.img
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                src="/sanjeeth.jpg"
                alt="Sanjeeth"
                className="relative rounded-full w-64 h-65 object-cover border-4 border-slate-700 shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center mt-16 pt-8 border-t border-slate-700/50"
        >
          <p className="text-slate-400">
            © 2024 Sanjeeth Solleti. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;