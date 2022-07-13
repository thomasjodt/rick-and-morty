import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <a className='nav__link' href='/'>
        Home
      </a>
      <a className='nav__link' target='_blank' href='/'>
        View on Github
      </a>
    </nav>
  )
}
