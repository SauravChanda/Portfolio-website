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
    <section id="experience" className="relative border-t-4 border-white">
      <div className="px-6 text-center mb-12 mt-32">
        <h2 className="text-2xl sm:text-3xl font-black mb-4 uppercase tracking-tighter">
          {'//'} EXPERIENCE
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
          Want to know where I&apos;ve been coding magic? Here&apos;s my professional adventure timeline -
          each stop taught me something new!
        </p>
      </div>
      <Timeline data={timelineData} />
    </section>
  );
}