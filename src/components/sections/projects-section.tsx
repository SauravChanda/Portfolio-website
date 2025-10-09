"use client";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { ShoppingCart, CheckSquare, BarChart3, Link } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with Next.js, Stripe payments, and inventory management. Because shopping should be as smooth as your checkout process! 🛒 Want to see how I handle complex state management?",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-red-500 via-orange-500 to-blue-500"></div>
      ),
      icon: <ShoppingCart className="h-6 w-6 text-red-500" />
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates using Socket.io and React. Getting things done, one task at a time! ✅ Curious about real-time features? This one's got them all!",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500"></div>
      ),
      icon: <CheckSquare className="h-6 w-6 text-emerald-500" />
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts and data visualization. Making data beautiful, one chart at a time! 📊 Love data insights? Let me show you how I make numbers tell stories!",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-500"></div>
      ),
      icon: <BarChart3 className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with authentication, posts, and real-time messaging. Connecting people through code! 🌐 Interested in scalable backend architecture? This project showcases it perfectly!",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500 via-violet-500 to-pink-500"></div>
      ),
      icon: <Link className="h-6 w-6 text-purple-500" />
    }
  ];

  return (
    <section id="projects" className="py-14 sm:py-20 border-t border-black/5 dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold">
          <span className="text-violet-600 dark:text-violet-400">💼 Projects That Make Me Proud</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Ready to see what I&apos;ve been building? Each project tells a story of problem-solving and innovation. 
          Click around and discover the tech behind the magic! 🎯
        </p>
      </motion.div>
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