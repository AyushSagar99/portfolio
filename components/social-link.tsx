"use client";
import Image from "next/image";
import passport from "@/public/passport.jpeg";
import { profile } from "@/lib/data";

// ponytail: static card, no profile API. Wire a fetch if counts/bio should be live.
export default function SocialLink({
  href,
  label,
  handle,
  children,
}: {
  href: string;
  label: string;
  handle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
      >
        {children}
      </a>

      <div
        role="tooltip"
        className="pointer-events-none invisible absolute bottom-full left-0 z-20 mb-2 hidden w-64 translate-y-1 rounded-xl border border-zinc-200 bg-white p-4 opacity-0 shadow-lg transition duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 sm:block dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="flex items-start justify-between gap-3">
          <Image
            src={passport}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
          <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
            {label}
          </span>
        </div>
        <p className="mt-3 text-sm font-semibold">{profile.name}</p>
        <p className="text-xs text-zinc-500">{handle}</p>
        <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {profile.role} · {profile.location}
        </p>
      </div>
    </div>
  );
}
