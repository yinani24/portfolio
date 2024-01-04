import Link from 'next/link'

export default function NavBar() {
    const navname = [
        {'id': '0', 'route':"home", 'title': 'Home'},
        {'id': '1', 'route':"projects", 'title': 'Projects'},
        {'id': '2', 'route':"skills", 'title': 'Skills'},
        {'id': '3', 'route':"contact", 'title': 'Contact'},
        {'id': '4', 'route':"about", 'title': 'About'}
    ] 
    
    return (
      <ul>
        {navname.map((name) => (
          <li key={name.id}>
            <Link href={`/${name.route}`}> {name.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }