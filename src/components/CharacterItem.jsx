export const CharacterItem = (props) => {
  return (
    <div className='char__item'>
      <div className='char__image'>
        <img src={props.image} alt={props.name} />
      </div>
      <div className='char__info'>
        <h3 className='char__title'>{props.name}</h3>
        <div className='char__description'>
          <p>
            <b>Status:</b> {props.status}
          </p>
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
