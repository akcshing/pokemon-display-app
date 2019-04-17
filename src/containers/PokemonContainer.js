import React, {Component, Fragment} from "react";
import PokemonDetail from "../components/PokemonDetail"
import PokemonSelector from "../components/PokemonSelector"

class PokemonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      allPokemon: null,
      selectedPokemonUrl: null,
      pokemon: null,
      species: null
    };
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);

  }
  componentDidMount(){
    const url ="https://pokeapi.co/api/v2/pokemon/?limit=151";
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({allPokemon:data.results})
    });
    request.send();
  }

  handlePokemonSelected(pkmnUrl){
    // this.setState.selectedPokemonUrl = pkmnUrl
    const url = pkmnUrl;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({pokemon:data})
      this.handleSpecies();
    });
    request.send();
  }



  handleSpecies(){
    const url = this.state.pokemon.species.url;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({species:data})

    });
    request.send();
  }

  /* allPokemon.map url
    for each url
      fetch pokemon data
      this.setState prevState add[...]
      */

  render(){
    return(
      <div>
        <PokemonSelector
          handlePokemonSelected={this.handlePokemonSelected}
          allPokemon = {this.state.allPokemon}
          handleSpecies={this.handleSpecies}
          hi="hi"
        />
        <PokemonDetail
          pokemon = {this.state.pokemon}
          species = {this.state.species}
        />
      </div>
    )
  }
}

export default PokemonContainer;
