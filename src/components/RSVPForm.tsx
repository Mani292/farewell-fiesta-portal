import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Send, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("RSVP sent successfully! Niharika Akka will be happy to see you.");
    }, 1500);
  };

  return (
    <div className="max-w-sm mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-3xl p-8 border border-primary/20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Heart size={80} className="text-primary" />
        </div>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <h3 className="font-display text-2xl text-rose-gradient mb-2">Will you be there?</h3>
              <p className="text-xs text-muted-foreground">Let Niharika Akka know if you're joining the celebration</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-primary/60 ml-1">Your Name</label>
                <Input
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background/50 border-primary/10 focus:border-primary/30 rounded-xl"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 group"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send RSVP <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="text-primary" size={32} />
            </div>
            <h3 className="font-display text-2xl text-primary mb-2">Thank you, {name}!</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your response has been recorded. We can't wait to see you at the farewell!
            </p>
            <Button
              variant="link"
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-xs text-primary/60"
            >
              Change response
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default RSVPForm;
