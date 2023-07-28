import React from "react";
import "./ScoreView.css";
const ScoreView = ({ handleResetButton, score }) => {
  return (
    <div>
      <p>You Scored {score} out of 5</p>
      <button onClick={handleResetButton}>Reset</button>
    </div>
  );
};

export default ScoreView;
