import { TypeAnimation } from "react-type-animation"
import {names} from '../components/constants'

export default function Home() {
    return (
      <section id='home'>
        <div>
          <div className='rounded-lg bg-[#7B4AE208]'>
            <p className='text-purple-600 font-[Raleway] font-bold text-lg text-center'>👋 Hello!!</p>
          </div>
          {/* <TypeAnimation
            sequence={names.map((name) => [}
          >
          </TypeAnimation> */}
        </div>
        

      </section>
    )
  }