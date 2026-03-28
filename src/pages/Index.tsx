import { motion } from "framer-motion";
import StarField from "@/components/StarField";
import PhotoGallery from "@/components/PhotoGallery";
import EventDetails from "@/components/EventDetails";
import CountdownTimer from "@/components/CountdownTimer";
import MessageCard from "@/components/MessageCard";

const FloatingPetal = ({ delay, x, size }: { delay: number; x: string; size: number }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{
      opacity: [0, 0.5, 0.3, 0],
      y: ["-5vh", "110vh"],
      x: [0, 25, -15, 20, 0],
      rotate: [0, 45, 90, 180, 270, 360],
    }}
    transition={{
      duration: 14 + Math.random() * 6,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
    className="fixed z-[5] pointer-events-none"
    style={{ left: x }}
  >
    <span style={{ fontSize: size }}>🌸</span>
  </motion.div>
);

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <StarField />

      {/* Floating petals */}
      {[...Array(6)].map((_, i) => (
        <FloatingPetal
          key={i}
          delay={i * 2.2}
          x={`${8 + i * 15}%`}
          size={10 + Math.random() * 10}
        />
      ))}

      {/* Ambient glow orbs */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-primary/6 rounded-full blur-[100px] animate-float-gentle" />
        <div className="absolute bottom-1/3 -right-20 w-52 h-52 bg-accent/5 rounded-full blur-[80px] animate-float-gentle" style={{ animationDelay: "3s" }} />
        <div className="absolute top-2/3 left-1/4 w-40 h-40 bg-primary/4 rounded-full blur-[80px] animate-float-gentle" style={{ animationDelay: "5s" }} />
      </div>

      <div className="relative z-10">
        {/* Top Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-3 border-b border-primary/15 shimmer"
        >
          <p className="text-[9px] md:text-xs tracking-[0.3em] text-primary font-medium uppercase">
            ✦ A Personal Invitation For You, Niharika Akka ✦
          </p>
        </motion.div>

        {/* ─── HERO SECTION ─── */}
        <section className="flex flex-col items-center justify-center px-4 pt-14 pb-10 min-h-[90vh]">
          {/* Rose icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="mb-4"
          >
            <div className="w-14 h-14 rounded-full border border-primary/25 flex items-center justify-center animate-float glow-pink">
              <span className="text-xl animate-heartbeat">🌹</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-elegant italic text-sm md:text-base text-muted-foreground mb-2 tracking-wide"
          >
            Dear Niharika Akka, you are warmly invited to our
          </motion.p>

          {/* FAREWELL - Big fancy text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, type: "spring", bounce: 0.35 }}
            className="relative my-2"
          >
            <div className="absolute inset-0 blur-[50px] bg-primary/15 rounded-full scale-150" />
            <h1 className="relative font-display text-7xl md:text-9xl text-rose-gradient text-glow-pink leading-none">
              Farewell
            </h1>
          </motion.div>

          {/* Celebration line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center gap-2.5 mt-3 mb-5"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "2.5rem" }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent to-primary/50"
            />
            <span className="tracking-[0.5em] text-[10px] text-primary/60 uppercase font-light">celebration</span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "2.5rem" }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="h-px bg-gradient-to-l from-transparent to-primary/50"
            />
          </motion.div>

          {/* Senior name */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-center"
          >
            <p className="font-elegant italic text-xs text-primary/50 mb-1.5 tracking-wider">
              Celebrating & Honouring
            </p>
            <motion.h2
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.12em" }}
              transition={{ delay: 1.3, duration: 1.2 }}
              className="font-handwritten text-2xl md:text-3xl font-bold text-gold-gradient text-glow-gold mb-1"
            >
              SURADA SRI VENKATA NIHARIKA
            </motion.h2>
            <p className="tracking-[0.3em] text-[9px] text-muted-foreground uppercase mt-1">
              Aditya University · Information Technology
            </p>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-6 flex items-center gap-3 text-primary/30"
          >
            <span className="animate-sparkle text-xs">✦</span>
            <span className="text-lg animate-float">✿</span>
            <span className="animate-sparkle text-xs" style={{ animationDelay: "1s" }}>✦</span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="mt-10"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1.5 text-muted-foreground/30"
            >
              <span className="text-[8px] tracking-[0.3em] uppercase">Scroll down</span>
              <div className="w-px h-6 bg-gradient-to-b from-primary/25 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* ─── COUNTDOWN ─── */}
        <section className="pb-16">
          <CountdownTimer targetDate="2026-03-31T10:00:00" />
        </section>

        {/* ─── EVENT DETAILS ─── */}
        <section className="pb-16">
          <EventDetails />
        </section>

        {/* ─── DIVIDER ─── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center py-2"
        >
          <div className="w-28 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </motion.div>

        {/* ─── MESSAGES SECTION ─── */}
        <section className="px-4 py-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="font-display text-3xl text-rose-gradient mb-2">From our hearts</p>
            <div className="w-14 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto" />
          </motion.div>

          <div className="max-w-sm mx-auto space-y-4">
            <MessageCard
              emoji="🌟"
              quote="Every end is a new beginning, and for us, that beginning is finally getting to meet you! We invite you to a special farewell ceremony to celebrate your achievements and to share a first (and fond) memory together."
              attribution="New Beginnings"
              delay={0.1}
            />
            <MessageCard
              emoji="💫"
              quote="To a senior sister we've looked forward to meeting: they say the two hardest things to say are 'hello' for the first time and 'goodbye' for the last. Please join us for your farewell party so we can do both with style, warmth, and the respect you deserve."
              attribution="Hello & Goodbye"
              delay={0.2}
            />
            <MessageCard
              emoji="🌹"
              quote="A farewell is necessary before we can meet again, and meeting again is certain for those who are friends."
              attribution="A Meaningful Quote"
              delay={0.3}
            />
          </div>
        </section>

        {/* ─── DIVIDER ─── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center py-2"
        >
          <div className="w-28 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </motion.div>

        {/* ─── MEMORIES / PHOTOS ─── */}
        <section className="py-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl text-rose-gradient mb-2"
            >
              Memories we cherish
            </motion.p>
            <p className="text-[9px] tracking-[0.25em] text-muted-foreground uppercase">moments that last forever</p>
            <div className="w-14 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mt-2" />
          </motion.div>
          <PhotoGallery />
        </section>

        {/* ─── FOOTER MESSAGE ─── */}
        <section className="px-4 pb-20 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-sm mx-auto"
          >
            <div className="relative glass rounded-2xl p-6 border border-primary/15 glow-pink">
              <div className="absolute top-2 left-3 text-primary/15 text-2xl font-display">"</div>
              <div className="absolute bottom-2 right-3 text-primary/15 text-2xl font-display">"</div>

              <p className="tracking-[0.15em] text-[9px] text-muted-foreground uppercase mb-4">
                Aditya University
              </p>
              <p className="font-elegant italic text-sm leading-relaxed text-foreground/80">
                You have been our inspiration, our guide,
                and our greatest senior sister. This farewell is our
                way of saying — <span className="text-primary font-semibold">thank you for everything</span>, Niharika Akka. 💕
              </p>
              <div className="flex justify-center gap-4 mt-6 text-primary/40">
                <span className="animate-sparkle">🌸</span>
                <span className="animate-sparkle" style={{ animationDelay: "0.5s" }}>✦</span>
                <span className="animate-sparkle" style={{ animationDelay: "1s" }}>🌸</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <p className="font-display text-2xl text-primary/60 mb-1">
                With love & respect ♥
              </p>
              <p className="font-handwritten text-lg text-accent/70">
                — Manisanthan & Juniors
              </p>
            </motion.div>

            {/* Final sparkle row */}
            <div className="flex justify-center gap-3 mt-8 text-primary/20">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  viewport={{ once: true }}
                  className="animate-sparkle text-xs"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  ✦
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Index;
