"use client";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-14 sm:py-20 border-t border-black/5 dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold">
          <span className="text-rose-600 dark:text-rose-400">💬 Ready to Start Something Amazing?</span>
        </h2>
        <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
          Got a project brewing in your mind? Let&apos;s turn those ideas into reality! 
          I promise to respond faster than a JavaScript promise resolves ⚡ 
          Drop me a line and let&apos;s chat about making your vision come to life! 🚀
        </p>
        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:sauravchanda9@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-6 py-3 text-sm font-medium shadow hover:bg-indigo-500"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📧</span>
            Send Email
          </motion.a>
          <motion.a
            href="tel:+918876288483"
            className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📞</span>
            Call Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}