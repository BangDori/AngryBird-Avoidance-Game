"use strict";
function insertToTable(record) {
    let rank = document.querySelector(".rank-1");
    for (let i = 1; i <= record.length; i++) {
        if (rank === null || rank === void 0 ? void 0 : rank.classList.contains(NONE)) {
            rank.classList.remove(NONE);
        }
        let table = rank === null || rank === void 0 ? void 0 : rank.firstElementChild;
        table.innerHTML = `${i}`;
        table = table === null || table === void 0 ? void 0 : table.nextElementSibling;
        table.innerHTML = `${player.name}`;
        table = table === null || table === void 0 ? void 0 : table.nextElementSibling;
        table.innerHTML = `${invertToRecord(record[i - 1])}`;
        rank = rank === null || rank === void 0 ? void 0 : rank.nextElementSibling;
    }
}
function invertToRecord(record) {
    const minute = Math.floor(record / 60);
    const second = Math.floor(record % 60);
    return `${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}
