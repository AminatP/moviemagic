import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { img_300, unavailable } from './imageConfig'
import SingleMovie from './SingleMovie'

const MoviesGrid = ({movies, isLoading}) => {
  const [ movieInfo, setMovieInfo ] = useState({})


  const imageClick = (info) => {
    setMovieInfo(info)
  }

  return isLoading ? (
   <div></div>
  ) : (
    <section className='cards'>
      {movies.map((movie) => (
        <div className='card' key={movie.id}>
            <img
              onClick={() => imageClick(movie)}
              src={movie.poster_path ? `${img_300}${movie.poster_path}` : unavailable}/>
        </div>
      ))}
      <SingleMovie movie={movieInfo}/>
  </section>
  )
}

export default MoviesGrid



{/* <div className='card' key={movie.id}>
<Link to={`/${movie.id}`}>
  <img src={movie.poster_path ? `${img_300}${movie.poster_path}` : unavailable}/>
</Link>
</div> */}
