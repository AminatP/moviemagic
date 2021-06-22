import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MoviesGrid from './MoviesGrid'
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
    };
    fetchMovies()
  }, [searchValue]);

  const onChange = (q) => {
    setSearchValue(q)
  }

    console.log("this is search value", searchValue)
  return (
    <div className="container">
      <section className='search'>
        <form>
          <input
            type='text'
            className='form-control'
            placeholder='Search for a movie title...'
            value={searchValue}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
          />
        </form>
      </section>
      <MoviesGrid  isLoading={isLoading} movies={movies}/>
    </div>
  );
}

export default Movies;

