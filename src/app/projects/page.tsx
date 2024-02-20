"use client";

import { ButtonLink } from "@/components/buttonlink";
import { TopBar } from "@/components/topbar";
import ProjectCard from "./project";
import { projects } from "@/components/constants";
import { Top } from "@/components/top";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { GrContact } from "react-icons/gr";
import ProjectTag from './projectTag'

export default function Project() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.tags.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };   
  return (
      <section id='projects' className='flex flex-col scroll-mt-24 mt-24'>
        <Top topbar={{width: "w-32", children: "🔗 Portfolio" }}>Projects </Top>
        <motion.div className='flex flex-row gap-8 mb-14 mt-4'>
          {/* <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
          <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
          <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink> */}
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}/>
          <ProjectTag
            onClick={handleTagChange}
            name="React"
            isSelected={tag === "React"}/>
          <ProjectTag
            onClick={handleTagChange}
            name="Node"
            isSelected={tag === "Node"}/>
        </motion.div>
        <ul className='grid grid-cols-3 gap-10'>
          {filteredProjects.map((project, id) => (
            <motion.li key={id}>
              <ProjectCard Proj={project}></ProjectCard>
            </motion.li>
          ))}  
        </ul>
      </section>
    )
  }