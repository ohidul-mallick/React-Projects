import React, { useRef } from "react";

import UseTFClassify from "../utils/hooks/useTFClassify";

export default function Tensorflow() {
  const imageRef = useRef();

  const [predict, prediction, setPrediction, isLoading] = UseTFClassify();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/3">
        <h1 className="text-center">TensorFLow Example</h1>
        <img
          src="https://images.unsplash.com/photo-1595909336425-5bf541155dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjcwNjB8MHwxfGFsbHwxMnx8fHx8fDJ8fDE2MjEyMjIzNzg&ixlib=rb-1.2.1&q=80&w=1080"
          alt=""
          width="400"
          crossOrigin="Anonymous"
          ref={imageRef}
        />
        <div className="text-center my-5">
          {prediction.length > 0 &&
            prediction.map((predic, index) => (
              <div className="flex justify-between">
                {/* <p key={index}>{predic.className.toUpperCase()}</p> */}
                <p key={index}>{capitalizeFirstLetter(predic.className)}</p>
                <p key={index}>{Math.floor(predic.probability * 100)}%</p>
              </div>
            ))}
          <button
            className="p-2 rounded bg-blue-500 text-white"
            onClick={() => predict(imageRef.current)}
          >
            {isLoading && "Predicting"}
            {!isLoading && "Predict Result"}
          </button>
        </div>
      </div>
    </div>
  );
}
