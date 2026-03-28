import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculate());
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="font-display text-4xl md:text-5xl text-rose-gradient mb-6">
        Counting down to the big day
      </p>
      <div className="flex justify-center gap-3 md:gap-5">
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-16 md:w-20 py-3 md:py-4 rounded-xl glass border border-primary/20 group-hover:border-primary/40 transition-colors">
              <motion.span
                key={unit.value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="block font-elegant text-2xl md:text-3xl font-bold text-foreground"
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
              <span className="text-[9px] tracking-[0.15em] text-muted-foreground uppercase mt-1 block">
                {unit.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
