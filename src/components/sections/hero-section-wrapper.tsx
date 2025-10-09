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
        <ScrollIndicator targetId="skills" />
      </div>
    </section>
  );
}