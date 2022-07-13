import React from 'react'
import '../styles/CardsGrid.css'
import { LoadingSkeleton } from './LoadingSkeleton'

export const CardsGrid = ({ loading, children }) => {
  return (
    <section className='cards__grid'>
      {loading && <LoadingSkeleton />}
      {children}
    </section>
  )
}
