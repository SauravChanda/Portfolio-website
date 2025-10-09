"use client";

import { Timeline } from "@/components/ui/timeline";
import { ExperienceItem } from "./experience-item";
import { experienceData } from "@/data/experience-data";

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
    <section id="experience" className="relative">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          <span className="text-orange-600 dark:text-orange-400">🚀 My Journey So Far</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Want to know where I&apos;ve been coding magic? Here&apos;s my professional adventure timeline - 
          each stop taught me something new! 📈
        </p>
      </div>
      <Timeline data={timelineData} />
    </section>
  );
}