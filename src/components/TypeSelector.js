import React from "react";

const TypeSelector = ({types}) => {
  if (!types) return null;
  const options = types.map((type, index) => {
    return <option value={type.url} key={index}>{type.name}</option>
  })

  // function handleChange(event) {
  //   props.handlePokemonSelected(event.target.value)
  //
  // }


  return (
    //onChange handleChange
    <select id = "type-selector" >
      {options}
    </select>
  )
}

export default TypeSelector;
