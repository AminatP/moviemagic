import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'

import Movies from './components/Movies'
import MovieItem from './components/movies/MovieItem'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="movie/:id" component={MovieItem} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
