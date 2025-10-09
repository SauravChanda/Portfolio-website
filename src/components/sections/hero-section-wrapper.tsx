"use client";
import { HeroSection } from "./hero-section";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export function HeroSectionWrapper() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="mx-auto max-w-5xl px-6 w-full">
        <HeroSection />
        <div className="absolute inset-0 z-0">
          <BackgroundGradientAnimation />
        </div>
        {/* Gradient fade overlay at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block">
          <ScrollIndicator targetId="skills" />
        </div>
      </div>
    </section>
  );
}