import { useState, useEffect } from 'react'
import { Pagination } from './Pagination'
import '../styles/Main.css'
import { Searchbar } from './Searchbar'
import { CardsGrid } from './CardsGrid'
import { CharacterItem } from './CharacterItem'

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
            <CharacterItem
              key={char.id}
              image={char.image}
              name={char.name}
              id={char.id}
              status={char.status}
              species={char.species}
              origin={char.origin}
              location={char.location}
              gender={char.gender}
            />
            ))
          }
        </CardsGrid>
      </main>
    </>
  )
}
