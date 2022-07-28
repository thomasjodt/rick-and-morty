import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'

export const Navbar = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => { setTheme(theme === 'light' ? 'dark' : 'light') }
  console.log(theme)
  return (
    <nav className='navbar'>
      <a
        className='nav__link'
        target='_blank'
        href='https://rickandmortyapi.com/documentation/' rel='noreferrer'
      >
        Docs
      </a>
      <Link className='nav__link' to='/'>Home</Link>
      <Link className='nav__link' to='/welcome'>Welcome</Link>
      <a
        className='nav__link'
        target='_blank'
        href='https://github.com/thomasjodt/rick-and-morty' rel='noreferrer'
      >
        View on Github
      </a>
      <input onChange={toggleTheme} className='theme__button' type='checkbox' />
    </nav>
  )
}
