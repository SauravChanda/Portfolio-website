"use client";

import { Timeline } from "@/components/ui/timeline";
import { ExperienceItem } from "./experience-item";
import { experienceData } from "@/data/experience-data";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const timelineData = experienceData.map((item) => ({
    title: item.title,
    content: (
      <ExperienceItem
        position={item.content.position}
        company={item.content.company}
        achievements={item.content.achievements}
        technologies={item.content.technologies}
        additionalInfo={item.content.additionalInfo}
      />
    ),
  }));

  return (
    <section id="experience" className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Conversational Headers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-lg text-muted-foreground mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            🎯 Let's talk about my journey...
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Professional Experience
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            From code newbie to seasoned developer - here's how I've been <em>debugging</em> my way through life! 🐛✨
          </motion.p>
        </motion.div>
      </div>
      
      <Timeline data={timelineData} />
    </section>
  );
}