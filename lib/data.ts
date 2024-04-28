import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cab_sys from "@/public/cab_sys.png";
import arogyaImg from "@/public/arogya.png";
import Text_SumariserImg from "@/public/Text_summariser.png";

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
    title: "Front-End Developer",
    description:
      "Contributed to the development of a dynamic land rental website",
    icon: React.createElement(CgWorkAlt),
    date: "November 23 - Feburary 24",
  },
  {
    title: "Full-Stack Developer",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
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
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows the summarization of a given paragraph.",
    tags: ["CSS", "HTML", "Python"],
    imageUrl: Text_SumariserImg,
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