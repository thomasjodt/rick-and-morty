import { useState, useEffect } from 'react'

const BASE_URL = 'https://rickandmortyapi.com/api/character/'

export const useGetCharacters = () => {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])
  const [last, setLast] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    ;(async () => {
      try {
        setCharacters([])
        loading || setLoading(true)
        const res = await fetch(`${BASE_URL}?page=${page}&name=${search}`)
        const data = await res.json()
        const { results, info } = data
        setCharacters(results)
        setLast(info.pages)
        console.log(info)
        setLoading(false)
      } catch (error) {
        console.error(error.message)
        setLast(0)
        setCharacters([])
        setLoading(false)
      }
    })()
  }, [page, search])

  return {
    characters,
    loading,
    page,
    last,
    setPage,
    setCharacters,
    setSearch,
    setLast,
  }
}
