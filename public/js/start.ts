function startGame() {
    menu?.classList.add(ANI);

    setTimeout(function() {
        menu?.classList.remove(ANI);
        menu?.classList.add(NONE);
        start?.classList.remove(NONE);
        circle?.classList.remove(HIDDEN);
    }, 800)

    interval = setInterval(() => { startTimer(); }, 1000);
}

function openHistory() {
    menu?.classList.add(ANI);

    setTimeout(function() {
        menu?.classList.remove(ANI);
        menu?.classList.add(NONE);
        record?.classList.remove(NONE);
    }, 800)
}