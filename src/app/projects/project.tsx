"use client";

import { ProjectsProps } from "@/components/interfaces";
import Rectangle from "../../../public/Rectangle3.svg";
import Image from "next/image";

export default function ProjectCard({Proj} : {Proj: ProjectsProps}) {
    return(
        <div className='border rounded-2xl border-[#7B4AE280] p-5 hover:bg-[#7B4AE21A]'>
            <h2 className='text-white font-raleway text-2xl font-bold'>{Proj.title}</h2>
            <p className='text-[#FFFFFF80] font-raleway text-sm font-normal'>{Proj.description}</p>
            <div className='flex flex-row'>
                {Proj.tags.map((tag, index) => (
                    // <div className='my-3 mr-2'>
                    //     <Image src={Rectangle} alt="rectangle"/>
                    //     <p className='text-[#FFFFFF80] font-raleway text-xs font-normal'>{tag}</p>
                    // </div>
                    <div key={index} className='my-3 mr-2 relative'>
                        <Image src={Rectangle} alt="rectangle" className='w-15 h-15' /> {/* Adjust the width and height as needed */}
                        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FFFFFF80] font-raleway text-xs font-normal'>{tag}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
  