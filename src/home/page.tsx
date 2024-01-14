"use client";

import { TypeAnimation } from "react-type-animation"
import {names} from '../components/constants'
import Image from 'next/image'
import Github from '../../public/Github.png'
import LinkedIn from '../../public/LinkedIn.png' 
import Link from "next/link";
import ARImage from '../../public/ar-image.jpg'

export default function Home() {
    return (
      <section id='home' className="">
        <div>
          <div className='rounded-lg bg-[#7B4AE208]'>
            <h1 className='text-white font-[raleway] font-bold'>👋 Hello!!</h1>
          </div>
          <h1 className='text-white mb-4 font-[raleway] text-9xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
            <span>{" "}</span>
            <TypeAnimation
            sequence={[
              "Yash Inani",
              1000,
              "Web Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
          </h1>
          <div className='flex flex-row justify-around'>
            <Link href='https://www.github.com/yinani24/'>
              <Image alt='Github' className='rounded-lg' src={Github} width={10} height={10}/>
            </Link>
            <Link href='https://www.linkedin.com/in/yash-inani/'>
              <Image alt='LinkedIn' className='rounded-lg' src={LinkedIn} width={10} height={10}/>
            </Link>
          </div>
        </div>
        
        <div className='rounded-3xl'>
          <Image alt='Yash Inani' src={ARImage} width={300} height={300}/>
        </div>

        <div className='flex flex-col'>
            <button className='bg-[#7B4AE208] rounded-lg font-raleway'>
              <Link href='/#contact'>
                <h1 className='text-white font-[Raleway] font-bold'>Contact Me</h1>
              </Link>
            </button>
            <button className='bg-[#7B4AE208] rounded-lg download'>
              Download
            </button>
        </div>
      </section>
    )
  }