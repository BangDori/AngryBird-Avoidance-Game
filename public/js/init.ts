const menu = document.querySelector("#menu"),
    start_button = menu?.querySelector(".start"),
    start = document.querySelector("#start"),
    history_button = menu?.querySelector(".history"),
    record = document.querySelector("#history"), // history
    pause = document.querySelector(".pause"),
    modal = document.querySelector(".js-modal"),
    restart = document.querySelector(".restart"),
    home = document.querySelectorAll(".home"),
    join = document.querySelector("#join"),
    direction = document.querySelector(".wrapper");
    
const ANI = "animation";
const NONE = "none";
const HIDDEN = "hidden";

function init() {
    start_button?.addEventListener("click", startGame);
    history_button?.addEventListener("click", openHistory);
    pause?.addEventListener("click", clickPause);
    restart?.addEventListener("click", () => {
        reStart();
        modal?.classList.add(NONE);
    });
    home.forEach((h) => {
        h?.addEventListener("click", () => {
            goHome();
            modal?.classList.add(NONE);

            if(!record?.classList.contains(NONE)) {
                record?.classList.add(NONE);
            }
        })
    })
    join?.addEventListener("click", (e) => {
        const userName = (<HTMLInputElement>document.querySelector("#naming")).value;

        if(userName.length < 1 || userName.length > 8) {
            alert('Input Name length: 0~8');
            e.preventDefault();
            e.stopPropagation();    
        }
    });
    makePlayer();
    // window?.addEventListener("keydown", Player.movePlayer);
    window?.addEventListener("keydown", (e) => {
        updateKeyStates(e.key, true);
    })
    window?.addEventListener("keyup", (e) => {
        updateKeyStates(e.key, false);
    })
}

init();