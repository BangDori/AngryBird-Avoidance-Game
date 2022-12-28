"use strict";
const JOIN = document.querySelector("#join");
function init() {
    JOIN === null || JOIN === void 0 ? void 0 : JOIN.addEventListener("click", (e) => {
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
