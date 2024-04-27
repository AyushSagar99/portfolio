"use client";
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from "framer-motion"
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
    const{ref}=useSectionInView("Contact",0.3);

    
  return (
    <motion.section id='contact' ref={ref}
    className='scroll-mt-28 mb-28 sm:mb-28 w-[min(100%,38rem)]'
    initial={{opacity:0,}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    viewport={{once:true}}>
        <h2 className='text-3xl font-medium capitalize mb-2 text-center'>Contact me</h2>
        <p className='text-gray-700 text-center'>Please contact me directly at <a className='underline' 
        href='mailto:saggar.ayush@gmail.com'> saggar.ayush@gmail.com </a>{" "} or through this form.</p>

        <form className='mt-10 flex flex-col' action={async(formData)=>{
            console.log("running on client")
            console.log(formData.get("senderEmail"));
            console.log(formData.get("message"));
            await sendEmail(formData);
        }}>
            <input type='email' name='senderEmail' className='h-14 rounded-lg borderBlack px-4' placeholder='Your Email' required 
            maxLength={500}/>
            <textarea name='message' className='h-52 my-3 rounded-lg borderBlack p-4' placeholder='Your message' required 
            maxLength={500}/>
            <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
            bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 active:scale-105 
            focus:scale-110 hover:bg-gray-950'>Submit<FaPaperPlane 
            className='text-xs opacity-70 transition-all 
            group-hover:translate-x-1
            group-hover:-translate-y-1'/></button>
        </form>
    </motion.section>
  )
}
