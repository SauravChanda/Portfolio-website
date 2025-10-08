"use client";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function ProjectsSection() {
  const projects = [
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
  ];

  return (
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
        {projects.map((item, i) => (
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
  );
}