import QuizView from "./Components/QuizView";
import ScoreView from "./Components/ScoreView";

import "./App.css";
import { useState } from "react";
function App() {
  const questions = [
    {
      question: "Total number of oceans in the World is",
      answers: [{ text: "7" }, { text: "6" }, { text: "5", isCorrect: true }],
    },
    {
      question: "Who is CEO of Tesla?",
      answers: [
        { text: "Jeff Bezos" },
        { text: "Elon Musk", isCorrect: true },
        { text: "Bill Gates" },
        { text: "Tony Stark" },
      ],
    },
    {
      question: "Where is Statue of Liberty is located?",
      answers: [
        { text: "India" },
        { text: "Russia" },
        { text: "UK" },
        { text: "USA", isCorrect: true },
      ],
    },
    {
      question: "What is the capital of Germany?",
      answers: [
        { text: "Paris" },
        { text: "Berlin", isCorrect: true },
        { text: "London" },
        { text: "Dublin" },
      ],
    },
    {
      question: "Which one is the largest tropical rain forest in the world?",
      answers: [
        { text: "Amazon", isCorrect: true },
        { text: "Bosawas" },
        { text: "Southeast Asian Rain Forest" },
        { text: "Daintree Rain Forest" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleButtonOptions = (isCorrect) => {
    // score Check
    if (isCorrect) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setQuizOver(true);
    }
  };

  const handleResetButton = () => {
    setCurrentQuestion(0);
    setQuizOver(false);
    setScore(0);
  };

  return (
    <div className="App">
      {quizOver ? (
        <ScoreView handleResetButton={handleResetButton} score={score} />
      ) : (
        <QuizView
          questions={questions}
          currentQuestion={currentQuestion}
          handleButtonOptions={handleButtonOptions}
        />
      )}
    </div>
  );
}

export default App;
