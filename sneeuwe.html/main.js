let NS = false;
let RET = false;
let Sneeuw = true;
let Height = 5;

function checkLes() {
    const resultaatEl = document.getElementById('resultaat');

    if (NS === false && RET === false && Sneeuw === true && Height > 4) {
        console.log("online les!");
        resultaatEl.textContent = "online les!";
    } else {
        console.log("fysiek");
        resultaatEl.textContent = "fysiek";
    }
}
