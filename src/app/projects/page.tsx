"use client";

import { ButtonLink } from "@/components/buttonlink";
import { TopBar } from "@/components/topbar";
import ProjectCard from "./project";
import { projects } from "@/components/constants";
import { Top } from "@/components/top";

export default function Project() {
    return (
      <section id='projects' 
      className='flex flex-col scroll-mt-24 mt-24'>
        <div className='flex flew-row w-full mb-10'>
          <Top topbar={{width: "w-32", children: "🔗 Portfolio" }}>Projects </Top>
          {/* <div className='flex flex-row h-7 justify-around items-center'>
            <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
            <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
            <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
          </div> */}
        </div>
        <ul className='grid grid-cols-3 gap-10'>
          {projects.map((project, id) => (
              <ProjectCard Proj={project} key={id}></ProjectCard>
            ))}  
        </ul>
      </section>
    )
  }