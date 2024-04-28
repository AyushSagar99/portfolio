"use client";
import Image from 'next/image'
import React from 'react'
import passport from "@/public/passport.jpeg"
import {motion} from "framer-motion"
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import {HiDownload} from "react-icons/hi"
import { FaGithub } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const {ref} =useSectionInView("Home",0.6);
  const {setActiveSection,setTimeOfLastClick}=useActiveSectionContext();
  
  return (
    <section id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' ref={ref}>
        <div className='flex items-center justify-center'>
            <div className='relative'>
              <motion.div
              initial={{opacity:0,scale:0}}
              animate={{opacity:1,scale:1}}
              transition={{
                type:"tween",
                duration:0.2
              }}
              >
                  <Image src={passport}
                  alt="ayush Potrait"
                  width="70"
                  height="100"
                  quality="95"
                  priority={true}
                  className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                  />
                  </motion.div>
                  <motion.span className=' text-4xl absolute bottom-0 right-0'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                  }}
                  >
                    👋
                  </motion.span>
                
            </div>
        </div>
        <motion.h1 
        className=' mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}} 
        >
          <span className=" font-bold">Hello, I'm Ayush.</span> I'm a{" "}
          <span className="font-bold">full-stack developer</span> currently{" "}
           in college. I enjoy
          building <span className="italic">sites &  apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h1>

        <motion.div className='flex items-center justify-center gap-2 sm:flex-row px-4
         text-lg font-medium'
         initial={{opacity:0,y:100}}
         animate={{opacity:1,y:0}} 
         transition={{
          delay:0.1,
         }}
         >
        <Link href="#contact"  className='group bg-gray-900 text-white px-7 py-3 flex 
        items-center rounded-full gap-2 outline-none hover:scale-110 transition'onClick={()=>{
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now())
        }}
        >Contact me here <BsArrowRight className='group-hover:translate-x-2 transistion'/></Link>

        <a className='group bg-white text-black px-7 py-3 flex 
        items-center rounded-full gap-2  outline-none hover:scale-110  cursor-pointer dark:bg-white/10
        transition' href='/CV.pdf' download={true}>Download CV <HiDownload className='group-hover:translate-y-1 transition' /></a>

        <a className='bg-white text-gray-700 p-4 flex 
        items-center rounded-full gap-2 hover:scale-110  cursor-pointer transition dark:bg-white/10 dark:text-white/60' 
        href='https://www.linkedin.com/in/ayush-sagar-5b3443227/' target='_blank'><BsLinkedin/></a>

        <a className='bg-white text-gray-700 p-4 flex 
        items-center rounded-full gap-2 hover:scale-110  cursor-pointer dark:bg-white/10 dark:text-white/60
        transition' href='https://github.com/BadKarma99' target='_blank'><FaGithub/></a>

        </motion.div>
    </section>
  )
}
