import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      {/* Animated background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"></div>
      <div className="fixed inset-0 bg-cyber-grid bg-grid opacity-20"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-transparent via-transparent to-matrix-900/10"></div>
      
      {/* Matrix rain effect - reduced for mobile performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-matrix-400 to-transparent animate-matrix-rain opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              height: '100px',
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating particles - reduced for mobile performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-400 rounded-full animate-cyber-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
