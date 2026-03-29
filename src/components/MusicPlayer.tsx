import { useRef, useEffect } from "react";

const MusicPlayer = ({ shouldPlay }: { shouldPlay?: boolean }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      const audio = audioRef.current;
      
      const attemptPlay = () => {
        audio.play().catch(() => {
          console.log("Autoplay blocked, waiting for interaction...");
          // Fallback for strict browsers: play on first touch/click
          const startOnInteraction = () => {
            audio.play().catch(e => console.error("Still blocked:", e));
            window.removeEventListener("touchstart", startOnInteraction);
            window.removeEventListener("mousedown", startOnInteraction);
            window.removeEventListener("keydown", startOnInteraction);
          };
          
          window.addEventListener("touchstart", startOnInteraction);
          window.addEventListener("mousedown", startOnInteraction);
          window.addEventListener("keydown", startOnInteraction);
        });
      };

      attemptPlay();
    }
  }, [shouldPlay]);

  return (
    <audio
      ref={audioRef}
      src="https://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3"
      loop
      preload="auto"
      style={{ display: "none" }}
    />
  );
};

export default MusicPlayer;
