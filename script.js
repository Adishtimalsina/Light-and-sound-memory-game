//Global constant
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const len = 6;
const ButtonNumber = 6;
//Global Variables
var pattern = [2, 2, 4, 3, 6, 1];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var time = 20;
var timer = null;
var reset = false;
var wrongAttempt = 0; // counts user mistakes

function generateRandom() {
  for (let i = 0; i < ButtonNumber; i++) {
    pattern[i] = Math.ceil(Math.random() * 6);
  }
}

function startGame() {
  //initialize game variables
  console.log(pattern);
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  // swap the Start and Stop buttons
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("stopButton").classList.remove("hidden");
  generateRandom();
  playClueSequence();
}
function stopGame() {
  gamePlaying = false;
  document.getElementById("startButton").classList.remove("hidden");
  document.getElementById("stopButton").classList.add("hidden");
  reset = true;
}

// Sound Synthesis Functions
const freqMap = {
  1: 523.25, //c5
  2: 329.63, //E4
  3: 783.99, //G5
  4: 466.16, //A#4/Bb4
  5: 392, //G4
  6: 659.25, //E5
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  wrongAttempt = 0;

  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    time = 20;
    reset = false;
    clueHoldTime -= 40;

    clearInterval(timer);
    timer = setInterval(countDown, 1000);
  }
}
function countDown() {
  document.getElementById("clock").innerHTML = "Time left: " + time + " s";
  time -= 1;
  if (time < 0 || reset) {
    if (!reset) {
      stopGame();
      alert("Time up! You lost.");
    }
    resetTimer();
    clearInterval(timer);
  }
}
function resetTimer() {
  // timer = 20;
  document.getElementById("clock").innerHTML = "Time: 20 s";
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  alert("Game Over. You won.");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
        reset = true;
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    wrongAttempt++;
    if (wrongAttempt == 3) {
      loseGame();
      reset = true;
    } else {
      alert(
        "Wrong Attempt! \n You have " + (3 - wrongAttempt) + " attempt left"
      );
    }
  }
}
