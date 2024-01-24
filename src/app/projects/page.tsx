"use client";

import { ButtonLink } from "@/components/buttonlink";
import { TopBar } from "@/components/topbar";
import { GrContact } from "react-icons/gr";

export default function Project() {
    return (
      <section id='projects' 
      className='flex flex-row h-screen'>
        <div className='flex flew-row justify-around w-full'>
          <div>
            <TopBar>🔗 Portfolio</TopBar>
            <h1 className='text-white mb-4 font-[raleway] text-6xl font-extrabold'> Projects </h1>
          </div>
          <div className='flex flex-row h-10'>
            <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
            <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
            <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
          </div>
        </div>
      </section>
    )
  }