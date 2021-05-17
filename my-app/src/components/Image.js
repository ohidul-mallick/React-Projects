import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import UseTFClassify from "../utils/hooks/useTFClassify";

function Image({ image, index, handleRemove, show }) {
  const [isHover, setIsHover] = useState(false);

  const [predict, prediction, setPrediction, isLoading] = UseTFClassify();
  const imageRef = useRef();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
      {(prediction.length > 0 || isLoading) && (
        <span
          className="absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5"
          onClick={() => setPrediction([])}
        >
          {isLoading && <p>Fetching Results...</p>}
          {prediction.map((predic, index) => (
            <div className="flex justify-between">
              {/* <p key={index}>{predic.className.toUpperCase()}</p> */}
              <p key={index}>{capitalizeFirstLetter(predic.className)}</p>
              <p key={index}>{Math.floor(predic.probability * 100)}%</p>
            </div>
          ))}
        </span>
      )}
      <i className={crossClass(index)} onClick={() => handleRemove(index)}></i>
      <i
        className={`fas fa-search absolute left-0 cursor-pointer opacity-25 hover:opacity-100 ${
          isHover ? "" : "hidden"
        }`}
        onClick={() => predict(imageRef.current)}
      ></i>
      <img
        ref={imageRef}
        onClick={show}
        src={image}
        width="100%"
        height="auto"
        alt=""
      />
    </div>
  );
}

Image.propTypes = {
  show: PropTypes.func,
  index: PropTypes.number,
  image: PropTypes.string,
  handleRemove: PropTypes.func,
};

export default Image;
