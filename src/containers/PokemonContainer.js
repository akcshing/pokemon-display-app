import React, {Component, Fragment} from "react";
import PokemonDetail from "../components/PokemonDetail"
import PokemonSelector from "../components/PokemonSelector"
import TypeSelector from "../components/TypeSelector"
import TypeResults from "../components/TypeResults"
import RandomPokemon from "../components/RandomPokemon"

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
    this.selectRandom = this.selectRandom.bind(this);

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

    const typeUrl ="https://pokeapi.co/api/v2/type/?limit=18";
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

  selectRandom(){
    const allPokemon = this.state.allPokemon;
    const randomPokemon = allPokemon[Math.floor(Math.random() * allPokemon.length)]
    console.log(randomPokemon);

    this.handlePokemonSelected(randomPokemon.url)
  }

  render(){
    console.log("rendering...");
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
        <RandomPokemon
        selectRandom={this.selectRandom}
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
