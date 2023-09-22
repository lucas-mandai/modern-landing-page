import logo from '../assets/logomarca.png'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <nav className='flex flex-1 justify-between items-center'>
        <img src={logo} alt="Logo" className='h-[60px]' />

        <ul className='list-none flex gap-5'>
            {navLinks.map((nav, index) => (
               <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text=[16px]`}
                    onClick={() => setActive(nav.title)}
                >
                <a href={`#${nav.id}`}>{nav.title}</a>
                
               </li> 
            ))}
        </ul>

    </nav>
  )
}

export default Nav