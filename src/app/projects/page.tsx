"use client";

import { ButtonLink } from "@/components/buttonlink";
import { TopBar } from "@/components/topbar";
import ProjectCard from "./project";
import { projects } from "@/components/constants";

export default function Project() {
    return (
      <section id='projects' 
      className='flex flex-col'>
        <div className='flex flew-row w-full'>
          <div className=''>
            <TopBar>🔗 Portfolio</TopBar>
            <h1 className='text-white mb-4 
            font-[raleway] text-6xl font-extrabold'> Projects </h1>
          </div>
          {/* <div className='flex flex-row h-7 justify-around items-center'>
            <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
            <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
            <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
          </div> */}
        </div>
        <ul className='grid grid-cols-3 gap-4'>
          {projects.map((project, id) => (
              <ProjectCard Proj={project} key={id}></ProjectCard>
            ))}  
        </ul>
      </section>
    )
  }