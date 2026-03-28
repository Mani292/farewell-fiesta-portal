import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const details = [
  { icon: Calendar, label: "DATE", value: "31st March, 2026" },
  { icon: Clock, label: "TIME", value: "10:00 AM Onwards" },
  { icon: MapPin, label: "VENUE", value: "Seminar Hall, Ground Floor\nRamanujan Bhavan" },
];

const activities = [
  { icon: "💃", label: "Dance" },
  { icon: "🎵", label: "Music" },
  { icon: "🍽️", label: "Lunch" },
  { icon: "🎉", label: "Fun" },
];

const EventDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
      className="max-w-sm mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <p className="font-display text-3xl md:text-4xl text-rose-gradient mb-2">
          Event Details
        </p>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto" />
      </motion.div>

      <div className="relative">
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/8 via-transparent to-accent/8 blur-2xl" />
        
        <div className="relative rounded-2xl border border-primary/20 glass-strong p-5 md:p-7 glow-pink animate-pulse-glow overflow-hidden">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary/25 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-primary/25 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-primary/25 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary/25 rounded-br-2xl" />
          
          <div className="space-y-4">
            {details.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15, type: "spring" }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-2.5 rounded-xl bg-gradient-to-r from-primary/8 to-accent/5 border border-primary/10"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0"
                >
                  <d.icon className="w-4 h-4 text-primary" />
                </motion.div>
                <div>
                  <p className="text-[9px] tracking-[0.2em] text-muted-foreground font-semibold mb-0.5">
                    {d.label}
                  </p>
                  <p className="font-elegant text-sm md:text-base text-foreground whitespace-pre-line leading-snug">
                    {d.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-primary/15">
            <p className="text-center text-[9px] tracking-[0.2em] text-muted-foreground uppercase mb-3">What awaits you</p>
            <div className="flex justify-center gap-5">
              {activities.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.2, y: -4 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="text-2xl animate-float" style={{ animationDelay: `${i * 0.5}s` }}>{a.icon}</span>
                  <span className="text-[8px] tracking-[0.1em] text-primary font-semibold uppercase">
                    {a.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventDetails;
