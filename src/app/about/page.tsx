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
        id='about' className='mt-24 scroll-mt-24' ref={ref}>
        <Top topbar={{width: "w-32", children: "🧐 About Me" }}>Get to Know Me!!</Top>
        <div className='flex flex-row justify-around items-center mt-10 overflow-x-hidden'>
          <motion.div
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0, transition: {ease: 'easeInOut', duration: 0.5, type: 'tween', damping: 300, stiffness: 100}}}
            viewport={{ once: true, amount: 0.5 }} 
            className='shadow-2xl shadow-white hover:shadow-[#7B4AE2] hover:bg-[#7B4AE2]'> 
            <Image  src={ARImage} alt="profile" width={300} height={300}/>
          </motion.div>
          <Description/>
        </div>
      </motion.section>
    )
  }