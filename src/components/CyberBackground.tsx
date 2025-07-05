import React from 'react';
import { motion } from 'framer-motion';

const CyberBackground = () => {
  // Generate random binary strings
  const generateBinaryString = () => {
    return Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('');
  };

  // Generate random hex codes
  const generateHexCode = () => {
    return Math.random().toString(16).substr(2, 8).toUpperCase();
  };

  // Generate random code snippets
  const codeSnippets = [
    'def scan_network():', 'import socket', 'nmap -sS', 'wireshark -i eth0',
    'sqlmap -u', 'burpsuite --proxy', 'metasploit', 'hydra -l admin',
    'john --wordlist', 'aircrack-ng', 'hashcat -m', 'nikto -h',
    'gobuster dir', 'enum4linux', 'smbclient -L', 'nc -lvp 4444'
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Matrix Code Rain */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute text-matrix-400 font-mono text-sm opacity-60"
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            {generateBinaryString()}
          </motion.div>
        ))}
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-neon-400 font-mono text-xs opacity-40"
            initial={{ 
              x: -200, 
              y: Math.random() * window.innerHeight,
              rotate: 0 
            }}
            animate={{
              x: window.innerWidth + 200,
              rotate: 360
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
          >
            {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
          </motion.div>
        ))}
      </div>

      {/* Hex Data Streams */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute text-electric-400 font-mono text-xs opacity-30"
            initial={{ 
              x: window.innerWidth + 100, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: -200,
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear"
            }}
          >
            0x{generateHexCode()}
          </motion.div>
        ))}
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`scan-${i}`}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-matrix-400 to-transparent opacity-20"
            initial={{ y: -10 }}
            animate={{ y: window.innerHeight + 10 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Cyber Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 ? '#22c55e' : i % 3 === 1 ? '#22d3ee' : '#d946ef'
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Circuit Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={`circuit-${i}`}
              d={`M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
              stroke="#22c55e"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2
              }}
            />
          ))}
        </svg>
      </div>

      {/* Glitch Effects */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`glitch-${i}`}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0"
            style={{ top: `${Math.random() * 100}%` }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0, 1, 0]
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatDelay: 3 + Math.random() * 5,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Data Packets */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`packet-${i}`}
            className="absolute w-2 h-2 border border-neon-400 opacity-40"
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
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CyberBackground;