function startGame() {
    menu?.classList.add(ANI);

    setTimeout(function() {
        menu?.classList.remove(ANI);
        menu?.classList.add(NONE);
        start?.classList.remove(NONE);
    }, 800)
}

function openHistory() {
    menu?.classList.add(ANI);

    setTimeout(function() {
        menu?.classList.remove(ANI);
        menu?.classList.add(NONE);
        record?.classList.remove(NONE);
    }, 800)
}