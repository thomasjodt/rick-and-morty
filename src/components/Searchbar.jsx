import '../styles/Searchbar.scss'

import { AppContext } from '../context/AppContext'
import { useContext, useState } from 'react'

import searchIcon from '../assets/icons/search.svg'
import deleteIcon from '../assets/icons/delete.svg'

export const Searchbar = () => {
  const [query, setQuery] = useState('')
  const { setPage, setSearch } = useContext(AppContext)

  const submitSearch = (e) => {
    e.preventDefault()
    setPage(1)
    setSearch(query)
    setQuery('')
  }
  return (
    <form onSubmit={submitSearch}>
      <div className='search'>
        <label htmlFor='input'>
          <img src={searchIcon} />
        </label>
        <input
          id='input'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='search__input'
          type='text'
          placeholder='Are you looking for a character?'
        />
        {query && <img onClick={() => setQuery('')} src={deleteIcon} />}
        <button className='search__button'>Search</button>
      </div>
    </form>
  )
}
