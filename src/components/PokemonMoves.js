import React from "react";
import Collapsible from 'react-collapsible';
import "./components.css"

const PokemonMoves = ({pokemon}) => {


  const moves = pokemon.moves.map((move, index)=>{
    return <li key = {index}>{move.move.name.toUpperCase()}</li>
  })

  return (
    <div>
    <Collapsible class = "collapse" trigger="Moves">
    <ul>
      {moves}
    </ul>
    </Collapsible>
    </div>
  )

}

export default PokemonMoves;
