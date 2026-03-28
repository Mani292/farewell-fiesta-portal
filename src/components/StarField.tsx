import { useEffect, useRef } from "react";

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create different particle types
    const particles = Array.from({ length: 100 }, () => {
      const type = Math.random();
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: type > 0.8 ? Math.random() * 3 + 1.5 : Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.4 + 0.15,
        phase: Math.random() * Math.PI * 2,
        hue: type > 0.6 ? 320 : type > 0.3 ? 35 : 270,
        saturation: 50 + Math.random() * 30,
        drift: (Math.random() - 0.5) * 0.3,
        type: type > 0.9 ? 'big' : 'small',
      };
    });

    let frame: number;
    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((s) => {
        const opacity = 0.15 + 0.45 * Math.sin(t * 0.001 * s.speed + s.phase);
        
        if (s.type === 'big') {
          // Larger glowing orbs
          const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
          gradient.addColorStop(0, `hsla(${s.hue}, ${s.saturation}%, 70%, ${opacity * 0.8})`);
          gradient.addColorStop(0.5, `hsla(${s.hue}, ${s.saturation}%, 60%, ${opacity * 0.3})`);
          gradient.addColorStop(1, `hsla(${s.hue}, ${s.saturation}%, 50%, 0)`);
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
        
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, ${s.saturation}%, 75%, ${opacity})`;
        ctx.fill();
        
        // Slow drift
        s.x += Math.sin(t * 0.0003 + s.phase) * s.drift;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
      });
      
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default StarField;
