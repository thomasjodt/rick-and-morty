import '../styles/Navbar.scss'

import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import sun from '../assets/icons/sun.svg'
import moon from '../assets/icons/moon.svg'

export const Navbar = () => {
  const { theme, setTheme } = useContext(AppContext)
  const toggleTheme = () => { setTheme(theme === 'light' ? 'dark' : 'light') }

  return (
    <nav className='navbar'>
      <a
        className='nav__link'
        target='_blank'
        href='https://rickandmortyapi.com/documentation/' rel='noreferrer'
      >
        Docs
      </a>
      <a
        className='nav__link'
        target='_blank'
        href='https://github.com/thomasjodt/rick-and-morty' rel='noreferrer'
      >
        View on Github
      </a>
      <div className='input__container'>
        <img src={sun} />
        <input onChange={toggleTheme} className='theme__button' type='checkbox' />
        <img src={moon} />
      </div>
    </nav>
  )
}
