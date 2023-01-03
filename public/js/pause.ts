function clickPause() {
    console.log(player);
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
    lock = false;
}

function reStart() {
    if(died === true) {
        resetTimer();
        player.resetPlayerPosition();
        died = false;
    }

    interval = setInterval(startTimer, 1000);
    startEnemies();
    player.movePlayer();
}