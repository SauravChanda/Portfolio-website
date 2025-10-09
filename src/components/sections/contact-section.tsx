"use client";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 border-t border-black/5 dark:border-white/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Conversational Headers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.p 
              className="text-lg text-muted-foreground mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              📞 Ready to make some digital magic happen?
            </motion.p>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let&apos;s Work Together
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Got a project that needs some <em>connection</em>? Let&apos;s network and create something awesome together! 🌐✨
            </motion.p>
          </motion.div>
          
          <motion.p 
            className="mt-4 text-base sm:text-lg text-black/80 dark:text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            I&apos;m always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to chat about tech, feel free to reach out!
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
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
      </div>
    </section>
  );
}