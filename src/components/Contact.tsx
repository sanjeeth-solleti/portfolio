import React from 'react';
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

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I’m actively seeking opportunities to contribute, learn, and grow through internships or entry-level roles. If you’re hiring or open to collaboration, I’d love to connect and discuss how I can add value to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Start a Conversation</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
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
                </a>
              ))}
            </div>

            {/* Resume Download Button */}
            <div className="pt-6">
              <a
                href="/Sanjeeth_Solleti_Resume.pdf"  // Link to the resume file in the public folder
                download="Sanjeeth_Solleti_Resume"  // Optional: Name of the downloaded file
                className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-100 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Resume
              </a>
            </div>

            <div className="pt-6">
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center relative">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-25"></div>
              <img
                src="/sanjeeth.jpg"  // Link to the image file in the public folder
                alt="Sanjeeth"
                className="relative rounded-full w-64 h-65 object-cover border-4 border-slate-700 shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-slate-700/50">
          <p className="text-slate-400">
            © 2024 Sanjeeth Solleti. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
