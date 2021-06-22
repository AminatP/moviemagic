import React, { useState, useEffect } from 'react'
import SearchMovies from './SearchMovies'
import axios from 'axios'
import MoviesGrid from './movies/MoviesGrid'
import '../App.css';

const  Movies = () => {
  const [ movies, setMovies ] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
		const fetchMovies = async () => {
      setIsLoading(true)

      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}`;

      const response = await axios.get(url);
      setMovies(response.data.results)
      setIsLoading(false)

      console.log("this is movies", movies)
    };
    fetchMovies()
  }, [searchValue]);

  return (
    <div className="container">
      <SearchMovies  getQuery={(q) => setSearchValue(q)}/>
      <MoviesGrid  isLoading={isLoading} movies={movies}/>
    </div>
  );
}

export default Movies;
