import { motion } from "framer-motion";
import senior1 from "@/assets/senior-1.jpeg";
import senior2 from "@/assets/senior-2.jpeg";
import senior3 from "@/assets/senior-3.jpeg";
import senior4 from "@/assets/senior-4.jpeg";
import senior5 from "@/assets/senior-5.jpeg";

const photos = [
  { src: senior1, caption: "✨ Beautiful memories" },
  { src: senior2, caption: "💕 Cherished moments" },
  { src: senior3, caption: "🌸 Unforgettable days" },
  { src: senior4, caption: "💫 Shining bright" },
  { src: senior5, caption: "🌟 Forever in our hearts" },
];

const PhotoGallery = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Featured hero photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        viewport={{ once: true }}
        className="mb-8 relative group"
      >
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/40 via-accent/20 to-primary/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 animate-pulse-border">
          <img
            src={photos[0].src}
            alt="Featured memory"
            className="w-full h-72 md:h-96 object-cover object-top transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute bottom-4 left-0 right-0 text-center"
          >
            <span className="font-display text-3xl md:text-4xl text-primary drop-shadow-lg">
              Our beloved senior ♥
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Photo grid with staggered layout */}
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {photos.slice(1).map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, rotate: (i % 2 === 0 ? -3 : 3) }}
            whileInView={{ opacity: 1, y: 0, rotate: (i % 2 === 0 ? -1 : 1) }}
            whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.8, delay: i * 0.15, type: "spring" }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            {/* Glow behind */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md" />
            
            <div className="relative overflow-hidden rounded-xl border border-primary/20 group-hover:border-primary/50 transition-colors duration-500">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-52 md:h-72 object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-elegant text-sm text-center text-foreground/90 italic">
                  {photo.caption}
                </p>
              </div>
              
              {/* Corner sparkle */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-primary text-lg animate-sparkle">✦</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
