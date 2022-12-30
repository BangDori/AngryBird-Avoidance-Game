function insertToTable(record: number[]) {
    let rank = document.querySelector(".rank-1");

    for(let i = 1; i <= record.length; i++) {
        if(rank?.classList.contains(NONE)) {
            rank.classList.remove(NONE);
        }
        
        let table = <Element>rank?.firstElementChild;
        table.innerHTML = `${i}`;

        table = <Element>table?.nextElementSibling;
        table.innerHTML = `${player.name}`;

        table = <Element>table?.nextElementSibling;
        table.innerHTML = `${invertToRecord(record[i-1])}`;

        rank = <Element>rank?.nextElementSibling;
    }
}

function invertToRecord(record: number): string {
    const minute = Math.floor(record / 60);
    const second = Math.floor(record % 60);

    return `${minute<10?`0${minute}`:minute}:${second<10?`0${second}`:second}`;
}