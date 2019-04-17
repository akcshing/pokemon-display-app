import React, { Component } from 'react';
import PokemonContainer from "./containers/PokemonContainer"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Choose your pokemon</h1>
        <PokemonContainer />
      </div>
    );
  }
}

export default App;
