import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SingleMovie = ({movie}) => {
  console.log("movie prop", movie)
  const [ singleMovie, setMovie ] = useState([])

  // useEffect(() => {
	// 	const fetchMovie = async () => {
  //     const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.REACT_APP_API_KEY}`;

  //     const response = await axios.get(url);
  //     console.log("this is response for single movie", response.data.id)
  //     setMovie(response.data)
  //   };
  //   fetchMovie()
  // }, []);

  // console.log("this is coming from single movie", singleMovie.id)
  return (
    <div>
      Hello
    </div>
  )
}

export default SingleMovie
