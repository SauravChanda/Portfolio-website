"use client";
import { PortfolioNavbar } from "@/components/sections/portfolio-navbar";
import { HeroSectionWrapper } from "@/components/sections/hero-section-wrapper";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import TechStackSection from "@/components/sections/tech-stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative scroll-smooth">
      <PortfolioNavbar />
      <HeroSectionWrapper />

      <section>
        <div className="mx-auto max-w-5xl px-6">
          <TestimonialsSection />
          <ExperienceSection />
        </div>
      </section>

      <TechStackSection />
      
      <section>
        <div className="mx-auto max-w-5xl px-6">
          <ProjectsSection />
          <ContactSection />
        </div>
      </section>

      <Footer />
    </div>
  );
}