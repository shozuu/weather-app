import { createErrorScreen, createLoadingScreen } from './dom';
import { rawWeatherData } from './weatherData';

export default async function getWeatherData(url, segregateData) {
  try {
    const response = await fetch(url);
    createLoadingScreen();

    if (!response.ok) {
      throw new Error(
        `Location not found. Please ensure you include the city/country name in your input`,
      );
    }

    Object.assign(rawWeatherData, await response.json());
    segregateData();
  } catch (error) {
    createErrorScreen(error);
  }
}
