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
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        viewport={{ once: true, margin: "-40px" }}
        className="relative group cursor-pointer"
      >
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/15 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 photo-frame animate-pulse-border shadow-md">
          <img
            src={photos[0].src}
            alt="Niharika Akka"
            className="w-full h-96 object-cover object-center block transition-transform duration-[2000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-6 left-0 right-0 text-center px-4"
          >
            <span className="font-display text-3xl md:text-4xl text-rose-gradient drop-shadow-sm">
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
            initial={{ opacity: 0, y: 40, rotate: (i % 2 === 0 ? -3 : 3) }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            whileHover={{ 
              scale: 1.05, 
              rotate: (i % 2 === 0 ? 1 : -1),
              zIndex: 20,
              transition: { duration: 0.3 }
            }}
            transition={{ 
              duration: 0.8, 
              delay: i * 0.15, 
              type: "spring",
              bounce: 0.4 
            }}
            viewport={{ once: true, margin: "-20px" }}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md" />
            <div className="relative overflow-hidden rounded-xl border border-primary/10 group-hover:border-primary/40 photo-frame transition-all duration-500 shadow-sm group-hover:shadow-xl">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-48 object-cover object-center block transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-display text-lg text-center text-primary italic">
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
