"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import ARImage from '../../../public/collage.jpg'
import { Description } from './description';
import  FunImage from '../../../public/funnyimage.jpg';
import { Top } from '@/components/top';
import { useRef, useState } from 'react';

export default function About() {
  const ref = useRef(null);
  return (
      <motion.section 
        id='about' className='mt-24 scroll-mt-24' ref={ref}>
        <Top topbar={{width: "w-32", children: "🧐 About Me" }}>Get to Know Me!!</Top>
        <div className='flex flex-row justify-around items-center mt-10 overflow-hidden'>
            <motion.div
              initial={{opacity: 0, x: -100}}
              whileInView={{opacity: 1, x: 0, transition: {ease: 'easeInOut', duration: 0.5, type: 'tween', damping: 300, stiffness: 100}}}
              viewport={{ once: true, amount: 0.5 }} 
              className='hover:shadow-[#7B4AE2] relative group'> 
                <Image className='w-full h-full relative' src={ARImage} alt="profile" width={300} height={300}/>
                <motion.div 
                  className="absolute w-full h-full inset-0 flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-80"
                  initial={{y: 200, opacity: 0}}
                  whileHover={{y: 0, opacity: 1, transition: {duration: 1, delay:0.2, type: 'tween', damping: 300, stiffness: 100}}}
                  >
                  <Image className='w-full h-4/6' src={FunImage} alt="profile" />
                </motion.div>
            </motion.div>
            <Description/>
        </div>
      </motion.section>
    )
  }