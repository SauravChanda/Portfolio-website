interface ExperienceItemProps {
  position: string;
  company: string;
  achievements: string[];
  technologies: string;
  additionalInfo: {
    label: string;
    value: string;
  };
}

export function ExperienceItem({
  position,
  company,
  achievements,
  technologies,
  additionalInfo,
}: ExperienceItemProps) {
  return (
    <div>
      <p className="text-white text-base md:text-sm font-black mb-8 uppercase tracking-tighter">
        {position} @ {company}
      </p>
      <div className="mb-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex gap-2 items-start text-white/70 text-xs md:text-sm font-mono mb-2"
          >
            <span className="text-white mt-1 text-xs">—</span>
            <span>{achievement}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-black border-4 border-white rounded-none p-4">
          <p className="text-white/60 text-xs font-black uppercase tracking-tighter mb-2">
            Technologies
          </p>
          <p className="text-white text-sm font-mono">
            {technologies}
          </p>
        </div>
        <div className="bg-black border-4 border-white rounded-none p-4">
          <p className="text-white/60 text-xs font-black uppercase tracking-tighter mb-2">
            {additionalInfo.label}
          </p>
          <p className="text-white text-sm font-mono">
            {additionalInfo.value}
          </p>
        </div>
      </div>
    </div>
  );
}