"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

const navigationItems = [
  { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Stack", link: "#stack" },
//   { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export function PortfolioNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavItemClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Navbar className="fixed inset-x-0 top-1 md:top-5 z-50">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
          <div className="flex h-10 w-10 items-center justify-center bg-white text-black font-black text-sm overflow-hidden border-4 border-white">
            <img src="/Logo.png" alt="Saurav Chanda" width={40} height={40} />
          </div>
          <span 
            className="font-black text-white uppercase tracking-tighter"
            style={{ WebkitTextStroke: "16px black", paintOrder: "stroke fill", strokeLinecap: "round", strokeLinejoin: "round" }}
          >
            SAURAV CHANDA
          </span>
        </div>

        {/* Navigation Items */}
        <NavItems items={navigationItems} onItemClick={handleNavItemClick} />

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* <a
            href="#contact"
            className="hidden lg:inline-block px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Get in Touch
          </a> */}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Mobile Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
            <div className="flex h-10 w-10 items-center justify-center bg-white text-black font-black text-sm overflow-hidden border-4 border-white">
              <img src="/Logo.png" alt="Saurav Chanda" width={40} height={40} />
            </div>
            <span className="font-black text-white uppercase tracking-tighter">
              SAURAV CHANDA
            </span>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center space-x-2">
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={handleMobileMenuToggle}
            />
          </div>
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navigationItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={handleMobileItemClick}
              className="block w-full px-4 py-3 text-left text-white hover:bg-white hover:text-black uppercase font-black transition-colors border-2 border-white"
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4 pt-4 border-2 border-white">
            <a
              href="#contact"
              className="w-full block px-4 py-3 bg-white text-black text-sm font-black uppercase text-center border-2 border-white"
              onClick={handleMobileItemClick}
            >
              GET IN TOUCH
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}