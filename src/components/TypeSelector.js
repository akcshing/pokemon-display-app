import React from "react";

const TypeSelector = (props) => {
  if (!props.types) return null;
  const options = props.types.map((type, index) => {
    return <option value={type.url} key={index}>{type.name.toUpperCase()}</option>
  })

  function handleChange(event) {
    props.typeSelected(event.target.value)

  }


  return (
    //onChange handleChange
    <select id = "type-selector" onChange={handleChange}>
      {options}
    </select>
  )
}

export default TypeSelector;
