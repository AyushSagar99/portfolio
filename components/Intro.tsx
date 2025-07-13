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
    <section id='home' className='mb-20 sm:mb-28 max-w-[50rem] text-center scroll-mt-[100rem] px-4 sm:px-0' ref={ref}>
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
                  className='h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                  />
                  </motion.div>
                  <motion.span className='text-3xl sm:text-4xl absolute bottom-0 right-0'
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
        className='mb-8 sm:mb-10 mt-4 px-2 sm:px-4 text-xl sm:text-2xl md:text-4xl font-medium !leading-[1.5]'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}} 
        >
          <span className="font-bold">Hello, I'm Ayush.</span> I'm a{" "}
          <span className="font-bold">full-stack developer</span> currently{" "}
           in college. I enjoy
          building <span className="italic">sites &  apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 px-2 sm:px-4
         text-base sm:text-lg font-medium'
         initial={{opacity:0,y:100}}
         animate={{opacity:1,y:0}} 
         transition={{
          delay:0.1,
         }}
         >
        <Link href="#contact"  className='group bg-gray-900 text-white w-full sm:w-auto px-6 sm:px-7 py-3 flex 
        items-center justify-center rounded-full gap-2 outline-none hover:scale-110 transition'onClick={()=>{
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now())
        }}
        >Contact me here <BsArrowRight className='group-hover:translate-x-2 transition'/></Link>

        <a className='group bg-white text-black w-full sm:w-auto px-6 sm:px-7 py-3 flex 
        items-center justify-center rounded-full gap-2 outline-none hover:scale-110 cursor-pointer dark:bg-white/10 dark:text-white
        transition' href='/CV.pdf' download={true}>Download CV <HiDownload className='group-hover:translate-y-1 transition' /></a>

        <div className='flex gap-3 sm:gap-2 mt-2 sm:mt-0'>
          <a className='bg-white text-gray-700 p-3 sm:p-4 flex 
          items-center rounded-full hover:scale-110 cursor-pointer transition dark:bg-white/10 dark:text-white/60' 
          href='https://www.linkedin.com/in/ayush-sagar-5b3443227/' target='_blank'><BsLinkedin/></a>

          <a className='bg-white text-gray-700 p-3 sm:p-4 flex
          items-center rounded-full hover:scale-110 cursor-pointer dark:bg-white/10 dark:text-white/60
          transition' href='https://github.com/AyushSagar99' target='_blank'><FaGithub/></a>
        </div>

        </motion.div>
    </section>
  )
}