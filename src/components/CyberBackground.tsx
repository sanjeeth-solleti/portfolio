import React from 'react';
import { motion } from 'framer-motion';

const CyberBackground = () => {
  // Generate random binary strings
  const generateBinaryString = () => {
    return Array.from({ length: 25 }, () => Math.random() > 0.5 ? '1' : '0').join('');
  };

  // Generate random hex codes
  const generateHexCode = () => {
    return Math.random().toString(16).substr(2, 8).toUpperCase();
  };

  // Generate IP addresses
  const generateIPAddress = () => {
    return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
  };

  // Cybersecurity commands and terms
  const cyberSecurityTerms = [
    'INTRUSION DETECTED', 'FIREWALL ACTIVE', 'SCANNING PORTS', 'VULNERABILITY FOUND',
    'ENCRYPTION ENABLED', 'THREAT BLOCKED', 'MALWARE DETECTED', 'SECURE CONNECTION',
    'AUTHENTICATION FAILED', 'ACCESS GRANTED', 'PACKET ANALYSIS', 'NETWORK MONITOR',
    'SQL INJECTION BLOCKED', 'XSS PREVENTED', 'DDoS MITIGATION', 'ZERO-DAY ALERT'
  ];

  // Real cybersecurity tool commands
  const cyberCommands = [
    'nmap -sS -O target', 'wireshark -i eth0', 'sqlmap -u "http://target"',
    'burpsuite --proxy=8080', 'metasploit > use exploit', 'hydra -l admin -P pass.txt',
    'john --wordlist=rockyou.txt', 'aircrack-ng -w wordlist', 'hashcat -m 0 hash.txt',
    'nikto -h target.com', 'gobuster dir -u target', 'enum4linux target',
    'smbclient -L //target', 'nc -lvp 4444', 'tcpdump -i any', 'netstat -tulpn'
  ];

  // Network protocols and ports
  const networkData = [
    'TCP:80', 'TCP:443', 'TCP:22', 'TCP:21', 'TCP:25', 'UDP:53', 'TCP:3389', 'TCP:445',
    'HTTP/1.1', 'HTTPS/2.0', 'SSH-2.0', 'FTP', 'SMTP', 'DNS', 'RDP', 'SMB'
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Cyber Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.4) 1px, transparent 1px),
              linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px',
            animation: 'gridMove 25s linear infinite, gridPulse 8s ease-in-out infinite'
          }}
        />
      </div>

      {/* Matrix Binary Rain - Enhanced */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute text-matrix-400 font-mono text-sm opacity-70 whitespace-nowrap"
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${10 + Math.random() * 6}px`
            }}
          >
            {generateBinaryString()}
          </motion.div>
        ))}
      </div>

      {/* Cybersecurity Alert Messages */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`alert-${i}`}
            className="absolute text-red-400 font-mono text-xs opacity-60 font-bold"
            initial={{ 
              x: -300, 
              y: Math.random() * window.innerHeight,
              scale: 0.8
            }}
            animate={{
              x: window.innerWidth + 300,
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          >
            [ALERT] {cyberSecurityTerms[Math.floor(Math.random() * cyberSecurityTerms.length)]}
          </motion.div>
        ))}
      </div>

      {/* Floating Cybersecurity Commands */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`command-${i}`}
            className="absolute text-neon-400 font-mono text-xs opacity-50"
            initial={{ 
              x: -250, 
              y: Math.random() * window.innerHeight,
              rotate: 0 
            }}
            animate={{
              x: window.innerWidth + 250,
              rotate: 360
            }}
            transition={{
              duration: 18 + Math.random() * 12,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
          >
            $ {cyberCommands[Math.floor(Math.random() * cyberCommands.length)]}
          </motion.div>
        ))}
      </div>

      {/* IP Address and Network Data Streams */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`network-${i}`}
            className="absolute text-electric-400 font-mono text-xs opacity-40"
            initial={{ 
              x: window.innerWidth + 150, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: -250,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear"
            }}
          >
            {generateIPAddress()} → {networkData[Math.floor(Math.random() * networkData.length)]}
          </motion.div>
        ))}
      </div>

      {/* Hex Data Streams with Packet Info */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute text-yellow-400 font-mono text-xs opacity-35"
            initial={{ 
              x: window.innerWidth + 100, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: -200,
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear"
            }}
          >
            0x{generateHexCode()} [PKT:{Math.floor(Math.random() * 9999)}]
          </motion.div>
        ))}
      </div>

      {/* Security Scanning Lines */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`scan-${i}`}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-matrix-400 to-transparent opacity-30"
            initial={{ y: -10 }}
            animate={{ y: window.innerHeight + 10 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Radar Sweep Effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 border-2 border-matrix-400/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-matrix-400 to-transparent origin-left"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '0 50%' }}
          />
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-matrix-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </motion.div>
      </div>

      {/* Cyber Particles with Security Icons */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 4 === 0 ? '#22c55e' : i % 4 === 1 ? '#22d3ee' : i % 4 === 2 ? '#d946ef' : '#f59e0b'
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Circuit Board Patterns */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10">
          {[...Array(12)].map((_, i) => (
            <motion.path
              key={`circuit-${i}`}
              d={`M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100} T${Math.random() * 100},${Math.random() * 100}`}
              stroke={i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#22d3ee" : "#d946ef"}
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2
              }}
            />
          ))}
        </svg>
      </div>

      {/* Security Status Indicators */}
      <div className="absolute top-4 left-4 space-y-2 opacity-60">
        <motion.div
          className="flex items-center space-x-2 text-matrix-400 font-mono text-xs"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-matrix-400 rounded-full animate-pulse"></div>
          <span>FIREWALL: ACTIVE</span>
        </motion.div>
        <motion.div
          className="flex items-center space-x-2 text-neon-400 font-mono text-xs"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-neon-400 rounded-full animate-pulse"></div>
          <span>MONITORING: ON</span>
        </motion.div>
        <motion.div
          className="flex items-center space-x-2 text-electric-400 font-mono text-xs"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-electric-400 rounded-full animate-pulse"></div>
          <span>ENCRYPTION: 256-BIT</span>
        </motion.div>
      </div>

      {/* Data Packets with Protocol Info */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`packet-${i}`}
            className="absolute w-3 h-3 border border-neon-400 opacity-50 font-mono text-xs flex items-center justify-center"
            initial={{
              x: 0,
              y: Math.random() * window.innerHeight,
              rotate: 0
            }}
            animate={{
              x: window.innerWidth,
              rotate: 360
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
          >
            <div className="w-1 h-1 bg-neon-400 rounded-full"></div>
          </motion.div>
        ))}
      </div>

      {/* Glitch Effects for Cyber Aesthetic */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`glitch-${i}`}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0"
            style={{ top: `${Math.random() * 100}%` }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0, 1, 0],
              x: [0, 10, -10, 0]
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: 4 + Math.random() * 8,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Terminal-like Code Blocks */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`terminal-${i}`}
            className="absolute bg-gray-900/20 border border-matrix-400/20 rounded p-2 font-mono text-xs text-matrix-400 opacity-30"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              width: '200px'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          >
            <div>root@security:~# {cyberCommands[Math.floor(Math.random() * cyberCommands.length)]}</div>
            <div className="text-green-400">Connection established...</div>
            <div className="text-yellow-400">Scanning in progress...</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CyberBackground;