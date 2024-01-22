"use client";

import Link from 'next/link'
import { navname } from './constants'
import Image from 'next/image'
import Logo from '../../public/logo.png'
import { motion } from 'framer-motion'

export default function NavBar() {
    return (
      <nav className='fixed z-1 flex w-screen justify-center'>
        <motion.section 
          initial={{ opacity: 0, scale:0.5, y: -100}}
          animate={{ opacity: 1, scale:1, y: 0}}
          className='flex flex-wrap flex-row justify-between
        items-center w-9/12 p-2 bg-[#7B4AE208] rounded-2xl my-5'
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='mx-3'>
            
            <Link href='/'>
              <Image className='rounded-md' src={Logo} width={62.5} height={60} 
                alt={"Logo"}>
              </Image>
            </Link>
            
          </motion.button>
          <ul className='flex flex-row justify-around items-center w-[30rem]'>
            {navname.map((name, index) => (
              <li key={index}>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='text-[#ffffff] w-100 h-100 hover:text-[#7B4AE280]'>
                    <Link className='font-[raleway] text-center bg-opactiy-50 
                      font-normal text-base hover:font-bold' href={`${name.route}`}> 
                        {name.title}
                    </Link>
                </motion.button>
              </li>
            ))}
          </ul>
        </motion.section>
      </nav>
    )
  }