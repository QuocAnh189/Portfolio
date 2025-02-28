//image
import quizzesApp from "src/assets/images/eventhub.png";
import parkingApp from "src/assets/images/parking.png";
import discordApp from "src/assets/images/discord.png";
import footballApp from "src/assets/images/football.png";
import organicApp from "src/assets/images/organic.png";
import portfolioApp from "src/assets/images/portfolio.png";

import { IProject } from "src/interfaces/project";

const projects: IProject[] = [
  {
    role: "Full Stack",
    right: true,
    image: quizzesApp,
    name: "Event Hub",
    description:
      "EventHub is an online event management and ticketing application that allows users to create, manage, and participate in events with ease and convenience.",
    technologies: [
      "React",
      "Go",
      "Gin-gonic",
      "Postgres",
      "Redux Toolkit",
      "Gorm",
      "Socket-IO",
    ],
    fe_link: "https://github.com/QuocAnh189/EventHub",
    be_link: "https://github.com/QuocAnh189/GoHub",
    demo: "http://167.99.74.197:3001/",
  },

  {
    role: "Full Stack",
    right: false,
    image: parkingApp,
    name: "ParkingLot (License-Plate-Detection)",
    description:
      "The system allows users to enter license plate numbers, check-in/check-out times, and display parking availability. Additionally, the application can manage access cards and vehicle entry history.",
    technologies: [
      "React",
      "Go",
      "Gin-gonic",
      "Postgres",
      "Redux Toolkit",
      "Docker",
      "Nginx",
      "Yolo-v5",
    ],
    fe_link: "https://github.com/QuocAnh189/Parkinglot_Fe",
    be_link: "https://github.com/QuocAnh189/GoParkingLot",
    demo: "https://goparking.duckdns.org/",
  },

  {
    role: "Full Stack",
    right: true,
    image: portfolioApp,
    name: "Portfolio CMS",
    description:
      "This Laravel-based Portfolio CMS provides an intuitive platform to manage and showcase personal or professional projects, making it easy to create and update dynamic portfolios. Implementing Clean Architecture, Repository Pattern, CQRS, Cache with Redis",
    technologies: ["PHP", "JQuery", "Laravel", "Datatable", "MySql", "Docker"],
    fe_link: "https://github.com/QuocAnh189/Portfolio_CMS",
    be_link: "https://github.com/QuocAnh189/Portfolio_CMS",
    demo: "",
  },

  {
    role: "Full Stack",
    right: false,
    image: discordApp,
    name: "Discord Clone",
    description:
      "This Next.js-based Discord Clone replicates key features of Discord, providing real-time messaging, voice channels, and seamless user interaction with a modern web experience.",
    technologies: [
      "Next.js",
      "Prisma",
      "Tailwind",
      "Live Kit",
      "MongoDB",
      "Socket-IO",
    ],
    fe_link: "https://github.com/QuocAnh189/Discord_Clone",
    be_link: "https://github.com/QuocAnh189/Discord_Clone",
    demo: "https://discord-clone-git-master-quocanh189s-projects.vercel.app/",
  },

  {
    role: "Full Stack",
    right: true,
    image: footballApp,
    name: "Soccer Championship",
    description:
      "Efficiently organize and manage soccer tournaments, from club to national levels, handling schedules, results, team information, tickets, and marketing",
    technologies: [
      "Next.js",
      "Typescript",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "React-query",
    ],
    fe_link: "https://github.com/QuocAnh189/SoccerManagement_FE",
    be_link: "https://github.com/QuocAnh189/SoccerManagement_BE",
    demo: "",
  },

  {
    role: "Front End",
    right: false,
    image: organicApp,
    name: "EcoEat - Organic Food",
    description:
      "Conveniently buy high-quality organic food online, with detailed product information, promoting healthy and sustainable lifestyles while supporting local producers and suppliers",
    technologies: ["Next.js", "Typescript", "Tailwind", "React-query"],
    fe_link: "https://github.com/QuocAnh189/OrganicFood_FE",
    demo: "https://organicfoodfe.vercel.app/",
  },
];

export default projects;
