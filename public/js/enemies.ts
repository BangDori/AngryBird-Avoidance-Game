interface MonsterInfo {
    type: string,
    speed?: number,
}

class Monster implements MonsterInfo {
    public speed?: number;
    public x_pos = 0;
    public y_pos = 0;
    public x_dir = 0;
    public y_dir = 0;
    public interval: number = 0;

    constructor(
        public type: string,
        public name: string,
    ) {
        if(type === 'monsterA') this.speed = 30;
        else if(type === 'monsterB') this.speed = 15;
        else if(type === 'monsterD') this.speed = 10;
        else this.speed = 5;

        this.makeHTMLEnemy();
        monsters.addMonster(this);
    }

    private makeHTMLEnemy() {
        const enemy = document.createElement("img");

        enemy.id = this.name;
        enemy.classList.add(`${this.type}`);
        enemy.classList.add("rotate");
    
        enemy.src = `img/${this.type}.png`;
        this.makeStartPosition(enemy);
    }

    private makeStartPosition(enemy: HTMLImageElement) {
        const startPosition = ["top", "right", "bottom", "left"];
        const loc = startPosition[Math.floor(Math.random() * 4)];
        enemy.style.position = "absolute";
    
        if(loc === 'top') {
            x_pos = Math.floor(Math.random() * (window.innerWidth - 50));
            y_pos = 0;
        } else if(loc === 'bottom') {
            x_pos = Math.floor(Math.random() * (window.innerWidth - 50));
            y_pos = window.innerHeight - 50;
        } else if(loc === 'left') {
            x_pos = 0;
            y_pos = Math.floor(Math.random() * (window.innerHeight - 50));
        } else {
            x_pos = window.innerWidth - 50;
            y_pos = Math.floor(Math.random() * (window.innerHeight - 50));
        }
    
        enemy.style.top = `${y_pos}px`;
        enemy.style.left = `${x_pos}px`;
    
        enemies?.appendChild(enemy);
        this.settingMove();
    }

    private settingMove() {
        const dir = [-1, 1];

        this.x_dir = speed * dir[Math.floor(Math.random() * 2)];
        this.y_dir = speed * dir[Math.floor(Math.random() * 2)];
    }
}

class Monsters {
    private monsters: Monster[]
    private count: number;

    constructor() {
        this.monsters = [];
        this.count = 0;
    }

    public addMonster(monster: Monster) {
        moveMonster(monster);

        this.monsters.push(monster);
        this.count++;
    }

    public getMonsters() {
        return [...this.monsters];
    }
    
    public getCount() {
        return this.count;
    }
}

const enemies = document.querySelector("#enemies");
const monsters = new Monsters();

let monsterA: number;
let monsterB: number;
let monsterC: number;
let monsterD: number;

function startEnemies() {
    let monster = enemies?.firstElementChild;
    while(monster) {
        monster.classList.add("rotate");

        monster = monster.nextElementSibling;
    }

    monsters.getMonsters().map((monster) => moveMonster(monster));

    monsterA = setInterval(() => {
        createMonster("monsterA");
    }, Math.floor(Math.random() * 3000 + 10000));

    monsterB = setInterval(() => {
        createMonster("monsterB");
    }, Math.floor(Math.random() * 3000 + 6000));
 
    monsterC = setInterval(() => {
        createMonster("monsterC");
    }, Math.floor(Math.random() * 3000 + 3000));

    monsterD = setInterval(() => {
        createMonster("monsterD");
    }, Math.floor(Math.random() * 2000 + 1000));
}

function stopEnemies() {
    let monster = enemies?.firstElementChild;
    while(monster) {
        monster.classList.remove("rotate");

        monster = monster.nextElementSibling;
    }

    clearInterval(monsterA);
    clearInterval(monsterB);
    clearInterval(monsterC);
    clearInterval(monsterD);

    monsters.getMonsters().forEach((monster) => {
        clearInterval(monster.interval);
    })
}

function resetEnemies() {
    while(enemies?.firstChild) {
        enemies.firstChild.remove();
    }
}

function createRandomMonster(type: string) {
    // 한번씩 엄청 큰, 혹은 엄청 빠른 몬스터 소환해서 지나가게끔
}

function createMonster(type: string) {
    const monster = new Monster(type, `${type}-${monsters.getCount()}`);
}

function moveMonster(monster: Monster) {
    const mon = document.getElementById(`${monster.name}`);

    var bodyRect = document.body.getBoundingClientRect(),
        monRect = mon?.getBoundingClientRect(),
        x_pos: number, y_pos: number;

    if(monRect instanceof DOMRect) {
        y_pos = monRect.top - bodyRect.top;
        x_pos = monRect.left - bodyRect.left;
    }

    monster.interval = setInterval(() => {
        if(x_pos + monster.x_dir < 0 || x_pos + monster.x_dir > window.innerWidth) {
            monster.x_dir *= -1;
        }
        
        if(y_pos + monster.y_dir < 0 || y_pos + monster.y_dir > window.innerHeight) {
            monster.y_dir *= -1;
        }

        x_pos += monster.x_dir;
        y_pos += monster.y_dir;

        (<HTMLElement>mon).style.top = `${y_pos}px`;
        (<HTMLElement>mon).style.left = `${x_pos}px`;
    }, 10)
}