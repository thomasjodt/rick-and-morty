import '../styles/Welcome.scss'
import banner from '../assets/banner.svg'
import { Link } from 'react-router-dom'

export const Welcome = () => {
  return (
    <>
      <header className='banner'>
        <div className='banner__container'>
          <img className='banner__image' src={banner} />
          <h1 className='banner__title'>Rick and Morty</h1>
          <Link to='/main' className='banner__button' type='button'>Go to homepage</Link>
        </div>
      </header>
    </>
  )
}
