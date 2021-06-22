import React, { useState, useEffect } from 'react'
import Search from './components/ui/Search'
import Header from './components/ui/Header'
import axios from 'axios'
import MoviesGrid from './components/movies/MoviesGrid'

import './App.css';

const  App = () => {
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
      <Header />
      <Search  getQuery={(q) => setSearchValue(q)}/>
      <MoviesGrid  isLoading={isLoading} movies={movies}/>
      {/* {movies.map((movie) => (
        <div>{movie.title}</div>
      ))} */}
    </div>
  );
}

export default App;
