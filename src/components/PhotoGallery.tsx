import { motion } from "framer-motion";
import senior1 from "@/assets/senior-1.jpeg";
import senior2 from "@/assets/senior-2.jpeg";
import senior3 from "@/assets/senior-3.jpeg";
import senior4 from "@/assets/senior-4.jpeg";
import senior5 from "@/assets/senior-5.jpeg";

const photos = [senior1, senior2, senior3, senior4, senior5];

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
      {photos.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, rotate: (i % 2 === 0 ? -2 : 2) }}
          whileInView={{ opacity: 1, y: 0, rotate: (i % 2 === 0 ? -1 : 1) }}
          transition={{ duration: 0.7, delay: i * 0.15 }}
          viewport={{ once: true }}
          className={`relative group ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
        >
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/40 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          <div className="relative overflow-hidden rounded-xl border border-primary/20 glow-gold">
            <img
              src={src}
              alt={`Memory ${i + 1}`}
              className="w-full h-64 md:h-72 object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGallery;
