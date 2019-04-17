import React from "react";

const TypeResults = ({results}) => {
  if (!results) return null;
  const pokemonNames = results.map((pokemon, index) => {
    return <li key={index}>{pokemon.pokemon.name}</li>
  })


  return (

  <ul id="type-results">
  {pokemonNames}
  </ul>
  )
}

export default TypeResults;
