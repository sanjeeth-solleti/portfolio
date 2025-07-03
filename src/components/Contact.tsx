import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Terminal } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-matrix-400" size={24} />,
      title: "Email",
      content: "vasavasanjeeth@gmail.com",
      link: "mailto:vasavasanjeeth@gmail.com",
      color: "from-matrix-500/20 to-matrix-600/20",
      borderColor: "border-matrix-400/30"
    },
    {
      icon: <Phone className="text-neon-400" size={24} />,
      title: "Phone",
      content: "+91 94911 60802",
      link: "tel:+919491160802",
      color: "from-neon-500/20 to-neon-600/20",
      borderColor: "border-neon-400/30"
    },
    {
      icon: <MapPin className="text-electric-400" size={24} />,
      title: "Location",
      content: "Tuni, Andhra Pradesh",
      link: "https://maps.google.com",
      color: "from-electric-500/20 to-electric-600/20",
      borderColor: "border-electric-400/30"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/sanjeeth-solleti",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-700/20"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vasava-sanjeeth-solleti-9aa790268",
      color: "hover:text-neon-400",
      bgColor: "hover:bg-neon-400/10"
    },
    {
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp",
      url: "https://wa.me/9491160802",
      color: "hover:text-matrix-400",
      bgColor: "hover:bg-matrix-400/10"
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
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              &lt;Get_In_Touch/&gt;
            </span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-matrix-400 via-neon-400 to-electric-400 mx-auto mb-4"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4"
          >
            <span className="text-matrix-400 font-mono">[STATUS]</span> I'm actively seeking opportunities to contribute, learn, and grow through internships or entry-level roles. If you're hiring or open to collaboration, I'd love to connect and discuss how I can add value to your team.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-3 mb-6"
            >
              <Terminal className="text-matrix-400" size={20} />
              <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                [INITIATE_CONNECTION]
              </h3>
            </motion.div>
            
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group cursor-pointer relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${info.color} rounded-lg blur opacity-0 group-hover:opacity-40 transition duration-300`}></div>
                  <div className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/60 backdrop-blur-sm rounded-lg border ${info.borderColor} group-hover:border-opacity-60 transition-all duration-300 mr-4`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-matrix-400 transition-colors duration-200 font-mono text-sm sm:text-base">
                      [{info.title.toUpperCase()}]
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200 font-mono text-xs sm:text-sm">
                      {info.content}
                    </p>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-matrix-400 rounded-full animate-pulse opacity-60"></div>
                </motion.a>
              ))}
            </div>

            {/* Resume Download Button */}
            <motion.div 
              variants={itemVariants}
              className="pt-4 sm:pt-6 flex justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Sanjeeth_Solleti_Resume.pdf"
                download="Sanjeeth_Solleti_Resume"
                className="inline-flex items-center px-6 sm:px-8 py-3 bg-gradient-to-r from-matrix-500 to-neon-600 text-white rounded-lg hover:from-matrix-400 hover:to-neon-500 transition-all duration-300 shadow-lg shadow-matrix-500/25 font-mono text-sm sm:text-base"
              >
                <Download size={20} className="mr-2" />
                [DOWNLOAD_RESUME]
              </motion.a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="pt-4 sm:pt-6 text-center lg:text-left"
            >
              <h4 className="text-white font-medium mb-4 font-mono text-sm sm:text-base">[SOCIAL_NETWORKS]</h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 text-gray-400 ${social.color} ${social.bgColor} rounded-lg border border-gray-700/50 hover:border-matrix-400/50 transition-all duration-300`}
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
            viewport={{ once: true, amount: 0.1 }}
            variants={imageVariants}
            className="flex justify-center relative order-1 lg:order-2"
          >
            <div className="relative group">
              <motion.img
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                src="/sanjeeth.jpg"
                alt="Sanjeeth"
                className="relative rounded-full w-100 h-100 sm:w-100 sm:h-100 md:w-64 md:h-64 object-cover border-4 border-gray-700 shadow-2xl shadow-matrix-500/30"
              />
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-matrix-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-neon-400 rounded-full animate-cyber-pulse"></div>
              <div className="absolute top-1/2 right-2 w-1 h-1 bg-electric-400 rounded-full animate-glow"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={itemVariants}
          className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Terminal className="text-matrix-400" size={16} />
            <span className="text-matrix-400 font-mono text-sm">[SYSTEM_INFO]</span>
          </div>
          <p className="text-gray-400 font-mono text-xs sm:text-sm">
            © 2024 Sanjeeth Solleti. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
