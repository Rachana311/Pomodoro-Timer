let timerEl = document.getElementById("timer");
let timer;
let timeLeft = 25 * 60;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function shortBreak() {
    timeLeft = 5 * 60;
    updateDisplay();
}

function longBreak() {
    timeLeft = 15 * 60;
    updateDisplay();
}

function reset() {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    updateDisplay();
}

function start() {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                timer = null;
            }
        }, 1000);
    }
}

function stop() {
    clearInterval(timer);
    timer = null;
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);

updateDisplay();
