import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children?: React.ReactNode;
}

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      {/* Glass background with blur effect */}
      <div className="absolute inset-0 w-full h-full rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5"></div>
      
      {/* Glass borders and highlights */}
      <div className="absolute inset-0 rounded-lg border border-white/20 dark:border-white/10"></div>
      
      {/* Top highlight for glass effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      
      {/* Left highlight for glass effect */}
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
      
      {children && (
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}