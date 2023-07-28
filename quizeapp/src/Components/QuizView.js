import React from "react";
import "./QuizView.css";
const QuizView = ({ questions, currentQuestion, handleButtonOptions }) => {
  return (
    <div className="question">
      <div className="question-number">
        <span>
          Question {currentQuestion + 1}/{questions.length}
        </span>
        <div className="question-text">
          {questions[currentQuestion].question}
        </div>
      </div>
      <div className="answer">
        {questions[currentQuestion].answers.map(({ text, isCorrect }) => {
          return (
            <button key={text} onClick={() => handleButtonOptions(isCorrect)}>
              {text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizView;
