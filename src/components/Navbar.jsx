import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <a className='nav__link' target='_blank' href='https://rickandmortyapi.com/documentation/'>
        Docs
      </a>
      <a className='nav__link' target='_blank' href='/'>
        View on Github
      </a>
    </nav>
  )
}
