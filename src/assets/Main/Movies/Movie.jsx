import React from 'react'
import './Movie.scss'

function Movie(props) {
  return (
    <div className='movieCard'>
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.director}</p>
      <p>{props.duration}</p>
      <p>{props.rate}</p>
      <ul>
        {props.genre.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Movie
