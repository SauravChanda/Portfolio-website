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
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigationItems = [
//   { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Stack", link: "#stack" },
  { name: "Projects", link: "#projects" },
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

  return (
    <Navbar className="fixed inset-x-0 top-1 md:top-5 z-50">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-sm">
            S
          </div>
          <span className="font-semibold text-neutral-900 dark:text-neutral-100">
            Saurav Chanda
          </span>
        </div>

        {/* Navigation Items */}
        <NavItems items={navigationItems} />

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden lg:inline-block px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Mobile Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-sm">
              S
            </div>
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              Saurav Chanda
            </span>
          </div>

          {/* Mobile menu toggle and theme toggle */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
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
              className="block w-full px-4 py-2 text-left text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4 pt-4 border-neutral-200 dark:border-neutral-700">
            <a
              href="#contact"
              className="w-full block px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors text-center"
              onClick={handleMobileItemClick}
            >
              Get in Touch
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}