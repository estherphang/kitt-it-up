//put inside empty array for new users
// Initial work duration set to 25 minutes in seconds and break duration set to 5 minutes in seconds

const timerLocalStorage = () => {
  let time = localStorage.getItem("timer");
  return time ? JSON.parse(time) : 25 * 60;
};

// Initial break duration set to 5 minutes in seconds
const breakLocalStorage = () => {
  let breakTime = localStorage.getItem("breakDuration");
  return breakTime ? JSON.parse(breakTime) : 5 * 60;
};

// Initial work duration set to 25 minutes in seconds
const workLocalStorage = () => {
  let workTime = localStorage.getItem("workDuration");
  return workTime ? JSON.parse(workTime) : 25 * 60;
};

const onBreakLocalStorage = () => {
  let onBreak = localStorage.getItem("isOnBreak");
  return onBreak ? JSON.parse(onBreak) : false;
};

const countPomoLocalStorage = () => {
  let countPomo = localStorage.getItem("pomodoroCounter");
  return countPomo ? JSON.parse(countPomo) : 0;
};

export {
  timerLocalStorage,
  breakLocalStorage,
  workLocalStorage,
  onBreakLocalStorage,
  countPomoLocalStorage,
};
