import React from 'react'
import {Link} from 'react-router-dom'
import { img_500, unavailable } from './imageConfig'

const MovieItem = ({ movie }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={movie.poster_path ? `${img_500}${movie.poster_path}` : unavailable}/>
        </div>
        <div>
          <h1>{movie.title}</h1>
          <ul>
            <li>
              <strong>Release Date:</strong> {movie.release_date}
            </li>
            <Link to={`/movie/${movie.id}`}>
              <button>See All Info</button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
