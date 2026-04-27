"use client";
import Image from "next/image";
import { HeroSection } from "./hero-section";
import { HalftoneOverlay } from "@/components/ui/halftone-overlay";

export function HeroSectionWrapper() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <HalftoneOverlay />
      <div className="absolute right-0 top-0 h-full w-[50%] z-20">
        <Image
          src="/Anime Version Creation Apr 28 2026 (1) Background Removed.png"
          alt="Saurav Chanda"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
      <div className="relative z-10 w-full pr-[40%]">
        <HeroSection />
      </div>
    </section>
  );
}