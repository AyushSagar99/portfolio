import { projectsData } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  return (
    <article className="flex items-start justify-between gap-4 border-b border-zinc-200 py-5 first:pt-0 last:border-none last:pb-0 dark:border-zinc-800">
      <div>
        <h3 className="text-sm font-medium">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {title} ↗
          </a>
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={`Screenshot of ${title}`}
        quality={90}
        className="hidden h-20 w-32 shrink-0 rounded-md border border-zinc-200 object-cover sm:block dark:border-zinc-800"
      />
    </article>
  );
}
