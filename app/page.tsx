import Intro from "@/components/Intro";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Freelance from "@/components/freelance";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

function Stripes() {
  return (
    <div
      aria-hidden
      className="section-stripes h-8 border-y border-zinc-200 dark:border-zinc-800"
    />
  );
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <Intro />
      <About />
      <Stripes />
      <Projects />
      <Stripes />
      <Skills />
      <Stripes />
      <Experience />
      <Stripes />
      <Freelance />
      <Stripes />
      <Contact />
    </main>
  );
}
