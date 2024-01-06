import NavBar from "@/components/navbar"
import About from "../about/page"
import Contact from "../contact/page"
import Experience from "../experience/page"
import Project from "../projects/page"
import Skills from "../skills/page"
import Home from "../home/page"

export default function main() {
  return (
    <main>
      <NavBar/>
      <Home/>
      <Project/>
      <Skills/>
      <Contact/>
      <About/>  
      <Experience/>
    </main>
  )
}
