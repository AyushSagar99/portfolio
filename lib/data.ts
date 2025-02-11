import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cab_sys from "@/public/cab_sys.png";
import arogyaImg from "@/public/arogya.png";
import Text_SumariserImg from "@/public/Text_summariser.png";
import NexcentImg from "@/public/nexcent.png"

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
    title: "Personal React Projects",
    description:
      "I developed my React skills through personal and academic projects, solidifying my understanding of component-based development, state management, UI/UX best practices, and building dynamic websites that integrate with APIs.",
    icon: React.createElement(LuGraduationCap),
    date: "June 23- October 23",
  },
  {
    title: "Full Stack intern",
    description:
      "worked in a AI startup building a UI for chatbot in react, tailwind and storybook also make tests using vitest",
    icon: React.createElement(CgWorkAlt),
    date: "August 24 - December 24",
  },
  {
    title: "Full-Stack Developer",
    description:
      "Currently working as a Software Developer, specializing in building SaaS platforms and web applications using Next.js, Tailwind CSS, and Prisma. My role involves developing scalable, high-performance applications with a focus on clean architecture, responsive design, and efficient data management. I work across both front-end and back-end, ensuring seamless integration between the UI and databases, while delivering user-friendly, feature-rich products tailored to client needs.",
    icon: React.createElement(FaReact),
    date: "January 25 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Cab_sys",
    description:
      "It is a project that i made during the university.It allows the users to get a cab in shortest and cheapest way.",
    tags: ["React", "Trpc", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: cab_sys,
  },
  {
    title: "Arogya-eth",
    description:
      "Users can store their Medical Records with user Ownership. By Default the files are private if users want they can make it as public.",
    tags: ["React", "TypeScript", "Next.js", "ChakraUI", "LightHouse Storage"],
    imageUrl: arogyaImg,
  },
  {
    title: "Nexcent",
    description:
      "It is a web app which is rsponsive made using figma",
    tags: ["Tailwind", "Typescript", "NextJs"],
    imageUrl: NexcentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;