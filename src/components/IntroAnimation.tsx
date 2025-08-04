import React, { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

interface CinematicTitleProps {
  onAnimationComplete?: () => void;
}

const CinematicTitle: React.FC<CinematicTitleProps> = ({ onAnimationComplete }) => {
  const [phase, setPhase] = useState('initial');
  const [particles, setParticles] = useState<Particle[]>([]);
  const letters = "SANJEETH".split("");

  useEffect(() => {
    const initialParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 20 + 15,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setParticles(initialParticles);

    const timeline = [
      { delay: 800, action: () => setPhase('scan') },
      { delay: 2500, action: () => setPhase('reveal') },
      { delay: 4000, action: () => setPhase('glow') },
      { delay: 5500, action: () => setPhase('complete') },
      { delay: 7000, action: () => onAnimationComplete?.() },
    ];

    const timers = timeline.map(({ delay, action }) => setTimeout(action, delay));
    return () => timers.forEach(clearTimeout);
  }, [onAnimationComplete]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-bold">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,255,255,0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-cyan-400 rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `gentleFloat ${p.speed}s ease-in-out infinite alternate`,
            boxShadow: '0 0 8px rgba(0,255,255,0.5)',
          }}
        />
      ))}

      {/* Scanning Line */}
      {phase === 'scan' && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"
            style={{ top: '50%', animation: 'scanReveal 2s ease-out forwards' }}
          />
        </div>
      )}

      {/* Title & Subtitle Container */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center px-4">
        
        {/* Main Title */}
        <h1 className="flex flex-wrap justify-center text-[clamp(2rem,10vw,7rem)] tracking-wider">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-1000 ease-out transform
                ${
                  phase === 'reveal' || phase === 'glow' || phase === 'complete'
                    ? 'translate-y-0 opacity-100 scale-100'
                    : phase === 'scan'
                    ? 'translate-y-8 opacity-30 scale-98'
                    : 'translate-y-16 opacity-0 scale-95'
                }
                ${
                  phase === 'glow' || phase === 'complete'
                    ? 'text-white'
                    : phase === 'reveal'
                    ? 'text-cyan-100'
                    : 'text-gray-400'
                }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                textShadow:
                  phase === 'glow' || phase === 'complete'
                    ? '0 0 30px rgba(0,255,255,0.8), 0 0 60px rgba(0,255,255,0.6), 0 0 90px rgba(0,255,255,0.4)'
                    : phase === 'reveal'
                    ? '0 0 15px rgba(0,255,255,0.5)'
                    : 'none',
                filter: phase === 'glow' || phase === 'complete' ? 'brightness(1.3)' : 'brightness(1)',
                fontFamily: '"Orbitron", "Exo 2", "Rajdhani", monospace',
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <div
          className={`transition-all duration-2000 ease-out mt-5 md:mt-5 ${
            phase === 'complete' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-cyan-300 text-lg md:text-2xl tracking-widest mb-2">
            CYBER SECURITY ENGINEER
          </p>
          <div className="w-72 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto opacity-60" />
        </div>
      </div>

      {/* Corner Accents */}
      {/* (unchanged) — keep your existing top/bottom accents here */}

      {/* Cinematic Bars */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap');

        @keyframes gentleFloat {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          100% { transform: translateY(-15px) translateX(5px); opacity: 0.8; }
        }

        @keyframes scanReveal {
          0% { transform: translateY(-100vh); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CinematicTitle;
