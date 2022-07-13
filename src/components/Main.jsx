import { useState, useEffect } from 'react'
import { Pagination } from './Pagination'
import '../styles/Main.css'
import { Searchbar } from './Searchbar'
import { CardsGrid } from './CardsGrid'

export const Main = () => {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    (async() => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const data = await res.json()
        const { results } = data
        setCharacters(results)
        console.log(characters)
        setLoading(false)
      }
      catch (error) {console.error(error.message)}
    })()
  }, [])

  return (
    <>
      <main className='Main'>
        <h1 className='title'>Rick and Morty</h1>
        <Searchbar />
        <CardsGrid loading={loading}>
          {characters.map((char) => (
            <div key={char.name} className='char__item'>
              <div className='char__image'>
                <img src={char.image} alt={char.name} />
              </div>
              <div className='char__info'>
                <h3 className='char__title'>{char.name}</h3>
                <div className='char__description'>
                  <p>ID: {char.id}</p>
                  <p>Status: {char.status}</p>
                  <p>Gender: {char.gender}</p>
                  <p>Species: {char.species}</p>
                  <p>Origin: {char.origin.name}</p>
                  <p>Location: {char.location.name}</p>
                </div>
              </div>
            </div>
            ))
          }
        </CardsGrid>
      </main>
    </>
  )
}
