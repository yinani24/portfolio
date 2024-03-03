"use client";

import { ProjectsProps } from "@/components/interfaces";
import Rectangle from "../../../public/Rectangle3.svg";
import Image from "next/image";
import ARImage from "../../../public/ar-image.png";
import {motion} from 'framer-motion'
import { useRef, useState } from "react";
import Link from "next/link";
import Github from '../../../public/github.png'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

export default function ProjectCard({Proj} : {Proj: ProjectsProps}) {
    const ROTATION_RANGE = 32.5;
    const HALF_ROTATION_RANGE = 32.5 / 2;
    const ref = useRef<HTMLDivElement>(null);

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: any) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rY = mouseX / width - HALF_ROTATION_RANGE;
        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

        setRotateX(rX);
        setRotateY(rY);
    };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };
    return(
        <motion.div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover="hover"
            style={{
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateX, rotateY
            }}
            variants={{
                hover: {
                    scale: 1.02
                }
            }}
            className='border group rounded-2xl border-[#7B4AE280] p-5 hover:bg-[#7B4AE21A]'>
            <motion.h2 
                animate={{
                    transform: "translateZ(30px)",
                }}
                className='text-white font-Raleway text-2xl font-bold'>{Proj.title}</motion.h2>
            <motion.p 
                animate={{
                    transform: "translateZ(30px)",
                }}
                className='text-[#FFFFFF80] font-Raleway text-sm font-normal mb-2'>{Proj.description}</motion.p>
            <motion.div 
                animate={{
                    transform: "translateZ(30px)",
                }}
                className='flex flex-row relative items-center justify-center'>
                 <motion.div 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="mx-2"
                    >
                    <Link target="_blank" href={Proj.link}>
                    <Image alt='Github' src={Github} width={25} height={25}/>
                    </Link>
                </motion.div>
                 {Proj.tags.slice(0,2).map((tag, index) => (
                    <motion.div 
                        animate={{
                            transform: "translateZ(30px)",
                        }}
                        key={index} className='my-3 mx-2 relative'>
                        <Image src={Rectangle} alt="rectangle" className='w-15 h-15' /> 
                        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FFFFFF80] font-Raleway text-xs font-normal'>{tag}</p>
                    </motion.div>
                ))}
                
            </motion.div>
            <motion.div 
                animate={{
                    transform: "translateZ(50px)",
                }}
                className='w-full flex justify-center items-center'>
                <Image src={Proj.image} alt="hello" width={Proj.width} height={Proj.height} className='rounded-lg'></Image>
            </motion.div>
        </motion.div>
    )
}
  