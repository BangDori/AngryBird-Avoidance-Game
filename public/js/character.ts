const circle = document.querySelector<HTMLElement>("#character");
var x_pos:number, y_pos:number;

// Player 명 작성
let player: Player;

function makePlayer() {    
    var bodyRect = document.body.getBoundingClientRect(),
        circleRect = circle?.getBoundingClientRect();

    if(circleRect instanceof DOMRect) {
        y_pos = circleRect.top - bodyRect.top;
        x_pos = circleRect.left - bodyRect.left;
    }

    player = new Player(`${(<HTMLInputElement>document.querySelector("#username")).value}`, x_pos, y_pos);
    player.movePlayer();
}

class Player {
    public record: number[];
    public speed = 5;
    public interval = 0;

    constructor(
        public name: string,
        public x_pos: number,
        public y_pos: number,
    ){
        this.record = [];
    }

    public insertRecord(record: number) {
        this.record.push(record);

        if(this.record.length > 1) {
            this.record.sort((one, two) => (one > two ? -1 : 1));
        }

        insertToTable(this.record);
    }

    public movePlayer() {
        this.interval = setInterval(() => {
            if(keyStates.right) x_pos += this.speed;
            else if(keyStates.left) x_pos -= this.speed;
    
            if(keyStates.up) y_pos -= this.speed;
            else if(keyStates.down) y_pos += this.speed;
    
            if(circle) {
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
}

function updateKeyStates(key: string, state: boolean) {
    if(key === 'ArrowRight') keyStates.right = state;
    else if(key === 'ArrowLeft') keyStates.left = state;
    else if(key === 'ArrowUp') keyStates.up = state;
    else if(key === 'ArrowDown') keyStates.down = state;
}