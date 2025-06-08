import React from 'react';
import { Shield, Search, AlertTriangle, Lock } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Shield className="text-cyan-400" size={24} />,
      title: "Threat Defense",
      description: "Proactive security monitoring and incident response"
    },
    {
      icon: <Search className="text-green-400" size={24} />,
      title: "Threat Hunting",
      description: "Advanced log analysis and anomaly detection"
    },
    {
      icon: <AlertTriangle className="text-orange-400" size={24} />,
      title: "SOC Operations",
      description: "24/7 security operations and incident management"
    },
    {
      icon: <Lock className="text-purple-400" size={24} />,
      title: "Vulnerability Assessment",
      description: "Comprehensive security testing and risk evaluation"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">

            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-75"></div>
                <img
                  src="/sanjeeth.jpg"  // Corrected path to the public folder
                  alt="Sanjeeth Solleti"
                  className="relative w-64 h-65 object-cover rounded-full border-4 border-slate-700 shadow-lg"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I'm a dedicated cybersecurity engineer with expertise in SOC operations, 
                  threat hunting, and incident response. My passion lies in protecting digital 
                  infrastructure through proactive monitoring and advanced security analysis.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Specialized in log analysis, malware detection, and vulnerability assessment, 
                  I leverage cutting-edge security tools and methodologies to identify and 
                  neutralize threats before they impact business operations.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  With hands-on experience in enterprise security platforms like Palo Alto 
                  Networks and Zscaler, I bring practical knowledge of threat prevention, 
                  network security, and Zero Trust architecture implementation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
