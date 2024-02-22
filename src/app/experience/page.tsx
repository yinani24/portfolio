"use client";

import { experiences } from '@/components/constants';
import { Top } from '@/components/top';
import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import VerticalExperience from './verticaltimeline';

export default function Experience(){
  return (
    <section id='experience' className='mt-24 scroll-mt-24'>
      <Top topbar={{width: "w-36", children: "💼 Experience" }}>Experiences</Top>
      <VerticalTimeline lineColor='' animate={true}>
        {experiences.map((item, id) => (
          <VerticalExperience key={id} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  )
}