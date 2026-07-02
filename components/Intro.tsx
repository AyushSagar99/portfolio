"use client";
import Image from "next/image";
import React from "react";
import passport from "@/public/passport.jpeg";
import Link from "next/link";
import { profile } from "@/lib/data";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {
  HiDownload,
  HiOutlineGlobeAlt,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import GithubGraph from "./github-graph";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.6);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="scroll-mt-16 border-b border-zinc-200 px-4 py-12 sm:px-6 dark:border-zinc-800"
    >
      <div className="flex items-center gap-4">
        <Image
          src={passport}
          alt="Portrait of Ayush Sagar"
          width={80}
          height={80}
          quality={95}
          priority
          className="h-20 w-20 rounded-full border border-zinc-200 object-cover dark:border-zinc-800"
        />
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {profile.name}
          </h1>
          <p className="text-sm text-zinc-500">{profile.role}</p>
        </div>
      </div>

      <ul className="mt-6 flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <li className="flex items-center gap-2">
          <HiOutlineLocationMarker className="shrink-0" />
          {profile.location}
        </li>
        <li className="flex items-center gap-2">
          <HiOutlineMail className="shrink-0" />
          <a className="hover:underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <HiOutlineGlobeAlt className="shrink-0" />
          <a
            className="hover:underline"
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.website.replace("https://", "")}
          </a>
        </li>
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Contact me
        </Link>
        <a
          href="/CV.pdf"
          download
          className="flex items-center gap-1.5 rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
        >
          Download CV <HiDownload />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          <BsLinkedin />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          <FaGithub />
        </a>
        <a
          href={profile.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          <BsTwitterX />
        </a>
      </div>

      <GithubGraph />
    </section>
  );
}
