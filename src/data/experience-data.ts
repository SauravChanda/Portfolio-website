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
    title: "2024 - Present",
    content: {
      year: "2024 - Present",
      position: "Technical Lead",
      company: "Ymir - Tidli Project",
      achievements: [
        "Developing modern web app with React & NestJS",
        "Building scalable architecture & API endpoints",
        "Optimizing performance & user experience"
      ],
      technologies: "React, NestJS, TypeScript, Node.js, PostgreSQL, Docker",
      additionalInfo: {
        label: "Project Focus",
        value: "Modern Web Application Development",
      },
    },
  },
  {
    title: "2023 - 2024",
    content: {
      year: "2023 - 2024",
      position: "Technical Lead",
      company: "Ymir - Specc Platform",
      achievements: [
        "Built no-code API integration platform with React & Laravel",
        "Created drag-and-drop interface for API integrations",
        "Integrated Google Gemini AI for intelligent suggestions",
        "Enabled non-technical users to build complex integrations"
      ],
      technologies: "React, Laravel, PHP, Google Gemini AI, MySQL, Docker, GitHub Actions",
      additionalInfo: {
        label: "Platform Type",
        value: "No-Code API Integration Platform",
      },
    },
  },
  {
    title: "2021 - 2023",
    content: {
      year: "2021 - 2023",
      position: "Technical Lead",
      company: "Ymir - Dr.Dropin Healthcare",
      achievements: [
        "Built healthcare platform with Laravel & Vue.js on GCP",
        "Developed patient & doctor dashboards",
        "Reduced server costs by 75% migrating to GCP Cloud Run",
        "Implemented HIPAA compliance & secure data management"
      ],
      technologies: "Vue.js, Laravel, PHP, GCP, AWS, MySQL, Docker, GitHub Actions",
      additionalInfo: {
        label: "Industry Focus",
        value: "Healthcare Technology",
      },
    },
  },
  {
    title: "2020 - 2021",
    content: {
      year: "2020 - 2021",
      position: "Software Developer",
      company: "ATI Motors",
      achievements: [
        "Developed Map Creator software for autonomous vehicles",
        "Built mapping tools with advanced editing capabilities",
        "Created intuitive route management interface",
        "Improved navigation accuracy through enhanced mapping"
      ],
      technologies: "React, HTML Canvas, JavaScript, Node.js, Mapping APIs",
      additionalInfo: {
        label: "Project Focus",
        value: "Map Creator Software for Autonomous Vehicles",
      },
    },
  },
  {
    title: "2019 - 2020",
    content: {
      year: "2019 - 2020",
      position: "Software Developer",
      company: "MountBlue (Client: ATI Motors)",
      achievements: [
        "Developed web UI for autonomous vehicle management",
        "Built fleet management & real-time tracking interfaces",
        "Created responsive dashboards for vehicle operations",
        "Implemented trip booking system with React & Express"
      ],
      technologies: "React, Express.js, Node.js, JavaScript, HTML, CSS",
      additionalInfo: {
        label: "Client Project",
        value: "Autonomous Vehicle Web UI Development",
      },
    },
  },
  {
    title: "2015 - 2019",
    content: {
      year: "2015 - 2019",
      position: "Bachelor of Technology",
      company: "Assam University",
      achievements: [
        "Computer Science and Engineering degree",
        "Built foundation in software development principles",
        "Participated in technical projects & coding competitions"
      ],
      technologies: "C, C++, Java, Data Structures, Algorithms, Database Systems",
      additionalInfo: {
        label: "Degree",
        value: "B.Tech CSE",
      },
    },
  }
];