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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-lg mx-auto"
    >
      <div className="rounded-2xl border border-primary/30 bg-card/60 backdrop-blur-md p-6 md:p-8 glow-gold animate-pulse-glow">
        <div className="space-y-6">
          {details.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <d.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-muted-foreground font-medium">
                  {d.label}
                </p>
                <p className="font-elegant text-lg text-foreground whitespace-pre-line">
                  {d.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-primary/15">
          <div className="flex justify-center gap-8">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-2xl">{a.icon}</span>
                <span className="text-xs tracking-widest text-primary font-semibold uppercase">
                  {a.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventDetails;
