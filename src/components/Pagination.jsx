import '../styles/Pagination.scss'

import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import start from '../assets/icons/chevrons-left.svg'
import prev from '../assets/icons/chevron-left.svg'
import next from '../assets/icons/chevron-right.svg'
import end from '../assets/icons/chevrons-right.svg'

export const Pagination = () => {
  const { page, setPage, last } = useContext(AppContext)
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
    <div className='pagination'>
      <button
        onClick={() => handlePageNavigation('start')}
        disabled={page === 1}
        className='pagination__button'
      >
        <img src={start} />
      </button>
      <button
        onClick={() => handlePageNavigation('prev')}
        disabled={page === 1}
        className='pagination__button'
      >
        <img src={prev} />
      </button>
      <div
        className='pagination__indicator'
      >
        {`${page} of ${last}`}
      </div>
      <button
        onClick={() => handlePageNavigation('next')}
        disabled={page === last}
        className='pagination__button'
      >
        <img src={next} />
      </button>
      <button
        onClick={() => handlePageNavigation('end')}
        disabled={page === last}
        className='pagination__button'
      >
        <img src={end} />
      </button>
    </div>
  )
}
