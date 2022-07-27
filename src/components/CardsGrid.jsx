import '../styles/CardsGrid.scss'
import { LoadingSkeleton } from './LoadingSkeleton'

export const CardsGrid = ({ loading, children }) => {
  return (
    <section className='cards__grid'>
      {loading && <LoadingSkeleton />}
      {children}
    </section>
  )
}
