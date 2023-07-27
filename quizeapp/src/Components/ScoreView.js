import React from "react";
import "./ScoreView.css";
const ScoreView = () => {
  const handleReset = () => {
    console.log("Button Clicked");
  };

  return (
    <div>
      <p>You Scored 1 out of 5</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ScoreView;
