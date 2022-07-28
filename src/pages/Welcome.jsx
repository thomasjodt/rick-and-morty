import banner from '../assets/banner.svg'
import '../styles/Welcome.scss'

export const Welcome = () => {
  return (
    <>
      <header>
        <div className='banner'>
          <h1 className='banner__title'>Rick and Morty</h1>
          <img className='banner__image' src={banner} />
        </div>
        <section>
          <p>Hola</p>
        </section>
      </header>
    </>
  )
}
