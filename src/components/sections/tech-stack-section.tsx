"use client";
import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'
import {
  SiReact,
  SiVuedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiGithubactions,
  SiPhp,
  SiPython,
} from 'react-icons/si'

const techStackData = [
  // Frontend
  { skill: 'React', icon: SiReact, color: '#61DAFB' },
  { skill: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
  { skill: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { skill: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { skill: 'CSS', icon: SiCss3, color: '#1572B6' },
  
  // Backend
  { skill: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { skill: 'Express', icon: SiExpress, color: '#000000' },
  { skill: 'Django', icon: SiDjango, color: '#092E20' },
  { skill: 'Flask', icon: SiFlask, color: '#000000' },
  { skill: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { skill: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { skill: 'PHP', icon: SiPhp, color: '#777BB4' },
  { skill: 'Python', icon: SiPython, color: '#3776AB' },
  
  // Databases
  { skill: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { skill: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  
  // Cloud & DevOps
  { skill: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { skill: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
  { skill: 'Docker', icon: SiDocker, color: '#2496ED' },
  { skill: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
]

// Memoized TechCard component to prevent unnecessary re-renders
const TechCard = memo(({ tech, index, rowId }: { 
  tech: { skill: string; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string }; 
  index: number; 
  rowId: string 
}) => {
  const IconComponent = tech.icon
  
  return (
    <motion.div
      key={`${rowId}-${tech.skill}-${index}`}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className="group flex-shrink-0"
    >
      <div className="relative w-32 h-32 xs:w-36 xs:h-24 sm:w-28 sm:h-28 md:w-38 md:h-28 rounded-lg overflow-hidden will-change-transform">
        {/* Simplified glassmorphism effect */}
        <div className="absolute inset-0 rounded-lg backdrop-blur-md bg-white/80 dark:bg-white/10 shadow-xl border border-black/10 dark:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:border-black/35 dark:group-hover:border-white/30"></div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
          <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
            <IconComponent 
              className="w-8 h-8 transition-colors duration-300 drop-shadow-sm" 
              style={{ color: tech.color }}
            />
          </div>
          <span className="text-sm font-medium text-center text-foreground/90 group-hover:text-foreground transition-colors duration-300 drop-shadow-sm">
            {tech.skill}
          </span>
        </div>
      </div>
    </motion.div>
  )
})

TechCard.displayName = 'TechCard'

export default function TechStackSection() {
  // Memoize duplicated array to prevent recreation on every render
  const duplicatedTechStack = useMemo(() => [...techStackData, ...techStackData], [])
  return (
    <section id="stack" className="py-10 bg-background relative overflow-hidden">
      <div className="py-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              <span className="text-cyan-600 dark:text-cyan-400">🛠️ My Tech Arsenal</span>
            </h2>
          <p className="text-base text-foreground/70 max-w-2xl mx-auto px-4">
            Wondering what tools I use to bring ideas to life? Here&apos;s my tech stack - 
            each one carefully chosen for maximum impact!
          </p>
        </div>
        <div className="relative space-y-6">
          {/* Left gradient overlay - hidden on mobile */}
          <div className="absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none hidden sm:block"></div>
          
          {/* Right gradient overlay - hidden on mobile */}
          <div className="absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none hidden sm:block"></div>
          
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