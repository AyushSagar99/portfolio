"use client";
import React from 'react'
import {motion} from "framer-motion"
import {links} from "@/lib/data"
import Link from 'next/link';
import clsx from 'clsx';
import {useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
   const {activeSection,setActiveSection,setTimeOfLastClick}=useActiveSectionContext();
  return (
    <header className='z-[999] relative'>
        <motion.div className='fixed top-1 left-1/2 -translate-x-1/2 h-[2.5rem] w-full rounded-full border 
        border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
        backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 
        dark:border-black/40 dark:bg-opacity-75'
        initial={{y:-100,x:"-50%",opacity:0}}
        animate={{y:0,x:"-50%",opacity:1}}
        ></motion.div>
        <nav className='flex fixed top-[0.15rem] left-1/2 h-10 -translate-x-1/2  sm:top-[1.7rem] 
        sm:h-[initial] sm:py-0'>
            <ul className='flex w-full max-w-[95vw] px-2 flex-nowrap items-center justify-center gap-x-1 text-[0.7rem] 
            font-medium text-gray-500 sm:w-[initial] sm:max-w-none sm:px-0 sm:gap-5 sm:text-[0.9rem] overflow-x-auto scrollbar-hide'>
                {
                    links.map(links=>(
                        <motion.li className='h-3/4 flex items-center justify-center relative' 
                        key={links.hash}
                        initial={{y:-100,opacity:0}}
                        animate={{y:0,opacity:1}}
                        >
                <Link className={clsx("flex w-full items-center justify-center px-1.5  hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 sm:px-3 sm:py-3 rounded-full text-center min-w-fit whitespace-nowrap",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === links.name,
                  }
                )} 

                href={links.hash}
                onClick={()=>{
                    setActiveSection(links.name);
                    setTimeOfLastClick(Date.now());
                }}
                >
                    {links.name}

                    {
                        links.name===activeSection &&(
                            <motion.span className='bg-gray-100 absolute rounded-full inset-0 -z-10 dark:bg-gray-800'
                            layoutId='activeSection'
                            transition={{
                                type:"spring",
                                stiffness:380,
                                damping:30
                            }}
                            ></motion.span>
                        )
                    }

                    
                
                </Link>
                        </motion.li>
                    ))
                }
            </ul>
        </nav>
    </header>
  )
}