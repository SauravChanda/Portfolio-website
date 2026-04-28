"use client";
import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'
import {
  SiReact,
  SiVuedotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiGooglecloud,
  SiDocker,
  SiGithubactions,
  SiPhp,
  SiPython,
} from 'react-icons/si'
const techStackData = [
  // Frontend
  { skill: 'React', icon: SiReact, color: '#ffffff' },
  { skill: 'Vue.js', icon: SiVuedotjs, color: '#ffffff' },
  { skill: 'JavaScript', icon: SiJavascript, color: '#ffffff' },
  { skill: 'HTML', icon: SiHtml5, color: '#ffffff' },
  { skill: 'CSS', icon: SiCss, color: '#ffffff' },

  // Backend
  { skill: 'Node.js', icon: SiNodedotjs, color: '#ffffff' },
  { skill: 'Express', icon: SiExpress, color: '#ffffff' },
  { skill: 'Django', icon: SiDjango, color: '#ffffff' },
  { skill: 'Flask', icon: SiFlask, color: '#ffffff' },
  { skill: 'FastAPI', icon: SiFastapi, color: '#ffffff' },
  { skill: 'Laravel', icon: SiLaravel, color: '#ffffff' },
  { skill: 'PHP', icon: SiPhp, color: '#ffffff' },
  { skill: 'Python', icon: SiPython, color: '#ffffff' },

  // Databases
  { skill: 'MySQL', icon: SiMysql, color: '#ffffff' },
  { skill: 'PostgreSQL', icon: SiPostgresql, color: '#ffffff' },

  // Cloud & DevOps
  { skill: 'GCP', icon: SiGooglecloud, color: '#ffffff' },
  { skill: 'Docker', icon: SiDocker, color: '#ffffff' },
  { skill: 'GitHub Actions', icon: SiGithubactions, color: '#ffffff' },
]

const TechCard = memo(({ tech, index, rowId }: {
  tech: { skill: string; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string };
  index: number;
  rowId: string
}) => {
  const IconComponent = tech.icon

  return (
    <motion.div
      key={`${rowId}-${tech.skill}-${index}`}
      whileHover={{ x: 4, y: 4 }}
      className="group flex-shrink-0"
    >
      <div className="relative w-32 h-32 xs:w-36 xs:h-24 sm:w-28 sm:h-28 md:w-38 md:h-28 rounded-none overflow-hidden will-change-transform border-4 border-white bg-black">
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
          <div className="mb-3">
            <IconComponent
              className="w-8 h-8"
              style={{ color: tech.color }}
            />
          </div>
          <span className="text-sm font-black text-center text-white uppercase tracking-tighter">
            {tech.skill}
          </span>
        </div>
      </div>
    </motion.div>
  )
})

TechCard.displayName = 'TechCard'

export default function TechStackSection() {
  const duplicatedTechStack = useMemo(() => [...techStackData, ...techStackData], [])
  return (
    <section id="stack" className="py-10 bg-background relative overflow-hidden border-t-4 border-white">
      <div className="py-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-4 uppercase tracking-tighter">
            {'//'} STACK
          </h2>
          <p className="text-base text-foreground/70 max-w-2xl mx-auto px-4 font-mono">
            Wondering what tools I use to bring ideas to life? Here&apos;s my tech stack -
            each one carefully chosen for maximum impact!
          </p>
        </div>
        <div className="relative space-y-6">
          {/* First row - scrolling left with optimized animation */}
          <div className="tech-scroll-left flex gap-6 py-4">
            {duplicatedTechStack.map((tech, index) => (
              <TechCard key={`row1-${index}`} tech={tech} index={index} rowId="row1" />
            ))}
          </div>

          {/* Second row - scrolling right with optimized animation */}
          <div className="tech-scroll-right flex gap-6 py-4">
            {duplicatedTechStack.map((tech, index) => (
              <TechCard key={`row2-${index}`} tech={tech} index={index} rowId="row2" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}