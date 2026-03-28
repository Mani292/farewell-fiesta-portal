import { motion } from "framer-motion";
import StarField from "@/components/StarField";
import PhotoGallery from "@/components/PhotoGallery";
import EventDetails from "@/components/EventDetails";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--dark-gradient)" }}>
      <StarField />

      <div className="relative z-10">
        {/* Top Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-4 border-b border-primary/20 shimmer"
        >
          <p className="text-xs md:text-sm tracking-[0.35em] text-primary font-medium uppercase">
            ✦ A Heartfelt Invitation From Your Juniors ✦
          </p>
        </motion.div>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-elegant italic text-lg md:text-xl text-muted-foreground mb-2"
          >
            Dear Senior, you are warmly invited to
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="font-display text-6xl md:text-8xl lg:text-9xl text-gold-gradient italic mb-2"
          >
            Farewell
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="tracking-[0.5em] text-sm text-muted-foreground uppercase">P A R T Y</span>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "12rem" }}
            transition={{ delay: 1, duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-center"
          >
            <p className="font-elegant italic text-lg text-primary/80 mb-2">
              — Celebrating & Honouring —
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wider text-foreground mb-2">
              LEGACY 2K26
            </h2>
            <p className="tracking-[0.3em] text-xs text-muted-foreground uppercase">
              Information Technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-6 text-primary animate-float text-2xl"
          >
            ◆
          </motion.div>
        </section>

        {/* Event Details */}
        <section className="px-4 pb-16">
          <EventDetails />
        </section>

        {/* Memories Section */}
        <section className="px-4 pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="font-elegant italic text-xl md:text-2xl text-primary/70 mb-1">
              Memories we cherish
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
          </motion.div>
          <PhotoGallery />
        </section>

        {/* Footer / Message */}
        <section className="px-4 pb-20 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-md mx-auto"
          >
            <p className="tracking-[0.2em] text-xs text-muted-foreground uppercase mb-6">
              SSN College of Engineering
            </p>
            <p className="font-elegant italic text-lg md:text-xl leading-relaxed text-foreground/70">
              You have been our inspiration, our guide,
              and our greatest senior. This farewell is our
              way of saying — thank you for everything.
            </p>
            <div className="flex justify-center gap-4 mt-8 text-primary/40">
              <span className="animate-sparkle">✦</span>
              <span className="animate-sparkle" style={{ animationDelay: "0.5s" }}>✦</span>
              <span className="animate-sparkle" style={{ animationDelay: "1s" }}>✦</span>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="font-elegant italic text-primary/50 text-sm mt-8"
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
