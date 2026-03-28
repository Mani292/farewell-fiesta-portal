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
      canvas.height = window.innerHeight * 6;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 90 }, () => {
      const isBig = Math.random() > 0.85;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: isBig ? Math.random() * 2.5 + 1.5 : Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.4 + 0.15,
        phase: Math.random() * Math.PI * 2,
        hue: [330, 45, 280, 350][Math.floor(Math.random() * 4)],
        isBig,
        drift: (Math.random() - 0.5) * 0.2,
      };
    });

    let frame: number;
    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((s) => {
        const opacity = 0.15 + 0.5 * Math.sin(t * 0.001 * s.speed + s.phase);
        
        if (s.isBig) {
          const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
          gradient.addColorStop(0, `hsla(${s.hue}, 70%, 70%, ${opacity * 0.6})`);
          gradient.addColorStop(0.4, `hsla(${s.hue}, 60%, 60%, ${opacity * 0.2})`);
          gradient.addColorStop(1, `hsla(${s.hue}, 50%, 50%, 0)`);
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
        
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 60%, 75%, ${opacity})`;
        ctx.fill();
        
        s.x += Math.sin(t * 0.0002 + s.phase) * s.drift;
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
      style={{ opacity: 0.6 }}
    />
  );
};

export default StarField;
