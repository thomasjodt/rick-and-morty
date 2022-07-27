import React from 'react'
import '../styles/Navbar.scss'

export const Navbar = () => {
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
    </nav>
  )
}
