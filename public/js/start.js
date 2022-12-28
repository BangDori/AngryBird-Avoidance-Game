"use strict";
const START = document.querySelector("#start");
function init() {
    START === null || START === void 0 ? void 0 : START.addEventListener("click", (e) => {
        const userName = document.querySelector("#naming").value;
        console.log(userName.length);
        if (userName.length < 1 || userName.length > 8) {
            alert('Input Name length: 0~8');
            e.preventDefault();
            e.stopPropagation();
        }
    });
}
init();