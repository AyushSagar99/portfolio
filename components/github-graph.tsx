"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/theme-context";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((m) => m.GitHubCalendar),
  { ssr: false }
);

export default function GithubGraph() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="no-scrollbar mt-8 min-h-[8rem] overflow-x-auto text-zinc-600 dark:text-zinc-400">
      <GitHubCalendar
        username="AyushSagar99"
        colorScheme={theme}
        blockSize={10}
        fontSize={12}
        transformData={
          isMobile ? (data) => data.slice(-26 * 7) : undefined
        }
        labels={
          isMobile
            ? { totalCount: "{{count}} contributions in the last 6 months" }
            : undefined
        }
      />
    </div>
  );
}
