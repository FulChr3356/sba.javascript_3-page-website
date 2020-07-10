
import React, { Component } from "react";
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListMovies from "./listmovies";
import MyReviews from "./myReviews";
import poster4 from './testMedia/Dark_Knight.jpg';
import poster5 from './testMedia/Her2013Poster.jpg'
export default class Home extends Component {
    render() {
        return (
            <div >
                <div >
                    <Link className="nav-link" to={"/listmovies"}>
                        <button > Go to Movies</button>
                    </Link>
                    <Link className="nav-link" to={"/myReviews"}>
                        <button > My Reviews</button>
                    </Link>
                    <br></br>
                    <input placeholder= "Search for movie" />
                </div>
                <div >
                    <div className="split left" >
                        <div className="centered">
                            <img src={poster4} className="App-logo" alt="logo" />
                            <p> Title : The Dark Knight</p>
                            <p>Featured Review</p>
                            <p>The Dark Knight is probably the smartest and most stylish action movie since the "The Matrix." It thinks and philosophizes. The subject it thinks and philosophizes about, perhaps not surprisingly, considering the times, is the Iraq war. </p>
                            <p>

                                Timothy Mangan
                                Orange County Register
                                Top Critic
                            </p>
                        </div>
                    </div>

                    <div className="split right" >
                        <div className="centered">
                            <img src={poster5} className="App-logo" alt="logo" />
                            <p> Title : her</p>
                            <p>Featrued Review</p>
                            <p>It is a sweet-natured and melancholy film, beautifully directed, that manages to be satirical about love in a digital, distracted age without losing its heartfelt quality. </p>
                            <p>

                                Geoffrey Macnab
                                Independent (UK)
                                Top Critic
                            </p>
                        </div>
                    </div>



                </div>

            </div>
        );
    }
}


