import React, { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

// Add this interface to fix the TypeScript error
interface CinematicTitleProps {
  onAnimationComplete?: () => void;
}

// Update the component signature to include props
const CinematicTitle: React.FC<CinematicTitleProps> = ({ onAnimationComplete }) => {
  const [phase, setPhase] = useState('initial'); // initial, scan, reveal, glow, complete
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate elegant floating particles
    const initialParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 20 + 15,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setParticles(initialParticles);

    // Cinematic timing sequence
    const timeline = [
      { delay: 800, action: () => setPhase('scan') },
      { delay: 2500, action: () => setPhase('reveal') },
      { delay: 4000, action: () => setPhase('glow') },
      { delay: 5500, action: () => setPhase('complete') },
      { delay: 7000, action: () => onAnimationComplete?.() }, // Call the callback when animation is complete
    ];

    const timers = timeline.map(({ delay, action }) => 
      setTimeout(action, delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [onAnimationComplete]); // Add onAnimationComplete to dependencies

  const letters = "SANJEETH".split("");

  return (
    <h1 className="text-[10vw] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide text-center px-4 leading-none">
      
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,255,255,0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </h1>

      {/* Elegant Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-cyan-400 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `gentleFloat ${particle.speed}s ease-in-out infinite alternate`,
            boxShadow: '0 0 8px rgba(0,255,255,0.5)',
          }}
        />
      ))}

      {/* Scanning Line Effect */}
      {phase === 'scan' && (
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"
            style={{ 
              top: '50%',
              animation: 'scanReveal 2s ease-out forwards' 
            }}
          />
        </div>
      )}

      {/* Main Title */}
      <div className="relative z-10 flex items-center justify-center">
        <h1 className="flex text-7xl md:text-8xl lg:text-9xl font-bold tracking-wide">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-1200 ease-out transform ${
                phase === 'reveal' || phase === 'glow' || phase === 'complete'
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : phase === 'scan'
                  ? 'translate-y-8 opacity-30 scale-98'
                  : 'translate-y-16 opacity-0 scale-95'
              } ${
                phase === 'glow' || phase === 'complete'
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

      {/* Center Energy Pulse */}
      {(phase === 'glow' || phase === 'complete') && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-80 animate-ping"></div>
          <div className="absolute inset-0 w-6 h-6 -translate-x-2 -translate-y-2 bg-cyan-400/30 rounded-full animate-ping" 
               style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 w-12 h-12 -translate-x-5 -translate-y-5 bg-cyan-400/20 rounded-full animate-ping" 
               style={{ animationDelay: '1s' }}></div>
        </div>
      )}

      {/* Elegant Subtitle */}
      <div 
        className={`absolute bottom-8 md:bottom-16 text-center transition-all duration-2000 ease-out ${
          phase === 'complete' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative">
          <p className="text-cyan-300 text-xl md:text-2xl font-light tracking-widest mb-3">
            CYBER SECURITY ENGINEER
          </p>
          <div className="w-72 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto opacity-60"></div>
        </div>
      </div>

      {/* Minimal Corner Accents */}
      <div className="absolute top-8 left-8 opacity-40">
        <div className="w-16 h-16 border border-cyan-400/50 transform rotate-45">
          <div className="absolute inset-2 border border-cyan-400/30 animate-pulse"></div>
        </div>
      </div>

      <div className="absolute top-8 right-8 opacity-40">
        <div className="w-12 h-1 bg-cyan-400/60 mb-1"></div>
        <div className="w-8 h-1 bg-cyan-400/40 mb-1 ml-auto"></div>
        <div className="w-6 h-1 bg-cyan-400/30 ml-auto"></div>
      </div>

      <div className="absolute bottom-8 left-8 opacity-40">
        <svg width="50" height="50" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(0,255,255,0.4)" strokeWidth="1"/>
          <circle cx="25" cy="25" r="12" fill="none" stroke="rgba(0,255,255,0.6)" strokeWidth="1"/>
          <circle cx="25" cy="25" r="4" fill="rgba(0,255,255,0.8)" className="animate-pulse"/>
        </svg>
      </div>

      <div className="absolute bottom-8 right-8 opacity-40">
        <div className="relative">
          <div className="w-1 h-12 bg-cyan-400/50"></div>
          <div className="absolute top-0 right-0 w-12 h-1 bg-cyan-400/50"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-2 border-cyan-400/70 animate-pulse"></div>
        </div>
      </div>

      {/* Subtle Cinematic Bars */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap');
        
        @keyframes gentleFloat {
          0% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3;
          }
          100% { 
            transform: translateY(-15px) translateX(5px); 
            opacity: 0.8;
          }
        }
        
        @keyframes scanReveal {
          0% { 
            transform: translateY(-100vh);
            opacity: 0;
          }
          20% { 
            opacity: 1;
          }
          80% { 
            opacity: 1;
          }
          100% { 
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CinematicTitle;
