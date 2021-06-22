import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Movies from './components/Movies'
import SingleMovie from './components/SingleMovie'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path=":id" component={SingleMovie} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
