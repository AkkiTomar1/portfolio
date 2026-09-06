import { FaCode, FaLayerGroup, FaDatabase, FaTools } from "react-icons/fa";

export const skillGroups = [
  {
    icon: FaCode,
    title: "Languages",
    skills: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 86 },
      { name: "JavaScript", level: 84 },
      { name: "SQL", level: 68 },
    ],
  },
  {
    icon: FaLayerGroup,
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 86 },
      { name: "Node.js", level: 72 },
      { name: "Express.js", level: 70 },
      { name: "NestJS", level: 72 },
      { name: "Next.js", level: 62 },
      { name: "Tailwind CSS", level: 82 },
    ],
  },
  {
    icon: FaDatabase,
    title: "Databases & APIs",
    skills: [
      { name: "REST APIs", level: 82 },
      { name: "PostgreSQL", level: 64 },
      { name: "MongoDB", level: 62 },
      { name: "Redis", level: 55 },
      { name: "Kong API Gateway", level: 55 },
    ],
  },
  {
    icon: FaTools,
    title: "Tools & Workflow",
    skills: [
      { name: "VS Code", level: 90 },
      { name: "Git & GitHub", level: 78 },
      { name: "npm", level: 80 },
      { name: "Docker", level: 60 },
    ],
  },
];

export const techStack = [
  "React.js",
  "Next.js",
  "NestJS",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "JavaScript",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "REST APIs",
  "Kong API Gateway",
  "Docker",
  "Git & GitHub",
  "VS Code",
];