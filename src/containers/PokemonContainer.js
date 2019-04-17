import React, {Component, Fragment} from "react";
import PokemonDetail from "../components/PokemonDetail"
import PokemonSelector from "../components/PokemonSelector"
import TypeSelector from "../components/TypeSelector"
import TypeResults from "../components/TypeResults"

class PokemonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      allPokemon: null,
      selectedPokemonUrl: null,
      pokemon: null,
      species: null,
      types: null,
      typePokemon: null
    };
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
    this.handleType = this.handleType.bind(this);

  }
  componentDidMount(){
    const url ="https://pokeapi.co/api/v2/pokemon/?limit=951";
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({allPokemon: data.results})
    });
    request.send();

    const typeUrl ="https://pokeapi.co/api/v2/type";
    const typeRequest = new XMLHttpRequest();
    typeRequest.open('GET', typeUrl);

    typeRequest.addEventListener("load", () => {
      if (typeRequest.status !== 200) return;
      const jsonString = typeRequest.responseText;
      const typeData = JSON.parse(jsonString);
      this.setState({types: typeData.results})
    });
    typeRequest.send();
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
      this.setState({typePokemon: ""});
      this.handleSpecies();

    });
    request.send();
  }

  handleType(url){
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({typePokemon:data.pokemon})
      this.setState({pokemon: ""})
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
        <TypeSelector
          types = {this.state.types}
          typeSelected = {this.handleType}
        />
        <TypeResults
        results = {this.state.typePokemon}
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
