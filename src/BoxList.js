import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from 'uuid';


/** Box List: keeps state and renders NewBoxForm and all Box components
 *
 * State:
 * - boxes: A list of box objects //TODO: make it explicit [{sadsd}]
 *
 * App --> BoxList -->NewBoxForm //TODO:Can put in curly braces
 *                 -->Box
 *
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /**Adds a box object to the boxes state list */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);

  }

  /**Removes a box object from the boxes state list */
  function removeBox(id) {
    setBoxes(boxes.filter(box => box.id !== id))
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map(box => (
        <Box
        key={box.id}
        id={box.id}//TODO: dont need id can just reference key above 
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
        removeBox={() => removeBox(box.id)}
        />
      ))}
    </div>
  )

}

export default BoxList;