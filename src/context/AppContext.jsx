import { createContext, useState } from 'react'
import { useGetCharacters } from '../hooks/useGetCharacters'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const {
    characters,
    loading,
    page,
    last,
    setPage,
    setSearch,
    search
  } = useGetCharacters()

  return (
    <AppContext.Provider value={{ theme, setTheme, characters, loading, page, last, setPage, setSearch, search }}>
      {children}
    </AppContext.Provider>
  )
}
