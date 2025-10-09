"use client";

import { useLenis } from "lenis/react";

interface ScrollToSectionProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export function ScrollToSection({ 
  targetId, 
  children, 
  className = "",
  offset = 0 
}: ScrollToSectionProps) {
  const lenis = useLenis();

  const handleClick = () => {
    if (lenis) {
      lenis.scrollTo(`#${targetId}`, {
        offset: offset,
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}