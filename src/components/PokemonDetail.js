import React from "react";
import PokemonBio from "./PokemonBio";
import PokemonMoves from "./PokemonMoves"

const PokemonDetail = ({pokemon, species}) => {
  if(!pokemon || !species) return null;
  return (
    <div id="pokemon-details">
      <h2>#{pokemon.id} {pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} height="200"></img>
      <img src={pokemon.sprites.front_shiny} height="200"></img>
      <PokemonBio species={species}/>
      <PokemonMoves pokemon={pokemon}/>
    </div>
  )

}

export default PokemonDetail;
