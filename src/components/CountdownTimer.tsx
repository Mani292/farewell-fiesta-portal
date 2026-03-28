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
    { label: "Hrs", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center px-4"
    >
      <p className="font-display text-3xl md:text-4xl text-rose-gradient mb-5">
        The big day is coming...
      </p>
      <div className="flex justify-center gap-2.5 md:gap-4">
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: i * 0.12, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-[4.2rem] md:w-20 py-3 md:py-4 rounded-xl glass-strong border border-primary/20 group-hover:border-primary/40 transition-all">
              <motion.span
                key={unit.value}
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="block font-elegant text-xl md:text-3xl font-bold text-foreground"
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
              <span className="text-[8px] md:text-[10px] tracking-[0.15em] text-muted-foreground uppercase mt-1 block">
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
