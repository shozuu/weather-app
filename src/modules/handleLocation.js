import { listenToSwitch, setLocation, setURL } from './utils';

export default function getLocation() {
  const form = document.querySelector('form');
  const searchbar = document.querySelector('.searchbar');
  let location = 'tokyo%20japan';
  let flag = false;

  form.addEventListener('submit', (e) => {
    flag = true;
    e.preventDefault();

    const arr = searchbar.value.split(' ');
    location = arr.join('%20');

    setLocation(location);
    setURL();
  });

  if (!flag) {
    listenToSwitch();
    setLocation(location);
    setURL();
  }
}
