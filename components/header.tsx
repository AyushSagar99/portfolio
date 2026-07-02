"use client";
import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="flex h-12 items-center justify-between gap-2 px-4 sm:px-6">
        <Link
          href="#home"
          className="shrink-0 text-sm font-semibold tracking-tight"
        >
          Ayush Sagar
        </Link>
        <nav className="no-scrollbar flex items-center gap-0.5 overflow-x-auto sm:gap-1">
          {links.map((link) => (
            <Link
              key={link.hash}
              href={link.hash}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
              className={clsx(
                "whitespace-nowrap px-1.5 py-1 text-xs text-zinc-500 transition hover:text-zinc-900 sm:px-2 sm:text-sm dark:hover:text-zinc-100",
                {
                  "font-semibold text-zinc-900 dark:text-zinc-100":
                    activeSection === link.name,
                }
              )}
            >
              {link.name}
            </Link>
          ))}
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
