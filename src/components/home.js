
import React, { Component } from "react";
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListMovies from "./listmovies";
import MyReviews from "./myReviews"
export default class Home extends Component {
    render() {
        return (
            <div>
            <div >
            <Link className = "nav-link" to = {"/listmovies"}>
            <button > Go to Movies</button>
            </Link>
            <Link className = "nav-link" to = {"/myReviews"}>
            <button > My Reviews</button>
            </Link>
             </div>
            <form>
            <div >
            <input type="text" name="title" placeholder="Enter Movie Title"></input>
            </div>
            </form>
            </div>
        );
    }
}


