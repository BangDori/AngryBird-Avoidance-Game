"use strict";
function clickPause() {
    modal === null || modal === void 0 ? void 0 : modal.classList.remove(NONE);
    stopTimer();
}
function goHome() {
    var nextSibling = menu === null || menu === void 0 ? void 0 : menu.nextElementSibling;
    while (nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.classList.contains(NONE)) {
        nextSibling = nextSibling.nextElementSibling;
    }
    nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.classList.add(NONE);
    menu === null || menu === void 0 ? void 0 : menu.classList.remove(NONE);
    resetTimer();
}
function reStart() {
    if (died === true) {
        resetTimer();
        died = false;
    }
    interval = setInterval(startTimer, 1000);
}
