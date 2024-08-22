import React from "react";
import Answer from "./Answer";

const Question = ({ question, handleAnswerOptionClick }) => {
  return (
    <div className="question">
      <h2>{question.questionText}</h2>
      <div className="answers">
        {question.options.map((option, index) => (
          <Answer
            key={index}
            answerText={option.answerText}
            isCorrect={option.isCorrect}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
