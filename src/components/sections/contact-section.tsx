"use client";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 border-t border-black/5 dark:border-white/10">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Let&apos;s Work Together
        </motion.h2>
        <motion.p 
          className="mt-4 text-base sm:text-lg text-black/80 dark:text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I&apos;m always interested in new opportunities and collaborations. 
          Whether you have a project in mind or just want to chat about tech, feel free to reach out!
        </motion.p>
        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:hello@sauravchanda.dev"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-6 py-3 text-sm font-medium shadow hover:bg-indigo-500"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📧</span>
            Send Email
          </motion.a>
          <motion.a
            href="https://calendly.com/sauravchanda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📅</span>
            Schedule Call
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}