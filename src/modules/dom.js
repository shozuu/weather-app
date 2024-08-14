/* eslint-disable no-console */

import { weatherData } from './weatherData';

function createElement(elementType, elementClass = [], elementAttribute = {}) {
  const element = document.createElement(elementType);

  if (elementClass.length) {
    elementClass.forEach((className) => {
      element.classList.add(className);
    });
  }

  Object.entries(elementAttribute).forEach(([key, value]) => {
    if (key === 'textContent') {
      element.textContent = value;
    } else {
      element.setAttribute(key, value);
    }
  });

  return element;
}

function appendElement(parentElement, childElement = []) {
  if (childElement.length) {
    childElement.forEach((child) => {
      parentElement.appendChild(child);
    });
  }
}

function createTodayGroup() {
  const mainContainer = document.querySelector('.main-container');
  console.log(weatherData);
  const todayGroup = createElement('section', ['today-group']);
  const title = createElement('div', ['title'], { textContent: 'Today' });
  const todayCard = createElement('div', ['today-card']);

  const todayTempGroup = createElement('div', ['today-temp-group']);
  const todayTemp = createElement('div', ['today-temp'], {
    textContent: '19°C',
  });
  const todayWeatherImg = createElement('img', ['today-weather-img'], {
    src: '',
    alt: 'partly-cloudy-night',
  });
  const todayCondition = createElement('div', ['today-condition'], {
    textContent: 'Partly Cloudy',
  });

  const todayInfoGroup = createElement('div', ['today-info-group']);

  const infoGroup1 = createElement('div', ['info-group']);
  const locationImg = createElement('img', [], { src: '', alt: 'Location' });
  const location = createElement('div', ['location'], {
    textContent: 'Manila, Philippines',
  });

  const infoGroup2 = createElement('div', ['info-group']);
  const timeImg = createElement('img', [], { src: '', alt: 'Time' });
  const currentTime = createElement('div', ['current-time'], {
    textContent: '12:30',
  });

  const infoGroup3 = createElement('div', ['info-group']);
  const dateImg = createElement('img', [], { src: '', alt: 'Date' });
  const currentDate = createElement('div', ['current-date'], {
    textContent: 'Sat, 3 Aug',
  });

  appendElement(infoGroup1, [locationImg, location]);
  appendElement(infoGroup2, [timeImg, currentTime]);
  appendElement(infoGroup3, [dateImg, currentDate]);

  appendElement(todayInfoGroup, [infoGroup1, infoGroup2, infoGroup3]);
  appendElement(todayTempGroup, [todayTemp, todayWeatherImg]);
  appendElement(todayCard, [todayTempGroup, todayCondition, todayInfoGroup]);

  appendElement(todayGroup, [title, todayCard]);
  appendElement(mainContainer, [todayGroup]);
}

