import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const certifications = [
  {
    id: 1,
    title: 'Certified Ethical Hacker',
    authority: 'EC-Council',
    date: '2024',
    description: 'Demonstrated proficiency in cybersecurity techniques and ethical hacking methodologies.',
    icon: Award,
    iconColor: 'text-matrix-400',
    gradientFrom: 'from-matrix-500/20',
    gradientTo: 'to-matrix-600/20',
    borderColor: 'border-matrix-400/30'
  },
  {
    id: 2,
    title: 'Google Associate Android Developer',
    authority: 'Google',
    date: '2023',
    description: 'Validated mobile development skills with practical knowledge in developing modern Android applications.',
    icon: Award,
    iconColor: 'text-neon-400',
    gradientFrom: 'from-neon-500/20',
    gradientTo: 'to-neon-600/20',
    borderColor: 'border-neon-400/30'
  }
];

const CertificationCard = ({ cert }) => (
  <motion.div
    className={`rounded-xl p-6 bg-gradient-to-br ${cert.gradientFrom} ${cert.gradientTo} border ${cert.borderColor} shadow-lg flex items-center space-x-4`}
    variants={cardVariants}
  >
    <cert.icon className={`w-10 h-10 ${cert.iconColor}`} />
    <div>
      <h3 className="text-xl font-semibold">{cert.title}</h3>
      <div className="text-xs uppercase tracking-wide opacity-70">{cert.authority} &middot; {cert.date}</div>
      <p className="mt-2 text-sm">{cert.description}</p>
    </div>
  </motion.div>
);

const Certifications = () => (
  <section className="py-12" id="certifications">
    <h2 className="text-3xl font-bold mb-8 text-center text-matrix-400 tracking-tight">
      Certifications
    </h2>
    <motion.div
      className="grid gap-6 grid-cols-1 md:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {certifications.map(cert => (
        <CertificationCard key={cert.id} cert={cert} />
      ))}
    </motion.div>
  </section>
);

export default Certifications;
