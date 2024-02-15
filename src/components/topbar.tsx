"use client"
import { TopBarProps } from "./interfaces";
import {motion} from 'framer-motion';

export function TopBar({width, children}: TopBarProps){  
  const transition = {
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
    repeatDelay: 8,
    type: "tween",
    damping: 300,
    stiffness: 100,
    velocity: 1,
  }
  return(
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        // y: ["0px", "-30px",  "0px"],
        // rotate: ["0deg", "360deg", "0deg"]
      }}
      transition={transition}
      className={`${width} animate-[bounce_5s_ease-in-out_infinite] rounded-2xl py-1 px-2 mb-2 delay-700 bg-[#7B4AE208]`}>
        <motion.h1 
          animate={{color: ["#7B4AE2", "#ffffff", "#7B4AE2"]}}
          transition={transition}
          className='text-[#7B4AE2] font-Raleway font-bold text-center text-md'>{children}</motion.h1>
    </motion.div>
  )
}