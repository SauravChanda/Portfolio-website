"use client";
import { motion } from "framer-motion";
import { HalftoneOverlay } from "@/components/ui/halftone-overlay";

export function ContactSection() {
  return (
    <section id="contact" className="py-14 sm:py-20 border-t-4 border-white relative overflow-hidden">
      <HalftoneOverlay sectionId="contact" maxDist={200} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="px-6 text-center relative z-10"
      >
        <h2 
          className="text-2xl sm:text-3xl font-black uppercase tracking-tighter"
          style={{ WebkitTextStroke: "12px black", paintOrder: "stroke fill", strokeLinecap: "round", strokeLinejoin: "round" }}
        >
          {'//'} CONTACT
        </h2>
        <p 
          className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto font-mono"
          style={{ WebkitTextStroke: "6px black", paintOrder: "stroke fill", strokeLinecap: "round", strokeLinejoin: "round" }}
        >
          Got a project brewing in your mind? Let&apos;s turn those ideas into reality!
          I promise to respond faster than a JavaScript promise resolves
          Drop me a line and let&apos;s chat about making your vision come to life!
        </p>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:sauravchanda9@gmail.com"
            className="inline-flex items-center gap-2 rounded-none bg-white text-black px-8 py-4 text-sm font-black uppercase border-4 border-white hover:bg-black hover:text-white transition-colors duration-0 relative z-20"
            whileHover={{ x: 4, y: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            SEND EMAIL
          </motion.a>
          <motion.a
            href="tel:+918876288483"
            className="inline-flex items-center gap-2 rounded-none bg-red-600 text-white px-8 py-4 text-sm font-black uppercase border-4 border-red-600 hover:bg-red-700 transition-colors duration-0 relative z-20"
            whileHover={{ x: 4, y: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            CALL ME
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}