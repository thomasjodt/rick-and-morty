import '../styles/Pagination.scss'

export const Pagination = ({ current, last, action }) => {
  return (
    <div className='pagination'>
      <button
        onClick={() => action('start')}
        className='pagination__button'
      >
        1
      </button>
      <button
        onClick={() => action('prev')}
        disabled={current === 1}
        className='pagination__button'
      >
        {'<'}
      </button>
      <div
        className='pagination__indicator'
      >
        {current}
      </div>
      <button
        onClick={() => action('next')}
        disabled={current === last}
        className='pagination__button'
      >
        {'>'}
      </button>
      <button
        onClick={() => action('end')}
        className='pagination__button'
      >
        {last}
      </button>
    </div>
  )
}
