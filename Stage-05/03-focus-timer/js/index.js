import Controls from './controls.js';
import { Timer } from './timer.js';
import Sound from './sounds.js';
import {
  playBtn,
  pauseBtn,
  stopBtn,
  setBtn,
  soundOnBtn,
  soundOffBtn,
  displayMinutes,
  displaySeconds,
} from './elements.js';

const controls = Controls({
  playBtn,
  pauseBtn,
  stopBtn,
  setBtn
});

const timer = Timer({
  displayMinutes,
  displaySeconds,
  resetControls: controls.reset,
});

const sound = Sound();

playBtn.addEventListener('click', () => {
  controls.play();
  timer.countdown();
  sound.pressBtn();
});

pauseBtn.addEventListener('click', () => {
  controls.pause();
  timer.hold();
  sound.pressBtn();
});

stopBtn.addEventListener('click', () => {
  controls.reset();
  timer.reset();
  sound.pressBtn();
});

soundOnBtn.addEventListener('click', () => {
  soundOnBtn.classList.add('hide');
  soundOffBtn.classList.remove('hide');
  sound.bgAudio.play();
});

soundOffBtn.addEventListener('click', () => {
  soundOnBtn.classList.remove('hide');
  soundOffBtn.classList.add('hide');
  sound.bgAudio.pause();
});

setBtn.addEventListener('click', () => {
  let newMinutes = controls.getMinutes();

  if(!newMinutes) {
    timer.reset();
    return
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes)
})





