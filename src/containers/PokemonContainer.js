import React, {Component, Fragment} from "react";
import PokemonDetail from "../components/PokemonDetail"
import PokemonSelector from "../components/PokemonSelector"

class PokemonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
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
