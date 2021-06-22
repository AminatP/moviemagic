import React from 'react'
import {Link} from 'react-router-dom'
import { img_300, unavailable } from './imageConfig'
// import SingleMovie from './SingleMovie'

const MoviesGrid = ({movies, isLoading}) => {
  return isLoading ? (
   <div></div>
  ) : (
    <section className='cards'>
      {movies.map((movie) => (
        <div className='card'>
          <Link to={`/${movie.id}`}>
            <img src={movie.poster_path ? `${img_300}${movie.poster_path}` : unavailable}/>
            {/* <SingleMovie movie={movie}/> */}
          </Link>
        </div>
      ))}
  </section>
  )
}

export default MoviesGrid
