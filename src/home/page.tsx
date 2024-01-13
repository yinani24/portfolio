"use client";

import { TypeAnimation } from "react-type-animation"
import {names} from '../components/constants'
import Image from 'next/image'
import Github from '../../public/Github.png'
import LinkedIn from '../../public/LinkedIn.png' 
import Link from "next/link";

export default function Home() {
    return (
      <section id='home'>
        <div>
          <div className='rounded-lg bg-[#7B4AE208]'>
            <p className='text-white font-[Raleway] font-bold text-lg text-center'>👋 Hello!!</p>
          </div>
          <h1 className='text-white font-[Raleway] font-bold text-9xl text-center'>
            <span className='text-[#7B4AE2]'>I'm
            <TypeAnimation
            sequence={names.flatMap(({name, time}) => [name, time])}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            />
            </span>
            
          </h1>
          
          <div>
          <Link href='https://www.github.com/yinani24/'>
            <Image alt='Github' className='rounded-lg' src={Github} width={60} height={60}/>
          </Link>
          <Link href='https://www.linkedin.com/in/yash-inani/'>
            <Image alt='LinkedIn' className='rounded-lg' src={LinkedIn} width={60} height={60}/>
          </Link>
          </div>
          
        </div>
      </section>
    )
  }