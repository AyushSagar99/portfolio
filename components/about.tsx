"use client";
import React from 'react'
import {motion} from "framer-motion"
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const{ref}=useSectionInView("About",0.75);
  
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    id='about'
    ref={ref}
    >
        <h2 className='text-3xl font-medium capitalize mb-8'>About me</h2>
        <p className='mb-3 '>
        Hi, I'm Ayush, a <span className="font-medium">full-stack engineer</span>{" "}
        shipping production{" "}
        <span className="font-medium">React, Next.js, and TypeScript</span> apps
        at startups, plus live public projects — including{" "}
        <span className="font-medium">LiveIcon</span>, an open-source animated
        icon library. I'm equally at home in the UI layer (Framer Motion,
        Tailwind, shadcn) and the API + database layer (Node.js, REST,
        PostgreSQL, Prisma). <span className="italic">My favorite part of
        programming</span> is the problem-solving aspect — I{" "}
        <span className="underline">love</span> owning features end-to-end, from
        the first wireframe to the deployed product.
        </p>

        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and going Gym. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I also
         like playing basketball.
        </p>
    </motion.section>
  )
}
