import Link from 'next/link'
import { navname } from './constants'

export default function NavBar() {
    return (
      <ul className='fixed flex flex-wrap flex-row justify-around pl-80'>
        {navname.map((name, index) => (
          <li key={index}>
            <button className='border rounded'>
              <Link href={`${name.route}`}> {name.title}
              </Link>
            </button>
          </li>
        ))}
      </ul>
    )
  }