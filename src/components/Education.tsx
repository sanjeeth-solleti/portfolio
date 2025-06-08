import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-white" size={32} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Bachelor of Technology (B.Tech)
                      </h3>
                      <h4 className="text-xl text-cyan-400 font-semibold mb-1">
                        Computer Science and Engineering (Cyber Security)
                      </h4>
                      <p className="text-lg text-slate-300 font-medium">
                        Chalapathi Institute of Engineering and Technology
                      </p>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:text-right">
                      <div className="flex items-center text-slate-400 mb-2 lg:justify-end">
                        <Calendar size={16} className="mr-2" />
                        <span>Oct 2022 – Mar 2026</span>
                      </div>
                      <div className="flex items-center text-green-400 lg:justify-end">
                        <Award size={16} className="mr-2" />
                        <span className="font-semibold">GPA: 8.22/10</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-700/50 pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      Pursuing a specialized degree in Cybersecurity with focus on advanced security concepts, 
                      threat analysis, network security, and digital forensics. Coursework includes hands-on 
                      experience with industry-standard security tools and methodologies.
                    </p>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      'Network Security',
                      'Cryptography',
                      'Ethical Hacking',
                      'Security Analytics',
                      'Incident Response'
                    ].map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-400/20"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;