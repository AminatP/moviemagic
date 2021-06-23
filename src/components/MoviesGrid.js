import React from 'react'
import { Link } from 'react-router-dom'
import { img_300, unavailable } from './imageConfig'

const MoviesGrid = ({movies, isLoading}) => {

  return isLoading ? (
   <div></div>
  ) : (
    <section className='cards'>
      {movies.map((movie) => (
        <div className='card' key={movie.id}>
          <Link to={`/${movie.id}`}>
            <img
              src={movie.poster_path ? `${img_300}${movie.poster_path}` : unavailable}/>
          </Link>
        </div>
      ))}
  </section>
  )
}

export default MoviesGrid

