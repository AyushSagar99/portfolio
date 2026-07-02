import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import arogyaImg from "@/public/arogya.png";
import liveiconImg from "@/public/liveicon.png";
import redditverseImg from "@/public/redditverse.png";
import urlshortnerImg from "@/public/urlshortner.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech Computer Science, Bennett University",
    description:
      "Graduated with an 8 CGPA, focusing on full-stack development. Built and shipped several projects along the way, including a blockchain-based health records vault.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2021 - March 2025",
  },
  {
    title: "Full Stack Developer Intern, Business of Insights",
    description:
      "Built and documented reusable UI components with Storybook, improving design consistency and development efficiency. Integrated REST APIs to connect frontend interfaces with backend services and tested thoroughly for a reliable user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2024 - January 2025",
  },
  {
    title: "Backend Developer, Bizom",
    description:
      "Designed, developed, and maintained PHP APIs powering web and mobile applications. Managed databases, optimized backend performance, and collaborated with cross-functional teams to ship scalable, secure, high-performance APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2025 - December 2025",
  },
  {
    title: "Full Stack Developer, Infinity Box",
    description:
      "Building scalable full-stack applications with React, Next.js, and TypeScript, focusing on responsive dashboards. Developing RESTful APIs with Node.js, designing optimized SQL databases, and deploying to AWS following security and scalability best practices.",
    icon: React.createElement(FaReact),
    date: "January 2026 - present",
  },
] as const;

export const projectsData = [
  {
    title: "LiveIcon",
    description:
      "Open-source animated icon library with reusable, customizable icon components. Smooth motion-based interactions and a copy-to-use workflow for a great developer experience.",
    tags: ["Next.js", "Framer Motion", "SVG", "TypeScript", "Open Source"],
    imageUrl: liveiconImg,
    link: "https://liveicon.vercel.app/",
  },
  {
    title: "RedditVerse",
    description:
      "Full-stack app that lets users securely share their Reddit profiles with granular privacy controls, focusing on secure data handling and clean, responsive UI.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    imageUrl: redditverseImg,
    link: "https://profile-v-tau.vercel.app/",
  },
  {
    title: "URL Shortener",
    description:
      "Fast, user-friendly app that converts long URLs into short, shareable links with real-time link generation and clipboard copy, wrapped in a sleek responsive UI.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    imageUrl: urlshortnerImg,
    link: "https://url-short-q4tx.onrender.com",
  },
  {
    title: "Arogya Health Vault",
    description:
      "Users can store their medical records with full ownership. Files are private by default and can be made public whenever the user chooses.",
    tags: ["React", "TypeScript", "Next.js", "ChakraUI", "LightHouse Storage"],
    imageUrl: arogyaImg,
    link: "https://arogya-eth-for-all.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "shadcn/ui",
  "Node.js",
  "PHP",
  "REST APIs",
  "JWT Authentication",
  "PostgreSQL",
  "MongoDB",
  "SQL",
  "Prisma",
  "Git",
  "Storybook",
  "Framer Motion",
  "AWS",
] as const;