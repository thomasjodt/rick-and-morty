import { useState, useEffect } from 'react'

const BASE_URL = 'https://rickandmortyapi.com/api/character/'

export const useGetCharacters = () => {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])
  const [last, setLast] = useState(null)

  useEffect(() => {
    (async() => {
      try {
        setCharacters([])
        loading || setLoading(true)
        const res = await fetch(`${BASE_URL}?page=${page}`)
        const data = await res.json()
        const { results } = data
        setCharacters(results)
        setLast(data.info.pages)
        console.log(data)
        setLoading(false)
      }
      catch (error) {console.error(error.message)}
    })()
  }, [page])

  return { characters, loading, page, last, setPage }
}
