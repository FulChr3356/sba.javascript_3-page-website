
import poster from './testMedia/Avengers_Endgame_poster.jpg';
import poster2 from './testMedia/Inception_(2010)_theatrical_poster.jpg';
import poster3 from './testMedia/Arrival,_Movie_Poster.jpg'
import React, { Component } from "react";
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
export default class ListMovies extends React.Component {

    
    render() {

        
        return (
            
            <div>   
                <Link className = "nav-link" to = {"/home"}>
            <button  > Home</button>
            </Link>
                <h1 >Movies </h1>
                <ul>
                    <div style = {{left: 50 + '%', textAlign: "center"}}>

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
                        <button >Write Review</button>

                    </div>
                    <li style = {{left: 50 + '%', textAlign: "center" }}>

<img src={poster2} className="App-logo" alt="logo" />
    <p> Title : Inception_</p>
    <p> Release Date : July 8, 2010 </p>
    <p>  Starring :  	
    Leonardo DiCaprio
    Ken Watanabe
    Joseph Gordon-Levitt
    Marion Cotillard
    Ellen Page</p>
    <p> Directed by : 	Anthony Russo Joe Russo</p>
    <button >Write Review</button>

</li>
<li style = {{left: 50 + '%', textAlign: "center" }}>

<img src={poster3} className="App-logo" alt="logo" />
    <p> Title : Avengers Endgame</p>
    <p> Release Date : April 26, 2019 </p>
    <p>  Starring :  	
    Robert Downey Jr.
    Chris Evans
    Mark Ruffalo
    Chris Hemsworth
    Scarlett Johansson</p>
    <p> Directed by : 	Anthony Russo Joe Russo</p>
    <button >Write Review</button>

</li>
<li style = {{left: 50 + '%', textAlign: "center" }}>

<img src={poster} className="App-logo" alt="logo" />
    <p> Title : Avengers Endgame</p>
    <p> Release Date : April 26, 2019 </p>
    <p>  Starring :  	
    Robert Downey Jr.
    Chris Evans
    Mark Ruffalo
    Chris Hemsworth
    Scarlett Johansson</p>
    <p> Directed by : 	Anthony Russo Joe Russo</p>
    <button >Write Review</button>

</li>
<li style = {{left: 50 + '%', textAlign: "center" }}>

<img src={poster} className="App-logo" alt="logo" />
    <p> Title : Avengers Endgame</p>
    <p> Release Date : April 26, 2019 </p>
    <p>  Starring :  	
    Robert Downey Jr.
    Chris Evans
    Mark Ruffalo
    Chris Hemsworth
    Scarlett Johansson</p>
    <p> Directed by : 	Anthony Russo Joe Russo</p>
    <button >Write Review</button>

</li>
<li style = {{left: 50 + '%', textAlign: "center" }}>

<img src={poster} className="App-logo" alt="logo" />
    <p> Title : Avengers Endgame</p>
    <p> Release Date : April 26, 2019 </p>
    <p>  Starring :  	
    Robert Downey Jr.
    Chris Evans
    Mark Ruffalo
    Chris Hemsworth
    Scarlett Johansson</p>
    <p> Directed by : 	Anthony Russo Joe Russo</p>
    <button >Write Review</button>

</li>
<li style = {{left: 50 + '%', textAlign: "center" }}>

<img src={poster} className="App-logo" alt="logo" />
    <p> Title : Avengers Endgame</p>
    <p> Release Date : April 26, 2019 </p>
    <p>  Starring :  	
    Robert Downey Jr.
    Chris Evans
    Mark Ruffalo
    Chris Hemsworth
    Scarlett Johansson</p>
    <p> Directed by : 	Anthony Russo Joe Russo</p>
    <button >Write Review</button>

</li>
<li style = {{left: 50 + '%', textAlign: "center" }}>

<img src={poster} className="App-logo" alt="logo" />
    <p> Title : Avengers Endgame</p>
    <p> Release Date : April 26, 2019 </p>
    <p>  Starring :  	
    Robert Downey Jr.
    Chris Evans
    Mark Ruffalo
    Chris Hemsworth
    Scarlett Johansson</p>
    <p> Directed by : 	Anthony Russo Joe Russo</p>
    <button >Write Review</button>

</li>
<li style = {{left: 50 + '%', textAlign: "center" }}>

<img src={poster} className="App-logo" alt="logo" />
    <p> Title : Avengers Endgame</p>
    <p> Release Date : April 26, 2019 </p>
    <p>  Starring :  	
    Robert Downey Jr.
    Chris Evans
    Mark Ruffalo
    Chris Hemsworth
    Scarlett Johansson</p>
    <p> Directed by : 	Anthony Russo Joe Russo</p>
    <button >Write Review</button>

</li>

                    


                </ul>
            </div>
           
        );
    }
}