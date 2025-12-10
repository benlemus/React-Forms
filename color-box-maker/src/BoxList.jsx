import { useState } from "react";
// import "./BoxList.css";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuidv4 } from "uuid";

export default function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const addBox = (box) => {
    setBoxes((b) => [
      ...b,
      {
        id: uuidv4(),
        width: box.width,
        height: box.height,
        backgroundColor: box.backgroundColor,
      },
    ]);
  };
  const removeBox = (id) => {
    setBoxes(boxes.filter((b) => b.id !== id));
  };

  return (
    <>
      <div className="boxes-container">
        <div className="boxes">
          {boxes.map((b) => (
            <Box
              key={b.id}
              width={b.width}
              height={b.height}
              backgroundColor={b.backgroundColor}
              removeBox={() => removeBox(b.id)}
            />
          ))}
        </div>
      </div>
      <div className="form-container">
        <NewBoxForm addBox={addBox} />
      </div>
    </>
  );
}
