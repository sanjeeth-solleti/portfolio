import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import CyberBackground from './CyberBackground';
import IntroAnimation from './IntroAnimation';
import Certifications from './Certifications';
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
