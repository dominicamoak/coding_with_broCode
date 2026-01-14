
const clock = document.getElementById("clock");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isLive = false;

function start() {
    if (!isLive) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(display, 10);
        isLive = true;
    }
}

function stop() {
    if (isLive) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isLive = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isLive = false;

    clock.textContent = `00:00:00:00`;
}

function display() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let millisecs = Math.floor(elapsedTime % (1000) / 10);

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    millisecs = String(millisecs).padStart(2, 0);

    clock.textContent = `${hours}:${minutes}:${seconds}:${millisecs}`;
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

