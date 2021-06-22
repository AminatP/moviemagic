import React from 'react'
import { img_300, unavailable } from './imageConfig'

const MovieItem = ({ movie }) => {
  console.log("movie from the movieItem", movie)
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          {/* <img src={movie.poster_path} alt='' /> */}

          <img src={movie.poster_path ? `${img_300}${movie.poster_path}` : unavailable}/>
        </div>
        <div className='card-back'>
          <h1>{movie.title}</h1>
          <ul>
            <li>
              <strong>Release Date:</strong> {movie.release_date}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
