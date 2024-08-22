import React from "react";

const Answer = ({ answerText, isCorrect, handleAnswerOptionClick }) => {
  return (
    <button
      className="answer"
      onClick={() => handleAnswerOptionClick(isCorrect)}
    >
      {answerText}
    </button>
  );
};

export default Answer;
