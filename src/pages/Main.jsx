import '../styles/Main.scss'
import { Searchbar } from '../components/Searchbar'
import { CardsGrid } from '../components/CardsGrid'
import { Pagination } from '../components/Pagination'
import { CharacterItem } from '../components/CharacterItem'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
// import { Tag } from '../components/Tag'

export const Main = () => {
  const { last, loading, characters } = useContext(AppContext)
  return (
    <>
      <main className='Main'>
        <Searchbar />
        {last > 1 && <Pagination />}
        {/* <div className='tags'><Tag name='test1' /></div> */}
        <CardsGrid loading={loading}>
          {loading ||
            characters.map((char) => (
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
            ))}
        </CardsGrid>
        {last > 1 && <Pagination />}
      </main>
    </>
  )
}
