import React, { useState, useEffect } from 'react'
import '../styles/Searchbar.css'

const BASE_URL = 'https://rickandmortyapi.com/api/character/'

export const Searchbar = () => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const submitSearch = (e) => {
    e.preventDefault()
    // console.log(search)
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
        <button
          className='search__button'
        >
          Search
        </button>
      </div>
    </form>
  )
}
