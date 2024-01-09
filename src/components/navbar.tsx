import Link from 'next/link'
import { navname } from './constants'
import Image from 'next/image'
import Logo from '../../public/Logo.png'

export default function NavBar() {
    return (
      <section className='flex flex-wrap flex-row justify-around
      items-center w-screen p-2 bg-purple-500'>
        <Link href='/'>
          <Image className='rounded-lg' src={Logo} width={60} height={60} 
            alt={"Yash Inani Logo"}>
          </Image>
        </Link>
        <ul className='flex flex-row justify-around items-center w-[30rem]'>
          {navname.map((name, index) => (
            <li key={index}>
              <button className='border rounded w-100 h-100'>
                <Link href={`${name.route}`}> {name.title}
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </section>
    )
  }