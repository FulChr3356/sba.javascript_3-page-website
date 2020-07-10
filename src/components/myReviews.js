
import React, { Component } from "react";
import poster from './testMedia/Avengers_Endgame_poster.jpg';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movies from './movie';
import movies from './listmovies';
export default class MyReviews extends Component {
    

            state = {
                reviews: ["The only complaint about Avengers: Endgame is that it raises the bar so high that there may well never be a superhero movie to match it.It represents a staggering achievement on several fronts, none perhaps quite as startling as its absolute mastery of narrative. The job for Kevin Feige, the presiding genius at Marvel, fraternal directors Anthony and Joe Russo, and writers Christopher Markus and Stephen McFeely, was simple.To finish Marvel’s first decade and clear the ground for the second, all they had to do was to tie up all the myriad strands of plot and countless emotional conflictions left dangling by the 22-strong series launched by Iron Man in 2008. Oh yes, that and deal with the aftermath of last year’s Infinity War, which climaxed with Thanos, Josh Brolin’s impressively nuanced monster, annihilating half the population of the universe. It is as hard to convey the complexities of that challenge as to contain my awe at how sublimely they rose to it.Clever people talk about superhero movies as modern religion for the unbeliever. If so, Endgame is the godless version of The Greatest Story Ever Told.It starts where Infinity War ended with Thanos snapping his fingers. That turned 50 per cent of the cosmic population, a plethora of Avengers included, to dust."],
                reviewText: ""

            };
           
            
    render() {
        return (

            
            <div>
            <div style = {{padding: 50 + 'px'}} >
            <Link className = "nav-link" to = {"/listmovies"}>
            <button > Go to Movies</button>
            </Link>
            <Link className = "nav-link" to = {"/"}>
            <button > Home</button>
            </Link>
             </div>
            <div>
            <div style={{ left: 50 + '%', textAlign: "center" }} >
            
           <form onSubmit = {this.handleSubmit}>
            <textarea id = "reviewText" value = {this.state.reviewText} >

            </textarea>
            <br></br>
           <input type= 'submit' value = "Submit"  ></input>
            </form>
          
            </div>
            <h1> My Reviews</h1>
     </div><br></br>
             <div >
                 <div style = {{left: 50 + '%'}}>
                 <img src={poster} className="App-logo" alt="logo" />
                 {this.state.reviews.map(function(review, index){
                    return <div style = {{  textAlign: 'center', right: 50 +'%'}} key={ index }>{review}</div>;
                  })}'
                 </div>
                 
            </div>   

            </div>
        );
    }
    
}



    