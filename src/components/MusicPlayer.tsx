import { useRef, useEffect } from "react";

const MusicPlayer = ({ shouldPlay }: { shouldPlay?: boolean }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (shouldPlay && audioRef.current) {
        try {
          // Reset time and play
          audioRef.current.currentTime = 0;
          await audioRef.current.play();
          console.log("Music started playing!");
        } catch (err) {
          console.error("Music playback failed:", err);
          // Fallback: try playing again on any click if the initial attempt failed
          const handleFirstClick = async () => {
            try {
              await audioRef.current?.play();
              window.removeEventListener('click', handleFirstClick);
            } catch (e) {
              console.error("Still failed to play music on click:", e);
            }
          };
          window.addEventListener('click', handleFirstClick);
        }
      }
    };

    playAudio();
  }, [shouldPlay]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] pointer-events-none opacity-0">
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Using a very reliable test URL
        loop
        preload="auto"
      />
    </div>
  );
};

export default MusicPlayer;
