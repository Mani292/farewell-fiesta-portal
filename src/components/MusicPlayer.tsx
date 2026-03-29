import { useRef, useEffect } from "react";

const MusicPlayer = ({ shouldPlay }: { shouldPlay?: boolean }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      const audio = audioRef.current;
      
      const playMusic = async () => {
        try {
          // Some browsers need a slight delay
          setTimeout(async () => {
            if (audio) {
              await audio.play();
              console.log("Music started successfully");
            }
          }, 500);
        } catch (err) {
          console.log("Autoplay blocked, adding interaction listener");
          
          const startOnFirstInteraction = () => {
            audio.play().catch(e => console.log("Still blocked:", e));
            window.removeEventListener("click", startOnFirstInteraction);
            window.removeEventListener("touchstart", startOnFirstInteraction);
            window.removeEventListener("scroll", startOnFirstInteraction);
          };

          window.addEventListener("click", startOnFirstInteraction);
          window.addEventListener("touchstart", startOnFirstInteraction);
          window.addEventListener("scroll", startOnFirstInteraction);
        }
      };

      playMusic();
    }
  }, [shouldPlay]);

  return (
    <div className="fixed bottom-0 right-0 w-0 h-0 overflow-hidden pointer-events-none opacity-0">
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" // Very reliable and pleasant piano/orchestral track
        loop
        preload="auto"
      />
    </div>
  );
};

export default MusicPlayer;
