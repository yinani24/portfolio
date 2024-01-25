"use client";

import { experiences } from '@/components/constants';
import { TopBar } from '@/components/topbar';
import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

export default function Experience(){
  return (
    <section id='experience' className='scroll-mt-28'>
      <div className=''>
        <TopBar width={"w-36"}>💼 Experience</TopBar>
        <h1 className='text-white mb-4 
        font-[raleway] text-6xl font-extrabold'> Experiences </h1>
      </div>
      <VerticalTimeline lineColor='rgba(123, 74, 226, 0.50)'>
        {experiences.map((item, id) => (
          <React.Fragment key={id}>
            <VerticalTimelineElement 
              contentStyle={{borderRadius: "16px",
                border: "1px solid rgba(123, 74, 226, 0.50)",
                background: "#090E16",
                boxShadow: "none"
              }}
              visible={true} icon={item.Icon}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.date}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>

    </section>
  )
}