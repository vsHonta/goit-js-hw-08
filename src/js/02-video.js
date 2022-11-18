import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function timeUpdate(evt) {
    console.log(evt);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(evt))
}

player.on('timeupdate', throttle(timeUpdate, 1000)  );

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});



let time 

try {
    const obj = JSON.parse(localStorage.getItem('videoplayer-current-time'))
    time = obj.seconds
} catch (error) {}

player.setCurrentTime(time).then(function(seconds) {})













// .catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// }