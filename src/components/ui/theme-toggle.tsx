"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <div className="h-9 w-9 animate-pulse rounded-md bg-muted" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-md border bg-background p-2 text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}