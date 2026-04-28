"use client";
import { useEffect, useRef } from "react";

interface HalftoneOverlayProps {
  sectionId?: string;
  maxDist?: number;
}

export function HalftoneOverlay({ sectionId = "home", maxDist = 450 }: HalftoneOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<{ x: number; y: number; baseSize: number }[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    sectionRef.current = document.getElementById(sectionId);
    const canvas = canvasRef.current;
    if (!canvas || !sectionRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initDots();
    };

    const initDots = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const spacing = 20;
      dotsRef.current = [];
      for (let x = spacing / 2; x < rect.width; x += spacing) {
        for (let y = spacing / 2; y < rect.height; y += spacing) {
          dotsRef.current.push({ x, y, baseSize: 2 });
        }
      }
    };

    const animate = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const maxDistVal = maxDist;
      const maxSize = 12;
      const minSize = 1;
      const chromaOffsetX = 3;
      const chromaOffsetY = 2;

      const offsetX = rect.left;
      const offsetY = rect.top;

      dotsRef.current.forEach((dot) => {
        const dx = mouseRef.current.x - (dot.x + offsetX);
        const dy = mouseRef.current.y - (dot.y + offsetY);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistVal) {
          const intensity = 1 - dist / maxDist;
          const size = minSize + (maxSize - minSize) * Math.pow(intensity, 2);

          ctx.fillStyle = "rgba(220, 38, 38, 0.85)";
          ctx.beginPath();
          ctx.arc(dot.x + chromaOffsetX, dot.y - chromaOffsetY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      dotsRef.current.forEach((dot) => {
        const dx = mouseRef.current.x - (dot.x + offsetX);
        const dy = mouseRef.current.y - (dot.y + offsetY);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistVal) {
          const intensity = 1 - dist / maxDist;
          const size = minSize + (maxSize - minSize) * Math.pow(intensity, 2);

          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inSection = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );
      if (inSection) {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[1]">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}