"use client";
import React from "react"
import { TypeAnimation } from "react-type-animation"
// import {names} from '../../components/constants'
import Image from 'next/image'
import Github from '../../../public/Github.png'
import LinkedIn from '../../../public/LinkedIn.png' 
import Link from "next/link";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import ImageFn from "./image";

export default function Home() {
  
    return (
      <motion.section id='home' 
        initial={{ opacity: 0, scale:0.5, y: 100}}
        animate={{ opacity: 1, scale:1, y: 0}}
        transition={{ duration: 0.5 }}
        className='flex flex-row justify-around items-center h-screen'>
          <div className="flex flex-col w-56">
              <div className='rounded-2xl w-32 py-1 px-2 bg-[#7B4AE208]'>
                <h1 className='text-[#7B4AE2] font-raleway font-bold text-center text-md'>👋 Hello, I'm</h1>
              </div>
              <h1 className='text-white mb-4 font-[raleway] text-6xl font-extrabold'>
                <span>{" "}</span>
                <TypeAnimation
                sequence={[
                  "Yash Inani",
                  4000,
                  "Full Stack Developer",
                  4000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
              </h1>
            <div className='flex flex-row justify-around w-16'>
              <Link href='https://www.github.com/yinani24/'>
                <Image alt='Github' src={Github} width={25} height={25}/>
              </Link>
              <Link href='https://www.linkedin.com/in/yash-inani/'>
                <Image alt='LinkedIn' src={LinkedIn} width={25} height={25}/>
              </Link>
            </div>
          </div>
          
          <ImageFn/>

          <motion.div 
            
            className='flex flex-col justify-around h-20 '>  
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='border w-32 flex hover:text-white flex-row justify-center items-center border-[#7B4AE280] rounded-2xl text-[#7B4AE280]'>
                <GrContact className='m-0.5 p-0.5'/>
                <Link href='/#contact'>
                  <div className='text-[#7B4AE280] font-raleway font-semibold hover:text-white'>Contact Me</div>
                </Link>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='border-[#7B4AE280] rounded-2xl flex 
              flex-row justify-center items-center text-[#7B4AE280] font-semibold 
              font-raleway download hover:text-white'>
                Resume <FaDownload className='m-0.5 p-0.5' />
              </motion.button>
          </motion.div>
      </motion.section>
    )
  }