"use strict";
function clickPause() {
    console.log(player);
    modal === null || modal === void 0 ? void 0 : modal.classList.remove(NONE);
    stopTimer();
    stopEnemies();
    clearInterval(player.interval);
}
function goHome() {
    if (!(start === null || start === void 0 ? void 0 : start.classList.contains(NONE)))
        start === null || start === void 0 ? void 0 : start.classList.add(NONE);
    else if (!(record === null || record === void 0 ? void 0 : record.classList.contains(NONE)))
        record === null || record === void 0 ? void 0 : record.classList.add(NONE);
    menu === null || menu === void 0 ? void 0 : menu.classList.remove(NONE);
    resetTimer();
    circle === null || circle === void 0 ? void 0 : circle.classList.add(HIDDEN);
    resetEnemies();
    lock = false;
}
function reStart() {
    if (died === true) {
        resetTimer();
        player.resetPlayerPosition();
        died = false;
    }
    interval = setInterval(startTimer, 1000);
    startEnemies();
    player.movePlayer();
}
