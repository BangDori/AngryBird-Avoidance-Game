"use strict";
const circle = document.querySelector("#character");
var x_pos, y_pos;
// Player 명 작성
let player;
function makePlayer() {
    x_pos = window.innerWidth / 2;
    y_pos = window.innerHeight / 2;
    player = new Player(`${document.querySelector("#username").value}`, x_pos, y_pos);
}
class Player {
    constructor(name, x_pos, y_pos) {
        this.name = name;
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.speed = 3;
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
                this.x_pos += this.speed;
            else if (keyStates.left)
                this.x_pos -= this.speed;
            if (keyStates.up)
                this.y_pos -= this.speed;
            else if (keyStates.down)
                this.y_pos += this.speed;
            if (this.x_pos < 24)
                this.x_pos = 24;
            else if (this.x_pos > window.innerWidth - 24)
                this.x_pos = window.innerWidth - 24;
            if (this.y_pos < 24)
                this.y_pos = 24;
            else if (this.y_pos > window.innerHeight - 24)
                this.y_pos = window.innerHeight - 24;
            if (circle) {
                circle.style.left = `${this.x_pos}px`;
                circle.style.top = `${this.y_pos}px`;
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
