"use client";
import { PortfolioNavbar } from "@/components/sections/portfolio-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative scroll-smooth">
      {/* Full-screen background gradient */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <PortfolioNavbar />

        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="mx-auto max-w-5xl px-6 w-full">
            <HeroSection />
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-5xl px-6">
            <TestimonialsSection />
            <TechStackSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}