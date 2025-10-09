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
    title: "2021 - Present",
    content: {
      year: "2021 - Present",
      position: "Technical Lead",
      company: "Ymir",
      achievements: [
        "Designed and developed Specc, a no-code API integration platform using React and PHP",
        "Reduced server costs by 75% by migrating DrDropin from AWS EC2 to GCP Cloud Run",
        "Built React and Vue-based healthcare applications with Laravel backend",
        "Implemented Google Gemini AI to accelerate user interactions and provide intelligent API suggestions",
        "Set up CI/CD pipelines with GitHub Actions improving deployment reliability",
        "Developed modular Patient and Doctor Dashboards for improved scalability"
      ],
      technologies: "React, Vue.js, PHP, Laravel, Docker, GCP, AWS, Google Gemini AI, GitHub Actions",
      additionalInfo: {
        label: "Key Projects",
        value: "Specc Platform, DrDropin Healthcare",
      },
    },
  },
  {
    title: "2019 - 2021",
    content: {
      year: "2019 - 2021",
      position: "Software Developer",
      company: "Ati Motors",
      achievements: [
        "Built a trip booking system for autonomous vehicles using React and Express",
        "Developed a vector-based map editor using React and HTML Canvas",
        "Enabled seamless scheduling and improved user experience for autonomous vehicle operations",
        "Collaborated with hardware teams to integrate software solutions with autonomous vehicle systems"
      ],
      technologies: "React, Express.js, Node.js, HTML Canvas, JavaScript",
      additionalInfo: {
        label: "Focus Area",
        value: "Autonomous Vehicle Software",
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
        "Located in Silchar, Assam, India",
        "Built foundation in software development and computer science principles",
        "Participated in various technical projects and coding competitions"
      ],
      technologies: "C, C++, Java, Data Structures, Algorithms, Database Systems",
      additionalInfo: {
        label: "Degree",
        value: "B.Tech CSE",
      },
    },
  }
];