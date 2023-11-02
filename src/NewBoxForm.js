import React, { useState } from "react";


/** NewBoxForm: Renders a form that collects box display properties
 *
 * Props:
 * - addBox() function to add a box to the boxes state list
 *
 * State:
 * - formData: object containing the user input for box properties
 *
 * App --> BoxList --> NewBoxForm
 *
 */
function NewBoxForm({ addBox }) {
  const initialState = {
    backgroundColor: "",
    height: "",
    width: ""
  }

  const [formData, setFormData] = useState(initialState);

  /**Handle change in input fields */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /**Handle submission of form calls addBox to update boxes state */
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
      value={formData.height}
    />
    <label htmlFor="width">Width:</label>
    <input
      id="width"
      name="width"
      onChange={handleChange}
      value={formData.width}
    />
    <label htmlFor="backgroundColor">Background Color:</label>
    <input
      id="backgroundColor"
      name="backgroundColor"
      onChange={handleChange}
      value={formData.backgroundColor}
    />

    <button type="submit">Add Box</button>
</form>
  )
}

export default NewBoxForm;