import React, { useState, useEffect } from "react";
import TimerSettings from "./TimerSettings";
import TimerDisplay from "./TimerDisplay";

const Timer = () => {
  //create timer, showing minutes and seconds
  const [timer, setTimer] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [workDuration, setWorkDuration] = useState(25 * 60); // Initial work duration set to 25 minutes in seconds
  const [breakDuration, setBreakDuration] = useState(5 * 60); // Initial break duration set to 5 minutes in seconds
  const [showSetting, setShowSetting] = useState(false);
  const [pomodoroCounter, setPomodoroCounter] = useState(0);
  // const [bgColor, setBgColor] = useState("#ffb703");

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

  return (
    <>
      <div className="header">
        <h1 className="container logo">Kitt It Up!</h1>
        <div className="settings">
          <TimerSettings
            showSetting={showSetting}
            setShowSetting={setShowSetting}
            workDuration={workDuration}
            breakDuration={breakDuration}
            handleWorkDurationChange={handleWorkDurationChange}
            handleBreakDurationChange={handleBreakDurationChange}
          />
        </div>
      </div>
      <TimerDisplay
        timer={timer}
        isRunning={isRunning}
        isOnBreak={isOnBreak}
        handleStartStop={handleStartStop}
        handleFastForward={handleFastForward}
        handleReset={handleReset}
        pomodoroCounter={pomodoroCounter}
        formatTime={formatTime}
      />
    </>
  );
};

export default Timer;
