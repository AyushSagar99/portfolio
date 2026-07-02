"use client";
import { freelanceData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

export default function Freelance() {
  const { ref } = useSectionInView("Freelance", 0.5);
  return (
    <section
      id="freelance"
      ref={ref}
      className="scroll-mt-16 px-4 py-12 sm:px-6"
    >
      <h2 className="mb-6 text-lg font-semibold tracking-tight">Freelance</h2>
      <ol className="flex flex-col">
        {freelanceData.map((item) => (
          <li
            key={item.title}
            className="border-b border-zinc-200 py-5 first:pt-0 last:border-none last:pb-0 dark:border-zinc-800"
          >
            <h3 className="text-sm font-medium">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
