"use client";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { ShoppingCart, CheckSquare, BarChart3, Link } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with Next.js, Stripe payments, and inventory management.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-red-500 via-orange-500 to-blue-500"></div>
      ),
      icon: <ShoppingCart className="h-6 w-6 text-red-500" />
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates using Socket.io and React.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500"></div>
      ),
      icon: <CheckSquare className="h-6 w-6 text-emerald-500" />
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts and data visualization.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-500"></div>
      ),
      icon: <BarChart3 className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Social Media API",
      description: "RESTful API with authentication, rate limiting, and comprehensive documentation.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500"></div>
      ),
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1
            }}
            viewport={{ once: true }}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] border border-border w-full h-full rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <CardItem
                  translateZ="50"
                  className="w-full h-48 mb-4"
                >
                  {item.header}
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="flex items-center gap-2 mb-3"
                >
                  {item.icon}
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </CardItem>
                <CardItem
                  translateZ="40"
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  {item.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </section>
  );
}