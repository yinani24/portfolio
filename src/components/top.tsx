"use client"

import { TopProps } from "./interfaces";
import { TopBar } from "./topbar";
import {motion} from 'framer-motion';

export function Top({topbar, children}: TopProps){
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
            className='container'>
            <TopBar width={topbar.width}>{topbar.children}</TopBar>
            <motion.h1 
            animate={{
                color: ["#ffffff", "#7B4AE2", "#ffffff"]}}
            transition={transition}
            className='text-white mb-4 font-[raleway] text-5xl font-extrabold'> {children} </motion.h1>
        </motion.div>
    )
}