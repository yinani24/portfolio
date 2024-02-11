"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import ARImage from '../../../public/collage.jpg'
import { Description } from './description';
import HeadShot from '../../../public/Headshot.jpg'
import { Top } from '@/components/top';

export default function About() {
    
  return (
      <motion.section 
        id='about' className='mt-24 scroll-mt-24'>
        <Top topbar={{width: "w-32", children: "🧐 About Me" }}>Get to Know Me!!</Top>
        <div className='flex flex-row justify-around items-center mt-10'>
          <Image src={ARImage} alt="profile" width={300} height={300}/>
          {/* <Image src={HeadShot} alt="profile" className='rounded-2xl' width={300} height={300}/> */}
          <Description/>
        </div>
      </motion.section>
    )
  }