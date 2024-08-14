/* eslint-disable no-console */
import { rawWeatherData } from './weatherData';

export default async function getWeatherData(url, segregateData) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    Object.assign(rawWeatherData, await response.json());
    segregateData();
  } catch (error) {
    console.log(`ERROR: ${error}`);
    // display something when error
  }
}
