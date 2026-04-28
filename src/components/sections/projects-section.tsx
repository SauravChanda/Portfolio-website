"use client";
import { motion } from "framer-motion";
import { Link, Stethoscope, Code, Car } from "lucide-react";

const projects = [
  {
    title: "SPECC",
    description: "Revolutionary API Integration Platform that eliminates code integrations with single source CRUD functions. Ultrafast setup within minutes.",
    header: (
      <div className="w-full h-full relative">
        <img
          src="/Specc.png"
          alt="SPECC Platform Screenshot"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    ),
    icon: <Code className="h-6 w-6 text-white" />,
    link: "https://specc.no/",
    size: "small"
  },
  {
    title: "Dr.Dropin",
    description: "Modern healthcare booking platform offering clinic appointments and video consultations with dermatologists. Making healthcare accessible and convenient!",
    header: (
      <div className="w-full h-full relative">
        <img
          src="/DrDropin.png"
          alt="Dr.Dropin Platform Screenshot"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    ),
    icon: <Stethoscope className="h-8 w-8 text-white" />,
    link: "https://booking.drdropin.no/?vertical=dermatologist",
    size: "large"
  },
  {
    title: "Ati Motors",
    description: "Advanced WebUI and map builder for autonomous vehicles and robotics systems.",
    header: (
      <div className="w-full h-full relative">
        <img
          src="/ATIMotors.png"
          alt="Ati Motors Platform Screenshot"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    ),
    icon: <Car className="h-6 w-6 text-white" />,
    link: "https://atimotors.com/",
    size: "tall"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-14 sm:py-20 border-t-4 border-white relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="px-6 text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">
          {'//'} PROJECTS
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-mono">
          Ready to see what I&apos;ve been building? Each project tells a story of problem-solving and innovation.
          Click around and discover the tech behind the magic!
        </p>
      </motion.div>

      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[900px] md:h-[800px]">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative bg-black border-4 border-white overflow-hidden group
                ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${project.size === "small" ? "md:col-span-1 md:row-span-1" : ""}
                ${project.size === "tall" ? "md:col-span-1 md:row-span-2" : ""}
              `}
            >
              <div className="absolute inset-0">
                {project.header}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 opacity-95 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  {project.icon}
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-white/70 font-mono line-clamp-2 md:line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-black uppercase text-xs border-2 border-white group-hover:bg-black group-hover:text-white transition-colors duration-0">
                  VISIT
                  <Link className="h-3 w-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}