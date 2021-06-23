import React, { useState, useEffect } from 'react'
import { img_300, unavailable } from './imageConfig'
import Rating from './Rating'
import up from '../images/up.png'
import down from '../images/down.png'
import axios from 'axios'
import '../App.css';

const SingleMovie = (props) => {
  let urlPath = parseInt(props.match.params.id)
  let good = 0
  let bad = 0
  const localData = localStorage.getItem(urlPath)

  if(localData){
    const info = JSON.parse(localData)
      good = info.goodRating
      bad = info.badRating
  }

  const [ movie, setMovie ] = useState({})
  const [ scoreUp , setScoreUp ] = useState(good)
  const [ scoreDown , setScoreDown ] = useState(bad)


  useEffect(() => {
		const fetchMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${urlPath}?api_key=${process.env.REACT_APP_API_KEY}`;

      const response = await axios.get(url);
      setMovie(response.data)
    };
    fetchMovie()
  }, []);

    useEffect(() => {
      localStorage.setItem(`${urlPath}`, JSON.stringify({
        "goodRating": scoreUp,
        "badRating": scoreDown
      }))
    })

    return (
    <div className="movie-container">
      <img src={movie.poster_path ? `${img_300}${movie.poster_path}` : unavailable}/>
      <div className="description">
        <h1>{movie.title}</h1>
        <li>{movie.release_date}</li>
        <li>{movie.overview}</li>
        <h4>What did you think about this movie?</h4>
        <div className="rating">
          <Rating scoreUp={scoreUp} scoreDown={scoreDown}/>
          <button onClick={() => setScoreUp(scoreUp + 1)}><img src={up} /></button>
          <button onClick={() => setScoreDown(scoreDown + 1)}><img src={down} /></button>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie
