let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(time) {
    let milliseconds = Math.floor((time % 1000) / 10); 
    let seconds = Math.floor((time / 1000) % 60);       
    let minutes = Math.floor(time / (1000 * 60));       

    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');
    let ms = String(milliseconds).padStart(2, '0');

    return `${m}:${s}.${ms}`;
}

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            display.textContent = formatTime(elapsedTime);
        }, 10);

        isRunning = true;
        startBtn.disabled = true;
        pauseBtn.disabled = false;
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = "00:00.00";
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);