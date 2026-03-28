import { motion } from "framer-motion";

interface MessageCardProps {
  quote: string;
  attribution?: string;
  emoji?: string;
  delay?: number;
}

const MessageCard = ({ quote, attribution, emoji = "💌", delay = 0 }: MessageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, type: "spring" }}
      viewport={{ once: true, margin: "-30px" }}
      className="relative group"
    >
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/8 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative glass rounded-2xl p-5 border border-primary/15 group-hover:border-primary/30 transition-colors duration-300 overflow-hidden">
        {/* Decorative quote marks */}
        <div className="absolute top-2 left-3 text-primary/15 text-3xl font-display">"</div>
        <div className="absolute bottom-2 right-3 text-primary/15 text-3xl font-display">"</div>
        
        {/* Emoji */}
        <div className="text-center mb-3">
          <span className="text-2xl">{emoji}</span>
        </div>
        
        <p className="font-elegant italic text-sm leading-relaxed text-foreground/80 text-center px-3">
          {quote}
        </p>
        
        {attribution && (
          <p className="text-center text-[9px] tracking-[0.15em] text-muted-foreground uppercase mt-3">
            {attribution}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default MessageCard;
