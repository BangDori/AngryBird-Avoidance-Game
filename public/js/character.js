"use strict";
const circle = document.querySelector("#character");
var x_pos, y_pos;
// Player 명 작성
let player;
function makePlayer() {
    var bodyRect = document.body.getBoundingClientRect(), circleRect = circle === null || circle === void 0 ? void 0 : circle.getBoundingClientRect();
    if (circleRect instanceof DOMRect) {
        y_pos = circleRect.top - bodyRect.top;
        x_pos = circleRect.left - bodyRect.left;
    }
    player = new Player(`${document.querySelector("#username").value}`, x_pos, y_pos);
    player.movePlayer();
}
class Player {
    constructor(name, x_pos, y_pos) {
        this.name = name;
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.speed = 5;
        this.interval = 0;
        this.record = [];
    }
    insertRecord(record) {
        this.record.push(record);
        if (this.record.length > 1) {
            this.record.sort((one, two) => (one > two ? -1 : 1));
        }
        insertToTable(this.record);
    }
    movePlayer() {
        this.interval = setInterval(() => {
            if (keyStates.right)
                x_pos += this.speed;
            else if (keyStates.left)
                x_pos -= this.speed;
            if (keyStates.up)
                y_pos -= this.speed;
            else if (keyStates.down)
                y_pos += this.speed;
            if (circle) {
                circle.style.left = `${x_pos}px`;
                circle.style.top = `${y_pos}px`;
            }
        }, 10);
    }
}
var keyStates = {
    right: false,
    left: false,
    up: false,
    down: false
};
function updateKeyStates(key, state) {
    if (key === 'ArrowRight')
        keyStates.right = state;
    else if (key === 'ArrowLeft')
        keyStates.left = state;
    else if (key === 'ArrowUp')
        keyStates.up = state;
    else if (key === 'ArrowDown')
        keyStates.down = state;
}
