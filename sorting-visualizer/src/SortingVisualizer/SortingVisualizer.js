import React, { useEffect, useState } from "react";
import "./SortingVisualizer.css";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1));
  };
  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 280; i++) {
      array.push(randomIntFromInterval(5, 580));
    }
    setArray(array);
  };
  useEffect(() => {
    resetArray();
  }, []);

  return (
    <div className="array__container">
      {array.map((value, index) => (
        <div
          className="array__bar"
          key={index}
          style={{ height: `${value}px` }}
        ></div>
      ))}

      <button onClick={() => resetArray()}>Generate New Array</button>
      <button>Merge Sort</button>
      <button>Quick Sort</button>
      <button>Heap Sort</button>
      <button>Bubbe Sort</button>
    </div>
  );
}

export default SortingVisualizer;
