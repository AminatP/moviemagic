import React, { useState, useEffect } from 'react'

const SingleMovie = (movie) => {
  console.log("coming from single!!!", movie.movie.title)
  // console.log(this.props.location.movie)
  // const id = movie.match.url
  // console.log(id)
  // const id = parseInt(().substring(1))

  // const result = movie.filter(m => m.id === id);
  // console.log("result", result)

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
