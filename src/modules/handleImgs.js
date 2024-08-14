/* eslint-disable no-param-reassign */
function setImgs(icons) {
  Object.entries(icons).forEach(([key, value]) => {
    const elements = document.querySelectorAll(`[alt="${key}"]`);

    if (elements.length) {
      elements.forEach((element) => {
        element.src = value;
      });
    }
  });
}
/* eslint-disable no-param-reassign */

export default function initializeImgs() {
  const icons = {};
  const context = require.context('../assets', true, /\.(png|jpe?g|svg)$/);
  const imagePaths = context.keys();

  imagePaths.forEach((path) => {
    const firstSplit = path.split('/');
    const secondSplit = firstSplit[firstSplit.length - 1];
    const thirdSplit = secondSplit.split('.');
    const finalName = thirdSplit[0];

    // this trims the path from "./weather-icons/partly-cloudy-day.svg" to "partly-cloudy-day", which can be used as name(key) for icons obj

    const imageSrc = context(path);
    icons[finalName] = imageSrc;
  });

  setImgs(icons);
}

// require.context is used to dynamically provide reference that loads all modules/files(imgs) from a specific directory(assets) that matches the regex pattern. meaning we still need to import them one by one

// context.keys() returns an array of strings that contains paths that references the files loaded/provided by require.context. this still does not import all the files/imgs but we can use this to set the name(key)that will contain the actual path(value) of the files/imgs

// using context(path) like this finally imports the actual file/img which returns a url/path of the file/img
