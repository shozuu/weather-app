/* eslint-disable no-console */
import { getWeatherData } from './api';

function setURL(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=RX4CHRHAUCWEF6VASHY8ZA8FT
  &contentType=json`;

  getWeatherData(url);
}

function getLocation() {
  const form = document.querySelector('form');
  const searchbar = document.querySelector('.searchbar');
  let flag = false;

  form.addEventListener('submit', (e) => {
    flag = true;
    e.preventDefault();

    const arr = searchbar.value.split(' ');
    const location = arr.join('%20');

    setURL(location);
  });

  if (!flag) setURL('tokyo japan');
}

export { setURL, getLocation };
// implement geocoding?
