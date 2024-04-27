"use client";
import { projectsData } from '@/lib/data'
import React from 'react'
import Project from './project'
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
    const {ref} =useSectionInView("Projects",0.4)
//     const {ref,inView} =useInView({threshold:0.4});
//   const {setActiveSection,timeOfLastClick}=useActiveSectionContext();

//   useEffect(()=>{
//     if(inView && Date.now() - timeOfLastClick > 1000){
//       setActiveSection("Projects");
//     }
//   },[inView,setActiveSection,timeOfLastClick])

  return (
    <section id='projects' className='scroll-mt-28 mb-28' ref={ref}>
        <h2 className='text-3xl font-medium capitalize mb-8 text-center'>My Projects</h2>

        <div>
            {
                projectsData.map((project,index)=>(
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                ))
            }
        </div>
    </section>

  )
};
