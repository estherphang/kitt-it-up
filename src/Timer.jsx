import React from "react";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FastForwardIcon from "@mui/icons-material/FastForward";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Timer = ({
  timer,
  isRunning,
  isOnBreak,
  formatTime,
  handleStartStop,
  handleFastForward,
  handleReset,
  pomodoroCounter,
}) => {
  return (
    <div className="timer-container">
      <h2 className="timer-title">
        {isOnBreak ? "TAKE A BREAK" : "TIME TO FOCUS"}
      </h2>
      <div>
        <h2 className="timer-digit">{formatTime(timer)}</h2>
      </div>
      <div>
        <IconButton
          style={{
            margin: "8px",
            color: "white",
            fontSize: "2.6em",
          }}
          onClick={handleStartStop}
        >
          {isRunning ? (
            <PauseIcon fontSize="inherit" />
          ) : (
            <PlayArrowIcon fontSize="inherit" />
          )}
        </IconButton>
        <IconButton
          style={{
            margin: "8px",
            color: "white",
            fontSize: "3em",
          }}
          onClick={handleFastForward}
        >
          <FastForwardIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          style={{
            margin: "8px",
            color: "white",
            fontSize: "2.4em",
          }}
          onClick={handleReset}
        >
          <RestartAltIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="pomo-counter">
        <p>POMODORO COUNTER: {pomodoroCounter}</p>
      </div>
    </div>
  );
};

export default Timer;
