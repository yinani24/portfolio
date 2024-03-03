"use client";

import ProjectCard from "./project";
import { projects } from "@/components/constants";
import { Top } from "@/components/top";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import ProjectTag from './projectTag'
import { tags } from "@/components/constants";

export default function Project() {
  const [tag, setTag] = useState(["All"]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    if(tag.includes(newTag)){
      const updatedTags = tag.filter((t) => t !== newTag);
      setTag(updatedTags);
    }
    else{
      setTag([...tag, newTag]);
    }
    
  };

  const filteredProjects = projects.filter((project) =>
    tag.some((t) => project.tags.includes(t))
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };   
  return (
      <section id='projects' className='flex flex-col scroll-mt-24 mt-24 '>
        <Top topbar={{width: "w-32", children: "🔗 Portfolio" }}>Projects </Top>
        <motion.div  
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0, transition: {ease: 'easeInOut', duration: 0.5, type: 'tween', damping: 300, stiffness: 100}}}
          viewport={{ once: true, amount: 0.5 }}
          className='flex flex-row gap-4 justify-start mb-14 mt-4 flex-wrap'>
          {/* <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
          <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
          <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink> */}
          {tags.map((t, id) => (
            <ProjectTag
              key={id}
              onClick={handleTagChange}
              name={t}
              isSelected={tag.includes(t)}/>
          ))}
          {/* <ProjectTag
            onClick={handleTagChange}
            name={"All"}
            isSelected={tag.includes("All")}/>
          <ProjectTag
            onClick={handleTagChange}
            name={"React"}
            isSelected={tag.includes("React")}/>
          <ProjectTag
            onClick={handleTagChange}
            name={"Node"}
            isSelected={tag.includes("Node")}/> */}
        </motion.div>
        <ul className='grid grid-cols-3 gap-10'>
          {filteredProjects.map((project, id) => (
            <motion.li ref={ref}
              key={id}
              variants={cardVariants}
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              animate={isInView? "initial": "hidden"}
              transition={{ duration: 0.3, delay: id * 0.2, type: 'easeInOut', damping: 100, stiffness: 300 }}
            >
              <ProjectCard Proj={project}></ProjectCard>
            </motion.li>
          ))}  
        </ul>
      </section>
    )
  }