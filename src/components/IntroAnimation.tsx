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
  const [phase, setPhase] = useState('initial'); // initial, scan, reveal, glow, complete
  const [particles, setParticles] = useState<Particle[]>([]);

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

  const letters = "SANJEETH".split("");

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,255,255,0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute bg-cyan-400 rounded-full z-0"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size * 1.5}px`,
            height: `${p.size * 1.5}px`,
            opacity: p.opacity,
            animation: `gentleFloat ${p.speed}s ease-in-out infinite alternate`,
            boxShadow: '0 0 8px rgba(0,255,255,0.5)',
          }}
        />
      ))}

      {/* Scanning Line */}
      {phase === 'scan' && (
        <div className="absolute inset-0 pointer-events-none z-10">
          <div 
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"
            style={{ top: '50%', animation: 'scanReveal 2s ease-out forwards' }}
          />
        </div>
      )}

      {/* Main Content Container - Centered */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-full">
        {/* Title */}
        <div className="mb-8">
          <h1 className="flex flex-wrap justify-center text-[10vw] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide leading-none">
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-1000 ease-out transform ${
                  phase === 'reveal' || phase === 'glow' || phase === 'complete'
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : phase === 'scan'
                    ? 'translate-y-8 opacity-30 scale-98'
                    : 'translate-y-16 opacity-0 scale-95'
                } ${phase === 'glow' || phase === 'complete'
                  ? 'text-white'
                  : phase === 'reveal'
                  ? 'text-cyan-100'
                  : 'text-gray-400'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  textShadow: phase === 'glow' || phase === 'complete'
                    ? '0 0 30px rgba(0,255,255,0.8), 0 0 60px rgba(0,255,255,0.6), 0 0 90px rgba(0,255,255,0.4)'
                    : phase === 'reveal'
                    ? '0 0 15px rgba(0,255,255,0.5)'
                    : 'none',
                  filter: phase === 'glow' || phase === 'complete' ? 'brightness(1.3)' : 'brightness(1)',
                  fontFamily: '"Orbitron", "Exo 2", "Rajdhani", monospace',
                  fontWeight: '800',
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle - Always below the title */}
        <div className={`transition-all duration-1000 ease-out ${
          phase === 'complete' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-cyan-300 text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-widest mb-4">
            CYBER SECURITY ENGINEER
          </p>
          <div className="w-48 sm:w-64 md:w-80 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto opacity-60" />
        </div>
      </div>

      {/* Center Pulse - Positioned relative to the title */}
      {(phase === 'glow' || phase === 'complete') && (
        <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-80 animate-ping"></div>
          <div className="absolute inset-0 w-6 h-6 -translate-x-2 -translate-y-2 bg-cyan-400/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 w-12 h-12 -translate-x-5 -translate-y-5 bg-cyan-400/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
      )}

      {/* Corner Accents */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 opacity-40 z-10 hidden sm:block">
        <div className="w-12 h-12 sm:w-16 sm:h-16 border border-cyan-400/50 rotate-45 relative">
          <div className="absolute inset-2 border border-cyan-400/30 animate-pulse"></div>
        </div>
      </div>

      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-40 z-10 hidden sm:block">
        <div className="w-10 sm:w-12 h-1 bg-cyan-400/60 mb-1"></div>
        <div className="w-6 sm:w-8 h-1 bg-cyan-400/40 mb-1 ml-auto"></div>
        <div className="w-4 sm:w-6 h-1 bg-cyan-400/30 ml-auto"></div>
      </div>

      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 opacity-40 z-10 hidden sm:block">
        <svg width="40" height="40" viewBox="0 0 50 50" className="sm:w-[50px] sm:h-[50px]">
          <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(0,255,255,0.4)" strokeWidth="1"/>
          <circle cx="25" cy="25" r="12" fill="none" stroke="rgba(0,255,255,0.6)" strokeWidth="1"/>
          <circle cx="25" cy="25" r="4" fill="rgba(0,255,255,0.8)" className="animate-pulse"/>
        </svg>
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-40 z-10 hidden sm:block">
        <div className="relative">
          <div className="w-1 h-10 sm:h-12 bg-cyan-400/50"></div>
          <div className="absolute top-0 right-0 w-10 sm:w-12 h-1 bg-cyan-400/50"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-2 border-cyan-400/70 animate-pulse"></div>
        </div>
      </div>

      {/* Cinematic Bars */}
      <div className="absolute top-0 left-0 w-full h-8 sm:h-12 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 sm:h-12 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-30"></div>

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
