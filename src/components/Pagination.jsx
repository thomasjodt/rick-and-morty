import '../styles/Pagination.scss'

export const Pagination = ({ current, last, action }) => {
  return (
    <div className='pagination'>
      <button
        onClick={() => action('start')}
        disabled={current === 1}
        className='pagination__button'
      >
        start
      </button>
      <button
        onClick={() => action('prev')}
        disabled={current === 1}
        className='pagination__button'
      >
        prev
      </button>
      <div
        className='pagination__indicator'
      >
        {`${current} of ${last}`}
      </div>
      <button
        onClick={() => action('next')}
        disabled={current === last}
        className='pagination__button'
      >
        next
      </button>
      <button
        onClick={() => action('end')}
        disabled={current === last}
        className='pagination__button'
      >
        end
      </button>
    </div>
  )
}
