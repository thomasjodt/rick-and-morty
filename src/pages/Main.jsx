import '../styles/Main.scss'
import { Searchbar } from '../components/Searchbar'
import { CardsGrid } from '../components/CardsGrid'
import { Pagination } from '../components/Pagination'
import { CharacterItem } from '../components/CharacterItem'
import { useGetCharacters } from '../hooks/useGetCharacters'
// import { Tag } from '../components/Tag'

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
          : type === 'end' &&
            setPage(last)
  }

  return (
    <>
      <main className='Main'>
        <Searchbar setQuery={setSearch} setPage={setPage} />
        {last > 1 && (
          <Pagination
            action={handlePageNavigation}
            last={last}
            current={page}
          />
        )}
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
