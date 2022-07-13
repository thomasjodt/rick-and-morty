import React from 'react'

export const CharacterItem = (props) => {
  return (
    <div className='char__item'>
      <div className='char__image'>
        <img src={props.image} alt={props.name} />
      </div>
      <div className='char__info'>
        <h3 className='char__title'>{props.name}</h3>
        <div className='char__description'>
          <p>ID: {props.id}</p>
          <p>Status: {props.status}</p>
          <p>Gender: {props.gender}</p>
          <p>Species: {props.species}</p>
          <p>Origin: {props.origin.name}</p>
          <p>Location: {props.location.name}</p>
        </div>
      </div>
    </div>
  )
}
