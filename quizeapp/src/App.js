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

  const [currentQuestion, setCurrentQuestion] = useState(4);
  const handleButton = (isCorrect) => {
    alert("Clicked button" + isCorrect);
  };
  return (
    <div className="App">
      <ScoreView />
      <QuizView
        questions={questions}
        currentQuestion={currentQuestion}
        handleButton={handleButton}
      />
    </div>
  );
}

export default App;
