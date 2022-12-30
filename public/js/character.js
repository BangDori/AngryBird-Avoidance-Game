"use strict";
const circle = document.querySelector("#character");
const speed = 5;
var x_pos, y_pos;
// Player 명 작성
var player;
function makePlayer() {
    var bodyRect = document.body.getBoundingClientRect(), circleRect = circle === null || circle === void 0 ? void 0 : circle.getBoundingClientRect();
    if (circleRect instanceof DOMRect) {
        y_pos = circleRect.top - bodyRect.top;
        x_pos = circleRect.left - bodyRect.left;
    }
    player = new Player("player", x_pos, y_pos);
    console.log("Player Created!");
    console.log(`Player pos(x: ${player.x_pos}, y: ${player.y_pos})`);
}
class Player {
    constructor(name, x_pos, y_pos) {
        this.name = name;
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.record = [];
    }
    insertRecord(record) {
        this.record.push(record);
        if (this.record.length > 1) {
            this.record.sort();
        }
        console.log(this.record);
    }
    static movePlayer(e) {
        // console.log(e.key);
        switch (e.key) {
            // ArrowRight
            case 'ArrowRight':
                x_pos += speed;
                break;
            // ArrowLeft
            case 'ArrowLeft':
                x_pos -= speed;
                break;
            // ArrowUp
            case 'ArrowUp':
                y_pos -= speed;
                break;
            // ArrowDown
            case 'ArrowDown':
                y_pos += speed;
                break;
        }
        if (circle) {
            circle.style.left = `${x_pos}px`;
            circle.style.top = `${y_pos}px`;
        }
        console.log(`x: ${x_pos}, y: ${y_pos}`);
    }
}
