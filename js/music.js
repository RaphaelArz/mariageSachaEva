const toggleBtn = document.getElementById("toggleMusic");
const musicIcon = document.getElementById("musicIcon");
const audio = document.getElementById("myAudio");
let isMusicPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicIcon.classList.replace("fa-volume-mute", "fa-volume-up");
    isMusicPlaying = true;
  } else {
    audio.pause();
    musicIcon.classList.replace("fa-volume-up", "fa-volume-mute");
    isMusicPlaying = false;
  }
});

// Pour rester cohérent si musique jouée par le bouton d'entrée
function playMusic() {
  const audio = document.getElementById("myAudio");
  audio.currentTime = 1;
  audio.play();
  musicIcon.classList.replace("fa-volume-mute", "fa-volume-up");
  isMusicPlaying = true;
}

// Stop musique au unload
window.addEventListener("beforeunload", function () {
  const audio = document.getElementById("myAudio");
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
});
