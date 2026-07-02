"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);
  return (
    <section id="about" ref={ref} className="scroll-mt-16 px-4 py-12 sm:px-6">
      <h2 className="mb-6 text-lg font-semibold tracking-tight">About</h2>
      <div className="flex flex-col gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        <p>
          I&apos;m a full-stack engineer shipping production React, Next.js,
          and TypeScript apps at startups, plus live public projects —
          including LiveIcon, an open-source animated icon library. I&apos;m
          equally at home in the UI layer (Framer Motion, Tailwind, shadcn) and
          the API + database layer (Node.js, REST, PostgreSQL, Prisma). I like
          owning features end-to-end, from the first wireframe to the deployed
          product.
        </p>
        <p>
          Outside of work I enjoy video games, movies, the gym, and basketball
          — and I&apos;m always learning something new.
        </p>
      </div>
    </section>
  );
}
