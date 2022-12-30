const circle = document.querySelector<HTMLElement>("#character");
const speed = 5;
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
    console.log(`${player.name} Created!`);
    // console.log(`Player pos(x: ${player.x_pos}, y: ${player.y_pos})`);
}

class Player {
    public record: number[];
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

    static movePlayer(e: any) {
        // console.log(e.key);
        switch(e.key) {
            // ArrowRight
            case 'ArrowRight': x_pos += speed; break;
            // ArrowLeft
            case 'ArrowLeft': x_pos -= speed; break;
            // ArrowUp
            case 'ArrowUp': y_pos -= speed; break;
            // ArrowDown
            case 'ArrowDown': y_pos += speed; break;
        }

        if(circle) {
            circle.style.left = `${x_pos}px`;
            circle.style.top = `${y_pos}px`;    
        }
        // console.log(`x: ${x_pos}, y: ${y_pos}`);
    }
}