function createTodayConditionGroup() {
  const mainContainer = document.querySelector('.main-container');

  const todayConditionGroup = createElement('section', [
    'today-condition-group',
  ]);
  const title = createElement('div', ['title'], {
    textContent: "Today's conditions",
  });
  const todayConditionCard = createElement('div', ['today-condition-card']);

  const conditionCard1 = createElement('div', ['condition-card']);
  const feelsLikeImg = createElement('img', [], {
    src: '',
    alt: 'feels-like',
  });
  const conditionInfo1 = createElement('div', ['condition-info']);
  const feelsLike = createElement('div', ['feels-like'], {
    textContent: '32°C',
  });
  const temp1 = createElement('div', [], {
    textContent: 'Feels Like',
  });

  const conditionCard2 = createElement('div', ['condition-card']);
  const rainRateImg = createElement('img', [], {
    src: '',
    alt: 'rain-rate',
  });
  const conditionInfo2 = createElement('div', ['condition-info']);
  const rainRate = createElement('div', ['rain-rate'], {
    textContent: '12 %',
  });
  const temp2 = createElement('div', [], { textContent: 'Rain Rate' });

  const conditionCard3 = createElement('div', ['condition-card']);
  const humidityImg = createElement('img', [], {
    src: '',
    alt: 'humidity',
  });
  const conditionInfo3 = createElement('div', ['condition-info']);
  const humidity = createElement('div', ['humidity'], {
    textContent: '77 %',
  });
  const temp3 = createElement('div', [], {
    textContent: 'Humidity',
  });

  const conditionCard4 = createElement('div', ['condition-card']);
  const uvIndexImg = createElement('img', [], {
    src: '',
    alt: 'uv-index',
  });
  const conditionInfo4 = createElement('div', ['condition-info']);
  const uvIndex = createElement('div', ['uv-index'], {
    textContent: '1',
  });
  const temp4 = createElement('div', [], {
    textContent: 'UV Index',
  });

  const conditionCard5 = createElement('div', ['condition-card']);
  const visibilityImg = createElement('img', [], {
    src: '',
    alt: 'visibility',
  });
  const conditionInfo5 = createElement('div', ['condition-info']);
  const visibility = createElement('div', ['visibility'], {
    textContent: '10 km',
  });
  const temp5 = createElement('div', [], {
    textContent: 'Visibility',
  });

  const conditionCard6 = createElement('div', ['condition-card']);
  const pressureImg = createElement('img', [], {
    src: '',
    alt: 'pressure',
  });
  const conditionInfo6 = createElement('div', ['condition-info']);
  const pressure = createElement('div', ['pressure'], {
    textContent: '1010 mbar',
  });
  const temp6 = createElement('div', [], {
    textContent: 'Pressure',
  });

  const conditionCard7 = createElement('div', ['condition-card']);
  const sunriseImg = createElement('img', [], {
    src: '',
    alt: 'sunrise',
  });
  const conditionInfo7 = createElement('div', ['condition-info']);
  const sunrise = createElement('div', ['sunrise'], {
    textContent: '05:45',
  });
  const temp7 = createElement('div', [], {
    textContent: 'Sunrise',
  });

  const conditionCard8 = createElement('div', ['condition-card']);
  const sunsetImg = createElement('img', [], {
    src: '',
    alt: 'sunset',
  });
  const conditionInfo8 = createElement('div', ['condition-info']);
  const sunset = createElement('div', ['sunset'], {
    textContent: '18:09',
  });
  const temp8 = createElement('div', [], {
    textContent: 'Sunset',
  });

  appendElement(conditionInfo1, [feelsLike, temp1]);
  appendElement(conditionInfo2, [rainRate, temp2]);
  appendElement(conditionInfo3, [humidity, temp3]);
  appendElement(conditionInfo4, [uvIndex, temp4]);
  appendElement(conditionInfo5, [visibility, temp5]);
  appendElement(conditionInfo6, [pressure, temp6]);
  appendElement(conditionInfo7, [sunrise, temp7]);
  appendElement(conditionInfo8, [sunset, temp8]);

  appendElement(conditionCard1, [feelsLikeImg, conditionInfo1]);
  appendElement(conditionCard2, [rainRateImg, conditionInfo2]);
  appendElement(conditionCard3, [humidityImg, conditionInfo3]);
  appendElement(conditionCard4, [uvIndexImg, conditionInfo4]);
  appendElement(conditionCard5, [visibilityImg, conditionInfo5]);
  appendElement(conditionCard6, [pressureImg, conditionInfo6]);
  appendElement(conditionCard7, [sunriseImg, conditionInfo7]);
  appendElement(conditionCard8, [sunsetImg, conditionInfo8]);

  appendElement(todayConditionCard, [
    conditionCard1,
    conditionCard2,
    conditionCard3,
    conditionCard4,
    conditionCard5,
    conditionCard6,
    conditionCard7,
    conditionCard8,
  ]);

  appendElement(todayConditionGroup, [title, todayConditionCard]);
  appendElement(mainContainer, [todayConditionGroup]);
}

// function createForecastCardItems() {
//   console.log(getData());
// }

// function createHourlyGroup() {
//   const mainContainer = document.querySelector('.main-container');

//   const hourlyGroup = createElement('section', ['hourly-group']);
//   const title = createElement('div', ['title'], {
//     textContent: 'Hourly Forecast',
//   });
//   const hourlyForecastCard = createElement('div', ['hourly-forecast-card']);

//   // const hourCard = createElement('div', ['hour-card']);
//   // const hourTemp = createElement('div', ['hour-temp'], { textContent: '19°C' });
//   // const hourInfo = createElement('div', ['hour-info']);
//   // const hourWeather = createElement('div', ['hour-weather']);
//   // const hourRainRate = createElement('div', ['hour-rain-rate'], {
//   //   textContent: '',
//   // });
//   // const hourWeatherImg = createElement('img', [], { src: '', alt: '' });
//   // const hourTime = createElement('div', ['hour-time'], {
//   //   textContent: '13:00',
//   // });

//   // appendElement(hourWeather, [hourRainRate, hourWeatherImg]);
//   // appendElement(hourInfo, [hourWeather, hourTime]);
//   // appendElement(hourCard, [hourTemp, hourInfo]);

//   // // create a function to loop

//   createForecastCardItems();
// }

export default function setPageFlow() {
  createTodayGroup();
  createTodayConditionGroup();
}
