import '../styles/Main.css'
import { Searchbar } from './Searchbar'
import { CardsGrid } from './CardsGrid'
import { Pagination } from './Pagination'
import { CharacterItem } from './CharacterItem'
import { useGetCharacters } from '../hooks/useGetCharacters'
import banner from '../assets/banner.png'

export const Main = () => {
  const { characters, loading, page, last, setPage } = useGetCharacters()

  const handlePageNavigation = (type) => {
      (type === 'next') ? setPage(page + 1) :
      (type === 'prev') ? setPage(page - 1) :
      (type === 'start') ? setPage(1) :
      (type === 'end') ? setPage(42) :
      null
  }

  return (
    <>
      <main className='Main'>
        <header>
          <div className='title__container'>
            <h1 className='title'>Rick and Morty</h1>
          </div>
          <img className='header__image' src={banner} />
        </header>
        {/* <Searchbar /> */}
        <Pagination
          action={handlePageNavigation}
          last={last}
          current={page}
        />

        <CardsGrid loading={loading}>
          {loading || (
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
            ))
          )
          }
        </CardsGrid>
        <Pagination
          action={handlePageNavigation}
          last={last}
          current={page}
        />
      </main>
    </>
  )
}
