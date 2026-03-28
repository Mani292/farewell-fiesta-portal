import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Music2, Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder beautiful track
        loop
      />
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className={`relative p-4 rounded-full glass border transition-all duration-500 ${
          isPlaying ? "border-primary/50 text-primary glow-pink" : "border-primary/20 text-primary/40"
        }`}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
            >
              <Volume2 size={20} className="animate-pulse" />
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
            >
              <VolumeX size={20} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating notes when playing */}
        {isPlaying && (
          <div className="absolute inset-0 pointer-events-none">
            <motion.span
              animate={{ y: [-10, -30], x: [0, 10], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-0 right-0 text-[10px]"
            >
              ♪
            </motion.span>
            <motion.span
              animate={{ y: [-10, -25], x: [0, -10], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              className="absolute top-0 left-0 text-[10px]"
            >
              ♫
            </motion.span>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
