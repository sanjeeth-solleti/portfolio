import { Award } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Certified Ethical Hacker',
    authority: 'EC-Council',
    date: '2024',
    description: 'Demonstrated proficiency in cybersecurity techniques and ethical hacking methodologies.',
    icon: Award, // or other relevant icon
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

// In your main Certifications section
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
