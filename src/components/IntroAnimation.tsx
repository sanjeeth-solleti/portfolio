import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// === Animate in neon particles ===
const Particle = ({ i }) => (
  <motion.div
    key={i}
    className="particle"
    style={{
      position: "absolute",
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight,
      width: 16 + Math.random() * 24,
      height: 16 + Math.random() * 24,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(110,231,183,0.8), rgba(34,211,238,0.5), rgba(96,165,250,0.3), transparent 80%)",
      pointerEvents: "none",
      filter: "blur(12px)"
    }}
    animate={{
      x: [0, Math.random() * 80 - 40, 0],
      y: [0, Math.random() * 60 - 30, 0],
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.2, 1]
    }}
    transition={{
      repeat: Infinity,
      duration: 6 + Math.random() * 4,
      ease: "easeInOut"
    }}
  />
);

// === Big floating orbs (depth effect) ===
const BigOrb = ({ i }) => (
  <motion.div
    key={i}
    className="big-orb"
    style={{
      position: "absolute",
      left: `${10 + i * 25 + Math.random() * 10}%`,
      top: `${20 + i * 20 + Math.random() * 10}%`,
      width: 120 + Math.random() * 120,
      height: 120 + Math.random() * 120,
      borderRadius: "50%",
      opacity: 0.4,
      background:
        "radial-gradient(circle, rgba(59,130,246,0.4), rgba(156,39,176,0.2), transparent 75%)",
      pointerEvents: "none",
      filter: "blur(36px)"
    }}
    animate={{
      x: [0, Math.random() * 100 - 50, 0],
      y: [0, Math.random() * 50 - 25, 0],
      scale: [1, 1.1 + Math.random() * 0.3, 1]
    }}
    transition={{
      repeat: Infinity,
      duration: 12 + Math.random() * 6,
      ease: "easeInOut"
    }}
  />
);

// === Cinematic Text with sweep and afterglow ===
const letters = "CINEMATIC VFX".split("");

const letterVariants = {
  initial: { opacity: 0, y: 46, scale: 2, filter: "blur(8px)" },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 360,
      damping: 30
    }
  }),
  exit: { opacity: 0, y: -40, scale: 0.4, filter: "blur(12px)" }
};

export default function CinematicIntro() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: "linear-gradient(120deg, #0f172a 0%, #312e81 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* Neon Particle Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none"
        }}
      >
        {[...Array(64)].map((_, i) => (
          <Particle key={i} i={i} />
        ))}
        {[...Array(3)].map((_, i) => (
          <BigOrb key={i} i={i} />
        ))}
      </div>
      {/* Cinematic Animated Text */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          fontSize: "4rem",
          fontWeight: 900,
          textTransform: "uppercase",
          color: "#fff"
        }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              display: "inline-block",
              margin: "0 0.18em",
              background:
                "linear-gradient(70deg, #5eead4, #818cf8, #a21caf, #38bdf8)",
              backgroundClip: "text",
              color: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              position: "relative",
              textShadow: "0 0 16px #38bdf8, 0 0 32px #5eead4"
            }}
          >
            {letter}
            {/* Sweep Line */}
            <motion.span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0.12) 100%)",
                filter: "blur(2px)",
                mixBlendMode: "lighten",
                opacity: 0.88,
                width: "140%",
                transform: "translateX(-100%)"
              }}
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                delay: i * 0.09 + 0.3,
                duration: 0.76,
                repeat: Infinity,
                repeatDelay: 1.2 + Math.random() * 1.4,
                ease: "easeInOut"
              }}
            />
            {/* Afterglow Echo Trail */}
            <motion.span
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                color: "transparent",
                background:
                  "linear-gradient(90deg, #60a5fa80 0%, #818cf880 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "blur(6px)",
                opacity: 0.18,
                pointerEvents: "none"
              }}
              animate={{
                y: [8, 0, 4, 0],
                opacity: [0, 0.22, 0]
              }}
              transition={{
                delay: i * 0.08 + 0.21,
                duration: 0.9,
                repeat: Infinity,
                repeatDelay: 2.1
              }}
            >
              {letter}
            </motion.span>
          </motion.span>
        ))}
      </div>
    </div>
  );
}
