import Player from "@vimeo/player"
import throttle from "lodash.throttle";


const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))

player.on('timeupdate', throttle((saveTime),1000))

function saveTime(currentTime) {
    
    localStorage.setItem("videoplayer-current-time", currentTime.seconds)
}