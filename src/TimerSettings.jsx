import React from "react";
import "./TimerSetting.css";

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
      {showSetting && (
        <div className="settings-card">
          <div className="setting-nav">
            <h3>SETTINGS</h3>
            <button onClick={() => setShowSetting(false)}>X</button>
          </div>
          <div>
            <label>
              WORK TIME:
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
              BREAK TIME:
              <input
                type="number"
                min="1"
                value={breakDuration / 60}
                onChange={handleBreakDurationChange}
              />
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default TimerSettings;
