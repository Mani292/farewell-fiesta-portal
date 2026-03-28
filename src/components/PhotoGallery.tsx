import { motion } from "framer-motion";
import senior1 from "@/assets/senior-1.jpeg";
import senior2 from "@/assets/senior-2.jpeg";
import senior3 from "@/assets/senior-3.jpeg";
import senior4 from "@/assets/senior-4.jpeg";
import senior5 from "@/assets/senior-5.jpeg";

const photos = [
  { src: senior1, caption: "✨ Beautiful memories" },
  { src: senior2, caption: "💕 Cherished moments" },
  { src: senior3, caption: "🌸 Unforgettable" },
  { src: senior4, caption: "💫 Shining bright" },
  { src: senior5, caption: "🌟 Forever loved" },
];

const PhotoGallery = () => {
  return (
    <div className="max-w-sm mx-auto px-4 space-y-5">
      {/* Hero photo - larger */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative group"
      >
        <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/15 to-primary/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative overflow-hidden rounded-2xl border border-primary/25 photo-frame animate-pulse-border">
          <img
            src={photos[0].src}
            alt="Our beloved Niharika akka"
            className="w-full h-80 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-3 left-0 right-0 text-center"
          >
            <span className="font-display text-2xl text-primary drop-shadow-lg">
              Our beloved Niharika Akka ♥
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-3">
        {photos.slice(1).map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotate: (i % 2 === 0 ? -2 : 2) }}
            whileInView={{ opacity: 1, y: 0, rotate: (i % 2 === 0 ? -0.5 : 0.5) }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            transition={{ duration: 0.6, delay: i * 0.12, type: "spring" }}
            viewport={{ once: true, margin: "-30px" }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-accent/15 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
            <div className="relative overflow-hidden rounded-xl border border-primary/15 group-hover:border-primary/40 photo-frame transition-colors duration-300">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-44 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <p className="font-elegant text-xs text-center text-foreground/90 italic">
                  {photo.caption}
                </p>
              </div>
              {/* Corner sparkle */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="text-primary text-sm animate-sparkle">✦</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
