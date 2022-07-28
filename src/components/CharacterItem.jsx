export const CharacterItem = (props) => {
  const status = props.status === 'Alive' ? { backgroundColor: 'green' } : props.status === 'Dead' ? { backgroundColor: 'red' } : { backgroundColor: 'orange' }
  return (
    <div className='char__item'>
      <div className='char__image'>
        <img src={props.image} alt={props.name} loading='lazy' />
      </div>
      <div className='char__info'>
        <h3 className='char__title'>{props.name} <span>({props.species})</span></h3>
        <div className='char__description'>
          <div className='status'>
            <span
              className='status__identifier'
              style={status}
            />{props.status}
          </div>
          <p>
            <b>Gender:</b> {props.gender}
          </p>
          <p>
            <b>Species:</b> {props.species}
          </p>
          <p>
            <b>Origin:</b> {props.origin.name}
          </p>
          <p>
            <b>Location:</b> {props.location.name}
          </p>
        </div>
      </div>
    </div>
  )
}
