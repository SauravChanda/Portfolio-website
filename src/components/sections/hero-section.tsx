"use client";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-20 sm:py-28 relative min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.p 
              className="text-sm text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I&apos;m
            </motion.p>
            <motion.h1 
              className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Saurav Chanda
              </span>
            </motion.h1>
            <div className="mt-4 max-w-2xl">
              <TextGenerateEffect 
                words="Full‑stack developer crafting fast, accessible products with Next.js, React, Node.js, and PostgreSQL. I focus on clean architecture, DX, and delightful user experiences."
                className="text-base sm:text-lg text-foreground/80"
              />
            </div>
            <motion.div 
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild>
                  <a href="#projects">
                    View Projects
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" asChild>
                  <a href="#contact">
                    Contact Me
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end hidden md:block">
            <div className="relative">
              {/* Gradient background circle - outside animation to prevent white flash */}
              <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-white dark:via-white dark:to-white rounded-lg blur-2xl opacity-30 dark:opacity-20"></div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Profile image container */}
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm">
                    <Image
                      src="/Saurav.png"
                      alt="Saurav Chanda - Full-stack Developer"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                      style={{
                        filter: 'drop-shadow(rgba(255, 255, 255, 1) 0px 0px 6px) drop-shadow(rgba(255, 255, 255, 0.8) 0px 0px 40px) '
                      }}
                    />
                    {/* Subtle inner glow to smooth edges */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none"></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}