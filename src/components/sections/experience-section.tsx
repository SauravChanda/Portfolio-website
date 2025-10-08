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
      <Timeline data={timelineData} />
    </section>
  );
}