/* eslint-disable no-console */
import setPageFlow from './dom';
import {
  getHourlyData,
  getDailyData,
  computeRainRate,
  formatTime,
  getToday,
} from './helper';

const weatherData = {};

function segregateData(data) {
  weatherData.todayInfo = {
    currentTemp: data.currentConditions.temp,
    currentCondIcon: data.currentConditions.icon,
    currentCond: data.currentConditions.conditions,
    currentLocation: data.resolvedAddress,
    currentTime: formatTime(data.currentConditions.datetime),
    currentDate: getToday(),
  };
  weatherData.todayCondition = {
    feelsLike: data.currentConditions.feelslike,
    rainRate: computeRainRate(
      data.currentConditions.preciptype,
      data.currentConditions.precipprob,
    ),
    humidity: data.currentConditions.humidity,
    uvIndex: data.currentConditions.uvindex,
    visibility: data.currentConditions.visibility,
    pressure: data.currentConditions.pressure,
    sunrise: formatTime(data.currentConditions.sunrise),
    sunset: formatTime(data.currentConditions.sunset),
  };
  weatherData.hourlyForecast = getHourlyData(data);
  weatherData.dailyForecast = getDailyData(data);

  setPageFlow(weatherData);
}

async function getWeatherData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    segregateData(data);
  } catch (error) {
    console.log(`ERROR: ${error}`);
    // display something when error
  }
}

export { weatherData, segregateData, getWeatherData };
