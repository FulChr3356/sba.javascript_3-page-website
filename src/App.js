import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./components/home";
import ListMovies from "./components/listmovies";
import MyMovies from './components/mymovies';
import Home from './components/home';
function App() {
  return (<Router>
    <div className="App" >
      
      <header className="App-header">
    <Switch>
      <Route exact path = "/" component = {Search}/>
      <Route  path = "home" component = {Home}/>
      <Route  path = "/listmovies" component = {ListMovies}/>
      <Route path = "/my-movies" component = {MyMovies}/>
    </Switch>
    </header>
    </div> </Router>
  );
}

export default App;