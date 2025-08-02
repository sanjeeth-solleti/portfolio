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
          height: "100vh",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
};

export default IntroAnimation;
