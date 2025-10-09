import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children?: React.ReactNode;
}

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div className="relative w-full h-full">
      {/* Clean glass background with crisp blur */}
      <div className="absolute inset-0 w-full h-full rounded-lg backdrop-blur-md bg-white/40 dark:bg-white/10 shadow-xl shadow-black/5 dark:shadow-white/5"></div>

      {/* Crystal clear borders */}
      <div className="absolute inset-0 rounded-lg border border-white/60 dark:border-white/20"></div>

      {/* Pristine top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 dark:via-white/60 to-transparent"></div>

      {/* Clean left highlight */}
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/80 dark:via-white/60 to-transparent"></div>

      {/* Subtle inner reflection */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 dark:from-white/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Clean bottom shadow for depth */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"></div>

      {children && (
        <div className={cn("relative z-10 w-full h-full flex items-center justify-center", className)}>
          {children}
        </div>
      )}
    </div>
  );
}