"use strict";
const menu = document.querySelector("#menu"), start_button = menu === null || menu === void 0 ? void 0 : menu.querySelector("#start_button"), start = document.querySelector("#start"), history_button = menu === null || menu === void 0 ? void 0 : menu.querySelector("#history_button"), record = document.querySelector("#history"), // history
pause = document.querySelector(".pause"), modal = document.querySelector(".js-modal"), restart = document.querySelector(".restart"), home = document.querySelectorAll(".home"), join = document.querySelector("#join"), direction = document.querySelector(".wrapper");
const ANI = "animation";
const NONE = "none";
const HIDDEN = "hidden";
let lock = false;
function init() {
    start_button === null || start_button === void 0 ? void 0 : start_button.addEventListener("click", () => {
        if (lock === false) {
            lock = true;
            startGame();
        }
    });
    history_button === null || history_button === void 0 ? void 0 : history_button.addEventListener("click", openHistory);
    pause === null || pause === void 0 ? void 0 : pause.addEventListener("click", clickPause);
    restart === null || restart === void 0 ? void 0 : restart.addEventListener("click", () => {
        reStart();
        modal === null || modal === void 0 ? void 0 : modal.classList.add(NONE);
    });
    home.forEach((h) => {
        h === null || h === void 0 ? void 0 : h.addEventListener("click", () => {
            goHome();
            modal === null || modal === void 0 ? void 0 : modal.classList.add(NONE);
            if (!(record === null || record === void 0 ? void 0 : record.classList.contains(NONE))) {
                record === null || record === void 0 ? void 0 : record.classList.add(NONE);
            }
        });
    });
    join === null || join === void 0 ? void 0 : join.addEventListener("click", (e) => {
        const userName = document.querySelector("#naming").value;
        if (userName.length < 1 || userName.length > 8) {
            alert('Input Name length: 0~8');
            e.preventDefault();
            e.stopPropagation();
        }
    });
    // window?.addEventListener("keydown", Player.movePlayer);
    window === null || window === void 0 ? void 0 : window.addEventListener("keydown", (e) => {
        updateKeyStates(e.key, true);
    });
    window === null || window === void 0 ? void 0 : window.addEventListener("keyup", (e) => {
        updateKeyStates(e.key, false);
    });
    makePlayer();
}
init();
