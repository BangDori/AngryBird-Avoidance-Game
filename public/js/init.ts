const menu = document.querySelector("#menu"),
    start_button = menu?.querySelector(".start"),
    start = document.querySelector("#start"),
    history_button = menu?.querySelector(".history"),
    record = document.querySelector("#history"), // history
    pause = document.querySelector(".pause"),
    modal = document.querySelector(".js-modal"),
    restart = document.querySelector(".restart"),
    home = document.querySelectorAll(".home"),
    join = document.querySelector("#join");

const ANI = "animation";
const NONE = "none";

function init() {
    start_button?.addEventListener("click", startGame);
    history_button?.addEventListener("click", openHistory);
    pause?.addEventListener("click", () => {
        modal?.classList.remove(NONE);
    })
    restart?.addEventListener("click", () => {
        reStart();
        modal?.classList.add(NONE);
    });
    home.forEach((h) => {
        h?.addEventListener("click", () => {
            goHome();
            modal?.classList.add(NONE);    
        })
    })
    join?.addEventListener("click", (e) => {
        const userName = (<HTMLInputElement>document.querySelector("#naming")).value;

        console.log(userName.length);

        if(userName.length < 1 || userName.length > 8) {
            alert('Input Name length: 0~8');
            e.preventDefault();
            e.stopPropagation();    
        }
    });
}

init();