const circle = document.querySelector<HTMLElement>("#character");
var x_pos:number, y_pos:number;

// Player 명 작성
let player: Player;

function makePlayer() {    
    x_pos = window.innerWidth / 2;
    y_pos = window.innerHeight / 2;

    player = new Player(`${(<HTMLInputElement>document.querySelector("#username")).value}`, x_pos, y_pos);
}

class Player {
    public record: number[];
    public speed = 3;
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
            if(keyStates.right) this.x_pos += this.speed;
            else if(keyStates.left) this.x_pos -= this.speed;
    
            if(keyStates.up) this.y_pos -= this.speed;
            else if(keyStates.down) this.y_pos += this.speed;

            if(this.x_pos < 24) this.x_pos = 24;
            else if(this.x_pos > window.innerWidth - 24)
                this.x_pos = window.innerWidth - 24;

            if(this.y_pos < 24) this.y_pos = 24;
            else if(this.y_pos > window.innerHeight - 24)
                this.y_pos = window.innerHeight - 24;

            if(circle) {
                circle.style.left = `${this.x_pos}px`;
                circle.style.top = `${this.y_pos}px`;    
            }    
        }, 10);
    }

    public resetPlayerPosition() {
        this.x_pos = window.innerWidth / 2;
        this.y_pos = window.innerHeight / 2;
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