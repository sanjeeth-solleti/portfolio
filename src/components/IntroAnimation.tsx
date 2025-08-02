import React from "react";
import { motion } from "framer-motion";

const letters = "SANJEETH".split("");

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 8,
      stiffness: 80,
    },
  },
};

const TitleAnimation = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at center, #0f0f1b 0%, #05050d 100%)",
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      <motion.div
        className="flex gap-2 text-6xl font-bold text-cyan-400"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{
              color: "#00ffe7",
              textShadow: `
                0 0 10px #00ffe7,
                0 0 20px #00ffe7,
                0 0 40px #00ffe7
              `,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default TitleAnimation;
