"use client";
import { useTheme } from '@/context/theme-context';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


export default function Experience() {
  const {theme}=useTheme();
  const { ref } = useSectionInView("Experience",0.5);
  return (
    <section id='experience' ref={ref} className='mb-28 scroll-mt-28 sm:mb-40'>
        <h2 className='text-3xl font-medium capitalize mb-8 text-center'>My Experience</h2>
        <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement visible={true} 
            contentStyle={{
                background:theme==="light"?"#f3f4f6":"rgba(255,255,255,0.05)",
                boxShadow:"none",
                border:"1px solid rgba(0,0,0,0.05)",
                textAlign:"left",
                padding:"1.3rem 2rem"
            }}
            contentArrowStyle={{
                borderRight:theme==="light"?"0.4rem solid #9ca3af":"0.4rem solid rgba(255,255,255,0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
                background:theme==="light" ?"white":"rgba(255,255,255,0.15)",
                fontSize:"1.5rem"
            }}
            >
              <h3 id='ass' className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description} </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
