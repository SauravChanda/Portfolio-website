"use client";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function HeroSection() {
  return (
    <section className="py-20 sm:py-28 relative">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="relative z-10">
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
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-500"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-foreground/5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-foreground/5"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-foreground/5"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}