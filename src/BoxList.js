import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from 'uuid';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);

  }

  function removeBox(id) {
    setBoxes(boxes.filter(box => box.id !== id))
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map(box => (
        <Box
        key={box.id}
        id={box.id}
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