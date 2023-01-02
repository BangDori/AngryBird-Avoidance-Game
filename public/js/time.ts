const time = document.querySelector(".survival-time");

let died = false;
var timer = 0;
var second = 0;
var minute = 0;
let interval: number; 

function startTimer() {
    if(second >= 60) {
        minute += 1;
        second = 0;
    }

    if(time instanceof Element) {
        time.textContent = `${minute<10?`0${minute}`:minute}:${second<10?`0${second}`:second}`;
    }
    second += 1;
    timer += 1;
}

function stopTimer() {
    clearInterval(interval);
}

function dieGamer() {
    died = true;

    player.insertRecord(timer - 1);
    clickPause();
    resetEnemies();
}

function resetTimer() {
    second = 0;
    minute = 0;
    timer = 0;
    if(time instanceof Element) {
        time.textContent = `${minute<10?`0${minute}`:minute}:${second<10?`0${second}`:second}`;
    }
}