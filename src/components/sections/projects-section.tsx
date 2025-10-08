"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, CheckSquare, BarChart3, Link } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with Next.js, Stripe payments, and inventory management.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"></div>
      ),
      className: "md:col-span-2",
      icon: <ShoppingCart className="h-6 w-6 text-violet-500" />
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates using Socket.io and React.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500"></div>
      ),
      className: "md:col-span-1",
      icon: <CheckSquare className="h-6 w-6 text-emerald-500" />
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts and data visualization.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-500"></div>
      ),
      className: "md:col-span-1",
      icon: <BarChart3 className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Social Media API",
      description: "RESTful API with authentication, rate limiting, and comprehensive documentation.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500"></div>
      ),
      className: "md:col-span-2",
      icon: <Link className="h-6 w-6 text-indigo-500" />
    },
  ];

  return (
    <section id="projects" className="py-16 border-t border-border">
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold mb-8 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div className="grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {projects.map((item, i) => (
          <motion.div
            key={i}
            className={item.className}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <Card className="h-full hover:shadow-xl transition duration-200">
              <CardHeader className="p-4">
                {item.header}
              </CardHeader>
              <CardContent className="p-4 pt-0 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}