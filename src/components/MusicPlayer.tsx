import { useRef, useEffect } from "react";

const MusicPlayer = ({ shouldPlay }: { shouldPlay?: boolean }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log("Audio play failed (likely browser policy):", err);
      });
    }
  }, [shouldPlay]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] pointer-events-none opacity-0">
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808f3030e.mp3" // A beautiful soft piano track
        loop
      />
    </div>
  );
};

export default MusicPlayer;
