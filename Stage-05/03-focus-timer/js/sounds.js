export default function Sound() {
  const pressButtonAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  bgAudio.loop = true;

  function pressBtn() {
    pressButtonAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function bgAudioStart() {
    bgAudio.play();
  }

  return {
    pressBtn,
    timeEnd,
    bgAudio,
  }
}

