"use client";
import { motion } from "framer-motion";


export function TechStackSection() {
  const techStack = [
    { 
      name: "TypeScript", 
      category: "Language",
      description: "Strongly typed JavaScript",
      icon: "TS"
    },
    { 
      name: "React", 
      category: "Frontend",
      description: "UI component library",
      icon: "⚛️"
    },
    { 
      name: "Next.js", 
      category: "Framework",
      description: "Full-stack React framework",
      icon: "▲"
    },
    { 
      name: "Node.js", 
      category: "Runtime",
      description: "JavaScript runtime environment",
      icon: "🟢"
    },
    { 
      name: "Express", 
      category: "Backend",
      description: "Web application framework",
      icon: "🚀"
    },
    { 
      name: "PostgreSQL", 
      category: "Database",
      description: "Relational database system",
      icon: "🐘"
    },
    { 
      name: "Prisma", 
      category: "ORM",
      description: "Database toolkit & ORM",
      icon: "🔷"
    },
    { 
      name: "TailwindCSS", 
      category: "Styling",
      description: "Utility-first CSS framework",
      icon: "🎨"
    },
    { 
      name: "Docker", 
      category: "DevOps",
      description: "Containerization platform",
      icon: "🐳"
    },
    { 
      name: "AWS", 
      category: "Cloud",
      description: "Cloud computing services",
      icon: "☁️"
    },
  ];

  // Additional technologies not featured in main cards
  const otherTechnologies = [
    "MongoDB", "Redis", "GraphQL", "Jest", "Cypress", "Webpack", 
    "Vite", "ESLint", "Prettier", "Git", "GitHub Actions", "Vercel",
    "Figma", "Postman", "VS Code", "Linux", "Nginx", "Socket.io"
  ];

  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I leverage to build scalable, modern applications
            </p>
          </motion.div>
        </div>

        {/* Tech Stack Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors min-w-8 min-h-8 flex items-center justify-center">
                    <span className="text-primary">{tech.icon}</span>
                  </div>
                  <div className="flex w-full justify-between">
                    <h3 className="font-semibold text-foreground">{tech.name}</h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {tech.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Other Technologies */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-medium text-foreground mb-6">Other Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherTechnologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}