import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function Image({ image, index, handleRemove, show }) {
  const [isHover, setIsHover] = useState(false);

  const crossClass = (index) => {
    return `fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
      isHover ? "" : "hidden"
    }`;
  };
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <i className={crossClass(index)} onClick={() => handleRemove(index)}></i>
      <img onClick={show} src={image} width="100%" height="auto" alt="" />
    </div>
  );
}
