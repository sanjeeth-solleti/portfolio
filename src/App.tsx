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
import Certifications from './components/Certifications';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <CyberBackground />

      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onAnimationComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <div className="relative z-10">
        {!showIntro && (
          <>
            <Header />
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Education />
            <Contact />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
