"use client";

import { experiences } from '@/components/constants';
import { Top } from '@/components/top';
import { TopBar } from '@/components/topbar';
import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

export default function Experience(){
  return (
    <section id='experience' className='scroll-mt-24'>
      {/* <div className=''>
        <TopBar width={"w-36"}>💼 Experience</TopBar>
        <h1 className='text-white mb-4 
        font-[raleway] text-6xl font-extrabold'> Experiences </h1>
      </div> */}
      <Top topbar={{width: "w-36", children: "💼 Experience" }}>Experiences</Top>
      <VerticalTimeline lineColor='rgba(123, 74, 226, 0.5)'>
        {experiences.map((item, id) => (
          <React.Fragment key={id}>
            <VerticalTimelineElement 
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid rgba(123, 74, 226, 0.50)",
                background: "#090E16",
                boxShadow: "none",
                color: "rgba(255, 255, 255, 0.50)",
                textAlign: "left",
                fontFamily: "Raleway",
              }}
              contentArrowStyle={{ borderRight: '7px solid  rgba(123, 74, 226, 0.50)' }}
              date={item.date}
              iconStyle={{ background: '#fff', color: '#7B4AE2', boxShadow: '0 0 0 3px rgba(123, 74, 226, 0.50)'}}
              visible={true} icon={item.Icon}>
              <h2 className='!text-white !font-Raleway !text-2xl !font-bold'>{item.title}</h2>
              <p className='vertical-timeline-element-subtitle !m-0.5 
                !text-[rgba(255, 255, 255, 0.5)] !font-Raleway !text-base 
                !font-normal'>{item.description}</p>
              <div className='flex justify-between mt-3'>
                <p className='text-[#7B4AE2] font-Raleway text-left text-18 font-bold'>{item.timeline}</p>
                <p className='text-[#7B4AE2] text-right font-Raleway text-base font-normal'>{item.date}</p>
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}