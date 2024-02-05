import Image from 'next/image'
import Github from '../../../public/Github.png'
import LinkedIn from '../../../public/LinkedIn.png'
import { SiGmail } from 'react-icons/si' 
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link'

export function Footer(){
    return(
        <footer className='mt-10 h-24 bg-[#7B4AE21A] flex flex-col justify-center items-center gap-2'>
            <div className='flex flex-row justify-around w-24'>
              <Link target="_blank" rel="noopener noreferrer" href='https://www.github.com/yinani24/'>
                <Image alt='Github' src={Github} width={18} height={18}/>
              </Link>
              <Link target="_blank" href='https://www.linkedin.com/in/yash-inani/'>
                <Image alt='LinkedIn' src={LinkedIn} width={18} height={18}/>
              </Link>
              <Link target="_blank" href='mailto:yinani@ucdavis.edu'>
                <SiGmail className='text-[#FFFFFF80] text-lg'/>
              </Link>
              <Link target='_blank' href='www.instagram.com/yash.inani.24'>
                <FaInstagram className='text-[#FFFFFF80] text-lg'/>
              </Link>
            </div>
            <span>
                <p className='text-[#FFFFFF80] font-Raleway text-xs font-normal'>Made with ❤️ by Yash Inani</p>
            </span>
            <p className="text-xs font-Raleway text-[#FFFFFF80]">
                <span className="font-semibold">About this website:</span> Built with
                Next.js, TypeScript, Tailwind CSS,
                Framer Motion, React Email & Resend, Vercel hosting.
            </p>
        </footer>
    )
}