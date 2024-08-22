import React from "react";

const ProgressBar = ({ progress, timeLeft }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {Math.round(progress)}%
      </div>
      <div className="timer">Time Left: {timeLeft} seconds</div>
    </div>
  );
};

export default ProgressBar;
