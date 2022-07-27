import { useState } from 'react'
import '../styles/Searchbar.scss'

export const Searchbar = ({ setQuery, setPage }) => {
  const [search, setSearch] = useState('')

  const submitSearch = (e) => {
    e.preventDefault()
    setPage(1)
    setQuery(search)
    setSearch('')
  }
  return (
    <form onSubmit={submitSearch}>
      <div className='search'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='search__input'
          type='text'
          placeholder='Are you looking for a character?'
        />
        <button className='search__button'>Search</button>
      </div>
    </form>
  )
}
