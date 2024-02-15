import Image from 'next/image'
import AR from '../../../public/ar-image.png'
import { motion, useScroll, useTransform, circOut } from "framer-motion";
import { useRef, useState } from 'react';

export default function ImageFn(){
    const ref = useRef<HTMLDivElement>(null)
    const {scrollY} = useScroll({
        target: ref,
        // offset: ["start end", "end end"]
    })
    const rotate = useTransform(scrollY, [0, 250, 350, 450], [0, 30, 60, 90], {clamp: false})
    const opacity = useTransform(scrollY, [0, 250, 350, 450], [1, 0.50, 0.25, 0], {clamp: false})
    const x = useTransform(scrollY, [0, 250, 350, 450], [0, 50, 100, 200], {clamp: false})
    const ROTATION_RANGE = 38;
    const HALF_ROTATION_RANGE = 38 / 2;

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

     const handleMouseMove = (e: any) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };
    
    return(
        <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover="hover"
            animate={{
                rotateX, rotateY
            }}
            className='z-0 transition-all group duration-100 shadow shadow-[#7B4AE2] rounded-full hover:shadow-full hover:shadow-[#7B4AE290] hover:shadow-opacity-10 hover:bg-[#7B4AE2] hover:bg-opacity-10' 
            ref={ref} 
            style={{rotate, opacity, x, transformStyle: "preserve-3d"}} 
            // transition={
            //     {duration: 4, ease: circOut, type: 'tween', delay: 5}
            // }
            >
            <motion.div
                className='hover:shadow-full rounded-4xl h-full'
                animate={{
                    transform: "translateZ(150px)",
                }}>
                <Image 
                    className="rounded-full" 
                    alt={'Face'} src={AR} width={450} quality={100} height={450}/>
            </motion.div>
        </motion.div>
    )
}