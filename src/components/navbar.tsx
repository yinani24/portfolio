import Link from 'next/link'
import { navname } from './constants'
import animate from 'framer-motion'

export default function NavBar() {
    return (
      <nav>
        <ul>
          {navname.map((name) => (
            <li key={name.id}>
              <button>
                <Link href={`${name.route}`}> {name.title}
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
    )
  }