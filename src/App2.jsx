import React, { useState } from "react";
import "./App2.css";
const App2 = () => {
  const [box, setBox] = useState({
    activeObject: null,
    object: [
      { id: 1, toggled: true },
      { id: 2, toggled: false },
      { id: 3, toggled: false },
    ],
  });
  const getItems = (index) => {
    setBox({
      ...box,
      toggled: (box.object[0].toggled = false),
      activeObject: box.object.find((item, itemIndex) => itemIndex === index),
    });
  };
  const colors = (index) => {
    if (box.object[index] === box.activeObject || box.object[index].toggled) {
      return "box active";
    } else {
      return "box inactive";
    }
  };
  return (
    <>
      {box.object.map((item, index) => (
        <div className={colors(index)} id={index} onClick={() => getItems(index)}></div>
      ))}
    </>
  );
};

export default App2;
