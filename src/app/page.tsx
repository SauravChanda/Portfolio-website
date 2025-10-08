"use client";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Stack", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <FloatingNav navItems={navItems} />
      
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-black/5 dark:border-white/10">
        <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <motion.a 
            href="#home" 
            className="text-sm font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            SC
          </motion.a>
          <ul className="flex items-center gap-6 text-sm">
            <motion.li whileHover={{ y: -2 }}><a href="#about">About</a></motion.li>
            <motion.li whileHover={{ y: -2 }}><a href="#skills">Stack</a></motion.li>
            <motion.li whileHover={{ y: -2 }}><a href="#projects">Projects</a></motion.li>
            <motion.li whileHover={{ y: -2 }}><a href="#contact">Contact</a></motion.li>
          </ul>
        </nav>
      </header>

      <main id="home" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="py-20 sm:py-28 relative">
          <BackgroundBeams className="absolute inset-0 z-0" />
          <div className="relative z-10">
            <motion.p 
              className="text-sm text-black/70 dark:text-white/70"
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
                className="text-base sm:text-lg text-black/80 dark:text-white/80"
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
                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-14 sm:py-20 border-t border-black/5 dark:border-white/10">
          <h2 className="text-2xl sm:text-3xl">About</h2>
          <p className="mt-4 max-w-3xl text-black/80 dark:text-white/80">
            I build production‑grade applications end‑to‑end: frontend UI, backend APIs, data modeling, testing, and CI/CD. I care about maintainability and shipping features efficiently.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <li className="rounded-md border p-4">Clean architecture & modular design</li>
            <li className="rounded-md border p-4">Performance: caching, SSR/ISR, profiling</li>
            <li className="rounded-md border p-4">Testing: unit, integration, e2e</li>
            <li className="rounded-md border p-4">DevOps: Docker, CI/CD, basic cloud</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section id="skills" className="py-14 sm:py-20 border-t border-black/5 dark:border-white/10">
          <motion.h2 
            className="text-2xl sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Tech Stack
          </motion.h2>
          <motion.div 
            className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { name: "TypeScript", color: "from-blue-500 to-blue-700" },
              { name: "React", color: "from-blue-400 to-blue-600" },
              { name: "Next.js", color: "from-black to-gray-700" },
              { name: "Node.js", color: "from-green-500 to-green-700" },
              { name: "Express", color: "from-gray-600 to-gray-800" },
              { name: "PostgreSQL", color: "from-blue-600 to-indigo-600" },
              { name: "Prisma", color: "from-indigo-500 to-purple-600" },
              { name: "TailwindCSS", color: "from-cyan-400 to-cyan-600" },
              { name: "Docker", color: "from-blue-500 to-blue-700" },
              { name: "AWS", color: "from-orange-400 to-orange-600" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`relative overflow-hidden rounded-lg bg-gradient-to-r ${tech.color} p-3 text-center text-white shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: Math.random() * 4 - 2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 border-t border-black/5 dark:border-white/10">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <BentoGrid className="max-w-4xl mx-auto">
            {[
              {
                title: "E-commerce Platform",
                description: "Full-stack e-commerce solution with Next.js, Stripe payments, and inventory management.",
                header: (
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"></div>
                ),
                className: "md:col-span-2",
                icon: "🛒"
              },
              {
                title: "Task Management App",
                description: "Collaborative task management with real-time updates using Socket.io and React.",
                header: (
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500"></div>
                ),
                className: "md:col-span-1",
                icon: "✅"
              },
              {
                title: "Analytics Dashboard",
                description: "Real-time analytics dashboard with interactive charts and data visualization.",
                header: (
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-500"></div>
                ),
                className: "md:col-span-1",
                icon: "📊"
              },
              {
                title: "Social Media API",
                description: "RESTful API with authentication, rate limiting, and comprehensive documentation.",
                header: (
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500"></div>
                ),
                className: "md:col-span-2",
                icon: "🔗"
              },
            ].map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={<span className="text-2xl">{item.icon}</span>}
              />
            ))}
          </BentoGrid>
        </section>

        {/* Contact */}
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
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-black/70 dark:text-white/70 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Saurav Chanda</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </div>
      </footer>
    </div>
  );
}