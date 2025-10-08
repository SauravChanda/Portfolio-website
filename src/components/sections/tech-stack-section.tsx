"use client";
import { motion } from "framer-motion";

export function TechStackSection() {
  const techStack = [
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
  ];

  return (
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
        {techStack.map((tech, index) => (
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
  );
}