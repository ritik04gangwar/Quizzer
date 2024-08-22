import React from "react";

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result">
      <h2>
        Your Score: {score} / {totalQuestions}
      </h2>
    </div>
  );
};

export default Result;
