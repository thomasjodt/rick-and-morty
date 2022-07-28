import '../styles/Pagination.scss'
import start from '../assets/icons/chevrons-left.svg'
import prev from '../assets/icons/chevron-left.svg'
import next from '../assets/icons/chevron-right.svg'
import end from '../assets/icons/chevrons-right.svg'

export const Pagination = ({ current, last, action }) => {
  return (
    <div className='pagination'>
      <button
        onClick={() => action('start')}
        disabled={current === 1}
        className='pagination__button'
      >
        <img src={start} />
      </button>
      <button
        onClick={() => action('prev')}
        disabled={current === 1}
        className='pagination__button'
      >
        <img src={prev} />
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
        <img src={next} />
      </button>
      <button
        onClick={() => action('end')}
        disabled={current === last}
        className='pagination__button'
      >
        <img src={end} />
      </button>
    </div>
  )
}
