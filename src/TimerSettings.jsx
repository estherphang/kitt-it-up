import React from "react";

const TimerSettings = ({
  showSetting,
  setShowSetting,
  workDuration,
  breakDuration,
  handleWorkDurationChange,
  handleBreakDurationChange,
}) => {
  return (
    <>
      <button onClick={() => setShowSetting(true)}>Settings</button>
      {showSetting && (
        <div>
          <h2>Settings</h2>
          <div>
            <label>
              Work Duration (minutes):
              <input
                type="number"
                min="1"
                value={workDuration / 60}
                onChange={handleWorkDurationChange}
              />
            </label>
          </div>
          <div>
            <label>
              Break Duration (minutes):
              <input
                type="number"
                min="1"
                value={breakDuration / 60}
                onChange={handleBreakDurationChange}
              />
            </label>
          </div>
          <button onClick={() => setShowSetting(false)}>Close Settings</button>
        </div>
      )}
    </>
  );
};

export default TimerSettings;
