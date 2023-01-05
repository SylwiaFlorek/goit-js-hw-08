const Vimeo = require('@vimeo/player');

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function(data) {
  window.localStorage.setItem('videoplayer-current-time', data.seconds);
});

const savedTime = window.localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}

const throttle = require('lodash.throttle');

player.on('timeupdate', throttle(function(data) {
  window.localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

