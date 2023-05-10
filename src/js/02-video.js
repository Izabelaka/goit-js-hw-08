// import Vimeo from '@vimeo/player';

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// funkcja do zapisywania czasu odtwarzania w local storage
const saveCurrentTime = time => {
  localStorage.setItem('videoplayer-current-time', time);
};

// funkcja do odczytywania czasu odtwarzania z local storage
const getCurrentTime = () => {
  return localStorage.getItem('videoplayer-current-time') || 0;
};

// ustawienie czasu odtwarzania z local storage po załadowaniu strony
player.setCurrentTime(getCurrentTime());

// zapisywanie czasu odtwarzania do local storage co sekundę
player.on(
  'timeupdate',
  throttle(data => {
    saveCurrentTime(data.seconds);
  }, 500)
);
