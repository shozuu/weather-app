/* eslint-disable no-console */
import {
  getHourlyData,
  getDailyData,
  computeRainRate,
  formatTime,
  getToday,
} from './helper';

function segregateData(data) {
  console.log(data);

  const weatherData = {
    todayInfo: {
      currentTemp: data.currentConditions.temp,
      currentCondIcon: data.currentConditions.icon,
      currentCond: data.currentConditions.conditions,
      currentLocation: data.resolvedAddress,
      currentTime: formatTime(data.currentConditions.datetime),
      currentDate: getToday(),
    },
    todayCondition: {
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
    },
    hourlyForecast: getHourlyData(data),
    dailyForecast: getDailyData(data),
  };

  console.log(weatherData);
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

export { segregateData, getWeatherData };
