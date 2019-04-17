import React from "react";

const PokemonBio = ({species}) => {
  if (!species) return;
  console.log(species);
  const flavorTextEntries = species.flavor_text_entries;
  console.log(flavorTextEntries);
  const englishBio = flavorTextEntries.find(function(entry) {return entry.language.name == "en";});
  console.log(englishBio);

  return (
    <div id="pokemon-species">
    <h3>Bio</h3>
    <p>{englishBio.flavor_text}</p>
    </div>
  )

}

export default PokemonBio;
