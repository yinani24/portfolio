import { TopBar } from "@/components/topbar"
import { ParallaxText } from "./velocity"
import { First, Second } from "./images"
export default function Skills() {
  return (
    <section id='skills' className='flex flex-col justify-center items-center gap-5'>
      {/* <TopBar>🧑‍💻 Skills</TopBar>
      <h1 className='text-white mb-4 font-[raleway] text-6xl font-extrabold'> Technologies and Skills </h1> */}
      <ParallaxText baseVelocity={-10}><First/></ParallaxText>
      <ParallaxText baseVelocity={10}><Second/></ParallaxText>
    </section>
  )
}

