import { motion } from "framer-motion";

interface CoverPageProps {
  onOpen: () => void;
}

const CoverPage = ({ onOpen }: CoverPageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, y: -30 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6"
    >
      {/* Cherry Blossom */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 1, type: "spring", bounce: 0.4 }}
        className="mb-8 relative"
      >
        {/* Glow behind flower */}
        <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-full blur-[30px] scale-150" />
        <div className="relative text-6xl animate-float">🌸</div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="tracking-[0.35em] text-[11px] md:text-xs text-primary/60 uppercase font-light mb-5"
      >
        A Farewell Tribute For
      </motion.p>

      {/* Big Name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.3 }}
        className="relative mb-4"
      >
        <div className="absolute inset-0 blur-[60px] bg-primary/10 rounded-full scale-150" />
        <h1 className="relative font-display text-8xl md:text-[10rem] text-rose-gradient text-glow-pink leading-none">
          Niharika
        </h1>
      </motion.div>

      {/* Akka · Class of 2026 */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="font-elegant italic text-base md:text-lg text-primary/70 mb-10 tracking-wide"
      >
        Akka · Class of 2026
      </motion.p>

      {/* Open Invitation Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onOpen}
        className="relative group cursor-pointer"
      >
        {/* Button glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative px-10 md:px-14 py-3.5 md:py-4 rounded-xl border border-primary/30 group-hover:border-primary/50 glass-strong transition-all duration-300">
          <span className="tracking-[0.3em] text-[11px] md:text-xs text-primary/80 group-hover:text-primary uppercase font-medium transition-colors">
            Open Invitation ✦
          </span>
        </div>
      </motion.button>

      {/* Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="flex items-center gap-2 mt-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 animate-sparkle" />
        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-sparkle" style={{ animationDelay: "0.3s" }} />
        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 animate-sparkle" style={{ animationDelay: "0.6s" }} />
      </motion.div>
    </motion.div>
  );
};

export default CoverPage;
