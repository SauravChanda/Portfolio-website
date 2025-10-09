"use client";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { ShoppingCart, CheckSquare, BarChart3, Link, Stethoscope, Code, Car } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "SPECC - API Integration Platform",
      description: "Revolutionary platform that eliminates code integrations with single source CRUD functions. Update all API integrations in one go, saving precious time and repetitive work! 🚀 Ultrafast setup within minutes with seamless multi-environment support.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
          <img 
            src="/Specc.png" 
            alt="SPECC Platform Screenshot" 
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-xl"></div>
        </div>
      ),
      icon: <Code className="h-6 w-6 text-blue-600" />,
      link: "https://specc.no/"
    },
    {
      title: "Dr.Dropin - Digital Healthcare",
      description: "Modern healthcare booking platform offering clinic appointments and video consultations with dermatologists. Making healthcare accessible and convenient! 🏥 Streamlined patient experience with seamless booking flow.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 relative overflow-hidden">
          <img 
            src="/DrDropin.png" 
            alt="Dr.Dropin Platform Screenshot" 
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-teal-500/20 to-blue-500/20 rounded-xl"></div>
        </div>
      ),
      icon: <Stethoscope className="h-6 w-6 text-green-500" />,
      link: "https://booking.drdropin.no/?vertical=dermatologist"
    },
    {
      title: "Ati Motors - Autonomous Robotics WebUI",
      description: "Advanced WebUI and map builder for autonomous vehicles and robotics systems. Revolutionizing work with cutting-edge autonomous technology! 🤖 Features real-time mapping, vehicle control interface, and comprehensive fleet management dashboard.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
          <img 
            src="/ATIMotors.png" 
            alt="Ati Motors Platform Screenshot" 
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-xl"></div>
        </div>
      ),
      icon: <Car className="h-6 w-6 text-orange-500" />,
      link: "https://atimotors.com/"
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
            className="h-full min-h-[400px] flex"
          >
            <CardContainer className="inter-var h-full">
              <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] border border-border w-full h-full rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex flex-col">
                <CardItem
                  translateZ="50"
                  className="w-full h-48 mb-4 flex-shrink-0"
                >
                  {item.header}
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="flex items-center gap-2 mb-3 flex-shrink-0"
                >
                  {item.icon}
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </CardItem>
                <CardItem
                  translateZ="40"
                  className="text-sm text-muted-foreground leading-relaxed flex-grow"
                >
                  {item.description}
                </CardItem>
                {item.link && (
                  <CardItem
                    translateZ="20"
                    className="mt-4 flex-shrink-0"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      Visit Project
                      <Link className="h-4 w-4" />
                    </a>
                  </CardItem>
                )}
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </section>
  );
}