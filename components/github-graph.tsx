"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/theme-context";
import { Tooltip } from "react-tooltip";

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
        theme={{
          light: ["#ebebeb", "#c6c6c6", "#8f8f8f", "#525252", "#161616"],
          dark: ["#242424", "#4a4a4a", "#7a7a7a", "#b0b0b0", "#ffffff"],
        }}
        blockSize={12}
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "gh-tooltip",
            "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
          })
        }
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
      <Tooltip id="gh-tooltip" variant={theme === "dark" ? "light" : "dark"} />
    </div>
  );
}
