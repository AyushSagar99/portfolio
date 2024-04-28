"use client";
import React from 'react'
import {motion} from "framer-motion"
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

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
        <p className='text-gray-700 text-center dark:text-white/80'>Please contact me directly at <a className='underline' 
        href='mailto:saggar.ayush@gmail.com'> saggar.ayush@gmail.com </a>{" "} or through this form.</p>

        <form className='mt-10 flex flex-col dark:text-black' action={async (formData)=>{
           const {data,error}= await sendEmail(formData);
           if(error){
            toast.error(error);
            return
           }
           toast.success("Email sent successfully")
        }}>
            <input type='email' name='senderEmail' className='h-14 rounded-lg borderBlack px-4 dark:focus dark:bg-opacity-100 
            transition-all dark:outline-none' placeholder='Your Email' required  
            maxLength={500}/>
            <textarea name='message' className='h-52 my-3 rounded-lg borderBlack p-4 dark:focus dark:bg-opacity-100 
            transition-all dark:outline-none' placeholder='Your message' required 
            maxLength={5000}/>
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
