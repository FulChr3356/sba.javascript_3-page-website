
import poster from './testMedia/Avengers_Endgame_poster.jpg';
import poster2 from './testMedia/Inception_(2010)_theatrical_poster.jpg';
import poster3 from './testMedia/Arrival,_Movie_Poster.jpg';
import poster4 from './testMedia/Dark_Knight.jpg';
import poster5 from './testMedia/Her2013Poster.jpg'
import React, { Component } from "react";
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Movie from './movie'
import myReviews from './myReviews'
var movies = [];
movies.push(new Movie("Avengers Endgame","","",""));
movies.push(new Movie("Inception","","",""));
movies.push(new Movie("Arrival","","",""));
movies.push(new Movie("The Dark Knight","","",""));
movies.push(new Movie("her","","",""));

export default class ListMovies extends React.Component {
    render() {


        return (
            <div>

            <div>
                <Link className="nav-link" to={"/"}>
                    <button  > Home</button>
                </Link>
                <h1 >Movies availible for Review </h1>
                <ul>
                    <div style={{ left: 50 + '%', textAlign: "center" }}>

                        <img src={poster} className="App-logo" alt="logo" />
                        <p> Title : Avengers Endgame</p>
                        <p> Release Date : April 26, 2019 </p>
                        <p>  Starring :
                        Robert Downey Jr.
                        Chris Evans
                        Mark Ruffalo
                        Chris Hemsworth
                        </p>
                        <p> Directed by : 	Anthony Russo Joe Russo</p>
                        <button onClick = {() => movies[0].setReview()}>Write Review</button>

                    </div>
                    <li style={{ left: 50 + '%', textAlign: "center" }}>

                        <img src={poster2} className="App-logo" alt="logo" />
                        <p> Title : Inception_</p>
                        <p> Release Date : July 8, 2010 </p>
                        <p>  Starring :
                        Leonardo DiCaprio
                        Ken Watanabe
                        Joseph Gordon-Levitt
                        </p>
                        <p> Directed by : 	Anthony Russo Joe Russo</p>
                        <button onClick = {() => movies[1].setReview()} >Write Review</button>

                    </li>
                    <li style={{ left: 50 + '%', textAlign: "center" }}>

                        <img src={poster3} className="App-logo" alt="logo" />
                        <p> Title : Arrival</p>
                        <p> Release Date : September 1, 2016 </p>
                        <p>  Starring :
                        Amy Adams
                        Jeremy Renner
                        Forest Whitaker</p>
                        <p> Directed by : 		Denis Villeneuve</p>
                        <button onClick = {() => movies[2].setReview()}>Write Review</button>

                    </li>
                    <li style={{ left: 50 + '%', textAlign: "center" }}>

                        <img src={poster4} className="App-logo" alt="logo" />
                        <p> Title : The Dark Knight</p>
                        <p> Release Date : July 14, 2008 </p>
                        <p>  Starring :
                        Christian Bale
                        Michael Caine
                        Heath Ledger</p>
                        <p> Directed by: Christopher Nolan</p>
                        <button onClick = {() => movies[3].setReview()}>Write Review</button>

                    </li>
                    <li style={{ left: 50 + '%', textAlign: "center" }}>

                        <img src={poster5} className="App-logo" alt="logo" />
                        <p> Title : her</p>
                        <p> Release Date : October 13, 2013  </p>
                        <p>  Starring :
                        Joaquin Phoenix
                        Amy Adams</p>
                        <p> Directed by : Spike Jonze</p>
                        <button onClick = {() => movies[4].setReview()}>Write Review</button>

                    </li>





                </ul>
            </div>
            </div>
        );
    }
}
