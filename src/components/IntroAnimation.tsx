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

    // Auto play and trigger when done
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
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/intro-animation.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      />
    </div>
  );
};

export default IntroAnimation;
