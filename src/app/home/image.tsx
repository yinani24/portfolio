import Image from 'next/image'
import AR from '../../../public/ar-image.png'
import { motion } from "framer-motion";

export default function ImageFn(){
    return(
        <motion.div>
            <Image className="rounded-full" alt={'Face'} src={AR} width={450} quality={100} height={450}/>
        </motion.div>
    )
}