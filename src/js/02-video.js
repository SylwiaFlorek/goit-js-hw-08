import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
let currentTime = 0;
if (localStorage.getItem('videoplayer-current-time') != null) {
  currentTime = localStorage.getItem('videoplayer-current-time');
}

player.setCurrentTime(currentTime);