import Image from 'next/image'
import AR from '../../../public/ar-image.png'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

export default function ImageFn(){
    const ref = useRef(null)
    const {scrollY} = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })
    const rotate = useTransform(scrollY, [0, 300], [0, 30], {clamp: false})
    return(
        <motion.div className='z-0' ref={ref} style={{rotate}} >
            <Image className="z-9998 rounded-full" alt={'Face'} src={AR} width={450} quality={100} height={450}/>
        </motion.div>
    )
}