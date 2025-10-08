"use client";
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Stack", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Full-screen background gradient */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navbar navItems={navItems} />

        <main id="home" className="mx-auto max-w-5xl px-6">
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}