"use client"

import {motion, useAnimate, useInView, useScroll, useTransform} from 'framer-motion';
import { useRef } from 'react';
import {description} from '../../components/constants';

export function Description(){
  const ref = useRef(null);
  const pRef = useRef(null)
  // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  return(
    <motion.div 
      ref={ref}
      initial={{opacity: 0, x: 100}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{ once: true, amount: 0.5 }}
      className='text-[#FFFFFF80] overflow-hidden text-lg ml-7 flex flex-col w-8/12 text-wrap justify-around gap-7'>
      {description.map((desc, id) => (
        <motion.p
          key={id}
          ref={pRef}
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity: 1, x: 0, transition: {ease: 'easeInOut', duration: 0.9, type: 'tween', delay: id*0.1 , damping: 300, stiffness: 100}}}
          viewport={{ once: true, amount: 0.5 }}
          className='text-Raleway text-wrap'>{desc}</motion.p>
      ))}
    </motion.div>
  )
}