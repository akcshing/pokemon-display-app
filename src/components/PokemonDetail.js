import React from "react";

const PokemonDetail = ({pokemon}) => {
  if(!pokemon) return null;

  const moves = pokemon.moves.map((move, index)=>{
    return <li key = {index}>{move.move.name}</li>
  })

  return (
    <div id="pokemon-details">
    <h2>{pokemon.name}</h2>
    <img src={pokemon.sprites.front_default} height="200"></img>
    <img src={pokemon.sprites.front_shiny} height="200"></img>
    <h3>Moves</h3>
    <ul>
      {moves}
    </ul>
    </div>
  )

}

export default PokemonDetail;
