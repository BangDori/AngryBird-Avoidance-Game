function startGame() {
    menu?.classList.add(ANI);

    setTimeout(function() {
        menu?.classList.remove(ANI);
        menu?.classList.add(NONE);
        start?.classList.remove(NONE);
    }, 800)

    makePlayer();
    circle?.classList.remove(HIDDEN);
}

function openHistory() {
    menu?.classList.add(ANI);

    setTimeout(function() {
        menu?.classList.remove(ANI);
        menu?.classList.add(NONE);
        record?.classList.remove(NONE);
    }, 800)
}