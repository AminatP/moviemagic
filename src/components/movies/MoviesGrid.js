import React from 'react'
import { img_300, unavailable } from './imageConfig'

const MoviesGrid = ({movies, isLoading}) => {
  return isLoading ? (
   <div></div>
  ) : (
    <section className='cards'>
      {movies.map((movie) => (
        <div className='card'>
        <img src={movie.poster_path ? `${img_300}${movie.poster_path}` : unavailable}/>
        </div>
      ))}
  </section>
  )
}

export default MoviesGrid
