"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import ARImage from '../../../public/collage.jpg'
import { Description } from './description';
import { Top } from '@/components/top';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  return (
      <motion.section 
        id='about' className='mt-24 scroll-mt-24'>
        <Top topbar={{width: "w-32", children: "🧐 About Me" }}>Get to Know Me!!</Top>
        <div className='flex flex-row justify-around items-center mt-10 overflow-x-hidden'>
          <Image src={ARImage} alt="profile" width={300} height={300}/>
          {/* <Image src={HeadShot} alt="profile" className='rounded-2xl' width={300} height={300}/> */}
          <Description/>
        </div>
      </motion.section>
    )
  }