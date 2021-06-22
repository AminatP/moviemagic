import React, { useState, useEffect } from 'react'
import Search from './components/ui/Search'
import Header from './components/ui/Header'
import MoviesGrid from './components/movies/MoviesGrid'

import './App.css';

const  App = () => {
  const [ movies, setMovies ] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		const fetchMovies = async () => {
      setIsLoading(true)

      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e955dc1a`;
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) setMovies(responseJson.Search);
      setIsLoading(false)
    };
    fetchMovies()
	}, [searchValue]);

  console.log("this is movies", movies)
  return (
    <div className="container">
      <Header />
      <Search  getQuery={(q) => setSearchValue(q)}/>
      <MoviesGrid  isLoading={isLoading} movies={movies}/>
      {/* {movies.map((movie) => (
        <div>{movie.Title}</div>
      ))} */}
    </div>
  );
}

export default App;
