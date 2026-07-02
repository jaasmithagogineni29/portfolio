import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export const NeuralNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 65;
    const connectionDistance = 120;
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(maxParticles, Math.floor((canvas.width * canvas.height) / 20000));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1.5,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();

    const isDarkMode = () => document.documentElement.classList.contains('dark');

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dark = isDarkMode();
      // Draw background gradients inside canvas for backup, or rely on css gradients.
      // We will rely on CSS gradients for smoothness, and just draw the particles & lines here.
      const dotColor = dark ? 'rgba(229, 165, 135, 0.5)' : 'rgba(195, 139, 112, 0.3)';
      const lineColor = dark ? 'rgba(229, 165, 135, 0.08)' : 'rgba(195, 139, 112, 0.06)';
      const mouseLineColor = dark ? 'rgba(229, 165, 135, 0.15)' : 'rgba(195, 139, 112, 0.12)';

      // Update and draw particles
      particles.forEach((p) => {
        // Move particles
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Interactive behavior: slight push away from mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          // Apply a gentle force pushing them away
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        // Add subtle glow in dark mode
        if (dark) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'rgba(229, 165, 135, 0.5)';
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      });

      // Clear shadow properties for lines
      ctx.shadowBlur = 0;

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Adjust opacity based on distance
            const alpha = (1 - dist / connectionDistance) * 0.5;
            ctx.strokeStyle = lineColor.replace('0.08', (alpha * 0.15).toFixed(2));
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw line to mouse
        const p = particles[i];
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          const alpha = (1 - dist / mouse.radius) * 0.4;
          ctx.strokeStyle = mouseLineColor.replace('0.15', (alpha * 0.3).toFixed(2));
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
