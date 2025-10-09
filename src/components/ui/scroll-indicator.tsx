"use client";
import { motion } from "framer-motion";
import { ScrollToSection } from "./scroll-to-section";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  targetId: string;
}

export function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  return (
    <motion.div
      className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <ScrollToSection
        targetId={targetId}
        className="flex flex-col items-center text-foreground/60 hover:text-foreground transition-colors group"
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </motion.div>
      </ScrollToSection>
    </motion.div>
  );
}