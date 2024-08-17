import { format, parse } from 'date-fns';
import { weatherData, rawWeatherData as data } from './weatherData';
import getWeatherData from './api';
import setPageFlow from './dom';

let location;
let unitFlag = false; // false for metric, true for us

const retrieveLocation = () => location;

const setLocation = (newLocation) => {
  location = newLocation;
};

function formatTime(time) {
  const parsedTime = parse(time, 'HH:mm:ss', new Date());
  return format(parsedTime, 'HH:mm');
}

function formatDate(date) {
  return format(date, 'EEE, dd MMM');
}

function getToday() {
  const today = new Date();
  return format(today, 'EEE, dd MMM');
}

function computeRainRate(precipType, precipProb) {
  const rainRate = !precipType === 'rain' ? 0 : precipProb;

  return `${Math.round(rainRate)}`;
}

function getHourlyData() {
  const hours = [];

  for (let i = 0; i < 24; i += 1) {
    const hour = {
      temp: data.days[0].hours[i].temp,
      rainRate: computeRainRate(
        data.days[0].hours[i].preciptype,
        data.days[0].hours[i].precipprob,
      ),
      weatherIcon: data.days[0].hours[i].icon,
      hour: formatTime(data.days[0].hours[i].datetime),
    };
    hour.rainRate = hour.rainRate === '0' ? '' : `${hour.rainRate}%`;
    hours.push(hour);
  }
  return hours;
}

function getDailyData() {
  const days = [];

  for (let i = 0; i < 15; i += 1) {
    const day = {
      date: formatDate(data.days[i].datetime),
      rainRate: computeRainRate(
        data.days[i].preciptype,
        data.days[i].precipprob,
      ),
      weatherIcon: data.days[i].icon,
      minTemp: data.days[i].tempmin,
      maxTemp: data.days[i].tempmax,
    };
    day.rainRate = day.rainRate === '0' ? '' : `${day.rainRate}%`;
    days.push(day);
  }
  return days;
}

function segregateData() {
  // data is the rawData resolved from json and we segregate it and set to weatherData
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

  setPageFlow(unitFlag);
}

function setURL(unit = 'metric') {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${retrieveLocation()}?unitGroup=${unit}&key=RX4CHRHAUCWEF6VASHY8ZA8FT
  &contentType=json`;

  getWeatherData(url, segregateData);
}

function listenToSwitch() {
  const metric = document.querySelector('.celcius-button');
  const us = document.querySelector('.farenheit-button');

  metric.addEventListener('click', () => {
    metric.classList.add('selected');
    us.classList.remove('selected');

    unitFlag = false;
    setURL('metric');
  });

  us.addEventListener('click', () => {
    us.classList.add('selected');
    metric.classList.remove('selected');

    unitFlag = true;
    setURL('us');
  });
}

export {
  formatTime,
  formatDate,
  getToday,
  computeRainRate,
  getHourlyData,
  getDailyData,
  segregateData,
  setURL,
  listenToSwitch,
  setLocation,
};
