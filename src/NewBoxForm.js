import React, { useState } from "react";

function NewBoxForm({ addBox }) {
  const initialState = {
    backgroundColor: "",
    height: "",
    width: ""
  }
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return {...currData}
    });
  }

  function handleSubmit(evt){
    evt.preventDefault();
    addBox(formData)
    setFormData(initialState)
  }

  return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="height">Height:</label>
    <input
    id="height"
    name="height"
    onChange={handleChange}
    value={formData.height} />
    <label htmlFor="width">Width:</label>
    <input
    id="width"
    name="width"
    onChange={handleChange}
    value={formData.width} />
    <label htmlFor="backgroundColor">Background Color:</label>
    <input
    id="backgroundColor"
    name="backgroundColor"
    onChange={handleChange}
    value={formData.backgroundColor} />
    <button type="submit">Add Box</button>


</form>
  )
}

export default NewBoxForm;