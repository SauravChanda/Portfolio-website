export interface ExperienceData {
  title: string;
  content: {
    year: string;
    position: string;
    company: string;
    achievements: string[];
    technologies: string;
    additionalInfo: {
      label: string;
      value: string;
    };
  };
}

export const experienceData: ExperienceData[] = [
  {
    title: "2024",
    content: {
      year: "2024",
      position: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 5 junior developers and conducted code reviews",
        "Optimized database queries improving application performance by 40%",
      ],
      technologies: "React, Node.js, TypeScript, AWS, Docker, PostgreSQL",
      additionalInfo: {
        label: "Team Size",
        value: "12 developers",
      },
    },
  },
  {
    title: "2023",
    content: {
      year: "2023",
      position: "Full Stack Developer",
      company: "InnovateLab",
      achievements: [
        "Built responsive web applications using modern frameworks",
        "Integrated third-party APIs and payment gateways",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Participated in agile development processes and sprint planning",
      ],
      technologies: "Next.js, Python, FastAPI, MongoDB, Tailwind CSS",
      additionalInfo: {
        label: "Projects",
        value: "8 completed",
      },
    },
  },
  {
    title: "2022",
    content: {
      year: "2022",
      position: "Frontend Developer",
      company: "StartupXYZ",
      achievements: [
        "Developed user-friendly interfaces for web and mobile applications",
        "Implemented state management solutions for complex applications",
        "Optimized application performance and loading times",
        "Worked closely with backend developers to integrate APIs",
      ],
      technologies: "Vue.js, JavaScript, Sass, Firebase, Figma",
      additionalInfo: {
        label: "Users Impacted",
        value: "50K+ monthly",
      },
    },
  },
  {
    title: "2021",
    content: {
      year: "2021",
      position: "Junior Developer",
      company: "WebDev Agency",
      achievements: [
        "Assisted in developing client websites and web applications",
        "Learned modern development practices and version control",
        "Contributed to bug fixes and feature implementations",
        "Participated in client meetings and requirement gathering",
      ],
      technologies: "HTML, CSS, JavaScript, PHP, MySQL, WordPress",
      additionalInfo: {
        label: "Clients Served",
        value: "25+ businesses",
      },
    },
  },
];