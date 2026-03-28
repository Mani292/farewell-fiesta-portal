import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const details = [
  { icon: Calendar, label: "DATE", value: "31st March, 2026", color: "from-primary/20 to-accent/10" },
  { icon: Clock, label: "TIME", value: "10:00 AM Onwards", color: "from-accent/20 to-primary/10" },
  { icon: MapPin, label: "VENUE", value: "Seminar Hall, Ground Floor\nRamanujan Bhavan", color: "from-primary/15 to-accent/15" },
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
      className="max-w-lg mx-auto"
    >
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <p className="font-display text-4xl md:text-5xl text-rose-gradient mb-2">
          Event Details
        </p>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto" />
      </motion.div>

      <div className="relative">
        {/* Decorative outer glow */}
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl" />
        
        <div className="relative rounded-2xl border border-primary/20 glass-strong p-6 md:p-8 glow-rose animate-glow-pulse overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />
          
          <div className="space-y-5">
            {details.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2, type: "spring" }}
                viewport={{ once: true }}
                className={`flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r ${d.color} border border-primary/10 hover:border-primary/30 transition-all duration-300 group`}
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors"
                >
                  <d.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-muted-foreground font-semibold mb-0.5">
                    {d.label}
                  </p>
                  <p className="font-elegant text-base md:text-lg text-foreground whitespace-pre-line leading-snug">
                    {d.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-7 pt-5 border-t border-primary/15">
            <p className="text-center text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">What awaits you</p>
            <div className="flex justify-center gap-6 md:gap-8">
              {activities.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-1.5 cursor-default"
                >
                  <span className="text-3xl animate-float" style={{ animationDelay: `${i * 0.5}s` }}>{a.icon}</span>
                  <span className="text-[10px] tracking-[0.15em] text-primary font-semibold uppercase">
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
