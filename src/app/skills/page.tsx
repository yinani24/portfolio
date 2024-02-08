import { TopBar } from "@/components/topbar"
import { ParallaxText } from "./velocity"
import { First } from "./images"
export default function Skills() {
  return (
    <section id='skills'>
      {/* <TopBar>🧑‍💻 Skills</TopBar>
      <h1 className='text-white mb-4 font-[raleway] text-6xl font-extrabold'> Technologies and Skills </h1> */}
      <ParallaxText baseVelocity={-5}><First/></ParallaxText>
      <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
      <First/>
    </section>
  )
}

