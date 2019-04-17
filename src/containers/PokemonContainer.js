import React, {Component, Fragment} from "react";
import PokemonDetail from "../components/PokemonDetail"
import PokemonSelector from "../components/PokemonSelector"

class PokemonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      allPokemon: null
    };
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

  render(){
    return(
      <div>
        <PokemonSelector />
        <PokemonDetail />
      </div>
    )
  }
}

export default PokemonContainer;
