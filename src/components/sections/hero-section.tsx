"use client";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { ScrollToSection } from "@/components/ui/scroll-to-section";

export function HeroSection() {
  return (
    <div className="px-8 sm:px-12 lg:px-16 py-24">
      <div>
        <motion.p
          className="text-xl text-foreground/60 tracking-widest uppercase font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ WebkitTextStroke: "12px black", paintOrder: "stroke fill", strokeLinecap: "round", strokeLinejoin: "round" }}
        >
          {'//'} welcome
        </motion.p>
        <motion.h1
          className="mt-6 text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ WebkitTextStroke: "3px black", paintOrder: "stroke fill", strokeLinecap: "round", strokeLinejoin: "round", textShadow: "4px 4px 0 #dc143c, 8px 8px 0 #000" }}
        >
          <span className="text-white">
            SAURAV
          </span>
          <br />
          <span className="text-white">CHANDA</span>
        </motion.h1>
        <div className="mt-12 max-w-xl">
          <TextGenerateEffect
            words="I build full-stack apps, wrangle clouds, and ship features faster than you can say 'pnpm install'"
            className="text-xl sm:text-2xl text-foreground font-mono"
          />
        </div>
        <motion.div
          className="mt-16 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ x: 4, y: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ScrollToSection targetId="projects">
              <Button className="text-lg px-8 py-6 rounded-none border-4 border-white bg-white text-black hover:bg-black hover:text-white transition-colors duration-0 font-black uppercase">
                VIEW PROJECTS
              </Button>
            </ScrollToSection>
          </motion.div>
          <motion.div
            whileHover={{ x: 4, y: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ScrollToSection targetId="contact">
              <Button variant="outline" className="text-lg px-8 py-6 rounded-none border-4 border-red-600 bg-red-600 text-white hover:bg-red-700 transition-colors duration-0 font-black uppercase">
                CONTACT ME
              </Button>
            </ScrollToSection>
          </motion.div>
          <motion.div
            whileHover={{ x: 4, y: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" asChild className="text-lg px-8 py-6 rounded-none border-4 border-white text-white hover:bg-white hover:text-black transition-colors duration-0 font-black uppercase">
              <a
                href="https://www.linkedin.com/in/saurav-chanda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}