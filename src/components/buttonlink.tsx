import { motion } from "framer-motion"
import Link from 'next/link'
import { MotionButton } from "./interfaces";

export function ButtonLink({children, Icon, href}: MotionButton){
    return(
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='border w-32 flex hover:text-white flex-row justify-center items-center border-[#7B4AE280] rounded-2xl text-[#7B4AE280]'>
            <Icon className='m-0.5 p-0.5'/>
            <Link href={href} className="text-[#7B4AE280] font-raleway font-semibold hover:text-white">{children}</Link>
        </motion.button>
    )
}