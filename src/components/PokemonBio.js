import React from "react";

const PokemonBio = ({species}) => {
  return (
    <div id="pokemon-species">
    <h3>Bio</h3>
    <p>{species.flavor_text_entries[2].flavor_text}</p>
    </div>
  )

}

export default PokemonBio;
