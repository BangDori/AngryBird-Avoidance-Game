"use strict";
class Monster {
    constructor(type, name) {
        this.type = type;
        this.name = name;
        this.x_pos = 0;
        this.y_pos = 0;
        this.x_dir = 0;
        this.y_dir = 0;
        this.interval = 0;
        if (type === 'monsterA') {
            this.speed = 7;
            this.size = 30;
        }
        else if (type === 'monsterB') {
            this.speed = 5;
            this.size = 22.5;
        }
        else if (type === 'monsterC') {
            this.speed = 4;
            this.size = 17.5;
        }
        else {
            this.speed = 3;
            this.size = 15;
        }
        this.makeHTMLEnemy();
        monsters.addMonster(this);
    }
    makeHTMLEnemy() {
        const enemy = document.createElement("img");
        enemy.id = this.name;
        enemy.classList.add(`${this.type}`);
        enemy.classList.add("rotate");
        enemy.src = `img/${this.type}.png`;
        this.makeStartPosition(enemy);
    }
    makeStartPosition(enemy) {
        const startPosition = ["top", "right", "bottom", "left"];
        const loc = startPosition[Math.floor(Math.random() * 4)];
        enemy.style.position = "absolute";
        if (loc === 'top') {
            this.x_pos = Math.floor(Math.random() * (window.innerWidth - 50));
            this.y_pos = 0;
        }
        else if (loc === 'bottom') {
            this.x_pos = Math.floor(Math.random() * (window.innerWidth - 50));
            this.y_pos = window.innerHeight - 50;
        }
        else if (loc === 'left') {
            this.x_pos = 0;
            this.y_pos = Math.floor(Math.random() * (window.innerHeight - 50));
        }
        else {
            this.x_pos = window.innerWidth - 50;
            this.y_pos = Math.floor(Math.random() * (window.innerHeight - 50));
        }
        enemy.style.top = `${this.y_pos}px`;
        enemy.style.left = `${this.x_pos}px`;
        enemies === null || enemies === void 0 ? void 0 : enemies.appendChild(enemy);
        this.settingMove();
    }
    settingMove() {
        const dir = [-1, 1];
        this.x_dir = this.speed * dir[Math.floor(Math.random() * 2)];
        this.y_dir = this.speed * dir[Math.floor(Math.random() * 2)];
    }
}
class Monsters {
    constructor() {
        this.aCount = 0;
        this.bCount = 0;
        this.cCount = 0;
        this.dCount = 0;
        this.monsters = [];
        this.count = 0;
    }
    addMonster(monster) {
        if (monster.type === 'monsterA')
            this.aCount++;
        else if (monster.type === 'monsterB')
            this.bCount++;
        else if (monster.type === 'monsterC')
            this.cCount++;
        else if (monster.type === 'monsterD')
            this.dCount++;
        moveMonster(monster);
        this.checkMonster(monster);
        this.monsters.push(monster);
        this.count++;
        console.log(`monsterA = ${this.aCount}`);
        console.log(`monsterB = ${this.bCount}`);
        console.log(`monsterC = ${this.cCount}`);
        console.log(`monsterD = ${this.dCount}`);
    }
    checkMonster(monster) {
        if (this.aCount >= 1)
            clearInterval(monsterA);
        if (this.bCount >= 2)
            clearInterval(monsterB);
        if (this.cCount >= 5)
            clearInterval(monsterC);
        if (this.dCount >= 10)
            clearInterval(monsterD);
    }
    getMonsters() {
        return [...this.monsters];
    }
    getCount() {
        return this.count;
    }
    resetMonsters() {
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
let monsterA;
let monsterB;
let monsterC;
let monsterD;
function startEnemies() {
    let monster = enemies === null || enemies === void 0 ? void 0 : enemies.firstElementChild;
    while (monster) {
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
    let monster = enemies === null || enemies === void 0 ? void 0 : enemies.firstElementChild;
    while (monster) {
        monster.classList.remove("rotate");
        monster = monster.nextElementSibling;
    }
    clearInterval(monsterA);
    clearInterval(monsterB);
    clearInterval(monsterC);
    clearInterval(monsterD);
    monsters.getMonsters().forEach((monster) => {
        clearInterval(monster.interval);
    });
}
function resetEnemies() {
    while (enemies === null || enemies === void 0 ? void 0 : enemies.firstChild) {
        enemies.firstChild.remove();
    }
    monsters.resetMonsters();
}
function createRandomMonster(type) {
    // 한번씩 엄청 큰, 혹은 엄청 빠른 몬스터 소환해서 지나가게끔
}
function createMonster(type) {
    const monster = new Monster(type, `${type}-${monsters.getCount()}`);
}
function moveMonster(monster) {
    const mon = document.getElementById(`${monster.name}`);
    var bodyRect = document.body.getBoundingClientRect(), monRect = mon === null || mon === void 0 ? void 0 : mon.getBoundingClientRect(), x_pos, y_pos;
    if (monRect instanceof DOMRect) {
        y_pos = monRect.top - bodyRect.top;
        x_pos = monRect.left - bodyRect.left;
    }
    monster.interval = setInterval(() => {
        if (x_pos + monster.x_dir < 0 || x_pos + monster.x_dir > window.innerWidth) {
            monster.x_dir *= -1;
        }
        if (y_pos + monster.y_dir < 0 || y_pos + monster.y_dir > window.innerHeight) {
            monster.y_dir *= -1;
        }
        x_pos += monster.x_dir;
        y_pos += monster.y_dir;
        mon.style.top = `${y_pos}px`;
        mon.style.left = `${x_pos}px`;
        let x_dis = (x_pos + monster.size) - player.x_pos;
        let y_dis = (y_pos + monster.size) - player.y_pos;
        let distance = x_dis * x_dis + y_dis * y_dis;
        if (Math.sqrt(distance) <= Math.floor(monster.size) + 1) {
            dieGamer();
        }
    }, 10);
}
