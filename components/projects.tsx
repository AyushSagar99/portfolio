"use client";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.4);
  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-mt-16 px-4 py-12 sm:px-6"
    >
      <h2 className="mb-6 text-lg font-semibold tracking-tight">Projects</h2>
      <div className="flex flex-col">
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
