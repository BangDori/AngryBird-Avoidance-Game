
function goHome() {
    var nextSibling = menu?.nextElementSibling;
    while(nextSibling?.classList.contains(NONE))  {
        nextSibling = nextSibling.nextElementSibling;
    }

    nextSibling?.classList.add(NONE);
    menu?.classList.remove(NONE);
}

function reStart() {
    // game restart
}