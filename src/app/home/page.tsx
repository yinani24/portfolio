"use client";
import React from "react"
import { TypeAnimation } from "react-type-animation"
import {names} from '../../components/constants'
import Image from 'next/image'
import Github from '../../../public/Github.png'
import LinkedIn from '../../../public/LinkedIn.png' 
import Link from "next/link";
import AR from '../../../public/ar-image.png'
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

export default function Home() {
    return (
      <section id='home' className='flex flex-row justify-around items-center'>
          <div className="flex flex-col w-56">
            <div className=''>
              <div className='rounded-2xl w-24 py-1 px-2 bg-[#7B4AE208]'>
                <h1 className='text-[#7B4AE2] font-raleway font-bold text-center'>👋 Hello!!</h1>
              </div>
              <h1 className='text-white mb-4 font-[raleway] text-5xl font-extrabold'>
                <span>{" "}</span>
                <TypeAnimation
                sequence={[
                  "Yash Inani",
                  4000,
                  "Web Developer",
                  4000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
              </h1>
            </div>
            <div className='flex flex-row justify-around w-16'>
              <Link href='https://www.github.com/yinani24/'>
                <Image alt='Github' src={Github} width={25} height={25}/>
              </Link>
              <Link href='https://www.linkedin.com/in/yash-inani/'>
                <Image alt='LinkedIn' src={LinkedIn} width={25} height={25}/>
              </Link>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale:0.5, y: 100}}
            animate={{ opacity: 1, scale:1, y: 0}}
            transition={{ duration: 0.5 }}
          >
            <Image className="rounded-full" alt={'Face'} src={AR} width={450} quality={100} height={450}/>
          </motion.div>

          <div className='flex flex-col justify-around h-20 '>
              <motion.button className='border w-32 flex flex-row justify-center items-center border-[#7B4AE280] rounded-2xl text-[#7B4AE280]'>
                <GrContact className='m-0.5 p-0.5'/>
                <Link href='/#contact'>
                  <span className='text-[#7B4AE280] font-raleway font-bold'>Contact Me</span>
                </Link>
              </motion.button>
              <motion.button className='border-[#7B4AE280] rounded-2xl flex flex-row justify-center items-center text-[#7B4AE280] font-raleway download'>
                Resume <FaDownload className='m-0.5 p-0.5' />
              </motion.button>
          </div>
      </section>
    )
  }