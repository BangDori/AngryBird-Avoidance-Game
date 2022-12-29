"use strict";
function startGame() {
    menu === null || menu === void 0 ? void 0 : menu.classList.add(ANI);
    setTimeout(function () {
        menu === null || menu === void 0 ? void 0 : menu.classList.remove(ANI);
        menu === null || menu === void 0 ? void 0 : menu.classList.add(NONE);
        start === null || start === void 0 ? void 0 : start.classList.remove(NONE);
    }, 800);
}
function openHistory() {
    menu === null || menu === void 0 ? void 0 : menu.classList.add(ANI);
    setTimeout(function () {
        menu === null || menu === void 0 ? void 0 : menu.classList.remove(ANI);
        menu === null || menu === void 0 ? void 0 : menu.classList.add(NONE);
        record === null || record === void 0 ? void 0 : record.classList.remove(NONE);
    }, 800);
}
