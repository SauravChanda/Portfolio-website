import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children?: React.ReactNode;
}

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 w-full h-full rounded-none bg-black border-4 border-white"></div>
      {children && (
        <div className={cn("relative z-10 w-full h-full flex items-center justify-center", className)}>
          {children}
        </div>
      )}
    </div>
  );
}