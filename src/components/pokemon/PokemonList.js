import React, { Component } from 'react'

import PokemonCard from "./PokemonCard"
// import axios from "axios"

export default class PokemonList extends Component {
    
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
        pokemon: null
    };

    componentDidMount(){
        fetch(this.state.url)
        .then(res => res.json())
        .then(data => {this.setState({pokemon: data.results})})
        
    }
    

    render() {
        return (
            <React.Fragment>
            {this.state.pokemon ? (
                <div className="row">
                {this.state.pokemon.map(pokemon => (
                    <PokemonCard
                    key = {pokemon.name} 
                    name = {pokemon.name}
                    url = {pokemon.url}
                    />
                ))}
            </div>
            ) : (
                <h1>pokemon loading</h1>
            )}
            </React.Fragment>
            
        )
    }
}
