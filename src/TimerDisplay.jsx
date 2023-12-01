import React from "react";

const TimerDisplay = ({
  timer,
  isRunning,
  isOnBreak,
  handleStartStop,
  handleFastForward,
  handleReset,
  pomodoroCounter,
  formatTime,
}) => {
  return (
    <div>
      <h2>{isOnBreak ? "Break duration" : "Work duration"}</h2>
      <div>
        <h2>{formatTime(timer)}</h2>
        <button onClick={handleStartStop}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleFastForward}> Fast Forward</button>
        <button onClick={handleReset}>Reset</button>
        <p>Pomodoro Counter: {pomodoroCounter}</p>
      </div>
    </div>
  );
};

export default TimerDisplay;
