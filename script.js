let play = document.getElementById('play');
let pause = document.getElementById('pause');
let stop = document.getElementById('stop');
let speedUp = document.getElementById('speed-up');
let speedDown= document.getElementById('speed-down');
let speedNorm = document.getElementById('speed-norm');
let video = document.getElementById('video-player');
let volume = document.getElementById('volume');
let progress = document.getElementById('progress');
let out = document.getElementById('out');

play.addEventListener('click', function () {
  video.play();
})
pause.addEventListener('click', function () {
  video.pause();
})
stop.addEventListener('click', function () {
  video.pause();
  video.currentTime = 0;
})
speedUp.addEventListener('click', function () {
  video.play();
  video.playbackRate = 2;
})
speedDown.addEventListener('click', function () {
  video.play();
  video.playbackRate = 0.5;
})
speedNorm.addEventListener('click', function () {
  video.play();
  video.playbackRate = 1;
})
volume.addEventListener('click', function () {
  let vol = this.value;
  video.volume = vol / 100;
})
progress.onclick = function () {
  let width = this.offsetWidth;
  let currentPos = event.offsetX;
  this.value = currentPos / width * 100;
  video.currentTime = video.duration * (currentPos / width);
}
function progressUpdate () {
  console.log('duration' + video.duration);
  console.log('current time' + video.currentTime);
  progress.value = video.currentTime / video.duration * 100;
  video.play;
  out.innerHTML = Math.round((video.currentTime * 100) / 100) + "sec";
}
video.ontimeupdate = progressUpdate;
