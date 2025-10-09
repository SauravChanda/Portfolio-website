"use client";
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

// Duplicate the array for seamless infinite scroll
const duplicatedTechStack = [...techStackData, ...techStackData]

export default function TechStackSection() {
  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="py-10 relative z-10">
        <div className="relative">
          {/* Left gradient overlay - hidden on mobile */}
          <div className="absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none hidden sm:block"></div>
          
          {/* Right gradient overlay - hidden on mobile */}
          <div className="absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none hidden sm:block"></div>
          
          <motion.div
            className="flex gap-6 py-4"
            animate={{
              x: [0, -100 * techStackData.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechStack.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <motion.div
                  key={`${tech.skill}-${index}`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { type: 'spring', stiffness: 300, damping: 20 }
                  }}
                  className="group flex-shrink-0"
                >
                  <div className="relative w-32 h-32 xs:w-36 xs:h-24 sm:w-28 sm:h-28 md:w-38 md:h-28 rounded-lg overflow-hidden">
                     {/* Clean glass background with crisp blur */}
                     <div className="absolute inset-0 w-full h-full rounded-lg backdrop-blur-md bg-white/80 dark:bg-white/10 shadow-xl shadow-black/20 dark:shadow-white/5 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-black/30 dark:group-hover:shadow-white/10"></div>

                     {/* Crystal clear borders */}
                     <div className="absolute inset-0 rounded-lg border border-black/10 dark:border-white/20 transition-all duration-300 group-hover:border-black/35 dark:group-hover:border-white/30"></div>

                     {/* Pristine top highlight */}
                     <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/60 to-transparent"></div>

                     {/* Clean left highlight */}
                     <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-black/10 dark:via-white/60 to-transparent"></div>

                     {/* Subtle inner reflection */}
                     <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-black/10 dark:from-white/10 via-transparent to-transparent pointer-events-none transition-all duration-300 group-hover:from-black/15 dark:group-hover:from-white/15"></div>

                     {/* Clean bottom shadow for depth */}
                     <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"></div>

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
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}