import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Deloitte Australia Cyber Job Simulation on Forage",
      company: "Deloitte",
      location: "Remote", 
      period: "Jun 2025",
      description: [
        "Completed an intensive virtual internship simulating a real-world security consulting engagement with Deloitte. Investigated a suspected insider breach involving a manufacturing status dashboard on a corporate intranet. Conducted in-depth analysis of internal web server logs to identify irregular access patterns, automated API queries, and potential credential misuse. Evaluated network architecture, access controls, and VPN policies to determine breach feasibility and attack vectors. Delivered strategic recommendations for incident response, including system isolation, access audits, and stakeholder communication. Developed practical expertise in log forensics, threat modeling, behavioral analysis, and cyber risk mitigation in a consulting context."
      ],
      technologies: [
        "Log File Analysis (Web Server & API Traffic)",
        "VPN & Network Access Control Evaluation",
        "HTTP Protocol & RESTful API Understanding",
        "Insider Threat Detection & Behavioral Analysis",
        "Incident Response & Cyber Risk Mitigation"
      ]
    }
    {
      title: "Tata Cybersecurity Security Analyst Job Simulation on Forage",
      company: "Tata Group",
      location: "Remote", 
      period: "Jun 2025",
      description: [
        "Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team."
        "Acquired expertise in IAM principles, cybersecurity best practices, and strategic alignment with business objectives."
        "Delivered comprehensive documentation and presentations, showcasing the ability to communicate complex technical concepts effectively."
      ],
      technologies: [
        "Identity & Access Management (IAM) Platforms",
        "Multi-Factor Authentication (MFA)",
        "Role-Based Access Control (RBAC) / Attribute-Based Access Control (ABAC)",
        "Single Sign-On (SSO) & Federation Protocols",
        "Cloud Integration & IAM in Hybrid Environments"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-slate-400">
                          <div className="flex items-center mb-1 sm:mb-0">
                            <ExternalLink size={16} className="mr-2 text-cyan-400" />
                            <span className="font-medium text-cyan-400">{exp.company}</span>
                          </div>
                          <div className="flex items-center mb-1 sm:mb-0">
                            <MapPin size={16} className="mr-2" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-slate-300 flex items-start">
                            <span className="text-cyan-400 mr-2 mt-2 w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
