import { TopBar } from "@/components/topbar"
import { ParallaxText } from "./velocity"
import CSS from '../../../public/icons/css.svg'
import Image from 'next/image'
import HTML from '../../../public/icons/html.svg'
import JS from '../../../public/icons/javascript.svg'
import R from '../../../public/icons/react.svg'
import C from '../../../public/icons/c.svg'
import Cpp from '../../../public/icons/cplusplus.svg'
import Python from '../../../public/icons/python.svg'
import Express from '../../../public/icons/express.svg'
import Git from '../../../public/icons/git.svg'
import Graphql from '../../../public/icons/graphql.svg'
import Jira from '../../../public/icons/jira.svg'
import MySQL from '../../../public/icons/mysql.svg'
import Next from '../../../public/icons/nextjs.svg'
import NodeJavaScript from '../../../public/icons/nodejs.svg'
import Numpy from '../../../public/icons/numpy.svg'
import Pandas from '../../../public/icons/pandas.svg'
import Pytorch from '../../../public/icons/pytorch.svg'
import Typescript from '../../../public/icons/typescript.svg'
import Golang from '../../../public/icons/go.svg'
import Mongo from '../../../public/icons/mongodb.svg'
import Postgres from '../../../public/icons/postgres.svg'
import { First } from "./images"

export default function Skills() {
  const width = 80
  const height = 80
  return (
    <section id='skills' className='mt-16 scroll-mt-24 flex w-full flex-col justify-center items-center gap-10'>
      {/* <TopBar width="w-28">🧑‍💻 Skills</TopBar> */}
      {/* <h1 className='text-white mb-4 font-[raleway] text-6xl font-extrabold'> Technologies and Skills </h1> */}
        <ParallaxText baseVelocity={-1} leftShift={-20} rightShift={-53.33} 
        widthupper="w-3/4" widthlower="w-[400%]" numofchildren={3}>
          <Image className='opacity-50' src={CSS} alt="CSS" width={width} height={height}/>
          <Image className='opacity-50' src={HTML} alt="HTML" width={width} height={height}/>
          <Image className='opacity-50' src={JS} alt="JS" width={width} height={height}/>
          <Image className='opacity-50' src={R} alt="React" width={width} height={height}/>
          <Image className='opacity-50' src={Express} alt="CSS" width={width} height={height}/>
          <Image className='opacity-50' src={NodeJavaScript} alt="Node" width={width} height={height}/>
          <Image className='opacity-50' src={Mongo} alt="MongoDB" width={width} height={height}/>
          <Image className='opacity-50' src={Postgres} alt="Postgres" width={width} height={height}/>
          <Image className='opacity-50' src={Next} alt="Next" width={width} height={height}/>
          <Image className='opacity-50' src={Typescript} alt="Typescript" width={width} height={height}/>
          <Image className='opacity-50' src={Golang} alt="Golang" width={width} height={height}/>
          <Image className='opacity-50' src={Graphql} alt="Graphql" width={width} height={height}/>
          <Image className='opacity-50' src={MySQL} alt="MySQL" width={width} height={height}/>
        </ParallaxText>

        <ParallaxText baseVelocity={1} leftShift={-20} rightShift={-45}
          widthupper="w-2/4" widthlower="w-[500%]" numofchildren={4}>
          <Image className='opacity-50' src={Git} alt="Git" width={width} height={height}/>
          <Image className='opacity-50' src={Jira} alt="Jira" width={width} height={height}/>
          <Image className='opacity-50' src={Numpy} alt="Numpy" width={width} height={height}/>
          <Image className='opacity-50' src={Pandas} alt="Pandas" width={width} height={height}/>
          <Image className='opacity-50' src={Pytorch} alt="Pytorch" width={width} height={height}/>
          <Image className='opacity-50' src={C} alt="C" width={width} height={height}/>
          <Image className='opacity-50' src={Cpp} alt="C++" width={width} height={height}/>
          <Image className='opacity-50' src={Python} alt="Python" width={width} height={height}/>
        </ParallaxText>
    </section>
  )
}

