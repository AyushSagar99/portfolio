"use client";
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import {animate, delay, motion} from "framer-motion"


const fadeInAnimationVariants={
    initial:{
        opacity:0,
        y:100
    },
    animate:(index:number)=>({
        opacity:1,
        y:0,
        transition:{
            delay:0.05 * index,
        },
    }),
};

export default function Skills() {
    const {ref} =useSectionInView("Skills",0.4)
  return (
    <section ref={ref} id='skills' className=' mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <h2 className='text-3xl font-medium capitalize mb-8 text-center'>My Skills</h2>

        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            { 
            skillsData.map((skill,index)=>(
            <motion.li key={index} className='bg-white border-black-[0.1] rounded-xl px-5 py-3 ' 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            custom={index}
            >
                {skill}
            </motion.li>
            ))
        }
        </ul>
    </section>
  )
}
