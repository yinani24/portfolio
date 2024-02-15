"use client";

import { motion } from "framer-motion"
import Link from 'next/link'
import { MotionButton } from "./interfaces";

export function ButtonLink({children, Icon, href}: MotionButton){
    return(
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='group border w-32 flex hover:bg-[#7B4AE21A] flex-row justify-center items-center border-[#7B4AE280] rounded-2xl text-[#7B4AE280] hover:shadow hover:shadow-[#7B4AE280] hover:animate-[pulse_4s_linear_infinite]'>
            <Icon className='group-hover:text-white m-0.5 p-0.5'/>
            <Link href={href} className="text-[#7B4AE280] font-Raleway font-semibold group-hover:text-white">{children}</Link>
        </motion.button>
    )
}