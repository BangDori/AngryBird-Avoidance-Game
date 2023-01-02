function clickPause() {
    modal?.classList.remove(NONE);
    stopTimer();
    stopEnemies();
    clearInterval(player.interval);
}

function goHome() {
    var nextSibling = menu?.nextElementSibling;
    while(nextSibling?.classList.contains(NONE))  {
        nextSibling = nextSibling.nextElementSibling;
    }

    nextSibling?.classList.add(NONE);
    menu?.classList.remove(NONE);
    resetTimer();
    circle?.classList.add(HIDDEN);
    resetEnemies();
}

function reStart() {
    if(died === true) {
        resetTimer();
        died = false;
    }

    interval = setInterval(startTimer, 1000);
    startEnemies();
    player.movePlayer();
}