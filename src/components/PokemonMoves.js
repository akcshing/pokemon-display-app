import React from "react";

const PokemonMoves = ({pokemon}) => {


  const moves = pokemon.moves.map((move, index)=>{
    return <li key = {index}>{move.move.name.toUpperCase()}</li>
  })

  return (
    <div>
    <h3>Moves</h3>
    <ul>
      {moves}
    </ul>
    </div>
  )

}

export default PokemonMoves;
