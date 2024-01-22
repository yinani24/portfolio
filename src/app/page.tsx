import NavBar from "@/components/navbar"
import About from "./about/page"
import Contact from "./contact/page"
import Experience from "./experience/page"
import Project from "./projects/page"
import Skills from "./skills/page"
import Home from "./home/page"

export default function main() {
  return (
    <main className='flex min-h-screen flex-col bg-[#090E16]'>
      <NavBar/> 
      <div className="container mt-5 mx-auto px-5 py-4">
        <Home/>
        <About/>
        <Experience/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    </main>
  )
}