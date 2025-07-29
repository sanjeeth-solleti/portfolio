import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import CyberBackground from './components/CyberBackground';
import IntroAnimation from './components/IntroAnimation';
import certifications from './components/certifications';// Import the new component
import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      {/* Enhanced Cyber Animated Background */}
      <CyberBackground />
      
      {/* Base gradient layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-transparent via-transparent to-matrix-900/10 z-0"></div>
      
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onAnimationComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <div className={`relative z-10 ${showIntro ? 'invisible' : 'visible'}`}> {/* Hide content while intro is showing */}
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <certifications/>
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
