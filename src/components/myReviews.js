
import React, { Component } from "react";
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movies from './movie';
export default class MyReviews extends Component {
    render() {
        return (
            <div>
            <div style = {{padding: 50 + 'px'}} >
            <Link className = "nav-link" to = {"/listmovies"}>
            <button > Go to Movies</button>
            </Link>
            <Link className = "nav-link" to = {"/myReviews"}>
            <button > My Reviews</button>
            </Link>
             </div>
            <div style={{ left: 50 + '%', textAlign: "center" }} >
            
           <form>
            <textarea id = "reviewText" name = "review">

            </textarea>
            <br></br>
            <input type="submit" value = "Submit" onClick = {() => reviews.push(document.getElementById('reviewText').value) }/>
            </form>
          
            </div>
            </div>
        );
    }
}

var reviews = [];