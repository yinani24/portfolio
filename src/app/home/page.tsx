"use client";
import React from "react"
import { TypeAnimation } from "react-type-animation"
// import {names} from '../../components/constants'
import Image from 'next/image'
import Github from '../../../public/Github.png'
import LinkedIn from '../../../public/LinkedIn.png' 
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import ImageFn from "./image";
import { TopBar } from "@/components/topbar";
import { ButtonLink } from "@/components/buttonlink";

export default function Home() {
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
  const ref = React.useRef<HTMLDivElement>(null)
  const {scrollY} = useScroll({
    target: ref,
  })
  const opacity = useTransform(scrollY, [0, 250, 350, 450], [1, 0.50, 0.25, 0], {clamp: false})
  const x_left = useTransform(scrollY, [0, 250, 350, 450], [0, -50, -100, -200], {clamp: false})
  const x_right = useTransform(scrollY, [0, 250, 350, 450], [0, 50, 100, 200], {clamp: false})
    return (
      <motion.section id='home' 
        initial={{ opacity: 0, scale:0.5, y: -100}}
        animate={{ opacity: 1, scale:1, y: 0}}
        transition={{ duration: 1 }}
        ref={ref}
        className='flex flex-row justify-around items-center h-screen overflow-hidden'>
          <motion.div 
              style={{opacity, x: x_left}}
              className="flex flex-col w-72">
              <TopBar width={"w-[118px]"}>👋 Hello, I'm</TopBar>
              <motion.h1
                animate={{color: ["#ffffff", "#7B4AE2", "#ffffff"]}}
                transition={transition}
                className='text-[#7B4AE2] mb-4 font-[raleway] w-full text-5xl font-extrabold'>
                <span className='w-full'>{" "}</span>
                <TypeAnimation
                sequence={[
                  "Yash Inani",
                  10000,
                  "Full Stack Developer",
                  10000,
                  "Software Engineer",
                  10000,
                  "UC Davis Student",
                  10000,
                ]}
                wrapper="span"
                speed={20}
                deletionSpeed={1}
                repeat={Infinity}
                />
              </motion.h1>
            <div className='flex flex-row justify-around w-16'>
              <motion.div 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className='hover:animate-[pulse_5s_ease-in-out_infinite]'>
                <Link target="_blank" href='https://www.github.com/yinani24/'>
                  <Image alt='Github' src={Github} width={25} height={25}/>
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className='hover:animate-[pulse_5s_ease-in-out_infinite]'>
                <Link target="_blank" href='https://www.linkedin.com/in/yash-inani/'>
                  <Image alt='LinkedIn' src={LinkedIn} width={25} height={25}/>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <ImageFn/>

          <motion.div
            style={{opacity, x: x_right}}
            className='flex flex-col justify-around h-20 '>  
              <ButtonLink Icon={GrContact} href='/#contact'>Contact Me</ButtonLink>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='border-[#7B4AE280] group rounded-2xl flex 
                flex-row justify-center items-center text-[#7B4AE280] font-semibold 
                font-Raleway download hover:text-white hover:animate-[bounce_1s_ease-in-out_infinite]'>
                <Link className='' href='../../Yash_Inani_Resume_2024.pdf'>Resume</Link> 
                <FaDownload className='m-0.5 p-0.5 ' />
              </motion.button>
          </motion.div>
      </motion.section>
    )
  }