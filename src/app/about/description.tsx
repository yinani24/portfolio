import {motion, useInView} from 'framer-motion';
import { useRef } from 'react';

export function Description(){
  const ref = useRef(null);
  const isinView = useInView(ref, {once: true});
  return(
    <div ref={ref} className='text-[#FFFFFF80] text-lg flex flex-col w-8/12 text-wrap justify-around gap-4'>
      <p className='text-Raleway text-wrap'>I'm Yash, a full-time caffeine addict ☕️ and part-time software developer 👨‍💻. I'm currently in my senior year studying Computer Science 🖥️ at UC Davis 🐄.</p>
      <p className='text-Raleway text-wrap'>I'm passionate about building web apps and have experience working with the MERN stack, Git, and more. How, you ask? 🤔 Through intense late-night coding sessions fueled by coffee ☕️ and personal projects 💻 beyond just my coursework 📚. I am even working on AI/ML research 🤖 ith Professor Rafatirad.</p>
      <p className='text-Raleway text-wrap'>When I manage to peel myself away from my computer 💻, you can find me wielding a badminton racket 🏸, biking 🚲 around Davis, listening to business 💰 and finance 📈 podcasts, or attempting fancy cardistry card tricks (it's been while since I've practiced though).</p>
      <p className='text-Raleway text-wrap'>I'm currently on the hunt for full-time SWE roles 👨‍💻 where I can expand my skills and build meaningful products. I'm open to joining startups to help drive innovation and change in my first role after graduation 🎓.</p>
      <p className='text-Raleway text-pretty'>Feel free to check out some of my past projects 👇 or feel free to connect via my contact page 💬. I'm always down for a good conversation over coffee ☕️ or to get any career advice!</p>
    </div>
  )
}