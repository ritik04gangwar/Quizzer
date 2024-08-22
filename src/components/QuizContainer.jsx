import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";
import ProgressBar from "./ProgressBar";

const QuizContainer = () => {
  const questions = [
    {
      questionText: "What is the capital of France?",
      options: [
        { answerText: "Berlin", isCorrect: false },
        { answerText: "Madrid", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Lisbon", isCorrect: false },
      ],
    },
    {
      questionText: "Who is the CEO of Tesla?",
      options: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    // Add more questions if needed
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds per question

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(10); // Reset timer for next question
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResults ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <>
          <ProgressBar
            progress={(currentQuestion / questions.length) * 100}
            timeLeft={timeLeft}
          />
          <Question
            question={questions[currentQuestion]}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        </>
      )}
    </div>
  );
};

export default QuizContainer;
