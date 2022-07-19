import '../styles/Main.css'
import { Searchbar } from './Searchbar'
import { CardsGrid } from './CardsGrid'
import { Pagination } from './Pagination'
import { CharacterItem } from './CharacterItem'
import { useGetCharacters } from '../hooks/useGetCharacters'
import banner from '../assets/banner.png'

export const Main = () => {
  const { characters, loading, page, last, setPage, setSearch } =
    useGetCharacters()

  const handlePageNavigation = (type) => {
    type === 'next'
      ? setPage(page + 1)
      : type === 'prev'
      ? setPage(page - 1)
      : type === 'start'
      ? setPage(1)
      : type === 'end'
      ? setPage(last)
      : null
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
        <Searchbar setQuery={setSearch} setPage={setPage} />
        {last > 1 && (
          <Pagination
            action={handlePageNavigation}
            last={last}
            current={page}
          />
        )}

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
        {last > 1 && (
          <Pagination
            action={handlePageNavigation}
            last={last}
            current={page}
          />
        )}
      </main>
    </>
  )
}
