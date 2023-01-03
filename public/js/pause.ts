function clickPause() {
    modal?.classList.remove(NONE);
    stopTimer();
    stopEnemies();
    clearInterval(player.interval);
}

function goHome() {
    if(!start?.classList.contains(NONE)) start?.classList.add(NONE);
    else if(!record?.classList.contains(NONE)) record?.classList.add(NONE);

    menu?.classList.remove(NONE);
    resetTimer();
    circle?.classList.add(HIDDEN);
    resetEnemies();
}

function reStart() {
    if(died === true) {
        resetTimer();
        died = false;
        makePlayer();
    }

    interval = setInterval(startTimer, 1000);
    startEnemies();
    player.movePlayer();
}