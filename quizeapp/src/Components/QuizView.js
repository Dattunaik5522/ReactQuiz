import React from "react";
import "./QuizView.css";
const QuizView = () => {
  return (
    <div className="question">
      <div className="question-number">
        <span>Question 1/5</span>
        <div className="question-text">
          What comes after A comes comes comes comes comes comes comes
        </div>
      </div>
      <div className="answer">
        <button>B</button>
        <button>C</button>
        <button>D</button>
      </div>
    </div>
  );
};

export default QuizView;
