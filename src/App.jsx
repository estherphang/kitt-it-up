import React, { useState, useEffect } from "react";
import TodoMain from "./TodoMain";
import "./TimerDisplay.css";
import TimerSettings from "./TimerSettings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FastForwardIcon from "@mui/icons-material/FastForward";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

export default function App() {
  //create timer, showing minutes and seconds
  const [timer, setTimer] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [workDuration, setWorkDuration] = useState(25 * 60); // Initial work duration set to 25 minutes in seconds
  const [breakDuration, setBreakDuration] = useState(5 * 60); // Initial break duration set to 5 minutes in seconds
  const [showSetting, setShowSetting] = useState(false);
  const [pomodoroCounter, setPomodoroCounter] = useState(0);

  //Format timer string
  const formatTime = (timeInSeconds) => {
    //convert seconds to minute, show mins
    const minutes = Math.floor(timeInSeconds / 60);
    //show remaining seconds
    const seconds = Math.floor(timeInSeconds % 60);

    //format timing/seconds readings, include 0 before timing if it's 1 - 9
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      if (isOnBreak) {
        setTimer(workDuration);
        setIsOnBreak(false);
        setPomodoroCounter((prevCounter) => prevCounter + 1);
      } else {
        setTimer(breakDuration);
        setIsOnBreak(true);
      }
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timer, isOnBreak, workDuration, breakDuration]);

  //Start and Stop Timer
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsOnBreak(false);
    setTimer(25 * 60); //reset timer
  };

  //Fast foward function

  const handleFastForward = () => {
    // Clear any existing timer
    clearInterval(timer);

    // toggle between break and work duration
    const nextDuration = !isOnBreak ? breakDuration : workDuration;
    setIsOnBreak(!isOnBreak);

    // if user fast forward from work to break, increment the pomodoro counter
    if (isOnBreak) {
      setPomodoroCounter((prevCounter) => prevCounter + 1);
    }

    // set the timer to the next duration and pause it
    // allow the user to decide when to start
    setTimer(nextDuration);
    setIsRunning(false);
  };

  // allow user to set work and break duration

  // update work duration input
  const handleWorkDurationChange = (e) => {
    const newWorkDuration = Number(e.target.value) * 60;
    setWorkDuration(newWorkDuration);
    if (!isOnBreak) {
      setTimer(newWorkDuration); // update timer
    }
  };

  // update break duration input
  const handleBreakDurationChange = (e) => {
    const newBreakDuration = Number(e.target.value) * 60;
    setBreakDuration(newBreakDuration);
    if (isOnBreak) {
      setTimer(newBreakDuration); // update timer
    }
  };

  const toggleSettings = () => {
    setShowSetting(!showSetting); // Toggle the settings display
  };

  return (
    <>
      <div className="container">
        <div className={isOnBreak ? "breaktime" : "worktime"}>
          <div className="nav">
            <h1 className="logo">Kitt It Up!</h1>
            {!showSetting && (
              <Button
                size="large"
                variant="outlined"
                style={{
                  color: "white",
                  border: "2px solid #e1f5fe",
                }}
                onClick={toggleSettings}
              >
                <SettingsIcon />
                Settings
              </Button>
            )}

            {showSetting && (
              <TimerSettings
                showSetting={showSetting}
                setShowSetting={setShowSetting}
                workDuration={workDuration}
                breakDuration={breakDuration}
                handleWorkDurationChange={handleWorkDurationChange}
                handleBreakDurationChange={handleBreakDurationChange}
              />
            )}
          </div>
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
                {/* when running show pause. */}
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
              {/* </button> */}
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
          <TodoMain />
        </div>
      </div>
    </>
  );
}
