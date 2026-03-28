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
    <div className="max-w-sm mx-auto px-4 space-y-4">
      {/* Hero photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true, margin: "-40px" }}
        className="relative group"
      >
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/25 via-accent/12 to-primary/15 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 photo-frame animate-pulse-border">
          <img
            src={photos[0].src}
            alt="Niharika Akka"
            className="w-full h-80 object-cover object-center block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
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
            initial={{ opacity: 0, y: 30, rotate: (i % 2 === 0 ? -2 : 2) }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
            viewport={{ once: true, margin: "-20px" }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-400 blur-sm" />
            <div className="relative overflow-hidden rounded-xl border border-primary/15 group-hover:border-primary/35 photo-frame transition-colors duration-300">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-48 object-cover object-center block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity" />
              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-elegant text-xs text-center text-foreground/80 italic">
                  {photo.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
