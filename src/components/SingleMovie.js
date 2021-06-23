import React, { useState, useEffect } from 'react'
import { img_300, unavailable } from './imageConfig'
import Rating from './Rating'
import axios from 'axios'
import '../App.css';

const SingleMovie = (props) => {
  let urlPath = parseInt(props.match.params.id)
  const scoreUpFromStorage = Number(window.localStorage.getItem('goodRating'))
  const scoreDownFromStorage = Number(window.localStorage.getItem('badRating'))

  const [ movie, setMovie ] = useState({})
  const [ scoreUp , setScoreUp ] = useState(scoreUpFromStorage)
  const [ scoreDown , setScoreDown ] = useState(scoreDownFromStorage)

  useEffect(() => {
		const fetchMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${urlPath}?api_key=${process.env.REACT_APP_API_KEY}`;

      const response = await axios.get(url);
      setMovie(response.data)
    };
    fetchMovie()
  }, []);

    useEffect(() => {
      window.localStorage.setItem('goodRating', scoreUp)
    },[scoreUp]);

    useEffect(() => {
      window.localStorage.setItem('badRating', scoreDown)
    },[scoreDown]);

    return (
    <div className="movie-container">
      <img src={movie.poster_path ? `${img_300}${movie.poster_path}` : unavailable}/>
      <div className="description">
        <h1>{movie.title}</h1>
        <li>{movie.overview}</li>
        <li>{movie.release_date}</li>
          <Rating scoreUp={scoreUp} scoreDown={scoreDown}/>
          <button onClick={() => setScoreUp(scoreUp + 1)}>Love it!</button>
          <button onClick={() => setScoreDown(scoreDown + 1)}>Nah!</button>
      </div>
    </div>
  )
}

export default SingleMovie
