import { motion } from "framer-motion";
import PhotoGallery from "@/components/PhotoGallery";
import EventDetails from "@/components/EventDetails";
import CountdownTimer from "@/components/CountdownTimer";
import MessageCard from "@/components/MessageCard";
import RSVPForm from "@/components/RSVPForm";

const FloatingPetal = ({ delay, x, size }: { delay: number; x: string; size: number }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{
      opacity: [0, 0.45, 0.3, 0],
      y: ["-5vh", "110vh"],
      x: [0, 20, -12, 18, 0],
      rotate: [0, 60, 120, 240, 360],
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

const InvitationContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10"
    >
      {/* Floating petals */}
      {[...Array(5)].map((_, i) => (
        <FloatingPetal
          key={i}
          delay={i * 2}
          x={`${10 + i * 18}%`}
          size={10 + Math.random() * 8}
        />
      ))}

      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center py-3 border-b border-primary/15 shimmer"
      >
        <p className="text-[9px] md:text-xs tracking-[0.3em] text-primary font-medium uppercase">
          ✦ A Personal Invitation For Niharika Akka ✦
        </p>
      </motion.div>

      {/* ─── HERO ─── */}
      <section className="flex flex-col items-center justify-center px-4 pt-12 pb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          className="mb-3"
        >
          <div className="w-12 h-12 rounded-full border border-primary/25 flex items-center justify-center animate-float glow-pink">
            <span className="text-lg animate-heartbeat">🌹</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-elegant italic text-sm text-muted-foreground mb-2 tracking-wide"
        >
          Dear Niharika Akka, you are warmly invited to our
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", bounce: 0.3 }}
          className="relative my-1"
        >
          <div className="absolute inset-0 blur-[50px] bg-primary/12 rounded-full scale-150" />
          <h1 className="relative font-display text-7xl md:text-9xl text-rose-gradient text-glow-pink leading-none">
            Farewell
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex items-center gap-2.5 mt-2 mb-4"
        >
          <motion.div initial={{ width: 0 }} animate={{ width: "2rem" }} transition={{ delay: 1, duration: 0.6 }} className="h-px bg-gradient-to-r from-transparent to-primary/40" />
          <span className="tracking-[0.4em] text-[9px] text-primary/50 uppercase">celebration</span>
          <motion.div initial={{ width: 0 }} animate={{ width: "2rem" }} transition={{ delay: 1, duration: 0.6 }} className="h-px bg-gradient-to-l from-transparent to-primary/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="text-center"
        >
          <p className="font-elegant italic text-xs text-primary/50 mb-1 tracking-wider">Celebrating & Honouring</p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="font-handwritten text-xl md:text-2xl font-bold text-gold-gradient text-glow-gold mb-1"
          >
            SURADA SRI VENKATA NIHARIKA
          </motion.h2>
          <p className="tracking-[0.25em] text-[9px] text-muted-foreground uppercase">
            Aditya University · Information Technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-5 flex items-center gap-2 text-primary/25"
        >
          <span className="animate-sparkle text-xs">✦</span>
          <span className="text-base animate-float">✿</span>
          <span className="animate-sparkle text-xs" style={{ animationDelay: "0.8s" }}>✦</span>
        </motion.div>
      </section>

      {/* ─── COUNTDOWN ─── */}
      <section className="pb-14">
        <CountdownTimer targetDate="2026-03-31T10:00:00" />
      </section>

      {/* ─── EVENT DETAILS ─── */}
      <section className="pb-14">
        <EventDetails />
      </section>

      {/* ─── DIVIDER ─── */}
      <Divider />

      {/* ─── MESSAGES ─── */}
      <section className="px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-7"
        >
          <p className="font-display text-3xl text-rose-gradient mb-2">From our hearts</p>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto" />
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
      <Divider />

      {/* ─── PHOTOS ─── */}
      <section className="py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="font-display text-4xl text-rose-gradient mb-2">Memories we cherish</p>
          <p className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">moments that last forever</p>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mt-2" />
        </motion.div>
        <PhotoGallery />
      </section>

      {/* ─── FOOTER ─── */}
      <section className="px-4 pb-20 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-sm mx-auto"
        >
          <div className="relative glass rounded-2xl p-5 border border-primary/15 glow-pink">
            <div className="absolute top-2 left-3 text-primary/12 text-2xl font-display">"</div>
            <div className="absolute bottom-2 right-3 text-primary/12 text-2xl font-display">"</div>

            <p className="tracking-[0.15em] text-[8px] text-muted-foreground uppercase mb-3">
              Aditya University
            </p>
            <p className="font-elegant italic text-sm leading-relaxed text-foreground/75">
              You have been our inspiration, our guide,
              and our greatest senior sister. This farewell is our
              way of saying — <span className="text-primary font-semibold">thank you for everything</span>, Niharika Akka. 💕
            </p>
            <div className="flex justify-center gap-4 mt-5 text-primary/35">
              <span className="animate-sparkle">🌸</span>
              <span className="animate-sparkle" style={{ animationDelay: "0.5s" }}>✦</span>
              <span className="animate-sparkle" style={{ animationDelay: "1s" }}>🌸</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-7"
          >
            <p className="font-display text-2xl text-primary/55">
              With love & respect ♥
            </p>
            <p className="font-handwritten text-lg text-accent/65 mt-1">
              — Manisanthan & Juniors
            </p>
          </motion.div>

          <div className="flex justify-center gap-2.5 mt-6">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
                className="animate-sparkle text-primary/20 text-xs"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                ✦
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

const Divider = () => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="flex justify-center py-2"
  >
    <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
  </motion.div>
);

export default InvitationContent;
arent" />
  </motion.div>
);

export default InvitationContent;
