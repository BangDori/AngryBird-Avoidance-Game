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
    public size?: number;

    constructor(
        public type: string,
        public name: string,
    ) {
        if(type === 'monsterA') {
            this.speed = 12;
            this.size = 30;
        }
        else if(type === 'monsterB') {
            this.speed = 8;
            this.size = 22.5;
        }
        else if(type === 'monsterC') {
            this.speed = 5;
            this.size = 17.5;
        }
        else {
            this.speed = 3;
            this.size = 15;
        }

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
            this.x_pos = Math.floor(Math.random() * (window.innerWidth - 50));
            this.y_pos = 0;
        } else if(loc === 'bottom') {
            this.x_pos = Math.floor(Math.random() * (window.innerWidth - 50));
            this.y_pos = window.innerHeight - 50;
        } else if(loc === 'left') {
            this.x_pos = 0;
            this.y_pos = Math.floor(Math.random() * (window.innerHeight - 50));
        } else {
            this.x_pos = window.innerWidth - 50;
            this.y_pos = Math.floor(Math.random() * (window.innerHeight - 50));
        }
    
        enemy.style.top = `${this.y_pos}px`;
        enemy.style.left = `${this.x_pos}px`;
    
        enemies?.appendChild(enemy);
        this.settingMove();
    }

    private settingMove() {
        const dir = [-1, 1];

        this.x_dir = this.speed! * dir[Math.floor(Math.random() * 2)];
        this.y_dir = this.speed! * dir[Math.floor(Math.random() * 2)];
    }
}

class Monsters {
    private monsters: Monster[]
    private count: number;
    private aCount = 0;
    private bCount = 0;
    private cCount = 0;
    private dCount = 0;

    constructor() {
        this.monsters = [];
        this.count = 0;
    }

    public addMonster(monster: Monster) {
        if(monster.type === 'monsterA') this.aCount++;
        else if(monster.type === 'monsterB') this.bCount++;
        else if(monster.type === 'monsterC') this.cCount++;
        else if(monster.type === 'monsterD') this.dCount++;

        moveMonster(monster);

        this.monsters.push(monster);
        this.count++;

        if(this.aCount >= 10) clearInterval(monsterA);
        else if(this.bCount >= 10) clearInterval(monsterB);
        else if(this.cCount >= 15) clearInterval(monsterC);
        else if(this.dCount >= 15) clearInterval(monsterD);
    }

    public getMonsters() {
        return [...this.monsters];
    }
    
    public getCount() {
        return this.count;
    }

    public resetMonsters() {
        this.monsters = [];
        this.count = 0;
        this.aCount = 0;
        this.bCount = 0;
        this.cCount = 0;
        this.dCount = 0;
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

    monsters.getMonsters().map((monster) => {
        moveMonster(monster);
    });

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

    monsters.resetMonsters();
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

        let x_dis = (x_pos+monster.size!) - player.x_pos;
        let y_dis = (y_pos+monster.size!) - player.y_pos;
        let distance = x_dis * x_dis + y_dis * y_dis;

        if(Math.sqrt(distance) <= Math.floor(monster.size!)+1) {
            dieGamer();
        }
    }, 10)
}