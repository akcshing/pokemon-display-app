import React from "react";

const RandomPokemon = (props) => {

  function handleClick() {
    props.selectRandom()

  }
  return (
    //onChange handleChange
    <button onClick={handleClick} value="">Random Pokemon</button>
  )
}

export default RandomPokemon;
