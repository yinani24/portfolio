"use client";

import { experiences } from '@/components/constants';
import { Top } from '@/components/top';
import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import {useInView} from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Experience(){
  return (
    <section id='experience' className='mt-24 scroll-mt-24'>
      <Top topbar={{width: "w-36", children: "💼 Experience" }}>Experiences</Top>
      <VerticalTimeline lineColor='' animate={true}>
        {experiences.map((item, id) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
          });
          return (
            <motion.div 
            key={id} ref={ref} className="vertical-timeline-element">
            <VerticalTimelineElement 
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid rgba(123, 74, 226, 0.50)",
                background: "#090E16",
                boxShadow: "10px 10px 20px 0px rgba(123, 74, 226, 0.50)",
                color: "rgba(255, 255, 255, 0.50)",
                textAlign: "left",
                fontFamily: "Raleway",
              }}
              contentArrowStyle={{ borderRight: '7px solid  rgba(123, 74, 226, 0.50)' }}
              date={item.date}
              iconStyle={{ background: '#fff', color: '#7B4AE2', boxShadow: '0 0 0 3px rgba(123, 74, 226, 0.50)'}}
              visible={inView} icon={item.Icon}
              className="vertical-timeline-element--work"
              >
              <h2 className='!text-white !font-Raleway !text-2xl !font-bold'>{item.title}</h2>
              <p className='vertical-timeline-element-subtitle !m-0.5 
                !text-[rgba(255, 255, 255, 0.5)] !font-Raleway !text-base 
                !font-normal'>{item.description}</p>
              <div className='flex justify-between mt-3'>
                <p className='text-[#7B4AE2] font-Raleway text-left text-18 font-bold'>{item.timeline}</p>
                <p className='text-[#7B4AE2] text-right font-Raleway text-base font-normal'>{item.date}</p>
              </div>
            </VerticalTimelineElement>
          </motion.div>
          );
        })}
      </VerticalTimeline>
    </section>
  )
}