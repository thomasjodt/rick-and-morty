import '../styles/Tag.scss'
import close from '../assets/icons/x.svg'

export const Tag = ({ name }) => {
  return (
    <div className='tag'>
      <span className='tag__name'>{name}</span>
      <button className='tag__cleaner'>
        <img src={close} alt='close button' />
      </button>
    </div>
  )
}
