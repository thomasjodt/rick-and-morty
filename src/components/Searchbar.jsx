import React from 'react'
import '../styles/Searchbar.css'

export const Searchbar = () => {
  return (
    <form>
      <div className='search'>
        <input className='search__input' type='text' placeholder='Search...' />
        <button className='search__button'>Search</button>
      </div>
    </form>
  )
}
