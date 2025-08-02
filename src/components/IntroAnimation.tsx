"use client";
import React, { useEffect, useRef, useState } from "react";

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setDone(true);
      onAnimationComplete();
    };

    video.addEventListener("ended", handleEnded);
    video.play().catch(console.error);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [onAnimationComplete]);

  if (done) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Video fills the whole viewport */}
      <video
        ref={videoRef}
        src="/intro-animation.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute", // <-- Key Change
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover", // <-- Cover ensures it fills the background
          objectPosition: "center",
          zIndex: 1, // Lower layer
        }}
      />

      {/* Name animation centered */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2, // Above the video!
          color: "#44e8ff",
          fontSize: "clamp(2.5rem, 8vw, 8rem)",
          fontWeight: "bold",
          letterSpacing: "0.1em",
          textShadow: "0 0 20px #2ac1ff, 0 0 40px #00ffea",
          fontFamily: "monospace, Arial, sans-serif",
        }}
      >
        SANJEETH
        {/* Replace with your animated text component if needed */}
      </div>
    </div>
  );
};

export default IntroAnimation;
