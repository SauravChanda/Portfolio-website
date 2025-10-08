"use client";
import { PortfolioNavbar } from "@/components/sections/portfolio-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Full-screen background gradient */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <PortfolioNavbar />

        <main id="home" className="mx-auto max-w-5xl px-6">
          <HeroSection />
          {/* <AboutSection /> */}
          <ExperienceSection />
          <TechStackSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}