import { useEffect, useState } from "react";

const IntroAnimation = () => {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 6000); // 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showVideo ? (
        <div style={styles.container}>
          <video
            src="/intro-animation.mp4"
            autoPlay
            muted
            playsInline
            style={styles.video}
          />
        </div>
      ) : null}
    </div>
  );
};

const styles = {
  container: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 9999,
    overflow: "hidden",
    backgroundColor: "black",
  },
  video: {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    transform: "translate(-50%, -50%)",
    objectFit: "contain", // ensure full visibility on all screens
  },
};

export default IntroAnimation;
