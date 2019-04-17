import React from "react";

const PokemonSelector = (props) => {
  if (!props.allPokemon) return null;
  const options = props.allPokemon.map((pokemon, index) => {
    return <option value={pokemon.url} key={index}>{pokemon.name.toUpperCase()}</option>
  })

  function handleChange(event) {
    props.handlePokemonSelected(event.target.value)

  }


  return (
    <select id = "pokemon-selector" onChange={handleChange}>
      {options}
    </select>
  )
}

export default PokemonSelector;
