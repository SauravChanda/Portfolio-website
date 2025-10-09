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
      <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm font-bold mb-8">
        {position} at {company}
      </p>
      <div className="mb-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-bold mb-2"
          >
            <span className="text-neutral-500 dark:text-neutral-400 mt-1 text-xs">•</span>
            <span>{achievement}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 rounded-lg p-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-xs font-medium">
            Technologies
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm">
            {technologies}
          </p>
        </div>
        <div className="bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 rounded-lg p-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-xs font-medium">
            {additionalInfo.label}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm">
            {additionalInfo.value}
          </p>
        </div>
      </div>
    </div>
  );
}