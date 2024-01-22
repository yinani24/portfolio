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
    const rotate = useTransform(scrollY, [0, 250], [0, 50], {clamp: false})
    return(
        <motion.div ref={ref} style={{rotate}}>
            <Image className="-z-1 rounded-full" alt={'Face'} src={AR} width={450} quality={100} height={450}/>
        </motion.div>
    )
}