"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/theme-context";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((m) => m.GitHubCalendar),
  { ssr: false }
);

export default function GithubGraph() {
  const { theme } = useTheme();
  return (
    <div className="no-scrollbar mt-8 min-h-[8rem] overflow-x-auto text-zinc-600 dark:text-zinc-400">
      <GitHubCalendar
        username="AyushSagar99"
        colorScheme={theme}
        blockSize={10}
        fontSize={12}
      />
    </div>
  );
}
