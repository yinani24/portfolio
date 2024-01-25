"use client";

import { TopBar } from '@/components/topbar';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

export default function Experience(){
  return (
    <section id='experience'>
      <div className=''>
        <TopBar width={"w-36"}>💼 Experience</TopBar>
        <h1 className='text-white mb-4 
        font-[raleway] text-6xl font-extrabold'> Experiences </h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </section>
  )
}