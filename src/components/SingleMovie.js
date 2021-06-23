import React, { useState, useEffect } from 'react'
import { img_300, unavailable } from './imageConfig'
import axios from 'axios'

const SingleMovie = (props) => {
  let urlPath = parseInt(props.match.params.id)
  const [ movie, setMovie ] = useState({})

  useEffect(() => {
		const fetchMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${urlPath}?api_key=${process.env.REACT_APP_API_KEY}`;

      const response = await axios.get(url);
      setMovie(response.data)
    };
    fetchMovie()
  }, []);

  console.log("this is movie", movie)
  return (
    <div>
      {movie.title}
      <img src={movie.poster_path ? `${img_300}${movie.poster_path}` : unavailable}/>
      {movie.overview}
      {movie.release_date}
    </div>
  )
}

export default SingleMovie
