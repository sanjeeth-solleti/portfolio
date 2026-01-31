import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import IntroScene from './scenes/IntroScene';
import IntroOverlay from './components/IntroOverlay';
import RoomSequence from './scenes/RoomSequence';
import ContentModal from './components/ContentModal';
import LoadingScreen from './components/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';

type GameState = 'intro' | 'accessGranted' | 'rooms' | 'complete';

interface ContentData {
  type: 'about' | 'experience' | 'skills' | 'projects' | 'education' | 'contact';
  title: string;
  content: React.ReactNode;
}

function App3D() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentRoom, setCurrentRoom] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [currentContent, setCurrentContent] = useState<ContentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setGameState('accessGranted');
    setTimeout(() => {
      setGameState('rooms');
    }, 3000);
  };

  const handleRoomComplete = (contentData: ContentData) => {
    setCurrentContent(contentData);
    setShowContent(true);
  };

  const handleContentClose = () => {
    setShowContent(false);
    if (currentRoom < 5) {
      setCurrentRoom(prev => prev + 1);
    } else {
      setGameState('complete');
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{ position: [0, 2, 10], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <Environment preset="night" />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          
          {gameState === 'intro' && (
            <>
              <IntroScene onEnter={handleEnter} />
            </>
          )}
          
          {gameState === 'rooms' && (
            <RoomSequence 
              currentRoom={currentRoom}
              onRoomComplete={handleRoomComplete}
            />
          )}
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>

      {/* Intro Overlay */}
      {gameState === 'intro' && <IntroOverlay onEnter={handleEnter} />}

      {/* Access Granted Overlay */}
      <AnimatePresence>
        {gameState === 'accessGranted' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="absolute inset-0 flex items-center justify-center z-50"
            style={{ background: 'rgba(0, 0, 0, 0.9)' }}
          >
            <div className="text-center">
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 20px rgba(34, 197, 94, 0.5)',
                    '0 0 40px rgba(34, 197, 94, 1)',
                    '0 0 20px rgba(34, 197, 94, 0.5)',
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-8xl font-black text-green-400 mb-4"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                ACCESS GRANTED
              </motion.div>
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl text-green-400 font-mono"
              >
                INITIALIZING PORTFOLIO SYSTEM...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Modal */}
      <AnimatePresence>
        {showContent && currentContent && (
          <ContentModal
            data={currentContent}
            onClose={handleContentClose}
          />
        )}
      </AnimatePresence>

      {/* Scanlines Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5 z-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)',
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap');
      `}</style>
    </div>
  );
}

export default App3D;
