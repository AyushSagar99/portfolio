"use client";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-16 px-4 py-12 sm:px-6"
    >
      <h2 className="mb-6 text-lg font-semibold tracking-tight">Experience</h2>
      <ol className="flex flex-col">
        {[...experiencesData].reverse().map((item) => (
          <li
            key={item.title}
            className="border-b border-zinc-200 py-5 first:pt-0 last:border-none last:pb-0 dark:border-zinc-800"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-sm font-medium">{item.title}</h3>
              <span className="shrink-0 text-xs text-zinc-500">
                {item.date}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
