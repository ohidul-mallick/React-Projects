import React, { useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";
export default function UseTFClassify() {
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState([]);
  const predict = (img) => {
    setIsLoading(true);
    // const img = imageRef.current;
    img.crossOrigin = "Anonymous";
    // Load the model.
    mobilenet.load().then((model) => {
      // Classify the image.
      model.classify(img).then((predictions) => {
        setPrediction(predictions);
        setIsLoading(false);
      });
    });
  };
  return [predict, prediction, setPrediction, isLoading];
}
