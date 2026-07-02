"use client";
import { skillGroups } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.4);
  return (
    <section ref={ref} id="skills" className="scroll-mt-16 px-4 py-12 sm:px-6">
      <h2 className="mb-6 text-lg font-semibold tracking-tight">Stack</h2>
      <dl className="flex flex-col gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="flex flex-col gap-2 sm:flex-row sm:items-baseline"
          >
            <dt className="w-28 shrink-0 text-sm font-medium text-zinc-500">
              {group.category}
            </dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
