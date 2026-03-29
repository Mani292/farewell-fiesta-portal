import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarField from "@/components/StarField";
import CoverPage from "@/components/CoverPage";
import InvitationContent from "@/components/InvitationContent";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <StarField />
      <MusicPlayer shouldPlay={isOpen} />

      {/* Ambient glow orbs */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-float-gentle" />
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-accent/8 rounded-full blur-[80px] animate-float-gentle" style={{ animationDelay: "3s" }} />
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <CoverPage key="cover" onOpen={() => setIsOpen(true)} />
        ) : (
          <InvitationContent key="content" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
