import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollAnimatedBackground from './components/ScrollAnimatedBackground';
import ParallaxSection from './components/ParallaxSection';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Enhanced animated background with scroll interactions */}
      <ScrollAnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        <ParallaxSection speed={0.3}>
          <Hero />
        </ParallaxSection>
        
        <ParallaxSection speed={0.5}>
          <Skills />
        </ParallaxSection>
        
        <ParallaxSection speed={0.4}>
          <Experience />
        </ParallaxSection>
        
        <ParallaxSection speed={0.6}>
          <Projects />
        </ParallaxSection>
        
        <ParallaxSection speed={0.3}>
          <Education />
        </ParallaxSection>
        
        <ParallaxSection speed={0.2}>
          <Contact />
        </ParallaxSection>
      </div>
    </div>
  );
}

export default App;