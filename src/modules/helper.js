/* eslint-disable no-console */

function computeRainRate(precipType, precipProb) {
  const rainRate = !precipType === 'rain' ? '0%' : `${precipProb}%`;

  return rainRate;
}

function getHourlyData(data) {
  const hours = [];

  for (let i = 0; i < 24; i += 1) {
    const hour = {
      temp: data.days[0].hours[i].temp,
      rainRate: computeRainRate(
        data.days[0].hours[i].preciptype,
        data.days[0].hours[i].precipprob,
      ),
      weatherIcon: data.days[0].hours[i].icon,
      hour: data.days[0].hours[i].datetime,
    };
    hours.push(hour);
  }
  return hours;
}

function getDailyData(data) {
  const days = [];

  for (let i = 0; i < 15; i += 1) {
    const day = {
      date: data.days[i].datetime,
      rainRate: computeRainRate(
        data.days[i].preciptype,
        data.days[i].precipprob,
      ),
      weatherIcon: data.days[i].icon,
      minTemp: data.days[i].tempmin,
      maxTemp: data.days[i].tempmax,
    };
    days.push(day);
  }
  return days;
}

export { computeRainRate, getHourlyData, getDailyData };
