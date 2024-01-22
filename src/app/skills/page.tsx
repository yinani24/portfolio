import { ParallaxText } from "./velocity"

export default function Skills() {
  return (
    <section id='skills'>
      <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
    </section>
  )
}

