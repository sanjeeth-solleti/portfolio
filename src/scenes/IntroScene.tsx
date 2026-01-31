import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface IntroSceneProps {
  onEnter: () => void;
}

const IntroScene: React.FC<IntroSceneProps> = ({ onEnter }) => {
  const [showUI, setShowUI] = useState(false);
  const modelRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowUI(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useFrame((state, delta) => {
    timeRef.current += delta;
    
    // Animate model (simulated hacker typing)
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(timeRef.current * 0.5) * 0.05;
    }
  });

  return (
    <group>
      {/* Room */}
      <Box args={[20, 0.1, 20]} position={[0, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      
      {/* Walls */}
      <Box args={[20, 8, 0.2]} position={[0, 4, -10]} receiveShadow>
        <meshStandardMaterial color="#0a0a0a" />
      </Box>
      <Box args={[0.2, 8, 20]} position={[-10, 4, 0]} receiveShadow>
        <meshStandardMaterial color="#0a0a0a" />
      </Box>
      <Box args={[0.2, 8, 20]} position={[10, 4, 0]} receiveShadow>
        <meshStandardMaterial color="#0a0a0a" />
      </Box>

      {/* Desk */}
      <Box args={[3, 0.1, 2]} position={[0, 1, -5]} castShadow receiveShadow>
        <meshStandardMaterial color="#2a2a2a" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[-1.4, 0.5, -5.9]} castShadow>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[1.4, 0.5, -5.9]} castShadow>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[-1.4, 0.5, -4.1]} castShadow>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[1.4, 0.5, -4.1]} castShadow>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>

      {/* Computer Monitor */}
      <Box args={[1.2, 0.8, 0.1]} position={[0, 1.7, -5.8]} castShadow>
        <meshStandardMaterial color="#000000" />
      </Box>
      <Box args={[1.3, 0.9, 0.05]} position={[0, 1.7, -5.75]}>
        <meshStandardMaterial color="#00ff41" emissive="#00ff41" emissiveIntensity={0.5} />
      </Box>
      <Box args={[0.1, 0.3, 0.1]} position={[0, 1.25, -5.8]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      <Box args={[0.6, 0.05, 0.3]} position={[0, 1.05, -5.8]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>

      {/* Laptop */}
      <Box args={[0.8, 0.02, 0.6]} position={[-0.8, 1.1, -5]} rotation={[0, 0, 0]} castShadow>
        <meshStandardMaterial color="#2a2a2a" />
      </Box>
      <Box args={[0.8, 0.6, 0.02]} position={[-0.8, 1.4, -5.3]} rotation={[-0.3, 0, 0]} castShadow>
        <meshStandardMaterial color="#000000" />
      </Box>
      <Box args={[0.75, 0.55, 0.01]} position={[-0.8, 1.4, -5.28]} rotation={[-0.3, 0, 0]}>
        <meshStandardMaterial color="#00ff41" emissive="#00ff41" emissiveIntensity={0.3} />
      </Box>

      {/* Simplified 3D Male Model (Hacker) */}
      <group ref={modelRef} position={[0, 1.3, -4]}>
        {/* Head */}
        <Sphere args={[0.25, 32, 32]} position={[0, 0.8, 0]} castShadow>
          <meshStandardMaterial color="#d4a574" />
        </Sphere>
        
        {/* Hoodie */}
        <Box args={[0.6, 0.8, 0.4]} position={[0, 0.3, 0]} castShadow>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
        
        {/* Arms (typing position) */}
        <Box args={[0.15, 0.6, 0.15]} position={[-0.35, 0.2, 0.3]} rotation={[0.5, 0, 0]} castShadow>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
        <Box args={[0.15, 0.6, 0.15]} position={[0.35, 0.2, 0.3]} rotation={[0.5, 0, 0]} castShadow>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
        
        {/* Hands */}
        <Sphere args={[0.1, 16, 16]} position={[-0.35, -0.1, 0.6]} castShadow>
          <meshStandardMaterial color="#d4a574" />
        </Sphere>
        <Sphere args={[0.1, 16, 16]} position={[0.35, -0.1, 0.6]} castShadow>
          <meshStandardMaterial color="#d4a574" />
        </Sphere>
      </group>

      {/* Green Ambient Lighting */}
      <pointLight position={[0, 3, -5]} intensity={0.5} color="#00ff41" />
      <pointLight position={[-0.8, 1.5, -5]} intensity={0.3} color="#00ff41" />

      {/* Floating Code Particles */}
      {[...Array(20)].map((_, i) => (
        <Text
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            Math.random() * 4 + 1,
            (Math.random() - 0.5) * 8 - 5
          ]}
          fontSize={0.1}
          color="#00ff41"
          anchorX="center"
          anchorY="middle"
        >
          {Math.random().toString(36).substring(7)}
        </Text>
      ))}
    </group>
  );
};

export default IntroScene;
