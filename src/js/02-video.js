import Vimeo from '@vimeo/player';

const player = new Vimeo('#vimeo-player');

player.on('timeupdate', () => {
    const currentTime = player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  });

  const savedTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedTime);

import _ from 'lodash';

const saveCurrentTime = () => {
  const currentTime = player.getCurrentTime();
  localStorage.setItem('videoplayer-current-time', currentTime);
}

player.on('timeupdate', _.throttle(saveCurrentTime, 1000));