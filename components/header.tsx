"use client";
import React, { useState } from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { HiMenu, HiX } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [open, setOpen] = useState(false);

  const handleClick = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="flex h-12 items-center justify-between gap-2 px-4 sm:px-6">
        <Link
          href="#home"
          className="shrink-0 text-sm font-semibold tracking-tight"
        >
          Ayush Sagar
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <Link
              key={link.hash}
              href={link.hash}
              onClick={() => handleClick(link.name)}
              className={clsx(
                "whitespace-nowrap px-2 py-1 text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-100",
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

        <div className="flex items-center sm:hidden">
          <ThemeSwitch />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-zinc-200 px-4 py-2 sm:hidden dark:border-zinc-800">
          {links.map((link) => (
            <Link
              key={link.hash}
              href={link.hash}
              onClick={() => handleClick(link.name)}
              className={clsx(
                "py-2 text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-100",
                {
                  "font-semibold text-zinc-900 dark:text-zinc-100":
                    activeSection === link.name,
                }
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
