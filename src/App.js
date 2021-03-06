import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import NavBar from "./components/layout/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import Dashborad from "./components/layout/Dashborad"
import backgroundImage from "./pattern.png"
import Pokemon from "./components/pokemon/Pokemon"


class App extends Component{
  render(){
    return (
      <Router>
        <div className="App" style={{background: `url(${backgroundImage})`}}>
          <NavBar />
            <div className="container">
              <Switch>
                <Route exact path ="/" component={Dashborad} />
                <Route exact path ="/pokemon/:pokemonIndex" component={Pokemon} />
              </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
