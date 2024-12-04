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
        Hi, I'm Ayush I am a college student pursuing B.Tech in {" "}
        <span className="font-medium">Computer Science</span>, I learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
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
