import React from 'react'
import MovieItem from './MovieItem'
import Spinner from '../ui/Spinner'

const MoviesGrid = ({movies, isLoading}) => {
  return isLoading ? (
    <Spinner/>
  ) : (
    <section className='cards'>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie}></MovieItem>
      ))}
  </section>
  )
}

export default MoviesGrid
