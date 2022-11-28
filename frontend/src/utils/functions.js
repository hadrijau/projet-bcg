export const calculatePriceOfRide = (distance, startTime) => {
  let ridePrice = 1;

  ridePrice += addFareBecauseOfMiles(distance);
  if (isTimeBetween8And6(startTime)) {
    ridePrice += 0.5;
  }
  if (isBusyPeriod(startTime)) {
    ridePrice += 1;
  }
  return ridePrice;
};

export const addFareBecauseOfMiles = (distance) => {
  return (distance / 0.2) * 0.5;
};

export const isTimeBetween8And6 = (startTime) => {
  let hour = new Date(startTime).getHours();
  return hour >= 20 || hour <= 6;
};

export const isBusyPeriod = (startTime) => {
  let hour = new Date(startTime).getHours();
  return hour >= 16 && hour <= 19;
};

export const computeEndTimeOfRide = (startTime, duration) => {
  let convertedTimeToDate = new Date(startTime);
  let endTime = convertedTimeToDate.setSeconds(
    convertedTimeToDate.getSeconds() + duration
  );
  return convertTimeInSecondsToHHMMSS(endTime);
};

export const computeDurationOfTheRide = (startTime) => {
  var sec_num = parseInt(startTime, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return hours + ":" + minutes + ":" + seconds;
};

export const convertTimeInSecondsToHHMMSS = (time) => {
  return new Date(time).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
};
