/* eslint-disable no-console */
import { setURL } from './utils';

export default function getLocation() {
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

// implement geocoding?
