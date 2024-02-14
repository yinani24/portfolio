"use client"
import { TopBarProps } from "./interfaces";
import {motion} from 'framer-motion';

export function TopBar({width, children}: TopBarProps){  
  const buttonVariants = {
    y: {
      initial:{
        y: 0,
      },
      animate: {
        y: [0, 5, 0],
      },
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: 'easeInOut',
        delay: 0.5,
      }
    }
  }
  return(
    <motion.div
      variants={buttonVariants}
      className={`${width} rounded-2xl py-1 px-2 bg-[#7B4AE208]`}>
        <motion.h1 className='text-[#7B4AE2] font-Raleway font-bold text-center text-md'>{children}</motion.h1>
    </motion.div>
  )
}