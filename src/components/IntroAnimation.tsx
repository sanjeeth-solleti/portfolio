"use client";
import React, { useEffect, useRef, useState } from "react";

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        containerRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    updateHeight(); // Set on load
    window.addEventListener("resize", updateHeight); // Update on orientation change

    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setDone(true);
      onAnimationComplete();
    };

    video.addEventListener("ended", handleEnded);
    video.play().catch(console.error);

    return () => {
      window.removeEventListener("resize", updateHeight);
      video.removeEventListener("ended", handleEnded);
    };
  }, [onAnimationComplete]);

  if (done) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh", // will be overridden by JS
        zIndex: 9999,
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        src="/intro-animation.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{
          width: "100vw",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default IntroAnimation;
