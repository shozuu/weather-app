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

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const arr = searchbar.value.split(' ');
    const location = arr.join('%20');

    setURL(location);
  });
}

export { setURL, getLocation };
// implement geocoding?
