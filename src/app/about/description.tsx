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
      whileInView={{opacity: 1, x: 0, transition: {ease: 'easeOut', duration: 0.9, bounce: 0.3, delay: 0.5, bounceDamping: 10, bounceStiffness: 100}}}
      viewport={{ once: true, amount: 0.8 }}
      className='text-[#FFFFFF80] overflow-x-hidden text-lg flex flex-col w-8/12 text-wrap justify-around gap-4'>
      {description.map((desc, id) => (
        <motion.p
          key={id}
          ref={pRef}
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0, transition: {ease: 'easeOut', duration: 0.9, delay: id*0.9}}}
          className='text-Raleway text-wrap'>{desc}</motion.p>
      ))}
    </motion.div>
  )
}