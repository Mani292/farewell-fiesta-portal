import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StarField from "@/components/StarField";
import PhotoGallery from "@/components/PhotoGallery";
import EventDetails from "@/components/EventDetails";
import CountdownTimer from "@/components/CountdownTimer";

const FloatingPetal = ({ delay, x, size }: { delay: number; x: string; size: number }) => (
  <motion.div
    initial={{ opacity: 0, y: -20, rotate: 0 }}
    animate={{ 
      opacity: [0, 0.6, 0],
      y: ["-5vh", "105vh"],
      rotate: [0, 360],
      x: [0, 30, -20, 15]
    }}
    transition={{ 
      duration: 12 + Math.random() * 8,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
    className="fixed z-[5] pointer-events-none"
    style={{ left: x }}
  >
    <span style={{ fontSize: size }} className="opacity-40">🌸</span>
  </motion.div>
);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-background">
      <StarField />
      
      {/* Floating petals */}
      {[...Array(8)].map((_, i) => (
        <FloatingPetal 
          key={i} 
          delay={i * 1.8} 
          x={`${10 + Math.random() * 80}%`} 
          size={12 + Math.random() * 14}
        />
      ))}

      {/* Ambient gradient blobs */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10">
        {/* Top Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-3 border-b border-primary/15 shimmer backdrop-blur-sm"
        >
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-primary font-medium uppercase">
            ✦ A Personal Invitation For You ✦
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.section 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="flex flex-col items-center justify-center px-4 pt-20 pb-16 md:pt-28 md:pb-20 min-h-[85vh]"
        >
          {/* Decorative top element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="mb-6"
          >
            <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center animate-float">
              <span className="text-2xl">🌹</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-elegant italic text-base md:text-lg text-muted-foreground mb-3 tracking-wide"
          >
            Dear Akka, you are warmly invited to our
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            {/* Glow behind text */}
            <div className="absolute inset-0 blur-3xl bg-primary/10 rounded-full scale-150" />
            <h1 className="relative font-display text-8xl md:text-[10rem] lg:text-[12rem] text-rose-gradient text-glow leading-none">
              Farewell
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center gap-3 mt-4 mb-6"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="tracking-[0.6em] text-[11px] text-primary/70 uppercase font-light">celebration</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center"
          >
            <p className="font-elegant italic text-sm text-primary/60 mb-2 tracking-wider">
              Celebrating & Honouring
            </p>
            <h2 className="font-elegant text-2xl md:text-4xl font-bold tracking-[0.15em] text-foreground mb-1.5">
              LEGACY 2K26
            </h2>
            <p className="tracking-[0.35em] text-[10px] text-muted-foreground uppercase">
              Aditya University · Information Technology
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-muted-foreground/40"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Countdown Section */}
        <section className="px-4 pb-20">
          <CountdownTimer targetDate="2026-03-31T10:00:00" />
        </section>

        {/* Event Details */}
        <section className="px-4 pb-20">
          <EventDetails />
        </section>

        {/* Divider */}
        <div className="flex justify-center py-4">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />
        </div>

        {/* Memories Section */}
        <section className="px-4 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-6xl text-rose-gradient mb-3"
            >
              Memories we cherish
            </motion.p>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">moments that last forever</p>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mt-3" />
          </motion.div>
          <PhotoGallery />
        </section>

        {/* Footer / Message */}
        <section className="px-4 pb-24 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-md mx-auto"
          >
            <div className="relative glass rounded-2xl p-8 border border-primary/15 glow-rose">
              <div className="absolute top-4 left-4 text-primary/20 text-4xl font-display">"</div>
              <div className="absolute bottom-4 right-4 text-primary/20 text-4xl font-display">"</div>
              
              <p className="tracking-[0.2em] text-[10px] text-muted-foreground uppercase mb-5">
                Aditya University
              </p>
              <p className="font-elegant italic text-base md:text-lg leading-relaxed text-foreground/80">
                You have been our inspiration, our guide,
                and our greatest senior sister. This farewell is our
                way of saying — <span className="text-primary">thank you for everything</span>. 💕
              </p>
              <div className="flex justify-center gap-5 mt-8 text-primary/50">
                <span className="animate-sparkle">🌸</span>
                <span className="animate-sparkle" style={{ animationDelay: "0.5s" }}>✦</span>
                <span className="animate-sparkle" style={{ animationDelay: "1s" }}>🌸</span>
              </div>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl text-primary/70 mt-10"
            >
              With love, your juniors ♥
            </motion.p>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Index;
