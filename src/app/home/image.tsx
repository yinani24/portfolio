import Image from 'next/image'
import AR from '../../../public/ar-image.png'
import { motion, useScroll, useTransform, circOut } from "framer-motion";
import { useRef } from 'react';

export default function ImageFn(){
    const ref = useRef(null)
    const {scrollY} = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })
    const rotate = useTransform(scrollY, [0, 200], [0, 20], {clamp: false})
    const opacity = useTransform(scrollY, [-100, 0, 200, 250, 300, 350],
        [0, 1, 1, 0.55, 0.25, 0], {clamp: false})
    return(
        <motion.div className='z-0' ref={ref} style={{rotate, opacity}} >
            <Image className="z-9998 rounded-full" alt={'Face'} src={AR} width={450} quality={100} height={450}/>
        </motion.div>
    )
}