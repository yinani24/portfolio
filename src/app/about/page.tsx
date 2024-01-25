"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import ARImage from '../../../public/ar-image.png'
import { Description } from './description';
import { TopBar } from '@/components/topbar';

export default function About() {
    return (
      <motion.section 
        id='about' className='flex flex-row justify-around items-center h-screen'>
        <div>
          <Image src={ARImage} alt="profile" width={200} height={200}/>
        </div>
        <div className='flex flex-col justify-center items-center w-1/2'>
          {/* <div className='rounded-2xl w-32 py-1 px-2 bg-[#7B4AE208]'>
            <h1 className='text-[#7B4AE2] font-raleway font-bold  text-center text-md'></h1>
          </div> */}
          <TopBar>🧐 About Me</TopBar>
          <h1 className='text-4xl text-white font-bold'>
            Yash Inani
          </h1>
          <Description/>
        </div>
      </motion.section>
    )
  }