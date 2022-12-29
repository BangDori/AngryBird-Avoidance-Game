"use strict";
function goHome() {
    var nextSibling = menu === null || menu === void 0 ? void 0 : menu.nextElementSibling;
    while (nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.classList.contains(NONE)) {
        nextSibling = nextSibling.nextElementSibling;
    }
    nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.classList.add(NONE);
    menu === null || menu === void 0 ? void 0 : menu.classList.remove(NONE);
}
function reStart() {
    // game restart
}
