import todo from "../assets/todo.png";
import Filmvault from "../assets/filmvault.png";
import { FaServer } from "react-icons/fa";

export const projectCategories = ["All", "React", "Full Stack"];

export const projectsData = [
  {
    title: "API Platform Dashboard",
    category: "Full Stack",
    description:
      "A dashboard for managing and monitoring APIs through Kong API Gateway, with a NestJS backend powering secure, authenticated API management.",
    image: null,
    placeholderIcon: FaServer,
    features: [
      "Monitor & manage APIs via Kong Admin REST APIs",
      "Secure API management & authentication with NestJS",
      "Service health & request monitoring views",
      "Responsive React.js dashboard components",
    ],
    tech: ["React.js", "NestJS", "Kong API Gateway", "REST APIs"],
    liveLink: null,
    githubLink: null,
  },
  {
    title: "FilmVault",
    category: "React",
    description:
      "An IMDb-style movie database app powered by the TMDb API — browse trending movies, search titles, and manage your own watchlist.",
    image: Filmvault,
    placeholderIcon: null,
    features: [
      "Search movies & TV shows instantly",
      "Rich movie detail pages",
      "Dark mode with responsive UI",
      "Watchlist management",
    ],
    tech: ["React", "Tailwind CSS", "TMDB API", "JavaScript"],
    liveLink: "https://akkitomar1.github.io/Filmvault/",
    githubLink: "https://github.com/AkkiTomar1/Filmvault",
  },
  {
    title: "Todo List",
    category: "React",
    description:
      "A simple and responsive To-Do List application with LocalStorage persistence and a clean, distraction-free interface.",
    image: todo,
    placeholderIcon: null,
    features: [
      "Add, complete & delete tasks",
      "LocalStorage data persistence",
      "Filter active & completed tasks",
      "Fully responsive UI",
    ],
    tech: ["React", "Tailwind CSS", "LocalStorage", "JavaScript"],
    liveLink: "https://akkitomar1.github.io/todo/",
    githubLink: "https://github.com/AkkiTomar1/todo",
  },
];