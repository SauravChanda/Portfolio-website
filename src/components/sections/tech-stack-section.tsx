"use client";
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiGithub,
  SiFirebase,
} from 'react-icons/si'

const techStackData = [
  { skill: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { skill: 'CSS', icon: SiCss3, color: '#1572B6' },
  { skill: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { skill: 'SASS', icon: SiSass, color: '#CC6699' },
  { skill: 'React JS', icon: SiReact, color: '#61DAFB' },
  { skill: 'GitHub', icon: SiGithub, color: '#181717' },
  { skill: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { skill: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { skill: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { skill: 'Docker', icon: SiDocker, color: '#2496ED' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 10,
    },
  },
}

export default function TechStackSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {techStackData.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <motion.div
                key={tech.skill}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
                className="group"
              >
                <Card className="p-6 h-32 flex flex-col items-center justify-center bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/5 hover:bg-white/15 dark:hover:bg-white/10">
                  <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent 
                      className="w-8 h-8 transition-colors duration-300 drop-shadow-sm" 
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="text-sm font-medium text-center text-foreground/90 group-hover:text-foreground transition-colors duration-300 drop-shadow-sm">
                    {tech.skill}
                  </span>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}