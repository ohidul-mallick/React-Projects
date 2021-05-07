import React, { useState } from "react";

export default function Image({ image, index, handleRemove }) {
  const [isHover, setIsHover] = useState(false);
  const crossClass = (index) => {
    return `fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
      isHover ? "" : "hidden"
    }`;
  };
  return (
    <div className="w-1/3 p-1 border flex justify-center">
      <div
        className="relative"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <i
          className={crossClass(index)}
          onClick={() => handleRemove(index)}
        ></i>
        <img src={image} width="100%" height="auto" alt="" />
      </div>
    </div>
  );
}
